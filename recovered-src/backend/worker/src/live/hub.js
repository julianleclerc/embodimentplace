var LiveHub = class extends DurableObject {
	world = new WalkWorld();
	caps = new StreamCaps();
	/** chat:lounge / event:N subscribers: page-DO names */
	subs = /* @__PURE__ */ new Set();
	constructor(ctx, env) {
		super(ctx, env);
		this.ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair("ping", "pong"));
	}
	nameOf(req) {
		return new URL(req?.url || "https://do/").searchParams.get("name") || "unknown";
	}
	async fetch(request) {
		const url = new URL(request.url);
		if (request.headers.get("Upgrade") !== "websocket") return new Response("Expected WebSocket", { status: 426 });
		const pair = new WebSocketPair();
		const [client, server] = Object.values(pair);
		const att = {
			uid: Number(url.searchParams.get("uid") || 0),
			cid: url.searchParams.get("cid") || "",
			ip: url.searchParams.get("ip") || "",
			key: url.searchParams.get("key") || "ip:0",
			room: url.searchParams.get("room") || "",
			page: url.searchParams.get("page") || "/",
			ev: Number(url.searchParams.get("event") || 0)
		};
		this.ctx.acceptWebSocket(server);
		server.serializeAttachment(att);
		const snap = this.world.snapshot(att.page, att.cid);
		try {
			server.send(JSON.stringify({
				type: "walk",
				id: this.world.seq,
				data: snap
			}));
		} catch {}
		return new Response(null, {
			status: 101,
			webSocket: client
		});
	}
	async webSocketMessage(ws, message) {
		if (typeof message !== "string") return;
		if (message === "ping") {
			try {
				ws.send("pong");
			} catch {}
			return;
		}
		let msg = {};
		try {
			msg = JSON.parse(message);
		} catch {
			return;
		}
		const typ = String(msg.type || "");
		ws.deserializeAttachment();
		if (typ === "walk") return;
		if (typ === "presence") {}
	}
	async webSocketClose(ws) {
		const att = ws.deserializeAttachment() || {};
		if (att.key) try {
			const caps = this.env.LIVE ? this.env.LIVE.getByName("caps") : null;
			if (caps && this.ctx.id.toString() !== this.env.LIVE.idFromName("caps").toString()) await caps.releaseCap(att.key);
			else this.caps.release(att.key);
		} catch {}
	}
	async webSocketError(ws) {
		await this.webSocketClose(ws);
	}
	async tick(input) {
		const out = this.world.tick(input);
		out.others = input.wantOthers ? this.world.peek(input.page, input.cid) : [];
		await this.broadcastWalk(input.page);
		return out;
	}
	async peek(page, me) {
		return this.world.peek(page, me);
	}
	async purge(cid) {
		this.world.purgeCid(cid);
		await this.broadcastWalk(this.pageName());
	}
	async sendTaken(cid, token) {
		await this.broadcast("taken", {
			gone: "elsewhere",
			token,
			cid
		}, (att) => att.cid === cid);
	}
	async broadcast(type, data, filter) {
		const payload = JSON.stringify({
			type,
			id: this.world.seq,
			data
		});
		for (const ws of this.ctx.getWebSockets()) try {
			const att = ws.deserializeAttachment() || {};
			if (filter && !filter(att)) continue;
			ws.send(payload);
		} catch {}
	}
	/** Send each socket a walk snapshot that never includes that socket's own walker. */
	async broadcastWalk(page) {
		for (const ws of this.ctx.getWebSockets()) try {
			const att = ws.deserializeAttachment() || {};
			const mine = /* @__PURE__ */ new Set();
			if (att.cid) mine.add(att.cid);
			if (att.uid) mine.add("u" + att.uid);
			const me = att.cid || (att.uid ? "u" + att.uid : "");
			const snap = this.world.snapshot(page, me);
			if (mine.size) snap.others = snap.others.filter((o) => !mine.has(o.id));
			ws.send(JSON.stringify({
				type: "walk",
				id: this.world.seq,
				data: snap
			}));
		} catch {}
	}
	async takeHold(cid, token, page, join) {
		const cur = await this.ctx.storage.get("hold:" + cid) || null;
		let tok = token;
		let owns = Boolean(cur && token && cur.token === token);
		let taken = false;
		let prevPage = cur?.page || "";
		if (join && !owns) {
			const { randomToken } = await Promise.resolve().then(() => state_exports);
			tok = randomToken();
			taken = Boolean(cur?.token);
			await this.ctx.storage.put("hold:" + cid, {
				token: tok,
				page
			});
			owns = true;
		} else if (join && owns) await this.ctx.storage.put("hold:" + cid, {
			token: tok,
			page
		});
		else if (owns && page && page !== prevPage) await this.ctx.storage.put("hold:" + cid, {
			token: tok,
			page
		});
		return {
			token: tok,
			owns,
			taken,
			prevPage
		};
	}
	async dropHold(cid, token) {
		const cur = await this.ctx.storage.get("hold:" + cid) || null;
		if (!cur) return true;
		if (token && token !== cur.token) return false;
		await this.ctx.storage.delete("hold:" + cid);
		return true;
	}
	async holdPage(cid) {
		return (await this.ctx.storage.get("hold:" + cid) || null)?.page || "";
	}
	async acquireCap(key) {
		return this.caps.acquire(key);
	}
	async releaseCap(key) {
		this.caps.release(key);
	}
	async addSub(pageName) {
		this.subs.add(pageName);
		await this.ctx.storage.put("subs", [...this.subs]);
	}
	async removeSub(pageName) {
		this.subs.delete(pageName);
		await this.ctx.storage.put("subs", [...this.subs]);
	}
	async notifyChat(type, data) {
		const stored = await this.ctx.storage.get("subs") || [...this.subs];
		for (const s of stored) try {
			await this.env.LIVE.getByName(s).broadcast(type, data);
		} catch {}
		await this.broadcast(type, data);
	}
	pageName() {
		for (const ws of this.ctx.getWebSockets()) {
			const att = ws.deserializeAttachment() || {};
			if (att.page) return att.page;
		}
		return "/";
	}
};
