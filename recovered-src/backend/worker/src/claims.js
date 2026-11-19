var CODE_MINUTES = 30;
var MAX_TRIES = 5;
var CODES_PER_HOUR = 3;
function orgDomain(rec) {
	const url = fieldStr(rec.data, "website") || "";
	if (!url) return "";
	try {
		const host = new URL(url.includes("://") ? url : "https://" + url).hostname.toLowerCase();
		return host.startsWith("www.") ? host.slice(4) : host;
	} catch {
		return "";
	}
}
function domainOk(email, dom) {
	if (!dom || !email.includes("@")) return false;
	const ed = email.split("@").pop().toLowerCase().trim();
	if (FREE_MAIL.has(ed)) return false;
	return ed === dom || ed.endsWith("." + dom) || dom.endsWith("." + ed);
}
function hashCode(secret, code, uid, rid) {
	const key = new TextEncoder().encode(`${secret}:${uid}:${rid}`);
	return bytesToHex(hmac(sha256, key, new TextEncoder().encode(code)));
}
async function recOf(c, slug) {
	const row = await c.env.DB.prepare(`SELECT * FROM records WHERE slug=? AND type IN (${ORG_TYPES_LIST.map(() => "?").join(",")})`).bind(slug, ...ORG_TYPES_LIST).first();
	if (!row) return null;
	const rec = loadRow(row);
	if (rec.private && !c.get("auth").see_private) return null;
	return rec;
}
async function claimPayload(c, slug, msg = "", err = "") {
	const auth = c.get("auth");
	if (!auth.user) return {
		error: "login",
		status: 401,
		next: "/login?next=/claim/" + slug
	};
	const rec = await recOf(c, slug);
	if (!rec) return {
		error: "Not found",
		status: 404
	};
	await ensureExtraSchema(c.env.DB);
	const label = (TYPE_LABELS[rec.type]?.label || rec.type).toLowerCase();
	const dom = orgDomain(rec);
	const mail = await mailOn(c.env.DB, c.env);
	let step = "blocked";
	let pendingEmail = "";
	if (rec.slug === "embodiment-place") step = "site";
	else if (await isOwner(c.env.DB, auth.user.id, rec.id)) step = "owner";
	else if (await c.env.DB.prepare("SELECT 1 AS n FROM submissions WHERE user_id=? AND kind='claim' AND target_id=? AND status='pending'").bind(auth.user.id, rec.id).first()) step = "queued";
	else if (!dom) step = "nowebsite";
	else if (!mail) step = "nomail";
	else {
		const pend = await c.env.DB.prepare("SELECT * FROM claim_codes WHERE user_id=? AND record_id=? AND used=0 AND created > datetime('now', ?) ORDER BY id DESC LIMIT 1").bind(auth.user.id, rec.id, `-${CODE_MINUTES} minutes`).first();
		pendingEmail = pend?.email || "";
		step = pend ? "code" : "email";
	}
	return {
		slug: rec.slug,
		name: rec.name,
		type: rec.type,
		label,
		domain: dom,
		step,
		pending_email: pendingEmail,
		msg,
		err,
		minutes: CODE_MINUTES
	};
}
async function postClaimCode(c, slug) {
	const auth = c.get("auth");
	if (!auth.user) return c.redirect("/login?next=/claim/" + slug);
	const rec = await recOf(c, slug);
	if (!rec || rec.slug === "embodiment-place") return c.json({ error: "Not found" }, 404);
	const email = (((await formAll(c)).email || [""]).slice(-1)[0] || "").trim().toLowerCase().slice(0, 200);
	const dom = orgDomain(rec);
	const again = async (err, msg = "") => {
		const p = await claimPayload(c, slug, msg, err);
		if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
			...p,
			error: err || void 0
		});
		return c.redirect(`/claim/${slug}?err=${encodeURIComponent(err)}`);
	};
	if (!domainOk(email, dom)) return again(`Use an email address ending in @${dom}. Personal addresses aren't accepted.`);
	if (Number((await c.env.DB.prepare("SELECT COUNT(*) AS n FROM claim_codes WHERE user_id=? AND created > datetime('now', '-1 hour')").bind(auth.user.id).first())?.n || 0) >= CODES_PER_HOUR) return again("You've asked for several codes in the last hour. Try again later.");
	const code = String(Math.floor(Math.random() * 1e6)).padStart(6, "0");
	await c.env.DB.prepare("UPDATE claim_codes SET used=1 WHERE user_id=? AND record_id=? AND used=0").bind(auth.user.id, rec.id).run();
	await c.env.DB.prepare("INSERT INTO claim_codes(user_id, record_id, email, code_hash, created) VALUES(?,?,?,?,datetime('now'))").bind(auth.user.id, rec.id, email, hashCode(c.env.EP_SECRET || "", code, auth.user.id, rec.id)).run();
	if (await sendMail(c.env.DB, c.env, {
		to: email,
		subject: `embodiment.place: your code to claim ${rec.name}`,
		html: `<p>Your code is <b>${code}</b></p><p>Use it within ${CODE_MINUTES} minutes to claim ${rec.name} on embodiment.place.</p>`,
		text: `Your code is ${code}. Use it within ${CODE_MINUTES} minutes to claim ${rec.name} on embodiment.place.`
	})) return again("We couldn't send the email. Please try again later.");
	const p = await claimPayload(c, slug, `Code sent to ${email}.`);
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
		ok: true,
		...p
	});
	return c.redirect(`/claim/${slug}?msg=${encodeURIComponent("Code sent to " + email + ".")}`);
}
async function postClaimVerify(c, slug) {
	const auth = c.get("auth");
	if (!auth.user) return c.redirect("/login?next=/claim/" + slug);
	const rec = await recOf(c, slug);
	if (!rec || rec.slug === "embodiment-place") return c.json({ error: "Not found" }, 404);
	const code = (((await formAll(c)).code || [""]).slice(-1)[0] || "").trim();
	const row = await c.env.DB.prepare("SELECT * FROM claim_codes WHERE user_id=? AND record_id=? AND used=0 AND created > datetime('now', ?) ORDER BY id DESC LIMIT 1").bind(auth.user.id, rec.id, `-${CODE_MINUTES} minutes`).first();
	const fail = async (err) => {
		const p = await claimPayload(c, slug, "", err);
		if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
			...p,
			error: err
		}, 400);
		return c.redirect(`/claim/${slug}?err=${encodeURIComponent(err)}`);
	};
	if (!row) return fail("That code has expired. Ask for a new one.");
	if (row.tries >= MAX_TRIES) {
		await c.env.DB.prepare("UPDATE claim_codes SET used=1 WHERE id=?").bind(row.id).run();
		return fail("Too many wrong codes. Ask for a new one.");
	}
	const expect = hashCode(c.env.EP_SECRET || "", code, auth.user.id, rec.id);
	if (!timingEqual(row.code_hash, expect)) {
		await c.env.DB.prepare("UPDATE claim_codes SET tries=tries+1 WHERE id=?").bind(row.id).run();
		return fail(`That code isn't right (${MAX_TRIES - row.tries - 1} tries left).`);
	}
	await c.env.DB.prepare("UPDATE claim_codes SET used=1 WHERE id=?").bind(row.id).run();
	if (!await c.env.DB.prepare("SELECT 1 AS n FROM submissions WHERE user_id=? AND kind='claim' AND target_id=? AND status='pending'").bind(auth.user.id, rec.id).first()) await submitAndMaybeApply(c.env.DB, auth, "claim", rec.id, {
		company: rec.name,
		email: row.email,
		domain: orgDomain(rec),
		verified: nowStamp()
	});
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) {
		const p = await claimPayload(c, slug);
		return c.json({
			ok: true,
			...p,
			next: `/claim/${rec.slug}`
		});
	}
	return c.redirect(`/claim/${rec.slug}`);
}
