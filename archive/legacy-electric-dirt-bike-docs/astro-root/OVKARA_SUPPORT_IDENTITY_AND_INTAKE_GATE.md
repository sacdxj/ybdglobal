# Ovkara Support Identity And Intake Gate

## Purpose

This gate defines what must be true before Ovkara publishes a live customer support path.

Ovkara is a decision brand. Support is not a secondary page. It is part of the product promise:
buyers should be able to confirm fit, shipping, warranty, parts, repair, and legal-use questions
before they are pushed toward checkout.

## Current Status

```text
Support routing copy: Ready for private review
Public support identity: Open
Live form endpoint: Open
Ticket workflow: Open
Privacy/consent workflow: Open
Public launch: Blocked
```

## Required Public Support Identity

| Field | Required before launch | Notes |
|---|---|---|
| Support email | Approved customer-facing email | Prefer a domain email such as `support@ovkara.com` after DNS/email setup. |
| Sender email | Approved outbound email | Needed for ticket replies, order updates, and support confirmations. |
| Business entity | Legal company name | Must match privacy, payment, warranty, financing, and policy documents. |
| Business address | Approved public or registered address | Use legal/operations guidance for what can be public. |
| Support hours | Public response window | Include timezone and holiday handling. |
| Response target | Expected first human response | Avoid a promise until team capacity is real. |
| Escalation owner | Named internal owner or queue | Required for safety, battery, warranty, and legal-use issues. |
| Accessibility route | Alternative contact route | Needed for buyers who cannot use the web form. |

## Intake Endpoint Options

Do not publish a live form until one endpoint is selected and tested.

| Option | Fit | Requirements |
|---|---|---|
| Formspree | Fast private-beta intake | Endpoint ID, spam controls, redirect/thank-you state, email routing, privacy review. |
| Native serverless function | Best long-term control | Hosting target, environment variables, email provider, validation, rate limit, logs. |
| Helpdesk provider | Best support workflow | Zendesk/Gorgias/Freshdesk/HubSpot setup, ticket fields, SLA, privacy processor review. |
| Ecommerce platform form | Best if checkout platform owns support | Shopify or platform-native customer/order mapping, spam controls, tags, privacy match. |

The current CSP allows `https://formspree.io`, but that does not mean Formspree is approved. It
only means the site can technically support that option.

## Required Form Fields

| Field | Type | Required | Reason |
|---|---|---:|---|
| Request type | Select | Yes | Routes pre-sale, order, shipping, warranty, parts, repair, dealer, or legal-use questions. |
| Buyer stage | Select | Yes | Separates research, shortlist, order, ownership, claim, and dealer inquiries. |
| Name | Text | Yes | Human reply context. |
| Email | Email | Yes | Reply path. |
| Phone | Text | Optional | Use only if approved in privacy policy. |
| State / ZIP | Text | Conditional | Needed for shipping, dealer, street-legal, and service routing. |
| Rider type | Select | Conditional | Adult, teen, child, ranch/farm, dealer/wholesale. |
| Model of interest | Select/text | Conditional | Required for product, parts, repair, warranty, and shipping. |
| Order number | Text | Conditional | Required for order, shipping, warranty, return, or repair claim. |
| Serial number | Text | Conditional | Required for repair, warranty, parts, and battery cases. |
| Question / issue | Textarea | Yes | Main support content. |
| Safety stop flag | Checkbox/select | Conditional | Required for battery, brake, throttle, charger, crash, or structural issues. |
| Attachment consent | Checkbox | Conditional | Required before photos/video are requested. |
| Privacy consent | Checkbox | Yes | Must link to the approved privacy policy. |

## Routing Rules

| Request type | First owner | Required escalation |
|---|---|---|
| Product selection | Support / Sales | Product if fit, youth, or performance claim is unclear. |
| Shipping | Operations | Support if delivery damage, assembly, or missing parts are involved. |
| Warranty / return | Warranty / Legal | Legal for refund, liability, modification, or disputed claim issues. |
| Parts | Support / Technical | Product for compatibility uncertainty. |
| Repair / safety | Technical / Safety | Immediate escalation for battery, charger, brake, throttle, crash, fire, or injury. |
| Street legal / registration | Legal / Product | No public approval without model-level documents. |
| Dealer / wholesale | Business development | Operations for territory, service, and inventory commitments. |

## Confirmation And Ticket Requirements

Every submitted request should return:

- Confirmation state visible on the page.
- Ticket ID or reference ID.
- Copy of submitted non-sensitive information.
- Expected response window.
- Emergency boundary.
- Link to privacy policy.
- Safety stop reminder when battery, charger, brakes, throttle, crash, or structural issues are
  selected.

## Privacy Requirements

Before launch, confirm:

- Which processor stores form submissions.
- Whether attachments are allowed.
- Whether phone numbers are collected.
- How long tickets and attachments are retained.
- How requests can be deleted.
- Whether analytics records form starts, submissions, or errors.
- Whether any data crosses into advertising audiences.

Do not request government IDs, full payment card information, sensitive medical information, or
unrelated personal data through the general support form.

## Analytics Events

| Event | Trigger |
|---|---|
| `support_form_view` | Contact form appears. |
| `support_form_start` | First field is completed. |
| `support_request_type_select` | Request type is selected. |
| `support_form_submit` | Valid request is submitted. |
| `support_form_error` | Validation or endpoint failure occurs. |
| `support_ticket_created` | Endpoint returns a ticket/reference ID. |
| `support_safety_escalation` | Safety stop flag or high-risk request type is selected. |

## Contact Page Launch Requirements

The `/support/contact/` page can move from private review to public support only when:

1. Public support identity is approved.
2. Endpoint is selected and tested.
3. Spam/rate-limit controls are active.
4. Privacy consent and policy copy are approved.
5. Confirmation/ticket state works.
6. Safety escalation path is defined.
7. Analytics events are tested or intentionally deferred.
8. Support owner confirms the response workflow.

## Current Gate Decision

```text
Keep support pages in private-review routing mode.
Do not publish a live support promise, email, phone, response SLA, warranty claim workflow, or
form endpoint until this gate is complete.
```

