# embodiment.place

The code and public content of [embodiment.place](https://embodiment.place), a site for humanoid robotics news,
organisations, robots, models and community. It runs on Cloudflare Workers with a D1 database, a Durable Object
for live chat and presence, and Cloudflare email sending.

This repository is the backup and the deploy source: changes merged to `main` deploy to the live site, and the
site's public content is copied back here every night.

## What's here

| Path | What it is |
|---|---|
| `worker/dist/` | The Worker exactly as deployed on 2026-11-18: `index.js` (Hono app and the `LiveHub` Durable Object) and its chunks in `assets/`. This is what `wrangler deploy` uploads. |
| `public/` | The static files the Worker serves through its `ASSETS` binding: the built frontend (`index.html`, `assets/`), `static/hats.png`, and the organisation logos in `logos/`. |
| `wrangler.json` | Worker name, bindings (D1 `DB`, Durable Object `LIVE`, email `EMAIL`, `ASSETS`), plain vars and settings, matched to the live Worker on 2026-11-19. The code also supports an R2 `MEDIA` binding for image uploads, but the live Worker has none, so uploads are off. |
| `recovered-src/` | A readable copy of the Worker split back into its original files (`backend/worker/src/*.js`, `shared/*.js`). Reference only; nothing builds from it. |
| `content/` | Nightly export of the public content in D1: one JSON file per record in `records/<type>/<slug>.json`, `links.json`, and `schema.sql`. |
| `scripts/` | `check-live-config.mjs` (safety check before deploys) and `export-content.mjs` (the content export). |
| `.github/workflows/` | `deploy.yml` and `export-content.yml`. |

### What could not be recovered

The original TypeScript source and the Vite/React frontend source were not available, so this repository was
rebuilt from the live deployment on 2026-11-19:

- The Worker code is the compiled JavaScript. It is not minified and keeps each original file's name, but the
  TypeScript types, comments and the original Vite and wrangler config are gone.
- The frontend (`public/assets/index-*.js`) is minified React. It can be redeployed as is, but it is not practical to
  edit by hand. Bigger frontend changes need the original source, or a rewrite.

### Hand edits to the frontend bundle

Because there is no frontend source, fixes are made directly in `public/assets/index-*.js`. Each edit adds helpers
named `ep…` (for example `epWhen`, `epErr`) so they are easy to find, and the file is renamed with a new hash
(updated in `public/index.html`) so browsers fetch the new version. Changes so far:

- 2026-11-19: the lounge and walking characters start only once the login check has finished, so the Send button
  and Enter work, and the lounge opens for visitors who first landed on Log in or Sign up. Lounge messages show
  their date and time in the visitor's time zone, and a refused message shows why. A "Load more" button
  is pressed automatically when it scrolls into view, and organisation group pages show 24 cards at a time.
  The Worker now sends 6 feed posts per page (`FEED_PAGE_SIZE`). Log out asks for confirmation first, in a dialog styled like the search box (`epLogoutAsk`).
- 2026-11-19: map pins show the organisation's logo (`epPinLogo`, CSS `.opin.logo`), falling back to the coloured
  circle when there is no logo or it fails to load. The Worker adds `lg` to each map point: the record's image when
  its fit is `contain` (the logos), so photos are not used. The map has a location type filter (`epKinds`, HQ, Office
  and any other kinds in the data), and the popup shows the logo.
- 2026-11-19: phone layout. A menu button (`epMenu`, CSS `.epmenu`) in the header holds Log in / Sign up, or
  Watchlist, Account and Log out, below 820px wide, where those links were hidden. The section links scroll the
  current one into view (`epNavInit`). The phone CSS is one block appended to the end of the stylesheet (search for
  `epmenu`): record pages use one column (a later desktop rule had kept three, squeezing the text), the Lounge opens
  as a full-width sheet, the map is taller with its organisation list below it, form fields use 16px text so iOS
  does not zoom in, and the footer and small buttons are easier to tap. Screenshots are in `docs/mobile-2026-11/`.
- 2026-11-19: phones, second pass (second CSS block, search `epmf-tog`). The Hide / Walk / Lounge buttons are icons.
  The walk pad is a blocky joystick (`epJoy`, drag in any of 8 directions) that does not select text. While walking,
  the joystick sits bottom-left with the chat line beside it. The Lounge sheet is shorter and moves above the
  on-screen keyboard (`--ep-kb`, `--ep-vh` and class `ep-kb` on `<html>`, set from `visualViewport`). Map filters
  fold behind a Filters button (`.epmf-tog`), and the list of organisations is a single row over the map. The
  Hämar theme (`umbra-teal`) uses the same teal accent as Hommik (`#007a72`).
- 2026-11-19: phones, third pass (third CSS block, search `epf-tog`). Tables scroll sideways inside their box, and
  hardware tables (for example /t/humanoid?view=table), which crashed on every screen size because the Worker sends no
  `cells` for them, now build cells from each item's facets (`epCells`) with readable column names (`epLbl`). List
  filters fold into a Filters dropdown. While typing in the Lounge, the panel fills the part of the screen above the
  keyboard (`ep-typing-cw`, `--ep-vt`, `--ep-vh` from `visualViewport`). The ticker and walking characters animate
  even when the device asks for reduced motion (Julian's choice); the JS reduced-motion check is set to false.
- 2026-11-19: walking characters from other devices. Each page has its own `LiveHub`, but the live socket stayed on
  the first page, so after moving to another page you no longer saw anyone walk. The `ep-page` event now reaches
  `document` listeners, and the socket reconnects to the new page (`ep-page` listener in the socket client). The legs
  hang from the body and the stepping foot lifts and swings forward (`ep-step`, `ep-step-r`, `ep-step-l`); before, the
  leg shrank upward from a planted foot, which read as walking backwards.

## How it stays in sync

**Code: GitHub to Cloudflare.** A push to `main` that touches `worker/`, `public/`, `wrangler.json` or the package
files runs `.github/workflows/deploy.yml`. It first runs `scripts/check-live-config.mjs`, which reads the live
Worker's bindings and settings from the Cloudflare API and stops the deploy if `wrangler.json` would change any of
them. Then it runs `wrangler deploy`. Secrets are never read or changed, and dashboard vars are kept
(`keep_vars`).

**Content: Cloudflare to GitHub.** People add content on the live site, so D1 stays the source of truth.
`.github/workflows/export-content.yml` runs every night at about 2 AM California time (or by hand from the Actions
tab) and commits any changes to `content/`. Only public records (not private, not demo), their links and the
schema are exported. Users, password hashes, sessions, emails, chat and requests stay in D1 only, because this
repository is public. For full database restores, D1 Time Travel keeps 30 days of point-in-time history:
`npx wrangler d1 time-travel restore embodiment-place --timestamp=<time>`.

Editing `content/` here does not change the site; edit on the site and the next export picks it up.

## One-time setup

Add two repository secrets under **Settings > Secrets and variables > Actions**:

- `CLOUDFLARE_ACCOUNT_ID` (optional when the token can see only one account): shown on the right of the Cloudflare dashboard home page.
- `CLOUDFLARE_API_TOKEN`: create a custom token under **My Profile > API Tokens > Create Token > Create Custom
  Token** with these permissions, limited to your account and the `embodiment.place` zone:
  Account / Workers Scripts / Edit, Account / D1 / Edit (the export only reads, but the D1 query API needs Edit),
  Account / Account Settings / Read, Zone / Workers Routes / Edit.

Then run **Export site content** once from the Actions tab, and run **Deploy to Cloudflare** by hand; the safety
check will say whether `wrangler.json` matches the live Worker before anything is deployed.

## Working locally

```
npm ci
npx wrangler dev          # runs the Worker locally against local D1/R2 stand-ins
npx wrangler deploy --dry-run
```
