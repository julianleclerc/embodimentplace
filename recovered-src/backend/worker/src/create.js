async function createPayload(c, kind) {
	const auth = c.get("auth");
	if (!auth.user) return {
		error: "login",
		status: 401
	};
	const owned = await ownedCompanies(c.env.DB, auth.user.id);
	return {
		kind,
		logged: auth.logged,
		owned: owned.map((o) => ({
			id: o.id,
			slug: o.slug,
			name: o.name,
			type: o.type
		})),
		org_types: ORG_TYPES_LIST.map((k) => ({
			key: k,
			label: k[0].toUpperCase() + k.slice(1)
		})),
		product_types: HW_CATEGORIES.map((h) => ({
			key: h.key,
			label: h.label
		})),
		note: auth.logged ? "Goes live straight away." : "Goes live after review."
	};
}
async function postCreateOrg(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	if (await needsVerified(c)) return c.json({ error: "Confirm your email first." }, 403);
	const all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	const name = g("name").slice(0, 200);
	if (!name) return c.json({ error: "A name is required." }, 400);
	const org_type = ORG_TYPES_LIST.includes(g("type") || g("org_type")) ? g("type") || g("org_type") : "company";
	const data = {};
	if (g("website")) data.website = { v: g("website") };
	if (g("country")) data.country = { v: g("country") };
	if (g("city")) data.city = { v: g("city") };
	return afterSubmit(c, await submitAndMaybeApply(c.env.DB, auth, "company_new", null, {
		name,
		org_type,
		summary: g("summary"),
		body: g("body"),
		data,
		parent: g("parent") ? Number(g("parent")) : null
	}), "/account/companies?posted=1");
}
async function postCreateItem(c, typ) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	if (await needsVerified(c)) return c.json({ error: "Confirm your email first." }, 403);
	const all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	const name = (g("name") || g("title")).slice(0, 200);
	if (!name) return c.json({ error: "A name is required." }, 400);
	const company = Number(g("company") || g("as") || 0);
	if (!company) return c.json({ error: "Pick the organisation this belongs to." }, 400);
	if (!auth.logged && !await isOwner(c.env.DB, auth.user.id, company)) return c.json({ error: "You can only post from a page you manage." }, 403);
	const data = {};
	if (typ === "product") {
		if (g("category")) data.category = { v: g("category") };
		if (g("status")) data.status = { v: g("status") };
	} else {
		data.status = { v: "Open" };
		data.posted = { v: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) };
		if (g("location")) data.location = { v: g("location") };
	}
	const tkey = typ === "job" ? "job" : "product";
	return afterSubmit(c, await submitAndMaybeApply(c.env.DB, auth, typ === "job" ? "job" : "item", null, {
		type: tkey,
		name,
		title: name,
		intro: g("summary"),
		summary: g("summary"),
		body: g("body"),
		as: company,
		company,
		data,
		kind: typ === "job" ? "job" : "blog"
	}), typ === "job" ? "/account/posts?posted=1" : "/account/companies?posted=1");
}
async function afterSubmit(c, sid, queued) {
	const sub = await c.env.DB.prepare("SELECT status, result_id FROM submissions WHERE id=?").bind(sid).first();
	if (sub?.status === "approved" && sub.result_id) {
		const slug = (await c.env.DB.prepare("SELECT slug FROM records WHERE id=?").bind(sub.result_id).first())?.slug;
		return c.json({
			ok: true,
			id: sid,
			next: slug ? "/r/" + slug : queued
		});
	}
	return c.json({
		ok: true,
		id: sid,
		next: queued
	});
}
