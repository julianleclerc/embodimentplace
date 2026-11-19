// Export the site's public content from D1 into content/ as readable JSON files.
//
// Only public data is exported: records that are not private and not demo, the links between them,
// and the database schema (table definitions, no rows). Users, sessions, emails, chat, requests and
// other personal data are never exported, because this repository is public.
//
// Usage (in GitHub Actions): CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... node scripts/export-content.mjs
// Offline (from saved query results): node scripts/export-content.mjs --records r.json --links l.json [--schema s.json]

import { mkdirSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { accountId } from "./cf-account.mjs";

const DATABASE_ID = "f0208a60-bea9-4a39-9a79-89565c0bc32b"; // D1 "embodiment-place"
const OUT = "content";

const SQL = {
  records: `SELECT id, type, slug, name, summary, body, data, created, updated, feed_at
            FROM records WHERE private = 0 AND demo = 0 ORDER BY id`,
  links: `SELECT l.id, l.src, l.rel, l.dst, l.note, l.pos, l.source
          FROM links l
          JOIN records a ON a.id = l.src JOIN records b ON b.id = l.dst
          WHERE a.private = 0 AND a.demo = 0 AND b.private = 0 AND b.demo = 0
          ORDER BY l.id`,
  schema: `SELECT type, name, sql FROM sqlite_master
           WHERE sql IS NOT NULL AND name NOT LIKE '\\_cf\\_%' ESCAPE '\\' AND name NOT LIKE 'sqlite_%'
             AND name NOT IN ('fts_config', 'fts_content', 'fts_data', 'fts_docsize', 'fts_idx')
           ORDER BY CASE type WHEN 'table' THEN 0 WHEN 'index' THEN 1 ELSE 2 END, name`,
};

async function query(sql) {
  const token = process.env.CLOUDFLARE_API_TOKEN;
  if (!token) throw new Error("CLOUDFLARE_API_TOKEN must be set");
  const account = await accountId(token);
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${account}/d1/database/${DATABASE_ID}/query`,
    { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ sql }) },
  );
  const body = await res.json();
  if (!res.ok || !body.success) throw new Error(`D1 query failed (${res.status}): ${JSON.stringify(body.errors)}`);
  return body.result[0].results;
}

function fromFile(path) {
  const parsed = JSON.parse(readFileSync(path, "utf8"));
  // Accepts either a plain array of rows or the D1 API / MCP shape [{results: [...]}].
  return Array.isArray(parsed) && parsed[0]?.results ? parsed[0].results : parsed;
}

function arg(name) {
  const i = process.argv.indexOf(name);
  return i > 0 ? process.argv[i + 1] : undefined;
}

const offline = arg("--records");
const records = offline ? fromFile(arg("--records")) : await query(SQL.records);
const links = offline ? fromFile(arg("--links")) : await query(SQL.links);
const schema = offline ? (arg("--schema") ? fromFile(arg("--schema")) : null) : await query(SQL.schema);

const json = (v) => JSON.stringify(v, null, 2) + "\n";
const safe = (s) => String(s).replace(/[^A-Za-z0-9._-]/g, "_");

// Rewrite records from scratch so deleted records disappear from the backup too.
rmSync(join(OUT, "records"), { recursive: true, force: true });
const counts = {};
for (const r of records) {
  let data = r.data;
  try { data = JSON.parse(r.data || "{}"); } catch { /* keep the raw string */ }
  const dir = join(OUT, "records", safe(r.type));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${safe(r.slug)}.json`), json({ ...r, data }));
  counts[r.type] = (counts[r.type] || 0) + 1;
}
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "links.json"), json(links));
if (schema) writeFileSync(join(OUT, "schema.sql"), schema.map((s) => s.sql.trim() + ";\n").join("\n"));

console.log(`Exported ${records.length} records ${JSON.stringify(counts)} and ${links.length} links` + (schema ? `, schema of ${schema.length} objects` : ""));
