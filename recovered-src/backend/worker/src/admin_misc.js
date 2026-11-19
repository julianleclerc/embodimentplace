async function emailAdminPayload(c, msg = "") {
	const smtp = await smtpSettings(c.env.DB, c.env);
	const site = (c.env.EP_SITE_URL || await setting$1(c.env.DB, "site_url") || "").replace(/\/$/, "");
	return {
		...smtp,
		password: smtp.password ? "(set)" : "",
		site_url: site,
		msg,
		site_name: SITE_NAME,
		from_env: mailFromEnv(c.env)
	};
}
async function postEmailAdmin(c) {
	const all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	if (mailFromEnv(c.env)) {
		const p = await emailAdminPayload(c, "Nothing changed: the mail server comes from the environment.");
		return c.json({
			ok: true,
			...p,
			next: "/admin/email"
		});
	}
	for (const k of [
		"host",
		"port",
		"security",
		"user",
		"from",
		"from_name"
	]) await setSetting(c.env.DB, "smtp_" + k, g(k).slice(0, 200));
	if (g("password")) await setSetting(c.env.DB, "smtp_password", g("password").slice(0, 200));
	if (g("site_url").startsWith("http://") || g("site_url").startsWith("https://")) await setSetting(c.env.DB, "site_url", g("site_url").slice(0, 200));
	const p = await emailAdminPayload(c, "Saved.");
	return c.json({
		ok: true,
		...p,
		next: "/admin/email"
	});
}
async function postEmailTest(c) {
	const to = (((await formAll(c)).to || [""]).slice(-1)[0] || "").trim();
	const err = await sendMail(c.env.DB, c.env, {
		to,
		subject: `${SITE_NAME}: test email`,
		html: `<p>Email sending works on ${SITE_NAME}.</p>`,
		text: "Email sending works."
	});
	const p = await emailAdminPayload(c, err || `Test email sent to ${to}.`);
	return c.json({
		ok: !err,
		...p,
		next: "/admin/email"
	});
}
async function stickersPayload(c, msg = "", error = "") {
	let pack = [];
	try {
		pack = JSON.parse(await setting$1(c.env.DB, "stickers") || "[]");
	} catch {
		pack = [];
	}
	return {
		pack,
		msg,
		error
	};
}
async function postStickers(c) {
	const ct = c.req.header("content-type") || "";
	let file = null;
	let g = (k) => "";
	if (ct.includes("multipart/form-data")) {
		const raw = await c.req.parseBody();
		g = (k) => String(raw[k] ?? "").trim();
		const f = raw.file;
		if (f instanceof File) file = f;
	} else {
		const all = await formAll(c);
		g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	}
	let pack = [];
	try {
		pack = JSON.parse(await setting$1(c.env.DB, "stickers") || "[]");
	} catch {
		pack = [];
	}
	const act = g("action");
	let msg = "", error = "";
	if (act === "add") {
		const name = g("name").toLowerCase();
		if (!/^[a-z0-9_-]{1,24}$/.test(name)) error = "Use 1 to 24 lowercase letters, numbers, - or _ for the code.";
		else if (pack.some((x) => x.name === name)) error = `There is already a sticker called :${name}:.`;
		else {
			const id = bytesToHex(randomBytes(4));
			let url = g("url");
			if (file) {
				if (file.size > 6291456) error = "Use a PNG, GIF or WebP image under 6 MB.";
				else {
					const typ = (file.type || "").toLowerCase();
					const ext = typ.includes("gif") ? "gif" : typ.includes("webp") ? "webp" : typ.includes("png") ? "png" : (file.name.split(".").pop() || "").toLowerCase();
					if (![
						"png",
						"gif",
						"webp"
					].includes(ext)) error = "Use a PNG, GIF or WebP image under 6 MB.";
					else if (!c.env.MEDIA) error = "Media storage is not configured.";
					else {
						const key = `stickers/${id}.${ext}`;
						await c.env.MEDIA.put(key, file.stream(), { httpMetadata: { contentType: typ || "image/" + ext } });
						url = "/media/" + key;
					}
				}
			} else if (!url || !/\.(png|gif|webp)(\?|$)/i.test(url)) error = "Choose a PNG, GIF or WebP file, or give an image URL.";
			if (!error && url) {
				pack.push({
					id,
					name,
					url
				});
				msg = `Added :${name}:.`;
			}
		}
	} else if (act === "delete") {
		pack = pack.filter((x) => x.id !== g("id"));
		msg = "Deleted. Messages that used it now show a placeholder.";
	} else if (act === "up") {
		const i = pack.findIndex((x) => x.id === g("id"));
		if (i > 0) [pack[i - 1], pack[i]] = [pack[i], pack[i - 1]];
		msg = "Saved.";
	}
	if (!error) await setSetting(c.env.DB, "stickers", JSON.stringify(pack));
	const p = await stickersPayload(c, msg, error);
	return c.json({
		ok: !error,
		...p,
		next: "/admin/stickers"
	});
}
async function focusPayload(c, msg = "") {
	let areas = [];
	try {
		const saved = JSON.parse(await setting$1(c.env.DB, "focus_areas") || "null");
		if (Array.isArray(saved) && saved.length) areas = saved.map(String);
	} catch {}
	if (!areas.length) areas = [...FOCUS_AREAS];
	return {
		areas,
		msg
	};
}
async function postFocus(c) {
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	let msg = "Saved.";
	if (g("reset")) {
		await c.env.DB.prepare("DELETE FROM settings WHERE key='focus_areas'").run();
		msg = "Back to the starting list.";
	} else {
		const lines = [];
		for (const raw of g("areas").split(/\n/)) {
			const x = raw.replace(/\s+/g, " ").trim().slice(0, 60);
			if (x && !lines.includes(x)) lines.push(x);
		}
		await setSetting(c.env.DB, "focus_areas", JSON.stringify(lines.slice(0, 60)));
	}
	const p = await focusPayload(c, msg);
	return c.json({
		ok: true,
		...p,
		next: "/admin/focus"
	});
}
