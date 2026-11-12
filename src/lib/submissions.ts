/** Server-side validation and delivery. Never import this module into client UI. */
const EMAIL = /^[^\s@<>\r\n]+@[^\s@<>\r\n]+\.[^\s@<>\r\n]+$/;
const MAX_BODY = 65536;
const requests = new Map<string, { count: number; until: number }>();
const json = (error: string, status: number) => Response.json({ error }, { status });

export async function parseSubmission(request: Request): Promise<Record<string, unknown> | Response> {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin && origin !== process.env.SITE_ORIGIN) return json("Please submit this form from our website.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return json("Unsupported request format.", 415);
  if (Number(request.headers.get("content-length")) > MAX_BODY) return json("This submission is too large.", 413);
  const reader = request.body?.getReader();
  if (!reader) return json("Please complete the form.", 400);
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > MAX_BODY) { await reader.cancel(); return json("This submission is too large.", 413); }
    chunks.push(value);
  }
  try {
    const body: unknown = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!body || typeof body !== "object" || Array.isArray(body)) return json("Please complete the form.", 400);
    const data = body as Record<string, unknown>;
    if (data.website) return json("Unable to accept this submission.", 400);
    // Small local guard; configure a host-level distributed limit for production.
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
    const now = Date.now();
    for (const [key, value] of requests) if (value.until < now) requests.delete(key);
    const entry = requests.get(ip) ?? { count: 0, until: now + 15 * 60_000 };
    entry.count += 1; requests.set(ip, entry);
    if (entry.count > 10) return json("Too many requests. Please try again in 15 minutes.", 429);
    return data;
  } catch { return json("Please check your form and try again.", 400); }
}

export async function deliverEnquiry(data: Record<string, unknown>, transport: typeof fetch = fetch) {
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const name = typeof data.name === "string" ? data.name.trim() : "";
  if (!EMAIL.test(email) || email.length > 254 || !name || name.length > 160) return json("Please enter your name and a valid email address.", 400);
  if (!Array.isArray(data.fields) || !data.fields.length || data.fields.length > 350) return json("Please check the form details.", 400);
  const fields: { label: string; value: string }[] = [];
  for (const field of data.fields) {
    if (!field || typeof field.label !== "string" || typeof field.value !== "string" || field.label.length > 300 || field.value.length > 5000) return json("Please check the form details.", 400);
    fields.push({ label: field.label, value: field.value });
  }
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL;
  if (!apiKey || !from || !to) return json("Online enquiries are not available yet. Please call +971 4 564 6282 or email support@pelicanmigration.com.", 503);
  const id = typeof data.submissionId === "string" && /^[\w-]{16,80}$/.test(data.submissionId) ? data.submissionId : crypto.randomUUID();
  try {
    const response = await transport("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": `enquiry-${id}` },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `${data.kind === "eligibility" ? "Migration assessment" : "Website enquiry"}: ${name.replace(/[\r\n]/g, " ")}`, text: [`Name: ${name}`, `Email: ${email}`, `Page: ${typeof data.page === "string" ? data.page.slice(0, 500) : "Website"}`, "", ...fields.map((field) => `${field.label}: ${field.value}`)].join("\n") }),
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) return json("We could not deliver your enquiry. Please try again or contact our team directly.", 502);
    const accepted = await response.json();
    if (!accepted.id) return json("We could not confirm delivery. Please try again.", 502);
    return Response.json({ ok: true });
  } catch { return json("Unable to connect. Please try again or contact our team directly.", 502); }
}

export async function deliverNewsletter(data: Record<string, unknown>, transport: typeof fetch = fetch) {
  const email = typeof data.email === "string" ? data.email.trim() : "";
  if (!EMAIL.test(email) || email.length > 254 || data.consent !== true) return json("Please enter a valid email address and agree to receive the newsletter.", 400);
  const endpoint = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!endpoint) return json("Online subscriptions are not available yet. Please contact support@pelicanmigration.com.", 503);
  try {
    if (new URL(endpoint).protocol !== "https:") return json("Subscriptions are temporarily unavailable.", 503);
    const response = await transport(endpoint, { method: "POST", redirect: "error", headers: { "Content-Type": "application/json", ...(process.env.NEWSLETTER_WEBHOOK_SECRET ? { Authorization: `Bearer ${process.env.NEWSLETTER_WEBHOOK_SECRET}` } : {}) }, body: JSON.stringify({ email, consent: true, consentText: "I agree to receive the Pelican newsletter by email.", source: "pelican-website", requestedAt: new Date().toISOString() }), signal: AbortSignal.timeout(15_000) });
    if (!response.ok) return json("We could not process your subscription. Please try again.", 502);
    return Response.json({ ok: true });
  } catch { return json("Unable to connect. Please try again later.", 502); }
}
