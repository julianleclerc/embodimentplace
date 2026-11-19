function clientIp$1(c) {
	return (c.req.header("cf-connecting-ip") || c.req.header("x-forwarded-for") || "127.0.0.1").split(",")[0].trim();
}
var RESET_HOURS = 1;
async function makeLinkToken(db, uid, kind, email = "", hours = 1) {
	await ensureExtraSchema(db);
	const tok = token();
	const exp = new Date(Date.now() + hours * 36e5).toISOString().slice(0, 19).replace("T", " ");
	await db.prepare("UPDATE email_tokens SET used=1 WHERE user_id=? AND kind=? AND used=0").bind(uid, kind).run();
	await db.prepare("INSERT INTO email_tokens(token, user_id, kind, email, expires, created) VALUES(?,?,?,?,?,?)").bind(tokenHash(tok), uid, kind, email, exp, nowStamp()).run();
	return tok;
}
async function takeLinkToken(db, tok, kind) {
	await ensureExtraSchema(db);
	const row = await db.prepare("SELECT * FROM email_tokens WHERE token=? AND kind=? AND used=0").bind(tokenHash(tok || ""), kind).first();
	if (!row) return null;
	if ((/* @__PURE__ */ new Date(row.expires.replace(" ", "T") + "Z")).getTime() < Date.now()) return null;
	await db.prepare("UPDATE email_tokens SET used=1 WHERE token=?").bind(tokenHash(tok)).run();
	return {
		user_id: row.user_id,
		email: row.email
	};
}
async function forgotPayload(c, msg = "", err = "") {
	return {
		msg,
		err,
		mail_on: await mailOn(c.env.DB, c.env),
		site_name: SITE_NAME
	};
}
async function postForgot(c) {
	const all = await formAll(c);
	const who = ((all.who || [""]).slice(-1)[0] || "").trim();
	const done = "If that account has a confirmed email, a reset link is on its way. It works for one hour.";
	const ip = clientIp$1(c);
	if (MAIL_IP.blocked(ip)) {
		const p = await forgotPayload(c, "", "Too many requests from here. Try again later.");
		return wantsJson(c) ? c.json({
			error: p.err,
			...p
		}, 429) : c.json(p);
	}
	if (!await turnstileOk(c.env, (all["cf-turnstile-response"] || [""]).slice(-1)[0] || "", ip)) {
		const p = await forgotPayload(c, "", "Please complete the check and try again.");
		return wantsJson(c) ? c.json({
			error: p.err,
			...p
		}, 400) : c.json(p);
	}
	MAIL_IP.hit(ip);
	if (who && await mailOn(c.env.DB, c.env)) {
		const { results } = await c.env.DB.prepare("SELECT * FROM users WHERE disabled=0").all();
		for (const raw of results || []) {
			const u = raw;
			const pr = prefsOf(u);
			const em = String(pr.email || "");
			if (u.username.toLowerCase() === who.toLowerCase() || em.toLowerCase() === who.toLowerCase()) {
				if (em && pr.email_verified) {
					const tok = await makeLinkToken(c.env.DB, u.id, "reset", em, RESET_HOURS);
					const link = `${(c.env.EP_SITE_URL || await setting(c.env.DB, "site_url") || c.req.url.replace(/\/forgot.*$/, "")).replace(/\/$/, "")}/reset?t=${tok}`;
					await sendMail(c.env.DB, c.env, {
						to: em,
						subject: `${SITE_NAME}: reset your password`,
						text: `Reset your password: ${link}\n\nThe link works for one hour. If you didn't ask for this, ignore this email.`,
						html: `<p>Reset your password for ${SITE_NAME}:</p><p><a href="${link}">${link}</a></p><p>The link works for one hour. If you didn't ask for this, ignore this email: your password stays the same.</p>`
					});
				}
				break;
			}
		}
	}
	const p = await forgotPayload(c, done);
	return c.json(p);
}
async function resetPayload(c, err = "") {
	await ensureExtraSchema(c.env.DB);
	const tok = c.req.query("t") || "";
	const row = await c.env.DB.prepare("SELECT * FROM email_tokens WHERE token=? AND kind='reset' AND used=0").bind(tokenHash(tok)).first();
	if (!row || (/* @__PURE__ */ new Date(String(row.expires).replace(" ", "T") + "Z")).getTime() < Date.now()) return {
		expired: true,
		err: "This link has expired."
	};
	return {
		expired: false,
		t: tok,
		err
	};
}
async function postReset(c) {
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	const pw = g("password"), confirm = g("confirm"), tok = g("t");
	if (pw.length < 8) return c.json({
		error: "At least 8 characters.",
		t: tok
	}, 400);
	if (pw !== confirm) return c.json({
		error: "The two passwords don't match.",
		t: tok
	}, 400);
	const row = await takeLinkToken(c.env.DB, tok, "reset");
	if (!row) return c.json({
		error: "This link has expired.",
		expired: true
	}, 400);
	await c.env.DB.prepare("UPDATE users SET pw=? WHERE id=?").bind(hashPw(pw), row.user_id).run();
	await endOtherSessions(c.env.DB, row.user_id, "");
	const sid = await newSession(c.env.DB, row.user_id, clientIp$1(c), c.req.header("user-agent") || "");
	const https = c.req.url.startsWith("https:");
	const res = c.json({
		ok: true,
		next: "/account?reset=1"
	});
	res.headers.append("Set-Cookie", sidCookie(sid, https));
	return res;
}
