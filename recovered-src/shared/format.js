function recordDate(rec) {
	const df = DATE_FIELDS[rec.type];
	return df ? fieldStr(rec.data, df) : "";
}
function feedDate(rec) {
	return ((rec.feed_at || recordDate(rec) || rec.created || "") + "").slice(0, 10);
}
function relDate(d, today = /* @__PURE__ */ new Date()) {
	const day = parseIsoDate((d || "").slice(0, 10));
	if (!day) return d;
	const n = Math.round((toUtc(today) - toUtc(day)) / 864e5);
	if (n < 0) return d;
	if (n === 0) return "Today";
	if (n < 7) return `${n}d`;
	if (n < 56) return `${Math.floor(n / 7)}w`;
	return d;
}
function parseIsoDate(s) {
	const t = (s || "").slice(0, 10);
	const iso = t.length === 7 ? t + "-01" : t;
	if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
	const d = /* @__PURE__ */ new Date(iso + "T00:00:00Z");
	return Number.isNaN(d.getTime()) ? null : d;
}
function toUtc(d) {
	return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
}
function fmtNum(v) {
	const x = Number(v);
	if (!Number.isFinite(x)) return String(v ?? "");
	if (Number.isInteger(x)) return x.toLocaleString("en-US");
	return x.toLocaleString("en-US", { maximumFractionDigits: 2 }).replace(/\.0+$/, "");
}
function readMinutes(text, chars) {
	if (chars != null && chars > (text || "").length) return Math.max(1, Math.round(chars / 1100));
	const words = (text || "").match(/\w+/g) || [];
	return Math.max(1, Math.round(words.length / 220));
}
function hostOf(url) {
	try {
		return new URL(url).hostname.replace(/^www\./, "");
	} catch {
		return "";
	}
}
function videoInfo(url) {
	const u = (url || "").trim();
	const yt = u.match(/^https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/);
	if (yt) return {
		kind: "youtube",
		id: yt[1]
	};
	const x = u.match(/^https?:\/\/(?:www\.|mobile\.)?(?:x|twitter)\.com\/\w{1,15}\/status(?:es)?\/(\d{5,25})/);
	if (x) return {
		kind: "x",
		id: x[1]
	};
	return null;
}
function evDates(rec) {
	let a = parseIsoDate(fieldStr(rec.data, "date"));
	let b = parseIsoDate(fieldStr(rec.data, "end_date")) || a;
	if (a && b && b < a) b = a;
	return [a, b];
}
function evState(rec, today = /* @__PURE__ */ new Date()) {
	const [a, b] = evDates(rec);
	if (!a) return fieldStr(rec.data, "status") || "Upcoming";
	const t = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
	if (t < a) return "Upcoming";
	if (b && t <= b) return "Live";
	return "Ended";
}
function whenText(rec, long = false) {
	const [a, b] = evDates(rec);
	if (!a) return "";
	const wd = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	][a.getUTCDay()];
	if (!b || b.getTime() === a.getTime()) return `${long ? wd + " " : ""}${a.getUTCDate()} ${MONTHS[a.getUTCMonth()]} ${a.getUTCFullYear()}`;
	if (a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth()) return `${a.getUTCDate()}–${b.getUTCDate()} ${MONTHS[a.getUTCMonth()]} ${a.getUTCFullYear()}`;
	if (a.getUTCFullYear() === b.getUTCFullYear()) return `${a.getUTCDate()} ${MONTHS[a.getUTCMonth()]} – ${b.getUTCDate()} ${MONTHS[b.getUTCMonth()]} ${a.getUTCFullYear()}`;
	return `${a.getUTCDate()} ${MONTHS[a.getUTCMonth()]} ${a.getUTCFullYear()} – ${b.getUTCDate()} ${MONTHS[b.getUTCMonth()]} ${b.getUTCFullYear()}`;
}
function countdown(rec, today = /* @__PURE__ */ new Date()) {
	const st = evState(rec, today);
	const [a] = evDates(rec);
	if (st === "Live") return "Happening now";
	if (st === "Ended" || !a) return st === "Ended" ? "Ended" : "";
	const n = Math.round((a.getTime() - Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())) / 864e5);
	if (n === 1) return "Tomorrow";
	if (n < 60) return `In ${n} days`;
	return `In ${Math.round(n / 30.4)} months`;
}
function placeText(rec) {
	return [fieldStr(rec.data, "venue"), fieldStr(rec.data, "city")].filter(Boolean).join(" · ");
}
function evDayPart(rec) {
	const [a, b] = evDates(rec);
	if (!a) return null;
	const day = `${a.getUTCDate()}` + (b && b.getTime() !== a.getTime() && b.getUTCMonth() === a.getUTCMonth() && b.getUTCFullYear() === a.getUTCFullYear() ? `–${b.getUTCDate()}` : "");
	let sub = MONTHS[a.getUTCMonth()];
	if (b && b.getTime() !== a.getTime() && (b.getUTCMonth() !== a.getUTCMonth() || b.getUTCFullYear() !== a.getUTCFullYear())) sub += ` – ${b.getUTCDate()} ${MONTHS[b.getUTCMonth()]}`;
	return {
		m: sub,
		d: day,
		y: String(a.getUTCFullYear())
	};
}
function monthYear(d) {
	if (!d) return "Date to be announced";
	return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
function cardName(name, maker) {
	if (!maker) return name;
	const m = maker.trim();
	const first = m.split(/\s+/)[0];
	for (const pre of [m, first && first.length >= 2 ? first : null]) if (pre && name.toLowerCase().startsWith(pre.toLowerCase() + " ")) {
		const rest = name.slice(pre.length).replace(/^[\s\-·:]+/, "");
		if (rest && !/^\d/.test(rest)) return rest;
	}
	return name;
}
function shortValue(unit, v) {
	if (v == null || v === "") return "–";
	if (unit === "USD") {
		const x = Number(v);
		if (x >= 1e6) return "$" + `${(x / 1e6).toFixed(1)}`.replace(/\.0$/, "") + "M";
		if (x >= 1e3) return `$${Math.round(x / 1e3)}K`;
		return `$${Math.round(x)}`;
	}
	return fmtNum(v);
}
function shortLabel(label) {
	return label.replace(/\s*\(.*?\)/g, "");
}
function orgColor(i, palette) {
	i = Math.floor(i);
	if (i < palette.length) return palette[i];
	const { r, g, b } = hslToRgb(i * 137.508 % 360 / 360, .7, .42 + .1 * (i % 2));
	const hex = (n) => n.toString(16).padStart(2, "0");
	return `#${hex(r)}${hex(g)}${hex(b)}`;
}
function hslToRgb(h, s, l) {
	const C = (1 - Math.abs(2 * l - 1)) * s;
	const hp = h * 6;
	const X = C * (1 - Math.abs(hp % 2 - 1));
	let r = 0, g = 0, b = 0;
	if (hp < 1) [r, g, b] = [
		C,
		X,
		0
	];
	else if (hp < 2) [r, g, b] = [
		X,
		C,
		0
	];
	else if (hp < 3) [r, g, b] = [
		0,
		C,
		X
	];
	else if (hp < 4) [r, g, b] = [
		0,
		X,
		C
	];
	else if (hp < 5) [r, g, b] = [
		X,
		0,
		C
	];
	else [r, g, b] = [
		C,
		0,
		X
	];
	const m = l - C / 2;
	return {
		r: Math.floor((r + m) * 255),
		g: Math.floor((g + m) * 255),
		b: Math.floor((b + m) * 255)
	};
}
function categoryOf(rec, alias, cats) {
	if (rec.type === "paper") return "Research";
	let c = String(fieldVal(rec.data, "kind") || "Blog");
	c = alias[c] || c;
	return cats.includes(c) ? c : "Blog";
}
function parseCredits(text) {
	const lines = String(text || "").split("\n");
	const out = [];
	for (const line of lines) {
		const st = line.trim();
		if (!st) continue;
		const [n, ...rest] = st.split("|");
		out.push([n.trim(), rest.join("|").trim()]);
	}
	return out;
}
