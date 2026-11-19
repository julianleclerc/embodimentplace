var TABS = [
	["info", "Info"],
	["leadership", "Leadership"],
	["labs", "Labs"],
	["connections", "Connections"],
	["products", "Products"],
	["jobs", "Jobs"],
	["posts", "Posts"],
	["highlights", "Highlights"],
	["requests", "Requests"]
];
var CONN_HELP = {
	partners: "Companies you work with: technology, research or commercial partners.",
	backed_by: "Investors in this organisation. Funding rounds on the site add theirs too.",
	sells_to: "Organisations you sell to or deploy for. Deployments on the site add theirs too.",
	buys_from: "Who supplies you: parts, data, compute, software."
};
var CONN_LABEL = {
	partners: "Partners",
	backed_by: "Investors",
	sells_to: "Customers",
	buys_from: "Suppliers"
};
var LAB_KEYS = [
	"name",
	"summary",
	"head",
	"email",
	"url"
];
async function orgOf(c, slug) {
	const row = await c.env.DB.prepare("SELECT * FROM records WHERE slug=?").bind(slug).first();
	if (!row) return null;
	const rec = loadRow(row);
	if (!ORG_TYPES_LIST.includes(rec.type)) return null;
	return rec;
}
async function canManage(c, companyId) {
	const auth = c.get("auth");
	if (!auth.user) return false;
	if (auth.logged) return true;
	return isOwner(c.env.DB, auth.user.id, companyId);
}
function fieldV(data, key) {
	const raw = data?.[key];
	if (raw && typeof raw === "object" && "v" in raw) return String(raw.v ?? "");
	return raw == null ? "" : String(raw);
}
function fieldAny(data, key) {
	const raw = data?.[key];
	if (raw && typeof raw === "object" && !Array.isArray(raw) && "v" in raw) return raw.v ?? null;
	return raw ?? null;
}
function labsOf(data) {
	const raw = data.labs;
	const v = raw && typeof raw === "object" && "v" in raw ? raw.v : raw;
	return Array.isArray(v) ? v.filter((x) => x && typeof x === "object" && x.name) : [];
}
async function resolveOrg(db, token, selfId) {
	const t = token.trim();
	if (!t) return null;
	const row = /^\d+$/.test(t) ? await db.prepare("SELECT id, type FROM records WHERE id=?").bind(Number(t)).first() : await db.prepare("SELECT id, type FROM records WHERE slug=?").bind(t).first();
	if (!row) return null;
	const id = Number(row.id);
	if (id === selfId) return null;
	if (!ORG_TYPES_LIST.includes(String(row.type))) return null;
	return id;
}
function jsonOrRedirect(c, next, extra = {}) {
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("application/json")) return c.json({
		ok: true,
		next,
		...extra
	});
	return c.redirect(next);
}
async function managePayload(c, slug, tab = "info") {
	const auth = c.get("auth");
	if (!auth.user) return {
		error: "login",
		status: 401,
		next: "/login?next=/manage/" + slug
	};
	const rec = await orgOf(c, slug);
	if (!rec) return {
		error: "Not found",
		status: 404
	};
	if (!await canManage(c, rec.id)) return {
		error: "not_yours",
		status: 403,
		rec: {
			slug: rec.slug,
			name: rec.name
		},
		next: "/claim/" + rec.slug
	};
	const section = TABS.some(([k]) => k === tab) ? tab : "info";
	const owned = await ownedCompanies(c.env.DB, auth.user.id);
	const { results: owners } = await c.env.DB.prepare("SELECT u.id, u.username, u.name FROM owners o JOIN users u ON u.id=o.user_id WHERE o.company_id=?").bind(rec.id).all();
	const leaders = ((await c.env.DB.prepare("SELECT r.id, r.slug, r.name, l.note AS title FROM links l JOIN records r ON r.id=l.dst WHERE l.src=? AND l.rel='leaders' ORDER BY l.pos, r.name").bind(rec.id).all()).results || []).map((r) => ({
		id: Number(r.id),
		slug: String(r.slug),
		name: String(r.name),
		title: String(r.title || "")
	}));
	const connections = {};
	for (const rel of CONNECTION_RELS) {
		const { results } = await c.env.DB.prepare("SELECT r.id, r.slug, r.name, l.note FROM links l JOIN records r ON r.id=l.dst WHERE l.src=? AND l.rel=? ORDER BY l.pos, r.name").bind(rec.id, rel).all();
		connections[rel] = (results || []).map((r) => ({
			id: Number(r.id),
			slug: String(r.slug),
			name: String(r.name),
			note: String(r.note || "")
		}));
	}
	const posts = await allPublic(c.env.DB, "SELECT r.id, r.slug, r.name, r.type, r.summary FROM records r JOIN links l ON (l.src=r.id AND l.dst=?) OR (l.dst=r.id AND l.src=?) WHERE r.type IN ('post','paper') AND l.rel IN ('about','orgs') ORDER BY r.id DESC LIMIT 80", rec.id, rec.id);
	const jobs = (await allPublic(c.env.DB, "SELECT r.id, r.slug, r.name, r.summary, r.data FROM records r JOIN links l ON l.src=r.id WHERE l.dst=? AND r.type='job' ORDER BY r.id DESC LIMIT 80", rec.id)).map((j) => {
		const st = fieldV(j.data || {}, "status") || "Open";
		return {
			...j,
			status: st,
			open: st === "Open"
		};
	});
	const products = await allPublic(c.env.DB, "SELECT r.id, r.slug, r.name, r.type, r.summary FROM records r JOIN links l ON l.src=r.id WHERE l.dst=? AND r.type IN ('product','model','software','datapack','benchmark','solution') ORDER BY r.name COLLATE NOCASE LIMIT 80", rec.id);
	const highlights = ((await c.env.DB.prepare("SELECT r.id, r.slug, r.name, r.type, r.summary, l.note FROM links l JOIN records r ON r.id=l.dst WHERE l.src=? AND l.rel='highlights' ORDER BY l.pos").bind(rec.id).all()).results || []).map((r) => ({
		id: Number(r.id),
		slug: String(r.slug),
		name: String(r.name),
		type: String(r.type),
		summary: String(r.summary || ""),
		note: String(r.note || "")
	}));
	const cand = await allPublic(c.env.DB, "SELECT r.id, r.slug, r.name, r.type, r.summary FROM records r WHERE r.id IN (SELECT src FROM links WHERE dst=? UNION SELECT dst FROM links WHERE src=?) AND r.id<>? AND r.type NOT IN ('company','university','lab','person') ORDER BY r.type, r.name COLLATE NOCASE LIMIT 200", rec.id, rec.id, rec.id);
	let quotes = [];
	let nreq = 0;
	try {
		const { results } = await c.env.DB.prepare("SELECT r.*, rec.name AS product, rec.slug AS slug FROM referrals r JOIN records rec ON rec.id=r.record_id WHERE rec.id IN (SELECT src FROM links WHERE dst=? UNION SELECT dst FROM links WHERE src=?) ORDER BY r.id DESC LIMIT 200").bind(rec.id, rec.id).all();
		quotes = (results || []).map((raw) => {
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
				payload: p
			};
		});
		nreq = quotes.filter((x) => x.status === "new").length;
	} catch {}
	const website = fieldV(rec.data, "website");
	const country = fieldV(rec.data, "country");
	const city = fieldV(rec.data, "city");
	const arr = (k) => {
		const v = fieldAny(rec.data, k);
		return Array.isArray(v) ? v.map(String) : v ? [String(v)] : [];
	};
	const locsRaw = fieldAny(rec.data, "locations");
	const locations = Array.isArray(locsRaw) ? locsRaw : [];
	const imgRaw = fieldAny(rec.data, "image");
	const image = typeof imgRaw === "string" ? imgRaw : imgRaw && typeof imgRaw === "object" && "v" in imgRaw ? String(imgRaw.v || "") : "";
	return {
		tab: section,
		tabs: TABS.map(([k, label]) => ({
			key: k,
			label: k === "requests" && nreq ? `Requests (${nreq})` : label,
			href: k === "info" ? `/manage/${rec.slug}` : `/manage/${rec.slug}/${k}`
		})),
		rec: {
			id: rec.id,
			slug: rec.slug,
			name: rec.name,
			type: rec.type,
			type_label: TYPE_LABELS[rec.type]?.label || rec.type,
			summary: rec.summary,
			body: rec.body,
			website,
			country,
			city,
			open_to: arr("open_to"),
			open_note: fieldV(rec.data, "open_note"),
			roles: arr("roles"),
			founded: fieldV(rec.data, "founded"),
			stage: fieldV(rec.data, "stage"),
			employees: fieldV(rec.data, "employees"),
			careers: fieldV(rec.data, "careers"),
			linkedin: fieldV(rec.data, "linkedin"),
			x: fieldV(rec.data, "x"),
			github: fieldV(rec.data, "github"),
			huggingface: fieldV(rec.data, "huggingface"),
			email: fieldV(rec.data, "email"),
			locations,
			image: image || fieldV(rec.data, "image")
		},
		owned: owned.map((o) => ({
			id: o.id,
			slug: o.slug,
			name: o.name
		})),
		owners: owners || [],
		leaders,
		labs: labsOf(rec.data),
		connections,
		conn_help: CONN_HELP,
		conn_label: CONN_LABEL,
		posts,
		jobs,
		products,
		highlights,
		candidates: cand,
		quotes,
		nreq,
		logged: auth.logged,
		can_edit: true
	};
}
async function postManage(c, slug, section = "info") {
	const rec = await orgOf(c, slug);
	if (!rec || !await canManage(c, rec.id)) return c.json({ error: "Not found" }, 404);
	const auth = c.get("auth");
	const ct = c.req.header("content-type") || "";
	let file = null;
	let all;
	if (ct.includes("multipart/form-data")) {
		const raw = await c.req.parseBody({ all: true });
		all = {};
		for (const [k, v] of Object.entries(raw)) {
			if (v instanceof File) {
				if (k === "image" || k === "file") file = v;
				continue;
			}
			all[k] = (Array.isArray(v) ? v : [v]).map((x) => String(x ?? "")).filter((x) => !(x instanceof Object));
		}
	} else all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	const many = (k) => (all[k] || []).map((x) => x.trim()).filter(Boolean);
	const base = {
		name: rec.name,
		summary: rec.summary,
		body: rec.body,
		data: rec.data
	};
	let payload = { ...base };
	let next = `/manage/${slug}`;
	if (section === "info" || section === "page" || !section) {
		const name = (g("name") || rec.name).slice(0, 200);
		const summary = g("summary");
		const body = g("body");
		const data = { ...rec.data };
		const setV = (k, v) => {
			if (v === "" || v == null || Array.isArray(v) && !v.length) delete data[k];
			else data[k] = {
				...data[k] && typeof data[k] === "object" && !Array.isArray(data[k]) ? data[k] : {},
				v
			};
		};
		for (const k of [
			"website",
			"country",
			"city",
			"founded",
			"stage",
			"employees",
			"open_note",
			"careers",
			"linkedin",
			"x",
			"github",
			"huggingface",
			"email"
		]) setV(k, g(k));
		setV("roles", many("roles"));
		setV("open_to", many("open_to"));
		const kinds = all["f.locations.kind"] || [];
		const addresses = all["f.locations.address"] || [];
		const lats = all["f.locations.lat"] || [];
		const lons = all["f.locations.lon"] || [];
		const srcs = all["f.locations.src"] || [];
		const locs = [];
		for (let i = 0; i < Math.max(kinds.length, addresses.length); i++) {
			const address = (addresses[i] || "").trim();
			if (!address && !(lats[i] || "").trim()) continue;
			const loc = {
				kind: (kinds[i] || "Office").trim() || "Office",
				address,
				lat: (lats[i] || "").trim(),
				lon: (lons[i] || "").trim(),
				src: (srcs[i] || "").trim()
			};
			if (address && (!loc.lat || !loc.lon)) {
				const hit = await geocode(address);
				if (hit) {
					loc.lat = String(hit.lat);
					loc.lon = String(hit.lon);
				}
			}
			locs.push(loc);
		}
		setV("locations", locs);
		if (file && c.env.MEDIA) {
			const typ = (file.type || "").toLowerCase();
			const ext = typ.includes("png") ? "png" : typ.includes("webp") ? "webp" : typ.includes("gif") ? "gif" : "jpg";
			const key = `orgs/${rec.id}.${ext}`;
			await c.env.MEDIA.put(key, file.stream(), { httpMetadata: { contentType: typ || "image/" + ext } });
			setV("image", "/media/" + key);
		} else if (g("image_url")) setV("image", g("image_url"));
		else if (g("image_clear") === "1") delete data.image;
		payload = {
			name,
			summary,
			body,
			data
		};
		next = `/manage/${slug}?sent=1`;
	} else if (section === "leadership") {
		const names = all["lead.name"] || [];
		const titles = all["lead.title"] || [];
		const leaders = [];
		const seen = /* @__PURE__ */ new Set();
		names.forEach((n, i) => {
			const name = (n || "").trim();
			if (!name || seen.has(name.toLowerCase())) return;
			seen.add(name.toLowerCase());
			leaders.push({
				name: name.slice(0, 120),
				title: (titles[i] || "").trim().slice(0, 80)
			});
		});
		payload = {
			...base,
			data: { ...rec.data },
			leaders: leaders.slice(0, 30)
		};
		next = `/manage/${slug}/leadership?sent=1`;
	} else if (section === "labs") {
		const labs = labsOf(rec.data).map((x) => ({ ...x }));
		const act = g("act");
		const i = g("i") && /^\d+$/.test(g("i")) ? Number(g("i")) : null;
		const renames = [];
		if (act === "add" || act === "save") {
			const entry = {};
			for (const k of LAB_KEYS) entry[k] = g("lab." + k).slice(0, k === "url" ? 400 : k === "summary" ? 300 : 160);
			if (entry.url && !/^https?:\/\//i.test(entry.url)) entry.url = "https://" + entry.url;
			if (!entry.name) return jsonOrRedirect(c, `/manage/${slug}/labs?add=1`);
			if (act === "save" && i != null && i < labs.length) {
				const old = labs[i].name;
				labs[i] = {
					...labs[i],
					...entry
				};
				if (old !== entry.name) renames.push([old, entry.name]);
			} else if (!labs.some((x) => x.name.toLowerCase() === entry.name.toLowerCase())) labs.push(entry);
		} else if (act === "delete" && i != null && i < labs.length) labs.splice(i, 1);
		payload = {
			...base,
			data: {},
			only: ["labs"],
			labs,
			lab_renames: renames
		};
		next = `/manage/${slug}/labs?sent=1`;
	} else if (section === "connections") {
		const conns = {};
		for (const rel of CONNECTION_RELS) {
			const items = [];
			const seen = /* @__PURE__ */ new Set();
			for (const token of many("rel." + rel)) {
				const oid = await resolveOrg(c.env.DB, token, rec.id);
				if (!oid || seen.has(oid)) continue;
				seen.add(oid);
				const note = g(`relnote.${rel}.${oid}`) || g(`relnote.${rel}.${token}`);
				items.push([oid, note.slice(0, 120)]);
			}
			conns[rel] = items.slice(0, 60);
		}
		payload = {
			...base,
			data: { ...rec.data },
			connections: conns
		};
		next = `/manage/${slug}/connections?sent=1`;
	} else if (section === "highlights") {
		const allowed = /* @__PURE__ */ new Set();
		const { results } = await c.env.DB.prepare("SELECT src AS id FROM links WHERE dst=? UNION SELECT dst AS id FROM links WHERE src=?").bind(rec.id, rec.id).all();
		for (const r of results || []) allowed.add(Number(r.id));
		const hl = [];
		for (const token of many("rel.highlights")) {
			const hid = Number(token);
			if (!hid || !allowed.has(hid) || hl.some(([id]) => id === hid)) continue;
			hl.push([hid, g(`relnote.highlights.${hid}`).slice(0, 120)]);
		}
		payload = {
			...base,
			highlights: hl.slice(0, 3)
		};
		next = `/manage/${slug}/highlights?sent=1`;
	} else return c.json({ error: "Unknown section" }, 404);
	await submitAndMaybeApply(c.env.DB, auth, "company_edit", rec.id, payload);
	return jsonOrRedirect(c, next);
}
async function postJobToggle(c, id) {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	const row = await c.env.DB.prepare("SELECT * FROM records WHERE id=? AND type='job'").bind(Number(id)).first();
	if (!row) return c.json({ error: "Not found" }, 404);
	const rec = loadRow(row);
	const link = await c.env.DB.prepare("SELECT dst FROM links WHERE src=? AND rel IN ('company','about') ORDER BY id LIMIT 1").bind(rec.id).first();
	const cid = link ? Number(link.dst) : 0;
	if (!cid || !await canManage(c, cid)) return c.json({ error: "Not found" }, 404);
	const data = { ...rec.data };
	data.status = { v: (fieldV(data, "status") || "Open") === "Open" ? "Closed" : "Open" };
	await c.env.DB.prepare("UPDATE records SET data=?, updated=? WHERE id=?").bind(JSON.stringify(data), (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace("T", " "), rec.id).run();
	return jsonOrRedirect(c, `/manage/${(await c.env.DB.prepare("SELECT slug FROM records WHERE id=?").bind(cid).first())?.slug || ""}/jobs`);
}
