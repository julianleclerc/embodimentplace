// Route timing: D1 round trips and simulated time per API route, with the real public content (content/) loaded into
// an in-memory SQLite. Nothing touches Cloudflare. Usage: RTT=100 node scripts/route-timing.mjs   (REF=main to time main,
// PATHS=/api/home,/api/orgs to pick routes, LOG=1 to print each query). caches.default does not exist in Node, so this
// times the uncached path (epEdge is skipped).
import { mkdtempSync, mkdirSync, cpSync, writeFileSync, readFileSync, readdirSync } from "node:fs";
import { execSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { DatabaseSync } from "node:sqlite";
const RTT = Number(process.env.RTT || 0);
const REF = process.env.REF || "";
const repo = process.env.REPO || process.cwd();
const dir = mkdtempSync(join(tmpdir(), "ep-prof-"));
mkdirSync(join(dir, "w"));
if (REF) execSync(`git -C ${repo} archive ${REF} worker/dist | tar -x -C ${dir}`), cpSync(join(dir, "worker/dist"), join(dir, "w"), { recursive: true });
else cpSync(join(repo,"worker/dist"), join(dir, "w"), { recursive: true });
writeFileSync(join(dir, "stub.mjs"), "export class DurableObject { constructor(ctx, env) { this.ctx = ctx; this.env = env; } }\n");
const entry = join(dir, "w", "index.js");
writeFileSync(entry, readFileSync(entry, "utf8").replace('from "cloudflare:workers"', 'from "../stub.mjs"'));
const sqlite = new DatabaseSync(":memory:");
for (const st of readFileSync(join(repo,"content/schema.sql"), "utf8").split(/;\s*\n/)) { const q = st.trim(); if (!q || /^CREATE TABLE fts_/i.test(q)) continue; try { sqlite.exec(q); } catch(e) {} }
const ins = sqlite.prepare("INSERT INTO records(id,type,slug,name,summary,body,data,notes,private,watch,demo,created,updated,author_id,feed_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
for (const t of readdirSync(join(repo,"content/records"))) for (const f of readdirSync(join(repo,"content/records",t))) { const r = JSON.parse(readFileSync(join(repo,"content/records",t,f),"utf8")); ins.run(r.id,r.type,r.slug,r.name,r.summary||"",r.body||"",JSON.stringify(r.data||{}),"",0,r.watch||0,0,r.created||"",r.updated||"",null,r.feed_at||r.created||""); }
const li = sqlite.prepare("INSERT INTO links(id,src,rel,dst,note,pos,source) VALUES(?,?,?,?,?,?,?)");
for (const l of JSON.parse(readFileSync(join(repo,"content/links.json"),"utf8"))) li.run(l.id,l.src,l.rel,l.dst,l.note||"",l.pos||0,l.source||"");
let trips = 0, stmts = 0, log=[];
const sleep = (ms) => ms ? new Promise((r) => setTimeout(r, ms)) : Promise.resolve();
function exec(sql, args) { stmts++; if(process.env.LOG) log.push(sql.replace(/\s+/g," ").slice(0,110));
  const st = sqlite.prepare(sql);
  if (/^\s*(SELECT|PRAGMA|WITH)/i.test(sql)) return { results: st.all(...args), success: true, meta: {} };
  const r = st.run(...args); return { results: [], success: true, meta: { changes: r.changes, last_row_id: Number(r.lastInsertRowid) } }; }
class Stmt { constructor(sql, args = []) { this.sql = sql; this.args = args; }
  bind(...a) { return new Stmt(this.sql, a); }
  async all() { trips++; await sleep(RTT); try { return exec(this.sql, this.args); } catch(e){ throw new Error("D1_ERROR: "+e.message); } }
  async run() { return this.all(); }
  async first(col) { const r = (await this.all()).results[0] ?? null; return col && r ? r[col] : r; }
  async raw() { return (await this.all()).results.map(Object.values); } }
const DB = { prepare: (sql) => new Stmt(sql), async batch(list) { trips++; await sleep(RTT); return list.map((s) => { try { return exec(s.sql, s.args);} catch(e){ throw new Error("D1_ERROR: "+e.message);} }); }, async exec(q) { trips++; await sleep(RTT); sqlite.exec(q); return { count: 1 }; },
  withSession(){ return DB; } };
const ASSETS = { fetch: async (req) => new Response("asset", { status: 200 }) };
const stub = { fetch: async () => new Response("{}") }; const LIVE = { idFromName: () => ({}), get: () => stub, getByName: () => stub };
const env = { DB, ASSETS, LIVE, EP_ENV: "production", EP_SECURE_COOKIES: "1", EP_SITE_URL: "https://embodiment.place", EP_SECRET: "x", EP_MAIL_PROVIDER: "cf" };
const waits=[]; const ctx = { waitUntil(p) { waits.push(p); }, passThroughOnException() {} };
const mod = await import(pathToFileURL(entry).href);
const paths = (process.env.PATHS || "/api/me,/api/ticker,/api/home,/api/orgs?group=all,/api/orgs?map=1,/api/r/neura-robotics,/api/r/icra-2027,/api/catalogue,/api/list/event,/api/community/place,/api/online,/api/room/poll?room=lounge&since=0&cid=abc,/api/page/about").split(",");
await mod.default.fetch(new Request("https://embodiment.place/api/me"), env, ctx); // warm schema
for (const rep of [1,2]) for (const p of paths) {
  const t0 = trips, s0 = stmts, c0 = performance.now(); log=[];
  const res = await mod.default.fetch(new Request("https://embodiment.place" + p), env, ctx);
  const body = await res.arrayBuffer(); if (process.env.DUMP && rep===2) (await import("node:fs")).writeFileSync(process.env.DUMP+encodeURIComponent(p), Buffer.from(body));
  if (rep===2) console.log(`${p.padEnd(48)} ${res.status} ${String(Math.round(performance.now() - c0)).padStart(5)}ms trips=${trips - t0} stmts=${stmts - s0} ${Math.round(body.byteLength/1024)}kB`);
  if (process.env.LOG && rep===2) console.log("   "+log.join("\n   "));
}
await Promise.allSettled(waits);
process.exit(0);
