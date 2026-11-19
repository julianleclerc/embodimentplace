/** Password, session token, TOTP and recovery helpers compatible with the Python site. */
var crypto_exports = /* @__PURE__ */ __exportAll({ hashPw: () => hashPw });
var SCRYPT = {
	N: 2 ** 14,
	r: 8,
	p: 1,
	dkLen: 64
};
function hashPw(pw, salt) {
	const s = salt || randomBytes(16);
	const h = scrypt(utf8ToBytes(pw), s, SCRYPT);
	return bytesToHex(s) + "$" + bytesToHex(h);
}
function token(n = 32) {
	return base64Url(randomBytes(n));
}
function tokenHash(t) {
	return bytesToHex(sha256(utf8ToBytes(t)));
}
function sign(value, secret) {
	return bytesToHex(hmac(sha256, utf8ToBytes(secret), utf8ToBytes(value))).slice(0, 32);
}
function timingEqual(a, b) {
	if (a.length !== b.length) return false;
	let x = 0;
	for (let i = 0; i < a.length; i++) x |= a.charCodeAt(i) ^ b.charCodeAt(i);
	return x === 0;
}
function randomBytes(n) {
	const out = new Uint8Array(n);
	crypto.getRandomValues(out);
	return out;
}
function nowStamp() {
	const d = /* @__PURE__ */ new Date();
	const p = (n, w = 2) => String(n).padStart(w, "0");
	return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}
function base64Url(bytes) {
	let s = "";
	for (const b of bytes) s += String.fromCharCode(b);
	return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
export { sign as a, tokenHash as c, bytesToHex as d, randomBytes as i, sha256 as l, hashPw as n, timingEqual as o, nowStamp as r, token as s, crypto_exports as t, hmac as u };
