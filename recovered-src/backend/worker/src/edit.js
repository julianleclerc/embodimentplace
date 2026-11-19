var TYPES = typesSchema_default;
async function editPayload(c, slug, tkey) {
	const db = c.env.DB;
	const auth = c.get("auth");
	let rec = null;
	if (slug) {
		const row = await db.prepare("SELECT * FROM records WHERE slug=?").bind(slug).first();
		if (!row) return {
			error: "Not found",
			status: 404
		};
		rec = loadRow(row);
		tkey = rec.type;
	}
	if (!tkey || !TYPES[tkey]) return {
		error: "Unknown type",
		status: 404
	};
	const t = TYPES[tkey];
	const fields = t.fields.filter((f) => !f.private || auth.see_private);
	let outgoing = {};
	if (rec) {
		const { results } = await db.prepare("SELECT l.rel, r.id, r.name, r.slug, r.type FROM links l JOIN records r ON r.id=l.dst WHERE l.src=?").bind(rec.id).all();
		for (const raw of results || []) {
			const r = raw;
			(outgoing[r.rel] ||= []).push({
				id: r.id,
				name: r.name,
				slug: r.slug,
				type: r.type
			});
		}
	}
	return {
		type: tkey,
		type_label: t.label,
		fields,
		relations: t.relations,
		record: rec,
		outgoing,
		can_delete: Boolean(rec && can(auth, "create")),
		see_private: auth.see_private
	};
}
async function newChooser() {
	return { types: Object.entries(TYPES).map(([key, t]) => ({
		key,
		label: t.label
	})) };
}
async function postSave(c) {
	const auth = c.get("auth");
	const all = await formAll(c);
	const g = (k) => (all[k] || [""])[(all[k] || [""]).length - 1];
	const tkey = g("type");
	if (!TYPES[tkey]) return c.json({ error: "Unknown type" }, 400);
	const t = TYPES[tkey];
	const rid = /^\d+$/.test(g("id")) ? Number(g("id")) : null;
	const name = g("name").trim().slice(0, 200);
	if (!name) return c.json({ error: "Name is required" }, 400);
	if (!rid && !can(auth, "create")) return c.json({ error: "Creating pages needs the Create privilege" }, 403);
	let data = {};
	let old = null;
	if (rid) {
		const row = await c.env.DB.prepare("SELECT * FROM records WHERE id=?").bind(rid).first();
		if (!row) return c.json({ error: "Not found" }, 404);
		old = {
			data: JSON.parse(String(row.data || "{}")),
			notes: String(row.notes || ""),
			private: Number(row.private || 0),
			watch: Number(row.watch || 0)
		};
		data = { ...old.data };
	}
	for (const f of t.fields) {
		if (f.private && !auth.see_private) continue;
		const raw = g("f." + f.key) || g(f.key);
		if (raw !== "") data[f.key] = { v: raw };
		else delete data[f.key];
	}
	const rels = [];
	for (const rel of t.relations) {
		let ids = (all["rel." + rel.key] || []).flatMap((x) => x.split(/[,\s]+/)).filter((x) => /^\d+$/.test(x)).map(Number);
		if (!rel.many) ids = ids.slice(0, 1);
		if (rel.max) ids = ids.slice(0, rel.max);
		for (const dst of ids) rels.push([
			rel.key,
			dst,
			""
		]);
	}
	const notes = auth.see_private ? g("notes") : old?.notes || "";
	const priv = auth.see_private ? g("private") ? 1 : 0 : old?.private || 0;
	const introMax = tkey === "post" || tkey === "paper" ? 200 : 300;
	if (!auth.logged) {
		await submitAndMaybeApply(c.env.DB, auth, rid ? "record_edit" : "item", rid, {
			type: tkey,
			name,
			summary: g("summary").trim().slice(0, introMax),
			body: g("body"),
			data
		});
		return c.json({
			ok: true,
			queued: true,
			next: "/account/review"
		});
	}
	const id = await saveRecord(c.env.DB, rid, tkey, name, g("summary").trim().slice(0, introMax), g("body"), data, notes, priv, old?.watch || 0, rels);
	const slug = (await c.env.DB.prepare("SELECT slug FROM records WHERE id=?").bind(id).first()).slug;
	return c.json({
		ok: true,
		id,
		slug,
		next: "/r/" + slug
	});
}
async function composePayload(c, companySlug) {
	const auth = c.get("auth");
	const owned = auth.user ? await ownedCompanies(c.env.DB, auth.user.id) : [];
	let company = null;
	if (companySlug) {
		const row = await c.env.DB.prepare("SELECT * FROM records WHERE slug=?").bind(companySlug).first();
		if (row) company = loadRow(row);
	}
	if (auth.logged && !company) {
		const row = await c.env.DB.prepare("SELECT * FROM records WHERE slug=?").bind(SITE_ORG_SLUG).first();
		if (row) company = loadRow(row);
	}
	let pending = [];
	if (auth.user) {
		const { results } = await c.env.DB.prepare("SELECT * FROM submissions WHERE user_id=? AND kind IN ('compose','post') AND status='pending' ORDER BY id DESC").bind(auth.user.id).all();
		pending = (results || []).map((sb) => {
			const p = JSON.parse(String(sb.payload || "{}"));
			return {
				id: sb.id,
				name: p.name || p.title,
				kind: p.kind,
				intro: p.intro
			};
		});
	}
	return {
		user: Boolean(auth.user),
		logged: auth.logged,
		page_only: true,
		owned: owned.map((o) => ({
			id: o.id,
			slug: o.slug,
			name: o.name,
			type: o.type
		})),
		company: company ? {
			id: company.id,
			slug: company.slug,
			name: company.name,
			type: company.type
		} : null,
		kinds: COMPOSE_KINDS,
		intro_max: 200,
		pending,
		note: auth.logged ? "Goes live straight away." : "Goes live after review."
	};
}
async function postCompose(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	if (await needsVerified(c)) return c.json({ error: "Confirm your email first: see Account, then Settings." }, 403);
	const all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	const title = (g("title") || g("name")).slice(0, 200);
	const back = g("back") || "/";
	if (!title) return c.json({
		error: "A title is required.",
		next: back + "?cerr=A%20title%20is%20required."
	}, 400);
	if (Number((await c.env.DB.prepare("SELECT COUNT(*) AS n FROM submissions WHERE user_id=? AND status='pending'").bind(auth.user.id).first())?.n || 0) >= 25) return c.json({ error: "You have 25 items waiting for review." }, 400);
	const rawKind = KIND_ALIAS[g("kind")] || g("kind") || "blog";
	const kindPair = COMPOSE_KINDS.find(([k]) => k === rawKind) || COMPOSE_KINDS[0];
	const origin = g("origin") === "Repost" ? "Repost" : "Original";
	let asId = Number(g("as") || 0) || null;
	{
		if (!asId && auth.logged) asId = (await c.env.DB.prepare("SELECT id FROM records WHERE slug=?").bind("embodiment-place").first())?.id || null;
		if (!asId) return c.json({ error: "Posts are published through a page." }, 400);
		const org = await c.env.DB.prepare("SELECT * FROM records WHERE id=?").bind(asId).first();
		if (!org || !ORG_TYPES_LIST.includes(String(org.type))) return c.json({ error: "Posts are published through a page." }, 400);
		if (!auth.logged && !await isOwner(c.env.DB, auth.user.id, asId)) return c.json({ error: "You can only post from a page you manage." }, 403);
	}
	if (!auth.logged && !await turnstileOk(c.env, g("cf-turnstile-response"), c.get("auth").ip)) return c.json({ error: "Please complete the check." }, 400);
	const intro = g("intro") || g("summary");
	const body = origin === "Repost" ? "" : g("body") || "";
	const problem = await checkText(c.env.DB, title + " " + intro + " " + body, auth);
	if (problem) return c.json({ error: problem }, 400);
	let credits = g("credits");
	try {
		if (typeof credits === "string" && credits.trim().startsWith("[")) credits = JSON.parse(credits);
	} catch {}
	let references = g("references");
	try {
		if (typeof references === "string" && references.trim().startsWith("[")) references = JSON.parse(references);
	} catch {}
	const cc = (all.cc || all["rel.cc"] || []).map(Number).filter((n) => n > 0);
	const payload = {
		kind: kindPair[0],
		kind_label: kindPair[1],
		title,
		name: title,
		intro,
		body,
		url: g("url"),
		video: g("video"),
		cover: g("cover"),
		origin,
		source_site: g("source_site"),
		source_author: g("source_author"),
		authors: g("authors"),
		credits,
		references,
		as: asId,
		cc,
		lab: g("lab") ? Number(g("lab")) : null
	};
	const sid = await submitAndMaybeApply(c.env.DB, auth, "compose", null, payload);
	const applied = await c.env.DB.prepare("SELECT result_id, status FROM submissions WHERE id=?").bind(sid).first();
	const next = applied?.result_id ? (await c.env.DB.prepare("SELECT slug FROM records WHERE id=?").bind(applied.result_id).first())?.slug ? "/r/" + (await c.env.DB.prepare("SELECT slug FROM records WHERE id=?").bind(applied.result_id).first()).slug : "/" : back.split("?")[0] + "?posted=1";
	return c.json({
		ok: true,
		id: sid,
		next: applied?.status === "approved" ? next.startsWith("/r/") ? next : "/" : back.split("?")[0] + "?posted=1"
	});
}
async function postDelete(c, slug) {
	const row = await c.env.DB.prepare("SELECT id, type FROM records WHERE slug=?").bind(slug).first();
	if (!row) return c.json({ error: "Not found" }, 404);
	await c.env.DB.prepare("DELETE FROM records WHERE id=?").bind(row.id).run();
	try {
		await c.env.DB.prepare("DELETE FROM fts WHERE rowid=?").bind(row.id).run();
	} catch {}
	return c.json({
		ok: true,
		next: "/t/" + row.type
	});
}
