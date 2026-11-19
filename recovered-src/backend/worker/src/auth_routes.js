function wantsJson(c) {
	const acc = c.req.header("Accept") || "";
	const ct = c.req.header("Content-Type") || "";
	return acc.includes("application/json") || ct.includes("application/json") || c.req.path.startsWith("/api/");
}
async function readBody(c) {
	if ((c.req.header("Content-Type") || "").includes("application/json")) try {
		const j = await c.req.json();
		const out = {};
		for (const [k, v] of Object.entries(j)) out[k] = v == null ? "" : String(v);
		return out;
	} catch {
		return {};
	}
	try {
		const fd = await c.req.parseBody();
		const out = {};
		for (const [k, v] of Object.entries(fd)) out[k] = typeof v === "string" ? v : "";
		if (Array.isArray(fd.perm)) {}
		return out;
	} catch {
		return {};
	}
}
async function formAll(c) {
	if ((c.req.header("Content-Type") || "").includes("application/json")) {
		const j = await c.req.json();
		const out = {};
		for (const [k, v] of Object.entries(j)) out[k] = Array.isArray(v) ? v.map(String) : [String(v ?? "")];
		return out;
	}
	const raw = await c.req.parseBody({ all: true });
	const out = {};
	for (const [k, v] of Object.entries(raw)) if (Array.isArray(v)) out[k] = v.filter((x) => typeof x === "string");
	else if (typeof v === "string") out[k] = [v];
	return out;
}
function fail(c, error, status = 400, extra = {}) {
	if (wantsJson(c)) return c.json({
		error,
		...extra
	}, status);
	const path = c.req.path.startsWith("/join") ? "/join" : c.req.path.startsWith("/login/code") ? "/login/code" : "/login";
	const u = new URL(path, c.req.url);
	u.searchParams.set("error", error);
	const nxt = c.req.query("next");
	if (nxt) u.searchParams.set("next", nxt);
	return c.redirect(u.pathname + u.search);
}
function okRedirect(c, nxt, headers, body) {
	if (wantsJson(c)) {
		const res = c.json({
			ok: true,
			next: nxt,
			...body
		});
		for (const [, v] of Object.entries(headers)) res.headers.append("Set-Cookie", v);
		return res;
	}
	const res = c.redirect(nxt);
	for (const [, v] of Object.entries(headers)) res.headers.append("Set-Cookie", v);
	return res;
}
async function postLogin(c) {
	const env = c.env;
	const g = await readBody(c);
	const ip = c.get("auth").ip;
	const https = c.get("auth").https;
	if (!await env.DB.prepare("SELECT 1 FROM users LIMIT 1").first()) return fail(c, "Create the first admin account from the join page.");
	if (!await turnstileOk(env, g["cf-turnstile-response"] || "", ip)) return fail(c, "Please complete the check and try again.");
	const email = normEmail(g.email || "");
	if (!EMAIL_RE.test(email)) return fail(c, "Enter the email address on your account.");
	const existing = await getUserByEmail(env.DB, email);
	if (existing && isSuspended(existing)) return fail(c, suspensionText(existing), 403);
	if (existing) {
		const issued = await issueEmailCode(env, c.req.raw, {
			kind: "login",
			email,
			username: "",
			next: safeNext(g.next)
		}, https);
		if ("error" in issued) return fail(c, issued.error, issued.status);
		return okRedirect(c, "/login?sent=1", { "Set-Cookie": issued.cookies[0] }, {
			sent: true,
			message: SENT_OK
		});
	}
	return okRedirect(c, "/login?sent=1", {}, {
		sent: true,
		message: SENT_OK
	});
}
async function postLoginCode(c) {
	const env = c.env;
	const g = await readBody(c);
	const https = c.get("auth").https;
	const used = await consumeEmailCode(env, c.req.raw, g.code || "");
	if ("error" in used) return fail(c, used.error, used.status);
	const { pending } = used;
	const ip = c.get("auth").ip;
	let user = await getUserByEmail(env.DB, pending.email);
	if (pending.kind === "join") {
		if (!user) {
			const mode = await signupMode(env.DB);
			const hasUsers = await env.DB.prepare("SELECT 1 FROM users LIMIT 1").first();
			if (!hasUsers) {} else if (mode === "closed") return fail(c, "Sign-up is closed.");
			const role = hasUsers ? "user" : "admin";
			const made = await createUser(env.DB, pending.username || "", "", role);
			if (made.error || !made.id) return fail(c, made.error || "Could not create the account.");
			await setUserEmail(env.DB, made.id, pending.email, true);
			user = await getUserById(env.DB, made.id);
		} else if (!emailOf(user)) await setUserEmail(env.DB, user.id, pending.email, true);
	}
	if (!user || user.disabled) return fail(c, "That code is not valid or has expired.");
	if (isSuspended(user)) return fail(c, suspensionText(user), 403);
	const tok = await newSession(env.DB, user.id, ip, c.req.header("User-Agent") || "");
	let nxt = safeNext(pending.next || g.next);
	let prof = {};
	try {
		prof = JSON.parse(user.profile || "{}");
	} catch {}
	if (pending.kind === "join") nxt = "/account?welcome=1";
	else if (user.role !== "admin" && !Object.keys(prof).length && (nxt === "/" || !pending.next)) nxt = "/account?welcome=1";
	return okRedirect(c, nxt, {
		"Set-Cookie": sidCookie(tok, https),
		"Set-Cookie-2": clearPendingAuth(https)
	});
}
async function postJoin(c) {
	const env = c.env;
	const g = await readBody(c);
	const hasUsers = await env.DB.prepare("SELECT 1 FROM users LIMIT 1").first();
	const mode = await signupMode(env.DB);
	if (!hasUsers) {} else if (mode === "closed") return fail(c, "Sign-up is closed.");
	else if (mode === "code") {
		const code = await (await Promise.resolve().then(() => session_exports)).setting(env.DB, "signup_code");
		const a = (g.code || "").trim().toLowerCase();
		const b = (code || "").toLowerCase();
		if (!timingEqual(a, b)) return fail(c, "That code is not valid.", 401);
	}
	const ip = c.get("auth").ip;
	const https = c.get("auth").https;
	JOIN_IP.limit = envNumber(env, "EP_JOIN_PER_HOUR", 5);
	if (JOIN_IP.blocked(ip)) return fail(c, "Too many new accounts from here. Try again later.", 429);
	if (!await turnstileOk(env, g["cf-turnstile-response"] || "", ip)) return fail(c, "Please complete the check and try again.");
	const email = normEmail((g.email || "").slice(0, 200));
	if (!EMAIL_RE.test(email)) return fail(c, "Enter a valid email address.");
	if (g.terms !== "1") return fail(c, "Please agree to the terms.");
	const existing = await getUserByEmail(env.DB, email);
	if (existing) {
		if (isSuspended(existing)) return fail(c, suspensionText(existing), 403);
		const issued = await issueEmailCode(env, c.req.raw, {
			kind: "login",
			email,
			username: "",
			next: "/account?welcome=1"
		}, https);
		if ("error" in issued) return fail(c, issued.error, issued.status);
		return okRedirect(c, "/login?sent=1", { "Set-Cookie": issued.cookies[0] }, {
			sent: true,
			message: SENT_OK
		});
	}
	const { USERNAME_RE } = await import("./assets/catalog-6mDCor_N.js").then((n) => n.G);
	const username = (g.username || "").trim();
	if (!USERNAME_RE.test(username)) return fail(c, "Username: 2-32 letters, numbers, dot, dash or underscore.");
	if (await env.DB.prepare("SELECT 1 FROM users WHERE username=?").bind(username).first()) return fail(c, "That username is taken.");
	JOIN_IP.hit(ip);
	const issued = await issueEmailCode(env, c.req.raw, {
		kind: "join",
		email,
		username,
		next: "/account?welcome=1"
	}, https);
	if ("error" in issued) return fail(c, issued.error, issued.status);
	return okRedirect(c, "/login?sent=1", { "Set-Cookie": issued.cookies[0] }, {
		sent: true,
		message: SENT_OK
	});
}
async function postLogout(c) {
	const { endSession, parseCookies } = await Promise.resolve().then(() => session_exports);
	const tok = parseCookies(c.req.raw).hi_sid;
	await endSession(c.env.DB, tok);
	const https = c.get("auth").https;
	return okRedirect(c, "/", { "Set-Cookie": clearSidCookie(https) });
}
async function authConfig(c) {
	const mode = await signupMode(c.env.DB);
	return c.json({
		signup_mode: mode,
		turnstile: turnstileOn(c.env),
		turnstile_sitekey: turnstileOn(c.env) ? c.env.EP_TURNSTILE_SITEKEY : "",
		has_users: Boolean(await c.env.DB.prepare("SELECT 1 FROM users LIMIT 1").first()),
		oauth: oauthEnabled(c.env),
		passwordless: true
	});
}
