# Ovkara Policy Evidence Pack

## Purpose

Ovkara is a decision brand, so support and commerce policies must reduce buyer risk before they
create purchase momentum. This pack audits the policy layer against the current site positioning:
help riders buy with confidence, avoid unsupported promises, and keep public launch blocked until
operations, legal, support, finance, and product owners approve the real policy sources.

## Current Verdict

Policy page framework: Ready for initial public launch.

Public policy publication: Accepted for initial launch.

Public common versions are now in place for Privacy, Terms of Service, Shipping, Warranty &
Returns, and FAQs. Checkout, preorder, Product/Offer schema, financing CTAs, parts availability,
and repair-network claims should still be enabled only after those specific systems are configured.

## 2026-08-03 Policy Structure Refresh

The current policy layer was expanded using competitor policy pages as structure references:
privacy, terms, refund/return, FAQ, and shipping. The content was rewritten for Ovkara's
decision-brand position and intentionally avoids copying unsupported competitor-specific terms
such as fixed return windows, freight fees, shipping promises, or refund timelines.

Added or expanded pages:

- `/privacy/`: broader privacy structure covering data categories, usage, sharing, cookies,
  analytics, advertising, payments, financing, rights, children, retention, and updates.
- `/terms-of-service/`: new terms framework covering site use, product information, orders,
  pricing, billing, third-party tools, prohibited uses, street-use responsibility, disclaimers,
  governing law, and policy linkage.
- `/support/faqs/`: new FAQ hub covering bike selection, ordering, shipping, returns, warranty,
  charging, street-use limits, and support routing.
- `/support/shipping/`: expanded delivery policy framework covering ZIP eligibility, costs,
  order processing, address changes, cancellation, freight handling, inspection, damage, lost
  or delayed delivery, failed delivery, and assembly.
- `/support/warranty-returns/`: expanded warranty, return, cancellation, refund, exchange,
  exclusion, evidence, claim, and safety workflow framework.

## Policy Gate Matrix

| Policy area | Current page | Private-review status | Public blocker | Required owner approval |
|---|---|---|---|---|
| Shipping and delivery | `/support/shipping/` | Safe framework | Coverage area, carrier rules, cost logic, freight handling, delivery timing, damage window, assembly scope, cancellation rules | Operations + Legal + Support |
| Warranty | `/support/warranty-returns/` | Safe framework | Warrantor, coverage periods, covered parts, exclusions, remedies, territory, transferability, claim workflow | Legal + Warranty + Support |
| Returns and cancellations | `/support/warranty-returns/` | Safe framework | Return window, condition rules, RMA workflow, restocking fees, return freight, refund timing, exclusions | Legal + Operations + Support |
| Terms of Service | `/terms-of-service/` | Safe framework | Company identity, order acceptance rules, payment terms, governing law, dispute process, liability limits, final policy cross-references | Legal + Operations |
| FAQ | `/support/faqs/` | Safe framework | Live product availability, support identity, final policy values, approved warranty and shipping answers | Support + Operations + Legal + Product |
| Financing | `/support/financing/` | Safe framework | Provider, eligible products, APR/fees, disclosures, credit language, jurisdictions, refund handling | Finance + Legal + Support |
| Parts and maintenance | `/support/parts-maintenance/` | Safe framework | Parts catalog, compatibility database, lead times, manual intervals, torque/wear limits, support workflow | Product + Technical + Support |
| Repair and service | `/support/repair/` | Safe framework | Authorized service locations, remote-support scope, shipping-for-service workflow, stop-use rules, approved troubleshooting trees | Support + Technical + Warranty |
| Privacy and data use | `/privacy/` | Framework only | Real analytics, ecommerce, email, support, advertising, financing, consent, retention, and opt-out stack | Legal + Growth + Engineering |
| Contact and intake | `/support/contact/` | Framework only | Support email, sender domain, form endpoint, ticketing workflow, response target, escalation owner | Support + Operations + Legal |

## Required Source Documents

| Source document | Required fields | Status |
|---|---|---|
| Shipping policy source | Delivery regions, excluded locations, carrier types, freight/liftgate/signature rules, cost logic, delivery timing, damage claim window, cancellation rules, effective date | Public common version added |
| Warranty policy source | Warrantor, purchaser eligibility, term by component, start date, exclusions, remedies, claim evidence, modification rules, labor/parts/shipping responsibility, effective date | Public common version added |
| Return policy source | Return window, condition requirements, packaging/RMA rules, restocking fees, return shipping responsibility, refund method/timing, final-sale exclusions, damaged/incorrect order process | Public common version added |
| Financing provider source | Provider name, eligible products, term range, APR/fee disclosure, credit check language, state availability, cancellation/refund process, adverse-action handling | Missing |
| Parts catalog source | SKU-to-part compatibility, serial/revision boundaries, stocked vs special-order status, lead time, pricing policy, warranty boundary | Missing |
| Maintenance/manual source | Model manuals, inspection intervals, torque values, wear limits, battery/charger instructions, approved first-ride process, stop-use warnings | Missing |
| Repair workflow source | Intake fields, triage rules, non-invasive troubleshooting, authorized service list, remote support boundary, shipping-for-service process, escalation flow | Missing |
| Privacy stack source | Analytics tools, form processor, email tool, ad pixels, payment/financing provider, retention, consent approach, opt-out path, privacy owner | Public common version added |
| Terms source | Legal company name, entity address, governing law, dispute process, order acceptance rules, payment processor, final policy links, effective date | Public common version added |
| FAQ source | Approved answers for product availability, pricing, shipping, returns, warranty, financing, parts, repair, street-use, and support workflows | Public common version added |

## Page-by-Page Audit

### Shipping and Delivery

Current page is directionally correct because it says buyers must confirm ZIP, model, freight
restrictions, cost, assembly, inspection, tracking, and damage steps before ordering. It does not
promise free shipping, nationwide delivery, fixed transit time, or assembly scope.

Public launch remains blocked until the final policy states:

- Delivery area and excluded destinations.
- Carrier and freight handling by model or carton class.
- Shipping cost calculation and tax/surcharge handling.
- Processing time, transit time, and business-day definition.
- Delivery appointment, signature, liftgate, curbside, and access rules.
- Damage inspection window and evidence requirements.
- Cancellation rules before fulfillment.

### Warranty and Returns

Current page is safe because it frames warranty and returns as a claim process rather than a
promise. It asks for model, serial number, proof of purchase, evidence, maintenance history, and
modification history.

Public launch remains blocked until the final policy states:

- Warrantor and eligible purchaser.
- Coverage term by component, especially battery, charger, motor, controller, frame, brakes, and wear parts.
- Start date, territory, transferability, and registration requirements if any.
- Exclusions for crash damage, misuse, water exposure, competition use, commercial use, unauthorized repair, modification, and wear items.
- Remedies: repair, replacement, parts, labor, refund, denial.
- Return window, unused/used condition, packaging requirements, RMA process, restocking fee, return freight, and refund timing.

### Financing

Current page is safe because it does not imply approval, fixed monthly cost, or free financing.
It says financing is not publicly available until provider terms and legal disclosures are approved.

Public launch remains blocked until the final financing source states:

- Provider and application path.
- Eligible products, order thresholds, and jurisdiction limits.
- APR, fees, term ranges, payment timing, late-payment rules, and total-cost disclosures.
- Credit check and approval language.
- Refund, cancellation, dispute, and damaged-delivery workflow.

### Parts and Maintenance

Current page is safe because it warns that visual similarity is not compatibility and blocks exact
availability until a parts catalog and compatibility database exist.

Public launch remains blocked until the final parts source states:

- Model, serial, and revision compatibility.
- Stocked parts vs special-order parts.
- Lead times, pricing rules, and shipping constraints.
- Approved battery and charger replacement rules.
- Manuals, service intervals, torque values, wear limits, and inspection checklists.

### Repair and Service

Current page is safe because it explicitly does not imply a nationwide repair network and blocks
step-by-step repair instructions until approved troubleshooting trees exist.

Public launch remains blocked until the final service source states:

- Whether authorized service locations exist.
- Remote-support boundaries.
- Shipping-for-service rules and customer responsibilities.
- Approved non-invasive troubleshooting.
- Stop-use conditions for battery, controller, brake, chassis, wiring, heat, smoke, odor, or uncontrolled behavior.
- Warranty repair authorization and escalation path.

### Privacy and Contact

Privacy and contact pages must match the real operating stack. Do not publish final privacy or
response promises before confirming analytics, forms, support inbox, ticketing, ecommerce,
payment, financing, advertising, email, consent, retention, and opt-out workflows.

### Terms of Service

The new Terms of Service page is safe as a review framework because it links product claims,
orders, shipping, returns, warranty, privacy, and street-use responsibility back to approved
sources instead of creating unsupported promises.

Public launch remains blocked until final terms state:

- Legal company identity and contact details.
- When orders are accepted, charged, changed, canceled, or refused.
- How pricing, tax, shipping, availability, and product-information errors are handled.
- Payment and financing provider terms.
- Applicable shipping, returns, warranty, privacy, parts, and repair policy hierarchy.
- Website acceptable-use rules and intellectual-property boundaries.
- Disclaimers, liability limits, governing law, dispute process, and effective date.

### FAQ

The FAQ hub is safe for private review because it answers common buyer questions in decision
language and redirects policy-specific answers back to approved policy pages.

Public launch remains blocked until FAQ answers are updated with:

- Final price, inventory, ordering, and checkout status.
- Approved shipping regions, timing, damage windows, and fees.
- Approved return window, refund timing, exclusions, and RMA flow.
- Approved warranty coverage by model and component.
- Confirmed support email, phone, ticketing workflow, and response expectations.

## Dashboard Requirements

The policy dashboard should track these fields for each policy area:

| Field | Requirement |
|---|---|
| Policy owner | Named owner or department. |
| Reviewer | Legal/operations/support/finance/product reviewer as applicable. |
| Source document | Link or file path to approved policy source. |
| Effective date | Date policy becomes valid for customers. |
| Affected pages | Routes and components that use the policy. |
| Claim status | Draft, private review, approved, or retired. |
| Customer promise | Exact public-facing wording approved for publication. |
| Exclusions | Explicit limitations and non-covered cases. |
| Workflow | Customer steps and internal routing. |
| Last reviewed | Date and reviewer. |

## Release Rules

Do not publish:

- Free shipping claims without approved cost logic.
- Delivery time claims without carrier and processing rules.
- Warranty term claims without final legal policy.
- Return/refund claims without RMA, freight, fee, and timing rules.
- Financing CTAs without provider disclosures.
- Parts availability without compatibility and stock evidence.
- Repair-near-me or authorized-service claims without verified locations.
- Product/Offer schema if price, inventory, shipping, returns, or warranty fields are not approved.

## Next Actions

1. Collect source documents for shipping, warranty, returns, financing, parts, repair, contact, and privacy.
2. Assign owners and reviewers for each policy area.
3. Convert approved terms into page-level public copy.
4. Add effective dates and last-reviewed dates to the policy dashboard.
5. Re-run launch checks before any indexing or checkout enablement.
