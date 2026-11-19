/** Pluggable email sending. Locally (default) messages are logged, never sent. Secrets stay in Worker secrets / .dev.vars. */
async function ensureMailSchema(db) {
	await db.prepare(`CREATE TABLE IF NOT EXISTS email_log(
      id INTEGER PRIMARY KEY, to_addr TEXT NOT NULL, subject TEXT, text_body TEXT, html_body TEXT,
      provider TEXT, status TEXT, error TEXT, created TEXT)`).run();
}
function mailFromEnv(env) {
	return Boolean(env.EMAIL || env.EP_SMTP_HOST || env.EP_MAIL_API_URL);
}
async function mailConfigured(db, env) {
	if (mailFromEnv(env)) return true;
	if (env.EP_MAIL_PROVIDER === "http" && env.EP_MAIL_API_URL) return true;
	const host = await setting$1(db, "smtp_host");
	return Boolean(host);
}
/** True when the site should behave as if mail works (claims, verify). Local log provider counts. */
async function mailOn(db, env) {
	if (providerOf(env, db) === "log") return true;
	return mailConfigured(db, env);
}
function providerOf(env, _db) {
	if (env.EP_ENV !== "production" && !envFlag(env, "EP_MAIL_SEND", false)) return "log";
	if (env.EMAIL) return "cf";
	if (env.EP_MAIL_PROVIDER === "http" || env.EP_MAIL_API_URL) return "http";
	if (env.EP_MAIL_PROVIDER === "smtp" || env.EP_SMTP_HOST) return "smtp";
	return "log";
}
async function sendMail(db, env, msg) {
	await ensureMailSchema(db);
	const provider = providerOf(env, db);
	let status = "logged";
	let error = "";
	if (provider === "cf" && env.EMAIL) try {
		const from = env.EP_MAIL_FROM || env.EP_SMTP_FROM || "no-reply@embodiment.place";
		await env.EMAIL.send({
			from,
			to: msg.to,
			subject: msg.subject,
			html: msg.html,
			text: msg.text || ""
		});
		status = "sent";
	} catch (ex) {
		error = ex instanceof Error ? ex.message : String(ex);
		status = "error";
	}
	else if (provider === "http" && env.EP_MAIL_API_URL) try {
		const r = await fetch(env.EP_MAIL_API_URL, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				...env.EP_MAIL_API_KEY ? { authorization: `Bearer ${env.EP_MAIL_API_KEY}` } : {}
			},
			body: JSON.stringify({
				to: msg.to,
				subject: msg.subject,
				html: msg.html,
				text: msg.text || "",
				from: env.EP_SMTP_FROM || env.EP_MAIL_FROM || ""
			})
		});
		if (!r.ok) {
			error = `Mail API ${r.status}`;
			status = "error";
		} else status = "sent";
	} catch (ex) {
		error = ex instanceof Error ? ex.message : String(ex);
		status = "error";
	}
	else if (provider === "smtp") {
		error = "SMTP from the Worker is not implemented; set EP_MAIL_API_URL or use the log provider.";
		status = "error";
	} else console.log(`[mail:log] to=${msg.to} subject=${msg.subject}\n${msg.text || msg.html}`);
	await db.prepare("INSERT INTO email_log(to_addr, subject, text_body, html_body, provider, status, error, created) VALUES(?,?,?,?,?,?,?,?)").bind(msg.to, msg.subject, msg.text || "", msg.html || "", provider, status, error, nowStamp()).run();
	return error || null;
}
async function smtpSettings(db, env) {
	const keys = [
		"host",
		"port",
		"security",
		"user",
		"password",
		"from",
		"from_name"
	];
	const out = {};
	if (env.EP_SMTP_HOST) for (const k of keys) out[k] = String(env[`EP_SMTP_${k.toUpperCase()}`] || "");
	else for (const k of keys) out[k] = await setting$1(db, "smtp_" + k);
	return {
		...out,
		from_env: mailFromEnv(env),
		provider: providerOf(env, db)
	};
}
var SENT_OK = "If that email can be used to sign in, a code is on its way. It expires in 15 minutes.";
function cookieFlags$1(https, maxAge) {
	return `HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}${https ? "; Secure" : ""}`;
}
function b64url$1(s) {
	return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function unb64url$1(s) {
	const pad = "=".repeat((4 - s.length % 4) % 4);
	return atob(s.replace(/-/g, "+").replace(/_/g, "/") + pad);
}
function pendingAuthCookie(p, secret, https) {
	const exp = Math.floor(Date.now() / 1e3) + 900;
	const val = b64url$1(JSON.stringify({
		...p,
		exp
	}));
	return `hi_auth=${val}.${sign(val, secret)}; ${cookieFlags$1(https, 900)}`;
}
function clearPendingAuth(https) {
	return `hi_auth=; Path=/; Max-Age=0${https ? "; Secure" : ""}`;
}
function readPendingAuth(env, request) {
	const raw = parseCookies(request).hi_auth || "";
	const i = raw.lastIndexOf(".");
	if (i < 0) return null;
	const val = raw.slice(0, i);
	const sig = raw.slice(i + 1);
	if (!timingEqual(sign(val, env.EP_SECRET || ""), sig)) return null;
	try {
		const p = JSON.parse(unb64url$1(val));
		if (!p || Number(p.exp) < Date.now() / 1e3) return null;
		if (p.kind !== "login" && p.kind !== "join") return null;
		return {
			kind: p.kind,
			email: p.email,
			username: p.username || "",
			next: p.next || "/"
		};
	} catch {
		return null;
	}
}
function sixDigit() {
	const buf = /* @__PURE__ */ new Uint32Array(1);
	crypto.getRandomValues(buf);
	return String(buf[0] % 1e6).padStart(6, "0");
}
function codeToken(email, code) {
	return tokenHash(`${email}:${code}`);
}
async function issueEmailCode(env, request, pending, https) {
	const ip = clientIp$2(request);
	if (MAIL_IP.blocked(ip) || MAIL_IP.blocked("mail:" + pending.email)) return {
		error: "Too many emails from this address. Try again later.",
		status: 429
	};
	const code = sixDigit();
	const token = codeToken(pending.email, code);
	const created = nowStamp();
	const expires = new Date(Date.now() + 9e5).toISOString().slice(0, 19).replace("T", " ");
	await env.DB.prepare("UPDATE email_tokens SET used=1 WHERE email=? AND kind=? AND used=0").bind(pending.email, pending.kind).run();
	await env.DB.prepare("INSERT INTO email_tokens(token, user_id, kind, email, expires, used, created) VALUES(?,0,?,?,?,0,?)").bind(token, pending.kind, pending.email, expires, created).run();
	MAIL_IP.hit(ip);
	MAIL_IP.hit("mail:" + pending.email);
	const text = `Your sign-in code is ${code}. It expires in 15 minutes.\n\nIf you didn't ask for this, you can ignore this email.\n`;
	await sendMail(env.DB, env, {
		to: pending.email,
		subject: "Your embodiment.place sign-in code",
		html: `<p>Your sign-in code is <strong>${code}</strong>. It expires in 15 minutes.</p><p>If you didn't ask for this, you can ignore this email.</p>`,
		text
	});
	return {
		ok: true,
		cookies: [pendingAuthCookie(pending, env.EP_SECRET || "", https)]
	};
}
async function consumeEmailCode(env, request, code) {
	const ip = clientIp$2(request);
	const pending = readPendingAuth(env, request);
	if (!pending) return {
		error: "That code has expired. Ask for a new one.",
		status: 400
	};
	const digits = (code || "").replace(/\s+/g, "");
	if (!/^\d{6}$/.test(digits)) return {
		error: "Enter the 6-digit code from your email.",
		status: 400
	};
	if (CODE_TRIES.blocked(ip + ":" + pending.email) || LOGIN_IP.blocked(ip)) return {
		error: "Too many tries. Ask for a new code.",
		status: 429
	};
	CODE_TRIES.hit(ip + ":" + pending.email);
	LOGIN_IP.hit(ip);
	const token = codeToken(pending.email, digits);
	const row = await env.DB.prepare("SELECT token, expires, used FROM email_tokens WHERE token=? AND kind=? AND email=?").bind(token, pending.kind, pending.email).first();
	const now = nowStamp();
	if (!row || row.used || row.expires < now) return {
		error: "That code is not valid or has expired.",
		status: 400
	};
	await env.DB.prepare("UPDATE email_tokens SET used=1 WHERE token=?").bind(token).run();
	return { pending };
}
