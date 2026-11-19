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
- D1 rejects a query with more than 100 bound parameters ("too many SQL variables"), and local `wrangler dev` does
  not, so it only fails live. Pass a list of ids as one JSON parameter and read it with
  `IN (SELECT value FROM json_each(?))`, as `linksFor` and `allByIds` do. Never build `?,?,?` from a list that can grow.

### Editing the minified frontend

- Make exact string replacements (for example a Python script that asserts each search string occurs exactly once),
  then run `node --check` on the file.
- Name new helpers `ep…` (for example `epCardOpen`, `epPlaceRun`) so they are easy to find.
- Append new CSS as a block at the end of the stylesheet, starting with a comment such as `/* epCards3: ... */`.
- After editing, rename each changed file to `index-<first 8 hex of its sha256>.js` / `.css` and update
  `public/index.html`, so browsers fetch the new version.

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
- The card (name, position, company, info, social links) follows the member's "Who sees your card" setting
  (`prefs.profile_vis`: me, members or everyone; members is the default).
- Changing your email needs a code sent to the new address.

## Where things are tracked

- [CHANGELOG.md](CHANGELOG.md): every change, newest first, plus open items and known issues.
- `docs/`: screenshots and notes from past work.
- GitHub pull requests: discussion and review history for each change.
