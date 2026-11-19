function envFlag(env, key, fallback = false) {
	const v = env[key];
	if (v == null || v === "") return fallback;
	const s = String(v).trim().toLowerCase();
	if ([
		"0",
		"false",
		"no",
		"off"
	].includes(s)) return false;
	if ([
		"1",
		"true",
		"yes",
		"on"
	].includes(s)) return true;
	return fallback;
}
function envNumber(env, key, fallback) {
	const n = Number(env[key]);
	return Number.isFinite(n) && n > 0 ? n : fallback;
}
