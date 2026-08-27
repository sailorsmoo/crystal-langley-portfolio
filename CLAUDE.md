# Crystal Langley Portfolio

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
  The `[build] command = "rm -f CLAUDE.md"` in `netlify.toml` strips this file from what actually gets published. **Corrected 2026-08-27:** this runs against the real working directory even for CLI/draft deploys (an earlier comment here claiming CLI deploys use a "staging copy" was wrong) — every `netlify deploy` deletes `CLAUDE.md` from disk. Restore it immediately after with `git checkout HEAD -- CLAUDE.md`, and do that *before* making any further edits to this file in the same session, or the edits are lost along with the deleted file.
- **New environment variables may need a fresh deploy to take effect for Edge Functions** — observed 2026-08-18: adding `PW_TELLTALE` alone didn't immediately gate `/telltale`; running the CLI deploy again (with the var already saved) is what made it take effect. Don't assume a just-added `PW_*` var is live without redeploying.
- Local canonical clone: `~/Projects/crystal-langley-portfolio`. (`~/Downloads/crystallangleysite` is an older pre-SEO copy — do not deploy from it.)
- Note for Claude Code on the web: api.netlify.com (and crystallangley.com itself, and WebFetch to it) are blocked by that environment's egress allowlist — confirmed repeatedly. Deploys and live-site checks must happen from the Mac; a web session can only push to GitHub and has no way to verify the live site's actual state.

## Design system

- **"mono"** — a near-monochrome, image-first system that replaced Bone on 2026-08-27 (full redesign, see Source history). Tokens: paper `#FFFFFF`, ink `#0B0B0C`, mute `#77777D`, line `#E3E3E6`, fill `#F0F0F2`, accent (oxblood) `#5E1F28`.
- Type: **Archivo** (body/nav/labels) + **Archivo Narrow** (headings/stats, uppercase, 700 weight), loaded from Google Fonts per page (no self-hosting). Some case studies also load the project's real brand fonts for the design-system section only (e.g. Sommsation loads Playfair Display + Futura PT via `ds/fig-fonts.css`).
- Shared library lives at `/mono/` (`mono.css`, `mono.js`, `portrait.jpg`, plus `hero/`, `assets/`, `screens/`, `tt/`, `db/`, `sq/`, `ds/`, `ds2/`, `sds/` asset folders) and is referenced with root-absolute `/mono/...` paths from every page regardless of folder depth.
- Layout: full-width, image-dominant. Staggered homepage tile index, giant ghosted section words, registration-tick photo frames, hairline fact grids, numbered process beats. No sticky rail — that was Bone-specific and is gone.
- Motion: `IntersectionObserver`-driven `.reveal`/staggered-entrance classes in `mono.js`, disabled under `prefers-reduced-motion`.
- **No theme switcher.** Site is hard-set to mono, same as Bone was hard-set before it.

## Pages

- `index.html` — homepage. Hero (name/role/bio/stats) → **Selected work** (`#work`, 5 staggered tiles) → Approach → Services → Contact → footer. Approach and Services are inline `.band` sections, not separate routes.
- `/about` — **new standalone page** (2026-08-27). Previously About was a homepage `#about` anchor section; it's now its own route with a portrait and two bio paragraphs. Nothing links to a homepage `#about` anchor anymore.
- `/audit` — standalone campaign landing page, untouched by the mono redesign. Deliberately NOT in the sitemap or homepage nav.
- **Five** case studies use the new mono design, each its own folder with `index.html`: `/sommsation`, `/telltale`, `/strivers`, `/sequoia-benefits`, `/donblas` — same 9-section template (Title, Cover, Use Case, Design system, Creative direction, Application, Impact where real numbers exist, Process for gated projects, Next). Four of the five also ship a standardized design-system snapshot page co-located in the same folder: `sommsation/ds-snapshot.html`, `strivers/strivers-ds.html`, `sequoia-benefits/sequoia-ds.html`, `donblas/donblas-ds.html` (Telltale has no snapshot page — it has no digital-product design system to show).
- `/handzin` and `/stead` still run the **old Bone template** (`case-study.css`/`case-study.js`) — they were intentionally left out of the mono redesign scope and are not linked from the new homepage tiles. Not deleted; just orphaned from nav. Revisit if Crystal wants them ported too.
- `/telltale` holds project stills grouped under 7 title headings (The Walking Dead, Game of Thrones, Batman, The Wolf Among Us, Tales from the Borderlands, Minecraft Story Mode, Poker Night) using mono's `.tstills`/`.tsub` grid, not the old video-lightbox Motion component. The old homepage `#motion` reel grid and the Bone-era `.motion__item`/`#videoModal` lightbox system are gone from the new pages — Sommsation's two campaign films use mono's own in-page reel lightbox instead (`data-yt` in `mono.js`).

## Password protection

- Implemented as a **Netlify Edge Function**: `netlify/edge-functions/case-study-auth.ts`, wired to paths in `netlify.toml`. It serves a branded, **password-only gate page** (reskinned to mono tokens/Archivo on 2026-08-27 — mechanics unchanged, cosmetics only; single password field — NO username field; Crystal explicitly rejected the native Basic-Auth prompt because browsers autofill a username into it). Correct password → scoped 30-day cookie → straight through on revisits. The `_headers` Basic-Auth approach was removed — Netlify silently ignores it on this plan (verified with a draft deploy: 200, no `WWW-Authenticate`).
- The mono design's `mono.js` prototype originally shipped its own client-side password modal (redirecting with a `?p=` query string). That does **not** match how this edge function actually validates (cookie + POST, not a query string) and was deliberately stripped during the port — gated links are plain `<a>` tags now; the edge function alone handles the gate, exactly as it did under Bone.
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
- **Sitemap lists the homepage, `/about`, and `/handzin`/`/stead`** (the open pages). The five password-gated case studies (including `/telltale`) return 401 to Googlebot and can't be indexed — don't add them to the sitemap unless their password gate comes off.

## Known pending work

- Domain cutover in progress: `www.crystallangley.com` is set as the Netlify custom domain (apex as alias), but DNS still points at Squarespace until Crystal updates the records in her Squarespace Domains panel (nameservers are ns-cloud-*.googledomains.com, managed via Squarespace after the Google Domains migration). **The domain's MX records are Google Workspace email — never touch them during DNS edits.**
- GitHub → Netlify auto-deploy not yet connected (see Deploy).
- ~~Images hot-linked from `images.squarespace-cdn.com`~~ **Done 2026-07-24:** all 64 Squarespace-hosted images were downloaded and rehosted locally under `/assets/squarespace/`, and every HTML reference now points at the local copies (og:image/twitter:image use absolute `https://www.crystallangley.com/assets/squarespace/...` URLs for social scrapers). The Squarespace plan is no longer needed for images — but keep the old Squarespace site up a day or two for DNS stragglers while the domain cutover finishes.
- User has flagged the case-study/homepage copy as reading "stale" — a content rewrite pass is expected next, once the above is resolved.

## Source history

The original Claude Design handoff bundle (chat transcripts, early design explorations, uploaded case-study drafts) lives outside this repo and was deliberately **not** pushed here since this repo is public — don't assume that history is available in a fresh session unless the user provides it again.

**2026-08-27 — mono redesign.** Crystal requested a radical pivot from the Bone system toward a leaner, near-monochrome, image-first design (reference: anastasiyadrake.com), then supplied a full HTML/CSS design-handoff zip to implement directly. Ported into this repo: new homepage, new `/about` page, and the 5 gated case studies (Sommsation, Telltale, Strivers, Sequoia Benefits, Donblas) plus their design-system snapshot pages. `/handzin` and `/stead` were deliberately left on the old Bone template (out of scope) and unlinked from the new homepage tiles. During the port: oversized camera-original images and the two full-page Donblas screenshots were recompressed (the Donblas screenshots kept their exact original pixel dimensions — `donblas/index.html`'s auto-scroll device animation derives its keyframe percentages from those dimensions); asset/page links were rewritten from the handoff's flat relative paths to this repo's root-absolute `/mono/...` and per-project folder structure; the GA4 tag and the Sommsation/Telltale private badges (present in the live gate but missing from the handoff mockup — confirmed with Crystal to keep gating all five) were added; the handoff's incompatible client-side password modal was stripped from `mono.js` in favor of the existing edge function. Two Telltale GIFs (`mono/tt/twd-explore.gif` ~20MB, `mono/tt/twd-episodes.gif` ~4.8MB) shipped as-is — this Mac has no `ffmpeg`, so they couldn't be converted to video; worth revisiting if Telltale's Lighthouse score suffers.

## Automation

- **Weekly Site Report** — `.github/workflows/weekly-report.yml`, GitHub Action, runs every Monday 14:00 UTC forever (no session dependency, no expiry). Checks status codes on all public pages plus the 5 gated case studies (expects 401 on those — that's correct), spot-checks rehosted image liveness under `/assets/squarespace/`, runs a Lighthouse audit on the homepage, opens a GitHub Issue with results (triggers a GitHub email notification). Does not pull real GA4/Search Console numbers yet — those already exist and are viewable directly in GA4; wiring them into this report would need a GA4 Data API service-account secret, a separate task if wanted. Lighthouse scores are parsed from the action's own `manifest` output and written directly into the issue body — raw GitHub Actions job logs live on a rotating Azure Blob Storage URL that can't be fetched from network-restricted environments (like Claude Code on the web), so don't rely on 'check the logs' as a fallback; keep results inline in the issue instead.

## Video playback (mono pages)

- No homepage Motion grid and no `#videoModal` in the mono design — that whole Bone-era system is gone from `index.html` and `/telltale`. (It still exists, untouched, inside `/handzin` and `/stead`'s old Bone template if ever needed for reference.)
- The new pages use a single lightweight lightbox baked into `mono.js`: any `.reel[data-yt]` (YouTube) or `.reel[data-vy]` (Vidyard) element opens in an in-page `<dialog class="vid">`, firing a `reel_play` GA4 event. Currently only Sommsation uses it (Rebellion campaign `bBlMwaSqAjU`, brand film `S9L6cfhzP2g`); Telltale's `/telltale` page uses static stills grouped by game title, not video.
- Video IDs/titles are hardcoded directly in each page's HTML (see `sommsation/index.html`), not sourced from a data file.
