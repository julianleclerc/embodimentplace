# Changelog and open items

Shared log for everyone working on embodiment.place, people and agents alike. See [AGENTS.md](AGENTS.md) for the
rules. Add an entry in the same pull request as the change, newest first. Each entry gives the PR, what changed for
users, and where it lives in the code.

## Open items and known issues

Pick these up from here. When you start one, say so in your PR. When you finish one, move it to "Changes".

- **Tracking agent needs its API key.** Tracking now uses a web-searching agent (Claude with web search). It runs
  only when the Worker has the secret `ANTHROPIC_API_KEY` (Cloudflare dashboard, Workers > embodiment-place >
  Settings > Variables and Secrets). Until then tracking falls back to RSS/Atom feeds, which most robotics companies
  don't have, and Admin > Organisations says "Web agent off". The agent was tested against a mock API only; check
  the first real results live and tune the prompt in `epAnAgent` if it picks the wrong stories.
- **Image uploads don't work.** The Worker supports an R2 `MEDIA` binding, but the live Worker has none, so uploads
  are off. An R2 bucket needs to be created and bound in `wrangler.json`. The deploy safety check will flag this as a
  binding change, which is expected.
- **Leftover Cloudflare resources.** A Worker named `embodimentplace` (a hello-world, not the live site, which is
  `embodiment-place`) and a D1 database `eha-db` (an unrelated project). Delete them only if Julian confirms.
- **Legal pages have placeholders.** The privacy policy and terms (`PRIVACY_MD`, `TERMS_MD` in
  `worker/dist/index.js`) still contain `[operator legal name]`, `[postal address]`, `[email provider]`, `[country]`,
  `[backup retention period]`, `[governing law ...]` and a DMCA agent note.
- **Not yet checked on a real iPhone:** the steady news ticker (#13) and the dark-theme walker outline while walking
  diagonally (#8, #12). Both were tested in Playwright's iPhone emulation only.
- **Digest email not yet seen in a real inbox.** The scheduled digest (Watchlist PR) was tested locally with the
  email log only. Check one arrives and looks right in Apple Mail and Gmail. Members who saved a schedule before
  that PR have no time zone saved, so their digest goes by UTC until they save delivery again.
- **No frontend source.** The React bundle is minified and edited by hand. Any large frontend change would need a
  rewrite.

## Changes

### 2026-11-27

- **Room on the sides of content pages (PR "Side margins").** Every page except Home and About (which already had
  their own layout) now sits in a centred column at most 1200px wide, with side room that grows with the screen
  (`clamp(12px, 5vw - 20px, 48px)`). Phones keep the 12px edge they had. The full-screen map (`.epfull`) is fixed
  so it still fills the screen. CSS block `epSideRoom` at the end of the stylesheet (`main.wrap:not(:has(>.home2))`).
- **Catalogue: Components type, Automotive robots, and Organisations-style tabs.** Julian asked for (1) the Catalogue
  type switch to look like the Organisations Grid/Map switch, (2) a Components type with hands and grippers,
  teleoperation equipment and others, and (3) an Automotive robot type.
  - Switch: Catalogue's type switch is now the same underline tabs as Organisations (wrapper `.epchd.epchd-org.epchd-cat`,
    styled by `epPageTabs`; new CSS block `epCatTabs` adds the counts, hidden on phones so all five tabs fit).
  - Components: new type between Robots and Hardware (`EP_CAT_TAGS`, `/catalogue?tag=components`). Kinds: Hands and
    grippers and Teleoperation (moved from Robots), plus new Tool changers (`tool_changer`) and Other components
    (`other_component`). `epHwExtra` in `worker/dist/assets/catalog-*.js` (and the same inline helper on the bundle's
    `Bn` list) sets `tab: "components"` and adds the kinds; `/api/meta` lists them under `hardware.components`.
  - Automotive: new robot kind `automotive` (robotaxis, autonomous trucks, driver systems) with three fields, Kind
    (`av_kind`), Autonomy level (`sae_level`) and Operating in (`cities`). Views for the new kinds come from the Misc
    view (`epViewsExtra` after `VIEWS` in the Worker, same inline helper in the bundle's record page `Zr`); the fields
    are also editable (`TYPES.product.fields`).
  - Seed `seed-catalogue-components-2026-11.js` (`EP_SEED_CATALOGUE_COMPONENTS_2026_11`, run by `epSeedCron`): 24
    entries for existing organisations: 9 hands and grippers (Robotiq 2F-85 and Hand-E, OnRobot RG2, Shadow Dexterous
    Hand, Inspire RH56DFX, PSYONIC Ability Hand, Allegro Hand V4, Tesollo DG-5F, SharpaWave), 2 teleoperation (Trossen
    WidowX ALOHA Set, Sunday Skill Capture Glove), 2 ATI tool changers and 11 automotive (Waymo Driver, Zoox, Tesla
    Cybercab, Pony.ai Gen-7, WeRide GXR, Wayve AI Driver, Aurora Driver, Kodiak Driver, Nuro Driver, Motional IONIQ 5,
    Mobileye Drive). Each field carries its source. Makers missing from the directory (Manus, HaptX, SenseGlove,
    Baidu Apollo) were left out.
  - Bundle index-87cc5d2d.js / index-0d87e475.css. Screenshots in the project files (`catalogue-components/`).

- **Organisation directory, fifth pass (same PR as the third and fourth): 61 more organisations from launch posts on X
  and Hacker News.** Julian asked for a sweep of launch and funding posts before merging. New seed
  `seed-org-directory-5-2026-11.js` (`EP_SEED_ORG_DIRECTORY_5_2026_11`, run after the fourth-pass seed by
  `epSeedCron` in `worker/dist/index.js`).
  - X (mid-2025 to today): searches for out-of-stealth, "we raised", seed and Series A, robot foundation model and
    world model launches, and YC batch launches; plus the accounts of Y Combinator, The Humanoid Hub, Lukas Ziegler's
    robotics roundups and Stealth Startup Spy (181 out-of-stealth posts). About 180 named robotics candidates: 74
    were already live or in this PR (for example Genesis AI, Generalist, Walden, Embo, Lute, Simplexity, Proception,
    Xynova, Humble, Tutor Intelligence), 53 were added and 53 left out.
  - Hacker News (Algolia API, 2024 to today): every Launch HN post plus Show HN posts and stories about robots,
    humanoids, physical and embodied AI, robot learning, teleoperation and robot data. 35 organisations: 15 already
    listed (Bucket, Azalea, Innate, Vassar, Nori, Hebbian, Salem, Fauna, Corvus, Weave and others), 8 added, 12 left
    out.
  - Added, for example: PHYMI (Shanghai, ~$100M seed), TensorWorld (Beijing, physics-native world models), Enigma
    (San Francisco, $71M seed), Watney Robotics (data-centre robots), Noitom Robotics (teleoperation and robot data),
    Dayan Technology (tactile gloves, Hangzhou), Closer (Tsukuba), Motion1 (Brussels), Vanar Robots (Mumbai),
    HavocAI, Neros, Splash Industries, Earendil Robotics, Grizzly, Crewline, Gatsby, OctaPulse, Voltair, Sowbot,
    Transitive Robotics, Versor, Saturn Dynamics and Build AI.
  - Left out: AI-agent, security and energy start-ups that only use the word "autonomous"; founders still in stealth
    with no company site; sites for sale, expired or "coming soon"; pivots away from robotics (Twolabs, Apprentice
    Labs, Sureform); shut-down companies (Basis Robotics, K-Scale Labs site down); solo or research projects (Calibra,
    YOR, Poppy); a crypto-token data project (AXIS Robotics); counter-drone services; and candidates whose HQ city
    could not be sourced (Verapulse, OpenCastor, Nua, The Parkour Company, Mayfly, Praana Labs, Hawthorne).
    Nines was already live.
  - Roles: 27 robot makers, 34 software developers, 9 model labs, 8 integrators, 7 suppliers, 2 research labs and 1
    customer across all roles; 26 have more than one role. HQ: 9 street addresses and 52 city-only. Logos: 56 of 61
    (PHYMI, Dayan Technology, Vanar Robots, Parallax Worlds and The Robotics Company fall back to initials).
  - Tested locally against a copy of live D1: the seed inserts 61 organisations (1,838 organisations after seeds 3 to
    5) and a second run changes nothing. Projected total after merge: 1,838.

### 2026-11-26

- **Organisation directory, fourth pass (same PR as the third): 593 more organisations, with Robotics Connected as the
  main source.** Julian said Lute, AMI in Paris "and others" were still missing, and that roboticsconnected.com has a
  better database. This pass reads the whole Robotics Connected company directory (921 hand-checked listings, through
  its sitemap; robots.txt allows it and nothing was blocked) and adds recent launches from funding news and the
  humano.one humanoid directory. New seed `seed-org-directory-4-2026-11.js` (`EP_SEED_ORG_DIRECTORY_4_2026_11`, run
  after the third-pass seed by `epSeedCron` in `worker/dist/index.js`).
  - Robotics Connected: 921 listings. 335 were already live or in the third pass (matched by website domain, every
    domain in the listing's sameAs links, name and slug; 2 more turned out to be acquired by or the same as listed
    ones), 2 are duplicate listings, 17 were left out (regional subsidiaries such as FANUC Europe, FANUC France and
    KUKA Robotics Korea; companies absorbed into a parent such as RIVR into Amazon, Five AI into Bosch, EpiSci into
    Applied Intuition; ArcBest, a carrier; and dead websites), and 567 were added.
  - Recent launches and gaps (13 from news, 13 from humano.one): Lute (Warsaw, tactile foundation models, $20M seed
    on 25 Nov 2026), Emulate (London, DeepMind Genie spinout), Embo (San Francisco, $110M seed), Mosaic Intelligence
    Labs, Qvyon (Montreal), Ubitium (Düsseldorf), YK-Robotics (Pontedera), Sunrise Robotics (Ljubljana), Six Robotics
    (Oslo), Kodama, Rendezvous Robotics, Tangent Robotics, CosmoChute (Ahmedabad), Boardwalk Robotics, Faraday Future,
    Lightwheel, Moonlake AI, PrismaX, Dataa Robotics, NineRay, Alibaba DAMO Academy, Sanhua, Keli Sensing, Zhaowei,
    Prophesee and Nexdata. UMA, Wandercraft, Humanoid, Genesis AI and Enact were already live; AMI Labs is in the
    third pass at 10 Rue de Penthièvre, 75008 Paris (checked again against company-register summaries).
  - Roles (primary): 444 robot makers, 92 software developers, 32 suppliers, 14 integrators, 8 model labs, 2 research
    labs and 1 compute company. 191 have more than one role (159 two, 30 three, 2 four). Roles come from the
    listing's main category plus its other categories only where the description backs them up (for example a
    components tag adds supplier only when the text names grippers, actuators, sensors and so on).
  - Existing organisations: `orgRoles` adds one role each to 9 (Advanced Navigation, Boost Robotics, Enact and
    Festo +robot maker, KNAPP +robot maker, D-Robotics and Daxo +supplier, Mecka and Mech-Mind +software developer),
    picked by hand from the Robotics Connected profiles.
  - HQ: LinkedIn's street address when its country matches the listing (308), otherwise the city and country from
    the Robotics Connected profile or a cited news source, marked city-only (285). Geocoded with Nominatim.
  - Logos: 589 of 593, mostly the logo on the Robotics Connected profile (background made transparent, then
    resized to 128 px); the other 4 fall back to initials.
  - Tested against a local copy of the live D1 (658 organisations): the third and fourth seeds insert 526 and 593
    organisations (1,777 in all) and 46 and 9 roles, and a second cron run changes nothing.
  - Draft for review (not in the repo): `org-directory-4-draft.csv` / `.json`.

### 2026-11-25

- **Organisation directory, third pass: 526 more organisations, and secondary roles on 41 existing ones.** Julian said
  many organisations were still missing, and that one organisation can hold several roles (for example software
  developer and integrator). This pass sweeps the full Y Combinator directory by keyword, a 208-company Chinese
  embodied-AI directory (zeeklog), robodienst's supply-chain list, an EU robotics companies list, Hugging Face robotics
  organisations (LeRobot and dataset publishers), robotics VC portfolios (Pillar, F-Prime, Bee, Promus, Calibrate,
  Cybernetix, Root, DCVC, Lux, SOSV and others), Japanese, Korean, Israeli and Indian companies, and universities and
  labs. It adds 189 robot makers, 65 suppliers, 61 software developers, 37 investors, 22 model labs, 14 compute
  companies, 4 integrators, 118 universities, 15 research labs and 1 media organisation (primary role). 64 of them
  have two roles and 1 has three. Everything was deduplicated against the 658 live organisations by slug, name and
  website domain.
  - Quality: each organisation needs robotics, physical-AI or embodied-AI evidence from its own site, LinkedIn page or
    the source list; investors need robotics on their own site or portfolio page; universities and labs need a
    robotics page or at least 30 robotics, humanoid or embodied-AI papers since 2025 in OpenAlex. About 140 candidates
    were left out (generic chip, car and electronics groups with no robotics evidence, investors without a robotics
    focus, dead or redirected domains, acquired or wound-down companies, and sites that could not be verified).
  - Roles: roles were already multi-valued (`roles`, kind `multi`), with the first one as the primary role (shown in
    the breadcrumb) and all of them shown as chips and used by the type filters, so no schema or UI change was
    needed. New organisations get every role their sources support.
  - Existing organisations: a new `orgRoles` seed op (`epSeedRun` in `worker/dist/index.js`) appends missing roles
    after the existing ones and never removes or reorders any, so the primary role stays first. Each added role keeps
    its source in `roles.more`. Changed records get a revision first and their search rows are rebuilt. This pass adds
    46 roles to 41 organisations (15 model lab, 10 software developer, 10 integrator, 7 supplier, 1 each compute, robot
    maker, entertainment and research lab), from each organisation's own pages (for example KUKA and Comau +integrator,
    NEURA, Sereact and OSARO +model lab, NVIDIA +software developer for Isaac, Hugging Face +model lab and robot maker).
  - HQ: in `data.locations` (kind `HQ`) plus `city` and `country`, each with its source (LinkedIn, the organisation's
    site, a filing or registry, Wikidata, the YC page or the source list). 244 have a street address; 282 have only a
    city (most Chinese and YC startups, and universities, which use Wikidata campus coordinates).
  - Logos: 476 new 128×128 transparent PNGs in `public/logos/<slug>.png`; 50 have no usable logo and fall back to
    initials.
  - Content: `worker/dist/assets/seed-org-directory-3-2026-11.js` (`EP_SEED_ORG_DIRECTORY_3_2026_11`), added to
    `EP_SEEDS`. It runs once from the hourly cron after deploy (marker `settings.seed_org-directory-3-2026-11`, which now
    also records `org_roles`). Tested locally against a copy of the live data: 526 inserted, 46 roles added, 0 existing
    roles removed or reordered, and a second run changes nothing.

- **Organisation directory, second pass: 343 more organisations, each with an HQ on the map.** Julian pointed out
  that many humanoid and embodied-AI companies were still missing (Abstract, Dimensional, General Robotics and REK
  among them). This pass sweeps humanoid.guide's manufacturer list, humanoid.observer's company list, robodienst's
  humanoid supply-chain list, the Y Combinator robotics, hardware and drones tags from 2022 to 2026, and investor,
  university and lab lists. It adds 179 robot makers, 55 suppliers (hands, actuators, reducers, tactile and depth
  sensors), 38 software developers (data, teleoperation, robot OS and fleet tools), 22 investors, 17 model labs,
  12 universities, 9 research labs, 5 compute companies, 4 integrators, 1 entertainment company (REK) and 1 media
  organisation. Everything was deduplicated against the 315 live organisations by slug, name and website domain.
  Companies that have shut down (K-Scale Labs, Cartwheel Robotics) or were absorbed into one already listed
  (Kind Humanoid into 1X, Aldebaran into Maxtronics) are left out.
  - HQ: in `data.locations` (kind `HQ`) plus `city` and `country`, each with its source: the organisation's own site,
    a registry or filing, LinkedIn, PitchBook, Crunchbase-style profiles, Wikidata, the YC company page, or
    humanoid.observer / robodienst. 104 have a street address. 239 have only a city and country, because that is all a
    source gives (most YC and Chinese startups); coordinates for those are the city centre (OpenStreetMap Nominatim).
  - Logos: 333 new 128×128 transparent PNGs in `public/logos/<slug>.png` from each site's icon or logo. 10 have no
    usable logo and fall back to initials.
  - Content: `worker/dist/assets/seed-org-directory-2-2026-11.js` (`EP_SEED_ORG_DIRECTORY_2_2026_11`), added to
    `EP_SEEDS`. It uses the same `newOrgs` mechanism as #77 (insert only when no record has the slug and no
    organisation has the name), so nothing existing is touched. It runs once from the hourly cron after deploy (marker
    `settings.seed_org-directory-2-2026-11`). Tested locally on a copy of the live data: 343 organisations added,
    658 organisations and 659 map points afterwards, and a second run with the marker removed changed nothing.

- **Organisation directory: 140 more organisations, each with its HQ address on the map.** Julian asked for a
  thorough list of the organisations working on humanoids, physical AI and embodied AI, with their HQ address. This
  adds 140 organisations: robot makers (humanoid, legged, mobile manipulation and service robots), robot
  foundation-model labs, simulation and data tools, suppliers (actuators, reducers, hands, grippers, tactile and depth
  sensors), compute, universities, research labs and investors. They were deduplicated against the 175 already on the
  site, including renamed and acquired names (for example Kinisi is listed as now part of Bear Robotics, and
  Aldebaran's NAO business is listed as Maxtronics). Each gets a one-line summary, a short body where there was
  something solid to say, its website, a logo, its roles and an HQ entry. It also fills the HQ for the 23 existing
  organisations that had no location (Embodiment Place itself is left without one).
  - Address: the HQ goes in the existing `data.locations` field (kind `HQ`, address, lat/lon, src), the same field
    the edit form, the org page's Locations panel and "Based" line, and the map already use. No new column: the
    schema already has a proper home for it. Street addresses are used where the organisation or a registry
    publishes one, otherwise city and country. Coordinates come from OpenStreetMap Nominatim (street level where the
    address resolved, otherwise the district or city). `city` and `country` are set too.
  - Logos: 140 new 128×128 transparent PNGs in `public/logos/<slug>.png`, from each organisation's site icon or
    logo, or its Wikimedia Commons logo.
  - Content: `worker/dist/assets/seed-org-directory-2026-11.js` (`EP_SEED_ORG_DIRECTORY_2026_11`), added to
    `EP_SEEDS`. It runs once from the hourly cron after this deploys (marker `settings.seed_org-directory-2026-11`).
  - Code: `epSeedRun` accepts two new lists. `newOrgs` (`{ slug, name, summary, body, data }`) inserts an organisation
    only when no record has that slug and no organisation has that name, in chunks of 25 passed as JSON
    (`json_each`), with its `fts` row. `orgData` (`{ slug, data }`) fills only empty fields on existing organisations,
    with a revision first and an `fts` rebuild, like the overview fills. Tested locally on a copy of the live data:
    the first run added 140 organisations and 69 fields (23 × city, country, locations), and a second run with the
    marker removed changed nothing.
  - Display: Community > Organisations showed "Based" as the full HQ address plus the country, so the country came
    out twice ("New York, NY, United States, United States"). `communityOrgsPayload` now uses the `city` field first
    and doesn't repeat the country.
  - New organisations are not switched on for tracking (Admin > Organisations); turn on the ones worth following.

- **Underline tabs on Organisations, Events and Community.** Julian didn't like the big full-width switches there
  (Community was better before). Grid/Map, Upcoming/Past and the Community sections are now a row of text tabs on a
  thin rule, with a 2px ink line under the selected one. Catalogue keeps its big type switch, and the full-screen
  map's own Grid/Map switch is unchanged.
  - Code: CSS block `epPageTabs` appended to `public/assets/index-*.css` (scoped to `.epchd-org .epvsw` and
    `.epchd nav.epvsw`, so Catalogue's `div` switch is untouched). No JS change.

- **Overviews for the 150 organisations that had none.** Julian asked for an overview on every company. 25 of 175
  had one; this fills the other 150 (companies, labs, universities and investors) with a one-line summary, shown on
  cards and at the top of each page, plus a short body of one or two sentences. Each was written from the
  organisation's own site and reliable sources such as Wikipedia, company press releases and trade press; the
  sources sit next to each entry as `src` in the seed file but are not stored in D1. Facts that change often
  (funding, headcounts, fleet sizes) were left out.
  - Content: `worker/dist/assets/seed-org-overviews-2026-11.js` (`EP_SEED_ORG_OVERVIEWS_2026_11`), added to
    `EP_SEEDS`. It runs once from the hourly cron after this deploys (marker `settings.seed_org-overviews-2026-11`).
  - Code: `epSeedRun` in `worker/dist/index.js` accepts a new `orgs` list of `{ slug, summary, body }`. It writes
    only a summary or body that is still empty, so existing overviews and anything edited in Admin before the
    seed runs are kept. Changed records get a revision first (same snapshot as an edit), and their `fts` search
    rows are rebuilt. Ids are passed as one JSON parameter (`json_each`), so it stays under D1's bound-parameter
    limit. All writes go in one `db.batch()` (about 153 statements).
  - Tested with `wrangler dev --local` against a copy of the live `records` table: 150 overviews written, 0 empty
    summaries left, 14 summary-only records unchanged, 150 revisions, search finds the new text, and a second
    cron tick does nothing.

- **Pages no longer take ~5.5 s to load about half the time.** Every new Worker isolate used to run about 57 D1
  statements one after another before answering its first request (5 auth `CREATE TABLE`s, a `PRAGMA`, 21 more
  `CREATE TABLE`s and 30 `ALTER TABLE ... ADD COLUMN`s, most failing as duplicates). `loadAuth` runs for every
  request, so static files waited too. Measured on the live site on 2026-11-24 (60 timed requests, 8 paths):
  26 of 60 (43%) took 5.0 to 7.6 s (mean 5.8 s); the rest had a median of 0.075 s. Now:
  - The checks run once per schema version (`epEnsureSchema` / `epSchemaRun`, comment block `epSchema` in
    `worker/dist/index.js`). A new isolate makes one `SELECT` of `settings.schema_version`. When it matches
    `EP_SCHEMA_VERSION`, nothing else runs. That version is a hash of `AUTH_DDL`, `TABLES`, `COLS`,
    `EP_USER_COLS` and `EP_MAIL_DDL`, so adding a table or column to those lists re-runs the checks by itself.
  - When the checks do run: all `CREATE ... IF NOT EXISTS` go in one `db.batch()`, the columns are read with one
    batch of `PRAGMA table_info`, and only missing columns are added. The version is saved only when every table
    exists and every `ALTER` worked.
  - Requests that arrive together on a new isolate share one promise (before, each one ran all 57).
  - `ensureAuthSchema`, `ensureExtraSchema` and `ensureMailSchema` all call `epEnsureSchema` now.
  - Built files (`/assets/`, `/logos/`, `/static/`, favicon, robots.txt) skip `loadAuth` entirely (`epStaticPath`).
  - The new `scripts/cold-start-check.mjs` runs the Worker in Node against SQLite with a simulated 95 ms D1 round
    trip. On `main` a new isolate's first request makes 57 round trips (about 5.5 s). On this branch it makes 4
    the first time ever (about 0.4 s) and 1 after that (about 0.1 s). Four requests at once on a new isolate went
    from 228 round trips to 1. Static files make 0. `wrangler dev` (local D1) returns the same responses as `main`
    for `/`, `/login`, `/api/orgs`, `/api/home` and `/admin`.

### 2026-11-24

- **Organisations, Events and Community match Catalogue.** Julian liked the new Catalogue and asked for the other
  pages to follow it. All three now use the same header: title, intro line (`.oblurb`), then a full-width,
  shadow-free switch (`.epchd .epvsw`). Organisations: the Grid/Map switch moved from above the title to under the
  intro (grid view only; the full-screen map and its switch are unchanged). Events: the Upcoming/Past tabs moved from
  the very top into that switch, the count next to the title is gone, a new intro line, and the list uses the full
  page width instead of a centred column. Community: Place / Tell us what you need (and the admin tabs) are the
  switch, the intro uses the shared style, and the page is no longer indented in a narrower column. CSS block
  `epPageHeads`.

- **Catalogue intro line above the type switch.** Julian asked for the intro ("Every robot, part, AI model...") to sit
  above the Robots / Hardware / Models / Software switch. The switch now has its own wrapper (`div.epchd`) after the
  intro. CSS block `epCatSwitch3`.

- **Catalogue type switch full width everywhere, no shadow.** On desktop the switch beside the title was easy to miss
  (Julian only noticed Robots). It now runs full width under the title on every screen, with four equal, taller
  segments, and has no shadow. CSS block `epCatSwitch2`.

- **Catalogue type is a switch, kinds are the only tag row.** Julian found the two stacked tag rows (type, then kind)
  odd. Robots / Hardware / Models / Software is now a switch in the header (`.epvsw.epcsw`, the same style as the
  Organisations Grid/Map switch): beside the title on desktop, full width under it on a phone. The kind tags are the
  only tag row and lost their "Kind" label. CSS block `epCatSwitch`.

- **Catalogue matches the rest of the site.** Julian found Catalogue's fonts and buttons inconsistent. Catalogue,
  its preview and Compare now reuse the shared styles: the same title size and intro line as Organisations
  (`.listhead`, `.oblurb`), the same toolbar order (search, type tags, then count and Sort), kinds as the same
  square `.epotag` buttons with a "Kind" label (no more rounded pills in Arial), cards with the `.ocard` hairline
  border and `.oc-name` name size, the card Compare button styled like Follow (`.ep-wbtn`, "+ Compare"), the kind
  label as a `.chip`, and the preview and compare bar actions as `.btn`. The "Only these" link on section headings is
  gone (the heading itself still isolates the kind). Catalogue stays highlighted in the menu on `/compare`. The Compare bar now sits in the dock row, level with the
  Lounge button and left of it (same bottom and height, measured from `.cdock` into `--epdock*`), so it no longer
  covers the middle of the page; on a phone it shrinks to kind, count, Compare and ×. CSS blocks `epCatTidy`,
  `epCmpDock`; the old `.epchead`/`.epctools` grid and the pill styles were removed.

- **Catalogue grouped by kind.** Julian didn't like humanoids, arms and quadrupeds mixed in one grid (same for the
  other types). Within a type, Catalogue now shows one section per kind with a heading and count (biggest kind first,
  "Other" last; order set in `epCatalogue` in the Worker). Kind chips under the toolbar (`.epckind`) replace the Kind
  menu: tap one to show only that kind (`&kind=`), tap it again to go back to all sections. Section headings also
  isolate their kind. The kind label on the picture is hidden where the section already says it. The Sort menu lost
  its "Kind" option, and on a phone it now sits beside the count. A type with one kind (Models today) shows a plain
  grid. First page is 60 items. CSS block `epCatKinds`.

- **Picture-first Catalogue cards.** Julian couldn't see the robots in the small thumbnails. Cards (`epCatCard`, class
  `.epct` in `.epcgrid`) now lead with a big 4:3 picture, the kind label on the picture and Compare on its top right,
  then name, maker and status, summary (desktop only) and key specs. Two columns on a phone, as many 230px columns as
  fit on desktop. The header is tighter: no intro line, smaller title, and on desktop the search box shares a row
  with the count, Kind and Sort. `/api/catalogue` sends `md` pictures. CSS block `epCatGrid`.

- **Catalogue: no "All" tag, and a preview for every item.** Julian found "All" pointless (robots, models and
  software mixed). Catalogue now opens on Robots; the type tags are single-select with one always on (`?tag=`
  defaults to robots), and search/kind/count apply within that type. Tapping a card (picture, name, summary or specs)
  opens a preview (`epCatPreview`, URL `?item=<slug>` so the phone's Back closes it): large picture, kind and status,
  maker, summary, every listed spec grouped by section (from `/api/compare?ids=<id>`), and Compare / Open full page
  buttons. Bottom sheet on phones, centred panel on desktop; Esc or tapping outside closes it. Frontend
  `epCatalogue`, `epCatCard` (now takes `open`), `epCatPreview`; CSS block `epCatPreview`.

- **Robot specs filled from makers' pages.** New seed `worker/dist/assets/seed-robot-specs-2026-11.js`
  (`EP_SEED_ROBOT_SPECS_2026_11`): 124 values for 27 robots (height, weight, payload, DoF, speed, runtime, reach,
  repeatability, step height, slope, IP rating, price...), each with its source page in `src` and `asof` 2026-11.
  `epSeedRun` gained a `specs` list: it fills only fields that are still empty and never overwrites. Values were
  left out when a page was ambiguous (conflicting speeds, per-variant figures, reseller prices with tariffs).
  Pages that gave no usable specs: AgiBot A2, Agility Digit, Ameca, Dobot Atom, Sanctuary Phoenix, XPeng Iron,
  Diligent Moxi, Robotera XHand, ABB GoFa (script-only page), Deep Robotics X30 (blocked), Xiaomi CyberDog 2
  (stored source link points to a laptop page), Figure 03, Tesla Optimus (no source).

- **Compare works one kind at a time, from Catalogue.** Each Catalogue card has a Compare button (`epCmpBtn`); a
  bar above the dock (`epCmpBar`) collects up to 4 items on a phone, 6 on desktop, saved in localStorage `ep-cmp`.
  The first item sets the kind (Humanoids, Arms, Models...); cards of other kinds are dimmed and explain why. The
  compare page (`epCompare`, replaces `si`) groups rows by section (General, Dimensions, Performance, Power...),
  highlights the best number, has a "Differences only" switch (localStorage `ep-cmp-diff`), keeps item names and row
  labels pinned while the table scrolls on a phone, and links back to the matching Catalogue filter. Worker
  `comparePayload` now drops items of another kind (returns `dropped`, shown as a note), adds `group` to rows,
  `plural` and `back`, skips Type/For sale rows, and only marks a best value when at least two items have one.
  `/api/catalogue` items carry `ck`/`ckl` (comparison kind). CSS block `epCompare`.

- **Catalogue replaces the Robots, Hardware, Models and Software tabs.** Julian found four product tabs too many.
  The top menu now has one **Catalogue** tab (`/catalogue`): a search box, one row of single-select type tags
  (Robots, Hardware, Models, Software, with counts; swipes sideways on a phone), a count line with Clear, a Kind menu
  once a type is picked (Humanoids, Arms, Quadrupeds...; `?kind=`) and Sort (Name, Maker, Type, Recently updated).
  Compact cards: picture, name, maker, status, kind label, two-line summary and up to three key specs. Old
  `/t/humanoid`, `/t/actuator`, `/t/model`, `/t/benchmark`, `/t/software/...` links redirect to the matching tag and
  kind. Frontend `epCatalogue`, `epCatCard` (nav list `zn`, redirect in `Rr`); CSS block `epCatalogue` (reuses the
  `epOrgTags2` toolbar). Worker: `GET /api/catalogue` (`epCatalogue`, `EP_CAT_TAGS`). The per-type grid/table views
  and the Compare checkboxes are no longer reachable from the menu; `/compare` itself still works.

- **Map controls laid out like a map app, styled exactly like the dock.** Top row: search/filters on the left (phone:
  the Filters button) and the Grid/Map switch on the right. Bottom row: List on the left, on the same line as the
  dock; zoom stacked just above the dock on the right. The switch, List and zoom copy the dock's computed styles
  (`.wk-btn` and `.cw-launch`): no transitions, paper + 1px ink, an instant 4px accent shadow on hover, and dark fill
  with an accent shadow when on (List open looks like Lounge). The List count is plain dimmed text like "3 here".
  The list window now opens at the top left (`epListInit` placement). The OSM credit sits above List on phone. CSS block `epOrgMap6`.

- **Map search on the top right, dock-style map buttons.** On desktop (wider than 760px) the "Find an organisation"
  bar sits at the top right of the map, just left of the Grid/Map switch, and is layered above pop-up cards (z-index
  40). The switch, List and zoom buttons now use the dock button look (Lounge, Walk, Online): 1px ink border, paper
  fill, mono caps, accent shadow on hover, inverted when on; 36px tall on desktop and 44px on phone with 8px gaps.
  Phone keeps the bottom-left Filters button. CSS block `epOrgMap5`.

- **Map polish: aligned buttons, richer pop-ups, better list.** In Map view the List and zoom buttons line up under
  the Grid/Map switch (same right edge and total width, 40px tall, same shadow). The switch no longer covers the header
  menu (`.epvbar` z-index 5, under `header.top` 20). Pop-up cards (`epPopHtml`, date helper `epPopDate`) now show
  type chips, a stats row (Founded, Raised, Stage, Products, Followers), the robots/products the org makes (links,
  "+N more"), the latest news story with its date, and "N sites"; orgs without a logo get a coloured initial. The
  Worker's map points carry this as `x.pr`, `x.np`, `x.nw`, `x.ns` (one extra `links` query in `orgsPayload`, ids
  passed via `json_each`). The map list (`epListInit`) has a filter box, shows each org's main type and "N sites
  here", bigger logos and a compact open-page button, and opens below the map buttons. CSS block `epOrgMap4`.

- **Grid/Map switch on the top right.** Same spot in both views, now at the right gutter; in Map view the map's
  List and zoom buttons sit 52px lower, under the switch. CSS block `epOrgMap3`.

- **Grid/Map switch stays in one place.** The switch is now the first row of the page (`.epvbar`), 12px under the
  header at the left gutter, and in Map view it floats over the map at exactly the same spot, so it never moves when
  you switch. Restyled with grid and pin icons and a hard shadow (`epViewSw`, CSS block `epOrgMap2`).

- **Grid/Map switch on Organisations; the Map tab is folded in.** The Grid/Table switch is replaced by a Grid/Map
  switch (`epViewSw`). Map view (`/orgs?view=map`) fills the screen under the header with no page scroll
  (`html.ep-orgmap`, fixed `.epfull`, `--ep-maptop` set from the header in `Ar`), with the switch floating top left to
  go back. A type picked in Grid carries into the map's type filter (`Fr` reads `tag` as well as `g`; its "All
  groups" menu is now "All types"). The top-menu **Map** tab is removed; `/map` and `/orgs/map` redirect to
  `/orgs?view=map` keeping `org`/`site` (`epMapRedir`), and "On the map" links on org pages go there directly.
  The Table view is gone. CSS block `epOrgMap`.

- **Cleaner Organisations page, phone first.** Julian found the first version (PR #56) awkward. The search box now
  comes first; the type tags are a single row (one line that swipes sideways on a phone, wraps on desktop) and pick
  one type at a time (tap again or All to clear); a line under them shows the count, a Clear link, and compact
  Country and Sort menus. On a phone the intro text and Grid/Table switch are hidden so the list starts on the first
  screen. Cards put the logo on the left with the name and Follow beside it, and summaries clamp to two lines.
  Card chips are plain labels again (tapping them filtered instead of opening the card). Frontend `Mr`; CSS block
  `epOrgTags2` replaces `epOrgTags`.

- **Organisations on one page, with type tags.** The per-type subtabs (Robot makers, Model labs, Universities...) are
  gone. `/orgs` lists every organisation once, with a row of type tags (with counts) to filter by; pick several to
  combine them (any match). Tapping a type chip on a card filters by it too. Also added a name search and a "Type"
  sort; Country, the other sorts, Grid/Table and Load more (24 at a time) stay. Tags live in the URL (`?tag=ai,research`),
  and old `/orgs/<type>` links redirect there. Frontend: `Ar`, `Mr`, `epOrgKey`, `Nr` (`onTag`); CSS block
  `epOrgTags`. Worker: `orgsPayload` accepts `group=all` and returns every organisation in every group.

### 2026-11-23

- **Posts stay tappable while walking on a phone.** The floating joystick no longer opens on post cards (`article`,
  `[data-href]`, `.bcard`, `.card`, `.postcard`, comments, the compose box) or on anything with a pointer cursor, so
  tapping a post opens it and the feed scrolls from it again (`epJoyWalkable`).

- **Phone E button, and the joystick only on walkable ground.** The bottom-right button (above the Lounge) is now the
  phone's E key: it uses the link or button your character stands on (it sends the same `keydown` "e" the walker
  listens for). It lights up (inverted, accent shadow) when there is something to use, and is dimmed otherwise. The
  use-the-page mode is gone. The floating joystick now opens only on walkable ground (`epJoyWalkable`), not on the
  menu, links, buttons, form fields, characters, the dock, the chat box or the map, so those stay tappable and the
  page still scrolls from them; a `touchstart` handler (`epJoyTouch`, non-passive) stops scrolling only for joystick
  presses. CSS block `epJoyE`.

- **Floating joystick on phones.** While walking on a phone, pressing anywhere on the page shows a smaller (96px),
  see-through joystick under your finger, and dragging from there walks; letting go hides it. Taps in this mode don't
  open links or cards. The button at the bottom right, above the Lounge, switches to "use the page" (tap links and
  characters, scroll) and back; it shows a pointer while walking and is inverted while using the page. The fixed
  joystick places, the Move / Look buttons and the "Joystick on phones" Account card are gone, and so are the
  `joy` / `joyxy` / `joya` fields and the `joy` account action (old values left in prefs are ignored). Frontend
  `epJoyFloat`, `epJoyEnd`, `epJoyClick` (classes `.chatw.joy-on`, `.chatw.joy-look`); CSS block `epJoyFloat`.

- **Joystick on the right again, sitting higher; Move and Look fixed bottom right.** The phone joystick's default
  place is Right again (`prefs.joy` absent = right; `"centre"` is now stored), and the Left / Centre / Right places
  sit higher, near the middle of the lower half of the screen (`--pb: max(110px, 45svh - 120px)`). Move and Look no
  longer ride on the joystick: they are fixed at the bottom right just above the Lounge button, the size of the dock
  buttons. Recent lines sit low on the left, beside them. The whistle no longer jumps above the joystick (only the
  dock, Move/Look and recent lines lift it). CSS blocks `epJoyCtlDock`, `epJoyHigh`.

- **Joystick quick buttons: move it anywhere, change its look.** While walking on a phone, two small buttons sit on
  top of the joystick. Move: tap it, drag the joystick anywhere on the screen ("DRAG ME", dashed outline), tap again to
  lock. Look: one tap cycles Solid, See-through (default) and Faint. Both save to the account straight away
  (`prefs.joy = "free"` with `prefs.joyxy = [x, y]` as 0 to 1 fractions, `prefs.joya` = `solid` / `faint`, absent =
  see-through; `POST /api/account` action `joy` takes `joy`, `joyx`, `joyy`, `joya`; `/api/me` sends `joy`, `joyxy`,
  `joya`). Account > Overview's "Joystick on phones" card has Place (Left / Centre / Right snaps it back) and Look.
  Frontend `epJoyTap`, `epJoyDrag`, `epJoySave`; CSS block `epJoyCtl` (`--pl` / `--pb` place the joystick and buttons).

- **Phone joystick in the centre by default, and see-through.** The "Joystick on phones" card is now Left / Centre /
  Right, with Centre the default (`prefs.joy` is `"left"`, `"right"` or absent for centre; `/api/me` sends `centre`).
  In the centre, recent lines sit above the joystick. The joystick is partly see-through and firms up while held.
  CSS blocks `epJoyCentre`, `epJoyGlass`.
- **The Say button only shows while you write.** While walking, the chat box shows just "Say something" until you tap
  or click into it (or it holds text); then the Say button appears. Phone and desktop. CSS block `epSayIdle`.

- **Joystick side setting, and the walking chat box sits in the dock row.**
  - Account > Overview has a new "Joystick on phones" card (Left / Right, default Right, component `epJoyEdit`).
    It saves `prefs.joy` (`"left"`, or absent for right) via `POST /api/account` action `joy`, and is sent in
    `/api/me` and the account payload as `joy`. The page sets `.chatw[data-joy]`, so a change applies straight away.
  - While walking, the "Say something" box is on the same row as Online, Walk and Lounge (phone and desktop). On
    desktop the key hints and recent lines stack above it in the same box. On phones the joystick sits above the row
    on the chosen side and the recent lines sit beside it on the other side. Typing on a phone still lifts the box
    above the keyboard. CSS block `epDockRow`.
  - The Place whistle now also lifts above the joystick and the recent-lines strip on phones (`whDock`).

- **Article banners use the source site's image, or no banner at all.**
  - When an article that links to another site is added (tracking, seed imports or the compose form), the Worker reads
    the linked page and uses the publisher's own share image (`og:image:secure_url`, `og:image`, `twitter:image`, then
    `link rel=image_src`) as the banner. It is hotlinked from the publisher (the image they publish for link previews),
    not copied, and is saved on the post as `data.image` with `src` = the article link and `auto: "og"`. Pages whose
    robots meta or `X-Robots-Tag` say `noimageindex` / `max-image-preview:none`, and images whose file name looks like
    a logo, favicon or placeholder, are skipped.
  - Feed cards without an image now show no banner (the patterned placeholder is gone). If a banner image fails to load,
    the card hides the banner (`epBannerGone` in the bundle, CSS block `epBanner`). Video thumbnails are unchanged.
  - Code: `epBannerPick`, `epBannerFetch`, `epBannerSet`, `epBannerCron` in `worker/dist/index.js`. Tracking calls
    `epBannerSet` as soon as it publishes (`epAnPublish`). `epBannerCron` runs after `epSeedCron` on each hourly tick
    and checks up to 15 posts that have a link and no image, newest first, so the existing posts (about 115) are
    backfilled within a day. Each post is checked once; results and reasons are in the D1 table `post_banner`
    (`record_id`, `checked`, `image`, `note`). Delete a row there to have a post checked again.
  - Tested locally against sample pages (image, no image, opt-out, logo, broken image). Live sites could not be reached
    from the sandbox, so check the first real results in `post_banner` after deploy.

### 2026-11-22

- **#47 Map is its own top-menu tab; Organisations Overview is back.**
  - New top-menu tab **Map** (after Organisations) at `/map` (`epMapPage`, routes and `zn` menu list in the bundle),
    with the full-screen map, List window, filters and walking pan unchanged. `/orgs/map` still opens it.
  - Organisations > Overview (`/orgs`) shows the grouped organisation lists again (`Mr`), as before #38.
  - "On the map" links on organisation pages now go to `/map?org=…`.

- **Robot makers: one-time import of recent news and robot entries.** A manual pass over every organisation with the
  Robot maker role (103), done while the tracking agent waits for its API key. Adds 114 News reposts (published
  late July to November 2026, each with its real source link and publish date, about the organisation and cc'd to
  partners already on the site, such as GXO, NVIDIA, Walmart or Stryker) and 28 robots (quadrupeds, humanoids,
  arms, mobile manipulators and one hand) with a maker link and a source on the category field. Specs are only
  filled where the source page states them.
  - Data lives in `worker/dist/assets/seed-robot-makers-2026-11.js`. `epSeedCron` (with `epSeedRun`, `EP_SEEDS`) in
    `worker/dist/index.js` runs from the hourly cron, imports each seed once and records it in D1 `settings`
    (`seed_robot-makers-2026-11` holds the counts). It skips news whose link is already on the site and robots whose
    name already exists, and writes everything (records, links, search index) in one D1 batch.
  - Imported news looks like tracking reposts (type `post`, kind News, origin Repost), so later tracking runs dedupe
    against it by link. Records carry the note "Imported in the robot-maker pass, November 2026".
  - To add another import later, add a seed module and put it in `EP_SEEDS` with a new id.

### 2026-11-21

- **#45 Tracking: only new news since the last run, Since founding, schedules, a web agent, bulk actions.**
  - Each run now looks only at news published since the previous successful run (`auto_news.since_at`); the first run
    looks back one period. "Since founding" looks back to the organisation's founded year (or 2000 if unknown) and
    can add up to 20 items, dated by when they were published so they land under older dates in the feed.
  - Tracking is done by an agent: Claude (`claude-opus-5-5`, `web_search_20260209` server tool, raw `fetch` to the
    Messages API) searches the web and hands back items worth reposting through a strict `report_news` tool. The
    Worker checks each item (real link, date inside the window, not already posted) before publishing it as a
    News/Repost post about the organisation. Helpers `epAnAgent`, `epAnPublish`, `epAnKey`. Without the
    `ANTHROPIC_API_KEY` secret it falls back to the old RSS reader (`epAnFindFeed`), now also windowed.
  - Schedules per organisation: how often (`every_h`: every 6 or 12 hours, daily, every 2 days, weekly) and the time
    of day (`at_hour`, in the admin's time zone `tz`). New `auto_news` columns `every_h`, `at_hour`, `tz`,
    `since_at` (added by `COLS`). The hourly cron picks due organisations with `epAnDue` (4 per tick).
  - Admin > Organisations: a checkbox on every row and "Select all" (of the current filter) above the list. With a
    selection, a bar offers Track, Stop, How often, Time, Track now, Since founding and Clear. Tracked rows get a
    Schedule line (how often, time, Since founding, and which news the next run looks at). "Check" became
    "Track now" and works on untracked organisations too. Bulk Track now runs one organisation after another
    and shows progress. Frontend `epAdminOrgs`, `epAoItem`, `epAoSchSel`, `epAoSchTxt`; CSS block `/* epAoSched */`.
  - API: `POST /api/admin/autonews/bulk` (`slugs`, optional `tracked`, `every_h`, `at_hour`, `tz`), `POST
    /api/admin/autonews/:slug/run` takes `{backfill: true}`; `GET /api/admin/orgs` returns `agent` and each
    organisation's schedule.

- **#44 Admin picks the subtab height; second tab rows become pills.**
  - Admin > Site settings gains "Subtab height": Small (same as the Latest banner, default), Medium or Large. Stored
    in D1 `settings` key `tab_height` (`s`/`m`/`l`), sent in `/api/me`, applied as `html[data-tabh]` by `epTabH`.
    `GET/POST /api/admin/site` now also read and write `tab_height`.
  - The second row of tabs (sub-sub-tabs, e.g. Hardware > Drive > Actuators, Motors...) is gone. Those choices are
    now pills like the Community "What do you need?" ones (`.cpills.ep-sub2`, links with `.cpill`). CSS block `/* epTabH */`.

- **#43 Subtabs keep their original colours, at the Latest banner's size.**
  - Follow-up to #42: the subtab rows (`.tb`, `.subnav`) go back to their original colours (light row, active tab
    in the inverted colour) but keep the banner's format: mono caps at .72rem, 4px padding so each row is the same
    height as the Latest banner (about 25px), and the small square on the active tab. CSS block `/* epTabs */`
    replaced; the `--tk-*` theme variables are gone.

- **#42 Subtabs look like the Latest banner.**
  - Every subtab row (`.tb` and `.subnav`: Admin, Account, Community, the type pages like Papers/Funding, Admin
    filters) is now a dark strip in mono caps like the Latest banner, and the active tab uses the banner's accent
    colour with the same small square marker. Follows each colour theme's banner colours. The lighter second row
    (`.subnav-2`) is unchanged. CSS only, block `/* epTabs */` (theme variables `--tk-*`).

- **#39 Admin can set the Latest banner to Scrolling, Still or Off.**
  - New Admin > Site settings tab (`/admin/site`, frontend `epAdminSite`) for site-wide switches. First switch: the
    "Latest" headline banner. Scrolling is the old behaviour; Still shows the headlines without movement (people can
    swipe or scroll the strip); Off hides it. Saves straight away for everyone.
  - The Latest banner now only shows on the front page (`/`), not on other pages.
  - Worker: `settings` key `ticker_mode` (`scroll` default, `static`, `off`), `epTickerMode`, `GET/POST /api/admin/site`
    (admin only, JSON), and `/api/me` now returns `ticker_mode`. CSS block `/* epSite */`; still banner uses `.ticker.ep-still`.
- **#41 Map list is a floating window like the Lounge, with a Page link per organisation.**
  - The map's **List** now opens a Lounge-style window (`cw-panel eplw`, grip, title "In view · N", close). On desktop
    it can be dragged anywhere by its header and the spot is remembered (`localStorage ep-maplist-box`); on phones it
    is a bottom sheet like the Lounge. Escape or the close button hides it; it is removed when leaving the map.
  - Each row has a **Page ↗** link (`.eplist-go`) straight to the organisation's page (`/r/<slug>`); tapping the rest
    of the row still opens its card on the map.
  - Code: `epListInit` in the bundle, CSS block `/* epMapListWin */`.

- **#40 Map: list of organisations in view, map-only Overview, walking pans the map, filters at the bottom.**
  - A **List** button (top right of the map, with a count) opens a floating card listing every organisation in the
    current view, with logo and location. It updates as you pan, zoom or filter. Tapping one opens its card (zooming
    in first if it's inside a cluster). On phones the list is a sheet at the bottom and closes when you pick one.
    `epListInit` (fed from the map's draw loop with the set of ids in view), CSS block `/* epMapList */`.
  - Overview is now just the map: the grouped organisation lists below it are gone (`Ar`). The group tabs still
    list organisations.
  - Your walking character pushes the map: walk into the outer band of the map (about 110 px) and it pans that way
    (`epWalkMap`, called from the walk loop; the map exposes `epPan`).
  - The map search and filters moved to the bottom left (above the dock on phones). CSS block `/* epMapBottom */`.
  - The organisation card has a close button (`.opop-x`).
- **#38 Organisations Overview opens on the map.**
  - `/orgs` (Overview) now starts with the full-screen map: it fills the window under the menus on phone and
    desktop, with no page heading above it. The grouped lists of organisations follow below the map. The separate
    "Map" tab is gone; `/orgs/map` (and `?org=` links to it) still work and show Overview. Frontend `Ar`/`Fr`; the map
    re-measures its height shortly after load (`he`) so a late-loading ticker doesn't push it below the fold.
  - The map legend no longer lists organisation names (`legend:!1`).
  - The card that opens on a pin, or by itself when the search narrows to one organisation, shows more:
    logo, name, location type, address, summary, roles, country, stage, founded, money raised, what it makes,
    follower count, Follow, Open page and the website (`epPopHtml`). It stays inside the map (`epPopPos`). On
    phones it is a sheet at the bottom of the map, the filter panel closes, and the map pans so the pin stays
    visible. CSS block `/* epOrgMap */`.
  - Worker: each map point carries `x` (summary, roles, country, stage, founded, website, raised, makes, follower
    count) in `orgsPayload`. The follower count is one `GROUP BY` over `follows`, no bound parameters.
- **#37 Admin > Organisations: quick buttons and easier sorting.**
  - Each row has quick buttons that work without opening the editor: **Track / Tracking** (turns daily news
    tracking on or off), **Check** (checks for news now; only when tracked), **Hide / Hidden** (hides it from the
    site), **Page ↗** (public page) and **Edit** (opens the inline editor). A short confirmation shows under the
    row. Tapping the name also opens the editor.
  - Sorting: column headers (Organisation, Where, Posts, Tracking) sort on click and flip direction on a second
    click. The sort menu adds Country, Stage, Followers, Tracked first, Last checked, Last edited and Missing info,
    with an up/down button for direction. Empty values always go last. The choice is remembered on that device
    (`localStorage` `ep-ao-sort`).
  - Code: `epAdminOrgs`, `epAoItem` (rewritten), `epAoSortFn`, `epAoHas`; CSS block `/* epAoQuick: ... */`. Uses
    the existing `POST /api/admin/orgs/:slug` and `/api/admin/autonews/:slug/run`. Bundle `index-7ca02e0e.js` / `index-f904e5b9.css`.

### 2026-11-20

- **#36 Organisation badges instead of members managing pages.** Julian decided people from an organisation should not
  run its page. Belonging is now a badge of honour on their character and a way to find each other. Only the admin
  and contributors manage organisation pages.
  - "Claim this company" became **I work here** (`/claim/<slug>`, page title "Wear the … badge"). A verified work
    email gives the badge at once (row in `owners`, which now means "member" and gives no rights; new column
    `owners.email`). Organisations without a website get an "Ask the admin" form instead (`POST /claim/<slug>/ask`,
    a pending `claim` submission; approving it adds the badge). Members can leave (`POST /claim/<slug>/leave`).
  - `canManage` is staff only, `ownedCompanies` returns nothing, and creating an organisation page no longer makes
    you its member. So members can't post as the organisation; organisation news comes from the editors and Track.
  - The worn badge: a small logo pin on the character's chest (CSS `.wk-char.ep-og .wk-fig:after`, var `--ogi`;
    an accent square when there is no logo) and the organisation name in the name label (`.wk-ogn`). It shows
    everywhere a character appears: Place, walkers on every page, Account. Worker `walkerLook` returns `og`
    (copied in `prefs.og` by `epOgSync`, chosen with `prefs.og_pick`, or `none` to hide). Frontend `epOgApply`,
    `epOgC`, `epOgS`. Only real logos (image fit "contain") are used.
  - Cards (Place and anywhere) list every organisation under "Member of", with a "N others" link to the People
    section (`orgs` on `epCardItem`; `epOgRows` / `epOgNode`).
  - Organisation pages have a **People** section (`#people`, `epOrgPeople`, record payload `people`, `is_member`):
    members' characters; tap one to open their card. Admins see "Remove badge" (`POST /claim/<slug>/remove`, field
    `u`). Members who hide their badges aren't listed.
  - The Place whistle has a new **By organisation** line-up (`data-line="org"`, `epLineKey`).
  - Account: the Overview card is "Your badges"; the Companies tab lists badges with Wear / Leave and "Hide my
    badges" (`POST /account/badge`, field `og`).
  - **Report a mistake** on organisation pages (logged-in non-editors; `epReportAsk`, reason "Wrong information").
    Reports from verified members of that organisation get `reports.priority = 1` and come first on
    /admin/reports with a "member of this organisation" tag.
  - The hard hat now unlocks with any badge. Screenshots in `docs/screenshots/badges/`.

- **#35 Admin redone: dashboard Overview and an Organisations tab.**
  - Overview is now a dashboard: tiles for waiting reviews, open reports, community requests, organisations
    (and how many are tracked), posts this week and members; a "Needs attention" box; a "Tracking" box with the
    latest checks; then all tools grouped (`epAdminHub`, `epAgo`). Data from new `GET /api/admin/stats`.
  - New first tab **Organisations** (`/admin/orgs`, `epAdminOrgs`, `epAoItem`, `epAoEdit`): every organisation
    with logo, roles, country, stage, post and follower counts, and tracking state. Search, filters (All, Tracked,
    Not tracked, Missing info, Hidden; `epAoMiss`) and sort (name, recently edited, most posts, most followers).
    Tapping a row opens an inline editor: name, summary, roles, country, stage, headquarters, founded, employees,
    website and social links, contact email, logo, track on/off, news feed, "Check now", and hide from the site.
  - Worker: `GET /api/admin/orgs` and `POST /api/admin/orgs/:slug` (JSON; admin only; `epAoRow`, `epAoCounts`).
    Saves go through `saveRecord` (revision kept, search reindexed, links untouched). A changed field drops its
    old `src`/`asof`. Tracking writes `auto_news` directly. "Organisations" added first in `adminBarLinks`.
  - CSS block `/* epAdmin2: ... */`. Bundle `index-dc790959.js` / `index-f3e158d5.css`.

- **#34 Calmer whistle and colour icons; no "!" when lifted.** A lifted Place character no longer shows the "!" badge
  (it still swings and kicks). The whistle has a new pixel icon (chamber, mouthpiece, ring) and the whistle and sort
  buttons use the dock's flat look (ink border, no coloured shadow; the whistle turns dark while a line-up is on).
  The colour option is a mono drop instead of four coloured squares. CSS blocks `epWhistle` and `epWhistle2`.
- **#33 Admin moved into the top menu, with tabs.** Julian asked for the admin tools next to Account and laid out
  like the other pages. The bottom-right admin button from #31 is removed.
  - "Admin" sits between "+ Create" and "Account" on desktop (small teal count of things waiting) and after
    "Account" in the phone menu. Only editors see it. `epAdmNav`, active state `epAdmOn`.
  - Every admin page (`/admin`, `/admin/*`, `/review`, `/users`, `/new`) is wrapped in `epAdw`: an "Admin" heading,
    then tabs Overview, Review, New record, Reports, Home highlights, Requests, Users, Email, Stickers, Focus areas,
    Quote requests (counts on the tabs). Overview is the grouped list from #31 (`epAdminHub`). The tab bar scrolls
    sideways on phones and keeps the open tab in view.
  - `/community/people`, `/community/orgs` and Export JSON stay out of the tabs (`epAdwX`): the first two belong
    to Community's own tabs, the last is a download. They are still on the Overview.
  - CSS block `/* epAdw: ... */`; the `epAdm` corner-button code is gone. Bundle `index-e6dd7c92.js` / `index-c3cc0920.css`.

- **#32 Whistle in the corner, icon sort options, drag characters; Online button size.**
  - The Place whistle moved to the bottom-right corner. Its options are now icon buttons (A–Z, colour squares, top
    hat, arrows for "Let them walk") with the label on hover; touch screens show a small label under each icon. On
    phones the whistle lifts above the fixed dock when the two would overlap (`whDock`).
  - Characters can be picked up and dragged around the stage. While held they swing, kick their legs and show a "!";
    when dropped they squash and bounce, then carry on (back to their spot if lined up). A tap still opens the card.
    Code: `grab` in `epPlaceRun`, CSS `.epp-c.held`, `.epp-fear`, `.epp-c.drop` in the `epWhistle` block.
  - The dock's Online / Offline button no longer stretches to the row height; it matches the Walk and Lounge buttons
    (36 px on desktop, 44 px on phones). CSS block `epDockSize`.
- **#31 Admin tools moved to a corner button.** The green "Editing on" bar at the top of every page is gone. Admins
  (and contributors, with their own tools) get a button at the bottom right, in the dock left of the eye, Walk and
  Lounge buttons. It shows a teal count of things waiting (review, reports, requests). It opens a small menu in the
  site's menu style with one option, "Admin", that goes to a new `/admin` page listing every tool, grouped
  (Review and moderation, Content, People, Site) with a line on what each does and its waiting count.
  - Frontend: `epAdm` (button and menu, rendered first in `.cdock`), `epAdminHub` (the `/admin` page and route),
    `epAdmG` (groups), `epAdmD` (descriptions), `epAdmN` (sums the counts in the link labels). CSS block
    `/* epAdm: ... */` at the end of the stylesheet. Bundle `index-53270552.js` / `index-fbd489ab.css`.
  - The links still come from `adminBarLinks` in `worker/dist/index.js` (`me.bar`); a link not in `epAdmG` lands
    under "Other". `/admin` is gated in `isGatedPath` and `gateStatus` (404 unless the account has editing on).
  - The two-step setup notice ("Set up two-step login to use admin and contributor tools") still shows at the top
    for editors without two-step login, since it is a warning and not a tool.
- **#30 "Auto updates" is now "Track".** Admins see a **Track** button at the top right of company, university and
  lab pages. Once tapped it reads **✓ Tracking** (hover shows "Untrack"; tap again to stop). A tracked organisation is
  checked once a day by the news job from #23, and new items are reposted to the site. "Check news now" is now
  **Check now**. Same data and routes as before (`auto_news` table, `POST /api/autonews/:slug`); only the wording
  and placement changed. CSS block `epTrack` (`.rechead .ep-track`, positioned at the top right of `.rechead`;
  on phones the breadcrumbs move down below it).
- **#29 Whistle on Community Place.** A whistle button in the top-right corner of the Place stage opens "Line everyone
  up": By name, By colour or By hat. Everyone hurries into rows sorted that way (colour and hat groups start a new
  row or leave a gap between groups), stands facing right, and stays lined up until you pick "Let them walk". The
  line-up is only on your screen and re-flows when the stage resizes. Code: `epPlaceRun` (`line`, `paintWh`,
  `blow`, slot walking in `tick`), helpers `epHsl`, `epLineKey`, `epLineCmp`; CSS block `epWhistle`.
- **#29 Online / Offline switch with a waitlist.** The eye button in the dock is now an Online / Offline switch with a
  signal icon. A green dot means Online, an amber dot means waiting or connecting, and a slash means Offline.
  - Online: your character is sent to the server, and you see everyone else's. It is site-wide, not per page.
  - Offline: you can still browse and walk, but nothing is sent. The live socket is closed and others aren't shown.
    The Lounge still works by polling.
  - Seats: one per device (`window.epDev`, kept in localStorage `ep-dev`). `POST /api/online {dev, want}` takes or
    keeps a seat (heartbeat every 25 s, freed 70 s after the last) or gives it back. The `online` Durable Object
    holds them (`EpSeats`, `LiveHub.seat`, `hasSeat`).
  - Limit: D1 setting `online_max`, default 100 (`EP_ONLINE_MAX`). An admin can change it by posting `max` to
    `/api/online`. When it's full you join a waitlist, see your number on the button, and get the next free seat.
  - The server refuses the live socket (`/api/live/ws`, now sent `dev`) and walk joins without a seat.
  - The old choice to hide characters (`ep-walk-hide`) now means Offline. Client: `epSeat`, `epNetToggle`,
    `epNetPaint`, `Le`. CSS block `epOnline`.
- **#29 New accounts get a random character.** `createUser` saves a random look in `prefs.walker` (`epRandomLook`):
  body, head and hat colour from the presets, and any hat that isn't locked. Existing accounts keep their look.

### 2026-11-19 (evening)

- **#28 Walking characters show for everyone again.** Each page has its own Durable Object, and its in-memory record
  of who may walk there (`WalkWorld.hold`) was empty whenever a walker changed page or the object restarted (every
  deploy restarts them). The walker kept walking on their own screen, but the page refused their moves, so nobody
  else saw them.
  - `postWalk` now passes `owned` when the `hold` Durable Object has confirmed the walker's token, and
    `WalkWorld.tick` accepts it.
  - The character is removed from the old page straight away when the walker changes page.
  - Your own character now shows on your other devices too. `broadcastWalk`, the socket's first snapshot and
    `GET /api/walk/peek` no longer leave out your own account. The device that is walking skips it (client `ke`).

### 2026-11-19

- **#27 Watchlist opens after the first organisation.** A member who follows no organisation sees only "Start your watchlist" (with search, suggested organisations and topics) on /watchlist, /watchlist/sources and /watchlist/newsletter. The Watchlist, Sources and Newsletter tabs appear once at least one organisation is followed. Topics alone do not unlock it. `epLk` in the frontend, `watchlistPayload` empty when `src.orgs` is empty, `newsletterPayload` passes `suggest`.
- **#26 Watchlist shows posts only.** The Watchlist and the email digest only show posts (news, reposts, blog
  posts, videos) and papers linked to the organisations and topics you follow. Products, models, funding rounds,
  deployments, events, datasets and jobs no longer appear (`watchlistPayload` type list is back to
  `('post','paper')`). Sections are News, Research, Videos and Topics; Jobs is gone (`WL_SECTIONS`). Posts reach an
  organisation through their `about` link, which is how org pages and the automatic news job (#23) attach them.

- **#25 Feeds sorted by date with day separators; Watchlist without the side panel.**
  - The Watchlist is one list, newest first, instead of one block per section. The pills still filter by section,
    and Arrange still sets the pill order and hides sections (`epWlFeed`).
  - The home feed and the Watchlist have small separators: Today, Yesterday, This week, This month, Last month,
    Older, plus Upcoming for items dated in the future. They use the viewer's local date. "This week" starts on
    Monday (`epDBucket`, `epWithSeps`, CSS block `epDSep`). Feed items now carry `date` (`feedItems`, worker).
  - The Watchlist's right-hand panel from #24 is removed. The page is a single 760px column, the same width as the
    home feed (`.ep-wl3`; `epWlSide` is left unused).
  - Newsletter settings only show the weekday picker for Weekly. Daily shows only the time, and Off hides both
    (CSS block `epNlWhen`, pure CSS with `:has`).
  - **Members follow organisations and topics only.** People, robots and models can no longer be followed or watched:
    the ☆ Watch button on record pages is gone, `/watch/:slug` only toggles organisation follows,
    `POST /api/watchlist/toggle` and `/watchlist/add` refuse anything else (topics go through
    `/watchlist/add` and `/watchlist/remove` with `kind=tag`), and `wlSources` returns organisations and topics. Sources is now a search for organisations plus the list you follow. Suggestions list 12 organisations.
    Sections are News, Research, Videos, Topics and Jobs (`WL_SECTIONS` in the catalog). Old record watches and
    person follows (2 record watches live, no people) are left in D1 but ignored.
  - **Topics in Sources.** A Topics section lists followed topics plus suggestions as one-tap chips (`epSrcTopics`,
    `epTopicTog`), and typing in the search also offers "Follow #topic".
  - **Sources works like "Start your watchlist".** Search results, the organisations you follow and a list of
    suggested organisations are all tiles with a logo, summary and one-tap Follow/Following button (`epSugTile`).
    Search uses the new `GET /api/watchlist/find` (organisations only, returned as tiles); `sourcesPayload` adds
    `following` tiles. CSS block after `epDSep` (`.ep-src2`).

- **#23 Automatic updates for organisations: admin toggle and a daily news job.**
  - **Toggle.** On a company, university or lab page, admins see "Auto updates off / on" next to "Pin to home".
    Stored in D1 in a new table `auto_news` (`record_id`, `enabled`, `feed`, `updated`, `updated_by`, `last_run`,
    `last_note`, `seen`), created by `ensureExtraSchema`. `POST /api/autonews/:slug` flips it. The record payload
    carries `can_autonews`, `autonews`, `autonews_feed`, `autonews_run` and `autonews_note` (admins only).
  - **Daily job.** The hourly cron from #22 now also runs `epAutoNewsCron`. Each tick it takes up to 5 enabled
    organisations not checked in the last 20 hours (`EP_AN_PER_TICK`), so each is checked about once a day. For each
    it reads the news feed (RSS or Atom): the saved `feed`, else a `<link rel="alternate">` feed on the website,
    else `/feed`, `/rss.xml` and similar (`epAnFindFeed`). Items dated in the last 36 hours become **published**
    posts straight away (Julian's choice): kind News, origin Repost, `link` to the original article, `source_site`,
    linked `about` the organisation, `data.auto_news = Yes` (`epAutoNewsOrg`, via `applyCompose`). Reposts open
    the original article, so the source gets the click. At most 3 new posts per organisation per day
    (`EP_AN_MAX_NEW`).
  - **No duplicates.** Links are cleaned (`utm_*` and similar removed, no `#…`, no trailing slash; `epAnCanon`)
    and skipped if any post or paper already has that link. Every link seen is also kept in `auto_news.seen`
    (last 300), so a post an admin deletes doesn't come back the next day.
  - **Admin buttons** (shown while it's on): "Check news now" runs the check for that organisation and shows the
    result ("Added 2 new items", "Nothing new", "No news feed found on …"). "News feed" sets or clears the feed
    address. Routes: `POST /api/admin/autonews/:slug/run`, `POST /api/admin/autonews/:slug/feed`,
    `GET /api/admin/autonews` (list of enabled organisations with their last result). All admin-only.
  - The button row on record pages now wraps instead of running off the screen (`.pp-tools.rec-tools`). Frontend
    classes `ep-autonews`, `ep-autonews-run`, `ep-autonews-feed`; CSS block `epAutoNews`. Screenshots (local test
    feeds) in `docs/screenshots/autonews/`.
- **#24 Watchlist looks like the rest of the site; "Send to me now" says what happened; digest from newsletter@.**
  - **Same layout as the home feed.** All three Watchlist tabs now use the home page layout (`.home2`): a 760px
    content column and the right-hand side panel. Cards are the same size as on the home feed (they were 980px
    wide). The side panel shows what you're watching and your digest schedule (`epWlSide`, worker
    `epDigestInfo`).
  - **Section pills.** The feed has the home feed's pill bar (All, People, Companies… with counts) instead of a tall
    stack of sections. Empty sections fold into one "Nothing new in …" line. Arrange opens from a button on the bar
    (`epWlFeed`).
  - **Send to me now gives feedback.** Before, the button posted to a page route that redirected, so nothing
    showed. It now shows "Sending…", then a message: sent (with the count and address), nothing new to send, or why
    it failed (`epNlSend`; `postWlSend` returns JSON with `kind` sent, empty or error). It doesn't send an empty
    digest. If the button is disabled, it says why.
  - **Newsletter tab preview.** Shows the email as it will look, in a frame (`preview_html` in the newsletter
    payload, `.nl-frame`). Sources and Newsletter use boxed panels like the rest of the site.
  - **Digest sender is newsletter@embodiment.place** (`EP_DIGEST_FROM`, passed as `msg.from` to `sendMail`). If
    Cloudflare refuses that sender, `sendMail` retries from the default `EP_MAIL_FROM` (no-reply@) and logs
    `[mail] sender ... refused`. Other emails still come from no-reply@.
  - CSS block `epWl2`.

- **#22 Watchlist: more news, working arrange, digest emails, one-tap watching.**
  - **More in the feed.** The Watchlist used to show only posts, papers and jobs, so following a company showed
    almost nothing. It now also shows launches (products), models, funding rounds, deployments, events and datasets
    linked to what you follow or watch (`watchlistPayload` type list). Their cards get a label such as "Launch" or
    "Funding" (`EP_WL_CAT` in `categoryOf`) and the organisation behind them (`epActorRel`: maker, developer,
    company, vendor, provider). "min read" only shows on posts and papers.
  - **Arrange sections works again.** The up and down buttons had been lost, so the order couldn't change. Each
    section now has ↑ and ↓ buttons that work by tap on phones (`epWlSort`, CSS block `epWlSort`).
  - **Email digest sends on its schedule.** Weekly or daily digests were saved but never sent, because the Worker had
    no scheduled handler. `wrangler.json` now has an hourly cron (`triggers.crons`, minute 5), and the Worker's
    `scheduled` export runs `epDigestCron`. It sends each member's digest at the day and hour they picked, in their
    own time zone (saved as `prefs.tz` from the browser when they save delivery; UTC if never saved). It skips
    members without a confirmed email, skips digests with nothing new, and won't send twice within 20 hours (daily)
    or 6 days (weekly) (`prefs.auto_sent`). "Send to me now" doesn't count against that.
  - **Emails look like the site (Hommik theme).** Every email now goes out in the same frame: the
    `*embodiment.place` header, Hommik colours (#007a72 teal on #f3f5f6), square black borders and mono labels
    (`epMailWrap`, applied inside `sendMail` to any HTML that isn't already wrapped). The digest is laid out like
    the Watchlist page, with black section bands, one card per item, real links, and links to change the schedule
    or unsubscribe (`epDigest`).
  - **Empty Watchlist helps you start.** Instead of "Your watchlist is empty", new members see suggested
    organisations, robots and models (ranked by how many links they have, `epWatchSuggest`) and topics
    (`EP_WL_TOPICS`), each with a one-tap Follow, Watch or + button (`epWlStart`).
  - **Watch from anywhere.** Organisation cards (`Nr`) and map pin pop-ups have a Follow button, and Sources has a
    search box for companies, robots and models (`epWlFind`). They share one state (`epW`, `epWatchBtn`,
    `epWPaint` for the map's plain-HTML pop-up), loaded from `GET /api/watchlist/ids` and changed with
    `POST /api/watchlist/toggle` (by record slug; organisations go to `follows`, everything else to
    `watch_sources`). CSS blocks `epWatch`, `epWlStart` and `epWlFind`.
  - Screenshots from local testing (fake data) are in `docs/watchlist/`.

- **#21 Empty cards say so.** Opening a member's card that has no name, position, company, info or social links
  shows "This card is empty." This replaces the blank card from #10. It applies in Place (`epPlaceCard`) and on
  walker and Lounge cards (`epCardNode`). Your own empty card still says "Add a position and info to your card.",
  and private cards still say they're private.
- **#20 Walkers can't widen the page; walk chat filter on your own screen.** On phones, walking to the right edge pushed the character 9px past the screen,
  so the page could scroll sideways. Your walker now stays at least 22px from each edge (the step in `we`), and the
  walker layer clips anything wider on the sides (CSS block `epWalkClip`, `overflow-x:clip`).
  - **Walk chat filter on your own screen.** The server already swapped curse words in walker speech for everyone
    else, but your own bubble and the walk log showed what you typed. The client now runs the same filter before
    showing it (`epMeowC`, a copy of the Worker's `epMeow`). The noise is picked from the word instead of at random,
    so you and everyone else see the same one.
- **#19 Card placement correction, phone walkers in the middle on PC.** The "card on the left" request was meant for the Lounge, not for characters.
  - Character cards in Place and for walkers are back to how they were before #16, above the character on desktop
    and phones. The phone bottom sheet (`.epp-sheet`) is no longer used.
  - On desktop, tapping a name in the Lounge opens the card to the left of the Lounge panel, level with the name,
    with the arrow pointing at the panel (`epCardPos` uses `epSideOf` only for `.cw-who` above 760px). On phones the
    Lounge card still opens above or below the name.
  - **Phone walkers on wide screens.** A walker's position is a fraction of its own page width, so a phone walker
    crossing its 390px screen used to dash across a whole PC screen. The client now also sends its page width
    (`w` in `POST /api/walk`, kept by `WalkWorld` and sent back by `pub`). When the sender's width is 820px or less and
    narrower than the viewer's, the viewer shows that walker in a centred column of the sender's width (`he`).
- **#18 Username label colour, quieter locked hats, curse words become animal noises.**
  - The look creator has a Name colour row. It sets the background of the username label above your character, and
    everyone sees it on walkers, in Place and on the preview. Default keeps the old look (black, or the accent colour
    for your own). The text turns black or white to stay readable (look field `nc`, helper `epNc`, CSS class `ep-nc`
    and block `epNameColour`).
  - Members choose from preset colours only (black, `WALK_COLORS`, white). Admins also get a custom colour picker.
    `postCharacter` drops any other colour for non-admins.
  - Locked hat tiles no longer say "Locked". It only shows in the hover or tap pop-up.
  - While a locked hat's pop-up is pinned open by a tap, hovering other locked hats doesn't show their pop-ups
    until it is closed (`.lk-hats:has(.lk-hat.tip)`).
  - **Curse words become animal noises.** The server swaps whole curse words for a random "meow", "woof", "moo",
    "quack" and so on, keeping capitals, before saving. "class" or "assess" are left alone. This covers Lounge
    messages, event chats, walker speech bubbles, comments and card fields (name, position, company, info). The list
    is `EP_CURSE_RE` and the noises are `EP_ANIMAL_NOISES`, with helper `epMeow` (`worker/dist/index.js`). Messages
    saved before this change are not rewritten.
  - The small character in the Account header no longer walks its legs on hover either. It stays completely still
    (CSS block `epAcctStill`).
- **#16 Phone walk animation, hat hints, centred log out, cards beside characters.**
  - The legs animate again when the phone asks for reduced motion. The original reduced-motion rule set
    `.wk-char.moving .wk-body:before/:after` to `animation:none`. #6 overrode it with `ep-step`, and #11 removed that
    override, which froze the legs. The `wk-leg` and `wk-bob` rules are now re-applied after it (CSS block `epHats2`).
  - A locked hat's hint is no longer inside its tile. It shows as a pop-up above the tile on hover, or on tap on
    phones (`data-hint` and `.lk-hat.tip`, toggled by a document click listener). The tile only says "Locked".
  - The "Log out?" dialog (`epLogoutAsk`) is centred on the screen (`.palette.ep-logout`).
  - A character's card opens beside it instead of on top: to the left, or to the right when there's no room, with
    the arrow pointing at the character (`epSideOf`, `.epp-side-l`, `.epp-side-r`, CSS block `epCardSide`). This
    covers Place and walkers on every page. On phones (760px and narrower) the card is a sheet at the bottom of the
    screen (`.epp-sheet`). Cards opened from a Lounge name still open above or below the name.
- **#17 Fix "Find your company" (the Companies list returned error 500).**
  - `/api/list/company` failed because D1 allows at most 100 bound parameters per query, and `linksFor` bound every
    company id twice (175 companies, 350 parameters). Lists of other types were still small enough to work.
  - Id lists are now sent as one JSON parameter and read with `json_each` in `linksFor`, `allByIds`, `socialCounts`,
    `socialState` and `feedPage` (`worker/dist/index.js`, mirrored in `recovered-src/`).
- **#15 Lounge names open cards, unlockable hats, plus this log.**
  - In the Lounge, a member's name in a message is a button (`.cw-who`, data `u`). Tapping it opens the same card as
    tapping their character (`epCardOpen`, CSS block `epLoungeCard`). Guests' names stay plain text.
  - The card flips below the name when there's no room above (`.epp-below`), and it sits above the Lounge panel.
  - Added `AGENTS.md` and this `CHANGELOG.md`. The per-change notes that were in `README.md` moved here.
  - **Unlockable hats.** Three new hats (`hardhat`, `bubble`, `explorer`) are added to `LOOK_HATS` in the catalog
    and drawn in `public/static/hats-v2.png`, a 12-hat sprite. `.wk-hat` uses that file at `240px 18px`. Each one
    unlocks by doing something:
    - Hard hat: manage an organisation's page (a row in `owners`).
    - Speech bubble: send a Lounge message (a row in `room_chat`).
    - Explorer hat: walk your character on 10 different pages. The client posts each page to `POST /api/account/walked`
      (`epWalked`), which keeps up to 10 paths in `prefs.walked`.

    `epHatLocks` works out which hats are still locked. The account payload sends them as `hat_locks` with a hint.
    `postCharacter` refuses a locked hat (403). Admins have every hat. In the look creator, locked hats are greyed
    out with the hint, and Surprise me skips them.
  - **Custom colours are admin-only.** Non-admins only see the preset swatches. The server only saves preset colours
    for them: body from `WALK_COLORS`, head from `EP_HEAD_COLORS`, hat from black, `WALK_COLORS` and white.
  - The small character in the Account header no longer bobs (`.acct-char .wk-fig`). The big Overview character
    still floats.
- **#14 Card layout.** The card header shows `@username` at the top left. The Name, when set, is the first line of
  the body, above the position and company (`.epp-nm`, CSS block `epCards3`). The card keeps 4:3 as its smallest
  shape but grows taller, so every social icon shows on phones.
- **#13 Phones: ticker and event pages.** The news ticker keeps one text size and line on phones
  (`text-size-adjust:100%`). Event pages no longer show the live box (Schedule, Chat, Here, Featured): the `ei`
  component is not rendered.
- **#12 Walker fixes.**
  - The dark-theme outline matches the original pixel for pixel: the legs' `box-shadow` is clipped below the body
    (`epWalker2`).
  - Other people's characters keep the walking animation: the `moving` class stays on for 220 ms after the last
    movement, where before it flickered and restarted the leg cycle.
  - A real mouse click on a link while walking stops walking. A character using a link still carries the walk over.
  - Desktop uses the phones' eye icon for show/hide characters (`epHideIcon`).
- **#11 Original walk back.** Removed the `ep-step` stepping animation and the top-anchored legs from #6 and #8.
  Legs use `wk-leg` again in every direction.
- **#10 Card name, calmer Place.**
  - Optional Name on the card (profile `name`, up to 80 characters, action `card`).
  - Standing characters in Place no longer bob, and the dotted Place background is back (the wall and floor from #9
    were removed).
  - No placeholder text on other people's empty cards.
- **#9 Cards everywhere and the account page.**
  - Tapping any walking character on any page opens their card (`epCardOpen`, `epCardNode`,
    `GET /api/community/card?u=` or `?me=1`, built by `epCardItem`). Live presence carries the username (`u`).
  - Account Overview has the Card editor (`epCardEdit`: position, company, info, + Add social) and "Who sees your
    card" plus "Show my character in Place" (`epVisEdit`).
  - Changing your email moved to Security (`epEmailEdit`). You type the new address twice, and a 6-digit code goes
    to it (actions `email_start`, `email_confirm`, `email_cancel`, token kind `email_change`, 15 minutes). The old
    address gets a notice.
  - The Settings tab and the + Create and Settings buttons are gone from Account. `/account/settings` shows Overview.
- **#8 Place, second pass.**
  - Characters are normal size.
  - Walk on Place starts from your own Place character (`window.epPlaceStart`).
  - The card has the site's dialog look.
  - A closed card's character walks again.
  - The dark-theme outline moved from one filter to box-shadows, because phones dropped the filter when walking
    diagonally (refined in #12).
- **#7 Community Place.** A new first Community tab (`/community`, `epPlace`, `epPlaceRun`, CSS `epp-`).
  - Every member's character wanders around, and tapping one shows their card (`epPlaceCard`).
  - Data comes from `GET /api/community/place` (`epPlacePayload`).
  - Members can hide their character (`prefs.place_hide`) and add X, LinkedIn, Discord and Instagram
    (`prefs.socials`, checked by `epSocial`).
  - "Tell us what you need" moved to `/community/need`.
- **#6 Phones, third pass.**
  - Tables scroll sideways, and hardware tables build cells from facets (`epCells`, `epLbl`).
  - List filters fold into a dropdown.
  - The Lounge stays above the keyboard while typing.
  - Animations ignore reduced motion.
  - Other visitors' walkers show after changing page (the socket reconnects on `ep-page`).
- **#5 Phones, second pass.** Icon buttons for Hide, Walk and Lounge. A joystick walk pad (`epJoy`). Foldable map
  filters (`.epmf-tog`). A keyboard-safe Lounge (`--ep-kb`, `--ep-vh`). The Hämar theme uses Hommik's teal.
- **#4 Phones, first pass.** A header menu below 820px (`epMenu`). One-column record pages, a full-width Lounge
  sheet, a taller map, 16px form text, bigger tap targets. Screenshots are in `docs/mobile-2026-11/`.
- **#3 Map.** Pins show organisation logos (`epPinLogo`, Worker adds `lg`), and there's a location type filter
  (`epKinds`).
- **#2 Log out dialog.** The log out confirmation uses the site's dialog style (`epLogoutAsk`).
- **#1 Lounge and feeds.**
  - The Lounge waits for the login check, so Send works.
  - Messages show local times, and refused messages say why.
  - "Load more" fires on scroll. Feeds send 6 posts per page (`FEED_PAGE_SIZE`).
  - Log out asks for confirmation first.

### 2026-11-18 to 2026-11-19: repository set up

- Backed up the live Worker, static files and public content. Added the deploy workflow with a safety check against
  the live Worker's settings (`check-live.yml`, `scripts/check-live-config.mjs`), the account ID lookup from the
  token, and the nightly content export.
