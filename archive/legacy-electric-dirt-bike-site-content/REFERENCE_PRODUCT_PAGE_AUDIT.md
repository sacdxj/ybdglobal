# Reference Product Page Audit

## Reference

- Page reviewed: Eskute Nova Mini product page
- Use: Information-architecture benchmark only
- Rule: Do not copy competitor branding, reviews, media, claims, or unsupported specifications

## What the Reference Page Does Well

1. Places price, options, inventory, delivery, warranty, payment, and Add to Cart near the
   purchase decision.
2. Uses a short specification summary before the long-form product story.
3. Supports the product with feature explanations, full specifications, dimensions, rider fit,
   box contents, assembly, model comparison, reviews, and FAQs.
4. Connects accessories and protective equipment to the transaction.
5. Makes the off-road and not-street-legal limitation visible near the purchase area.

## What Our Version Improves

1. Rider fit comes before age labels or performance claims.
2. "Best for" and "not the best fit for" make product limitations explicit.
3. Speed and range require test methods instead of isolated maximum numbers.
4. Nominal and peak power cannot be mixed.
5. Every specification has one approved source.
6. Variant selection must update SKU, price, inventory, media, included items, and delivery.
7. Shipping, assembly, damage inspection, warranty, returns, parts, and service are treated as
   purchase content rather than generic accordions.
8. Competitor products are excluded from the own-brand product comparison.
9. Product, Offer, Review, and AggregateRating schema have explicit eligibility gates.

## Reference Conflicts That Must Not Be Repeated

| Area | Conflicting reference signals | Required own-brand rule |
|---|---|---|
| Rider | Kids/teens URL, teens/adults H1, 14+ order warning, and a review mentioning age 12 | One approved rider policy tied to documented fit and safety review |
| Load | Specification shows 265 lbs while another section shows 400 lbs | One tested rider-load value with source |
| Charger | Specification shows 54.6V/2.5A while comparison shows 54.6V/3A | SKU-specific charger record |
| Transmission/modes | Specification says single speed while comparison says three speeds | Separate drivetrain gearing from selectable power modes |
| Range | "Up to 60 miles" appears without a complete test method | Publish result with rider, mode, terrain, speed, temperature, and SOC method |
| Use | Off-road-only warning conflicts with reviews describing neighborhood or park use | Approved-use statement must remain consistent across content and reviews |
| Support accordions | Several accordion sections contain placeholder copy | No placeholder support content on a live product page |

## Required Inputs to Finish the Prototype

- Final brand and model name.
- SKU and variant list.
- Approved prices and inventory source.
- Complete specification and dimensions record.
- Rider-fit and rider-load evidence.
- Motor, controller, speed, and range test reports.
- Battery, charger, certification, charging, and storage data.
- Approved terrain, age, supervision, and legal-use statements.
- Rights-cleared product media.
- Shipping, assembly, damage, warranty, return, parts, and service policies.
- Authentic product reviews, if available.

## Output

This benchmark informed the reusable product-page standard. It has been superseded by the six
confirmed own-product SKU drafts recorded in `PRODUCT_CATALOG_REFERENCE.md`.
