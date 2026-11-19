var HEX = /^#[0-9a-fA-F]{6}$/;
var HATS = new Set(LOOK_HATS.map(([k]) => k));
function walkerLook(u) {
	const uid = u?.id || 0;
	let lk = {};
	try {
		lk = JSON.parse(u?.prefs || "{}").walker || {};
	} catch {}
	return {
		b: HEX.test(lk.b || "") ? lk.b : WALK_COLORS[uid % WALK_COLORS.length],
		h: HEX.test(lk.h || "") ? lk.h : "#0d0d0d",
		hat: HATS.has(lk.hat) ? lk.hat : "none",
		hc: HEX.test(lk.hc || "") ? lk.hc : "#0d0d0d"
	};
}
async function savePrefs(db, uid, pr) {
	await db.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), uid).run();
}
async function accountPayload(c, tab = "overview") {
	const u = c.get("auth").user;
	const db = c.env.DB;
	const pr = prefsOf(u);
	const look = walkerLook(u);
	let prof = {};
	try {
		prof = JSON.parse(u.profile || "{}");
	} catch {}
	const v = (k) => prof[k]?.v || "";
	const counts = {
		posts: 0,
		saved: 0,
		pending: 0
	};
	try {
		counts.posts = Number((await db.prepare("SELECT COUNT(*) AS n FROM records WHERE author_id=? AND type IN ('post','paper')").bind(u.id).first())?.n || 0);
		counts.saved = Number((await db.prepare("SELECT COUNT(*) AS n FROM saves WHERE user_id=?").bind(u.id).first())?.n || 0);
		counts.pending = Number((await db.prepare("SELECT COUNT(*) AS n FROM submissions WHERE user_id=? AND status='pending'").bind(u.id).first())?.n || 0);
	} catch {}
	const companies = [];
	try {
		const { results } = await db.prepare("SELECT r.id, r.slug, r.name, r.summary FROM owners o JOIN records r ON r.id=o.company_id WHERE o.user_id=? ORDER BY r.name COLLATE NOCASE").bind(u.id).all();
		for (const r of results || []) companies.push(r);
	} catch {}
	const following = [];
	try {
		const { results } = await db.prepare("SELECT r.slug, r.name, r.summary FROM follows f JOIN records r ON r.id=f.company_id WHERE f.user_id=? ORDER BY r.name COLLATE NOCASE").bind(u.id).all();
		for (const r of results || []) following.push(r);
	} catch {}
	let posts = [];
	let saved = [];
	let submissions = [];
	let sessions = [];
	if (tab === "posts" || tab === "overview") try {
		const { results } = await db.prepare("SELECT id, slug, name, type, summary, created, feed_at FROM records WHERE author_id=? AND type IN ('post','paper') ORDER BY id DESC LIMIT 40").bind(u.id).all();
		posts = results || [];
	} catch {}
	if (tab === "saved") try {
		const { results } = await db.prepare("SELECT r.id, r.slug, r.name, r.type, r.summary FROM saves s JOIN records r ON r.id=s.record_id WHERE s.user_id=? ORDER BY s.created DESC LIMIT 40").bind(u.id).all();
		saved = results || [];
	} catch {}
	if (tab === "review") try {
		const { results } = await db.prepare("SELECT * FROM submissions WHERE user_id=? ORDER BY id DESC LIMIT 100").bind(u.id).all();
		submissions = (results || []).map((sb) => {
			const row = sb;
			let p = {};
			try {
				p = JSON.parse(String(row.payload || "{}"));
			} catch {}
			return {
				...row,
				title: p.name || p.company || p.title || "",
				label: subLabel(String(row.kind), p)
			};
		});
	} catch {}
	if (tab === "security") try {
		const { results } = await db.prepare("SELECT token, created, last_seen, ip, ua FROM sessions WHERE user_id=? ORDER BY last_seen DESC").bind(u.id).all();
		const mine = u._session;
		sessions = (results || []).map((s) => {
			const row = s;
			return {
				created: row.created,
				last_seen: row.last_seen,
				ip: row.ip,
				ua: row.ua,
				current: row.token === mine
			};
		});
	} catch {}
	return {
		tab,
		tabs: ACCOUNT_TABS,
		username: u.username,
		role: u.role,
		created: u.created,
		look,
		hats: LOOK_HATS,
		byline: {
			title: v("title"),
			organisation: v("organisation"),
			bio: v("bio")
		},
		email: String(pr.email || ""),
		email_verified: !!pr.email_verified,
		profile_vis: String(pr.profile_vis || "members"),
		totp: Boolean(u.totp),
		counts,
		companies,
		following,
		posts,
		saved,
		submissions,
		sessions,
		recovery_left: (() => {
			try {
				return JSON.parse(u.recovery || "[]").length;
			} catch {
				return 0;
			}
		})()
	};
}
async function postAccount(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const g = await readBody(c);
	const u = auth.user;
	const pr = prefsOf(u);
	const act = g.action;
	if (act === "privacy") {
		if (![
			"me",
			"members",
			"everyone"
		].includes(g.profile_vis)) return c.json({ error: "Choose who can see your profile." }, 400);
		pr.profile_vis = g.profile_vis;
		await savePrefs(c.env.DB, u.id, pr);
		return c.json({
			ok: true,
			message: "Profile visibility saved."
		});
	}
	if (act === "email") {
		const email = (g.email || "").trim().slice(0, 200);
		if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return c.json({ error: "Enter a valid email address." }, 400);
		if (email.toLowerCase() !== String(pr.email || "").toLowerCase()) {
			pr.email = email;
			pr.email_verified = false;
			await savePrefs(c.env.DB, u.id, pr);
		}
		return c.json({
			ok: true,
			message: "Email saved."
		});
	}
	if (act === "password") return c.json({ error: "Accounts sign in with email or a connected service now." }, 410);
	return c.json({ error: "Unknown action." }, 400);
}
async function postCharacter(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const g = await readBody(c);
	const pr = prefsOf(auth.user);
	if (g.reset === "1") {
		delete pr.walker;
		await savePrefs(c.env.DB, auth.user.id, pr);
		return c.json({
			ok: true,
			message: "Back to the default look.",
			look: walkerLook({
				...auth.user,
				prefs: JSON.stringify(pr)
			})
		});
	}
	const pick = (k) => {
		const custom = g[k + "_custom"] || "";
		const touched = g[k + "_touched"];
		if (HEX.test(custom) && touched && custom.toLowerCase() !== (g[k] || "").toLowerCase()) return custom;
		return g[k];
	};
	const lk = {
		b: pick("b"),
		h: pick("h"),
		hat: g.hat,
		hc: pick("hc")
	};
	pr.walker = Object.fromEntries(Object.entries(lk).filter(([k, v]) => k === "hat" && HATS.has(v || "") || HEX.test(v || "")));
	await savePrefs(c.env.DB, auth.user.id, pr);
	return c.json({
		ok: true,
		message: "Saved. Your character uses this look the next time you walk.",
		look: walkerLook({
			...auth.user,
			prefs: JSON.stringify(pr)
		})
	});
}
async function postSecurity(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const g = await readBody(c);
	const u = auth.user;
	const db = c.env.DB;
	const act = g.action;
	if (act === "on" || act === "off" || act === "newcodes" || act === "setup-secret") return c.json({ error: "Two-step login has been removed. Sign in with email or a connected service." }, 410);
	if (act === "others") {
		await endOtherSessions(db, u.id, u._session || "");
		return c.json({
			ok: true,
			message: "Logged out everywhere else."
		});
	}
	if (act === "delete") {
		if (g.confirm !== "DELETE") return c.json({ error: "Type DELETE to confirm." }, 400);
		const uname = `deleted-${u.id}`;
		await db.prepare("UPDATE users SET username=?, name='Former member', pw='!', prefs='{}', profile='{}', disabled=1, totp='', recovery='[]', suspended_until='', suspend_reason='' WHERE id=?").bind(uname, u.id).run();
		await db.prepare("DELETE FROM sessions WHERE user_id=?").bind(u.id).run();
		const https = auth.https;
		const res = c.json({
			ok: true,
			next: "/"
		});
		res.headers.append("Set-Cookie", clearSidCookie(https));
		return res;
	}
	return c.json({ error: "Unknown action." }, 400);
}
async function exportMine(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const u = { ...auth.user };
	delete u.pw;
	delete u.totp;
	delete u.recovery;
	delete u.totp_step;
	delete u._session;
	return c.json({
		user: u,
		exported: nowStamp()
	});
}
