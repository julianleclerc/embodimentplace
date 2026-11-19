function adminBarLinks(auth, counts) {
	if (auth.needs_2fa || !auth.logged) return [];
	const links = [];
	if (can(auth, "review") || can(auth, "claims")) {
		const n = counts?.review;
		links.push({
			href: "/review",
			label: `Review (${n ?? 0})`
		});
	}
	if (can(auth, "create")) links.push({
		href: "/new",
		label: "+ New record"
	});
	if (can(auth, "review")) {
		const n = counts?.reports;
		links.push({
			href: "/admin/reports",
			label: n ? `Reports (${n})` : "Reports"
		});
	}
	if (can(auth, "home")) links.push({
		href: "/admin/home",
		label: "Home highlights"
	});
	if (can(auth, "meet")) {
		const n = counts?.meet;
		links.push({
			href: "/admin/meet",
			label: n ? `Requests (${n})` : "Requests"
		});
		links.push({
			href: "/community/orgs",
			label: "Community orgs"
		});
	}
	if (auth.is_admin) links.push({
		href: "/community/people",
		label: "People"
	}, {
		href: "/users",
		label: "Users"
	}, {
		href: "/admin/email",
		label: "Email"
	}, {
		href: "/admin/stickers",
		label: "Stickers"
	}, {
		href: "/admin/focus",
		label: "Focus areas"
	}, {
		href: "/admin/requests",
		label: "Quote requests"
	}, {
		href: "/export.json",
		label: "Export JSON"
	});
	return links;
}
async function barCounts(db, auth) {
	const out = {};
	try {
		if (can(auth, "review") || can(auth, "claims")) {
			const q = "SELECT COUNT(*) AS n FROM submissions WHERE status='pending'" + (can(auth, "review") ? "" : " AND kind='claim'");
			const a = await db.prepare(q).first();
			let n = Number(a?.n || 0);
			if (can(auth, "review")) {
				const c = await db.prepare("SELECT COUNT(*) AS n FROM comments WHERE status='pending'").first();
				n += Number(c?.n || 0);
			}
			out.review = n;
		}
		if (can(auth, "review")) {
			const r = await db.prepare("SELECT COUNT(*) AS n FROM reports WHERE status='open'").first();
			out.reports = Number(r?.n || 0);
		}
		if (can(auth, "meet")) {
			const m = await db.prepare("SELECT COUNT(*) AS n FROM meet_requests WHERE status='pending'").first();
			out.meet = Number(m?.n || 0);
		}
	} catch {}
	return out;
}
/** Status for a gated page: null means allowed. */
function gateStatus(path, method, auth) {
	const p = path.replace(/\/+$/, "") || "/";
	if ((p === "/account" || p.startsWith("/account/") || p === "/watchlist" || p.startsWith("/watchlist/") || p.startsWith("/create") || p.startsWith("/claim/") || p.startsWith("/manage/")) && !auth.user) return {
		status: 302,
		location: "/login?next=" + encodeURIComponent(p)
	};
	if (ADMIN_ONLY.includes(p) || p === "/export.json") {
		if (!auth.is_admin) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p === "/admin/meet" || p === "/community/orgs") {
		if (!can(auth, "meet")) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p === "/admin/home") {
		if (!can(auth, "home")) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p === "/admin/reports") {
		if (!can(auth, "review")) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p === "/review" || p.startsWith("/review/")) {
		if (!auth.logged) {
			if (!auth.user) return {
				status: 302,
				location: "/login?next=" + encodeURIComponent(p)
			};
			return {
				status: 403,
				body: "Admins only"
			};
		}
		if (!(can(auth, "review") || can(auth, "claims"))) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p === "/new" || p.startsWith("/new/")) {
		if (!can(auth, "create")) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p.startsWith("/edit/") || p === "/save" || p.startsWith("/delete/")) {
		if (!auth.logged) {
			if (!auth.user) return {
				status: 302,
				location: "/login?next=" + encodeURIComponent(p)
			};
			return {
				status: 403,
				body: "Admins only"
			};
		}
		if (p.startsWith("/delete/") && !can(auth, "create")) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p.startsWith("/admin/")) {
		if (!auth.is_admin) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	return null;
}
function isGatedPath(path) {
	const p = path.replace(/\/+$/, "") || "/";
	return p === "/account" || p.startsWith("/account/") || p === "/users" || p === "/review" || p.startsWith("/review/") || p === "/new" || p.startsWith("/new/") || p.startsWith("/edit/") || p === "/save" || p.startsWith("/delete/") || p.startsWith("/admin/") || p === "/community/people" || p === "/community/orgs" || p === "/export.json" || p === "/watchlist" || p.startsWith("/watchlist/") || p.startsWith("/create") || p.startsWith("/claim/") || p.startsWith("/manage/") || p === "/login" || p.startsWith("/login/") || p === "/join" || p === "/logout" || p === "/forgot" || p.startsWith("/reset") || p.startsWith("/verify");
}
