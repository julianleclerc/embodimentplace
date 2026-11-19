// Safety check run before every deploy.
//
// `wrangler deploy` replaces the live Worker's bindings and settings with what wrangler.json says. If
// wrangler.json is missing a binding the live Worker has (a database, bucket, email sender...) or has a
// different compatibility date, a deploy could quietly break the site. This script reads the live
// Worker's settings from the Cloudflare API, compares them with wrangler.json, and stops the deploy
// (exit code 1) on any difference, printing what the live values are so wrangler.json can be fixed.
//
// Secrets (EP_SECRET, OAuth keys, mail keys...) are never read: the API only returns their names, and
// `wrangler deploy` leaves them in place. Plain-text vars are kept too ("keep_vars": true).
//
// Needs CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID.

import { readFileSync } from "node:fs";
import { accountId } from "./cf-account.mjs";

const cfg = JSON.parse(readFileSync("wrangler.json", "utf8"));
const token = process.env.CLOUDFLARE_API_TOKEN;
if (!token) {
  console.error("CLOUDFLARE_API_TOKEN must be set.");
  process.exit(1);
}
const account = await accountId(token);
process.env.CLOUDFLARE_ACCOUNT_ID ||= account;

async function api(path) {
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${account}/workers/scripts/${cfg.name}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.success === false) throw new Error(`GET ${path} failed (${res.status}): ${JSON.stringify(body.errors)}`);
  return body.result;
}

const live = await api("/settings");
const problems = [];
const notes = [];

// Compatibility date and flags.
if (live.compatibility_date && live.compatibility_date !== cfg.compatibility_date)
  problems.push(`compatibility_date: live is "${live.compatibility_date}", wrangler.json has "${cfg.compatibility_date}"`);
const liveFlags = [...(live.compatibility_flags || [])].sort();
const cfgFlags = [...(cfg.compatibility_flags || [])].sort();
if (JSON.stringify(liveFlags) !== JSON.stringify(cfgFlags))
  problems.push(`compatibility_flags: live is ${JSON.stringify(liveFlags)}, wrangler.json has ${JSON.stringify(cfgFlags)}`);

// Bindings wrangler.json declares, keyed by binding name.
const want = new Map();
for (const d of cfg.d1_databases || []) want.set(d.binding, { type: "d1", id: d.database_id });
for (const d of cfg.durable_objects?.bindings || []) want.set(d.name, { type: "durable_object_namespace", class_name: d.class_name });
for (const r of cfg.r2_buckets || []) want.set(r.binding, { type: "r2_bucket", bucket_name: r.bucket_name });
for (const e of cfg.send_email || []) want.set(e.name, { type: "send_email", destination_address: e.destination_address, allowed_destination_addresses: e.allowed_destination_addresses });
for (const k of cfg.kv_namespaces || []) want.set(k.binding, { type: "kv_namespace", namespace_id: k.id });
if (cfg.assets?.binding) want.set(cfg.assets.binding, { type: "assets" });
for (const [name, text] of Object.entries(cfg.vars || {})) want.set(name, { type: "plain_text", text });

const skip = new Set(["secret_text", "secret_key", "version_metadata"]);
const liveNames = new Set();
for (const b of live.bindings || []) {
  liveNames.add(b.name);
  if (skip.has(b.type)) continue;
  const w = want.get(b.name);
  if (b.type === "plain_text" && cfg.keep_vars) {
    if (!w) notes.push(`var ${b.name} is set on the live Worker only; kept as is because keep_vars is on`);
    else if (w.text !== b.text) problems.push(`var ${b.name}: live is ${JSON.stringify(b.text)}, wrangler.json has ${JSON.stringify(w.text)}`);
    continue;
  }
  if (!w) { problems.push(`binding ${b.name} (${b.type}) exists live but not in wrangler.json; a deploy would remove it. Live: ${JSON.stringify(b)}`); continue; }
  if (w.type !== b.type) { problems.push(`binding ${b.name}: live type is ${b.type}, wrangler.json has ${w.type}`); continue; }
  for (const [k, v] of Object.entries(w)) {
    if (k === "type" || v === undefined) continue;
    const lv = b[k];
    if (JSON.stringify(lv) !== JSON.stringify(v)) problems.push(`binding ${b.name}: ${k} is ${JSON.stringify(lv)} live, ${JSON.stringify(v)} in wrangler.json`);
  }
  for (const k of ["destination_address", "allowed_destination_addresses"]) {
    if (b.type === "send_email" && b[k] !== undefined && w[k] === undefined) problems.push(`binding ${b.name}: live has ${k}=${JSON.stringify(b[k])}, wrangler.json has none`);
  }
}
for (const [name, w] of want) {
  if (!liveNames.has(name)) problems.push(`binding ${name} (${w.type}) is in wrangler.json but not on the live Worker`);
}

// Other settings that a deploy would change.
if (live.observability && cfg.observability && live.observability.enabled !== cfg.observability.enabled)
  problems.push(`observability.enabled: live is ${live.observability.enabled}, wrangler.json has ${cfg.observability.enabled}`);
if (live.placement?.mode && live.placement.mode !== cfg.placement?.mode)
  problems.push(`placement: live is ${JSON.stringify(live.placement)}, wrangler.json has ${JSON.stringify(cfg.placement)}`);
if ((live.tail_consumers || []).length) problems.push(`tail_consumers are set live: ${JSON.stringify(live.tail_consumers)}`);
if (live.logpush && !cfg.logpush) problems.push(`logpush is on live but not in wrangler.json`);

// workers.dev URL and preview URLs: wrangler turns workers.dev on by default when wrangler.json has no routes.
const sub = await api("/subdomain").catch(() => null);
if (sub) {
  const wantDev = cfg.workers_dev ?? !(cfg.routes || cfg.route);
  if (sub.enabled !== wantDev) problems.push(`workers_dev: live is ${sub.enabled}, a deploy would set ${wantDev} (set "workers_dev": ${sub.enabled} in wrangler.json)`);
  if (sub.previews_enabled !== undefined && cfg.preview_urls !== undefined && sub.previews_enabled !== cfg.preview_urls)
    problems.push(`preview_urls: live is ${sub.previews_enabled}, wrangler.json has ${cfg.preview_urls}`);
  if (sub.previews_enabled !== undefined && cfg.preview_urls === undefined)
    problems.push(`preview_urls is ${sub.previews_enabled} live; set "preview_urls": ${sub.previews_enabled} in wrangler.json`);
} else {
  problems.push("could not read the Worker's workers.dev settings; check the token has Workers Scripts access");
}

for (const n of notes) console.log(`note: ${n}`);
if (problems.length) {
  console.error("\nwrangler.json does not match the live Worker, so the deploy was stopped:\n");
  for (const p of problems) console.error(`  - ${p}`);
  console.error("\nLive settings (secret values are never shown):\n" + JSON.stringify(live, null, 2));
  process.exit(1);
}
console.log("wrangler.json matches the live Worker's bindings and settings.");
