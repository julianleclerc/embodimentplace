/** Same-origin check equivalent to Python Handler.same_origin. */
function sameOrigin(request) {
	const url = new URL(request.url);
	const host = request.headers.get("Host") || url.host;
	const origin = request.headers.get("Origin");
	if (origin && origin !== "null") try {
		return new URL(origin).host === host;
	} catch {
		return false;
	}
	const site = request.headers.get("Sec-Fetch-Site");
	if (site) return site === "same-origin" || site === "none";
	const ref = request.headers.get("Referer");
	if (!ref) return false;
	try {
		return new URL(ref).host === host;
	} catch {
		return false;
	}
}
function isMutating(method) {
	return ![
		"GET",
		"HEAD",
		"OPTIONS"
	].includes(method.toUpperCase());
}
