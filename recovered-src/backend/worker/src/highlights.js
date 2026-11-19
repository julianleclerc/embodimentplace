async function welcomeOf(db) {
	try {
		const w = JSON.parse(await setting$1(db, "home_welcome") || "{}");
		return {
			on: Boolean(w.on),
			title: String(w.title || ""),
			text: String(w.text || ""),
			btn_label: String(w.btn_label || ""),
			btn_url: String(w.btn_url || ""),
			ver: Number(w.ver || 0)
		};
	} catch {
		return {
			on: false,
			title: "",
			text: "",
			btn_label: "",
			btn_url: "",
			ver: 0
		};
	}
}
async function pinIds(db) {
	try {
		return JSON.parse(await setting$1(db, "home_pins") || "[]").map(Number).filter((n) => n > 0).slice(0, 4);
	} catch {
		return [];
	}
}
async function homeAdminPayload(c) {
	const db = c.env.DB;
	const w = await welcomeOf(db);
	const ids = await pinIds(db);
	const pins = [];
	for (const id of ids) {
		const row = await db.prepare("SELECT * FROM records WHERE id=?").bind(id).first();
		if (row) {
			const r = loadRow(row);
			pins.push({
				id: r.id,
				slug: r.slug,
				name: r.name,
				type: r.type,
				summary: r.summary
			});
		}
	}
	return {
		welcome: w,
		pins,
		max: 4
	};
}
async function postHomeAdmin(c) {
	if (!can(c.get("auth"), "home")) return c.json({ error: "Not found" }, 404);
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	const act = g("action") || "welcome";
	if (act === "welcome") {
		const prev = await welcomeOf(c.env.DB);
		const w = {
			on: g("on") === "1" || g("on") === "on",
			title: g("title").slice(0, 200),
			text: g("text").slice(0, 4e3),
			btn_label: g("btn_label").slice(0, 80),
			btn_url: g("btn_url").slice(0, 300),
			ver: (prev.ver || 0) + 1
		};
		await setSetting(c.env.DB, "home_welcome", JSON.stringify(w));
	}
	if (act === "pins") {
		const ids = (all.pin || all.pins || []).map(Number).filter((n) => n > 0).slice(0, 4);
		const add = Number(g("add") || 0);
		let next = ids;
		if (add) next = [add, ...ids.filter((x) => x !== add)].slice(0, 4);
		await setSetting(c.env.DB, "home_pins", JSON.stringify(next));
	}
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
		ok: true,
		...await homeAdminPayload(c),
		next: "/admin/home"
	});
	return c.redirect("/admin/home?saved=1");
}
async function postPin(c, slug) {
	if (!can(c.get("auth"), "home")) return c.json({ error: "Not found" }, 404);
	const row = await c.env.DB.prepare("SELECT id FROM records WHERE slug=?").bind(slug).first();
	if (row) {
		const ids = await pinIds(c.env.DB);
		const next = ids.includes(row.id) ? ids.filter((x) => x !== row.id) : [row.id, ...ids].slice(0, 4);
		await setSetting(c.env.DB, "home_pins", JSON.stringify(next));
	}
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/r/" + slug
	});
	return c.redirect("/r/" + slug);
}
