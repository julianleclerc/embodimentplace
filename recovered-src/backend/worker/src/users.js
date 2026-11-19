async function usersPayload(c) {
	const { results } = await c.env.DB.prepare("SELECT * FROM users ORDER BY role, username COLLATE NOCASE").all();
	const users = [];
	for (const raw of results || []) {
		const u = raw;
		const pr = prefsOf(u);
		let companies = [];
		try {
			companies = (await c.env.DB.prepare("SELECT r.id, r.slug, r.name FROM owners o JOIN records r ON r.id=o.company_id WHERE o.user_id=?").bind(u.id).all()).results || [];
		} catch {}
		users.push({
			id: u.id,
			username: u.username,
			role: u.role,
			disabled: u.disabled,
			created: u.created,
			suspended: isSuspended(u),
			suspended_until: u.suspended_until,
			suspend_reason: u.suspend_reason,
			status: u.disabled ? "Disabled" : isSuspended(u) ? "Suspended" : "Active",
			suspension_text: isSuspended(u) ? suspensionText(u) : "",
			perms: Array.isArray(pr.perms) ? pr.perms : [],
			email: typeof pr.email === "string" ? pr.email : "",
			companies
		});
	}
	return {
		users,
		contrib_perms: CONTRIB_PERMS,
		signup_mode: await signupMode(c.env.DB),
		signup_code: await (await Promise.resolve().then(() => session_exports)).setting(c.env.DB, "signup_code")
	};
}
async function postUsers(c) {
	const auth = c.get("auth");
	if (!auth.is_admin) return c.json({ error: "Not found" }, 404);
	const all = await formAll(c);
	const g = Object.fromEntries(Object.entries(all).map(([k, v]) => [k, v[v.length - 1] || ""]));
	const act = g.action;
	if (act === "create") {
		const role = [
			"admin",
			"contributor",
			"user"
		].includes(g.role) ? g.role : "user";
		const email = normEmail(g.email || "");
		if (!EMAIL_RE.test(email)) return c.json({ error: "Enter a valid email address." }, 400);
		if (await getUserByEmail(c.env.DB, email)) return c.json({ error: "That email already has an account." }, 400);
		const made = await createUser(c.env.DB, g.username || "", "", role);
		if (made.error || !made.id) return c.json({ error: made.error || "Could not create the user." }, 400);
		await setUserEmail(c.env.DB, made.id, email, false);
		return c.json({
			ok: true,
			message: "User created. They can sign in with that email.",
			id: made.id
		});
	}
	if (act === "code") {
		const mode = [
			"open",
			"code",
			"closed"
		].includes(g.mode) ? g.mode : "open";
		if (mode === "code" && !(g.code || "").trim()) return c.json({ error: "Code mode needs a code." }, 400);
		await setSetting(c.env.DB, "signup_code", (g.code || "").trim());
		await setSetting(c.env.DB, "signup_mode", mode);
		return c.json({
			ok: true,
			message: `Sign-up: ${mode}.`
		});
	}
	const uid = Number(g.uid);
	const row = Number.isFinite(uid) ? await c.env.DB.prepare("SELECT * FROM users WHERE id=?").bind(uid).first() : null;
	if (!row) return c.json({ error: "User not found." }, 404);
	if (act === "resetpw") return c.json({ error: "Accounts sign in with email or a connected service now." }, 410);
	if (uid === auth.user.id) return c.json({ error: "You can't change your own role or status here." }, 400);
	if (act === "disable" || act === "enable") {
		await c.env.DB.prepare("UPDATE users SET disabled=? WHERE id=?").bind(act === "disable" ? 1 : 0, uid).run();
		if (act === "disable") await c.env.DB.prepare("DELETE FROM sessions WHERE user_id=?").bind(uid).run();
	} else if (act === "suspend") {
		const days = [
			"1",
			"7",
			"30",
			"forever"
		].includes(g.days) ? g.days : "7";
		const reason = (g.reason || "").trim() || "Breaking the site rules";
		const until = days === "forever" ? "forever" : new Date(Date.now() + Number(days) * 864e5).toISOString().slice(0, 19).replace("T", " ");
		await c.env.DB.prepare("UPDATE users SET suspended_until=?, suspend_reason=? WHERE id=?").bind(until, reason, uid).run();
		await c.env.DB.prepare("DELETE FROM sessions WHERE user_id=?").bind(uid).run();
	} else if (act === "unsuspend") await c.env.DB.prepare("UPDATE users SET suspended_until='', suspend_reason='' WHERE id=?").bind(uid).run();
	else if (act === "role") {
		const role = [
			"user",
			"contributor",
			"admin"
		].includes(g.role) ? g.role : "user";
		await c.env.DB.prepare("UPDATE users SET role=? WHERE id=?").bind(role, uid).run();
	} else if (act === "perms") {
		const pr = prefsOf(row);
		const valid = new Set(CONTRIB_PERMS.map(([k]) => k));
		pr.perms = (all.perm || (g.perm ? [g.perm] : [])).filter((x) => valid.has(x));
		await c.env.DB.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), uid).run();
	}
	return c.json({
		ok: true,
		message: "Saved."
	});
}
