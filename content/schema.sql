CREATE TABLE auto_news(
    record_id INTEGER PRIMARY KEY, enabled INTEGER NOT NULL DEFAULT 0, feed TEXT DEFAULT '',
    updated TEXT, updated_by INTEGER, last_run TEXT, last_note TEXT DEFAULT '', seen TEXT DEFAULT '[]', every_h INTEGER DEFAULT 24, at_hour INTEGER DEFAULT 6, tz TEXT DEFAULT '', since_at TEXT);

CREATE TABLE blocks(user_id INTEGER NOT NULL, blocked_id INTEGER NOT NULL, created TEXT, PRIMARY KEY(user_id, blocked_id));

CREATE TABLE chat(
        id INTEGER PRIMARY KEY, event_id INTEGER NOT NULL REFERENCES records(id) ON DELETE CASCADE,
        user_id INTEGER, name TEXT, body TEXT, created TEXT, ts REAL,
        pinned INTEGER DEFAULT 0, deleted INTEGER DEFAULT 0, rev INTEGER DEFAULT 0);

CREATE TABLE claim_codes(
    id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, record_id INTEGER NOT NULL, email TEXT NOT NULL,
    code_hash TEXT NOT NULL, created TEXT NOT NULL, tries INTEGER NOT NULL DEFAULT 0, used INTEGER NOT NULL DEFAULT 0);

CREATE TABLE comments(id INTEGER PRIMARY KEY, record_id INTEGER NOT NULL REFERENCES records(id) ON DELETE CASCADE,
        user_id INTEGER, body TEXT, status TEXT DEFAULT 'pending', created TEXT, decided TEXT);

CREATE TABLE connections(id INTEGER PRIMARY KEY, from_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, to_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, note TEXT DEFAULT '', status TEXT NOT NULL DEFAULT 'pending', created TEXT, decided TEXT);

CREATE TABLE email_log(
    id INTEGER PRIMARY KEY, to_addr TEXT NOT NULL, subject TEXT, text_body TEXT, html_body TEXT,
    provider TEXT, status TEXT, error TEXT, created TEXT);

CREATE TABLE email_tokens(token TEXT PRIMARY KEY, user_id INTEGER NOT NULL, kind TEXT NOT NULL, email TEXT DEFAULT '', expires TEXT NOT NULL, used INTEGER DEFAULT 0, created TEXT);

CREATE TABLE follows(user_id INTEGER NOT NULL, company_id INTEGER NOT NULL REFERENCES records(id) ON DELETE CASCADE,
        created TEXT, PRIMARY KEY(user_id, company_id));

CREATE VIRTUAL TABLE fts USING fts5(name, type, summary, body, extra, tokenize='unicode61 remove_diacritics 2');

CREATE TABLE intros(id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, target_kind TEXT NOT NULL, target_id INTEGER NOT NULL, note TEXT DEFAULT '', status TEXT NOT NULL DEFAULT 'pending', admin_note TEXT DEFAULT '', created TEXT, decided TEXT);

CREATE TABLE lab_papers(record_id INTEGER PRIMARY KEY, author_id TEXT DEFAULT '', n INTEGER DEFAULT 0, data TEXT DEFAULT '{}', checked TEXT);

CREATE TABLE likes(user_id INTEGER NOT NULL, record_id INTEGER NOT NULL REFERENCES records(id) ON DELETE CASCADE,
        created TEXT, PRIMARY KEY(user_id, record_id));

CREATE TABLE links(
        id INTEGER PRIMARY KEY,
        src INTEGER NOT NULL REFERENCES records(id) ON DELETE CASCADE,
        rel TEXT NOT NULL,
        dst INTEGER NOT NULL REFERENCES records(id) ON DELETE CASCADE,
        note TEXT DEFAULT '', pos INTEGER DEFAULT 0, source TEXT DEFAULT '');

CREATE TABLE meet_requests(id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, who_kind TEXT DEFAULT 'either', who_role TEXT DEFAULT '', org_group TEXT DEFAULT '', org_id INTEGER, topic TEXT DEFAULT '', why TEXT DEFAULT '', location TEXT DEFAULT '', by_when TEXT DEFAULT '', status TEXT NOT NULL DEFAULT 'pending', admin_note TEXT DEFAULT '', created TEXT, decided TEXT, handled_by INTEGER, contact_email TEXT DEFAULT '');

CREATE TABLE owners(user_id INTEGER NOT NULL, company_id INTEGER NOT NULL REFERENCES records(id) ON DELETE CASCADE,
        created TEXT, email TEXT DEFAULT '', PRIMARY KEY(user_id, company_id));

CREATE TABLE post_banner(record_id INTEGER PRIMARY KEY, checked TEXT, image TEXT DEFAULT '', note TEXT DEFAULT '');

CREATE TABLE presence(
    event_id INTEGER, cid TEXT, user_id INTEGER, name TEXT, seen REAL, PRIMARY KEY(event_id, cid));

CREATE TABLE records(
        id INTEGER PRIMARY KEY, type TEXT NOT NULL, slug TEXT UNIQUE NOT NULL, name TEXT NOT NULL,
        summary TEXT DEFAULT '', body TEXT DEFAULT '', data TEXT DEFAULT '{}', notes TEXT DEFAULT '',
        private INTEGER DEFAULT 0, watch INTEGER DEFAULT 0, demo INTEGER DEFAULT 0,
        created TEXT, updated TEXT, author_id INTEGER, feed_at TEXT);

CREATE TABLE referrals(
        id INTEGER PRIMARY KEY, ref_no TEXT UNIQUE, record_id INTEGER REFERENCES records(id) ON DELETE SET NULL,
        company_id INTEGER REFERENCES records(id) ON DELETE SET NULL, user_id INTEGER, requester TEXT DEFAULT '{}',
        status TEXT DEFAULT 'new', reward_usd REAL, note TEXT DEFAULT '', created TEXT, updated TEXT);

CREATE TABLE reports(id INTEGER PRIMARY KEY, user_id INTEGER, kind TEXT NOT NULL, target_id INTEGER NOT NULL, reason TEXT, note TEXT DEFAULT '', status TEXT NOT NULL DEFAULT 'open', created TEXT, handled_by INTEGER, decided TEXT, action TEXT DEFAULT '', priority INTEGER DEFAULT 0);

CREATE TABLE revisions(id INTEGER PRIMARY KEY, record_id INTEGER, snapshot TEXT, at TEXT);

CREATE TABLE room_chat(
        id INTEGER PRIMARY KEY, room TEXT NOT NULL, user_id INTEGER, name TEXT, body TEXT, created TEXT, ts REAL,
        pinned INTEGER DEFAULT 0, deleted INTEGER DEFAULT 0, rev INTEGER DEFAULT 0);

CREATE TABLE room_presence(room TEXT, cid TEXT, user_id INTEGER, seen REAL, PRIMARY KEY(room, cid));

CREATE TABLE saves(user_id INTEGER NOT NULL, record_id INTEGER NOT NULL REFERENCES records(id) ON DELETE CASCADE,
        created TEXT, PRIMARY KEY(user_id, record_id));

CREATE TABLE sessions(token TEXT PRIMARY KEY, created TEXT, user_id INTEGER, last_seen TEXT, ip TEXT DEFAULT '', ua TEXT DEFAULT '', hashed INTEGER DEFAULT 0);

CREATE TABLE settings(key TEXT PRIMARY KEY, value TEXT);

CREATE TABLE submissions(
        id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, kind TEXT NOT NULL, target_id INTEGER, payload TEXT,
        status TEXT NOT NULL DEFAULT 'pending', note TEXT DEFAULT '', created TEXT, decided TEXT, decided_by INTEGER,
        result_id INTEGER);

CREATE TABLE user_follows(follower_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, followee_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, created TEXT, PRIMARY KEY(follower_id, followee_id));

CREATE TABLE users(
        id INTEGER PRIMARY KEY, username TEXT UNIQUE NOT NULL COLLATE NOCASE, name TEXT NOT NULL,
        pw TEXT NOT NULL, role TEXT NOT NULL DEFAULT 'user', disabled INTEGER DEFAULT 0, created TEXT, profile TEXT DEFAULT '{}', pinned_id INTEGER, prefs TEXT DEFAULT '{}', totp TEXT DEFAULT '', totp_step INTEGER DEFAULT 0, recovery TEXT DEFAULT '[]', suspended_until TEXT DEFAULT '', suspend_reason TEXT DEFAULT '');

CREATE TABLE visits(day TEXT NOT NULL, h TEXT NOT NULL, ts INTEGER NOT NULL, m INTEGER NOT NULL DEFAULT 0, PRIMARY KEY(day, h));

CREATE TABLE watch_sources(id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, kind TEXT NOT NULL, ref TEXT NOT NULL, created TEXT, UNIQUE(user_id, kind, ref));

CREATE INDEX ix_chat_ev ON chat(event_id, rev);

CREATE INDEX ix_comments_record ON comments(record_id, status);

CREATE INDEX ix_conn_from ON connections(from_id, status);

CREATE INDEX ix_conn_to ON connections(to_id, status);

CREATE INDEX ix_likes_record ON likes(record_id);

CREATE INDEX ix_links_dst ON links(dst);

CREATE INDEX ix_links_src ON links(src);

CREATE INDEX ix_meet_status ON meet_requests(status);

CREATE INDEX ix_records_author_feed ON records(author_id, type, feed_at, id);

CREATE INDEX ix_records_feed ON records(type, private, feed_at, id);

CREATE INDEX ix_records_type ON records(type);

CREATE INDEX ix_reports_status ON reports(status);

CREATE INDEX ix_room_chat ON room_chat(room, rev);

CREATE INDEX ix_saves_user ON saves(user_id, created);

CREATE INDEX ix_sub_status ON submissions(status);
