function oauthEnabled(env) {
	return {
		google: Boolean(env.EP_GOOGLE_CLIENT_ID && env.EP_GOOGLE_CLIENT_SECRET),
		apple: Boolean(env.EP_APPLE_CLIENT_ID && env.EP_APPLE_TEAM_ID && env.EP_APPLE_KEY_ID && env.EP_APPLE_PRIVATE_KEY),
		x: Boolean(env.EP_X_CLIENT_ID && env.EP_X_CLIENT_SECRET)
	};
}
function siteOrigin(env, request) {
	const configured = (env.EP_SITE_URL || "").replace(/\/$/, "");
	if (configured) return configured;
	return new URL(request.url).origin;
}
function oauthCallbackUrl(env, request, provider) {
	return `${siteOrigin(env, request)}/api/auth/oauth/${provider}/callback`;
}
function b64url(s) {
	return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function unb64url(s) {
	const pad = "=".repeat((4 - s.length % 4) % 4);
	return atob(s.replace(/-/g, "+").replace(/_/g, "/") + pad);
}
function cookieFlags(https, maxAge) {
	return `HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}${https ? "; Secure" : ""}`;
}
function stateCookie(st, secret, https) {
	const val = b64url(JSON.stringify(st));
	return `hi_oauth=${val}.${sign(val, secret)}; ${cookieFlags(https, 600)}`;
}
function clearStateCookie(https) {
	return `hi_oauth=; Path=/; Max-Age=0${https ? "; Secure" : ""}`;
}
function readState(env, request) {
	const raw = parseCookies(request).hi_oauth || "";
	const i = raw.lastIndexOf(".");
	if (i < 0) return null;
	const val = raw.slice(0, i);
	const sig = raw.slice(i + 1);
	if (!timingEqual(sign(val, env.EP_SECRET || ""), sig)) return null;
	try {
		const st = JSON.parse(unb64url(val));
		if (!st || Number(st.exp) < Date.now() / 1e3) return null;
		return st;
	} catch {
		return null;
	}
}
async function pkce() {
	const verifier = token() + token();
	const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
	return {
		verifier,
		challenge: btoa(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
	};
}
async function startOAuth(c, provider) {
	const env = c.env;
	if (!oauthEnabled(env)[provider]) return c.json({ error: "That sign-in method is not configured." }, 404);
	const nxt = safeNext(c.req.query("next"));
	const https = c.get("auth").https;
	const exp = Math.floor(Date.now() / 1e3) + 600;
	const nonce = token();
	const { verifier, challenge } = await pkce();
	const st = {
		p: provider,
		next: nxt,
		v: verifier,
		n: nonce,
		exp
	};
	const redirect = oauthCallbackUrl(env, c.req.raw, provider);
	let loc = "";
	if (provider === "google") {
		const u = new URL("https://accounts.google.com/o/oauth2/v2/auth");
		u.searchParams.set("client_id", env.EP_GOOGLE_CLIENT_ID || "");
		u.searchParams.set("redirect_uri", redirect);
		u.searchParams.set("response_type", "code");
		u.searchParams.set("scope", "openid email profile");
		u.searchParams.set("state", nonce);
		u.searchParams.set("code_challenge", challenge);
		u.searchParams.set("code_challenge_method", "S256");
		u.searchParams.set("nonce", nonce);
		loc = u.toString();
	} else if (provider === "apple") {
		const u = new URL("https://appleid.apple.com/auth/authorize");
		u.searchParams.set("client_id", env.EP_APPLE_CLIENT_ID || "");
		u.searchParams.set("redirect_uri", redirect);
		u.searchParams.set("response_type", "code");
		u.searchParams.set("response_mode", "form_post");
		u.searchParams.set("scope", "name email");
		u.searchParams.set("state", nonce);
		loc = u.toString();
	} else {
		const u = new URL("https://x.com/i/oauth2/authorize");
		u.searchParams.set("client_id", env.EP_X_CLIENT_ID || "");
		u.searchParams.set("redirect_uri", redirect);
		u.searchParams.set("response_type", "code");
		u.searchParams.set("scope", "tweet.read users.read offline.access users.email");
		u.searchParams.set("state", nonce);
		u.searchParams.set("code_challenge", challenge);
		u.searchParams.set("code_challenge_method", "S256");
		loc = u.toString();
	}
	const res = c.redirect(loc, 302);
	res.headers.append("Set-Cookie", stateCookie(st, env.EP_SECRET || "", https));
	return res;
}
function b64urlBytes(buf) {
	let s = "";
	for (const b of buf) s += String.fromCharCode(b);
	return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function pemToPkcs8(pem) {
	const b64 = pem.replace(/-----BEGIN [^-]+-----/, "").replace(/-----END [^-]+-----/, "").replace(/\s+/g, "");
	const bin = atob(b64);
	const out = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
	return out.buffer;
}
async function appleClientSecret(env) {
	let pem = (env.EP_APPLE_PRIVATE_KEY || "").replace(/\\n/g, "\n").trim();
	if (!pem.includes("BEGIN")) pem = `-----BEGIN PRIVATE KEY-----\n${pem}\n-----END PRIVATE KEY-----`;
	const key = await crypto.subtle.importKey("pkcs8", pemToPkcs8(pem), {
		name: "ECDSA",
		namedCurve: "P-256"
	}, false, ["sign"]);
	const now = Math.floor(Date.now() / 1e3);
	const head = b64url(JSON.stringify({
		alg: "ES256",
		kid: env.EP_APPLE_KEY_ID
	}));
	const body = b64url(JSON.stringify({
		iss: env.EP_APPLE_TEAM_ID || "",
		sub: env.EP_APPLE_CLIENT_ID || "",
		aud: "https://appleid.apple.com",
		iat: now,
		exp: now + 300
	}));
	const sig = await crypto.subtle.sign({
		name: "ECDSA",
		hash: "SHA-256"
	}, key, new TextEncoder().encode(`${head}.${body}`));
	return `${head}.${body}.${b64urlBytes(new Uint8Array(sig))}`;
}
async function exchange(env, request, provider, code, st) {
	const redirect = oauthCallbackUrl(env, request, provider);
	if (provider === "google") {
		const body = new URLSearchParams({
			code,
			client_id: env.EP_GOOGLE_CLIENT_ID || "",
			client_secret: env.EP_GOOGLE_CLIENT_SECRET || "",
			redirect_uri: redirect,
			grant_type: "authorization_code",
			code_verifier: st.v || ""
		});
		const tok = await fetch("https://oauth2.googleapis.com/token", {
			method: "POST",
			headers: { "content-type": "application/x-www-form-urlencoded" },
			body
		});
		if (!tok.ok) throw new Error("Google token exchange failed");
		const tj = await tok.json();
		const info = await fetch("https://openidconnect.googleapis.com/v1/userinfo", { headers: { authorization: `Bearer ${tj.access_token || ""}` } });
		if (!info.ok) throw new Error("Google profile failed");
		const u = await info.json();
		if (!u.sub) throw new Error("Google profile missing id");
		const email = u.email_verified && u.email ? normEmail(u.email) : "";
		return {
			provider,
			id: u.sub,
			email,
			name: (u.name || "").slice(0, 60),
			username: (u.email || "user").split("@")[0]
		};
	}
	if (provider === "apple") {
		const secret = await appleClientSecret(env);
		const body = new URLSearchParams({
			code,
			client_id: env.EP_APPLE_CLIENT_ID || "",
			client_secret: secret,
			redirect_uri: redirect,
			grant_type: "authorization_code"
		});
		const tok = await fetch("https://appleid.apple.com/auth/token", {
			method: "POST",
			headers: { "content-type": "application/x-www-form-urlencoded" },
			body
		});
		if (!tok.ok) throw new Error("Apple token exchange failed");
		const payload = decodeJwt((await tok.json()).id_token || "");
		const id = String(payload.sub || "");
		if (!id) throw new Error("Apple profile missing id");
		const email = typeof payload.email === "string" ? normEmail(payload.email) : "";
		return {
			provider,
			id,
			email,
			name: "",
			username: email ? email.split("@")[0] : "user"
		};
	}
	const basic = btoa(`${env.EP_X_CLIENT_ID}:${env.EP_X_CLIENT_SECRET}`);
	const body = new URLSearchParams({
		code,
		redirect_uri: redirect,
		grant_type: "authorization_code",
		code_verifier: st.v || ""
	});
	const tok = await fetch("https://api.x.com/2/oauth2/token", {
		method: "POST",
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			authorization: `Basic ${basic}`
		},
		body
	});
	if (!tok.ok) throw new Error("X token exchange failed");
	const tj = await tok.json();
	const info = await fetch("https://api.x.com/2/users/me?user.fields=confirmed_email,name,username", { headers: { authorization: `Bearer ${tj.access_token || ""}` } });
	if (!info.ok) throw new Error("X profile failed");
	const u = await info.json();
	const id = u.data?.id || "";
	if (!id) throw new Error("X profile missing id");
	return {
		provider,
		id,
		email: u.data?.confirmed_email ? normEmail(u.data.confirmed_email) : "",
		name: (u.data?.name || "").slice(0, 60),
		username: u.data?.username || "user"
	};
}
function decodeJwt(tok) {
	const parts = tok.split(".");
	if (parts.length < 2) return {};
	try {
		return JSON.parse(unb64url(parts[1]));
	} catch {
		return {};
	}
}
async function findByProvider(db, provider, id) {
	const { results } = await db.prepare("SELECT * FROM users WHERE disabled=0").all();
	for (const row of results || []) {
		const oauth = prefsOf(row).oauth;
		if (oauth && String(oauth[provider] || "") === id) return row;
	}
	return null;
}
async function attachProvider(db, user, ident) {
	const pr = prefsOf(user);
	const oauth = pr.oauth && typeof pr.oauth === "object" ? pr.oauth : {};
	oauth[ident.provider] = ident.id;
	pr.oauth = oauth;
	if (ident.email && !emailOf(user)) {
		pr.email = ident.email;
		pr.email_verified = true;
	} else if (ident.email && emailOf(user) === ident.email) pr.email_verified = true;
	if (ident.name && !user.name) {
		await db.prepare("UPDATE users SET name=?, prefs=? WHERE id=?").bind(ident.name.slice(0, 60), JSON.stringify(pr), user.id).run();
		return;
	}
	await db.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), user.id).run();
}
async function upsertOAuthUser(db, ident) {
	const byProvider = await findByProvider(db, ident.provider, ident.id);
	if (byProvider) {
		await attachProvider(db, byProvider, ident);
		return { user: await getUserById(db, byProvider.id) || byProvider };
	}
	if (ident.email && EMAIL_RE.test(ident.email)) {
		const byEmail = await getUserByEmail(db, ident.email);
		if (byEmail) {
			await attachProvider(db, byEmail, ident);
			return { user: await getUserById(db, byEmail.id) || byEmail };
		}
	}
	const uname = await uniqueUsername(db, ident.username || (ident.email ? ident.email.split("@")[0] : "user"));
	const made = await createUser(db, uname, "", "user");
	if (made.error || !made.id) return { error: made.error || "Could not create the account." };
	if (ident.name) await db.prepare("UPDATE users SET name=? WHERE id=?").bind(ident.name.slice(0, 60) || uname, made.id).run();
	const user = await getUserById(db, made.id);
	if (!user) return { error: "Could not create the account." };
	await attachProvider(db, user, ident);
	return { user: await getUserById(db, made.id) || user };
}
function failRedirect(c, error, https) {
	const u = new URL("/login", c.req.url);
	u.searchParams.set("error", error);
	const res = c.redirect(u.pathname + u.search);
	res.headers.append("Set-Cookie", clearStateCookie(https));
	return res;
}
async function oauthCallback(c, provider) {
	const env = c.env;
	const https = c.get("auth").https;
	if (!oauthEnabled(env)[provider]) return failRedirect(c, "That sign-in method is not configured.", https);
	const g = c.req.method === "POST" ? await readForm(c) : Object.fromEntries(new URL(c.req.url).searchParams);
	if (g.error) return failRedirect(c, "Sign-in was cancelled.", https);
	const st = readState(env, c.req.raw);
	if (!st || st.p !== provider) return failRedirect(c, "That sign-in step expired. Try again.", https);
	if (g.state && st.n && g.state !== st.n) return failRedirect(c, "That sign-in step expired. Try again.", https);
	const code = g.code || "";
	if (!code) return failRedirect(c, "Sign-in did not complete. Try again.", https);
	let ident;
	try {
		ident = await exchange(env, c.req.raw, provider, code, st);
	} catch {
		return failRedirect(c, "Could not finish sign-in with that service. Try again.", https);
	}
	const made = await upsertOAuthUser(env.DB, ident);
	if ("error" in made) return failRedirect(c, made.error, https);
	if (!made.user || made.user.disabled) return failRedirect(c, "This account is not available.", https);
	const { isSuspended, suspensionText } = await Promise.resolve().then(() => session_exports);
	if (isSuspended(made.user)) return failRedirect(c, suspensionText(made.user), https);
	const tok = await newSession(env.DB, made.user.id, c.get("auth").ip, c.req.header("User-Agent") || "");
	let nxt = safeNext(st.next);
	let prof = {};
	try {
		prof = JSON.parse(made.user.profile || "{}");
	} catch {}
	if (made.user.role !== "admin" && !Object.keys(prof).length && (nxt === "/" || !st.next)) nxt = "/account?welcome=1";
	const res = c.redirect(nxt);
	res.headers.append("Set-Cookie", sidCookie(tok, https));
	res.headers.append("Set-Cookie", clearStateCookie(https));
	return res;
}
async function readForm(c) {
	try {
		const fd = await c.req.parseBody();
		const out = {};
		for (const [k, v] of Object.entries(fd)) out[k] = typeof v === "string" ? v : "";
		return out;
	} catch {
		return {};
	}
}
