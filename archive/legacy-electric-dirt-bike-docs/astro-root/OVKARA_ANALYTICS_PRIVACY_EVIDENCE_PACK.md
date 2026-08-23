# Ovkara Analytics & Privacy Evidence Pack

## Purpose

Ovkara's Decision Engine should become a learning system, but analytics must not outrun privacy,
consent, support identity, or legal review. This pack controls event tracking, form conversion,
Search Console feedback, analytics processors, consent handling, retention, and privacy-policy
alignment before public launch.

## Current Verdict

Decision Engine event framework: Ready for private review.

Analytics/privacy public launch: Blocked.

The site already pushes Decision Engine events to `window.dataLayer`, and the private launch
checks verify core Decision Engine analytics snippets. The public launch remains blocked until
the actual analytics stack, consent approach, privacy-policy wording, form endpoint, processor
list, data retention, and conversion taxonomy are approved.

## Current Implementation Status

| Area | Current status | Current evidence | Public blocker | Required approval |
|---|---|---|---|---|
| Decision Engine events | In progress | `decision_engine_start`, `decision_engine_step_answer`, `decision_engine_result_view`, `decision_engine_result_cta_click`, `decision_engine_start_over` push to `dataLayer` | GA4/GTM mapping, parameter naming, consent mode, QA report | Growth + Engineering |
| Form conversion | Open | Contact page is a routing specification; CSP allows Formspree | Live endpoint, consent checkbox, spam protection, ticket ID, conversion event | Support + Legal + Engineering |
| Search feedback | Open | Sitemap builds; private noindex is active | GSC property, sitemap submission, query/page review cadence, indexing switch | SEO + Engineering |
| Session behavior | Open | CSP allows Cloudflare Insights and GTM domains, but no final stack is approved | Chosen tool, data minimization, consent/legal review | Growth + Legal |
| Privacy policy | Framework only | `/privacy/` says final stack still required | Processor list, company identity, rights workflow, retention, opt-out path | Legal + Operations |
| Consent handling | Open | No visible public consent workflow yet | Consent strategy by region/tool, cookie categories, opt-out mechanism | Legal + Engineering |
| Ecommerce/payment data | Blocked | No checkout stack approved | Ecommerce platform, payment provider, financing provider, data flow | Legal + Operations |
| Support data | Open | Contact page warns against sensitive info and defines routing needs | Form processor, attachment limits, ticketing, retention, escalation | Support + Legal |
| CSP alignment | In progress | CSP currently references Formspree, Google Tag Manager, Cloudflare domains | Match CSP to the actually approved stack; remove unused processors | Engineering + Legal |

## Event Taxonomy

### Decision Engine Events

| Event | Current source | Required parameters | Public status |
|---|---|---|---|
| `decision_engine_start` | `DecisionEngine.astro` | Page path, session consent state, engine version | Needs mapping approval |
| `decision_engine_step_answer` | `DecisionEngine.astro` | Step number, answer key, answer value, answer label | Needs PII review and GA4/GTM mapping |
| `decision_engine_result_view` | `DecisionEngine.astro` | Rider type, use case, primary concern, buyer stage, result path, confidence status | Needs parameter naming approval |
| `decision_engine_result_cta_click` | `DecisionEngine.astro` | CTA label, destination URL, result path when available | Needs result-path persistence or accepted limitation |
| `decision_engine_start_over` | `DecisionEngine.astro` | Page path and prior result path when available | Optional; needs mapping approval |

### Required Conversion Events

| Event | Trigger | Current status |
|---|---|---|
| `support_contact_click` | Click to `/support/contact/` from product, support, Decision Engine, or guide pages | Not implemented |
| `product_shortlist_click` | Click from collection/guide to product detail | Not implemented |
| `policy_page_view` | View shipping, warranty, returns, financing, parts, repair, privacy | Not implemented |
| `contact_form_start` | First interaction with live contact form | Blocked by missing endpoint |
| `contact_form_submit` | Successful support/request submission | Blocked by missing endpoint |
| `quote_request_submit` | Product quote request submit | Blocked by missing endpoint and support workflow |
| `dealer_inquiry_submit` | Dealer/wholesale inquiry submit | Blocked by missing program and endpoint |
| `privacy_link_click` | Click privacy link from form/consent UI | Not implemented |

## Privacy Data Classification

| Data category | Examples | Rule |
|---|---|---|
| Decision answers | Rider type, use case, concern, stage | Treat as behavioral/product-interest data; avoid names, email, phone, exact age, medical, or government ID fields. |
| Contact data | Name, email, phone if used, state, ZIP, request type | Collect only through approved form with privacy notice and consent/acknowledgement. |
| Product/support data | Model, serial number, order number, photos/video, symptom, maintenance history | Use support workflow and retention policy; restrict sensitive uploads until secure channel exists. |
| Commerce data | Orders, payment, financing, shipping | Blocked until ecommerce/payment/financing providers and privacy wording are approved. |
| Analytics data | Page views, events, device/browser, referrer, approximate location | Use only after analytics processor, consent approach, and privacy policy match. |
| Advertising data | Pixels, audiences, campaign IDs | Blocked until legal and consent review. |

## Processor and Tool Approval Matrix

| Tool/provider | Current project signal | Public status | Required approval |
|---|---|---|---|
| Google Tag Manager | CSP allows `www.googletagmanager.com`; `dataLayer` events exist | Not approved | GTM container ID, consent mode, tag inventory, QA report |
| GA4 | Mentioned as target stack in launch evidence | Not approved | Property ID, event mapping, retention settings, data sharing settings |
| Google Search Console | Mentioned as feedback source | Not approved | Property verification, sitemap submission, review cadence |
| Microsoft Clarity | Mentioned as possible stack | Not approved | Legal/consent approval and masking settings |
| Cloudflare Web Analytics/Turnstile | CSP allows Cloudflare domains | Not approved | Decide whether analytics, bot protection, or both are used |
| Formspree | CSP allows Formspree and contact page references live endpoint need | Not approved | Endpoint, fields, spam protection, consent copy, DPA/privacy review |
| Ecommerce platform | Privacy page says ecommerce may be used | Blocked | Platform, checkout data flow, privacy wording |
| Payment provider | Privacy page says payment may be used | Blocked | Provider, PCI boundary, privacy wording |
| Financing provider | Financing/privacy pages mention financing | Blocked | Provider terms, credit/finance disclosures, privacy wording |
| Email/support tool | Privacy/contact pages imply support communication | Not approved | Tool, retention, access controls, sender identity |

## Privacy Page Requirements

Before public indexing, `/privacy/` must state:

- Legal company identity and privacy contact.
- Categories of information collected.
- Exact purposes of use.
- Actual processors/providers used.
- Analytics and advertising tools, if any.
- Form, support, ecommerce, payment, financing, shipping, and email data flows.
- Consent/opt-out path.
- Data retention or retention criteria.
- Access/correction/deletion/request workflow.
- Effective date and last reviewed date.
- Regional rights wording approved by legal.

## Consent Requirements

The approved consent approach must define:

- Whether analytics run before or after consent.
- Which tools are essential vs analytics vs advertising.
- Cookie/local-storage categories.
- Consent banner or notice behavior.
- Consent mode mapping if GTM/GA4 is used.
- How a visitor can withdraw or change choices.
- How consent state affects Decision Engine events and form conversions.

## Dashboard Requirements

The analytics/privacy dashboard should track:

| Field | Requirement |
|---|---|
| Tool | GA4, GTM, GSC, Clarity, Formspree, Cloudflare, ecommerce, payment, financing, email/support. |
| Status | Proposed, approved, implemented, QA passed, public, or retired. |
| Owner | Growth, legal, support, operations, or engineering owner. |
| Data collected | Categories and examples. |
| Consent category | Essential, analytics, advertising, support, commerce, or finance. |
| Privacy policy match | Yes/no and link to section. |
| Retention | Tool-specific retention setting or policy. |
| Events | Event names and parameters. |
| QA evidence | Test URL, screenshot/log, date, reviewer. |
| Launch status | Private review, blocked, approved, or public. |

## Release Rules

Do not publicly launch analytics/privacy features until:

1. The actual processor list is approved.
2. Privacy page matches the real stack.
3. Consent approach is approved and implemented.
4. Decision Engine event mapping is QA tested.
5. Contact/form conversion events are tied to a live endpoint and consent/privacy notice.
6. GSC property and sitemap workflow are ready for the indexing switch.
7. CSP matches the approved stack and does not include unused third-party domains.
8. Public launch evidence pack is updated with reviewer signoff.

## Next Actions

1. Decide the initial analytics stack: GTM + GA4 + GSC only, or include Clarity/Cloudflare/Formspree.
2. Create a GA4/GTM event map for Decision Engine and support conversions.
3. Approve the support form endpoint and consent copy.
4. Rewrite `/privacy/` from placeholder framework to actual-stack policy.
5. Align CSP with the approved providers.
6. Add QA checks for required analytics snippets only after IDs and consent behavior are approved.

