/** Mini-markdown, ported from backend/ep/util.py so legal and About pages match. */
function esc(s) {
	return String(s ?? "").replace(/[&<>"']/g, (c) => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	})[c]);
}
function mdInline(s, resolve) {
	s = esc(s);
	const codes = [];
	s = s.replace(/`([^`]+)`/g, (_m, code) => {
		codes.push(code);
		return `\0${codes.length - 1}\0`;
	});
	s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
	s = s.replace(/(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])/g, "<em>$1</em>");
	s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, text, url) => {
		const u = url.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#39;/g, "'");
		if (!/^(https?:\/\/|\/|#|mailto:)/.test(u)) return m;
		const ext = u.startsWith("http") ? " target=_blank rel=noopener" : "";
		return `<a href="${esc(u)}"${ext}>${text}</a>`;
	});
	s = s.replace(/\[\[([^\]]+)\]\]/g, (_m, label) => {
		const raw = String(label).replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, "\"").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
		const hit = resolve?.(raw);
		if (hit) return `<a href="${esc(hit.href)}">${esc(hit.name)}</a>`;
		return `<span class=missing title="No record yet">${esc(raw)}</span>`;
	});
	s = s.replace(/\0(\d+)\0/g, (_m, i) => `<code>${codes[Number(i)]}</code>`);
	return s;
}
var IMG_LINE = /^!\[([^\]]*)\]\(([^)\s]+)\)$/;
function md(text, resolve, embed) {
	const out = [];
	let para = [];
	let lst = null;
	let code = [];
	let inCode = false;
	const flush = () => {
		if (para.length) {
			out.push("<p>" + mdInline(para.join(" "), resolve) + "</p>");
			para = [];
		}
		if (lst) {
			const [tag, items] = lst;
			out.push(`<${tag}>` + items.map((i) => `<li>${mdInline(i, resolve)}</li>`).join("") + `</${tag}>`);
			lst = null;
		}
	};
	for (const raw of (text || "").replace(/\r\n/g, "\n").split("\n")) {
		if (raw.trim().startsWith("```")) {
			if (inCode) {
				out.push("<pre><code>" + esc(code.join("\n")) + "</code></pre>");
				code = [];
				inCode = false;
			} else {
				flush();
				inCode = true;
			}
			continue;
		}
		if (inCode) {
			code.push(raw);
			continue;
		}
		const st = raw.trim();
		const mH = st.match(/^(#{1,4})\s+(.*)/);
		const mUl = st.match(/^[-*]\s+(.*)/);
		const mOl = st.match(/^\d+[.)]\s+(.*)/);
		if (!st) flush();
		else if (mH) {
			flush();
			const n = mH[1].length + 1;
			out.push(`<h${n}>${mdInline(mH[2], resolve)}</h${n}>`);
		} else if (st === "---" || st === "***") {
			flush();
			out.push("<hr>");
		} else if (IMG_LINE.test(st) && /^https?:\/\//i.test(IMG_LINE.exec(st)[2])) {
			flush();
			const [, cap, src] = IMG_LINE.exec(st);
			out.push(`<figure class=mimg><img src='${esc(src)}' alt='${esc(cap)}' loading=lazy referrerpolicy=no-referrer>${cap ? `<figcaption>${esc(cap)}</figcaption>` : ""}</figure>`);
		} else if (embed && /^https?:\/\/\S+$/.test(st) && embed(st)) {
			flush();
			out.push(`<div class=membed>${embed(st)}</div>`);
		} else if (st.startsWith(">")) {
			flush();
			out.push("<blockquote>" + mdInline(st.slice(1).trim(), resolve) + "</blockquote>");
		} else if (mUl || mOl) {
			const tag = mUl ? "ul" : "ol";
			if (para.length) flush();
			if (!lst || lst[0] !== tag) {
				flush();
				lst = [tag, []];
			}
			lst[1].push((mUl || mOl)[1]);
		} else {
			if (lst) flush();
			para.push(st);
		}
	}
	if (inCode) out.push("<pre><code>" + esc(code.join("\n")) + "</code></pre>");
	flush();
	return out.join("\n");
}
function fillLegal(src, contact = "contact@embodiment.place", logDays = 14, updated = "16 November 2026") {
	return src.replaceAll("{contact_email}", contact).replaceAll("{log_days}", String(logDays)).replaceAll("{updated}", updated);
}
function stripMd(text) {
	let t = (text || "").replace(/```[\s\S]*?```/g, " ");
	t = t.replace(/^!\[[^\]]*\]\([^)]*\)\s*$/gm, " ");
	t = t.replace(/^https?:\/\/\S+\s*$/gm, " ");
	t = t.replace(/\[\[([^\]]+)\]\]/g, "$1");
	t = t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
	t = t.replace(/[#*>`_-]+/g, " ");
	return t.replace(/\s+/g, " ").trim();
}
