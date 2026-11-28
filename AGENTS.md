# Working on embodiment.place (for any agent)

Read this first, whatever tool or assistant you are (Claude, Grok, Copilot, Cursor, a person). It explains how the
repository works and what you must keep up to date. Record the work in [CHANGELOG.md](CHANGELOG.md): add what you
changed when you change it, and add open items when you find them. Then the next agent can pick up from there, wherever
the work started.

## The rules

1. **`main` is production.** A push to `main` that touches `worker/`, `public/`, `wrangler.json` or the package files
   deploys to https://embodiment.place within about a minute (`.github/workflows/deploy.yml`). Never push to `main`
   directly. Work on a branch, open a pull request, and **ask Julian (the owner) before merging**.
2. **Update [CHANGELOG.md](CHANGELOG.md) in the same pull request.** Add a dated entry under "Changes" that names the
   PR, what changed for users, and where in the code it lives (helper names, CSS block names, API routes). Move or
   close items under "Open items" when your change affects them.
3. **No secrets in the repo.** It is public. Never commit tokens, `.env` files, user data, emails, sessions or chat.
   Cloudflare credentials live only in the GitHub Actions secrets `CLOUDFLARE_API_TOKEN` and the optional
   `CLOUDFLARE_ACCOUNT_ID`.
4. **Content lives in D1, not here.** `content/` is a nightly one-way export of public records from the live D1
   database (`.github/workflows/export-content.yml`, about 2 AM California time). Editing `content/` does not change
   the site. Users, password hashes, sessions, emails, chat and requests are never exported.
5. **Keep everything between GitHub and Cloudflare.** Julian does not want anything stored on his own computer.

## How the code is laid out

There is no original source. The repository was rebuilt from the live deployment on 2026-11-19 (see
[README.md](README.md)).

- `worker/dist/index.js`: the Worker (Hono app plus the `LiveHub` Durable Object for chat and presence) as compiled,
  readable JavaScript. Edit it directly. `recovered-src/` is a split copy for reading only; nothing builds from it.
- `public/assets/index-<hash>.js` and `index-<hash>.css`: the minified React frontend and its stylesheet. Edit them
  directly.
- `public/index.html` loads the bundle by its hashed name.
- `wrangler.json` must match the live Worker's bindings. `scripts/check-live-config.mjs` stops a deploy that would
  change them.
- New tables and columns need no migration step. `ensureExtraSchema` (the `TABLES` and `COLS` lists in
  `worker/dist/index.js`) runs `CREATE TABLE IF NOT EXISTS` and `ALTER TABLE ... ADD COLUMN` on each request's first
  use of the database. Add to those lists, and update `content/schema.sql` only if the table is public content.
- Scheduled work: `wrangler.json` has an hourly cron (minute 5). The Worker's `scheduled` export runs every job on
  each tick (`epDigestCron` for Watchlist emails, `epAutoNewsCron` for organisation news, `epSeedCron` then
  `epBannerCron` for imports and article banners). Each job decides for
  itself whether it is due, so add new jobs there instead of new cron lines.
- D1 rejects a query with more than 100 bound parameters ("too many SQL variables"), and local `wrangler dev` does
  not, so it only fails live. Pass a list of ids as one JSON parameter and read it with
  `IN (SELECT value FROM json_each(?))`, as `linksFor` and `allByIds` do. Never build `?,?,?` from a list that can grow.

### Speed: D1 round trips and the edge cache

- A D1 query costs about 100 ms from the Worker, so count round trips, not query cost. Run independent queries with
  `Promise.all` or one `db.batch`, never one after another in a loop. Check with
  `RTT=100 node scripts/route-timing.mjs` (add `REF=main` to compare) and `node scripts/cold-start-check.mjs`.
- Read settings with `setting`/`setting$1` (cached per isolate by `epSettings`), not with a fresh `SELECT` per key.
- `epEdge` caches public GET answers at the edge (`EP_EDGE_ALL` for everyone, `EP_EDGE_ANON` for visitors with no
  session). Only add a route to `EP_EDGE_ALL` if its handler never reads `c.get("auth")`; otherwise use
  `EP_EDGE_ANON`. New writes through the site invalidate it automatically; cron writes show within 60 s.
- New logos: run `python3 scripts/logos-webp.py` so the WebP copy exists in `public/logos-webp`.

### Editing the minified frontend

- Make exact string replacements (for example a Python script that asserts each search string occurs exactly once),
  then run `node --check` on the file.
- Name new helpers `ep…` (for example `epCardOpen`, `epPlaceRun`) so they are easy to find.
- Append new CSS as a block at the end of the stylesheet, starting with a comment such as `/* epCards3: ... */`.
- After editing, rename each changed file to `index-<first 8 hex of its sha256>.js` / `.css` and update
  `public/index.html`, so browsers fetch the new version.

### Scheduled jobs and email

- The Worker has an hourly cron (`triggers.crons` in `wrangler.json`) that runs the `scheduled` export. It sends
  Watchlist digests (`epDigestCron`) and checks tracked organisations for new posts (`epAutoNewsCron`; admins turn
  this on with Track on an organisation page or in Admin > Organisations; each organisation has its own schedule
  and `epAnDue` decides when it runs). Test it locally with
  `curl "localhost:8787/cdn-cgi/handler/scheduled?cron=5+*+*+*+*"` while `wrangler dev` runs; mail lands in
  `email_log`.
- Every email is wrapped in the site's Hommik look by `sendMail` (`epMailWrap`). Write only the inner HTML for new
  emails, and keep them in that style. Julian asked for all emails to match the website.
- Watchlist digests are sent from `newsletter@embodiment.place` (`EP_DIGEST_FROM`); everything else from
  `EP_MAIL_FROM` (no-reply@). Pass `from` to `sendMail` to use another sender; it falls back to the default if refused.

### Database tables and columns

- Admin > Database (`/admin/database`, `epAdminDb`, routes `/api/admin/db*`) shows every table to admins and exports
  .xlsx. When you add a table, give it a group and a one-line description in `EP_DB_INFO`, and if it holds a secret
  (password hash, token, 2FA secret) add that column to `EP_DB_SECRET` so it is never shown or exported.
- Tables and columns that the code adds itself live in `AUTH_DDL`, `TABLES`, `COLS`, `EP_USER_COLS` and
  `EP_MAIL_DDL` in `worker/dist/index.js`. Add new ones there, not as ad-hoc `CREATE`/`ALTER` calls in a handler.
  `epEnsureSchema` runs them once per schema version (a hash of those lists, saved as `settings.schema_version`).
  A new isolate costs one D1 read, not one per statement. Check with `node scripts/cold-start-check.mjs` (and
  `node scripts/cold-start-check.mjs 95 main` to compare with `main`).
- `wrangler dev` with the pinned wrangler needs `--compatibility-date 2026-11-10` locally (its workerd is older
  than `wrangler.json`'s date). Don't change the date in `wrangler.json`: the deploy check compares it with the live Worker.

### Running it locally

```
npm ci
npx wrangler dev --local --port 8787 --var EP_ENV:development
```

`EP_ENV=development` writes outgoing emails to the `email_log` table instead of sending them. A local D1 can be
seeded with fake users. A session cookie `hi_sid` set to a row in `sessions` logs you in. POST requests need an
`Origin` header that matches the host (CSRF check). Playwright with Chromium is a good way to check pages at
phone and desktop sizes before opening a PR.

## Owner's standing decisions

These are the decisions Julian has made so far. Don't undo them without asking.

- Animations (walking characters, the news ticker) run even when the device asks for reduced motion.
- Walking uses the original `wk-leg` leg cycle in every direction. Don't add a stepping-foot animation.
- Community "Place" shows every member's character to everyone, visitors included. Members can hide theirs
  (Account, Overview, "Show my character in Place").
- Community shows "x members · x total visitors" under Place (Julian removed the separate visit bar), and one
  anonymous character (random look, no name, very faded) per logged-out visitor of the last 24 hours, at most 30. A visit
  is one browser per UTC day, counted on `GET /api/me` (`epVisitCount`; bot user agents skipped). The `visits` table
  holds only sha256(daily random salt + IP + user agent); the salt is the `visit_salt` setting, replaced daily, and
  rows older than 8 days are deleted. Never store IPs or user agents for this, and never export it.
- Logged-out visitors can Walk, always offline: starting a walk switches them to Offline for that walk
  (`epAnonWalk` in the walker code), nothing is sent to `/api/walk`, and the Say box is hidden for them. Stopping the
  walk puts them back Online (viewing only) unless they chose Offline themselves.
- The card (name, position, company, info, social links) follows the member's "Who sees your card" setting
  (`prefs.profile_vis`: me, members or everyone; members is the default).
- Changing your email needs a code sent to the new address.
- On phones, walking uses a floating joystick: press on walkable ground (not the menu, links, buttons, characters or
  dock) and it appears under your finger (smaller, see-through); drag to walk. The button at the bottom right, above
  the Lounge, is the phone's E key (use what you stand on). While
  walking, the "Say something" box sits in the same row as the Online, Walk and Lounge buttons (CSS `epDockRow`), and
  the Say button only shows while writing.
- The dock's Online / Offline switch (it replaced the eye) is site-wide. Online takes one of a limited number of seats
  (D1 setting `online_max`, default 100) and connects the live socket. When it's full, people wait in line and join
  automatically. Offline still lets you walk, but sends nothing and shows nobody else. Online is the default.
- People from an organisation don't manage its page. Only the admin and contributors do. Belonging is a badge
  (verified work email via "I work here", table `owners`) shown on the character, the card and the
  organisation's People section. Members can still report mistakes, and their reports come first.
- Organisations has three views, **Grid / List / Map** (`/orgs`, `/orgs?view=list`, `/orgs?view=map`; switch `epViewSw`,
  list `epOrgList`, map component `Fr`). On the map, nearby pins merge into small numbered bubbles up to zoom 15
  (`Or`); past that they fan out. The map's switch has no filled background on the chosen view (underline only) and
  hovering a choice turns it the accent colour. There is no Map tab any more; `/map` and `/orgs/map` redirect there (`epMapRedir`). Organisations (`/orgs`) is one page listing every organisation, with no per-type subtabs. Types
  (`ORG_GROUPS` / bundle `Hn`) are single-select filter tags, kept in the URL as `?tag=makers`; old `/orgs/<type>` links
  redirect to that tag. The page loads everything from `/api/orgs?group=all` and pages 24 at a time.
- Robots, hardware, models and software share one top-menu tab, **Catalogue** (`/catalogue`, frontend
  `epCatalogue`/`epCatCard`, Worker `GET /api/catalogue` via `epCatalogue`). There are no separate Robots, Hardware,
  Models or Software tabs, and no "All" tag: it opens on Robots. Types are Robots, Components, Hardware, Models and
  Software, a header switch styled like Organisations' Grid/Map tabs, kept in the URL (`?tag=robots|components|hardware|models|software`).
  Components holds hands and grippers, teleoperation, tool changers and other components (`tab: "components"` in
  `HW_CATEGORIES`, added by `epHwExtra`); robots include an Automotive kind (robotaxis, autonomous trucks, driver
  systems). Julian asked for Automotive explicitly (2026-11-27) after earlier declining more types,
  and within a type items are grouped into one section per kind (humanoids, arms, quadrupeds...), never one mixed grid.
  Kind tags isolate one kind (`&kind=humanoid`). Catalogue, preview and Compare reuse the shared classes (`.epotag`,
  `.ep-wbtn`, `.chip`, `.btn`, `.listhead`/`.oblurb`); don't give them their own button or font styles.
- **Academia** (`/academia`, was Study at `/study`, which redirects; frontend `epStudy`, Worker `GET /api/academia`
  via `epAcademia`, `/api/study` kept as an alias, CSS blocks `epStudy` and `epAcademia`) is a top-menu tab next to
  Catalogue for students choosing where to do a bachelor's, master's or PhD (Julian, 2026-11-28). It has two views
  (`?view=labs`): **Universities** and **Research labs**.
  - Universities are organisations with the role University. Julian moved them out of Organisations: `orgsPayload`
    leaves them out of `/orgs` (grid and map), and their page's breadcrumb and badge say Academia / University. Ranked
    universities come first, then the rest alphabetically without a score. The ranking inputs are two fields on each
    university: `rank_csr` (CSRankings robotics: ICRA + IROS + RSS adjusted paper count 2016-2026, plus `faculty`) and
    `rank_qs_mech` (QS by Subject 2025, Mechanical, Aeronautical & Manufacturing). Research is scaled to the top
    university (100) and QS rank r to 101 - r (0 outside the top 100), then averaged with equal weight (`EP_STUDY_W` = 50/50; Julian dropped the bachelor's/master's/PhD switch on 2026-11-28, so the page has just two lists, Universities and Research labs; country `?country=`). The method and sources are explained
    on the page; keep them in step with any change to the weights or sources.
  - A research lab is its own record type, `lab` ("Research lab"), never a catalogue product (Julian, 2026-11-28). It is
    linked to its university by `parent` (shown as University). Fields: `lead_text` (Head), `head_oa` (the head's
    OpenAlex author id, for admins to correct a wrong match), `focus` (Research areas, tags), `website`, `founded`,
    `members`, plus the usual organisation fields. Its page is `epLab` in the bundle (facts, About, Papers, University,
    other labs at the same university); the Worker adds `lab` to `GET /api/r/:slug` (`epLabExtra`). University pages
    list their labs (`epUniLabs`). Labs are not in Organisations (`orgsPayload` only reads type `company`).
  - Papers come from OpenAlex (open data, no key), never typed in: `epLabPapersCron` (its own cron at minute 35, 8 labs
    a run, each lab again after 30 days, failures retried after a day; each run's summary is in settings key
    `lab_papers_run`, and admins can run it with `POST /api/admin/lab-papers/run`). Requests send `mailto` = the site contact address and the secret `OPENALEX_API_KEY` when set finds the head among OpenAlex authors whose institution matches
    the university (`epOaInstMatch`, aliases in `EP_OA_ALIASES`), or uses `head_oa`, and stores the author plus the 8
    most recent and 8 most cited articles in table `lab_papers`. A lab without a head gets no papers.
- List pages (Organisations, Catalogue, Events, Community) share one header: title, intro line (`.oblurb`), then the
  page switch (`.epchd .epvsw`), then search and one row of tags. On every list page (Organisations Grid/List/Map, Catalogue, Events, Community) the switch
  is a row of underline tabs (CSS `epPageTabs`; Catalogue's wrapper carries `.epchd-org` so it follows Organisations,
  plus `epCatTabs` for its counts). Julian chose this; don't bring back big full-width switches. Keep new list pages to this. Old `/t/<category>`, `/t/model`, `/t/benchmark` and
  `/t/software[/<kind>]` links redirect there (in `Rr`). Events stays its own tab.
- Content pages sit in a centred column (max 1200px, CSS `epSideRoom` on `main.wrap`) with room on the sides. Home
  (`.home2`, feed plus sidebar) and the full-screen map keep the full width. Julian asked for this; don't stretch new
  pages edge to edge.
- Compare only ever compares one kind (humanoids with humanoids, cameras with cameras, models with models), each
  with its own spec fields from `VIEWS`. Items are picked with the Compare button on Catalogue cards.
- Members can follow organisations (companies, universities, labs) and topics, not people, robots or models.
- The Watchlist tabs (Watchlist, Sources, Newsletter) stay hidden until the member follows at least one organisation; until then every Watchlist URL shows "Start your watchlist".
- Feeds (home and Watchlist) are newest first with date separators (Today, Yesterday, This week, This month,
  Last month, Older).
- Admin tools live under "Admin" in the top menu, next to Account (also in the phone menu). Every admin page
  uses one layout like Account: the "Admin" heading, then tabs (Overview first, then one per tool), via `epAdw`.
  There is no admin bar at the top and no admin button in the bottom-right dock. Add new admin tools to
  `adminBarLinks` in the Worker and wrap their route in `epAdw` so they get the tabs.
- The database is the source of truth for the site (Julian, 2026-11-28): every page reads its facts from the records'
  fields, and changes are made by changing the database, not the code. Admin > Spreadsheet (`/admin/sheet`,
  `epAdminSheet`, routes `/api/admin/sheet*`) shows every organisation, university and research lab with every field
  as an editable sheet, plus Excel export. Columns come from `TYPES` and the data itself, so a new field shows up
  there without extra work; keep new organisation fields in `TYPES` so they get a proper label and check.
- Admins edit organisations' main facts and tracking from Admin > Organisations (`/admin/orgs`), without opening
  the full editor. Keep important organisation fields editable there when adding new ones. Rows can be selected
  (with Select all) to change tracking for many at once.
- Tracking (never "auto updates") only looks at news since the last run, on a schedule set per organisation (how
  often and time of day), with "Track now" and "Since founding" on demand. An agent (Claude with web search,
  `epAnAgent`, secret `ANTHROPIC_API_KEY`) picks news worth reposting and it is published straight away as News,
  with no review queue.
- Article banners come from the source page: the publisher's own share image (og:image, then twitter:image), shown
  from their server and credited to the article, never copied. Pages that opt out of image previews and generic
  logos get none. A post without an image shows **no banner at all** (no patterned placeholder). New posts get theirs
  right away from tracking or within the hour from `epBannerCron`; keep any new way of adding articles covered by it.
- Site-wide switches live in Admin > Site settings (`/admin/site`), stored in the D1 `settings` table and sent to
  the page through `/api/me`. The Latest banner mode (`ticker_mode`: scroll, static, off) is the first one.
  The Latest banner only shows on the front page (`/`).
  Subtab height (`tab_height`: s, m, l) is also set there. Don't add a second row of tabs under a tab row: use
  Community-style pills (`.cpills.ep-sub2`) for a further choice.

## Where things are tracked

- [CHANGELOG.md](CHANGELOG.md): every change, newest first, plus open items and known issues.
- `docs/`: screenshots and notes from past work.
- GitHub pull requests: discussion and review history for each change.
