/** Record placeholders, colours fixed per slug (same algorithm as backend/ep/ui.py ph()). */
function initialsOf(name) {
	return ((name.match(/[A-Za-z0-9]+/g) || []).slice(0, 2).map((w) => w[0]).join("") || "?").toUpperCase();
}
function safeImg(src) {
	if (!src) return false;
	if (/^https?:\/\//i.test(src) || src.startsWith("/media/") || src.startsWith("/")) return true;
	return false;
}
function galleryItems(data) {
	const raw = data ? fieldVal(data, "gallery") : null;
	return (Array.isArray(raw) ? raw : []).filter((r) => !!r && typeof r === "object" && typeof r.url === "string" && safeImg(r.url));
}
function imageSrc(data) {
	if (!data) return null;
	const img = data.image;
	let src = "";
	let fit = "cover";
	let from = "";
	if (img && typeof img === "object") {
		src = String(img.v || "");
		if (img.fit === "contain") fit = "contain";
		from = String(img.src || "");
	} else if (typeof img === "string") src = img;
	if (!src) {
		const gal = galleryItems(data);
		if (gal[0]) {
			src = gal[0].url;
			fit = gal[0].fit === "contain" ? "contain" : "contain";
			fit = "contain";
			from = gal[0].src || "";
		}
	}
	if (!src || !safeImg(src)) return null;
	if (!/^https?:\/\//i.test(src) && !src.startsWith("/")) src = `/media/${src}`;
	return {
		src,
		fit,
		from
	};
}
function phOf(rec, cls = "") {
	const img = imageSrc(rec.data);
	const hb = md5bytes(rec.slug);
	const pat = hb[0] % 6;
	const a = 12 + hb[1] % 50;
	const b = 58 + hb[2] % 34;
	const c = 30 + hb[3] % 50;
	return {
		pat,
		a: hb[4] % 9 === 0 ? "#ff4a1c" : `hsl(0 0% ${a}%)`,
		b,
		c,
		initials: initialsOf(rec.name),
		letterless: HW_LETTERLESS.includes(rec.type) || NO_IMAGE.includes(rec.type),
		src: img?.src || null,
		fit: img?.fit || "cover",
		cls
	};
}
