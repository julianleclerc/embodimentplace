var geoCache = /* @__PURE__ */ new Map();
var suggestCache = /* @__PURE__ */ new Map();
var lastGeocode = 0;
var lastSuggest = 0;
async function pace(last, minMs) {
	const wait = minMs - (Date.now() - last);
	if (wait > 0) await new Promise((r) => setTimeout(r, wait));
	return Date.now();
}
async function geocode(q) {
	q = (q || "").trim();
	if (!q || false) return null;
	const key = q.toLowerCase();
	if (geoCache.has(key)) return geoCache.get(key);
	const url = "https://nominatim.openstreetmap.org/search?" + new URLSearchParams({
		format: "jsonv2",
		limit: "1",
		q
	});
	lastGeocode = await pace(lastGeocode, 1100);
	try {
		const r = await fetch(url, {
			headers: {
				"User-Agent": GEOCODE_UA,
				"Accept-Language": "en"
			},
			signal: AbortSignal.timeout(6e3)
		});
		if (!r.ok) return null;
		const rows = await r.json();
		const hit = rows?.[0] ? {
			lat: Math.round(Number(rows[0].lat) * 1e5) / 1e5,
			lon: Math.round(Number(rows[0].lon) * 1e5) / 1e5
		} : null;
		if (hit && !Number.isFinite(hit.lat)) return null;
		geoCache.set(key, hit);
		return hit;
	} catch {
		return null;
	}
}
async function suggestAddress(q, limit = 5) {
	q = (q || "").trim();
	if (q.length < 3 || false) return [];
	const key = q.toLowerCase();
	if (suggestCache.has(key)) return suggestCache.get(key);
	const url = ADDRESS_SUGGEST_URL + ("https://photon.komoot.io/api/".includes("?") ? "&" : "?") + new URLSearchParams({
		q,
		limit: String(limit),
		lang: "en"
	});
	lastSuggest = await pace(lastSuggest, 250);
	try {
		const r = await fetch(url, {
			headers: { "User-Agent": GEOCODE_UA },
			signal: AbortSignal.timeout(5e3)
		});
		if (!r.ok) return [];
		const feats = (await r.json()).features || [];
		const out = [];
		const seen = /* @__PURE__ */ new Set();
		for (const f of feats) {
			const p = f.properties || {};
			const g = f.geometry?.coordinates || [];
			if (g.length < 2) continue;
			const street = [p.housenumber, p.street].filter(Boolean).join(" ");
			const parts = [
				p.name && p.name !== p.city ? p.name : "",
				street,
				p.city || p.district || p.county,
				p.state,
				p.postcode,
				p.country
			].filter(Boolean);
			const label = [...new Set(parts)].join(", ");
			if (!label || seen.has(label)) continue;
			seen.add(label);
			out.push({
				label,
				lat: Math.round(Number(g[1]) * 1e5) / 1e5,
				lon: Math.round(Number(g[0]) * 1e5) / 1e5
			});
		}
		if (suggestCache.size > 2e3) suggestCache.clear();
		suggestCache.set(key, out);
		return out;
	} catch {
		return [];
	}
}
async function apiGeocode(c) {
	if (!c.get("auth").user) return c.json({
		items: [],
		error: "Log in first."
	}, 401);
	const q = (c.req.query("q") || "").trim().slice(0, 200);
	if (!q) return c.json({ error: "Type an address first." }, 400);
	const hit = await geocode(q);
	if (!hit) return c.json({ error: "Not found, or the lookup service can't be reached. Type the coordinates instead." }, 404);
	return c.json(hit);
}
async function apiAddress(c) {
	if (!c.get("auth").user) return c.json({ items: [] }, 401);
	return c.json({ items: await suggestAddress((c.req.query("q") || "").slice(0, 200)) });
}
