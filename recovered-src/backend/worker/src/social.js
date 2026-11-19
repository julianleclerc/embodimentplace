async function isOwner(db, userId, companyId) {
	const row = await db.prepare("SELECT 1 AS n FROM owners WHERE user_id=? AND company_id=?").bind(userId, companyId).first();
	return Boolean(row);
}
async function ownedCompanies(db, userId) {
	const { results } = await db.prepare("SELECT r.* FROM records r JOIN owners o ON o.company_id=r.id WHERE o.user_id=? ORDER BY r.name COLLATE NOCASE").bind(userId).all();
	return (results || []).map((r) => loadRow(r));
}
function emailOk(user) {
	if (!user) return false;
	try {
		const p = JSON.parse(user.prefs || "{}");
		return Boolean(p.email_verified || p.email_ok || p.verified);
	} catch {
		return false;
	}
}
async function needsVerified(c) {
	const auth = c.get("auth");
	if (!auth.user || auth.is_admin) return false;
	if (!await mailConfigured(c.env.DB, c.env)) return false;
	if (emailOk(auth.user)) return false;
	return true;
}
async function checkText(db, text, auth) {
	if (auth.logged) return "";
	const words = (await setting$1(db, "spam_blocklist") || "").split(/\n+/).map((w) => w.trim().toLowerCase()).filter(Boolean);
	const low = text.toLowerCase();
	for (const w of words) if (w && low.includes(w)) return "This message can't be posted.";
	const links = text.match(/https?:\/\/|www\./gi) || [];
	const created = auth.user?.created ? Date.parse(String(auth.user.created).replace(" ", "T")) : 0;
	if (links.length && created && Date.now() - created < 6048e5) return "Links can't be posted in the first week.";
	if (links.length > 2) return "Please include at most two links.";
	return "";
}
async function visible(db, auth, row) {
	if (!row) return false;
	if (!Number(row.private || 0)) return true;
	return Boolean(auth.see_private || auth.logged);
}
var TOGGLE = {
	like: {
		table: "likes",
		col: "record_id"
	},
	save: {
		table: "saves",
		col: "record_id"
	},
	follow: {
		table: "follows",
		col: "company_id"
	}
};
async function apiToggle(c, kind, ridRaw) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const spec = TOGGLE[kind];
	if (!spec) return c.json({ error: "not found" }, 404);
	const rid = Number(ridRaw);
	const row = await c.env.DB.prepare("SELECT * FROM records WHERE id=?").bind(rid).first();
	if (!row || !await visible(c.env.DB, auth, row)) return c.json({ error: "not found" }, 404);
	const rec = loadRow(row);
	if (kind === "follow" && !ORG_TYPES_LIST.includes(rec.type)) return c.json({ error: "not found" }, 404);
	const exists = await c.env.DB.prepare(`SELECT 1 AS n FROM ${spec.table} WHERE user_id=? AND ${spec.col}=?`).bind(auth.user.id, rid).first();
	if (exists) await c.env.DB.prepare(`DELETE FROM ${spec.table} WHERE user_id=? AND ${spec.col}=?`).bind(auth.user.id, rid).run();
	else await c.env.DB.prepare(`INSERT INTO ${spec.table}(user_id,${spec.col},created) VALUES(?,?,?)`).bind(auth.user.id, rid, nowStamp()).run();
	const count = Number((await c.env.DB.prepare(`SELECT COUNT(*) AS n FROM ${spec.table} WHERE ${spec.col}=?`).bind(rid).first())?.n || 0);
	return c.json({
		on: !exists,
		count
	});
}
async function postComment(c, ridRaw) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) {
		if (c.req.header("accept")?.includes("json") || c.req.path.startsWith("/api/")) return c.json({ error: "Log in first." }, 401);
		return c.redirect("/login");
	}
	const rid = Number(ridRaw);
	const row = await c.env.DB.prepare("SELECT * FROM records WHERE id=?").bind(rid).first();
	if (!row || !await visible(c.env.DB, auth, row)) return notFound(c);
	const rec = loadRow(row);
	if (!COMMENTABLE.includes(rec.type)) return notFound(c);
	const all = await formAll(c);
	const body = ((all.body || [""]).slice(-1)[0] || "").trim().slice(0, 2e3);
	const back = `/r/${rec.slug}`;
	const json = c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("application/json");
	if (body && await needsVerified(c)) return json ? c.json({ error: "Confirm your email first: see Account, then Settings." }, 403) : c.redirect(back + "?cerr=verify#comments");
	if (body && !auth.logged && !await turnstileOk(c.env, (all["cf-turnstile-response"] || [""]).slice(-1)[0] || "", auth.ip)) return json ? c.json({ error: "Please complete the check." }, 400) : c.redirect(back + "?cerr=check#comments");
	const problem = body ? await checkText(c.env.DB, body, auth) : "";
	if (problem) return json ? c.json({ error: problem }, 400) : c.redirect(back + `?cerr=${encodeURIComponent(problem)}#comments`);
	if (body) {
		const last = await c.env.DB.prepare("SELECT MAX(created) AS t FROM comments WHERE user_id=?").bind(auth.user.id).first();
		if (!(last?.t && Date.now() - Date.parse(String(last.t).replace(" ", "T")) < 5e3)) {
			const status = can(auth, "review") ? "approved" : "pending";
			await c.env.DB.prepare("INSERT INTO comments(record_id,user_id,body,status,created) VALUES(?,?,?,?,?)").bind(rec.id, auth.user.id, body, status, nowStamp()).run();
		}
	}
	if (json) {
		const items = await commentsFor(c.env.DB, rec.id, auth);
		return c.json({
			ok: true,
			comments: items,
			next: back + "#comments"
		});
	}
	return c.redirect(back + "#comments");
}
async function postCommentDelete(c, cidRaw) {
	const auth = c.get("auth");
	if (!auth.user) return c.redirect("/login");
	const cid = Number(cidRaw);
	const row = await c.env.DB.prepare("SELECT c.*, r.slug FROM comments c JOIN records r ON r.id=c.record_id WHERE c.id=?").bind(cid).first();
	if (row && (can(auth, "review") || row.user_id === auth.user.id)) {
		await c.env.DB.prepare("DELETE FROM comments WHERE id=?").bind(row.id).run();
		if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("application/json") || (c.req.header("accept") || "").includes("json")) return c.json({
			ok: true,
			next: `/r/${row.slug}#comments`
		});
		return c.redirect(`/r/${row.slug}#comments`);
	}
	return notFound(c);
}
async function commentsFor(db, rid, auth) {
	const { results } = await db.prepare(`SELECT c.id, c.body, c.created, c.status, c.user_id, u.name AS uname, u.username
     FROM comments c LEFT JOIN users u ON u.id=c.user_id
     WHERE c.record_id=? AND (c.status='approved' OR (? AND (c.user_id=? OR ?)))
     ORDER BY c.id`).bind(rid, auth.user ? 1 : 0, auth.user?.id || 0, can(auth, "review") ? 1 : 0).all();
	return (results || []).map((r) => {
		const x = r;
		return {
			id: x.id,
			name: x.uname || x.username || "Member",
			body: x.body,
			created: x.created,
			status: x.status,
			mine: auth.user?.id === x.user_id
		};
	});
}
async function socialState(db, auth, ids) {
	const empty = {
		likes: /* @__PURE__ */ new Map(),
		comments: /* @__PURE__ */ new Map(),
		liked: /* @__PURE__ */ new Set(),
		saved: /* @__PURE__ */ new Set(),
		following: /* @__PURE__ */ new Set(),
		watching: /* @__PURE__ */ new Set()
	};
	if (!ids.length) return empty;
	const ph = ids.map(() => "?").join(",");
	const count = async (table, col) => {
		const { results } = await db.prepare(`SELECT ${col} AS id, COUNT(*) AS n FROM ${table} WHERE ${col} IN (${ph}) GROUP BY ${col}`).bind(...ids).all();
		const m = /* @__PURE__ */ new Map();
		for (const r of results || []) m.set(Number(r.id), Number(r.n));
		return m;
	};
	const likes = await count("likes", "record_id");
	const comments = await count("comments", "record_id");
	const liked = /* @__PURE__ */ new Set();
	const saved = /* @__PURE__ */ new Set();
	const following = /* @__PURE__ */ new Set();
	const watching = /* @__PURE__ */ new Set();
	if (auth.user) {
		const mark = async (sql, set, ...extra) => {
			const { results } = await db.prepare(sql).bind(...extra, ...ids).all();
			for (const r of results || []) set.add(Number(r.id));
		};
		await mark(`SELECT record_id AS id FROM likes WHERE user_id=? AND record_id IN (${ph})`, liked, auth.user.id);
		await mark(`SELECT record_id AS id FROM saves WHERE user_id=? AND record_id IN (${ph})`, saved, auth.user.id);
		await mark(`SELECT company_id AS id FROM follows WHERE user_id=? AND company_id IN (${ph})`, following, auth.user.id);
		await mark(`SELECT CAST(ref AS INTEGER) AS id FROM watch_sources WHERE user_id=? AND kind='record' AND CAST(ref AS INTEGER) IN (${ph})`, watching, auth.user.id);
	}
	return {
		likes,
		comments,
		liked,
		saved,
		following,
		watching
	};
}
async function postWatch(c, slug) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) return c.redirect("/login?next=/r/" + slug);
	const row = await c.env.DB.prepare("SELECT id, type, private, slug FROM records WHERE slug=?").bind(slug).first();
	if (!row || !await visible(c.env.DB, auth, row)) return notFound(c);
	if (ORG_TYPES_LIST.includes(row.type)) {
		if (await c.env.DB.prepare("SELECT 1 AS n FROM follows WHERE user_id=? AND company_id=?").bind(auth.user.id, row.id).first()) await c.env.DB.prepare("DELETE FROM follows WHERE user_id=? AND company_id=?").bind(auth.user.id, row.id).run();
		else await c.env.DB.prepare("INSERT INTO follows(user_id,company_id,created) VALUES(?,?,?)").bind(auth.user.id, row.id, nowStamp()).run();
	} else if (await c.env.DB.prepare("SELECT 1 AS n FROM watch_sources WHERE user_id=? AND kind='record' AND ref=?").bind(auth.user.id, String(row.id)).first()) await c.env.DB.prepare("DELETE FROM watch_sources WHERE user_id=? AND kind='record' AND ref=?").bind(auth.user.id, String(row.id)).run();
	else await c.env.DB.prepare("INSERT OR IGNORE INTO watch_sources(user_id,kind,ref,created) VALUES(?,?,?,?)").bind(auth.user.id, "record", String(row.id), nowStamp()).run();
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("application/json")) return c.json({
		ok: true,
		next: "/r/" + slug
	});
	const ref = new URL(c.req.header("referer") || "http://local/r/" + slug).pathname;
	return c.redirect(ref.startsWith("/watchlist") ? ref : "/r/" + slug);
}
async function apiUfollow(c, uidRaw) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const uid = Number(uidRaw);
	if (!uid || uid === auth.user.id) return c.json({ error: "not found" }, 404);
	const ex = await c.env.DB.prepare("SELECT 1 AS n FROM user_follows WHERE follower_id=? AND followee_id=?").bind(auth.user.id, uid).first();
	if (ex) await c.env.DB.prepare("DELETE FROM user_follows WHERE follower_id=? AND followee_id=?").bind(auth.user.id, uid).run();
	else await c.env.DB.prepare("INSERT OR IGNORE INTO user_follows(follower_id,followee_id,created) VALUES(?,?,?)").bind(auth.user.id, uid, nowStamp()).run();
	return c.json({ on: !ex });
}
var REPORT_REASONS = [
	"Spam",
	"Harassment",
	"Misinformation",
	"Offensive",
	"Copyright",
	"Other"
];
async function postReport(c) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const all = await formAll(c).catch(async () => {
		const b = await readBody(c);
		const o = {};
		for (const [k, v] of Object.entries(b)) o[k] = [String(v)];
		return o;
	});
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	const kind = g("kind");
	const tid = g("id");
	if (![
		"record",
		"comment",
		"chat",
		"user"
	].includes(kind) || !/^\d+$/.test(tid)) return c.json({ error: "Bad report." }, 400);
	const reason = REPORT_REASONS.includes(g("reason")) ? g("reason") : "Other";
	if (!await c.env.DB.prepare("SELECT 1 AS n FROM reports WHERE user_id=? AND kind=? AND target_id=? AND status='open'").bind(auth.user.id, kind, Number(tid)).first()) await c.env.DB.prepare("INSERT INTO reports(user_id,kind,target_id,reason,note,status,created) VALUES(?,?,?,?,?,'open',?)").bind(auth.user.id, kind, Number(tid), reason, g("note").slice(0, 500), nowStamp()).run();
	const back = g("back") || "/";
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
		ok: true,
		next: back
	});
	return c.redirect(back);
}
function notFound(c) {
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({ error: "Not found" }, 404);
	return c.text("Not found", 404);
}
