# Enquiries, newsletter and video setup

The code is integrated; delivery requires the server settings below. Secrets must be supplied through `.env.local` in development or the hosting platform's environment settings. Never use `NEXT_PUBLIC_` for these keys. `.env.example` contains no credentials.

## Enquiries and eligibility: Resend

1. Verify the sending domain in Resend and create a sending API key.
2. Set `RESEND_API_KEY`, `ENQUIRY_FROM_EMAIL` (an address on that verified domain), and `ENQUIRY_TO_EMAIL` (Pelican's receiving inbox).
3. Set `SITE_ORIGIN` to the public website origin if the host runs behind a reverse proxy with a different internal origin.
4. Submit a controlled test from the deployed website and confirm receipt in the inbox and Resend dashboard.

`POST /api/enquiries` accepts `name`, `email`, `kind`, `page`, `submissionId`, and `fields: [{ label, value }]`. Public forms use this endpoint. The receiving address is server-controlled; user email is used only as Reply-To. Messages are plain text. A Resend message ID is required before the UI shows success. Retries reuse an idempotency key. Provider acceptance is not proof of inbox delivery; monitor Resend delivery/bounce events operationally.

The optional marketing preferences in the detailed assessment are included in its email for the team to process; they do not automatically enrol the applicant in a mailing list. Newsletter enrolment is a separate explicit request.

## Newsletter webhook

Set `NEWSLETTER_WEBHOOK_URL` to an HTTPS endpoint in the chosen mailing service, automation platform or future CMS backend. Set `NEWSLETTER_WEBHOOK_SECRET` if it expects a bearer token. The server posts:

```json
{
  "email": "subscriber@example.com",
  "consent": true,
  "consentText": "I agree to receive the Pelican newsletter by email.",
  "source": "pelican-website",
  "requestedAt": "ISO-8601 timestamp"
}
```

The receiving service must validate the token, store consent, handle repeat subscriptions idempotently by email, support unsubscribe, and send any double opt-in confirmation required by the chosen mailing workflow. Return a 2xx status only when the request is accepted; return non-2xx for failures. The website describes this as a subscription request, not completed double opt-in.

## Validation and operations

The API rejects invalid emails, unexpected bodies, excessive body/field sizes, cross-origin browser submissions and filled honeypots. Outbound requests have timeouts. Missing configuration returns 503 with contact details; failures never produce a success message. Form values are not written to logs or browser storage.

The in-process rate guard is supplemental and resets on restarts. Configure a distributed rate limit and abuse protection at the production host before exposing the endpoints at scale. The proxy must overwrite client-supplied forwarding headers. Retention, access and deletion of delivered enquiry emails are controlled by the receiving inbox and provider.

No live customer submissions or real subscription requests were sent during development. Delivery must be activated and tested after credentials are supplied.

## Videos and Sanity CMS

- `src/content/videos.ts`: verified testimonial video IDs from Pelican's existing testimonial page.
- `video` content blocks accept optional `videoId` (a YouTube ID). Without a source, the button opens a useful link to Pelican's official video channel instead of claiming that a guide is available.
- `src/content/blogs.ts` and `additional-articles.ts`: typed article data.
- `src/content/pages/*.ts`: service-page data consumed by the shared renderer.
- `src/content/legal.json`: existing published company policies; cookie information describes this implementation.

Sanity now manages approvals, blog content, videos, testimonials and independent per-page FAQ/guide/testimonial settings. See [Sanity setup and editing](SANITY.md) for editor access, publishing webhooks and import instructions. Submission credentials remain server-only and separate from the CMS.

The two new citizenship pages use a neutral existing world-map asset rather than a photograph of a different country. Their official programme links are included on each page. The new articles have further-reading links. Existing legal policies were ported from Pelican's live site; the privacy page additionally explains enquiry, subscription and video processing in this implementation.
