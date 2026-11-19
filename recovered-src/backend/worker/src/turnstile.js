function turnstileOn(env) {
	return Boolean(env.EP_TURNSTILE_SITEKEY && env.EP_TURNSTILE_SECRET);
}
async function turnstileOk(env, token, ip) {
	if (!turnstileOn(env)) return true;
	if (!token) return false;
	const url = env.EP_TURNSTILE_VERIFY_URL || "https://challenges.cloudflare.com/turnstile/v0/siteverify";
	try {
		const body = new URLSearchParams({
			secret: env.EP_TURNSTILE_SECRET || "",
			response: token,
			remoteip: ip
		});
		const data = await (await fetch(url, {
			method: "POST",
			headers: { "content-type": "application/x-www-form-urlencoded" },
			body
		})).json();
		return Boolean(data.success);
	} catch {
		return false;
	}
}
