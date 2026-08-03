# Crystal Langley Portfolio — Standard.

Static HTML/CSS/JS site for crystallangley.com. No build step, no framework.

## Deploy

- Netlify site: **silver-malabi-ff4ce6** (site id `75243fae-1118-49a2-8a63-fd4b6aa45a8d`), team PR, account crystal.langley@sommsation.com.
- **GitHub → Netlify auto-deploy is NOT connected** (verified 2026-07-24 via the Netlify API from Crystal's Mac: `repo_url: None`, all deploys manual). An earlier session's claim that auto-deploy was live was wrong — that session couldn't reach api.netlify.com to check. Connecting the repo in the Netlify UI is still a worthwhile future step; until then, deploys are manual.
- Manual deploy flow (Netlify CLI, from Crystal's Mac): copy the repo to a staging dir *excluding `.git` and `CLAUDE.md`*, then `netlify deploy --dir . --site 75243fae-1118-49a2-8a63-fd4b6aa45a8d` (add `--prod` after verifying the draft URL). The `[build] command = "rm -f CLAUDE.md"` in `netlify.toml` handles the same exclusion if git-based builds are ever connected.
- Local canonical clone: `~/Projects/crystal-langley-portfolio`. (`~/Downloads/crystallangleysite` is an older pre-SEO copy — do not deploy from it.)
- Note for Claude Code on the web: api.netlify.com is blocked by that environment's egress allowlist; deploys must happen from the Mac or via a future GitHub connection.

## Design system

- Palette: **Bone** — paper `#F6F4EF`, ink `#191712`, accent (oxblood) `#A8452F`, muted `#726C61`, dark band `#191712`/`#F1EDE4`.
- Type: Instrument Serif (display) + IBM Plex Mono (everything else), both self-hosted via `fonts.css`.
- Layout: sticky left rail (brand/nav/meta) + scrolling right feed, on every page.
- **No theme switcher.** It existed in an earlier version (Sienna/Slate/Bone/Noir swatches) and was deliberately removed — don't re-add it. Site is hard-set to Bone.

## Pages

- `index.html` — homepage. Sections in the scrolling feed: Hero → Work (`#work`) → Capabilities → About (`#about`) → **Approach** (`#approach`) → **Services** (`#services`) → Contact (`#contact`) → footer.
  - Approach and Services are **inline sections on the homepage, not separate pages** — this was an explicit correction from the user. Do not re-split them into `/approach` or `/services` routes.
- `/audit` — standalone campaign landing page (UX/design system audit first, brand audit second; Calendly + Upwork CTAs, no site nav). Destination for ads and LinkedIn posts, deliberately NOT in the sitemap or homepage nav. Added 2026-07-26.
- Six case studies, each its own folder with `index.html`: `/donblas`, `/sommsation`, `/strivers`, `/sequoia-benefits`, `/handzin`, `/stead`. Shared visual template (sticky rail + feed), but `donblas/index.html` is fully self-contained (inline CSS/JS) while the other five link to a shared `case-study.css`/`case-study.js` copied into each folder.

## Password protection

- Implemented as a **Netlify Edge Function**: `netlify/edge-functions/case-study-auth.ts`, wired to paths in `netlify.toml`. It serves a branded, **password-only gate page** (Bone palette, Instrument Serif + Plex Mono, single password field — NO username field; Crystal explicitly rejected the native Basic-Auth prompt because browsers autofill a username into it). Correct password → scoped 30-day cookie → straight through on revisits. The `_headers` Basic-Auth approach was removed — Netlify silently ignores it on this plan (verified with a draft deploy: 200, no `WWW-Authenticate`).
- Real passwords live in **Netlify site environment variables** (`PW_SOMMSATION`, `PW_STRIVERS`, `PW_SEQUOIA_BENEFITS`, `PW_DONBLAS`) — never in this public repo. The canonical password record is in Crystal's Obsidian vault: `Jobs & Freelance/00 - Foundations/Portfolio Page Passwords.md`. Rotating a password in Netlify instantly invalidates existing cookies (the cookie token is derived from the password).
- Gated: `/sommsation`, `/strivers`, `/sequoia-benefits`, `/donblas` (the four tiles with PASSWORD badges). **`/handzin` and `/stead` are intentionally open** — matches the homepage UI and the Squarespace-era setup.
- Gate pages return HTTP 401 (keeps them out of Google) with the form as the body. Fail-open by design: if an env var is missing the page serves openly rather than bricking a client review.

## Analytics (set up 2026-07-28)

- **GA4 property "crystallangley.com"** (measurement ID `G-689MH1TVSB`, stream id 15341385902) under Crystal's "Google Ads Account" Analytics account. The gtag snippet is in the `<head>` of every page, including gated case studies (a pageview of a gated page = someone who got past the password, which doubles as an "opened my case study" tracker).
- **Custom conversion events** fired by the snippet: `book_click` (Calendly links) and `upwork_click` (Upwork links), both registered as key events with a $1 default value. Do not create derived events with these names (double-counting).
- **Search Console**: URL-prefix property `https://www.crystallangley.com/`, verified via the GA tag, sitemap submitted, linked to the GA4 property (2026-07-28).
- The old "eclatevibes.myshopify.com" GA property in the same account is unused; safe to trash.

## SEO

- Added: per-page `<title>`, meta description, canonical URL, Open Graph + Twitter Card tags, JSON-LD `Person` schema on the homepage. `robots.txt` and `sitemap.xml` at repo root.
- **Sitemap lists the homepage plus `/handzin` and `/stead`** (the two open case studies). The four password-gated case studies return 401 to Googlebot and can't be indexed — don't add them to the sitemap unless their password gate comes off.

## Known pending work

- Domain cutover in progress: `www.crystallangley.com` is set as the Netlify custom domain (apex as alias), but DNS still points at Squarespace until Crystal updates the records in her Squarespace Domains panel (nameservers are ns-cloud-*.googledomains.com, managed via Squarespace after the Google Domains migration). **The domain's MX records are Google Workspace email — never touch them during DNS edits.**
- GitHub → Netlify auto-deploy not yet connected (see Deploy).
- ~~Images hot-linked from `images.squarespace-cdn.com`~~ **Done 2026-07-24:** all 64 Squarespace-hosted images were downloaded and rehosted locally under `/assets/squarespace/`, and every HTML reference now points at the local copies (og:image/twitter:image use absolute `https://www.crystallangley.com/assets/squarespace/...` URLs for social scrapers). The Squarespace plan is no longer needed for images — but keep the old Squarespace site up a day or two for DNS stragglers while the domain cutover finishes.
- User has flagged the case-study/homepage copy as reading "stale" — a content rewrite pass is expected next, once the above is resolved.

## Source history

The original Claude Design handoff bundle (chat transcripts, early design explorations, uploaded case-study drafts) lives outside this repo and was deliberately **not** pushed here since this repo is public — don't assume that history is available in a fresh session unless the user provides it again.

## Automation

- **Weekly Site Report** — `.github/workflows/weekly-report.yml`, GitHub Action, runs every Monday 14:00 UTC forever (no session dependency, no expiry). Checks status codes on all public pages plus the 4 gated case studies (expects 401 on those — that's correct), spot-checks rehosted image liveness under `/assets/squarespace/`, runs a Lighthouse audit on the homepage, opens a GitHub Issue with results (triggers a GitHub email notification). Does not pull real GA4/Search Console numbers yet — those already exist and are viewable directly in GA4; wiring them into this report would need a GA4 Data API service-account secret, a separate task if wanted.
