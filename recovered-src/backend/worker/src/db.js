function parseData(raw) {
	if (!raw) return {};
	if (typeof raw === "object") return raw;
	try {
		const v = JSON.parse(raw);
		return v && typeof v === "object" ? v : {};
	} catch {
		return {};
	}
}
function loadRow(row) {
	return {
		id: Number(row.id),
		type: String(row.type),
		slug: String(row.slug),
		name: String(row.name),
		summary: String(row.summary ?? ""),
		body: row.body != null ? String(row.body) : void 0,
		data: parseData(row.data),
		notes: row.notes != null ? String(row.notes) : void 0,
		private: Number(row.private ?? 0),
		watch: Number(row.watch ?? 0),
		demo: Number(row.demo ?? 0),
		created: row.created ?? null,
		updated: row.updated ?? null,
		feed_at: row.feed_at ?? null,
		author_id: row.author_id == null ? null : Number(row.author_id)
	};
}
function typeLabel(rec) {
	const cat = categoryKey(rec);
	if (cat && HW_CAT[cat]) return HW_CAT[cat].label;
	return TYPE_LABELS[rec.type]?.label || rec.type;
}
async function allPublic(db, sql, ...binds) {
	const { results } = await db.prepare(sql).bind(...binds).all();
	return (results || []).map((r) => loadRow(r));
}
async function onePublic(db, slug) {
	const row = await db.prepare("SELECT * FROM records WHERE slug = ? AND private = 0").bind(slug).first();
	return row ? loadRow(row) : null;
}
async function linksFor(db, ids) {
	const outgoing = /* @__PURE__ */ new Map();
	const incoming = /* @__PURE__ */ new Map();
	if (!ids.length) return {
		outgoing,
		incoming
	};
	const ph = ids.map(() => "?").join(",");
	const { results } = await db.prepare(`SELECT l.src, l.dst, l.rel, l.note,
            s.slug AS s_slug, s.name AS s_name, s.type AS s_type, s.summary AS s_summary,
            d.slug AS d_slug, d.name AS d_name, d.type AS d_type, d.summary AS d_summary,
            d.id AS d_id, s.id AS s_id
     FROM links l
     JOIN records s ON s.id = l.src
     JOIN records d ON d.id = l.dst
     WHERE (l.src IN (${ph}) OR l.dst IN (${ph}))
       AND s.private = 0 AND d.private = 0
     ORDER BY l.pos, l.id`).bind(...ids, ...ids).all();
	for (const raw of results || []) {
		const r = raw;
		const src = Number(r.src);
		const dst = Number(r.dst);
		const rel = String(r.rel);
		const note = r.note ? String(r.note) : "";
		if (ids.includes(src)) {
			const bag = outgoing.get(src) || {};
			(bag[rel] ||= []).push({
				id: Number(r.d_id),
				slug: String(r.d_slug),
				name: String(r.d_name),
				type: String(r.d_type),
				summary: String(r.d_summary || ""),
				note
			});
			outgoing.set(src, bag);
		}
		if (ids.includes(dst)) {
			const bag = incoming.get(dst) || {};
			(bag[rel] ||= []).push({
				id: Number(r.s_id),
				slug: String(r.s_slug),
				name: String(r.s_name),
				type: String(r.s_type),
				summary: String(r.s_summary || ""),
				note
			});
			incoming.set(dst, bag);
		}
	}
	return {
		outgoing,
		incoming
	};
}
async function allByIds(db, ids) {
	const map = /* @__PURE__ */ new Map();
	if (!ids.length) return map;
	const uniq = [...new Set(ids)];
	const rows = await allPublic(db, `SELECT * FROM records WHERE id IN (${uniq.map(() => "?").join(",")}) AND private = 0`, ...uniq);
	for (const r of rows) map.set(r.id, r);
	return map;
}
async function setting(db, key) {
	return (await db.prepare("SELECT value FROM settings WHERE key = ?").bind(key).first())?.value ?? "";
}
async function socialCounts(db, ids) {
	const likes = /* @__PURE__ */ new Map();
	const comments = /* @__PURE__ */ new Map();
	if (!ids.length) return {
		likes,
		comments
	};
	const ph = ids.map(() => "?").join(",");
	try {
		const { results } = await db.prepare(`SELECT record_id AS id, COUNT(*) AS n FROM likes WHERE record_id IN (${ph}) GROUP BY record_id`).bind(...ids).all();
		for (const r of results || []) likes.set(Number(r.id), Number(r.n));
	} catch {}
	try {
		const { results } = await db.prepare(`SELECT record_id AS id, COUNT(*) AS n FROM comments WHERE record_id IN (${ph}) AND status = 'approved' GROUP BY record_id`).bind(...ids).all();
		for (const r of results || []) comments.set(Number(r.id), Number(r.n));
	} catch {}
	return {
		likes,
		comments
	};
}
