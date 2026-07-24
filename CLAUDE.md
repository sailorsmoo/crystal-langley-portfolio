# Crystal Langley Portfolio — Standard.

Static HTML/CSS/JS site for crystallangley.com. No build step, no framework.

## Deploy

- **GitHub → Netlify auto-deploy is live.** Repo: `sailorsmoo/crystal-langley-portfolio` (public), branch `main`. Netlify site is linked to this repo — any push to `main` deploys automatically. No manual dragging, no Netlify token/CLI needed for routine updates.
- `netlify.toml`: `publish = "."` (repo root is the publish dir, no build command).
- Known quirk: recent pushes were done by re-initializing a throwaway local git repo and force-pushing (not maintaining a persistent clone/history). Fine for now; worth switching to a normal clone+commit+push flow if this repo needs real git history later.
- **api.netlify.com is blocked** by this remote environment's network egress allowlist — direct Netlify API/CLI calls from Claude Code on the web fail with "host not in allowlist." The GitHub-auto-deploy path above exists specifically to route around that; it does not need Netlify network access at all.

## Design system

- Palette: **Bone** — paper `#F6F4EF`, ink `#191712`, accent (oxblood) `#A8452F`, muted `#726C61`, dark band `#191712`/`#F1EDE4`.
- Type: Instrument Serif (display) + IBM Plex Mono (everything else), both self-hosted via `fonts.css`.
- Layout: sticky left rail (brand/nav/meta) + scrolling right feed, on every page.
- **No theme switcher.** It existed in an earlier version (Sienna/Slate/Bone/Noir swatches) and was deliberately removed — don't re-add it. Site is hard-set to Bone.

## Pages

- `index.html` — homepage. Sections in the scrolling feed: Hero → Work (`#work`) → Capabilities → About (`#about`) → **Approach** (`#approach`) → **Services** (`#services`) → Contact (`#contact`) → footer.
  - Approach and Services are **inline sections on the homepage, not separate pages** — this was an explicit correction from the user. Do not re-split them into `/approach` or `/services` routes.
- Six case studies, each its own folder with `index.html`: `/donblas`, `/sommsation`, `/strivers`, `/sequoia-benefits`, `/handzin`, `/stead`. Shared visual template (sticky rail + feed), but `donblas/index.html` is fully self-contained (inline CSS/JS) while the other five link to a shared `case-study.css`/`case-study.js` copied into each folder.

## Password protection

- `_headers` at repo root — HTTP Basic-Auth per case-study path (Netlify reads this natively).
- **Currently placeholder passwords** (`CHANGE_ME_sommsation`, etc.) — not real. Waiting on the actual passwords from the user before this is production-ready. Do not treat the placeholders as real credentials or tell the user the case studies are actually protected until these are swapped.

## SEO

- Added: per-page `<title>`, meta description, canonical URL, Open Graph + Twitter Card tags, JSON-LD `Person` schema on the homepage. `robots.txt` and `sitemap.xml` at repo root.
- **Sitemap intentionally lists only the homepage.** The 6 case studies are Basic-Auth gated, so Googlebot gets a 401 on them regardless of meta tags — they can't be indexed while password-protected. Don't add them to the sitemap unless the password gate comes off.

## Known pending work (as of last session)

- Real case-study passwords not yet applied (see above).
- Domain cutover not done: `crystallangley.com` is registered and DNS-managed at **Squarespace** (not GitHub/Netlify-adjacent). Netlify custom-domain + Squarespace DNS records still need to be added — this is a live, customer-facing cutover, confirm timing with the user before touching DNS.
- **31 images across `/donblas`, `/sequoia-benefits`, `/strivers`, and the homepage work thumbnails are hot-linked from `images.squarespace-cdn.com`.** These keep working only while the user's Squarespace plan stays active. Rehost before that plan is downgraded/cancelled.
- User has flagged the case-study/homepage copy as reading "stale" — a content rewrite pass is expected next, once the above is resolved.

## Source history

The original Claude Design handoff bundle (chat transcripts, early design explorations, uploaded case-study drafts) lives outside this repo and was deliberately **not** pushed here since this repo is public — don't assume that history is available in a fresh session unless the user provides it again.
