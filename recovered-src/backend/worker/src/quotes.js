var QUOTE_IP = new Limiter(5, 3600);
var QUOTE_GAP = new Limiter(1, 30);
function orderMode(rec) {
	if (fieldStr(rec.data, "for_sale") === "No" || fieldStr(rec.data, "order_mode") === "No button") return "";
	if (!fieldStr(rec.data, "for_sale") && (fieldStr(rec.data, "availability") === "Not for sale" || fieldStr(rec.data, "status") === "Discontinued")) return "";
	return [
		"humanoid",
		"gripper",
		"actuator",
		"sensor",
		"compute",
		"solution",
		"product"
	].includes(rec.type) || Boolean(fieldVal(rec.data, "category") || fieldVal(rec.data, "kind")) || rec.type === "product" ? "quote" : "quote";
}
async function postQuote(c, slug) {
	await ensureExtraSchema(c.env.DB);
	const row = await c.env.DB.prepare("SELECT * FROM records WHERE slug=?").bind(slug).first();
	if (!row) return c.json({ error: "Not found" }, 404);
	const rec = loadRow(row);
	if (rec.private && !c.get("auth").see_private) return c.json({ error: "Not found" }, 404);
	if (orderMode(rec) !== "quote") return c.json({ error: "Not found" }, 404);
	const all = await formAll(c);
	const g = (k, n = 200) => ((all[k] || [""]).slice(-1)[0] || "").trim().slice(0, n);
	const back = `/r/${rec.slug}`;
	if (g("website")) return c.redirect(back + "?quote=sent");
	if (!(g("name") && g("email").includes("@") && g("org") && g("consent"))) return c.redirect(back + "?quote=missing#order");
	const ip = c.get("auth").ip || "0";
	if (QUOTE_IP.blocked(ip) || QUOTE_GAP.blocked("gap:" + ip)) return c.redirect(back + "?quote=wait#order");
	QUOTE_IP.hit(ip);
	QUOTE_GAP.hit("gap:" + ip);
	if (!c.get("auth").logged && !await turnstileOk(c.env, g("cf-turnstile-response"), c.get("auth").ip)) return c.redirect(back + "?quote=check#order");
	let qty = 1;
	try {
		qty = Math.max(1, Math.min(1e4, parseInt(g("qty") || "1", 10) || 1));
	} catch {
		qty = 1;
	}
	const ref = "Q-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "") + "-" + token(2).toUpperCase();
	const payload = {
		name: g("name", 120),
		email: g("email"),
		org: g("org", 160),
		country: g("country", 80),
		message: g("message", 2e3),
		use: g("use"),
		timing: g("timing"),
		model: g("model", 60),
		qty,
		options: all.opt || [],
		user_id: c.get("auth").user?.id || null
	};
	await c.env.DB.prepare("INSERT INTO referrals(record_id,user_id,ref,payload,status,created,updated) VALUES(?,?,?,?, 'new', ?, ?)").bind(rec.id, c.get("auth").user?.id || null, ref, JSON.stringify(payload), nowStamp(), nowStamp()).run();
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
		ok: true,
		ref,
		next: back + "?quote=sent#order"
	});
	return c.redirect(back + "?quote=sent#order");
}
async function requestsAdminPayload(c) {
	const st = c.req.query("status") || "new";
	const auth = c.get("auth");
	if (!auth.is_admin && !can(auth, "review")) {}
	const { results } = await c.env.DB.prepare("SELECT r.*, rec.name AS product, rec.slug AS slug FROM referrals r LEFT JOIN records rec ON rec.id=r.record_id ORDER BY r.id DESC LIMIT 400").all();
	return {
		status: st,
		items: (results || []).map((raw) => {
			const r = raw;
			let p = {};
			try {
				p = JSON.parse(String(r.payload || "{}"));
			} catch {}
			return {
				id: Number(r.id),
				ref: String(r.ref || ""),
				status: String(r.status || "new"),
				created: String(r.created || ""),
				product: String(r.product || ""),
				slug: String(r.slug || ""),
				payload: p,
				note: String(r.note || "")
			};
		}).filter((x) => st === "all" || (st === "open" ? !["won", "closed"].includes(x.status) : x.status === st || st === "new" && x.status === "new")),
		statuses: QUOTE_STATUSES,
		uses: QUOTE_USES,
		timing: QUOTE_TIMING
	};
}
async function postRequestsAdmin(c) {
	if (!c.get("auth").is_admin && !can(c.get("auth"), "review")) return c.json({ error: "Not found" }, 404);
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	const id = Number(g("id") || 0);
	const status = QUOTE_STATUSES.some(([k]) => k === g("status")) ? g("status") : "";
	if (id && status) await c.env.DB.prepare("UPDATE referrals SET status=?, note=?, updated=? WHERE id=?").bind(status, g("note").slice(0, 500), nowStamp(), id).run();
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/admin/requests"
	});
	return c.redirect("/admin/requests");
}
