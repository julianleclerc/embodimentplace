/** Sliding-window limiter, same windows as Python ep.security.Limiting. In-memory per isolate. */
var Limiter = class {
	limit;
	window;
	ev = /* @__PURE__ */ new Map();
	constructor(limit, window) {
		this.limit = limit;
		this.window = window;
	}
	clean(key, t) {
		const q = (this.ev.get(key) || []).filter((x) => t - x < this.window);
		if (q.length) this.ev.set(key, q);
		else this.ev.delete(key);
		return q;
	}
	hit(key) {
		const t = Date.now() / 1e3;
		const q = this.clean(key, t);
		q.push(t);
		this.ev.set(key, q);
		if (this.ev.size > 5e4) {
			const keys = [...this.ev.keys()].slice(0, 1e4);
			for (const k of keys) this.ev.delete(k);
		}
	}
	blocked(key) {
		return this.clean(key, Date.now() / 1e3).length >= this.limit;
	}
	waitMinutes(key) {
		const q = this.clean(key, Date.now() / 1e3);
		if (!q.length) return 0;
		return Math.max(1, Math.floor((this.window - (Date.now() / 1e3 - q[0])) / 60) + 1);
	}
	reset(key) {
		this.ev.delete(key);
	}
};
new Limiter(5, 900);
var LOGIN_IP = new Limiter(20, 900);
var CODE_TRIES = new Limiter(6, 900);
var JOIN_IP = new Limiter(5, 3600);
var MAIL_IP = new Limiter(5, 3600);
