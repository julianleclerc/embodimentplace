function maskEmail(em) {
	const [u, d] = em.split("@");
	if (!d) return em;
	return (u[0] || "") + "***@" + d;
}
async function communityPayload(c) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	const sent = c.req.query("sent") || "";
	const err = c.req.query("err") || "";
	let mine = [];
	if (auth.user) {
		const { results } = await c.env.DB.prepare("SELECT * FROM meet_requests WHERE user_id=? ORDER BY id DESC LIMIT 50").bind(auth.user.id).all();
		mine = results || [];
	}
	const pending = Number((await c.env.DB.prepare("SELECT COUNT(*) AS n FROM meet_requests WHERE status='pending'").first())?.n || 0);
	const orgN = Number((await c.env.DB.prepare(`SELECT COUNT(*) AS n FROM records WHERE type IN (${ORG_TYPES_LIST.map(() => "?").join(",")})`).bind(...ORG_TYPES_LIST).first())?.n || 0);
	const peopleN = Number((await c.env.DB.prepare("SELECT COUNT(*) AS n FROM users WHERE disabled=0").first())?.n || 0);
	return {
		tab: "meet",
		user: Boolean(auth.user),
		can_meet: can(auth, "meet"),
		is_admin: auth.is_admin,
		needs: COMMUNITY_NEEDS,
		org_groups: ORG_GROUPS.map((g) => g.label),
		why_max: INTRO_WHY_MAX,
		email: prefsOf(auth.user).email || "",
		mine,
		counts: {
			pending,
			orgs: orgN,
			people: peopleN
		},
		sent,
		err
	};
}
async function postMeet(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.redirect("/login?next=/community");
	await ensureExtraSchema(c.env.DB);
	const all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	const why = g("why").slice(0, INTRO_WHY_MAX);
	const need = COMMUNITY_NEEDS.includes(g("need")) ? g("need") : "";
	const email = g("contact_email").slice(0, 200);
	const go = (q) => {
		if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
			ok: q.startsWith("sent"),
			next: "/community?" + q,
			error: q.startsWith("err=") ? decodeURIComponent(q.slice(4)) : void 0
		}, q.startsWith("err") ? 400 : 200);
		return c.redirect("/community?" + q);
	};
	if (!need || !why) return go("err=" + encodeURIComponent("Pick what you need and describe it in a few words."));
	if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return go("err=" + encodeURIComponent("Add an email address we can introduce you at."));
	if (Number((await c.env.DB.prepare("SELECT COUNT(*) AS n FROM meet_requests WHERE user_id=? AND created > datetime('now', '-1 day')").bind(auth.user.id).first())?.n || 0) >= 5) return go("err=" + encodeURIComponent("You've sent several requests today. Try again tomorrow."));
	const group = ORG_GROUPS.some((x) => x.label === g("org_group")) ? g("org_group") : "";
	await c.env.DB.prepare("INSERT INTO meet_requests(user_id, who_kind, who_role, org_group, org_id, topic, why, location, by_when, status, created, contact_email) VALUES(?, 'either', ?, ?, NULL, ?, ?, ?, ?, 'pending', datetime('now'), ?)").bind(auth.user.id, g("who_role").slice(0, 200), group, need, why, g("location").slice(0, 120), g("by_when").slice(0, 60), email).run();
	const { results } = await c.env.DB.prepare("SELECT * FROM users WHERE disabled=0 AND role IN ('admin','contributor')").all();
	const to = [];
	for (const raw of results || []) {
		const u = raw;
		const pr = prefsOf(u);
		if (u.role === "admin" || Array.isArray(pr.perms) && pr.perms.includes("meet")) {
			const em = String(pr.email || "");
			if (em.includes("@")) to.push(em);
		}
	}
	for (const addr of to) await sendMail(c.env.DB, c.env, {
		to: addr,
		subject: `${SITE_NAME}: new request from ${auth.user.username} (${need})`,
		html: `<p>${auth.user.username} needs: ${need}.</p>`,
		text: `${auth.user.username} needs: ${need}.`
	});
	return go("sent=meet");
}
async function postWithdraw(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.redirect("/login?next=/community");
	const all = await formAll(c);
	const id = Number((all.id || [""]).slice(-1)[0] || 0);
	await c.env.DB.prepare("UPDATE meet_requests SET status='withdrawn', decided=datetime('now') WHERE id=? AND user_id=? AND status='pending'").bind(id, auth.user.id).run();
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/community?sent=withdrawn"
	});
	return c.redirect("/community?sent=withdrawn");
}
async function meetAdminPayload(c) {
	if (!can(c.get("auth"), "meet")) return {
		error: "Not found",
		status: 404
	};
	await ensureExtraSchema(c.env.DB);
	const st = c.req.query("status") || "pending";
	const need = c.req.query("need") || "";
	const { results } = await c.env.DB.prepare("SELECT m.*, u.name AS uname, u.username AS uuser, u.prefs AS uprefs, u.profile AS uprofile FROM meet_requests m JOIN users u ON u.id=m.user_id WHERE " + (st === "pending" ? "m.status='pending'" : "m.status<>'pending'") + " ORDER BY m.id DESC LIMIT 300").all();
	const items = [];
	const counts = {};
	for (const raw of results || []) {
		const m = raw;
		const topic = String(m.topic || "Other");
		counts[topic] = (counts[topic] || 0) + 1;
		if (need && topic !== need) continue;
		const em = String(m.contact_email || prefsOf({ prefs: String(m.uprefs || "") }).email || "");
		items.push({
			id: Number(m.id),
			topic,
			why: String(m.why || ""),
			who_role: String(m.who_role || ""),
			org_group: String(m.org_group || ""),
			location: String(m.location || ""),
			by_when: String(m.by_when || ""),
			status: String(m.status || ""),
			created: String(m.created || ""),
			username: String(m.uuser || ""),
			email: c.get("auth").is_admin ? em : maskEmail(em),
			email_full: c.get("auth").is_admin
		});
	}
	return {
		tab: "requests",
		status: st,
		need,
		items,
		counts
	};
}
async function postMeetAdmin(c) {
	if (!can(c.get("auth"), "meet")) return c.json({ error: "Not found" }, 404);
	const all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	const act = g("action");
	const mid = Number(g("id") || 0);
	if ((act === "done" || act === "declined") && mid) await c.env.DB.prepare("UPDATE meet_requests SET status=?, decided=datetime('now'), handled_by=? WHERE id=? AND status='pending'").bind(act, c.get("auth").user.id, mid).run();
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/admin/meet"
	});
	return c.redirect("/admin/meet");
}
async function communityOrgsPayload(c) {
	if (!can(c.get("auth"), "meet")) return {
		error: "Not found",
		status: 404
	};
	const recs = await allPublic(c.env.DB, `SELECT * FROM records WHERE type IN (${ORG_TYPES_LIST.map(() => "?").join(",")}) ORDER BY name COLLATE NOCASE`, ...ORG_TYPES_LIST);
	const { results: owners } = await c.env.DB.prepare("SELECT o.company_id, u.name, u.username FROM owners o JOIN users u ON u.id=o.user_id").all();
	const by = {};
	for (const r of owners || []) {
		const x = r;
		(by[x.company_id] ||= []).push({
			name: x.name,
			username: x.username
		});
	}
	function asList(v) {
		if (Array.isArray(v)) return v.map(String).filter(Boolean);
		if (typeof v === "string" && v.trim()) return v.split(/[,;]/).map((s) => s.trim()).filter(Boolean);
		return [];
	}
	return {
		tab: "orgs",
		is_admin: Boolean(c.get("auth").is_admin),
		items: recs.map((r) => {
			const roles = asList(fieldVal(r.data, "roles"));
			const open_to = asList(fieldVal(r.data, "open_to"));
			const locs = fieldVal(r.data, "locations");
			const locRows = Array.isArray(locs) ? locs : [];
			const city = (locRows.find((l) => l && (l.city || l.address)) || {}).city || (locRows.find((l) => l && l.address) || {}).address || String(fieldVal(r.data, "city") || "");
			const country = String(fieldVal(r.data, "country") || "");
			const place = [city, country].filter(Boolean).join(", ");
			return {
				id: r.id,
				slug: r.slug,
				name: r.name,
				type: r.type,
				summary: r.summary,
				roles,
				open_to,
				place,
				country,
				website: String(fieldVal(r.data, "website") || ""),
				open_note: String(fieldVal(r.data, "open_note") || ""),
				owners: by[r.id] || [],
				ph: phModel(r, "sm")
			};
		})
	};
}
async function communityPeoplePayload(c) {
	if (!c.get("auth").is_admin) return {
		error: "Not found",
		status: 404
	};
	const { results } = await c.env.DB.prepare("SELECT id, username, name, role, prefs, profile, created FROM users WHERE disabled=0 ORDER BY username COLLATE NOCASE").all();
	const items = [];
	for (const raw of results || []) {
		const u = raw;
		const pr = prefsOf({ prefs: String(u.prefs || "") });
		let prof = {};
		try {
			prof = JSON.parse(String(u.profile || "{}"));
		} catch {}
		const pv = (k) => {
			const x = prof[k];
			return x && typeof x === "object" && "v" in x ? x.v : x;
		};
		const { results: reqs } = await c.env.DB.prepare("SELECT topic, why, status, contact_email, created FROM meet_requests WHERE user_id=? ORDER BY id DESC LIMIT 5").bind(u.id).all();
		items.push({
			id: Number(u.id),
			username: String(u.username),
			role: String(u.role),
			created: String(u.created || ""),
			email: String(pr.email || ""),
			title: pv("title") || "",
			organisation: pv("organisation") || "",
			location: pv("location") || "",
			bio: pv("bio") || "",
			open_to: pv("open_to") || [],
			interests: pv("interests") || [],
			requests: reqs || []
		});
	}
	return {
		tab: "people",
		items
	};
}
