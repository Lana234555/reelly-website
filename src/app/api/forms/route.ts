import { NextResponse } from "next/server";

// Receives submissions from the site's forms and forwards them to Zapier.
//
// Env vars (set in Vercel → Project → Settings → Environment Variables):
//   ZAPIER_WEBHOOK_URL               default "Catch Hook" URL for every form
//   ZAPIER_WEBHOOK_<FORM_NAME>       optional per-form URL; FORM_NAME is the form's
//                                    data-name in upper case with non-letters → "_",
//                                    e.g. ZAPIER_WEBHOOK_CONTACT_FORM
const envKey = (form: string) =>
  "ZAPIER_WEBHOOK_" + form.toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_|_$/g, "");

export async function POST(req: Request) {
  let body: { form?: string; page?: string; fields?: Record<string, string>; hp?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
  const form = (body.form || "Unnamed form").slice(0, 100);
  // Honeypot: real people never fill this hidden field.
  if (body.hp) return NextResponse.json({ ok: true });

  const url = process.env[envKey(form)] || process.env.ZAPIER_WEBHOOK_URL;
  if (!url) {
    console.error(`No Zapier webhook configured for form "${form}" (${envKey(form)} / ZAPIER_WEBHOOK_URL)`);
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const payload = {
    form_name: form,
    page_url: body.page ?? "",
    submitted_at: new Date().toISOString(),
    ...Object.fromEntries(Object.entries(body.fields ?? {}).map(([k, v]) => [k, String(v).slice(0, 5000)])),
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error(`Zapier responded ${res.status} for form "${form}"`);
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
