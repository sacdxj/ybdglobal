# RFQ Deployment Checklist

Use this checklist before publishing RFQ changes to production.

## Environment Variables

Set these in Vercel or the deployment environment:

| Variable | Required | Purpose |
| --- | --- | --- |
| `PUBLIC_FORMSPREE_ID` | Yes | Formspree form id used by `/rfq`. |
| `PUBLIC_SITE_URL` | Yes | Canonical production URL used for Formspree redirect and structured data. |
| `PUBLIC_TURNSTILE_SITE_KEY` | Recommended | Cloudflare Turnstile site key. If empty, Turnstile is not rendered. |
| `PUBLIC_CONTACT_EMAIL` | Recommended | Public contact email shown in footer, contact page, and schema. |
| `PUBLIC_CONTACT_PHONE` | Recommended | Public phone/WhatsApp number shown in footer and contact page. |

## Formspree Checks

- Confirm the Formspree form id receives submissions from the production domain.
- Confirm file attachments are accepted for PDF, DXF, DWG, STEP, STP, IGES, IGS, JPG, and PNG.
- Keep Formspree spam protection and rate limits enabled.
- Confirm notification email routing and reply-to behavior.
- Test at least one RFQ with no file and one RFQ with an allowed drawing file.
- Confirm successful `/rfq` submissions redirect to `/rfq/thank-you` through the Formspree `_next` value.
- Confirm `PUBLIC_SITE_URL` is the production domain before testing `_next`.

## Turnstile Checks

- Add the production domain to the Cloudflare Turnstile widget.
- Set `PUBLIC_TURNSTILE_SITE_KEY` in production.
- Confirm the widget appears on `/rfq`.
- Confirm the form blocks submission if verification is not completed.

## Analytics Checks

The RFQ page emits a GA4 event on valid form submission attempt:

```text
event: generate_lead
event_category: RFQ
event_label: rfq_form_submit
```

Confirm this event appears in GA4 DebugView or Realtime after a test submission.
Configure `/rfq/thank-you` as a conversion confirmation page if page-view based tracking is used.

## UX Checks

- Confirm required fields show browser validation: name, company, email, product type, application, quantity, and project specifications.
- Confirm unsupported files show an inline error before submit.
- Confirm files over 10MB show an inline error before submit.
- Confirm mobile layout keeps form labels, selects, and buttons readable.
- Confirm `/contact` remains a light contact page with email, phone, WhatsApp, and a clear link to `/rfq`.

## Content Checks

- RFQ text should stay focused on drawing review, application, material, finish, quantity, validation, and production path.
- Avoid unsupported fixed claims for MOQ, lead time, certification, material grades, or current ratings.
- Use "confirmed after project review" or similar wording when the value depends on drawings and application requirements.
- Keep "24-48h" framed as a target initial review window for complete RFQs, not as a guaranteed quote, sample, or production lead time.
