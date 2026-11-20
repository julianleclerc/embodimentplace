# Changelog and open items

Shared log for everyone working on embodiment.place, people and agents alike. See [AGENTS.md](AGENTS.md) for the
rules. Add an entry in the same pull request as the change, newest first. Each entry gives the PR, what changed for
users, and where it lives in the code.

## Open items and known issues

Pick these up from here. When you start one, say so in your PR. When you finish one, move it to "Changes".

- **Tracked organisations without a news feed.** Many robotics companies only have a news page, no
  RSS or Atom feed. Their "Check now" says "No news feed found on …". Options: paste a feed address if one
  exists elsewhere (Medium, Substack, a blog subdomain), or add a reader for plain news pages later (needs an LLM
  or per-site rules). The job was tested against local sample feeds only; check the first real results live.
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

### 2026-11-20

- **Organisation badges instead of members managing pages.** Julian decided people from an organisation should not
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
