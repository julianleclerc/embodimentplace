function needUser(c) {
	if (!c.get("auth").user) return c.redirect("/login?next=" + encodeURIComponent(new URL(c.req.url).pathname));
	return null;
}
async function wlSources(db, uid) {
	await ensureExtraSchema(db);
	return {
		people: (await db.prepare("SELECT u.id, u.username, u.name FROM user_follows f JOIN users u ON u.id=f.followee_id WHERE f.follower_id=? AND u.disabled=0 ORDER BY u.name").bind(uid).all()).results || [],
		orgs: await allPublic(db, "SELECT r.* FROM follows f JOIN records r ON r.id=f.company_id WHERE f.user_id=? ORDER BY r.name COLLATE NOCASE", uid),
		records: await allPublic(db, "SELECT r.* FROM watch_sources w JOIN records r ON r.id=CAST(w.ref AS INTEGER) WHERE w.user_id=? AND w.kind='record' ORDER BY r.name COLLATE NOCASE", uid),
		topics: ((await db.prepare("SELECT ref FROM watch_sources WHERE user_id=? AND kind='tag' ORDER BY ref COLLATE NOCASE").bind(uid).all()).results || []).map((r) => String(r.ref))
	};
}
function wlOrder(prefs) {
	const valid = WL_SECTIONS.map((s) => s[0]);
	return {
		order: [...(prefs.sections || []).filter((k) => valid.includes(k)), ...WL_DEFAULT.filter((k) => !(prefs.sections || []).includes(k))],
		hidden: new Set(prefs.hidden || [])
	};
}
async function watchlistPayload(c, days = 30) {
	const denied = needUser(c);
	if (denied) return denied;
	const u = c.get("auth").user;
	const src = await wlSources(c.env.DB, u.id);
	const { order, hidden } = wlOrder(prefsOf(u));
	if (!(src.people.length + src.orgs.length + src.records.length + src.topics.length)) return {
		tab: "feed",
		empty: true,
		days,
		sources: src,
		order,
		hidden: [...hidden],
		sections: WL_SECTIONS,
		items: {}
	};
	const since = (/* @__PURE__ */ new Date(Date.now() - days * 864e5)).toISOString().slice(0, 10);
	const pids = new Set(src.people.map((p) => p.id));
	const oids = new Set(src.orgs.map((o) => o.id));
	const rids = new Set(src.records.map((r) => r.id));
	const topics = src.topics.map((t) => t.toLowerCase());
	const rows = await allPublic(c.env.DB, "SELECT * FROM records WHERE type IN ('post','paper','job') AND (private=0 OR ?) AND (created>=? OR updated>=? OR COALESCE(feed_at,'')>=?) ORDER BY COALESCE(feed_at, substr(created,1,10),'') DESC, id DESC LIMIT 400", c.get("auth").see_private ? 1 : 0, since, since, since);
	const { outgoing } = await linksFor(c.env.DB, rows.map((r) => r.id));
	const out = {};
	for (const k of order) if (!hidden.has(k)) out[k] = [];
	const linked = (rid, ids) => {
		const m = outgoing.get(rid) || {};
		return Object.values(m).some((hits) => hits.some((h) => ids.has(h.id)));
	};
	const topical = (r) => {
		if (!topics.length) return false;
		const tags = (fieldVal(r.data, "tags") || []).map((t) => String(t).toLowerCase());
		const text = (r.name + " " + (r.summary || "")).toLowerCase();
		return topics.some((t) => tags.includes(t) || text.includes(t));
	};
	for (const r of rows) {
		const byPerson = pids.has(Number(r.author_id || 0)) && (r.type === "post" || r.type === "paper");
		const byOrg = linked(r.id, oids);
		const onTopic = linked(r.id, rids) || topical(r);
		if (!(byPerson || byOrg || onTopic)) continue;
		const isVideo = r.type === "post" && Boolean(fieldStr(r.data, "video"));
		const rules = {
			people: byPerson,
			companies: byOrg && r.type !== "job",
			research: r.type === "paper",
			videos: isVideo,
			topics: onTopic && r.type !== "job",
			jobs: r.type === "job" && byOrg && (fieldStr(r.data, "status") || "Open") === "Open"
		};
		for (const k of order) if (out[k] && rules[k]) {
			out[k].push(r);
			break;
		}
	}
	const items = {};
	for (const [k, recs] of Object.entries(out)) items[k] = await feedItems(c.env.DB, recs.slice(0, 12));
	return {
		tab: "feed",
		empty: false,
		days,
		sources: src,
		order,
		hidden: [...hidden],
		sections: WL_SECTIONS,
		items
	};
}
async function sourcesPayload(c) {
	const denied = needUser(c);
	if (denied) return denied;
	return {
		tab: "sources",
		sources: await wlSources(c.env.DB, c.get("auth").user.id),
		sections: WL_SECTIONS
	};
}
async function postWlSections(c) {
	const denied = needUser(c);
	if (denied) return denied;
	const all = await formAll(c);
	const valid = WL_SECTIONS.map((s) => s[0]);
	const order = (all.order || []).filter((k) => valid.includes(k));
	const shown = new Set(all.show || []);
	const pr = prefsOf(c.get("auth").user);
	pr.sections = order;
	pr.hidden = valid.filter((k) => !shown.has(k));
	await c.env.DB.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), c.get("auth").user.id).run();
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/watchlist?saved=1"
	});
	return c.redirect("/watchlist?saved=1");
}
async function postWlAdd(c) {
	const denied = needUser(c);
	if (denied) return denied;
	await ensureExtraSchema(c.env.DB);
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0].trim();
	const kind = g("kind");
	const uid = c.get("auth").user.id;
	if (kind === "user") {
		const row = await c.env.DB.prepare("SELECT id FROM users WHERE username=? AND disabled=0").bind(g("ref").replace(/^@/, "")).first();
		if (row && row.id !== uid) await c.env.DB.prepare("INSERT OR IGNORE INTO user_follows(follower_id,followee_id,created) VALUES(?,?,?)").bind(uid, row.id, nowStamp()).run();
	} else if (kind === "tag" && g("ref")) await c.env.DB.prepare("INSERT OR IGNORE INTO watch_sources(user_id,kind,ref,created) VALUES(?,?,?,?)").bind(uid, "tag", g("ref").replace(/^#/, "").slice(0, 60), nowStamp()).run();
	else if (kind === "record") {
		const rid = [...all["rel.ref"] || [], g("ref")].find((x) => /^\d+$/.test(x));
		const row = rid ? await c.env.DB.prepare("SELECT * FROM records WHERE id=?").bind(Number(rid)).first() : null;
		if (row && (!Number(row.private || 0) || c.get("auth").see_private)) {
			if (ORG_TYPES_LIST.includes(String(row.type))) await c.env.DB.prepare("INSERT OR IGNORE INTO follows(user_id,company_id,created) VALUES(?,?,?)").bind(uid, row.id, nowStamp()).run();
			else await c.env.DB.prepare("INSERT OR IGNORE INTO watch_sources(user_id,kind,ref,created) VALUES(?,?,?,?)").bind(uid, "record", String(row.id), nowStamp()).run();
		}
	}
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/watchlist/sources"
	});
	return c.redirect("/watchlist/sources");
}
async function postWlRemove(c) {
	const denied = needUser(c);
	if (denied) return denied;
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0];
	const kind = g("kind"), ref = g("ref"), uid = c.get("auth").user.id;
	if (kind === "user" && /^\d+$/.test(ref)) await c.env.DB.prepare("DELETE FROM user_follows WHERE follower_id=? AND followee_id=?").bind(uid, Number(ref)).run();
	else if (kind === "org" && /^\d+$/.test(ref)) await c.env.DB.prepare("DELETE FROM follows WHERE user_id=? AND company_id=?").bind(uid, Number(ref)).run();
	else if (kind === "record" || kind === "tag") await c.env.DB.prepare("DELETE FROM watch_sources WHERE user_id=? AND kind=? AND ref=?").bind(uid, kind, ref).run();
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/watchlist/sources"
	});
	return c.redirect("/watchlist/sources");
}
async function newsletterPayload(c) {
	const denied = needUser(c);
	if (denied) return denied;
	const prefs = prefsOf(c.get("auth").user);
	const days = Math.max(1, Math.min(31, Number(c.req.query("days") || (prefs.freq === "daily" ? 1 : 7)) || 7));
	const feed = await watchlistPayload(c, days);
	return {
		tab: "newsletter",
		days,
		mail_on: await mailConfigured(c.env.DB, c.env),
		weekdays: WEEKDAYS,
		prefs: {
			email: prefs.email || "",
			email_verified: Boolean(prefs.email_verified),
			freq: prefs.freq || "off",
			day: Number(prefs.day || 0),
			hour: Number(prefs.hour ?? 8),
			last_sent: prefs.last_sent || ""
		},
		items: feed.items || {},
		sections: WL_SECTIONS
	};
}
async function postWlSchedule(c) {
	const denied = needUser(c);
	if (denied) return denied;
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0].trim();
	const pr = prefsOf(c.get("auth").user);
	pr.freq = [
		"off",
		"weekly",
		"daily"
	].includes(g("freq")) ? g("freq") : "off";
	pr.day = /^\d+$/.test(g("day")) && Number(g("day")) < 7 ? Number(g("day")) : 0;
	pr.hour = /^\d+$/.test(g("hour")) && Number(g("hour")) < 24 ? Number(g("hour")) : 8;
	await c.env.DB.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), c.get("auth").user.id).run();
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/watchlist/newsletter?saved=1"
	});
	return c.redirect("/watchlist/newsletter?saved=1");
}
function unsubLink(env, uid) {
	const secret = env.EP_SECRET || "";
	return `${(env.EP_SITE_URL || "").replace(/\/$/, "") || ""}/unsubscribe?u=${uid}&s=${sign("unsub:" + uid, secret)}`;
}
async function postWlSend(c) {
	const denied = needUser(c);
	if (denied) return denied;
	const all = await formAll(c);
	const days = Math.max(1, Math.min(31, parseInt((all.days || ["7"]).slice(-1)[0], 10) || 7));
	const pr = prefsOf(c.get("auth").user);
	const email = String(pr.email || "");
	if (!email) return c.redirect("/watchlist/newsletter?sent=" + encodeURIComponent("Set your email address first."));
	if (!pr.email_verified) return c.redirect("/watchlist/newsletter?sent=" + encodeURIComponent("Confirm your email first (Account, then Settings)."));
	const items = (await watchlistPayload(c, days)).items || {};
	const total = Object.values(items).reduce((n, xs) => n + xs.length, 0);
	const bits = Object.entries(items).map(([k, xs]) => `<h2>${k}</h2>` + xs.map((x) => `<p>${x.name}</p>`).join(""));
	const link = unsubLink(c.env, c.get("auth").user.id);
	const html = `<div>${bits.join("")}<p>Unsubscribe: <a href="${link}">${link}</a></p></div>`;
	const err = await sendMail(c.env.DB, c.env, {
		to: email,
		subject: `${SITE_NAME}: your watchlist, ${total} new`,
		html,
		text: `${total} new items. Unsubscribe: ${link}`,
		headers: {
			"List-Unsubscribe": `<${link}>`,
			"List-Unsubscribe-Post": "List-Unsubscribe=One-Click"
		}
	});
	if (!err) {
		pr.last_sent = (/* @__PURE__ */ new Date()).toISOString().slice(0, 16);
		await c.env.DB.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), c.get("auth").user.id).run();
	}
	const msg = err || "Sent to " + email + (c.env.EP_ENV !== "production" ? " (logged, not delivered)" : "");
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: !err,
		message: msg,
		next: `/watchlist/newsletter?days=${days}&sent=${encodeURIComponent(msg)}`
	});
	return c.redirect(`/watchlist/newsletter?days=${days}&sent=${encodeURIComponent(msg)}`);
}
async function unsubscribe(c) {
	const uid = c.req.query("u") || "";
	const s = c.req.query("s") || "";
	const secret = c.env.EP_SECRET || "";
	const ok = /^\d+$/.test(uid) && s === sign("unsub:" + uid, secret);
	if (ok) {
		const row = await c.env.DB.prepare("SELECT * FROM users WHERE id=?").bind(Number(uid)).first();
		if (row) {
			const pr = prefsOf(row);
			pr.freq = "off";
			await c.env.DB.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), row.id).run();
		}
	}
	if (c.req.method === "POST") return c.text(ok ? "OK" : "Invalid link", ok ? 200 : 400);
	return c.json({
		ok,
		title: ok ? "You're unsubscribed" : "This link isn't valid"
	});
}
