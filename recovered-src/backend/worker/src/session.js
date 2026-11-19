var session_exports = /* @__PURE__ */ __exportAll({
	endSession: () => endSession,
	isSuspended: () => isSuspended,
	jsonUser: () => jsonUser,
	parseCookies: () => parseCookies,
	setting: () => setting$1,
	suspensionText: () => suspensionText
});
var AUTH_DDL = [
	`CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY, created TEXT, user_id INTEGER, last_seen TEXT, ip TEXT DEFAULT '', ua TEXT DEFAULT '', hashed INTEGER DEFAULT 0)`,
	`CREATE TABLE IF NOT EXISTS email_tokens(token TEXT PRIMARY KEY, user_id INTEGER NOT NULL, kind TEXT NOT NULL, email TEXT DEFAULT '', expires TEXT NOT NULL, used INTEGER DEFAULT 0, created TEXT)`,
	`CREATE TABLE IF NOT EXISTS settings(key TEXT PRIMARY KEY, value TEXT)`,
	`CREATE TABLE IF NOT EXISTS submissions(id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, kind TEXT NOT NULL, target_id INTEGER, payload TEXT, status TEXT NOT NULL DEFAULT 'pending', note TEXT DEFAULT '', created TEXT, decided TEXT, decided_by INTEGER, result_id INTEGER)`,
	`CREATE TABLE IF NOT EXISTS owners(user_id INTEGER NOT NULL, company_id INTEGER NOT NULL, created TEXT, PRIMARY KEY(user_id, company_id))`
];
var schemaReady = null;
async function ensureAuthSchema(db) {
	schemaReady ||= /* @__PURE__ */ new WeakSet();
	if (schemaReady.has(db)) return;
	for (const sql of AUTH_DDL) await db.prepare(sql).run();
	const cols = await db.prepare("PRAGMA table_info(users)").all();
	const have = new Set((cols.results || []).map((c) => c.name));
	for (const [name, typ] of [
		["totp", "TEXT DEFAULT ''"],
		["totp_step", "INTEGER DEFAULT 0"],
		["recovery", "TEXT DEFAULT '[]'"],
		["suspended_until", "TEXT DEFAULT ''"],
		["suspend_reason", "TEXT DEFAULT ''"]
	]) if (!have.has(name)) try {
		await db.prepare(`ALTER TABLE users ADD COLUMN ${name} ${typ}`).run();
	} catch {}
	schemaReady.add(db);
}
function emptyAuth(ip = "", https = false) {
	return {
		user: null,
		role: "",
		is_admin: false,
		logged: false,
		perms: /* @__PURE__ */ new Set(),
		see_private: false,
		needs_2fa: false,
		ip,
		https
	};
}
function clientIp$2(request) {
	return request.headers.get("CF-Connecting-IP") || (request.headers.get("X-Forwarded-For") || "").split(",")[0].trim() || "127.0.0.1";
}
function isHttps(request, env) {
	if (envFlag(env, "EP_SECURE_COOKIES")) return true;
	if (request.headers.get("X-Forwarded-Proto") === "https") return true;
	if ((request.headers.get("CF-Visitor") || "").includes("\"https\"")) return true;
	return new URL(request.url).protocol === "https:";
}
function parseCookies(request) {
	const out = {};
	for (const part of (request.headers.get("Cookie") || "").split(";")) {
		if (!part.includes("=")) continue;
		const [k, ...rest] = part.trim().split("=");
		out[k] = rest.join("=");
	}
	return out;
}
function sidCookie(tok, https, maxAge = 7776e3) {
	return `hi_sid=${tok}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}${https ? "; Secure" : ""}`;
}
function clearSidCookie(https) {
	return `hi_sid=; Path=/; Max-Age=0${https ? "; Secure" : ""}`;
}
function parseTs(s) {
	if (!s) return null;
	const t = Date.parse(String(s).slice(0, 19).replace(" ", "T"));
	return Number.isFinite(t) ? t : null;
}
function isSuspended(u) {
	const until = u?.suspended_until || "";
	if (!until) return false;
	if (until === "forever") return true;
	const t = parseTs(until);
	return Boolean(t && t > Date.now());
}
function suspensionText(u) {
	return `This account is suspended ${u.suspended_until === "forever" ? "until further notice" : `until ${String(u.suspended_until).slice(0, 10)}`}. Reason: ${u.suspend_reason || "No reason given."}`;
}
function twoFactorRequired(_env, _u) {
	return false;
}
function prefsOf(u) {
	try {
		return JSON.parse(u?.prefs || "{}");
	} catch {
		return {};
	}
}
function permsOf(u, isAdmin) {
	if (isAdmin) return new Set(CONTRIB_PERMS.map(([k]) => k));
	if (u?.role !== "contributor") return /* @__PURE__ */ new Set();
	const raw = prefsOf(u).perms;
	return new Set(Array.isArray(raw) ? raw.map(String) : []);
}
function can(auth, perm) {
	return auth.is_admin || auth.perms.has(perm);
}
function buildAuth(user, env, ip, https) {
	const auth = emptyAuth(ip, https);
	if (!user) return auth;
	auth.user = user;
	let role = user.role || "";
	auth.is_admin = role === "admin";
	auth.perms = permsOf(user, auth.is_admin);
	if (twoFactorRequired(env, user) && !user.totp) {
		auth.is_admin = false;
		auth.perms = /* @__PURE__ */ new Set();
		role = "user";
		auth.needs_2fa = true;
	}
	auth.role = role;
	auth.logged = auth.is_admin || role === "contributor";
	auth.see_private = auth.is_admin || auth.perms.has("private");
	return auth;
}
async function pruneExpired(db) {
	const t = Date.now();
	const old = (/* @__PURE__ */ new Date(t - 7776e6)).toISOString().slice(0, 19).replace("T", " ");
	const idle = (/* @__PURE__ */ new Date(t - 7776e6)).toISOString().slice(0, 19).replace("T", " ");
	await db.prepare("DELETE FROM sessions WHERE created < ? OR COALESCE(last_seen, created) < ?").bind(old, idle).run();
}
async function newSession(db, uid, ip, ua) {
	await pruneExpired(db);
	const tok = token();
	const ts = nowStamp();
	await db.prepare("INSERT INTO sessions(token, created, user_id, last_seen, ip, ua, hashed) VALUES(?,?,?,?,?,?,1)").bind(tokenHash(tok), ts, uid, ts, ip, (ua || "").slice(0, 200)).run();
	return tok;
}
async function sessionUser(db, tok, ip) {
	if (!tok) return null;
	const th = tokenHash(tok);
	const row = await db.prepare("SELECT u.*, s.created AS s_created, s.last_seen AS s_seen FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=?").bind(th).first();
	if (!row) return null;
	const created = parseTs(row.s_created);
	const seen = parseTs(row.s_seen || row.s_created);
	const t = Date.now();
	if (row.disabled || isSuspended(row) || !created || t - created > 7776e6 || !seen || t - seen > 7776e6) {
		await db.prepare("DELETE FROM sessions WHERE token=?").bind(th).run();
		return null;
	}
	let refresh = false;
	if (t - (seen || 0) > 6e5) {
		await db.prepare("UPDATE sessions SET last_seen=?, ip=? WHERE token=?").bind(nowStamp(), ip, th).run();
		refresh = true;
	}
	const u = {
		...row,
		_session: th,
		_refreshSid: refresh
	};
	delete u.s_created;
	delete u.s_seen;
	return u;
}
async function endSession(db, tok) {
	if (!tok) return;
	await db.prepare("DELETE FROM sessions WHERE token=?").bind(tokenHash(tok)).run();
}
async function endOtherSessions(db, uid, keep = "") {
	await db.prepare("DELETE FROM sessions WHERE user_id=? AND token<>?").bind(uid, keep || "").run();
}
async function loadAuth(request, env) {
	await ensureAuthSchema(env.DB);
	await ensureExtraSchema(env.DB);
	const ip = clientIp$2(request);
	const https = isHttps(request, env);
	const tok = parseCookies(request).hi_sid;
	const user = tok ? await sessionUser(env.DB, tok, ip) : null;
	const auth = buildAuth(user, env, ip, https);
	if (tok && user && user._refreshSid) auth.setCookies = [sidCookie(tok, https)];
	return auth;
}
function safeNext(nxt) {
	const n = nxt || "/";
	if (!n.startsWith("/") || n.startsWith("//") || n.startsWith("/\\")) return "/";
	return n;
}
async function getUserById(db, id) {
	const row = await db.prepare("SELECT * FROM users WHERE id=?").bind(id).first();
	return row ? row : null;
}
async function setting$1(db, key) {
	try {
		return (await db.prepare("SELECT value FROM settings WHERE key=?").bind(key).first())?.value || "";
	} catch {
		return "";
	}
}
async function setSetting(db, key, value) {
	await db.prepare("INSERT INTO settings(key, value) VALUES(?, ?) ON CONFLICT(key) DO UPDATE SET value=excluded.value").bind(key, value).run();
}
async function signupMode(db) {
	const m = await setting$1(db, "signup_mode");
	if (m === "open" || m === "code" || m === "closed") return m;
	return await setting$1(db, "signup_code") ? "code" : "open";
}
async function createUser(db, username, pw, role = "user") {
	const { hashPw } = await import("./assets/crypto-FYYfVqc8.js").then((n) => n.t);
	const { USERNAME_RE } = await import("./assets/catalog-6mDCor_N.js").then((n) => n.G);
	username = username.trim();
	if (!USERNAME_RE.test(username)) return { error: "Username: 2-32 letters, numbers, dot, dash or underscore." };
	if (pw && pw.length < 8) return { error: "Password: at least 8 characters." };
	if (await db.prepare("SELECT 1 FROM users WHERE username=?").bind(username).first()) return { error: "That username is taken." };
	const res = await db.prepare("INSERT INTO users(username,name,pw,role,created) VALUES(?,?,?,?,?)").bind(username, username.slice(0, 60), pw ? hashPw(pw) : "", role, nowStamp()).run();
	return { id: Number(res.meta.last_row_id) };
}
var EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
function normEmail(email) {
	return email.trim().toLowerCase();
}
function emailOf(u) {
	const e = prefsOf(u || null).email;
	return typeof e === "string" ? normEmail(e) : "";
}
async function getUserByEmail(db, email) {
	const want = normEmail(email);
	if (!want || !EMAIL_RE.test(want)) return null;
	const { results } = await db.prepare("SELECT * FROM users WHERE disabled=0").all();
	for (const row of results || []) if (emailOf(row) === want) return row;
	return null;
}
async function setUserEmail(db, id, email, verified = false) {
	const u = await getUserById(db, id);
	if (!u) return;
	const pr = prefsOf(u);
	pr.email = normEmail(email);
	pr.email_verified = verified;
	await db.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), id).run();
}
async function uniqueUsername(db, base) {
	const { USERNAME_RE } = await import("./assets/catalog-6mDCor_N.js").then((n) => n.G);
	let stem = base.toLowerCase().replace(/[^a-z0-9._-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 28);
	if (stem.length < 2) stem = "user";
	if (!USERNAME_RE.test(stem)) stem = ("u-" + stem).slice(0, 32);
	let name = stem;
	let n = 0;
	while (await db.prepare("SELECT 1 FROM users WHERE username=?").bind(name).first()) {
		n += 1;
		name = `${stem.slice(0, Math.max(1, 32 - String(n).length - 1))}-${n}`;
	}
	return name;
}
function jsonUser(auth, env) {
	const u = auth.user;
	const pr = prefsOf(u);
	return {
		user: u ? {
			id: u.id,
			username: u.username,
			name: u.name,
			role: u.role,
			created: u.created,
			profile: safeJson(u.profile),
			prefs: {
				email: typeof pr.email === "string" ? pr.email : "",
				email_verified: !!pr.email_verified,
				profile_vis: pr.profile_vis || "members",
				walker: pr.walker || null,
				perms: Array.from(auth.perms)
			},
			totp: Boolean(u.totp)
		} : null,
		is_admin: auth.is_admin,
		logged: auth.logged,
		role: auth.role,
		perms: Array.from(auth.perms),
		see_private: auth.see_private,
		needs_2fa: auth.needs_2fa,
		can: Object.fromEntries([
			"create",
			"review",
			"claims",
			"meet",
			"private",
			"home"
		].map((k) => [k, can(auth, k)])),
		signup_mode: void 0,
		turnstile_sitekey: env.EP_TURNSTILE_SITEKEY && env.EP_TURNSTILE_SECRET ? env.EP_TURNSTILE_SITEKEY : ""
	};
}
function safeJson(s) {
	try {
		return JSON.parse(s || "{}");
	} catch {
		return {};
	}
}
