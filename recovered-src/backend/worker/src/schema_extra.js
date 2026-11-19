/** Extra tables used by posting, community, claims, quotes, reports and mail. Safe to call on every request. */
var TABLES = [
	`CREATE TABLE IF NOT EXISTS comments(
    id INTEGER PRIMARY KEY, record_id INTEGER NOT NULL, user_id INTEGER, body TEXT,
    status TEXT NOT NULL DEFAULT 'approved', created TEXT, decided TEXT)`,
	`CREATE TABLE IF NOT EXISTS likes(user_id INTEGER NOT NULL, record_id INTEGER NOT NULL, created TEXT, PRIMARY KEY(user_id, record_id))`,
	`CREATE TABLE IF NOT EXISTS saves(user_id INTEGER NOT NULL, record_id INTEGER NOT NULL, created TEXT, PRIMARY KEY(user_id, record_id))`,
	`CREATE TABLE IF NOT EXISTS follows(user_id INTEGER NOT NULL, company_id INTEGER NOT NULL, created TEXT, PRIMARY KEY(user_id, company_id))`,
	`CREATE TABLE IF NOT EXISTS user_follows(follower_id INTEGER NOT NULL, followee_id INTEGER NOT NULL, created TEXT, PRIMARY KEY(follower_id, followee_id))`,
	`CREATE TABLE IF NOT EXISTS watch_sources(id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, kind TEXT NOT NULL, ref TEXT NOT NULL, created TEXT)`,
	`CREATE TABLE IF NOT EXISTS reports(
    id INTEGER PRIMARY KEY, user_id INTEGER, kind TEXT, target_id INTEGER,
    reason TEXT DEFAULT '', note TEXT DEFAULT '', status TEXT NOT NULL DEFAULT 'open',
    action TEXT DEFAULT '', created TEXT, decided TEXT)`,
	`CREATE TABLE IF NOT EXISTS meet_requests(
    id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, who_kind TEXT DEFAULT 'either', who_role TEXT DEFAULT '',
    org_group TEXT DEFAULT '', org_id INTEGER, topic TEXT DEFAULT '', why TEXT DEFAULT '',
    location TEXT DEFAULT '', by_when TEXT DEFAULT '', status TEXT NOT NULL DEFAULT 'pending',
    admin_note TEXT DEFAULT '', created TEXT, decided TEXT, handled_by INTEGER, contact_email TEXT DEFAULT '')`,
	`CREATE TABLE IF NOT EXISTS claim_codes(
    id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, record_id INTEGER NOT NULL, email TEXT NOT NULL,
    code_hash TEXT NOT NULL, created TEXT NOT NULL, tries INTEGER NOT NULL DEFAULT 0, used INTEGER NOT NULL DEFAULT 0)`,
	`CREATE TABLE IF NOT EXISTS referrals(
    id INTEGER PRIMARY KEY, record_id INTEGER, user_id INTEGER, ref TEXT, payload TEXT DEFAULT '{}',
    status TEXT DEFAULT 'new', created TEXT, updated TEXT, note TEXT DEFAULT '')`,
	`CREATE TABLE IF NOT EXISTS email_log(
    id INTEGER PRIMARY KEY, to_addr TEXT NOT NULL, subject TEXT, text_body TEXT, html_body TEXT,
    provider TEXT, status TEXT, error TEXT, created TEXT)`,
	`CREATE TABLE IF NOT EXISTS owners(user_id INTEGER NOT NULL, company_id INTEGER NOT NULL, created TEXT, PRIMARY KEY(user_id, company_id))`,
	`CREATE TABLE IF NOT EXISTS room_chat(
    id INTEGER PRIMARY KEY, room TEXT NOT NULL, user_id INTEGER, name TEXT, body TEXT, created TEXT, ts REAL,
    pinned INTEGER DEFAULT 0, deleted INTEGER DEFAULT 0, rev INTEGER DEFAULT 0)`,
	`CREATE INDEX IF NOT EXISTS ix_room_chat ON room_chat(room, rev)`,
	`CREATE TABLE IF NOT EXISTS room_presence(room TEXT, cid TEXT, user_id INTEGER, seen REAL, PRIMARY KEY(room, cid))`,
	`CREATE TABLE IF NOT EXISTS chat(
    id INTEGER PRIMARY KEY, event_id INTEGER NOT NULL, user_id INTEGER, name TEXT, body TEXT, created TEXT, ts REAL,
    pinned INTEGER DEFAULT 0, deleted INTEGER DEFAULT 0, rev INTEGER DEFAULT 0)`,
	`CREATE INDEX IF NOT EXISTS ix_chat_ev ON chat(event_id, rev)`,
	`CREATE TABLE IF NOT EXISTS presence(
    event_id INTEGER, cid TEXT, user_id INTEGER, name TEXT, seen REAL, PRIMARY KEY(event_id, cid))`,
	`CREATE TABLE IF NOT EXISTS email_tokens(
    token TEXT PRIMARY KEY, user_id INTEGER NOT NULL, kind TEXT NOT NULL, email TEXT DEFAULT '',
    expires TEXT, created TEXT, used INTEGER DEFAULT 0)`
];
var COLS = [
	[
		"comments",
		"decided",
		"TEXT"
	],
	[
		"meet_requests",
		"contact_email",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"who_kind",
		"TEXT DEFAULT 'either'"
	],
	[
		"meet_requests",
		"org_id",
		"INTEGER"
	],
	[
		"meet_requests",
		"user_id",
		"INTEGER"
	],
	[
		"meet_requests",
		"who_role",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"org_group",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"topic",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"why",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"location",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"by_when",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"admin_note",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"created",
		"TEXT"
	],
	[
		"meet_requests",
		"decided",
		"TEXT"
	],
	[
		"meet_requests",
		"handled_by",
		"INTEGER"
	],
	[
		"reports",
		"user_id",
		"INTEGER"
	],
	[
		"reports",
		"kind",
		"TEXT"
	],
	[
		"reports",
		"target_id",
		"INTEGER"
	],
	[
		"reports",
		"reason",
		"TEXT DEFAULT ''"
	],
	[
		"reports",
		"note",
		"TEXT DEFAULT ''"
	],
	[
		"reports",
		"action",
		"TEXT DEFAULT ''"
	],
	[
		"reports",
		"created",
		"TEXT"
	],
	[
		"reports",
		"decided",
		"TEXT"
	]
];
var ready = null;
async function ensureExtraSchema(db) {
	ready ||= /* @__PURE__ */ new WeakSet();
	if (ready.has(db)) return;
	for (const sql of TABLES) try {
		await db.prepare(sql).run();
	} catch {}
	for (const [tbl, col, typ] of COLS) try {
		await db.prepare(`ALTER TABLE ${tbl} ADD COLUMN ${col} ${typ}`).run();
	} catch {}
	ready.add(db);
}
