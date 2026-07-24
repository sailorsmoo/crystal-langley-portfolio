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

const COOKIE_DAYS = 30;

const displayName = (segment: string) =>
  segment
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");

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

const gatePage = (segment: string, showError: boolean) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${displayName(segment)} — password required · Standard.</title>
<link rel="stylesheet" href="/fonts.css">
<style>
  :root{--paper:#F6F4EF;--ink:#191712;--accent:#A8452F;--muted:#726C61;--rule:rgba(25,23,18,.16)}
  *{box-sizing:border-box;margin:0;padding:0}
  body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--paper);color:var(--ink);font-family:'IBM Plex Mono',Menlo,monospace;padding:24px}
  .card{width:100%;max-width:420px;border:1px solid var(--ink);padding:48px 40px;background:var(--paper)}
  .brand{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:28px}
  h1{font-family:'Instrument Serif',Georgia,serif;font-weight:400;font-size:34px;line-height:1.15;margin-bottom:10px}
  p{font-size:12.5px;line-height:1.6;color:var(--muted);margin-bottom:28px}
  .err{color:var(--accent);margin:-16px 0 20px;font-size:12px}
  input{width:100%;border:1px solid var(--rule);background:#fff;padding:13px 14px;font:inherit;font-size:14px;margin-bottom:12px;border-radius:0}
  input:focus{outline:none;border-color:var(--ink)}
  button{width:100%;border:1px solid var(--ink);background:var(--ink);color:var(--paper);padding:13px 14px;font:inherit;font-size:12px;letter-spacing:.14em;text-transform:uppercase;cursor:pointer}
  button:hover{background:var(--accent);border-color:var(--accent)}
  .back{display:block;margin-top:22px;font-size:11.5px;color:var(--muted);text-decoration:none}
  .back:hover{color:var(--ink)}
</style>
</head>
<body>
<main class="card">
  <div class="brand">Standard. — Crystal Langley</div>
  <h1>${displayName(segment)}</h1>
  <p>This case study is private. Enter the password you were given to view it.</p>
  ${showError ? '<div class="err">That password isn&rsquo;t right &mdash; try again.</div>' : ""}
  <form method="POST" autocomplete="off">
    <input type="password" name="password" placeholder="Password" required autofocus aria-label="Password">
    <button type="submit">View case study</button>
  </form>
  <a class="back" href="/#work">&larr; Back to crystallangley.com</a>
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
