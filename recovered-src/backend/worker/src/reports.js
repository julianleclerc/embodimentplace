async function reportsPayload(c) {
	await ensureExtraSchema(c.env.DB);
	const st = c.req.query("status") || "open";
	const { results } = await c.env.DB.prepare("SELECT r.*, u.name AS rname FROM reports r LEFT JOIN users u ON u.id=r.user_id WHERE r.status " + (st === "open" ? "='open'" : "<>'open'") + " ORDER BY r.id DESC LIMIT 300").all();
	const items = [];
	for (const raw of results || []) {
		const r = raw;
		let what = `${r.kind} #${r.target_id}`;
		let author = "";
		if (r.kind === "record") {
			const rec = await c.env.DB.prepare("SELECT slug, name FROM records WHERE id=?").bind(r.target_id).first();
			if (rec) what = `<a href="/r/${rec.slug}">${rec.name}</a>`;
		} else if (r.kind === "comment") {
			const cm = await c.env.DB.prepare("SELECT body, record_id FROM comments WHERE id=?").bind(r.target_id).first();
			if (cm) what = cm.body;
		}
		items.push({
			id: Number(r.id),
			kind: String(r.kind || ""),
			target_id: Number(r.target_id || 0),
			reason: String(r.reason || ""),
			note: String(r.note || ""),
			status: String(r.status || ""),
			action: String(r.action || ""),
			created: String(r.created || ""),
			rname: String(r.rname || "a former member"),
			what,
			author
		});
	}
	return {
		status: st,
		items,
		words: await setting$1(c.env.DB, "spam_blocklist")
	};
}
async function postReports(c) {
	if (!can(c.get("auth"), "review")) return c.json({ error: "Not found" }, 404);
	await ensureExtraSchema(c.env.DB);
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	const act = g("action");
	if (act === "words") {
		await setSetting(c.env.DB, "spam_blocklist", g("words").split(/\n/).map((w) => w.trim()).filter(Boolean).join("\n").slice(0, 5e3));
		return c.json({
			ok: true,
			message: "Blocked words saved.",
			next: "/admin/reports"
		});
	}
	const row = await c.env.DB.prepare("SELECT * FROM reports WHERE id=? AND status='open'").bind(Number(g("id") || 0)).first();
	if (row) {
		if (act === "hide" && row.kind === "record") await c.env.DB.prepare("UPDATE records SET private=1 WHERE id=?").bind(row.target_id).run();
		if (act === "remove" && row.kind === "comment") await c.env.DB.prepare("DELETE FROM comments WHERE id=?").bind(row.target_id).run();
		await c.env.DB.prepare("UPDATE reports SET status=?, action=?, decided=? WHERE id=?").bind("done", act === "dismiss" ? "dismissed" : act, nowStamp(), row.id).run();
	}
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/admin/reports"
	});
	return c.redirect("/admin/reports");
}
