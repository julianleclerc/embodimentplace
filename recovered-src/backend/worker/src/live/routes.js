function pageOf(raw) {
	let p = String(raw || "/").split("?")[0].slice(0, 200);
	if (!p.startsWith("/")) p = "/";
	return p;
}
function cidOf(auth) {
	return auth.user ? "u" + auth.user.id : "";
}
function slotKey(c) {
	const u = c.get("auth").user;
	return u ? "u:" + u.id : "ip:" + clientIp(c);
}
function clientIp(c) {
	return (c.req.header("cf-connecting-ip") || c.req.header("x-forwarded-for") || "127.0.0.1").split(",")[0].trim();
}
function liveNs(c) {
	return c.env.LIVE;
}
function pageStub(c, page) {
	const ns = liveNs(c);
	return ns ? ns.getByName("page:" + page) : null;
}
function holdStub(c) {
	const ns = liveNs(c);
	return ns ? ns.getByName("hold") : null;
}
function capsStub(c) {
	const ns = liveNs(c);
	return ns ? ns.getByName("caps") : null;
}
function chatStub(c, room) {
	const ns = liveNs(c);
	return ns ? ns.getByName("chat:" + room) : null;
}
function evStub(c, eid) {
	const ns = liveNs(c);
	return ns ? ns.getByName("event:" + eid) : null;
}
function jsonBody(c, all) {
	const g = (k) => (all[k] || [""]).slice(-1)[0];
	return g;
}
async function postWalk(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in to place a character." }, 401);
	const all = await formAll(c);
	const g = jsonBody(c, all);
	const page = pageOf(g("page"));
	const cid = cidOf(auth);
	const tok = validToken(g("token"));
	const look = walkerLook(auth.user);
	g("join") === "1" || g("join") === "true" || all.join?.[0] === "true" || Boolean(all.join);
	const body = all;
	const flag = (k) => {
		const v = body[k]?.slice(-1)[0];
		return v === "1" || v === "true" || v === "on";
	};
	const leave = flag("leave");
	const isJoin = flag("join");
	const x = Number(g("x"));
	const y = Number(g("y"));
	const input = {
		cid,
		name: auth.user.name || auth.user.username,
		look,
		page,
		token: tok,
		join: isJoin,
		leave,
		x: Number.isFinite(x) ? x : void 0,
		y: Number.isFinite(y) ? y : void 0,
		d: g("d"),
		say: g("say")
	};
	const hold = holdStub(c);
	const pageDo = pageStub(c, page);
	if (leave) {
		if (hold) await hold.dropHold(cid, tok);
		else {
			const h = memoryWorld.hold.get(cid);
			if (h && tok === h) {
				memoryWorld.hold.delete(cid);
				memoryWorld.purgeCid(cid);
			}
		}
		if (pageDo) await pageDo.tick({
			...input,
			token: tok,
			leave: true
		});
		else memoryWorld.tick({
			...input,
			leave: true
		});
		return c.json({ ok: true });
	}
	let token = tok;
	let taken = false;
	let owns = false;
	let prevPage = "";
	if (hold) {
		const r = await hold.takeHold(cid, tok, page, isJoin);
		token = r.token;
		taken = r.taken;
		owns = r.owns;
		prevPage = r.prevPage;
	} else {
		const cur = memoryWorld.hold.get(cid) || "";
		owns = Boolean(cur && tok && tok === cur);
		if (isJoin && !owns) {
			token = randomToken();
			taken = Boolean(cur);
			memoryWorld.hold.set(cid, token);
			owns = true;
		} else token = tok || cur;
		if (!owns) return c.json({
			me: cid,
			others: [],
			gone: "elsewhere"
		});
	}
	if (hold && !owns) return c.json({
		me: cid,
		others: [],
		gone: "elsewhere"
	});
	if (hold && taken && prevPage && prevPage !== page) {
		const old = pageStub(c, prevPage);
		if (old) {
			await old.purge(cid);
			await old.sendTaken(cid, token);
		}
	}
	const wantOthers = g("stream") !== "1" && g("stream") !== "true";
	let out;
	if (pageDo) out = await pageDo.tick({
		...input,
		token,
		join: isJoin,
		wantOthers
	});
	else {
		out = memoryWorld.tick({
			...input,
			token,
			join: isJoin
		});
		if (wantOthers) out = {
			...out,
			others: memoryWorld.peek(page, cid)
		};
	}
	if (taken) {}
	const bodyOut = {
		me: cid,
		token: out.token || token,
		color: out.color || look.b,
		look: out.look || look,
		others: out.others || []
	};
	if (out.said) bodyOut.said = out.said;
	if (out.error) bodyOut.error = out.error;
	return c.json(bodyOut);
}
async function getWalkPeek(c) {
	const page = pageOf(c.req.query("page"));
	const me = cidOf(c.get("auth"));
	const stub = pageStub(c, page);
	const others = stub ? await stub.peek(page, me) : memoryWorld.peek(page, me);
	return c.json({ others });
}
async function getLiveWs(c) {
	if (c.req.header("upgrade")?.toLowerCase() !== "websocket") return c.text("Expected WebSocket", 426);
	const key = slotKey(c);
	const caps = capsStub(c);
	if (!(caps ? await caps.acquireCap(key) : memoryCaps.acquire(key))) return c.json({ error: "Too many live connections." }, 429);
	const page = pageOf(c.req.query("page"));
	const stub = pageStub(c, page);
	if (!stub) {
		if (caps) await caps.releaseCap(key);
		else memoryCaps.release(key);
		return c.json({ error: "Live rooms are not available." }, 503);
	}
	const room = c.req.query("room") === "lounge" ? "lounge" : "";
	if (room) {
		const chat = chatStub(c, room);
		if (chat) await chat.addSub("page:" + page);
	}
	const ev = Number(c.req.query("event") || 0);
	if (ev) {
		const evs = evStub(c, ev);
		if (evs) await evs.addSub("page:" + page);
	}
	const auth = c.get("auth");
	const url = new URL("https://do/ws");
	url.searchParams.set("name", "page:" + page);
	url.searchParams.set("page", page);
	url.searchParams.set("uid", String(auth.user?.id || 0));
	url.searchParams.set("cid", cidOf(auth));
	url.searchParams.set("ip", clientIp(c));
	url.searchParams.set("key", key);
	url.searchParams.set("room", room);
	if (ev) url.searchParams.set("event", String(ev));
	const headers = new Headers(c.req.raw.headers);
	headers.set("Upgrade", "websocket");
	return stub.fetch(new Request(url.toString(), {
		method: "GET",
		headers
	}));
}
function msgJson(r) {
	const created = String(r.created || "");
	return {
		id: Number(r.id),
		uid: Number(r.user_id || 0),
		name: String(r.name || ""),
		body: String(r.body || ""),
		t: created.slice(11, 16),
		d: created.slice(0, 10),
		pinned: Number(r.pinned || 0),
		deleted: Number(r.deleted || 0)
	};
}
async function getRoomPoll(c) {
	await ensureExtraSchema(c.env.DB);
	if ((c.req.query("room") || "lounge") !== "lounge") return c.json({ error: "bad room" }, 400);
	const cid = (c.req.query("cid") || "").replace(/[^\w-]/g, "").slice(0, 40);
	const t = Date.now() / 1e3;
	const auth = c.get("auth");
	if (cid) {
		await c.env.DB.prepare("INSERT INTO room_presence(room,cid,user_id,seen) VALUES(?,?,?,?) ON CONFLICT(room,cid) DO UPDATE SET user_id=excluded.user_id, seen=excluded.seen").bind("lounge", cid, auth.user?.id ?? null, t).run();
		await c.env.DB.prepare("DELETE FROM room_presence WHERE seen<?").bind(t - 3600).run();
	}
	const since = Number(c.req.query("since") || 0) || 0;
	const q = since === 0 ? "SELECT * FROM (SELECT * FROM room_chat WHERE room=? AND deleted=0 ORDER BY id DESC LIMIT 200) ORDER BY id" : "SELECT * FROM room_chat WHERE room=? AND rev>? ORDER BY id";
	const { results } = since === 0 ? await c.env.DB.prepare(q).bind("lounge").all() : await c.env.DB.prepare(q).bind("lounge", since).all();
	const revRow = await c.env.DB.prepare("SELECT COALESCE(MAX(rev),0) AS n FROM room_chat WHERE room=?").bind("lounge").first();
	const hereRows = await c.env.DB.prepare("SELECT user_id FROM room_presence WHERE room=? AND seen>?").bind("lounge", t - 40).all();
	const members = {};
	let guests = 0;
	for (const raw of hereRows.results || []) {
		const uid = Number(raw.user_id || 0);
		if (!uid) {
			guests += 1;
			continue;
		}
		if (members[uid]) continue;
		const u = await c.env.DB.prepare("SELECT name FROM users WHERE id=?").bind(uid).first();
		if (u) members[uid] = {
			n: u.name,
			t: ""
		};
	}
	const here = Object.values(members).sort((a, b) => a.n.localeCompare(b.n));
	const n = here.length + guests;
	return c.json({
		messages: (results || []).map((r) => msgJson(r)),
		rev: Number(revRow?.n || 0),
		locked: false,
		status: "",
		here,
		guests,
		counts: { lounge: n }
	});
}
async function postRoom(c) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in to chat." }, 401);
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	if ((g("room") || "lounge") !== "lounge") return c.json({ error: "bad room" }, 400);
	const text = g("body").trim().slice(0, 1e3);
	if (!text) return c.json({ error: "Empty message." }, 400);
	const last = await c.env.DB.prepare("SELECT MAX(ts) AS t FROM room_chat WHERE user_id=?").bind(auth.user.id).first();
	if (last?.t && Date.now() / 1e3 - Number(last.t) < 1) return c.json({ error: "Slow down." }, 429);
	if (await needsVerified(c)) return c.json({ error: "Confirm your email to chat. The link is in your inbox, or resend it from Settings." }, 403);
	if (!text.startsWith(":sticker:")) {
		const problem = await checkText(c.env.DB, text, auth);
		if (problem) return c.json({ error: problem }, 400);
	}
	const revRow = await c.env.DB.prepare("SELECT COALESCE(MAX(rev),0)+1 AS n FROM room_chat WHERE room=?").bind("lounge").first();
	const rev = Number(revRow.n);
	const now = nowStamp();
	const ins = await c.env.DB.prepare("INSERT INTO room_chat(room,user_id,name,body,created,ts,rev) VALUES(?,?,?,?,?,?,?)").bind("lounge", auth.user.id, auth.user.name || auth.user.username, text, now, Date.now() / 1e3, rev).run();
	const payload = {
		room: "lounge",
		rev,
		messages: [msgJson(await c.env.DB.prepare("SELECT * FROM room_chat WHERE id=?").bind(ins.meta.last_row_id).first())]
	};
	const chat = chatStub(c, "lounge");
	if (chat) await chat.notifyChat("chat", payload);
	return c.json({ ok: true });
}
async function postRoomMsg(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const mid = Number(c.req.param("id"));
	const row = await c.env.DB.prepare("SELECT * FROM room_chat WHERE id=?").bind(mid).first();
	if (!row) return c.json({ error: "Not found" }, 404);
	if (!(Number(row.user_id) === auth.user.id) && !can(auth, "review") && !auth.is_admin) return c.json({ error: "Not found" }, 404);
	const revRow = await c.env.DB.prepare("SELECT COALESCE(MAX(rev),0)+1 AS n FROM room_chat WHERE room=?").bind(row.room).first();
	await c.env.DB.prepare("UPDATE room_chat SET deleted=1, rev=? WHERE id=?").bind(revRow.n, mid).run();
	const chat = chatStub(c, String(row.room));
	if (chat) await chat.notifyChat("chat", {
		room: row.room,
		rev: revRow.n,
		messages: [{
			...msgJson(row),
			deleted: 1
		}]
	});
	return c.json({ ok: true });
}
async function getEvPoll(c) {
	await ensureExtraSchema(c.env.DB);
	const eid = Number(c.req.param("eid"));
	if (!await c.env.DB.prepare("SELECT id, data, type FROM records WHERE id=? AND type='event'").bind(eid).first()) return c.json({ error: "Not found" }, 404);
	const cid = (c.req.query("cid") || "").replace(/[^\w-]/g, "").slice(0, 40);
	const t = Date.now() / 1e3;
	const auth = c.get("auth");
	if (cid) {
		await c.env.DB.prepare("INSERT INTO presence(event_id,cid,user_id,name,seen) VALUES(?,?,?,?,?) ON CONFLICT(event_id,cid) DO UPDATE SET user_id=excluded.user_id,name=excluded.name,seen=excluded.seen").bind(eid, cid, auth.user?.id ?? null, auth.user?.name ?? null, t).run();
		await c.env.DB.prepare("DELETE FROM presence WHERE seen<?").bind(t - 3600).run();
	}
	const since = Number(c.req.query("since") || 0) || 0;
	const { results } = since === 0 ? await c.env.DB.prepare("SELECT * FROM (SELECT * FROM chat WHERE event_id=? AND deleted=0 ORDER BY id DESC LIMIT 300) ORDER BY id").bind(eid).all() : await c.env.DB.prepare("SELECT * FROM chat WHERE event_id=? AND rev>? ORDER BY id").bind(eid, since).all();
	const revRow = await c.env.DB.prepare("SELECT COALESCE(MAX(rev),0) AS n FROM chat WHERE event_id=?").bind(eid).first();
	const hereRows = await c.env.DB.prepare("SELECT user_id, name FROM presence WHERE event_id=? AND seen>?").bind(eid, t - 40).all();
	const members = {};
	let guests = 0;
	for (const raw of hereRows.results || []) {
		const r = raw;
		if (!r.user_id) {
			guests += 1;
			continue;
		}
		if (!members[r.user_id]) members[r.user_id] = {
			n: String(r.name || ""),
			t: ""
		};
	}
	return c.json({
		event: eid,
		rev: Number(revRow?.n || 0),
		locked: false,
		messages: (results || []).map((r) => msgJson(r)),
		here: Object.values(members).sort((a, b) => a.n.localeCompare(b.n)),
		guests
	});
}
async function postEv(c) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in to chat." }, 401);
	const eid = Number(c.req.param("eid"));
	if (!await c.env.DB.prepare("SELECT id FROM records WHERE id=? AND type='event'").bind(eid).first()) return c.json({ error: "Not found" }, 404);
	const text = (((await formAll(c)).body || [""]).slice(-1)[0] || "").trim().slice(0, 1e3);
	if (!text) return c.json({ error: "Empty message." }, 400);
	const last = await c.env.DB.prepare("SELECT MAX(ts) AS t FROM chat WHERE user_id=? AND event_id=?").bind(auth.user.id, eid).first();
	if (last?.t && Date.now() / 1e3 - Number(last.t) < 1) return c.json({ error: "Slow down." }, 429);
	if (await needsVerified(c)) return c.json({ error: "Confirm your email to chat." }, 403);
	const problem = await checkText(c.env.DB, text, auth);
	if (problem) return c.json({ error: problem }, 400);
	const revRow = await c.env.DB.prepare("SELECT COALESCE(MAX(rev),0)+1 AS n FROM chat WHERE event_id=?").bind(eid).first();
	const now = nowStamp();
	const ins = await c.env.DB.prepare("INSERT INTO chat(event_id,user_id,name,body,created,ts,rev) VALUES(?,?,?,?,?,?,?)").bind(eid, auth.user.id, auth.user.name || auth.user.username, text, now, Date.now() / 1e3, revRow.n).run();
	const row = await c.env.DB.prepare("SELECT * FROM chat WHERE id=?").bind(ins.meta.last_row_id).first();
	const payload = {
		event: eid,
		rev: revRow.n,
		messages: [msgJson(row)]
	};
	const evs = evStub(c, eid);
	if (evs) await evs.notifyChat("evchat", payload);
	return c.json({ ok: true });
}
