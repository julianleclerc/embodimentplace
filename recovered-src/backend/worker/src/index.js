var api = new Hono();
api.get("/healthz", (c) => c.json({
	ok: true,
	service: "embodiment-place-worker"
}));
api.get("/meta", (c) => {
	const payload = {
		themes: THEME_MENU,
		nav: NAV,
		hardware: {
			robots: HW_CATEGORIES.filter((x) => x.tab === "robots").map(({ key, label, plural }) => ({
				key,
				label,
				plural
			})),
			hardware: HW_CATEGORIES.filter((x) => x.tab === "hardware").map(({ key, label, plural, group }) => ({
				key,
				label,
				plural,
				group: group || "Other"
			}))
		},
		softwareKinds: SOFTWARE_KINDS,
		orgGroups: ORG_GROUPS.map(({ key, label, blurb }) => ({
			key,
			label,
			blurb
		}))
	};
	return c.json(payload);
});
api.get("/home", async (c) => {
	const filter = c.req.query("f") || "all";
	const original = c.req.query("orig") === "1";
	const before = c.req.query("before") || "";
	return c.json(await homePayload(c.env.DB, filter, original, before));
});
api.get("/ticker", async (c) => c.json({ items: await tickerItems(c.env.DB) }));
api.get("/board", async (c) => c.json(await boardPayload(c.env.DB)));
api.get("/highlights", async (c) => c.json(await highlightsOf(c.env.DB)));
api.get("/orgs", async (c) => {
	const group = c.req.query("group") || "";
	const asMap = c.req.query("map") === "1" || group === "map";
	return c.json(await orgsPayload(c.env.DB, group, asMap));
});
api.get("/geocode", apiGeocode);
api.get("/address", apiAddress);
api.get("/list/:key", async (c) => {
	const tkey = c.req.param("key");
	const kind = c.req.query("kind") || "";
	const when = c.req.query("when") || "";
	const before = c.req.query("before") || "";
	const payload = await listPayload(c.env.DB, tkey, kind, when, before);
	if ("error" in payload) return c.json(payload, 404);
	return c.json(payload);
});
api.get("/r/:slug", async (c) => {
	const rec = await onePublic(c.env.DB, c.req.param("slug"));
	if (!rec) return c.json({ error: "Not found" }, 404);
	if (rec.type === "post" && fieldStr(rec.data, "origin") === "Repost" && fieldStr(rec.data, "link")) return c.json({ redirect: fieldStr(rec.data, "link") });
	const { outgoing, incoming } = await linksFor(c.env.DB, [rec.id]);
	const out = outgoing.get(rec.id) || {};
	const inc = incoming.get(rec.id) || {};
	const actorId = (out[rec.type === "paper" ? "orgs" : rec.type === "product" ? "maker" : rec.type === "model" ? "developer" : "about"] || [])[0]?.id;
	const extras = actorId ? await allByIds(c.env.DB, [actorId]) : /* @__PURE__ */ new Map();
	const actor = actorId ? extras.get(actorId) : void 0;
	const relatedIds = Object.values(out).flat().map((x) => x.id).concat(Object.values(inc).flat().map((x) => x.id));
	const related = await allByIds(c.env.DB, relatedIds);
	const auth = c.get("auth");
	const comments = {
		count: 0,
		items: await commentsFor(c.env.DB, rec.id, auth)
	};
	comments.count = comments.items.filter((x) => x.status === "approved").length;
	const soc = await socialState(c.env.DB, auth, [rec.id]);
	const pins = auth.logged ? await pinIds(c.env.DB) : [];
	const quote_on = rec.type === "product" && orderMode(rec) === "quote";
	const gallery = galleryFor(rec, rec.type === "post" ? fieldStr(rec.data, "video") : fieldStr(rec.data, "official_video") || fieldStr(rec.data, "video"), fieldStr(rec.data, "video_credit"));
	const bodyHtml = rec.body ? md(rec.body) : "";
	return c.json({
		...rec,
		outgoing: out,
		incoming: inc,
		category: categoryKey(rec),
		type_label: typeLabel(rec),
		href: `/r/${rec.slug}`,
		image: phModel(rec, "hero", rec.type === "model" ? actor : void 0).src,
		ph: phModel(rec, rec.type === "company" ? "big" : "hero", rec.type === "model" ? actor : void 0),
		actor: actor ? {
			slug: actor.slug,
			name: actor.name,
			ph: phModel(actor, "av")
		} : null,
		gallery,
		body_html: bodyHtml,
		comments,
		commentable: COMMENTABLE.includes(rec.type),
		likes: soc.likes.get(rec.id) || 0,
		liked: soc.liked.has(rec.id),
		saved: soc.saved.has(rec.id),
		following: soc.following.has(rec.id),
		watching: soc.watching.has(rec.id),
		pinned: pins.includes(rec.id),
		can_pin: can(auth, "home"),
		can_edit: auth.logged,
		can_manage: [
			"company",
			"university",
			"lab"
		].includes(rec.type) && auth.user ? await canManage(c, rec.id) : false,
		claim_pending: auth.user ? Boolean((await c.env.DB.prepare("SELECT 1 AS n FROM submissions WHERE user_id=? AND kind='claim' AND target_id=? AND status='pending'").bind(auth.user.id, rec.id).first())?.n) : false,
		claimed: Boolean((await c.env.DB.prepare("SELECT 1 AS n FROM owners WHERE company_id=?").bind(rec.id).first())?.n),
		site_org: rec.slug === SITE_ORG_SLUG,
		quote_on,
		related: [...related.values()].map((r) => ({
			id: r.id,
			slug: r.slug,
			name: r.name,
			type: r.type,
			type_label: typeLabel(r),
			summary: r.summary,
			href: `/r/${r.slug}`,
			ph: phModel(r, "md"),
			category: categoryKey(r),
			status: fieldStr(r.data, "status"),
			date: feedDate(r)
		})),
		facts: [rec.type === "event" && whenText(rec, true) ? {
			k: "When",
			v: whenText(rec, true),
			extra: countdown(rec)
		} : null, rec.type === "event" && placeText(rec) ? {
			k: "Where",
			v: placeText(rec),
			map: `https://www.openstreetmap.org/search?query=${encodeURIComponent(placeText(rec))}`
		} : null].filter(Boolean),
		ev: rec.type === "event" ? {
			date: evDayPart(rec),
			state: evState(rec),
			place: placeText(rec),
			when: whenText(rec, true),
			countdown: countdown(rec),
			url: fieldStr(rec.data, "url")
		} : null,
		category_kind: rec.type === "post" || rec.type === "paper" ? categoryOf(rec, CAT_ALIAS, POST_CATEGORIES) : null,
		site_name: SITE_NAME,
		credits: fieldStr(rec.data, "credits"),
		excerpt: rec.summary || stripMd(rec.body || "").slice(0, 200),
		spec_ranks: await computeSpecRanks(c.env.DB, rec),
		options: (() => {
			const raw = fieldVal(rec.data, "options");
			return Array.isArray(raw) ? raw : [];
		})()
	});
});
api.get("/search", async (c) => {
	const q = (c.req.query("q") || "").trim();
	const limit = Math.min(Number(c.req.query("limit") || 0) || (c.req.query("grouped") ? 200 : 24), 200);
	const types = (c.req.query("types") || "").split(",").filter(Boolean);
	const hits = await searchHits(c.env.DB, q, limit || 24, types.length ? types : void 0);
	if (c.req.query("grouped") === "1") return c.json(groupSearch(q, hits));
	return c.json(hits.map(({ id, name, slug, type, type_label, plural, summary }) => ({
		id,
		name,
		slug,
		type,
		type_label,
		plural,
		summary
	})));
});
api.get("/page/:key", async (c) => {
	const doc = await pageDoc(c.env.DB, c.req.param("key"));
	if (!doc) return c.json({ error: "Not found" }, 404);
	return c.json(doc);
});
api.get("/compare", async (c) => {
	const payload = await comparePayload(c.env.DB, c.req.query("ids") || "");
	if ("error" in payload) return c.json({ error: payload.error }, payload.status);
	return c.json(payload);
});
api.post("/like/:id", (c) => apiToggle(c, "like", c.req.param("id")));
api.post("/save/:id", (c) => apiToggle(c, "save", c.req.param("id")));
api.post("/follow/:id", (c) => apiToggle(c, "follow", c.req.param("id")));
api.post("/ufollow/:id", (c) => apiUfollow(c, c.req.param("id")));
api.get("/compose", async (c) => c.json(await composePayload(c, c.req.query("company") || "")));
api.get("/watchlist", async (c) => {
	const d = await watchlistPayload(c);
	return d instanceof Response ? d : c.json(d);
});
api.get("/watchlist/sources", async (c) => {
	const d = await sourcesPayload(c);
	return d instanceof Response ? d : c.json(d);
});
api.get("/watchlist/newsletter", async (c) => {
	const d = await newsletterPayload(c);
	return d instanceof Response ? d : c.json(d);
});
api.get("/create", async (c) => {
	const d = await createPayload(c, "menu");
	return c.json(d);
});
api.get("/create/:kind", async (c) => {
	const d = await createPayload(c, c.req.param("kind"));
	return c.json(d);
});
api.get("/admin/home", async (c) => {
	const g = gateStatus("/admin/home", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await homeAdminPayload(c));
});
api.get("/admin/reports", async (c) => {
	const g = gateStatus("/admin/reports", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await reportsPayload(c));
});
api.get("/admin/requests", async (c) => {
	const g = gateStatus("/admin/requests", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await requestsAdminPayload(c));
});
api.get("/community", async (c) => c.json(await communityPayload(c)));
api.get("/community/orgs", async (c) => {
	const g = gateStatus("/community/orgs", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	const d = await communityOrgsPayload(c);
	return "status" in d && d.status === 404 ? c.json(d, 404) : c.json(d);
});
api.get("/community/people", async (c) => {
	const g = gateStatus("/community/people", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	const d = await communityPeoplePayload(c);
	return "status" in d && d.status === 404 ? c.json(d, 404) : c.json(d);
});
api.get("/admin/meet", async (c) => {
	const g = gateStatus("/admin/meet", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	const d = await meetAdminPayload(c);
	return "status" in d && d.status === 404 ? c.json(d, 404) : c.json(d);
});
api.get("/admin/email", async (c) => {
	const g = gateStatus("/admin/email", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await emailAdminPayload(c));
});
api.get("/admin/stickers", async (c) => {
	const g = gateStatus("/admin/stickers", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await stickersPayload(c));
});
api.get("/admin/focus", async (c) => {
	const g = gateStatus("/admin/focus", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await focusPayload(c));
});
api.get("/claim/:slug", async (c) => {
	if (!c.get("auth").user) return c.json({
		error: "Log in first.",
		next: "/login?next=/claim/" + c.req.param("slug")
	}, 401);
	const d = await claimPayload(c, c.req.param("slug"));
	return "status" in d && d.status === 404 ? c.json(d, 404) : c.json(d);
});
api.get("/manage/:slug", async (c) => {
	if (!c.get("auth").user) return c.json({
		error: "Log in first.",
		next: "/login?next=/manage/" + c.req.param("slug")
	}, 401);
	const d = await managePayload(c, c.req.param("slug"), c.req.query("tab") || "info");
	return "status" in d && typeof d.status === "number" && d.status >= 400 ? c.json(d, d.status) : c.json(d);
});
api.get("/manage/:slug/:section", async (c) => {
	if (!c.get("auth").user) return c.json({
		error: "Log in first.",
		next: "/login?next=/manage/" + c.req.param("slug")
	}, 401);
	const d = await managePayload(c, c.req.param("slug"), c.req.param("section") || "info");
	return "status" in d && typeof d.status === "number" && d.status >= 400 ? c.json(d, d.status) : c.json(d);
});
var app = new Hono();
function isOauthCallback(path) {
	return /^\/api\/auth\/oauth\/[a-z]+\/callback$/.test(path);
}
app.use("*", async (c, next) => {
	const auth = await loadAuth(c.req.raw, c.env);
	c.set("auth", auth);
	const path = new URL(c.req.url).pathname;
	if (isMutating(c.req.method) && path !== "/unsubscribe" && !isOauthCallback(path) && !sameOrigin(c.req.raw)) return c.text("Cross-origin request refused", 403);
	await next();
	if (auth.setCookies) for (const ck of auth.setCookies) c.header("Set-Cookie", ck, { append: true });
});
app.get("/healthz", (c) => c.json({ ok: true }));
app.get("/media/*", async (c) => {
	const name = new URL(c.req.url).pathname.replace(/^\/media\//, "");
	if (!name || name.includes("..") || name.startsWith("/")) return c.text("Not found", 404);
	try {
		const obj = await c.env.MEDIA.get(name);
		if (!obj) return c.text("Not found", 404);
		const headers = new Headers();
		obj.writeHttpMetadata(headers);
		headers.set("etag", obj.httpEtag);
		headers.set("cache-control", "public, max-age=86400");
		return new Response(obj.body, { headers });
	} catch {
		return c.text("Not found", 404);
	}
});
async function mePayload(c) {
	const auth = c.get("auth");
	const bar = adminBarLinks(auth, auth.logged ? await barCounts(c.env.DB, auth) : {});
	const { jsonUser } = await Promise.resolve().then(() => session_exports);
	const payload = jsonUser(auth, c.env);
	payload.signup_mode = await signupMode(c.env.DB);
	return {
		...payload,
		bar,
		bar_label: auth.needs_2fa ? "setup" : auth.logged ? auth.is_admin ? "admin" : "contributor" : "",
		look: auth.user ? walkerLook(auth.user) : null,
		stickers: await stickerPack(c.env.DB)
	};
}
async function stickerPack(db) {
	const out = {};
	try {
		const pack = JSON.parse(await setting(db, "stickers") || "[]");
		for (const x of pack) if (x && x.id && x.url) out[x.id] = {
			n: x.name,
			u: x.url
		};
	} catch {}
	return out;
}
api.get("/me", async (c) => c.json(await mePayload(c)));
api.get("/auth/config", authConfig);
api.post("/auth/login", postLogin);
api.post("/auth/login/code", postLoginCode);
api.post("/auth/join", postJoin);
api.get("/auth/oauth/:provider", (c) => {
	const p = c.req.param("provider");
	if (p !== "google" && p !== "apple" && p !== "x") return c.json({ error: "Unknown sign-in method." }, 404);
	return startOAuth(c, p);
});
api.get("/auth/oauth/:provider/callback", (c) => {
	const p = c.req.param("provider");
	if (p !== "google" && p !== "apple" && p !== "x") return c.json({ error: "Unknown sign-in method." }, 404);
	return oauthCallback(c, p);
});
api.post("/auth/oauth/:provider/callback", (c) => {
	const p = c.req.param("provider");
	if (p !== "google" && p !== "apple" && p !== "x") return c.json({ error: "Unknown sign-in method." }, 404);
	return oauthCallback(c, p);
});
api.post("/auth/logout", postLogout);
api.get("/account/:tab?", async (c) => {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	const tab = c.req.param("tab") || "overview";
	return c.json(await accountPayload(c, tab));
});
api.post("/account", async (c) => {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	return postAccount(c);
});
api.post("/account/character", async (c) => {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	return postCharacter(c);
});
api.post("/account/security", async (c) => {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	return postSecurity(c);
});
api.get("/account/export.json", async (c) => {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	return exportMine(c);
});
api.get("/users", async (c) => {
	if (!c.get("auth").is_admin) return c.json({ error: "Not found" }, 404);
	return c.json(await usersPayload(c));
});
api.post("/users", postUsers);
api.get("/review", async (c) => {
	const g = gateStatus("/review", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await reviewPayload(c));
});
api.post("/review/:id", async (c) => {
	const g = gateStatus("/review", "POST", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return postReview(c, c.req.param("id"));
});
api.post("/review/comment/:id", async (c) => {
	const g = gateStatus("/review", "POST", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return postReviewComment(c, c.req.param("id"));
});
api.get("/new", async (c) => {
	if (!can(c.get("auth"), "create")) return c.json({ error: "Not found" }, 404);
	return c.json(await newChooser());
});
api.get("/edit/:slug", async (c) => {
	const g = gateStatus("/edit/" + c.req.param("slug"), "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	const payload = await editPayload(c, c.req.param("slug"));
	if ("error" in payload) return c.json({ error: payload.error }, payload.status);
	return c.json(payload);
});
api.get("/new/:type", async (c) => {
	if (!can(c.get("auth"), "create")) return c.json({ error: "Not found" }, 404);
	const payload = await editPayload(c, void 0, c.req.param("type"));
	if ("error" in payload) return c.json({ error: payload.error }, payload.status);
	return c.json(payload);
});
api.post("/save", async (c) => {
	const g = gateStatus("/save", "POST", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return postSave(c);
});
api.post("/compose", async (c) => {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	return postCompose(c);
});
api.post("/delete/:slug", async (c) => {
	const g = gateStatus("/delete/" + c.req.param("slug"), "POST", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return postDelete(c, c.req.param("slug"));
});
var ADMIN_STUBS = {
	"/admin/email": {
		title: "Email",
		note: "SMTP settings. Mail sending still uses the operator's server; this page stores the same settings keys as the Python site."
	},
	"/admin/stickers": {
		title: "Stickers",
		note: "Sticker packs for the Lounge land with Stage 6."
	},
	"/admin/focus": {
		title: "Focus areas",
		note: "Focus areas for organisation tags."
	},
	"/admin/requests": {
		title: "Quote requests",
		note: "Buyer quote requests. Admin only."
	},
	"/admin/meet": {
		title: "Community requests",
		note: "Introductions queue. Needs the Meet privilege."
	},
	"/admin/home": {
		title: "Home highlights",
		note: "Welcome message and pinned items. Needs the Home privilege."
	},
	"/admin/reports": {
		title: "Reports",
		note: "Member reports. Needs the Review privilege."
	},
	"/community/people": {
		title: "People",
		note: "The Community People list is admin-only, as in the Python site."
	},
	"/community/orgs": {
		title: "Community organisations",
		note: "Needs the Meet privilege."
	}
};
api.get("/admin/page", async (c) => {
	const path = c.req.query("path") || "";
	const g = gateStatus(path, "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	const stub = ADMIN_STUBS[path];
	if (!stub) return c.json({ error: "Not found" }, 404);
	return c.json(stub);
});
app.post("/login", postLogin);
app.post("/login/code", postLoginCode);
app.post("/join", postJoin);
app.post("/logout", postLogout);
app.post("/account", async (c) => {
	if (!c.get("auth").user) return c.redirect("/login?next=/account");
	return postAccount(c);
});
app.post("/account/character", async (c) => {
	if (!c.get("auth").user) return c.redirect("/login?next=/account/character");
	return postCharacter(c);
});
app.post("/account/security", async (c) => {
	if (!c.get("auth").user) return c.redirect("/login?next=/account/security");
	return postSecurity(c);
});
app.post("/users", postUsers);
app.post("/review/:id", async (c) => postReview(c, c.req.param("id")));
app.post("/save", postSave);
app.post("/compose", postCompose);
app.post("/delete/:slug", async (c) => postDelete(c, c.req.param("slug")));
app.post("/api/like/:id", (c) => apiToggle(c, "like", c.req.param("id")));
app.post("/api/save/:id", (c) => apiToggle(c, "save", c.req.param("id")));
app.post("/api/follow/:id", (c) => apiToggle(c, "follow", c.req.param("id")));
app.post("/api/ufollow/:id", (c) => apiUfollow(c, c.req.param("id")));
app.post("/comment/:id", (c) => postComment(c, c.req.param("id")));
app.post("/api/comment/:id", (c) => postComment(c, c.req.param("id")));
app.post("/comment/:id/delete", (c) => postCommentDelete(c, c.req.param("id")));
app.post("/watch/:slug", (c) => postWatch(c, c.req.param("slug")));
app.post("/api/watch/:slug", (c) => postWatch(c, c.req.param("slug")));
app.post("/quote/:slug", (c) => postQuote(c, c.req.param("slug")));
app.post("/api/quote/:slug", (c) => postQuote(c, c.req.param("slug")));
app.post("/report", postReport);
app.post("/api/report", postReport);
app.post("/home/pin/:slug", (c) => postPin(c, c.req.param("slug")));
app.post("/admin/home", postHomeAdmin);
app.post("/admin/reports", postReports);
app.post("/admin/requests", postRequestsAdmin);
app.post("/watchlist/sections", postWlSections);
app.post("/watchlist/add", postWlAdd);
app.post("/watchlist/remove", postWlRemove);
app.post("/watchlist/schedule", postWlSchedule);
app.post("/watchlist/send", postWlSend);
app.post("/create/org", postCreateOrg);
app.post("/create/product", (c) => postCreateItem(c, "product"));
app.post("/create/job", (c) => postCreateItem(c, "job"));
app.post("/community/meet", postMeet);
app.post("/community/meet/withdraw", postWithdraw);
app.post("/admin/meet", postMeetAdmin);
app.post("/admin/email", postEmailAdmin);
app.post("/admin/email/test", postEmailTest);
app.post("/admin/stickers", postStickers);
app.post("/admin/focus", postFocus);
app.post("/claim/:slug/code", (c) => postClaimCode(c, c.req.param("slug")));
app.post("/claim/:slug/verify", (c) => postClaimVerify(c, c.req.param("slug")));
app.post("/manage/job/:id/toggle", (c) => postJobToggle(c, c.req.param("id")));
app.post("/manage/:slug", (c) => postManage(c, c.req.param("slug"), "info"));
app.post("/manage/:slug/:section", (c) => postManage(c, c.req.param("slug"), c.req.param("section")));
app.get("/unsubscribe", unsubscribe);
app.post("/unsubscribe", unsubscribe);
app.get("/export.json", async (c) => {
	const g = gateStatus("/export.json", "GET", c.get("auth"));
	if (g) return deny(c, g);
	const recs = await c.env.DB.prepare("SELECT * FROM records ORDER BY id").all();
	const links = await c.env.DB.prepare("SELECT src, rel, dst, note, pos FROM links ORDER BY id").all();
	const body = JSON.stringify({
		exported: (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace("T", " "),
		records: (recs.results || []).map((r) => loadRow(r)),
		links: links.results || []
	}, null, 2);
	return new Response(body, { headers: {
		"content-type": "application/json",
		"content-disposition": "attachment; filename=embodiment-place-export.json"
	} });
});
function deny(c, g) {
	if (g.status === 302 && g.location) return c.redirect(g.location);
	if (g.status === 403) return c.html("<!doctype html><html><body><div class=empty><h1>Admins only</h1><p>Your account can read and chat, not edit.</p></div></body></html>", 403);
	return c.html("<!doctype html><html><body><div class=empty><h1>Not found</h1></div></body></html>", 404);
}
function shellPage(c, me) {
	const path = new URL(c.req.url).pathname;
	const auth = c.get("auth");
	let bar = "";
	if (auth.needs_2fa) bar = `<div class="adminbar adminbar-setup"><span>Set up two-step login to use admin and contributor tools.</span><a href="/account/security">Open Security</a></div>`;
	else if (auth.logged) bar = `<div class=adminbar><span>${`Editing on${auth.is_admin ? "" : " · contributor"}`}</span>${me.bar.map((l) => `<a href="${l.href}">${l.label}</a>`).join("")}</div>`;
	const account = auth.user ? `<a href="/watchlist">Watchlist</a><a href="/create" class="navcreate">+ Create</a><a href="/account" class="navme" aria-label="Account, ${auth.user.username}">Account</a><form method=post action=/logout class=inline onsubmit="return confirm('Log out of embodiment.place?')"><button class=linkbtn>Log out</button></form>` : `<a href="/login">Log in</a><a href="/join">Sign up</a>`;
	let main = `<h1>${path}</h1>`;
	if (path === "/login" || path.startsWith("/login/")) main = `<div class=loginbox><h1>Log in</h1><form method=post action=/login><input name=username><input type=password name=password><button class=btn>Log in</button></form></div>`;
	if (path === "/join") main = `<div class=loginbox><h1>Create an account</h1></div>`;
	if (path.startsWith("/account")) main = `<div class=acct><h1>Account</h1><nav class=tabs>${me.user ? "" : ""}</nav></div>`;
	if (path === "/users") main = `<div class=listhead><h1>Users</h1></div><table class=data></table>`;
	if (path === "/review") main = `<div class=listhead><h1>Review</h1></div>`;
	if (path === "/new") main = `<div class=listhead><h1>New record</h1></div>`;
	return `<!doctype html><html><body>${bar}<header class=top><div class=bar><a class=brand href=/>*embodiment.place</a><nav class=right>${account}</nav></div></header><main class=wrap>${main}</main></body></html>`;
}
api.get("/forgot", async (c) => c.json(await forgotPayload(c)));
api.post("/forgot", postForgot);
api.get("/reset", async (c) => c.json(await resetPayload(c)));
api.post("/reset", postReset);
api.post("/walk", postWalk);
api.get("/walk/peek", getWalkPeek);
api.get("/live/ws", getLiveWs);
api.get("/room/poll", getRoomPoll);
api.post("/room/post", postRoom);
api.post("/room/msg/:id", postRoomMsg);
api.get("/event/:eid/poll", getEvPoll);
api.post("/event/:eid/post", postEv);
app.route("/api", api);
app.all("/login/debug", (c) => c.text("Not available", 404));
app.all("*", async (c) => {
	const path = new URL(c.req.url).pathname;
	if (isGatedPath(path) && ![
		"/login",
		"/login/code",
		"/join",
		"/logout",
		"/forgot"
	].includes(path) && !path.startsWith("/reset") && !path.startsWith("/verify") && !path.startsWith("/login/")) {
		const g = gateStatus(path, c.req.method, c.get("auth"));
		if (g) return deny(c, g);
	}
	if (c.req.method !== "GET" && c.req.method !== "HEAD") return c.text("Not found", 404);
	if (c.env.ASSETS) return c.env.ASSETS.fetch(c.req.raw);
	const me = await mePayload(c);
	return c.html(shellPage(c, me), 200);
});
// \0virtual:cloudflare/worker-entry
var worker_entry_default = { async fetch(request, env, ctx) {
	return app.fetch(request, env, ctx);
} };
export { LiveHub, app, worker_entry_default as default };
