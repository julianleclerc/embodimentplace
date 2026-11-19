var VIEWS = listViews_default;
function phModel(rec, cls = "", via) {
	if (via) return phOf({
		slug: via.slug,
		name: via.name,
		type: via.type,
		data: via.data
	}, cls);
	return phOf({
		slug: rec.slug,
		name: rec.name,
		type: rec.type,
		data: rec.data
	}, cls);
}
function viewFor(tkey) {
	return VIEWS[tkey];
}
function videoThumb(url) {
	const v = videoInfo(url);
	if (!v) return null;
	if (v.kind === "youtube") return {
		kind: "youtube",
		id: v.id,
		thumb: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
		embed: `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1`,
		srcLabel: "YouTube",
		url
	};
	return {
		kind: "x",
		id: v.id,
		thumb: "",
		embed: `https://platform.twitter.com/embed/Tweet.html?id=${v.id}&dnt=true`,
		srcLabel: "X",
		url
	};
}
async function tickerItems(db, limit = 10) {
	const types = Object.keys(DATE_FIELDS);
	return (await allPublic(db, `SELECT * FROM records WHERE type IN (${types.map(() => "?").join(",")}) AND private = 0`, ...types)).map((r) => ({
		d: recordDate(r),
		r
	})).filter((x) => x.d).sort((a, b) => b.d.localeCompare(a.d)).slice(0, limit).map(({ d, r }) => {
		const repost = r.type === "post" && fieldStr(r.data, "origin") === "Repost" && fieldStr(r.data, "link");
		const link = fieldStr(r.data, "link");
		return {
			href: repost ? link : `/r/${r.slug}`,
			external: !!repost,
			date: d.slice(0, 10),
			label: TYPE_LABELS[r.type]?.label || r.type,
			name: r.name
		};
	});
}
async function boardPayload(db) {
	const up = (await allPublic(db, "SELECT * FROM records WHERE type = 'event' AND private = 0")).filter((v) => evState(v) === "Upcoming").sort((a, b) => (fieldStr(a.data, "date") || "").localeCompare(fieldStr(b.data, "date") || "")).slice(0, 4);
	const fund = (await allPublic(db, "SELECT * FROM records WHERE type = 'funding' AND private = 0")).sort((a, b) => recordDate(b).localeCompare(recordDate(a))).slice(0, 4);
	const fl = await linksFor(db, fund.map((r) => r.id));
	return {
		upcoming: up.map((v) => ({
			date: fieldStr(v.data, "date"),
			slug: v.slug,
			name: v.name
		})),
		funding: fund.map((r) => {
			const comp = (fl.outgoing.get(r.id)?.company || [])[0];
			const amt = fieldVal(r.data, "amount_usd_m");
			const amount = amt != null && amt !== "" ? fmtNum(amt) : "";
			return {
				slug: r.slug,
				name: comp?.name || r.name,
				round: fieldStr(r.data, "round"),
				amount,
				date: recordDate(r)
			};
		})
	};
}
async function highlightsOf(db) {
	const raw = await setting(db, "home_welcome");
	let welcome = null;
	if (raw) try {
		const w = JSON.parse(raw);
		if (w.on && (w.title || w.text)) welcome = {
			title: w.title || "",
			text: w.text || "",
			btn_label: w.btn_label,
			btn_url: w.btn_url
		};
	} catch {}
	const pinsRaw = await setting(db, "home_pins");
	let pinIds = [];
	if (pinsRaw) try {
		pinIds = JSON.parse(pinsRaw).slice(0, 8);
	} catch {}
	const pinRecs = pinIds.length ? [...(await allByIds(db, pinIds)).values()] : [];
	pinRecs.sort((a, b) => pinIds.indexOf(a.id) - pinIds.indexOf(b.id));
	const pins = pinRecs.length ? await feedItems(db, pinRecs) : [];
	return {
		welcome,
		pins
	};
}
async function feedItems(db, recs) {
	if (!recs.length) return [];
	const { outgoing } = await linksFor(db, recs.map((r) => r.id));
	const actorIds = [];
	for (const r of recs) {
		const rel = r.type === "paper" ? "orgs" : "about";
		const actor = ((outgoing.get(r.id) || {})[rel] || []).find((x) => ORG_TYPES.includes(x.type) && x.note !== "cc");
		if (actor) actorIds.push(actor.id);
	}
	const actors = await allByIds(db, actorIds);
	const soc = await socialCounts(db, recs.map((r) => r.id));
	return recs.map((r) => {
		const links = outgoing.get(r.id) || {};
		const actorHit = (links[r.type === "paper" ? "orgs" : "about"] || []).find((x) => ORG_TYPES.includes(x.type) && x.note !== "cc");
		const actorRec = actorHit ? actors.get(actorHit.id) : void 0;
		const isPaper = r.type === "paper";
		const link = isPaper ? fieldStr(r.data, "url") : fieldStr(r.data, "link");
		const repost = fieldStr(r.data, "origin") === "Repost";
		const host = link ? hostOf(link) : "";
		const cat = categoryOf(r, CAT_ALIAS, POST_CATEGORIES);
		const intro = r.summary || stripMd(r.body || "").slice(0, 200);
		const credits = parseCredits(fieldVal(r.data, "credits"));
		const creditNames = credits.slice(0, 2).map(([n]) => n);
		let credit = creditNames.length ? "By " + creditNames.join(", ") : "";
		if (credits.length > 2) credit += ` +${credits.length - 2}`;
		const mins = r.body || r.body_len ? readMinutes(r.body || "", r.body_len) : 0;
		const meta = [
			relDate(feedDate(r)),
			credit,
			mins ? `${mins} min read` : "",
			host && repost ? host : ""
		].filter(Boolean).join(" · ");
		const go = repost && link ? link : `/r/${r.slug}`;
		const chips = [];
		for (const items of Object.values(links)) for (const x of items) {
			if (actorHit && x.id === actorHit.id) continue;
			chips.push({
				slug: x.slug,
				name: x.name
			});
		}
		const vidRaw = isPaper ? "" : fieldStr(r.data, "video");
		const video = vidRaw ? videoThumb(vidRaw) : null;
		const thumb = video ? {
			kind: "video",
			video
		} : {
			kind: "image",
			ph: phModel(r, "cover")
		};
		const srcSite = fieldStr(r.data, "source_site") || host || "another site";
		return {
			id: r.id,
			slug: r.slug,
			type: r.type,
			name: r.name,
			href: go,
			external: !!(repost && link),
			category: cat,
			excerpt: intro,
			meta,
			readmore: repost && link ? `Read on ${host} ↗` : "Read more →",
			origin: {
				repost,
				label: repost ? `Repost · ${srcSite}` : "Original"
			},
			actor: actorRec ? {
				slug: actorRec.slug,
				name: actorRec.name,
				ph: phModel(actorRec, "av")
			} : null,
			who: actorRec ? {
				href: `/r/${actorRec.slug}`,
				name: actorRec.name
			} : { name: fieldStr(r.data, "authors_text") || "embodiment.place" },
			thumb,
			chips: chips.slice(0, 4),
			likes: soc.likes.get(r.id) || 0,
			comments: soc.comments.get(r.id) || 0,
			commentable: COMMENTABLE.includes(r.type),
			feed_at: feedDate(r)
		};
	});
}
async function homePayload(db, filter, original, before) {
	filter = FEED_FILTER_ALIAS[filter] || filter;
	const filt = FEED_FILTERS.find((f) => f.key === filter) || FEED_FILTERS[0];
	const types = filt.types;
	const ph = types.map(() => "?").join(",");
	const binds = [...types];
	let sql = `SELECT * FROM records WHERE type IN (${ph}) AND private = 0`;
	if (filter === "research") {
		sql += " AND (type = 'paper' OR COALESCE(json_extract(data, '$.kind.v'), json_extract(data, '$.kind'), json_extract(data, '$.tags.v')) LIKE ?)";
		binds.push("%Research%");
	} else if (filter !== "all") {
		sql += " AND (COALESCE(json_extract(data, '$.kind.v'), json_extract(data, '$.kind')) = ?)";
		binds.push(filt.label);
	}
	if (original) sql += " AND COALESCE(json_extract(data, '$.origin.v'), json_extract(data, '$.origin')) = 'Original'";
	const cur = parseFeedCursor(before);
	if (cur) {
		sql += " AND (COALESCE(feed_at, substr(created, 1, 10), '') < ? OR (COALESCE(feed_at, substr(created, 1, 10), '') = ? AND id < ?))";
		binds.push(cur.at, cur.at, cur.id);
	}
	sql += " ORDER BY COALESCE(feed_at, substr(created, 1, 10), '') DESC, id DESC LIMIT ?";
	binds.push(FEED_PAGE_SIZE + 1);
	const rows = await allPublic(db, sql, ...binds);
	const more = rows.length > FEED_PAGE_SIZE;
	const slice = rows.slice(0, FEED_PAGE_SIZE);
	const items = await feedItems(db, slice);
	const last = slice[slice.length - 1];
	const next = more && last ? `${feedDate(last)}_${last.id}` : null;
	const showChrome = !before && filter === "all";
	return {
		items,
		next,
		filter: filt.key,
		original,
		ticker: await tickerItems(db),
		board: await boardPayload(db),
		highlights: showChrome ? await highlightsOf(db) : {
			welcome: null,
			pins: []
		}
	};
}
function listSubnav(tkey, extra) {
	const cat = HW_CAT[tkey];
	if (cat) {
		const cats = HW_CATEGORIES.filter((c) => c.tab === cat.tab);
		if (cat.tab === "hardware") {
			const groups = [];
			for (const c of cats) {
				const g = c.group || "Other";
				if (!groups.includes(g)) groups.push(g);
			}
			const cur = cat.group || "Other";
			const firstOf = (g) => cats.find((c) => (c.group || "Other") === g).key;
			return {
				subnav: groups.map((g) => ({
					href: `/t/${firstOf(g)}`,
					label: g,
					on: g === cur
				})),
				subnav2: cats.filter((c) => (c.group || "Other") === cur).map((c) => ({
					href: `/t/${c.key}`,
					label: c.plural,
					on: c.key === tkey
				}))
			};
		}
		return { subnav: cats.map((c) => ({
			href: `/t/${c.key}`,
			label: c.plural,
			on: c.key === tkey
		})) };
	}
	if (tkey === "event") {
		const { up = 0, past = 0 } = extra?.eventCounts || {};
		const when = extra?.when || "upcoming";
		return { subnav: [{
			href: "/t/event",
			label: "Upcoming",
			on: when !== "past",
			count: up
		}, {
			href: "/t/event?when=past",
			label: "Past",
			on: when === "past",
			count: past
		}] };
	}
	if (tkey === "benchmark") return { subnav: [{
		href: "/t/model",
		label: "Models",
		on: false
	}, {
		href: "/t/benchmark",
		label: "Benchmarks",
		on: true
	}] };
	if (tkey === "model") return {};
	if (tkey === "software" || tkey.startsWith("software:")) {
		const kind = tkey.startsWith("software:") ? tkey.slice(9) : "";
		return { subnav: SOFTWARE_KINDS.map((k) => ({
			href: `/t/software/${k.key}`,
			label: k.label,
			on: kind === k.key
		})) };
	}
	if ([
		"funding",
		"deployment",
		"paper",
		"timeline"
	].includes(tkey)) return { subnav: ACTIVITY_SUBNAV.map((s) => ({
		href: s.href,
		label: s.label,
		on: s.key === tkey
	})) };
	return {};
}
function facetValues(t, rec, links, makerCountry) {
	const fdata = { name: rec.name };
	const cols = (t.columns || []).filter((c) => c.startsWith("rel:") && t.rmap[c.slice(4)] || t.fmap[c]);
	for (const fk of [...t.facets || [], ...cols]) if (fk.startsWith("rel:")) fdata[fk] = (links[fk.slice(4)] || []).map((x) => x.name);
	else if (fk === "maker_country") fdata[fk] = makerCountry || "";
	else if (t.fmap[fk]) fdata[fk] = fieldVal(rec.data, fk);
	return fdata;
}
function buildFacets(t, recs) {
	const out = [];
	for (const fk of t.facets || []) {
		let label = fk, kind = "multi";
		if (fk.startsWith("rel:")) {
			const rel = t.rmap[fk.slice(4)];
			if (!rel) continue;
			label = rel.label;
		} else if (fk === "maker_country") label = "Maker origin";
		else {
			const f = t.fmap[fk];
			if (!f) continue;
			label = f.label;
			kind = f.kind === "number" || f.kind === "year" ? f.kind : "multi";
		}
		if (kind === "number" || kind === "year") {
			out.push({
				key: fk,
				label,
				kind
			});
			continue;
		}
		const counts = /* @__PURE__ */ new Map();
		for (const row of recs) {
			let vals = [];
			if (fk.startsWith("rel:")) vals = (row.links[fk.slice(4)] || []).map((x) => x.name);
			else if (fk === "maker_country") vals = row.makerCountry ? [row.makerCountry] : [];
			else {
				const v = fieldVal(row.rec.data, fk);
				vals = Array.isArray(v) ? v.map(String) : v != null && v !== "" ? [String(v)] : [];
			}
			for (const v of vals) counts.set(v, (counts.get(v) || 0) + 1);
		}
		if (!counts.size) continue;
		const options = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], void 0, { sensitivity: "base" })).map(([value, n]) => ({
			value,
			n
		}));
		const long = options.length > 8;
		out.push({
			key: fk,
			label,
			kind,
			options,
			long
		});
	}
	return out;
}
function evRow(r, orgs) {
	const [a] = evDates(r);
	return {
		slug: r.slug,
		name: r.name,
		summary: r.summary,
		href: `/r/${r.slug}`,
		month: monthYear(a),
		date: evDayPart(r),
		place: placeText(r),
		orgs,
		countdown: evState(r) === "Ended" ? "" : countdown(r),
		state: evState(r)
	};
}
async function listPayload(db, tkey, kind = "", when = "", before = "") {
	if (tkey === "event") {
		const recs = await allPublic(db, "SELECT * FROM records WHERE type = 'event' AND private = 0");
		const links = await linksFor(db, recs.map((r) => r.id));
		const up = recs.filter((r) => evState(r) !== "Ended").sort((a, b) => {
			const da = evDates(a)[0]?.toISOString() || "9999";
			const db_ = evDates(b)[0]?.toISOString() || "9999";
			return da.localeCompare(db_) || a.name.localeCompare(b.name);
		});
		const past = recs.filter((r) => evState(r) === "Ended").sort((a, b) => (evDates(b)[0]?.toISOString() || "").localeCompare(evDates(a)[0]?.toISOString() || ""));
		const rows = (when === "past" ? past : up).map((r) => evRow(r, (links.outgoing.get(r.id)?.organisers || []).map((x) => x.name).join(", ")));
		return {
			key: "event",
			label: "Event",
			plural: "Events",
			section: "Events",
			view: "events",
			items: [],
			events: {
				upcoming: when === "past" ? [] : rows,
				past: when === "past" ? rows : []
			},
			when: when === "past" ? "past" : "upcoming",
			...listSubnav("event", {
				eventCounts: {
					up: up.length,
					past: past.length
				},
				when
			})
		};
	}
	if (tkey === "software") {
		const recs = await allPublic(db, "SELECT * FROM records WHERE type = 'software' AND private = 0 ORDER BY name COLLATE NOCASE");
		const sk = SOFTWARE_KINDS.find((k) => k.key === kind);
		const filtered = kind ? recs.filter((r) => {
			const k = fieldStr(r.data, "kind").toLowerCase();
			return k.replace(/\s+/g, "") === kind || k === (sk?.label || "").toLowerCase();
		}) : recs;
		return tableList(db, "software", kind ? `software:${kind}` : "software", sk?.label || "Software", "Software", "Software", filtered);
	}
	const hw = HW_CAT[tkey];
	const typeKey = hw ? "product" : tkey;
	if (!hw && !TYPE_LABELS[typeKey] && !VIEWS[tkey]) return { error: "Unknown list" };
	if ((typeKey === "post" || typeKey === "paper") && !hw) return feedTypeList(db, typeKey, before);
	const recs0 = await allPublic(db, "SELECT * FROM records WHERE type = ? AND private = 0 ORDER BY name COLLATE NOCASE", typeKey);
	const recs = hw ? recs0.filter((r) => categoryKey(r) === tkey) : recs0;
	const t = viewFor(hw ? tkey : typeKey);
	const info = hw ? {
		label: hw.label,
		plural: hw.plural,
		section: hw.tab === "robots" ? "Robots" : "Hardware"
	} : {
		label: TYPE_LABELS[typeKey]?.label || t?.label || tkey,
		plural: TYPE_LABELS[typeKey]?.plural || t?.plural || tkey,
		section: TYPE_LABELS[typeKey]?.section || ""
	};
	if (hw) return hwList(db, tkey, info, recs, t);
	return tableList(db, typeKey, tkey, info.label, info.plural, info.section, recs, t);
}
async function hwList(db, tkey, info, recs, t) {
	const { outgoing } = await linksFor(db, recs.map((r) => r.id));
	const makers = await allByIds(db, recs.flatMap((r) => (outgoing.get(r.id)?.maker || []).map((x) => x.id)));
	const bundled = recs.map((rec) => {
		const links = outgoing.get(rec.id) || {};
		const makerHit = (links.maker || [])[0];
		const maker = makerHit ? makers.get(makerHit.id) : void 0;
		return {
			rec,
			links,
			maker,
			makerCountry: maker ? fieldStr(maker.data, "country") : ""
		};
	});
	const tiles = bundled.map(({ rec, links, maker, makerCountry }) => {
		const view = t || viewFor(tkey);
		const stats = (view?.card_specs || HW_CAT[tkey].card_specs || []).slice(0, 4).map((key) => {
			const f = view?.fmap[key];
			const v = fieldVal(rec.data, key);
			if (v == null || v === "") return null;
			return {
				label: shortLabel(f?.label || key),
				value: shortValue(f?.unit || "", v)
			};
		}).filter((x) => !!x);
		const priceField = view?.fmap.price_usd;
		let price = null;
		if (priceField) {
			const v = fieldVal(rec.data, "price_usd");
			if (v == null || v === "") price = fieldStr(rec.data, "for_sale") === "No" ? null : "Price n/a";
			else price = shortValue("USD", v);
		}
		const facets = facetValues(view || {
			facets: [],
			columns: [],
			card_specs: [],
			fmap: {},
			rmap: {},
			fields: []
		}, rec, links, makerCountry);
		return {
			id: rec.id,
			slug: rec.slug,
			name: rec.name,
			card_name: cardName(rec.name, maker?.name),
			status: fieldStr(rec.data, "status"),
			maker: maker ? {
				slug: maker.slug,
				name: maker.name
			} : null,
			type_label: typeLabel(rec),
			category: categoryKey(rec),
			href: `/r/${rec.slug}`,
			ph: phModel(rec, "md"),
			stats,
			price,
			versions: [],
			facets,
			sort: {
				name: rec.name.toLowerCase(),
				...Object.fromEntries(Object.entries(facets).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v]))
			},
			cmp_id: String(rec.id)
		};
	});
	const facets = t ? buildFacets(t, bundled) : [];
	const columns = (t?.columns || HW_CAT[tkey].columns || []).map((key) => ({
		key,
		label: t?.fmap[key]?.label || key,
		numeric: t?.fmap[key]?.kind === "number"
	}));
	return {
		key: tkey,
		label: info.label,
		plural: info.plural,
		section: info.section,
		view: "grid",
		items: tiles,
		facets,
		columns,
		...listSubnav(tkey)
	};
}
async function tableList(db, typeKey, tkey, label, plural, section, recs, t) {
	t = t || viewFor(typeKey);
	const { outgoing } = await linksFor(db, recs.map((r) => r.id));
	const devs = await allByIds(db, recs.flatMap((r) => (outgoing.get(r.id)?.developer || outgoing.get(r.id)?.company || []).map((x) => x.id)));
	const bundled = recs.map((rec) => ({
		rec,
		links: outgoing.get(rec.id) || {}
	}));
	const columns = (t?.columns || []).map((key) => ({
		key,
		label: key.startsWith("rel:") ? t.rmap[key.slice(4)]?.label || key : t.fmap[key]?.label || key,
		numeric: t?.fmap[key]?.kind === "number"
	}));
	return {
		key: tkey,
		label,
		plural,
		section,
		view: "table",
		items: bundled.map(({ rec, links }) => {
			const devHit = (links.developer || links.company || [])[0];
			const dev = devHit ? devs.get(devHit.id) : void 0;
			const facets = t ? facetValues(t, rec, links) : { name: rec.name };
			const cells = (t?.columns || []).map((key) => {
				let text = "";
				if (key.startsWith("rel:")) text = (links[key.slice(4)] || []).map((x) => x.name).join(", ");
				else if (key === "name") text = rec.name;
				else text = fmtValue(fieldVal(rec.data, key));
				return {
					key,
					text
				};
			});
			return {
				id: rec.id,
				slug: rec.slug,
				name: rec.name,
				summary: rec.summary,
				href: `/r/${rec.slug}`,
				ph: phModel(rec, "sm", rec.type === "model" ? dev : void 0),
				cells,
				facets,
				sort: {
					name: rec.name.toLowerCase(),
					...Object.fromEntries(Object.entries(facets).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v]))
				},
				cmp_id: String(rec.id)
			};
		}),
		facets: t ? buildFacets(t, bundled) : [],
		columns,
		...listSubnav(tkey)
	};
}
async function orgCounts(db, ids) {
	const map = /* @__PURE__ */ new Map();
	if (!ids.length) return map;
	const chunk = 30;
	const results = [];
	for (let i = 0; i < ids.length; i += chunk) {
		const part = ids.slice(i, i + chunk);
		const ph = part.map(() => "?").join(",");
		const res = await db.prepare(`SELECT l.src, l.dst, r.type, l.rel
       FROM links l JOIN records r ON r.id = CASE WHEN l.src IN (${ph}) THEN l.dst ELSE l.src END
       WHERE (l.src IN (${ph}) OR l.dst IN (${ph})) AND r.private = 0`).bind(...part, ...part, ...part).all();
		results.push(...res.results || []);
	}
	for (const raw of results) {
		const r = raw;
		const oid = ids.includes(Number(r.src)) ? Number(r.src) : Number(r.dst);
		const bag = map.get(oid) || {
			hw: 0,
			models: 0,
			sw: 0,
			data: 0,
			papers: 0,
			labs: 0,
			deps: 0,
			rounds: 0
		};
		if (r.type === "product") bag.hw += 1;
		else if (r.type === "model") bag.models += 1;
		else if (r.type === "software") bag.sw += 1;
		else if (r.type === "datapack") bag.data += 1;
		else if (r.type === "paper") bag.papers += 1;
		else if (r.type === "lab") bag.labs += 1;
		else if (r.type === "deployment") bag.deps += 1;
		else if (r.type === "funding") bag.rounds += 1;
		map.set(oid, bag);
	}
	return map;
}
function makesLine(rec, o) {
	const parts = [
		[
			o.hw || 0,
			"robot",
			"robots"
		],
		[
			o.models || 0,
			"model",
			"models"
		],
		[
			o.sw || 0,
			"software product",
			"software products"
		],
		[
			o.data || 0,
			"dataset",
			"datasets"
		],
		[
			o.papers || 0,
			"paper",
			"papers"
		],
		[
			o.labs || 0,
			"research group",
			"research groups"
		],
		[
			o.deps || 0,
			"deployment",
			"deployments"
		],
		[
			o.rounds || 0,
			"funding round",
			"funding rounds"
		]
	];
	return (rec.type === "lab" ? parts.filter((p) => [
		"paper",
		"model",
		"dataset",
		"robot"
	].includes(p[1])) : parts).filter(([n]) => n).map(([n, one, many]) => `${n} ${n === 1 ? one : many}`).join(" · ");
}
function toOrgCard(rec, o, parent) {
	const roles = asStringList(fieldVal(rec.data, "roles"));
	const focus = asStringList(fieldVal(rec.data, "focus"));
	const country = fieldStr(rec.data, "country");
	const raised = fieldVal(rec.data, "raised_usd_m");
	return {
		id: rec.id,
		slug: rec.slug,
		name: rec.name,
		type: rec.type,
		summary: rec.summary,
		href: `/r/${rec.slug}`,
		ph: phModel(rec, "av"),
		country,
		focus,
		roles,
		parent: parent ? {
			slug: parent.slug,
			name: parent.name
		} : null,
		makes: makesLine(rec, o),
		out: Object.values(o).reduce((a, b) => a + b, 0),
		products: o.hw || 0,
		raised: raised != null && raised !== "" ? Number(raised) : null,
		founded: fieldStr(rec.data, "founded"),
		updated: rec.updated || ""
	};
}
function locationRows(rec) {
	const raw = fieldVal(rec.data, "locations");
	const rows = Array.isArray(raw) ? raw : [];
	const out = [];
	for (const r of rows) {
		if (!r || typeof r !== "object") continue;
		const address = String(r.address || "").trim();
		if (!address) continue;
		const lat = Number(r.lat);
		const lon = Number(r.lon);
		const ok = Number.isFinite(lat) && Number.isFinite(lon) && lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
		out.push({
			kind: String(r.kind || "Office"),
			address,
			lat: ok ? lat : null,
			lon: ok ? lon : null
		});
	}
	out.sort((a, b) => Number(a.kind !== "HQ") - Number(b.kind !== "HQ"));
	return out;
}
async function orgsPayload(db, group = "", asMap = false) {
	const recs = await allPublic(db, `SELECT * FROM records WHERE type IN (${ORG_TYPES.map(() => "?").join(",")}) AND private = 0 ORDER BY id`, ...ORG_TYPES);
	const counts = await orgCounts(db, recs.map((r) => r.id));
	const cards = recs.map((r) => toOrgCard(r, counts.get(r.id) || {}));
	const byRole = (roles) => cards.filter((c) => c.roles.some((r) => roles.includes(r)));
	const groups = ORG_GROUPS.map((g) => {
		const items = byRole(g.roles).slice().sort((a, b) => b.out - a.out || a.name.localeCompare(b.name));
		return {
			key: g.key,
			label: g.label,
			blurb: g.blurb,
			count: items.length,
			items: group && group !== g.key ? items : group === g.key ? items : items.slice(0, 6)
		};
	}).filter((g) => g.count > 0);
	const inAny = new Set(ORG_GROUPS.flatMap((g) => byRole(g.roles).map((c) => c.id)));
	const other = cards.filter((c) => !inAny.has(c.id));
	const countries = [...new Set(cards.map((c) => c.country).filter(Boolean))].sort();
	const payload = {
		total: cards.length,
		group: group || void 0,
		groups: group && group !== "map" ? groups.filter((g) => g.key === group) : groups,
		other: group && group !== "map" ? [] : other,
		countries,
		map: asMap || group === "map"
	};
	if (payload.map) {
		const order = recs.map((r) => r.id);
		const points = [];
		for (const rec of recs) {
			const rows = locationRows(rec).filter((r) => r.lat != null);
			if (!rows.length) continue;
			const focus = asStringList(fieldVal(rec.data, "focus"));
			const roles = asStringList(fieldVal(rec.data, "roles"));
			const groups = ORG_GROUPS.filter((g) => roles.some((r) => g.roles.includes(r))).map((g) => g.key).join("|");
			const idx = order.indexOf(rec.id);
			const lgImg = imageSrc(rec.data);
			const lg = lgImg && rec.data && rec.data.image && typeof rec.data.image === "object" && rec.data.image.fit === "contain" ? lgImg.src : null;
			rows.forEach((r, i) => {
				points.push({
					id: rec.id,
					n: rec.name,
					s: rec.slug,
					c: orgColor(idx < 0 ? rec.id : idx, ORG_COLOR_PALETTE),
					k: r.kind,
					lg,
					a: r.address,
					lat: r.lat,
					lon: r.lon,
					t: rec.type,
					i,
					d: {
						name: rec.name.toLowerCase(),
						country: fieldStr(rec.data, "country"),
						focus: focus.join("|"),
						parent: "",
						slug: rec.slug,
						groups
					}
				});
			});
		}
		payload.points = points;
		payload.tiles = MAP_TILES;
		payload.missing = recs.length - new Set(points.map((p) => p.id)).size;
	}
	if (group && group !== "map") {
		const gdef = ORG_GROUPS.find((g) => g.key === group);
		if (gdef) {
			const items = byRole(gdef.roles).slice().sort((a, b) => b.out - a.out || a.name.localeCompare(b.name));
			payload.groups = [{
				key: gdef.key,
				label: gdef.label,
				blurb: gdef.blurb,
				count: items.length,
				items
			}];
		}
	}
	return payload;
}
async function searchHits(db, q, limit = 24, types) {
	q = q.trim();
	const toks = q.toLowerCase().match(/\w+/gu) || [];
	if (!q || !toks.length) return [];
	limit = Math.min(limit, 200);
	const match = toks.map((t) => `{name summary body extra} : "${t.replace(/"/g, "")}"*`).join(" AND ");
	let recs = [];
	const loadHits = async (bind) => {
		const { results } = await db.prepare(`SELECT r.* FROM fts JOIN records r ON r.id = fts.rowid
       WHERE fts MATCH ? AND r.private = 0
       ORDER BY bm25(fts, 10.0, 4.0, 1.0, 2.0, 1.0) LIMIT 200`).bind(bind).all();
		return (results || []).map((r) => loadRow(r));
	};
	try {
		recs = await loadHits(match);
	} catch {
		try {
			recs = await loadHits(toks.join(" AND "));
		} catch {
			const like = `%${q.replace(/%/g, "")}%`;
			recs = await allPublic(db, `SELECT * FROM records WHERE private = 0 AND (name LIKE ? OR summary LIKE ? OR body LIKE ? OR data LIKE ?) ORDER BY name COLLATE NOCASE LIMIT 200`, like, like, like, like);
		}
	}
	const markSnip = (text) => {
		let t = text || "";
		for (const tok of toks) t = t.replace(new RegExp(`(${tok})`, "ig"), "$1");
		return t;
	};
	for (const r of recs) r.snip = markSnip([
		r.summary,
		r.body || "",
		r.name
	].find((s) => toks.some((tok) => s.toLowerCase().includes(tok))) || r.summary || r.name).slice(0, 280);
	if (types?.length) recs = recs.filter((r) => types.includes(r.type));
	const ql = q.toLowerCase().trim();
	const order = Object.keys(TYPE_LABELS);
	recs.sort((a, b) => {
		const ae = Number(a.name.toLowerCase() !== ql) - Number(b.name.toLowerCase() !== ql);
		if (ae) return ae;
		const as_ = Number(!a.name.toLowerCase().startsWith(ql)) - Number(!b.name.toLowerCase().startsWith(ql));
		if (as_) return as_;
		return (order.indexOf(a.type) === -1 ? 99 : order.indexOf(a.type)) - (order.indexOf(b.type) === -1 ? 99 : order.indexOf(b.type));
	});
	recs = recs.slice(0, limit);
	const devIds = [];
	const { outgoing } = await linksFor(db, recs.filter((r) => r.type === "model").map((r) => r.id));
	for (const r of recs) if (r.type === "model") {
		const d = (outgoing.get(r.id)?.developer || [])[0];
		if (d) devIds.push(d.id);
	}
	const devs = await allByIds(db, devIds);
	return recs.map((r) => {
		const typ = TYPE_LABELS[r.type] || {
			label: r.type,
			plural: r.type
		};
		const dev = r.type === "model" ? devs.get((outgoing.get(r.id)?.developer || [])[0]?.id) : void 0;
		return {
			id: r.id,
			name: r.name,
			slug: r.slug,
			type: r.type,
			type_label: typ.label,
			plural: typ.plural,
			summary: r.summary,
			snip: r.snip,
			ph: phModel(r, "sm", dev)
		};
	});
}
var SEARCH_HEADINGS = {
	company: "Organisations",
	product: "Robots and hardware",
	model: "Models",
	software: "Software",
	event: "Events",
	post: "Posts",
	paper: "Papers",
	funding: "Funding",
	deployment: "Deployments"
};
function groupSearch(q, hits) {
	const groupsMap = /* @__PURE__ */ new Map();
	for (const h of hits) {
		const list = groupsMap.get(h.type) || [];
		list.push(h);
		groupsMap.set(h.type, list);
	}
	const order = Object.keys(TYPE_LABELS);
	const groups = [...groupsMap.entries()].sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0])).map(([type, items]) => ({
		type,
		plural: TYPE_LABELS[type]?.plural || type,
		heading: SEARCH_HEADINGS[type] || TYPE_LABELS[type]?.plural || type,
		items
	}));
	return {
		q,
		total: hits.length,
		groups
	};
}
async function pageDoc(db, key) {
	const d = {
		about: {
			title: "About",
			md: ABOUT_MD,
			setting: "about_md",
			description: "What embodiment.place is: an independent research tracker and database for humanoid robotics."
		},
		privacy: {
			title: "Privacy",
			md: PRIVACY_MD,
			setting: "legal_privacy",
			description: "Privacy for embodiment.place."
		},
		terms: {
			title: "Terms",
			md: TERMS_MD,
			setting: "legal_terms",
			description: "Terms for embodiment.place."
		},
		contact: {
			title: "Contact",
			md: CONTACT_MD,
			setting: "legal_contact",
			description: "Contact for embodiment.place."
		}
	}[key];
	if (!d) return null;
	const html = md(fillLegal(await setting(db, d.setting) || d.md, CONTACT_EMAIL, 14, LEGAL_UPDATED));
	return {
		key,
		title: d.title,
		html,
		description: d.description
	};
}
function formatField(f, v) {
	if (v == null || v === "") return "";
	if (Array.isArray(v)) return v.map(String).join(", ");
	if (f.unit === "USD" || f.key === "price_usd") {
		const n = Number(v);
		if (!Number.isFinite(n)) return String(v);
		return "$" + n.toLocaleString("en-US");
	}
	if (f.kind === "number" || typeof v === "number") {
		const n = Number(v);
		const num = Number.isInteger(n) ? String(n) : String(n);
		return f.unit ? `${num} ${f.unit}` : num;
	}
	return String(v);
}
function slugify(s) {
	return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function versionsOf(rec) {
	const raw = fieldVal(rec.data, "versions");
	return (Array.isArray(raw) ? raw : []).filter((r) => r && typeof r === "object" && r.name);
}
function findVersion(rec, slug) {
	const vs = versionsOf(rec);
	if (!vs.length) return null;
	return vs.find((v) => slugify(v.name) === slug) || vs[0];
}
function betterWay(f) {
	const k = f.key.toLowerCase();
	if (/height|length|width|depth|size/.test(k)) return "none";
	if (/weight|mass|price|cost|latency|repeatability/.test(k)) return "lower";
	return "higher";
}
function ordinal(n) {
	const v = n % 100;
	return n + (v >= 11 && v <= 13 ? "th" : {
		1: "st",
		2: "nd",
		3: "rd"
	}[n % 10] || "th");
}
async function computeSpecRanks(db, rec) {
	const tkey = categoryKey(rec) || rec.type;
	const nums = ((viewFor(tkey) || viewFor(rec.type))?.fields || []).filter((f) => f.kind === "number" && f.group !== "image" && f.group !== "ordering" && f.group !== "models");
	if (!nums.length) return {};
	const peers = (await allPublic(db, "SELECT * FROM records WHERE type = ? AND private = 0", rec.type)).filter((r) => (categoryKey(r) || r.type) === tkey);
	const out = {};
	for (const f of nums) {
		const vals = peers.map((r) => Number(fieldVal(r.data, f.key))).filter((n) => Number.isFinite(n));
		const me = Number(fieldVal(rec.data, f.key));
		if (!Number.isFinite(me) || vals.length < 3) continue;
		const way = betterWay(f);
		const lower = way === "lower";
		const rnk = vals.filter((v) => lower ? v < me : v > me).length + 1;
		const fill = vals.filter((v) => lower ? v >= me : v <= me).length / vals.length;
		const n = vals.length;
		let lab = "", best = false;
		if (way === "none") lab = rnk === 1 ? `Highest of ${n}` : rnk === n ? `Lowest of ${n}` : `${ordinal(rnk)} highest of ${n}`;
		else if (rnk === 1) {
			lab = `Best of ${n}`;
			best = true;
		} else if (n >= 10 && rnk / n <= .25) lab = `Top ${Math.max(1, Math.ceil(rnk / n * 100))}% of ${n}`;
		else lab = `${ordinal(rnk)} of ${n}`;
		out[f.key] = {
			fill,
			lab,
			best
		};
	}
	return out;
}
async function comparePayload(db, idsRaw) {
	const rawIds = idsRaw.split(",").map((x) => x.trim()).filter((x) => /^\d+/.test(x.split("~")[0])).slice(0, 8);
	const recs = [];
	const keys = [];
	const vers = [];
	for (const x of rawIds) {
		const [idStr, vslug] = x.split("~");
		const id = Number(idStr);
		const r = (await allByIds(db, [id])).get(id);
		if (!r) continue;
		const v = vslug ? findVersion(r, vslug) : null;
		const key = v ? `${r.id}~${slugify(v.name)}` : String(r.id);
		if (keys.includes(key)) continue;
		recs.push(r);
		keys.push(key);
		vers.push(v);
	}
	if (!recs.length) return {
		error: "Not found",
		status: 404
	};
	const tkey = categoryKey(recs[0]) || recs[0].type;
	const t = viewFor(tkey) || viewFor(recs[0].type);
	const plural = HW_CAT[tkey]?.plural || TYPE_LABELS[recs[0].type]?.plural || "records";
	const sameType = recs[0].type;
	const all = await allPublic(db, "SELECT * FROM records WHERE type = ? AND private = 0 ORDER BY name COLLATE NOCASE", sameType);
	const add = [];
	for (const r of all) {
		if ((categoryKey(r) || r.type) !== tkey) continue;
		const vs = versionsOf(r);
		for (const v of vs.length ? vs : [null]) {
			const k = v ? `${r.id}~${slugify(v.name)}` : String(r.id);
			if (!keys.includes(k)) add.push({
				id: k,
				name: v && v.name !== r.name ? `${r.name} · ${v.name}` : r.name
			});
		}
	}
	const dataOf = (r, v) => {
		if (!v) return r.data;
		const data = {
			...r.data,
			...v.specs || {}
		};
		if (v.price != null) data.price_usd = { v: v.price };
		return data;
	};
	const rows = [];
	const { outgoing } = await linksFor(db, recs.map((r) => r.id));
	const makerCells = recs.map((r) => {
		return {
			text: (outgoing.get(r.id)?.maker || outgoing.get(r.id)?.developer || [])[0]?.name || "–",
			best: false
		};
	});
	if (makerCells.some((c) => c.text !== "–")) rows.push({
		label: "Maker",
		diff: new Set(makerCells.map((c) => c.text)).size > 1,
		cells: makerCells
	});
	for (const f of t?.fields || []) {
		if (f.private || [
			"image",
			"gallery",
			"models",
			"versions",
			"options"
		].includes(f.kind) || [
			"image",
			"ordering",
			"models"
		].includes(f.group || "")) continue;
		const vals = recs.map((r, i) => fieldVal(dataOf(r, vers[i]), f.key));
		if (vals.every((v) => v == null || v === "" || Array.isArray(v) && !v.length)) continue;
		const diff = new Set(vals.map((v) => JSON.stringify(v))).size > 1;
		let best = null;
		if (f.kind === "number") {
			const nums = vals.map(Number).filter((n) => Number.isFinite(n));
			const way = betterWay(f);
			if (nums.length > 1 && way !== "none") best = way === "lower" ? Math.min(...nums) : Math.max(...nums);
		}
		rows.push({
			label: f.label,
			diff,
			cells: vals.map((v) => ({
				text: formatField(f, v),
				best: best != null && typeof v === "number" && Number(v) === best
			}))
		});
	}
	const sub = listSubnav(tkey).subnav;
	return {
		title: `Compare ${plural.toLowerCase()}`,
		tkey,
		keys,
		subnav: sub,
		columns: recs.map((r, i) => ({
			key: keys[i],
			name: r.name,
			href: `/r/${r.slug}` + (vers[i] ? `?v=${slugify(vers[i].name)}` : ""),
			ph: phModel(r, "md"),
			version: vers[i] && vers[i].name !== r.name ? vers[i].name : void 0
		})),
		rows,
		add
	};
}
function galleryFor(rec, videoUrl = "", videoCredit = "") {
	const items = [];
	const img = imageSrc(rec.data);
	if (img) items.push({
		k: "img",
		u: img.src,
		c: "",
		s: img.from || ""
	});
	for (const g of galleryItems(rec.data)) if (g.url !== img?.src) items.push({
		k: "img",
		u: g.url,
		c: g.credit || "",
		s: g.src || ""
	});
	const vi = videoUrl ? videoThumb(videoUrl) : null;
	if (vi) items.push({
		k: "vid",
		u: vi.embed,
		c: videoCredit || vi.srcLabel,
		s: vi.url,
		t: vi.thumb
	});
	return items;
}
async function feedTypeList(db, typeKey, before) {
	const { rows, next } = await feedPage(db, {
		types: [typeKey],
		before,
		limit: FEED_PAGE_SIZE
	});
	const items = await feedItems(db, rows);
	const info = TYPE_LABELS[typeKey] || {
		label: typeKey,
		plural: typeKey,
		section: ""
	};
	return {
		key: typeKey,
		label: info.label,
		plural: info.plural,
		section: info.section || (typeKey === "post" ? "Blog" : "Research"),
		view: "feed",
		items: [],
		feed: items,
		next,
		...listSubnav(typeKey)
	};
}
