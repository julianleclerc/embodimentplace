# Changelog and open items

Shared log for everyone working on embodiment.place, people and agents alike. See [AGENTS.md](AGENTS.md) for the
rules. Add an entry in the same pull request as the change, newest first. Each entry gives the PR, what changed for
users, and where it lives in the code.

## Open items and known issues

Pick these up from here. When you start one, say so in your PR. When you finish one, move it to "Changes".

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
- **No frontend source.** The React bundle is minified and edited by hand. Any large frontend change would need a
  rewrite.

## Changes

### 2026-11-19

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
