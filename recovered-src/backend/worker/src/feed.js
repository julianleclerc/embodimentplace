function parseFeedCursor(raw) {
	if (!raw) return null;
	const m = /^(\d{4}-\d{2}-\d{2})_(\d+)$/.exec(String(raw).trim());
	if (!m) return null;
	const [y, mo, d] = m[1].split("-").map(Number);
	if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
	const dt = new Date(Date.UTC(y, mo - 1, d));
	if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mo - 1 || dt.getUTCDate() !== d) return null;
	const id = Number(m[2]);
	if (!Number.isFinite(id) || id < 1) return null;
	return {
		at: m[1],
		id
	};
}
function feedDateOf(r) {
	if (r.feed_at) return String(r.feed_at).slice(0, 10);
	if (r.created) return String(r.created).slice(0, 10);
	return "";
}
function formatCursor(r) {
	return `${feedDateOf(r)}_${r.id}`;
}
async function feedPage(db, opts = {}) {
	const limit = opts.limit ?? 20;
	const binds = [];
	const where = [];
	if (opts.types?.length) {
		where.push(`type IN (${opts.types.map(() => "?").join(",")})`);
		binds.push(...opts.types);
	}
	if (opts.ids?.length) {
		where.push(`id IN (${opts.ids.map(() => "?").join(",")})`);
		binds.push(...opts.ids);
	}
	if (!opts.includePrivate) where.push("private = 0");
	if (opts.authorId) {
		where.push("author_id = ?");
		binds.push(opts.authorId);
	}
	if (opts.category) {
		const label = POST_CATEGORIES.find((c) => c.toLowerCase() === opts.category.toLowerCase()) || opts.category;
		where.push("(type = 'paper' OR COALESCE(json_extract(data, '$.kind.v'), json_extract(data, '$.kind')) = ?)");
		binds.push(label);
	}
	if (opts.original) where.push("COALESCE(json_extract(data, '$.origin.v'), json_extract(data, '$.origin')) = 'Original'");
	const cur = parseFeedCursor(opts.before);
	if (cur) {
		where.push("(COALESCE(feed_at, substr(created, 1, 10), '') < ? OR (COALESCE(feed_at, substr(created, 1, 10), '') = ? AND id < ?))");
		binds.push(cur.at, cur.at, cur.id);
	}
	const sql = `SELECT * FROM records ${where.length ? "WHERE " + where.join(" AND ") : ""}
    ORDER BY COALESCE(feed_at, substr(created, 1, 10), '') DESC, id DESC LIMIT ?`;
	binds.push(limit + 1);
	const rows = await allPublic(db, sql, ...binds);
	const more = rows.length > limit;
	const slice = rows.slice(0, limit);
	const last = slice[slice.length - 1];
	return {
		rows: slice,
		next: more && last ? formatCursor(last) : null
	};
}
