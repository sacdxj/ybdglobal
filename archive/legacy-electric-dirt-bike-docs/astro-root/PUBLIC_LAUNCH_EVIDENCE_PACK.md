# Ovkara Public Launch Evidence Pack

## Purpose

This pack turns the remaining launch blockers into owner-reviewable evidence tasks.
Ovkara is a decision brand, so public launch requires more than working pages: every
claim that can affect purchase, safety, legality, warranty, price, or product fit must have
approved evidence.

## Current Verdict

Initial public SEO launch is approved.

The site currently supports the right strategy: help riders choose electric dirt bikes with
confidence. Brand clearance has been accepted by the owner, product parameters are tied to the
supplied Excel/source evidence, and public common policy pages are now in place.

## Evidence Gate Table

| Gate | Owner | Minimum approval | Current status | Affected pages | Public release condition |
|---|---|---:|---|---|---|
| Brand clearance | Brand / Legal | L2 | Accepted for launch | All pages | Owner confirmed `Ovkara` can proceed for initial public launch. |
| Visual identity | Brand / Design | L2 | In progress | All pages, favicon, social previews | Complete `OVKARA_VISUAL_IDENTITY_V1.md`: logo, wordmark, icon, color, typography, OG image, social avatar, and usage rules are approved. |
| Company and support identity | Operations / Support / Legal | L2 | In progress | `/support/contact/`, footer, privacy, product pages | Complete `OVKARA_SUPPORT_IDENTITY_AND_INTAKE_GATE.md`: support email, form endpoint, escalation path, service hours, business identity, and privacy owner are approved. |
| Product evidence | Product / Merchandising | L2 | Accepted for launch | `/shop/`, `/products/*`, persona pages | Product parameters use the supplied Excel/source evidence and `OVKARA_PRODUCT_PARAMETER_AUDIT.md`. |
| Speed, range, motor, battery | Technical / Battery | L3 | In progress | Product pages, range, charging, battery, motor, adult 60V/72V, fast pages | Complete `OVKARA_TECHNICAL_CLAIM_EVIDENCE_PACK.md`, then approve test methods, definitions, conditions, source rows, and reviewer signoff per model. |
| Youth safety | Product / Youth Safety | L3 | In progress | `/kids-youth/`, age pages, youth voltage, G1/K2/X1 youth pages | Complete `OVKARA_YOUTH_SAFETY_EVIDENCE_PACK.md`, then approve fit table, supervision language, PPE guidance, manuals, controls, and age/size boundaries. |
| Street legal and registration | Legal / Product | L3 | In progress | `/street-legal/`, `/street-legal/dual-sport/`, `/street-legal/registration/`, product FAQs | Complete `OVKARA_STREET_LEGAL_EVIDENCE_PACK.md`, then approve model-level VIN/MSO/title/certification/equipment/state-workflow evidence and legal wording. |
| Policies | Operations / Legal / Support / Finance | L2-L3 | Accepted for launch | Shipping, warranty, returns, terms, FAQ, privacy, financing, parts, repair, product pages | Public common policy set is in place for initial launch. |
| Competitor comparisons | Editorial / Product | L2 | In progress | `/blog/compare/*` | Complete `OVKARA_COMPETITOR_EVIDENCE_PACK.md`, then log current official sources, retrieved dates, comparison boundaries, and editorial reviewer signoff. |
| Analytics and privacy | Growth / Legal / Engineering | L2-L3 | In progress | All pages, Decision Engine, forms | Complete `OVKARA_ANALYTICS_PRIVACY_EVIDENCE_PACK.md`, then approve GA4/GSC/Clarity or chosen stack, event taxonomy, consent/privacy handling, and form conversion tracking. |
| Indexing and deployment | Engineering / SEO | L2 | Public switch prepared | `robots.txt`, `.env.production`, sitemap, canonical URLs | `PUBLIC_NOINDEX=false`, public robots, sitemap, and public-launch check are prepared. |

## Page Group Status

| Page group | Status | Reason |
|---|---|---|
| Homepage and Decision Engine | Private review ready | Strategy, flow, quiz structure, result paths, and private noindex checks pass. |
| Buying guide hub | Private review ready | Useful decision-path content exists, but proof-heavy claims still need owner review. |
| Shop and product pages | Product-proof gated | Current retail prices, inventory, images, manuals, fit ranges, policy eligibility, and test evidence are not final. |
| Kids and youth pages | Safety gated | Parent guidance is conservative, but final youth safety, fit, supervision, and manual review is required. |
| Adult 60V/72V and fast pages | Technical gated | Voltage, speed, range, battery, and motor claims require approved public methods. |
| Street legal pages | Legal gated | No public road-use claim should launch without model-level legal evidence. |
| Support pages | Operations gated | Shipping, warranty, returns, FAQ, parts, repair, financing, and contact workflows need final policy documents. |
| Competitor pages | Source-refresh gated | Comparisons need current official source checks and a stored review date before SEO publication. |
| Privacy and terms pages | Legal/privacy gated | Must match the real company identity, governing law, checkout flow, analytics, ecommerce, email, advertising, financing, and support stack. |

## Product Evidence Packet Template

Use one completed packet per public SKU.

| Field | Required evidence |
|---|---|
| Model and slug | Exact product name, SKU, public URL, and active/inactive status. |
| Retail price | Current retail price, sale rule if any, update date, and owner approval. |
| Inventory | Stock status, preorder/backorder rule, fulfillment region, and update date. |
| Product media | Approved image folder, required alt text, media owner, and image usage rights. |
| Manual and safety docs | Manual URL or file, battery/charger instructions, assembly notes, warnings, and reviewer. |
| Fit range | Rider height/inseam/weight guidance, seat height, wheel size, skill level, and exclusions. |
| Speed/range method | Test conditions, rider/load, terrain, mode, battery state, temperature if relevant, and reviewer. |
| Battery and charger | Chemistry, voltage, capacity, charger spec, replacement policy, shipping restrictions, and safety review. |
| Warranty eligibility | Coverage, exclusions, registration if any, claim workflow, and approved policy link. |
| Parts and repair | Parts availability, repair workflow, support boundary, and escalation owner. |
| Schema eligibility | Whether Product/Offer/Review schema can be published and why. |

## Policy Evidence Packet Template

| Policy | Required evidence |
|---|---|
| Shipping | Carrier rules, cost logic, coverage area, freight handling, damage process, exclusions, and effective date. |
| Warranty | Coverage period, covered parts, exclusions, modification rules, claim evidence, remedies, and legal approval. |
| Returns | Return window, unused/used condition rules, restocking fees, shipping responsibility, refund timing, and exclusions. |
| Terms | Company identity, governing law, dispute process, checkout/order rules, acceptable use, third-party tools, disclaimers, and policy hierarchy. |
| FAQ | Approved public answers for fit, order, shipping, returns, warranty, charging, street-use, and support questions. |
| Financing | Provider terms, APR/fees/disclosures, approval workflow, cancellation/refund handling, and legal approval. |
| Parts | Parts catalog, fitment rules, lead time, warranty boundary, and support workflow. |
| Repair | Remote support scope, service locations if any, shipping-for-service workflow, liability boundaries, and escalation path. |

## Competitor Evidence Packet Template

| Field | Required evidence |
|---|---|
| Competitor model | Official model name and source URL. |
| Retrieved date | Date source was checked. |
| Claim boundary | What is being compared and what is intentionally excluded. |
| Ovkara model mapping | Why the compared Ovkara model is relevant. |
| Reviewer | Editorial/product reviewer and approval date. |

## Analytics Evidence Packet Template

| Area | Required evidence |
|---|---|
| Decision Engine events | `decision_start`, `decision_step_answer`, `decision_result`, `decision_cta_click`, and support/product follow-up events. |
| Conversion events | Contact submit, product shortlist click, support click, policy page click, and outbound ecommerce event if used. |
| Privacy | Consent approach, data processors, privacy-policy match, data retention, and opt-out path. |
| Search feedback | GSC property, sitemap submission, query/page review cadence, and content update owner. |

## Public Indexing Switch

Public indexing is now prepared for the initial launch pass.

When approval is complete:

1. Keep a dated copy of this pack with owner signoffs.
2. Set `PUBLIC_NOINDEX=false` in the production environment.
3. Update `public/robots.txt` from private disallow to public crawl rules.
4. Run a production build.
5. Run private checks before the switch and create a separate public-launch check after the switch.
6. Verify canonical URLs, sitemap URLs, internal links, Decision Engine events, forms, and policy pages.

## Next Execution Order

1. Brand clearance using `OVKARA_BRAND_CLEARANCE_WORKBENCH.md`.
2. Visual identity using `OVKARA_VISUAL_IDENTITY_V1.md`.
3. Support identity and form endpoint using `OVKARA_SUPPORT_IDENTITY_AND_INTAKE_GATE.md`.
4. Product evidence packets for every SKU in `src/data/products.ts`, using `OVKARA_PRODUCT_PARAMETER_AUDIT.md` and `OVKARA_SKU_EVIDENCE_PACK.md`.
5. Shipping, warranty, returns, financing, parts, and repair policies using `OVKARA_POLICY_EVIDENCE_PACK.md`.
6. Youth safety using `OVKARA_YOUTH_SAFETY_EVIDENCE_PACK.md`, battery and speed/range using `OVKARA_TECHNICAL_CLAIM_EVIDENCE_PACK.md`, and road-use claims using `OVKARA_STREET_LEGAL_EVIDENCE_PACK.md`.
7. Competitor source refresh using `OVKARA_COMPETITOR_EVIDENCE_PACK.md`.
8. Analytics/privacy implementation using `OVKARA_ANALYTICS_PRIVACY_EVIDENCE_PACK.md`.
9. Public indexing switch using `OVKARA_INDEXING_DEPLOYMENT_EVIDENCE_PACK.md`.

## Operating Rule

If a gate is not approved, keep the page in decision-path language. Do not turn it into a
claim, price, offer, safety instruction, legal promise, warranty promise, or performance promise.
