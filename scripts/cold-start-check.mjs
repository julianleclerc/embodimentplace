// Cold-start check: how many D1 round trips a brand-new Worker isolate makes before it answers.
// Runs the deployed Worker code (worker/dist) in Node against an in-memory SQLite copy of content/schema.sql,
// wrapped as a D1-like binding that waits RTT ms per round trip (a db.batch() is one round trip, as in D1).
// Nothing touches Cloudflare. Usage: node scripts/cold-start-check.mjs [rtt_ms=95] [git_ref]
//   git_ref (optional) checks that commit's worker/dist instead of the working tree, e.g. main.
import { mkdtempSync, mkdirSync, cpSync, writeFileSync, readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
const RTT = Number(process.argv[2] || 95);
const REF = process.argv[3] || "";
const dir = mkdtempSync(join(tmpdir(), "ep-cold-"));
mkdirSync(join(dir, "w"));
if (REF) execSync(`git archive ${REF} worker/dist | tar -x -C ${dir}`), cpSync(join(dir, "worker/dist"), join(dir, "w"), { recursive: true });
else cpSync("worker/dist", join(dir, "w"), { recursive: true });
writeFileSync(join(dir, "stub.mjs"), "export class DurableObject { constructor(ctx, env) { this.ctx = ctx; this.env = env; } }\n");
const entry = join(dir, "w", "index.js");
writeFileSync(entry, readFileSync(entry, "utf8").replace('from "cloudflare:workers"', 'from "../stub.mjs"'));
import { DatabaseSync } from "node:sqlite";
const sqlite = new DatabaseSync(":memory:");
const schema = readFileSync("content/schema.sql", "utf8");
for (const st of schema.split(/;\s*\n/)) { const q = st.trim(); if (!q || /VIRTUAL TABLE|^CREATE TABLE fts_/i.test(q)) continue; try { sqlite.exec(q); } catch {} }
let trips = 0, stmts = 0;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function exec(sql, args) {
  stmts++;
  const st = sqlite.prepare(sql);
  if (/^\s*(SELECT|PRAGMA|WITH)/i.test(sql)) return { results: st.all(...args), success: true, meta: {} };
  const r = st.run(...args); return { results: [], success: true, meta: { changes: r.changes, last_row_id: Number(r.lastInsertRowid) } };
}
class Stmt {
  constructor(sql, args = []) { this.sql = sql; this.args = args; }
  bind(...a) { return new Stmt(this.sql, a); }
  async all() { trips++; await sleep(RTT); return exec(this.sql, this.args); }
  async run() { return this.all(); }
  async first(col) { const r = (await this.all()).results[0] ?? null; return col && r ? r[col] : r; }
  async raw() { return (await this.all()).results.map(Object.values); }
}
const DB = { prepare: (sql) => new Stmt(sql), async batch(list) { trips++; await sleep(RTT); sqlite.exec("BEGIN"); try { const out = list.map((s) => exec(s.sql, s.args)); sqlite.exec("COMMIT"); return out; } catch (e) { sqlite.exec("ROLLBACK"); throw e; } }, async exec(q) { trips++; await sleep(RTT); sqlite.exec(q); return { count: 1 }; } };
const ASSETS = { fetch: async (req) => new Response("asset " + new URL(req.url).pathname, { status: 200 }) };
const env = { DB, ASSETS, EP_ENV: "production", EP_SECURE_COOKIES: "1", EP_SITE_URL: "https://embodiment.place", EP_SECRET: "local-cold-start-check", EP_MAIL_PROVIDER: "cf" };
const ctx = { waitUntil() {}, passThroughOnException() {} };
async function isolate(label, paths) {
  // A fresh module instance = a fresh isolate (module-level memo starts empty).
  const mod = await import(pathToFileURL(entry).href + `?iso=${label}`);
  const out = [];
  for (const p of paths) {
    const t0 = trips, s0 = stmts, c0 = performance.now();
    const res = await mod.default.fetch(new Request("https://embodiment.place" + p), env, ctx);
    await res.arrayBuffer();
    out.push({ path: p, status: res.status, ms: Math.round(performance.now() - c0), trips: trips - t0, stmts: stmts - s0 });
  }
  return out;
}
const paths = ["/", "/static/hats.png", "/healthz", "/api/healthz", "/orgs"];
const a = await isolate("1", paths);
const b = await isolate("2", paths); // second cold isolate on the same database
const conc = await (async () => { const mod = await import(pathToFileURL(entry).href + "?iso=3"); const t0 = trips, c0 = performance.now(); const rs = await Promise.all([1,2,3,4].map(() => mod.default.fetch(new Request("https://embodiment.place/"), env, ctx))); return { status: rs.map((r) => r.status), ms: Math.round(performance.now() - c0), trips: trips - t0 }; })();
const ver = sqlite.prepare("SELECT value FROM settings WHERE key='schema_version'").get();
const line = (r) => `${r.path} ${r.status} ${r.ms}ms ${r.trips} round trips`;
console.log(`Code: ${REF || "working tree"}, simulated D1 round trip ${RTT} ms`);
console.log("First new isolate:  " + a.map(line).join(" | "));
console.log("Second new isolate: " + b.map(line).join(" | "));
console.log(`4 requests at once on a new isolate: ${conc.ms}ms, ${conc.trips} round trips, status ${conc.status.join(",")}`);
console.log("schema_version saved: " + Boolean(ver));
