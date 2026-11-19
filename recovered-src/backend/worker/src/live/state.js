var state_exports = /* @__PURE__ */ __exportAll({ randomToken: () => randomToken });
var DIRS = /* @__PURE__ */ new Set([
	"u",
	"d",
	"l",
	"r"
]);
var WALK_TOKEN_RE = /^[A-Za-z0-9_-]{16,64}$/;
function validToken(raw) {
	const s = String(raw || "");
	return WALK_TOKEN_RE.test(s) ? s : "";
}
function pub(k, v, t) {
	return {
		id: k,
		n: v.n,
		c: v.c,
		lk: v.lk,
		x: v.x,
		y: v.y,
		d: v.d,
		ts: Math.round((v.ts || t) * 1e3) / 1e3,
		seq: v.seq || 0,
		says: v.says.filter((s) => t - s.ts < 30).slice(-3).map((s) => ({
			id: s.id,
			t: s.t,
			age: Math.round((t - s.ts) * 10) / 10
		}))
	};
}
var WalkWorld = class {
	rooms = /* @__PURE__ */ new Map();
	hold = /* @__PURE__ */ new Map();
	gone = /* @__PURE__ */ new Map();
	seq = 0;
	nextSeq() {
		this.seq += 1;
		return this.seq;
	}
	clearStale(t) {
		for (const [page, room] of this.rooms) {
			for (const [k, v] of room) if (t - v.ts > 8) room.delete(k);
			if (!room.size) this.rooms.delete(page);
		}
	}
	purgeCid(cid, keepPage) {
		let prev = null;
		for (const [page, room] of this.rooms) {
			if (page === keepPage) continue;
			const hit = room.get(cid);
			if (hit) {
				prev = hit;
				room.delete(cid);
			}
			if (!room.size) this.rooms.delete(page);
		}
		return prev;
	}
	peek(page, me, t = Date.now() / 1e3) {
		const room = this.rooms.get(page);
		if (!room) return [];
		const out = [];
		for (const [k, v] of room) {
			if (k === me || t - v.ts > 8) continue;
			out.push(pub(k, v, t));
		}
		return out;
	}
	snapshot(page, me, t = Date.now() / 1e3) {
		return {
			page,
			ts: Math.round(t * 1e3) / 1e3,
			others: this.peek(page, me, t),
			full: true
		};
	}
	/** Join / tick / leave. */
	tick(opts) {
		const t = opts.t ?? Date.now() / 1e3;
		const page = opts.page.startsWith("/") ? opts.page.slice(0, 200) : "/" + opts.page.slice(0, 199);
		const cid = opts.cid;
		let tok = validToken(opts.token);
		this.clearStale(t);
		const hold = this.hold.get(cid) || "";
		if (opts.leave) {
			if (hold && tok === hold) {
				this.hold.delete(cid);
				this.gone.set(cid, t);
				this.purgeCid(cid);
			}
			if (hold && tok && tok !== hold) return {
				ok: true,
				others: [],
				gone: "elsewhere"
			};
			return {
				ok: true,
				others: [],
				notifyPage: page
			};
		}
		let owns = Boolean(hold && tok && tok === hold);
		let taken = false;
		if (opts.join && !owns) {
			tok = validToken(opts.token) || randomToken();
			taken = Boolean(hold);
			this.hold.set(cid, tok);
			this.gone.delete(cid);
			owns = true;
		} else if (opts.join && owns) this.gone.delete(cid);
		if (!owns) return {
			ok: true,
			me: cid,
			others: [],
			gone: "elsewhere"
		};
		const prev = this.purgeCid(cid, page);
		if (prev) prev.says = [];
		let room = this.rooms.get(page);
		if (!room) {
			room = /* @__PURE__ */ new Map();
			this.rooms.set(page, room);
		}
		const lk = opts.look;
		let me = room.get(cid) || prev || {
			n: opts.name,
			c: lk.b,
			lk,
			says: [],
			x: .2,
			y: 200,
			d: "r",
			last_say: 0,
			ts: t,
			seq: 0
		};
		const fx = (v, d, lo, hi) => typeof v === "number" && Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : d;
		me.x = fx(opts.x, me.x, 0, 1);
		me.y = fx(opts.y, me.y, 0, 1e5);
		if (opts.d && DIRS.has(opts.d)) me.d = opts.d;
		let err = "";
		let said;
		const say = String(opts.say || "").replace(/\s+/g, " ").trim().slice(0, 140);
		if (say) {
			if (t - me.last_say < 1) err = "Slow down.";
			else {
				me.last_say = t;
				said = this.nextSeq();
				me.says = me.says.filter((s) => t - s.ts < 30).slice(-2).concat([{
					id: said,
					t: say,
					ts: t
				}]);
			}
		}
		me.ts = t;
		me.seq = this.nextSeq();
		me.n = opts.name;
		me.c = lk.b;
		me.lk = lk;
		room.set(cid, me);
		return {
			ok: true,
			me: cid,
			token: tok,
			color: me.c,
			look: me.lk,
			others: [],
			said,
			error: err || void 0,
			taken,
			notifyPage: page,
			purgeFrom: prev ? void 0 : void 0
		};
	}
};
function randomToken() {
	const bytes = /* @__PURE__ */ new Uint8Array(18);
	crypto.getRandomValues(bytes);
	let s = "";
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
	for (const b of bytes) s += chars[b % 64];
	return s;
}
var StreamCaps = class {
	max;
	maxPer;
	total = 0;
	by = /* @__PURE__ */ new Map();
	constructor(max = 200, maxPer = 4) {
		this.max = max;
		this.maxPer = maxPer;
	}
	acquire(key) {
		if (this.total >= this.max || (this.by.get(key) || 0) >= this.maxPer) return false;
		this.total += 1;
		this.by.set(key, (this.by.get(key) || 0) + 1);
		return true;
	}
	release(key) {
		this.total = Math.max(0, this.total - 1);
		const n = (this.by.get(key) || 0) - 1;
		if (n <= 0) this.by.delete(key);
		else this.by.set(key, n);
	}
};
/** Process-local world used when Durable Objects are not bound (Vitest). */
var memoryWorld = new WalkWorld();
var memoryCaps = new StreamCaps();
