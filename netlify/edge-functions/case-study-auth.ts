// Password gate for the private case studies.
// Serves a branded, password-ONLY page (no username field, no native browser
// auth prompt — replaced the earlier Basic-Auth version because browsers
// autofill a username into that prompt). On success it sets a scoped cookie
// so the visitor isn't re-asked for 30 days.
//
// Passwords live in Netlify environment variables (Site settings → Environment
// variables), never in this public repo. Each gated path reads PW_<FOLDER>,
// e.g. /sommsation → PW_SOMMSATION, /sequoia-benefits → PW_SEQUOIA_BENEFITS.
// If the env var for a path is missing, the page is served openly (fail-open
// so a config slip never bricks the portfolio during a client review).
// The cookie token is derived from the password, so rotating a password in
// Netlify instantly invalidates existing cookies for that case study.
//
// Optional expiry: set EXP_<FOLDER> to an ISO date-time (e.g. 2026-09-22T07:00:00Z)
// and after that moment the path serves a short "closed" page instead of the
// gate, whether or not the visitor holds a valid cookie. Delete or move the
// variable to reopen. Missing or unparseable → no expiry (fail-open, as above).
// Used for time-boxed client proposals (/gqi, added 2026-09-14).

const COOKIE_DAYS = 30;

// Per-path overrides for the gate copy. Anything not listed falls back to the
// case-study defaults below.
const OVERRIDES: Record<string, { name: string; kind: string; note: string }> = {
  gqi: {
    name: "Global Quantum Intelligence",
    kind: "Private proposal",
    note: "This proposal is private. Enter the password you were given, or ask me for one.",
  },
};

const displayName = (segment: string) =>
  OVERRIDES[segment]?.name ??
  segment
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");

const kindLabel = (segment: string) => OVERRIDES[segment]?.kind ?? "Private project";
const gateNote = (segment: string) =>
  OVERRIDES[segment]?.note ??
  "This case study is under NDA. Enter the password you were given, or ask me for one.";

function expired(segment: string): boolean {
  const raw = Netlify.env.get("EXP_" + segment.toUpperCase().replaceAll("-", "_"));
  if (!raw) return false;
  const t = Date.parse(raw);
  return Number.isFinite(t) && Date.now() > t;
}

async function cookieToken(segment: string, password: string): Promise<string> {
  const bytes = new TextEncoder().encode(`${segment}:${password}:standard-v1`);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function readCookie(request: Request, name: string): string | null {
  for (const part of (request.headers.get("cookie") ?? "").split(";")) {
    const eq = part.indexOf("=");
    if (eq > -1 && part.slice(0, eq).trim() === name) return part.slice(eq + 1).trim();
  }
  return null;
}

// The card below is the site's real password-gate component (.cx__box.ticked /
// .cx__top / .gt__note / .cx__f / .gt__err / .cx__go, all defined in mono.css)
// — the same markup mono.js used to build client-side before that flow was
// stripped in favor of this edge function. Rendering it server-side with the
// real classes, instead of a hand-rolled approximation, keeps this page
// pixel-identical to the rest of the site.
const gatePage = (segment: string, showError: boolean) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${displayName(segment)} — password required · Crystal Langley</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Archivo+Narrow:wght@700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/mono/mono.css">
<style>
  body{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
  .cx__box{width:100%;max-width:min(440px,100%)}
</style>
</head>
<body>
<main class="cx__box ticked">
  <div class="cx__top"><span class="lbl">${kindLabel(segment)}</span><a class="cx__x" href="/#work">Back</a></div>
  <h2>${displayName(segment)}</h2>
  <p class="gt__note">${gateNote(segment)}</p>
  <form method="POST" autocomplete="off">
    <div class="cx__f" style="margin-top:22px"><label><span>Password</span><input name="password" type="password" autocomplete="off" required autofocus></label></div>
    <div class="gt__err${showError ? " on" : ""}">That password did not work. Try again.</div>
    <div class="cx__go"><button type="submit">Unlock</button><div class="alt"><a href="mailto:yocrystallangley@gmail.com">Request access</a></div></div>
  </form>
</main>
</body>
</html>`;

// Served after EXP_<FOLDER> has passed. A door, not a wall: the reader is told
// the link has closed and how to get it reopened, nothing about when or why.
const closedPage = (segment: string) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${displayName(segment)} · Crystal Langley</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Archivo+Narrow:wght@700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/mono/mono.css">
<style>
  body{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
  .cx__box{width:100%;max-width:min(440px,100%)}
</style>
</head>
<body>
<main class="cx__box ticked">
  <div class="cx__top"><span class="lbl">${kindLabel(segment)}</span><a class="cx__x" href="/#work">Back</a></div>
  <h2>${displayName(segment)}</h2>
  <p class="gt__note">This link has closed. Email me and I will reopen it.</p>
  <div class="cx__go" style="margin-top:22px"><div class="alt"><a href="mailto:yocrystallangley@gmail.com">Email Crystal</a></div></div>
</main>
</body>
</html>`;

const htmlHeaders = {
  "content-type": "text/html; charset=utf-8",
  "cache-control": "no-store",
};

export default async (request: Request) => {
  const url = new URL(request.url);
  const segment = url.pathname.split("/")[1] ?? "";
  const expected = Netlify.env.get(
    "PW_" + segment.toUpperCase().replaceAll("-", "_"),
  );
  if (!expected) return;

  if (expired(segment)) {
    return new Response(closedPage(segment), { status: 404, headers: htmlHeaders });
  }

  const cookieName = "cs_auth_" + segment.replaceAll("-", "_");
  const validToken = await cookieToken(segment, expected);

  if (readCookie(request, cookieName) === validToken) return;

  if (request.method === "POST") {
    let given = "";
    try {
      given = String((await request.formData()).get("password") ?? "");
    } catch {
      // malformed body → fall through to the error page
    }
    if (given === expected) {
      return new Response(null, {
        status: 303,
        headers: {
          location: url.pathname,
          "set-cookie":
            `${cookieName}=${validToken}; Path=/${segment}; ` +
            `Max-Age=${COOKIE_DAYS * 86400}; HttpOnly; Secure; SameSite=Lax`,
          "cache-control": "no-store",
        },
      });
    }
    return new Response(gatePage(segment, true), { status: 401, headers: htmlHeaders });
  }

  return new Response(gatePage(segment, false), { status: 401, headers: htmlHeaders });
};
