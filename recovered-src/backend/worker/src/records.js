function slugify$1(s) {
	return s.toLowerCase().replace(/[^\w\s-]/gu, "").trim().replace(/[-\s]+/g, "-").replace(/^-|-$/g, "") || "item";
}
async function uniqueSlug(db, name, excludeId) {
	const base = slugify$1(name);
	let slug = base, i = 2;
	for (;;) {
		const row = await db.prepare("SELECT id FROM records WHERE slug=?").bind(slug).first();
		if (!row || row.id === excludeId) return slug;
		slug = `${base}-${i++}`;
	}
}
function feedAt(tkey, data, created) {
	return (recordDate({
		type: tkey,
		data
	}) || created || "").slice(0, 10);
}
async function saveRecord(db, rid, tkey, name, summary, body, data, notes, priv, watch, rels) {
	const ts = nowStamp();
	const payload = JSON.stringify(data);
	if (rid) {
		const old = await db.prepare("SELECT * FROM records WHERE id=?").bind(rid).first();
		if (old) try {
			await db.prepare("INSERT INTO revisions(record_id,snapshot,at) VALUES(?,?,?)").bind(rid, JSON.stringify(old), ts).run();
		} catch {}
		await db.prepare("UPDATE records SET name=?,summary=?,body=?,data=?,notes=?,private=?,watch=?,updated=?,feed_at=? WHERE id=?").bind(name, summary, body, payload, notes, priv, watch, ts, feedAt(tkey, data, ts), rid).run();
	} else {
		const slug = await uniqueSlug(db, name);
		const res = await db.prepare("INSERT INTO records(type,slug,name,summary,body,data,notes,private,watch,demo,created,updated,feed_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)").bind(tkey, slug, name, summary, body, payload, notes, priv, watch, 0, ts, ts, feedAt(tkey, data, ts)).run();
		rid = Number(res.meta.last_row_id);
	}
	if (rels !== null && rid) {
		await db.prepare("DELETE FROM links WHERE src=?").bind(rid).run();
		let pos = 0;
		for (const [rel, dst, note] of rels) if (dst !== rid) await db.prepare("INSERT INTO links(src,rel,dst,note,pos) VALUES(?,?,?,?,?)").bind(rid, rel, dst, note, pos++).run();
	}
	await reindex(db, rid);
	return rid;
}
async function reindex(db, rid) {
	try {
		const row = await db.prepare("SELECT id, name, summary, body, type, data FROM records WHERE id=?").bind(rid).first();
		if (!row) return;
		await db.prepare("DELETE FROM fts WHERE rowid=?").bind(rid).run();
		await db.prepare("INSERT INTO fts(rowid, name, type, summary, body, extra) VALUES(?,?,?,?,?,?)").bind(rid, row.name, row.type, row.summary || "", row.body || "", row.data || "").run();
	} catch {}
}
function subLabel(kind, payload = {}) {
	if (kind === "compose") return String(payload.kind || "Post");
	if (kind === "record_edit") return "Edit: " + String(payload.type || "record");
	if (kind === "company_new") return "New organisation";
	if (kind === "item") return "New " + String(payload.type || "item");
	return kind;
}
async function applySubmission(db, sub) {
	const p = JSON.parse(String(sub.payload || "{}"));
	const kind = String(sub.kind);
	const target = sub.target_id != null ? Number(sub.target_id) : null;
	const author = await db.prepare("SELECT * FROM users WHERE id=?").bind(sub.user_id).first();
	if (kind === "profile") {
		await db.prepare("UPDATE users SET profile=? WHERE id=?").bind(JSON.stringify(p.data || {}), sub.user_id).run();
		return null;
	}
	if (kind === "claim" && target) {
		await db.prepare("INSERT OR IGNORE INTO owners(user_id,company_id,created) VALUES(?,?,?)").bind(sub.user_id, target, nowStamp()).run();
		return target;
	}
	if (kind === "company_new") {
		const ot = String(p.org_type || "company");
		const rels = p.parent ? [[
			"parent",
			Number(p.parent),
			""
		]] : [];
		const rid = await saveRecord(db, null, ot, String(p.name), String(p.summary || ""), String(p.body || ""), p.data || {}, "", 0, 0, rels);
		await db.prepare("INSERT OR IGNORE INTO owners(user_id,company_id,created) VALUES(?,?,?)").bind(sub.user_id, rid, nowStamp()).run();
		return rid;
	}
	if (kind === "company_edit" || kind === "record_edit") {
		if (!target) throw new Error("The record no longer exists.");
		const old = await db.prepare("SELECT * FROM records WHERE id=?").bind(target).first();
		if (!old) throw new Error("The record no longer exists.");
		const data = {
			...JSON.parse(String(old.data || "{}")),
			...p.data || {}
		};
		if (kind === "company_edit" && "labs" in p) {
			const labs = Array.isArray(p.labs) ? p.labs : [];
			if (labs.length) data.labs = { v: labs.slice(0, 60) };
			else delete data.labs;
		}
		const rid = await saveRecord(db, target, String(old.type), String(p.name || old.name), String(p.summary ?? old.summary), String(p.body ?? old.body), data, String(old.notes || ""), Number(old.private || 0), Number(old.watch || 0), null);
		if (kind === "company_edit") {
			for (const pair of p.lab_renames || []) {
				const [was, nowName] = pair;
				const rows = await db.prepare("SELECT r.id, r.data FROM links l JOIN records r ON r.id=l.src WHERE l.dst=? AND r.type IN ('post','paper')").bind(target).all();
				for (const row of rows.results || []) {
					const d = JSON.parse(String(row.data || "{}"));
					if ((d.lab?.v || "").toLowerCase() === String(was).toLowerCase()) {
						d.lab = { v: nowName };
						await db.prepare("UPDATE records SET data=? WHERE id=?").bind(JSON.stringify(d), row.id).run();
					}
				}
			}
			if ("leaders" in p) await saveLeaders(db, target, p.leaders || []);
			const conns = p.connections || {};
			for (const rel of CONNECTION_RELS) {
				if (!(rel in conns)) continue;
				await db.prepare("DELETE FROM links WHERE src=? AND rel=?").bind(target, rel).run();
				let pos = 0;
				for (const item of (conns[rel] || []).slice(0, 60)) {
					const oid = Number(item[0]);
					const note = String(item[1] || "");
					if (!oid || oid === target) continue;
					if (await db.prepare("SELECT 1 AS n FROM records WHERE id=?").bind(oid).first()) await db.prepare("INSERT INTO links(src,rel,dst,note,pos) VALUES(?,?,?,?,?)").bind(target, rel, oid, note, pos++).run();
				}
			}
			if ("highlights" in p) {
				await db.prepare("DELETE FROM links WHERE src=? AND rel='highlights'").bind(target).run();
				let pos = 0;
				for (const item of (p.highlights || []).slice(0, 3)) {
					const hid = Number(item[0]);
					const note = String(item[1] || "");
					if (!hid) continue;
					if (await db.prepare("SELECT 1 AS n FROM records WHERE id=?").bind(hid).first()) await db.prepare("INSERT INTO links(src,rel,dst,note,pos) VALUES(?,?,?,?,?)").bind(target, "highlights", hid, note, 100 + pos++).run();
				}
			}
		}
		return rid;
	}
	if (kind === "item") {
		const tkey = String(p.type || "");
		const rels = p.company ? [[
			"company",
			Number(p.company),
			""
		]] : [];
		return saveRecord(db, null, tkey, String(p.name), String(p.summary || ""), String(p.body || ""), p.data || {}, "", 0, 0, rels);
	}
	if (kind === "post" || kind === "job" || kind === "compose") return applyCompose(db, kind === "compose" ? p : {
		...p,
		kind
	}, author);
	throw new Error("Unknown submission type.");
}
async function applyCompose(db, p, author) {
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const kind = String(p.kind || "blog");
	const intro = String(p.intro || p.subtitle || p.summary || "");
	const body = String(p.body || "");
	const title = String(p.title || p.name || "Untitled");
	const data = { date: { v: today } };
	if (p.cover) data.image = {
		v: p.cover,
		fit: "cover"
	};
	for (const k of [
		"origin",
		"source_site",
		"source_author",
		"credits",
		"references",
		"lab"
	]) if (p[k]) data[k] = { v: p[k] };
	const rels = [];
	if (kind === "research") {
		if (p.url) data.url = { v: p.url };
		if (p.authors) data.authors_text = { v: p.authors };
		if (p.as) rels.push([
			"orgs",
			Number(p.as),
			""
		]);
		return saveRecord(db, null, "paper", title, intro, body, data, "", 0, 0, rels);
	}
	const kindLabel = String(p.kind_label || kind.charAt(0).toUpperCase() + kind.slice(1));
	data.kind = { v: kind === "job" ? void 0 : kindLabel };
	if (kind !== "job" && author) data.byline = { v: String(author.username || "") };
	if (p.video) data.video = { v: p.video };
	if (p.url) data.link = { v: p.url };
	if (p.as) rels.push([
		kind === "job" ? "company" : "about",
		Number(p.as),
		""
	]);
	const cc = Array.isArray(p.cc) ? p.cc : p.cc ? [p.cc] : [];
	for (const id of cc) {
		const n = Number(id);
		if (n && n !== Number(p.as || 0)) rels.push([
			"about",
			n,
			"cc"
		]);
	}
	if (p.lab) rels.push([
		"lab",
		Number(p.lab),
		""
	]);
	if (kind === "job") {
		data.posted = { v: today };
		data.status = { v: "Open" };
		return saveRecord(db, null, "job", title, intro, body, data, "", 0, 0, rels);
	}
	return saveRecord(db, null, "post", title, intro, String(p.origin) === "Repost" ? "" : body, data, "", 0, 0, rels);
}
var CONNECTION_RELS = [
	"partners",
	"backed_by",
	"sells_to",
	"buys_from"
];
async function saveLeaders(db, target, leaders) {
	await db.prepare("DELETE FROM links WHERE src=? AND rel='leaders'").bind(target).run();
	const seen = /* @__PURE__ */ new Set();
	let pos = 0;
	for (const x of leaders.slice(0, 30)) {
		const name = String(x.name || "").trim().slice(0, 120);
		if (!name) continue;
		const row = await db.prepare("SELECT id FROM records WHERE type='person' AND name=? COLLATE NOCASE ORDER BY id LIMIT 1").bind(name).first();
		const pid = row ? Number(row.id) : await saveRecord(db, null, "person", name, "", "", {}, "", 0, 0, []);
		if (seen.has(pid)) continue;
		seen.add(pid);
		await db.prepare("INSERT INTO links(src,rel,dst,note,pos) VALUES(?,?,?,?,?)").bind(target, "leaders", pid, String(x.title || "").trim().slice(0, 80), pos++).run();
	}
}
async function setAuthor(db, sub, rid) {
	if (!rid) return;
	try {
		await db.prepare("UPDATE records SET author_id=? WHERE id=? AND (author_id IS NULL OR author_id=0)").bind(sub.user_id, rid).run();
	} catch {}
}
function shouldApplyDirect(auth, kind) {
	if (auth.is_admin) return true;
	if (!auth.logged) return false;
	if (kind === "claim") return can(auth, "claims");
	if ([
		"record_edit",
		"profile",
		"company_edit",
		"compose"
	].includes(kind)) return true;
	return can(auth, "create");
}
async function submitAndMaybeApply(db, auth, kind, target, payload) {
	const res = await db.prepare("INSERT INTO submissions(user_id,kind,target_id,payload,created) VALUES(?,?,?,?,?)").bind(auth.user.id, kind, target, JSON.stringify(payload), nowStamp()).run();
	const sid = Number(res.meta.last_row_id);
	if (shouldApplyDirect(auth, kind)) {
		const sub = await db.prepare("SELECT * FROM submissions WHERE id=?").bind(sid).first();
		const rid = await applySubmission(db, sub);
		await setAuthor(db, sub, rid);
		await db.prepare("UPDATE submissions SET status='approved', decided=?, decided_by=?, result_id=? WHERE id=?").bind(nowStamp(), auth.user.id, rid, sid).run();
	}
	return sid;
}
