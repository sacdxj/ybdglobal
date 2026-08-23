# Ovkara Street Legal Evidence Pack

## Purpose

Street-use intent is a high-risk buyer decision. This pack prevents Ovkara from turning a
keyword, a lighting kit, a VIN field, or a product comparison into a public-road promise.
Every road-use, registration, dual-sport, license, insurance, title, MSO, VIN, certification,
or equipment claim must stay in verification language until model-level documents and legal
review are approved.

## Current Verdict

Street-legal education framework: Ready for private review.

Model-level road-use claims: Blocked for public launch.

No current Ovkara SKU should be marketed as street legal, road legal, DMV-registerable,
dual-sport, plated, licensable, or eligible for public-road operation until the exact document
package and state workflow are approved.

## Official Source Baseline

| Source | What it supports | Current use |
|---|---|---|
| NHTSA motorcycle standards interpretation | NHTSA does not pre-approve motor vehicles; manufacturers self-certify applicable standards; motorcycles require applicable FMVSS compliance and VIN/certification context. | Supports "manufacturer certification and documentation before road-use claims." |
| NHTSA importation/certification FAQ | NHTSA distinguishes vehicles manufactured primarily for public-road use from off-road vehicles; marketing terms do not decide FMVSS classification. | Supports "dirt bike, scooter, moped, and dual-sport labels are not enough." |
| California DMV OHV page | California treats OHVs, including eMotos, as off-highway vehicles needing OHV ID; on-highway eligibility requires the right original manufacture/documentation path. | Supports state-specific verification and "not a national yes/no." |
| Texas DMV registration page | Texas states off-highway motorcycles are required to be titled but not registered; many small battery/gas scooters cannot be registered or driven on public roads. | Supports state-specific verification and off-road boundary language. |

Source review date: 2026-08-02.

## Street Legal Gate Matrix

| Gate | Current status | Current evidence | Public blocker | Required approval |
|---|---|---|---|---|
| Model intended use | Blocked | Current products are treated as off-road/private-property unless documents say otherwise | Manufacturer intended-use statement per SKU | Product + Legal |
| VIN/identifier | Blocked | No public VIN/document package by SKU | VIN or required identifier evidence and boundary wording | Product + Legal + Operations |
| Certification label | Blocked | No approved on-road certification evidence | FMVSS/certification label evidence where applicable | Legal + Product |
| Title/MSO/MCO | Blocked | No approved ownership document package by SKU | Title, MSO/MCO, invoice, bill of sale, and state acceptability notes | Operations + Legal |
| Required equipment | Blocked | Pages list categories only | Model equipment package, compliance boundary, and state-specific equipment review | Product + Legal + Technical |
| State workflow | Framework only | CA/TX examples and general DMV workflow | State-source tracking, review dates, and customer-state verification process | Legal + Support |
| Dual-sport claims | Blocked | Dual-sport page is framework only | Exact model documented for on/off-road use and approved public wording | Product + Legal + Technical |
| Product FAQs | Safe but gated | Product pages say do not assume street legality | Reviewer-approved FAQ wording for each SKU | Legal + Product |
| Schema/ads | Blocked | No road-use schema or ad claim should publish | Legal-approved claim language and evidence archive | Legal + Growth |

## Per-SKU Road-Use Matrix

| SKU | Current road-use status | Required evidence before any road claim | Release status |
|---|---|---|---|
| G1 24V | Treat as supervised off-road/private-property candidate | Intended-use statement, youth/off-road label, VIN/document status, equipment, state restrictions | Blocked |
| K2-48-MX | Treat as off-road/step-up candidate | Intended-use statement, VIN/MSO/title status, certification label, equipment package, state workflow | Blocked |
| K2-48-MY | Treat as off-road/step-up candidate | Same as above | Blocked |
| K2-60-MY | Treat as off-road adult candidate | Same as above plus technical speed/battery review | Blocked |
| K2-72-MY | Treat as off-road adult candidate | Same as above plus 72V technical review | Blocked |
| K2-72-LZ | Treat as off-road adult candidate | Same as above plus weight-row correction | Blocked |
| X1-48-MX | Treat as off-road/step-up candidate | Same as above | Blocked |
| X1-48-MY | Treat as off-road/step-up candidate | Same as above | Blocked |
| X1-60-MY | Treat as off-road adult candidate | Same as above plus technical speed/battery review | Blocked |

## Required Model Evidence Packet

Each model needs a completed packet before road-use copy can move beyond verification language:

| Field | Required evidence |
|---|---|
| Model/SKU/configuration | Exact public model, SKU, revision, and production configuration. |
| Intended use | Manufacturer statement: off-road, on-road, dual-purpose, competition, private-property, or other. |
| VIN/identifier | Whether a VIN exists, format/source, and whether it is suitable for the intended process. |
| Certification label | Applicable label photos and compliance statement where road use is claimed. |
| Ownership documents | Title, MSO/MCO, invoice, bill of sale, import/entry documents if relevant, and document sample. |
| Equipment package | Lamps, reflectors, mirrors, horn, tires/rims, brakes, controls/displays, speedometer/odometer, plate mount, and other required equipment. |
| State verification | Official DMV/state agency URL, retrieved date, contact notes, and model-specific outcome. |
| Customer workflow | What support asks for and what the buyer must verify before purchase. |
| Public wording | Exact legal-reviewed wording for product page, FAQ, guide, ads, and support scripts. |
| Exclusions | States/use cases/product configurations where road use must not be implied. |

## State Source Tracking Requirements

Future state pages or state dashboard rows must include:

- State agency name and official URL.
- Source review date.
- Vehicle class terminology used by that state.
- Registration/titling path.
- Required documents.
- Equipment/inspection/license/insurance/helmet requirements when applicable.
- Whether support has a model-level document package.
- Explicit note that the buyer should verify current rules before purchase when road use matters.

## Copy Rules

Allowed:

- "Treat each model as off-road until documents prove otherwise."
- "Road use depends on exact model documents and state rules."
- "Adding lights or mirrors does not by itself prove registration eligibility."
- "Contact support with your state and model before planning road use."
- "This is a verification guide, not legal advice."

Blocked:

- "Street legal electric dirt bike" as a model claim.
- "DMV ready", "plated", "road legal", "license-ready", or "registerable" without legal signoff.
- "Dual-sport" as a product label without model documents.
- "VIN means street legal."
- "Add a kit to make it legal."
- Any nationwide guarantee.
- Any public-road use claim for youth products without separate legal and youth-safety review.

## Page Audit

| Page/component | Status | Notes |
|---|---|---|
| `/street-legal/` | Private review ready | Correctly frames street legality as exact-vehicle verification and not legal advice. |
| `/street-legal/dual-sport/` | Private review ready | Correctly blocks documented dual-sport listings until legal/product signoff. |
| `/street-legal/registration-license/` | Private review ready | Correctly separates intended use, vehicle class, documents, state process, equipment, and rider requirements. |
| Decision Engine legal path | Private review ready | Correctly routes users to verification path and marks confidence low. |
| Product pages | Private review ready with gating | Current FAQs generally say not to assume road use. Keep this language until SKU packets are approved. |
| Comparison pages | Source-refresh gated | Competitor road/off-road claims need current official source review and claim boundaries. |

## Dashboard Requirements

The street-legal dashboard should track:

| Field | Requirement |
|---|---|
| SKU | Exact model and slug. |
| Intended-use status | Off-road, road, dual-purpose, unknown, or hold. |
| VIN evidence | Yes/no/hold plus source. |
| Certification evidence | Label/document source and reviewer. |
| Title/MSO evidence | Available, unavailable, unknown, or state-limited. |
| Equipment evidence | Approved package and exceptions. |
| State workflow | State, source URL, retrieved date, and support outcome. |
| Public wording | Exact legal-reviewed copy. |
| Reviewer | Legal/product/support reviewer. |
| Review date | Last approved date. |
| Launch status | Draft, private review, public approved, or blocked. |

## Release Rules

Do not publish road-use claims until:

1. Model evidence packet is complete.
2. Legal/compliance reviewer approves the exact wording.
3. Product and support teams confirm document availability before purchase.
4. State-source workflow exists for the target launch states.
5. Product pages, guide pages, Decision Engine, support scripts, schema, ads, and comparison pages use the same claim boundary.
6. Public indexing is still held until the broader launch evidence pack is approved.

## Next Actions

1. Add a model-level road-use status row for each SKU in the dashboard.
2. Collect manufacturer intended-use statements and document-package samples.
3. Decide whether Ovkara will support off-road-only, dual-sport, or state-specific road-use products at launch.
4. Build a state-source tracker for priority states.
5. Refresh competitor road/off-road comparison claims with official sources.
6. Re-run build, launch, decision, link, React, and legal-claim searches before public indexing.

