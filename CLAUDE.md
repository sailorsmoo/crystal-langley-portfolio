# Crystal Langley Portfolio — Standard.

Static HTML/CSS/JS site for crystallangley.com. No build step, no framework.

## Deploy

- Netlify site: **silver-malabi-ff4ce6** (site id `75243fae-1118-49a2-8a63-fd4b6aa45a8d`), team PR, account crystal.langley@sommsation.com.
- **GitHub → Netlify auto-deploy is NOT connected.** Crystal tried linking it via Netlify's UI (2026-08-18) and hit "Access Denied" selecting the repo, despite the Netlify GitHub App having "All repositories" access on her `sailorsmoo` GitHub account (confirmed — not a GitHub permissions issue). Root cause undetermined; likely a Netlify-side account/session issue. Not resolved — deploys are still manual. Don't assume this is connected without checking.
- **Drag-and-drop deploy (the Deploys page drop zone) does NOT deploy Edge Functions or process `netlify.toml`'s `[[edge_functions]]` config at all** — confirmed via Netlify's own docs/forums (2026-08-18). It only publishes static files. Any change to `netlify/edge-functions/case-study-auth.ts` or to which paths are gated in `netlify.toml` (e.g. adding a new gated case study) **requires a Netlify CLI deploy**, not drag-and-drop, or it will silently not take effect while everything else on the site looks fine.
- **Working manual deploy flow (Netlify CLI, from Crystal's Mac, confirmed working 2026-08-18):**
  ```
  cd ~/Projects/crystal-langley-portfolio
  git pull
  netlify deploy --dir . --site 75243fae-1118-49a2-8a63-fd4b6aa45a8d --prod
  ```
  **Always `git pull` (or do a fresh `git clone`) immediately before deploying.** A stale local folder caused a real regression once already (2026-08-18): a CLI deploy from an out-of-date local copy briefly reverted the `/telltale` page's Password badge/link back to its old "In Progress" state on the live site, even though the correct version was already sitting on GitHub the whole time. If there's any doubt the local folder is current, `mv` it aside and do a fresh `git clone` rather than trying to reconcile it.
  A successful CLI deploy's output includes an **"Edge function Logs:"** line — that line only appears when edge functions were actually processed. If a deploy's output doesn't have that line, edge function routing (the password gates) did NOT get updated by that deploy.
  The `[build] command = "rm -f CLAUDE.md"` in `netlify.toml` strips this file from what actually gets published, whether deploying via CLI or (if it's ever connected) git-based builds.
- **New environment variables may need a fresh deploy to take effect for Edge Functions** — observed 2026-08-18: adding `PW_TELLTALE` alone didn't immediately gate `/telltale`; running the CLI deploy again (with the var already saved) is what made it take effect. Don't assume a just-added `PW_*` var is live without redeploying.
- Local canonical clone: `~/Projects/crystal-langley-portfolio`. (`~/Downloads/crystallangleysite` is an older pre-SEO copy — do not deploy from it.)
- Note for Claude Code on the web: api.netlify.com (and crystallangley.com itself, and WebFetch to it) are blocked by that environment's egress allowlist — confirmed repeatedly. Deploys and live-site checks must happen from the Mac; a web session can only push to GitHub and has no way to verify the live site's actual state.

## Design system

- Palette: **Bone** — paper `#F6F4EF`, ink `#191712`, accent (oxblood) `#A8452F`, muted `#726C61`, dark band `#191712`/`#F1EDE4`.
- Type: Instrument Serif (display) + IBM Plex Mono (everything else), both self-hosted via `fonts.css`.
- Layout: sticky left rail (brand/nav/meta) + scrolling right feed, on every page.
- **No theme switcher.** It existed in an earlier version (Sienna/Slate/Bone/Noir swatches) and was deliberately removed — don't re-add it. Site is hard-set to Bone.

## Pages

- `index.html` — homepage. Sections in the scrolling feed: Hero → Work (`#work`) → **Motion** (`#motion`) → Capabilities → About (`#about`) → **Approach** (`#approach`) → **Services** (`#services`) → Contact (`#contact`) → footer.
  - Approach and Services are **inline sections on the homepage, not separate pages** — this was an explicit correction from the user. Do not re-split them into `/approach` or `/services` routes.
  - Motion sits right after Work/Selected Work and before Capabilities — moved there per explicit user instruction (2026-08-18). Don't move it back after Capabilities.
- `/audit` — standalone campaign landing page (UX/design system audit first, brand audit second; Calendly + Upwork CTAs, no site nav). Destination for ads and LinkedIn posts, deliberately NOT in the sitemap or homepage nav. Added 2026-07-26.
- Seven case studies, each its own folder with `index.html`: `/donblas`, `/sommsation`, `/strivers`, `/sequoia-benefits`, `/handzin`, `/stead`, `/telltale`. Shared visual template (sticky rail + feed), but `donblas/index.html` is fully self-contained (inline CSS/JS) while the other six link to a shared `case-study.css`/`case-study.js` copied into each folder.
  - `/telltale` (added 2026-08-18) holds the 12 Telltale video clips that used to live in a homepage `#telltale` section — that homepage section was removed once this page existed. Uses the same `.motion__item`/`.motion__group` component pattern as the homepage Motion section, with the CSS copied into a page-local `<style>` block (not shared, since no other case study needs it yet).

## Password protection

- Implemented as a **Netlify Edge Function**: `netlify/edge-functions/case-study-auth.ts`, wired to paths in `netlify.toml`. It serves a branded, **password-only gate page** (Bone palette, Instrument Serif + Plex Mono, single password field — NO username field; Crystal explicitly rejected the native Basic-Auth prompt because browsers autofill a username into it). Correct password → scoped 30-day cookie → straight through on revisits. The `_headers` Basic-Auth approach was removed — Netlify silently ignores it on this plan (verified with a draft deploy: 200, no `WWW-Authenticate`).
- Real passwords live in **Netlify site environment variables** (`PW_SOMMSATION`, `PW_STRIVERS`, `PW_SEQUOIA_BENEFITS`, `PW_DONBLAS`, `PW_TELLTALE`) — never in this public repo. The canonical password record is in Crystal's Obsidian vault: `Jobs & Freelance/00 - Foundations/Portfolio Page Passwords.md`. Rotating a password in Netlify instantly invalidates existing cookies (the cookie token is derived from the password).
- Gated: `/sommsation`, `/strivers`, `/sequoia-benefits`, `/donblas`, `/telltale` (the five tiles with PASSWORD badges). **`/handzin` and `/stead` are intentionally open** — matches the homepage UI and the Squarespace-era setup.
- `PW_TELLTALE` was set by Crystal directly in Netlify (not committed here, per the same convention as the other four).
- Gate pages return HTTP 401 (keeps them out of Google) with the form as the body. Fail-open by design: if an env var is missing the page serves openly rather than bricking a client review.

## Analytics (set up 2026-07-28)

- **GA4 property "crystallangley.com"** (measurement ID `G-689MH1TVSB`, stream id 15341385902) under Crystal's "Google Ads Account" Analytics account. The gtag snippet is in the `<head>` of every page, including gated case studies (a pageview of a gated page = someone who got past the password, which doubles as an "opened my case study" tracker).
- **Custom conversion events** fired by the snippet: `book_click` (Calendly links) and `upwork_click` (Upwork links), both registered as key events with a $1 default value. Do not create derived events with these names (double-counting).
- **Search Console**: URL-prefix property `https://www.crystallangley.com/`, verified via the GA tag, sitemap submitted, linked to the GA4 property (2026-07-28).
- The old "eclatevibes.myshopify.com" GA property in the same account is unused; safe to trash.

## SEO

- Added: per-page `<title>`, meta description, canonical URL, Open Graph + Twitter Card tags, JSON-LD `Person` schema on the homepage. `robots.txt` and `sitemap.xml` at repo root.
- **Sitemap lists the homepage plus `/handzin` and `/stead`** (the two open case studies). The five password-gated case studies (including `/telltale`) return 401 to Googlebot and can't be indexed — don't add them to the sitemap unless their password gate comes off.

## Known pending work

- Domain cutover in progress: `www.crystallangley.com` is set as the Netlify custom domain (apex as alias), but DNS still points at Squarespace until Crystal updates the records in her Squarespace Domains panel (nameservers are ns-cloud-*.googledomains.com, managed via Squarespace after the Google Domains migration). **The domain's MX records are Google Workspace email — never touch them during DNS edits.**
- GitHub → Netlify auto-deploy not yet connected (see Deploy).
- ~~Images hot-linked from `images.squarespace-cdn.com`~~ **Done 2026-07-24:** all 64 Squarespace-hosted images were downloaded and rehosted locally under `/assets/squarespace/`, and every HTML reference now points at the local copies (og:image/twitter:image use absolute `https://www.crystallangley.com/assets/squarespace/...` URLs for social scrapers). The Squarespace plan is no longer needed for images — but keep the old Squarespace site up a day or two for DNS stragglers while the domain cutover finishes.
- User has flagged the case-study/homepage copy as reading "stale" — a content rewrite pass is expected next, once the above is resolved.

## Source history

The original Claude Design handoff bundle (chat transcripts, early design explorations, uploaded case-study drafts) lives outside this repo and was deliberately **not** pushed here since this repo is public — don't assume that history is available in a fresh session unless the user provides it again.

## Automation

- **Weekly Site Report** — `.github/workflows/weekly-report.yml`, GitHub Action, runs every Monday 14:00 UTC forever (no session dependency, no expiry). Checks status codes on all public pages plus the 5 gated case studies (expects 401 on those — that's correct), spot-checks rehosted image liveness under `/assets/squarespace/`, runs a Lighthouse audit on the homepage, opens a GitHub Issue with results (triggers a GitHub email notification). Does not pull real GA4/Search Console numbers yet — those already exist and are viewable directly in GA4; wiring them into this report would need a GA4 Data API service-account secret, a separate task if wanted. Lighthouse scores are parsed from the action's own `manifest` output and written directly into the issue body — raw GitHub Actions job logs live on a rotating Azure Blob Storage URL that can't be fetched from network-restricted environments (like Claude Code on the web), so don't rely on 'check the logs' as a fallback; keep results inline in the issue instead.

## Motion (homepage) / Telltale Games (dedicated page)

- `#motion` — unnumbered section (kicker "—") on the homepage, right after Work/Selected Work and before Capabilities. A loose grid of 6 personal reel videos (motion graphics, game UI/UX demos, a B2B animation), deliberately not tied to any case study.
- The 12 Telltale-specific clips do **not** live on the homepage — they moved to the dedicated, password-gated `/telltale` case-study page (2026-08-18), grouped under 4 game headings (The Wolf Among Us, Poker Night, Game of Thrones, Tales from the Borderlands). The homepage's "Telltale Games" work tile now links straight to `/telltale` with a Password badge, same as the other four gated tiles.
- Both the homepage Motion grid and the `/telltale` page use the same `.motion__item` component: a click/keyboard-activated facade card (real YouTube thumbnail via `img.youtube.com/vi/{id}/hqdefault.jpg` where the source is YouTube; a plain ink-colored branded card for Vimeo, since Vimeo has no predictable direct thumbnail URL and fetching one via oEmbed needs a network call this environment can't reliably make). Nothing loads an iframe on page load, which matters given the homepage's Lighthouse Performance score is already only 76/100.
- **Playback is a lightbox overlay** (`#videoModal`, added 2026-08-18 — explicit user request: videos must never leave the site or open YouTube/Vimeo directly), not an inline swap inside the tile. Clicking/Enter/Space on a `.motion__item` calls `openVideoModal(provider, id, title)`, which injects the `<iframe>` into `.video-modal__box`, dims the page behind a backdrop, locks body scroll, and moves focus to the close (×) button. Closing (× button, backdrop click, or Escape) removes the iframe entirely — the video actually stops, it doesn't just hide. Same markup/JS pattern duplicated on the homepage and on `/telltale/index.html` (small enough that it wasn't worth promoting into the shared `case-study.js` for a single extra consumer).
- Video IDs/titles were provided directly by the user in chat, not sourced from any file — if more get added later, they'll come the same way.
