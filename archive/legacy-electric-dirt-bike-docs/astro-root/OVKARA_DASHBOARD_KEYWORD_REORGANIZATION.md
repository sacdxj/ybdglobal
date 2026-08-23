# Ovkara Dashboard Keyword Reorganization

## Purpose

This file reorganizes the Electric Dirt Bikes keyword set around Ovkara's positioning:

```text
Decision Brand -> Buyer Question -> Page Type -> Evidence Gate
```

The dashboard should not be treated as a raw keyword list. It should decide which buyer question
each keyword represents and which page should answer it.

## Legacy Keyword Cleanup Finding

The old Axiterm / terminal-components keywords are not in the current public Astro page set.

They have been moved into `archive/legacy-axiterm/` and should not guide Ovkara SEO decisions:

| File | Legacy topic |
|---|---|
| `archive/legacy-axiterm/NEXT_PHASE_OPERATING_PLAN.md` | RFQ, binding post, terminal components, Google Ads for OEM leads |
| `archive/legacy-axiterm/EVIDENCE_ASSET_TRACKER.md` | Axiterm evidence assets, binding posts, CNC, RFQ proof |
| `archive/legacy-axiterm/PROCUREMENT_DECISION_AUDIT_PLAN.md` | OEM terminal components procurement decision site |
| `archive/legacy-axiterm/PROCUREMENT_DECISION_PAGE_AUDIT.md` | Old procurement page audit |
| `archive/legacy-axiterm/RFQ_DEPLOYMENT_CHECKLIST.md` | RFQ form deployment |
| `archive/legacy-axiterm/WEBSITE_DESIGN_SYSTEM.md` | Axiterm / Binding Post page templates |
| `archive/legacy-axiterm/WEBSITE_CONTENT_SYSTEM.md` | Axiterm RFQ content system |
| `archive/legacy-axiterm/SECURITY_AUDIT.md`, `archive/legacy-axiterm/SECURITY_HEADERS_CONFIG.md`, `archive/legacy-axiterm/SECURITY_FIXES_SUMMARY.md` | Old Axiterm deployment/security notes |

Current Ovkara execution should use:

- `SEO_KEYWORD_MATRIX.md`
- `OVKARA_POSITIONING_REAUDIT.md`
- `DECISION_BRAND_LAUNCH_GATE.md`
- `EVIDENCE_APPROVAL_MATRIX.md`
- `brand-os/00-brand-os-index.md`

## Tier 1: Core Commercial Discovery

| Keyword | Intent | Current page | Page job |
|---|---|---|---|
| electric dirt bike | Broad commercial discovery | `/` and `/shop/` | Brand promise first, model shortlist second |
| electric dirt bikes | Broad plural category | `/shop/` | Compare Ovkara models by rider and use |
| electric dirt bikes for sale | Transactional category | `/shop/` | Show comparison path before order readiness |
| best electric dirt bikes | Shortlist intent | `/buying-guides/best/` | Build scenario shortlist, not fake rankings |
| electric dirt bike buying guide | Education before purchase | `/buying-guides/` | Route buyer questions |

## Tier 2: Rider Persona Keywords

| Keyword | Persona | Current page | Evidence gate |
|---|---|---|---|
| electric dirt bike for adults | Adult rider | `/adult-dirt-bikes/` | Fit ranges, product proof |
| adult electric dirt bike | Adult rider | `/adult-dirt-bikes/` | Fit, terrain, support |
| electric dirt bike for kids | Parent buyer | `/kids-youth/` | Youth safety L3 |
| kids electric dirt bike | Parent buyer | `/kids-youth/` | Youth fit and supervision |
| electric dirt bike for 10 year old | Parent buyer | `/kids-youth/ages-8-12/` | Youth fit, manual, safety review |
| electric dirt bike for teens | Parent + teen | `/kids-youth/teens/` | Youth/adult transition criteria |

## Tier 3: Voltage And Power Keywords

| Keyword | Intent | Current page | Decision rule |
|---|---|---|---|
| 24v electric dirt bike | Youth/entry voltage | `/buying-guides/24v-36v-48v/` and G1 product page | Treat voltage as one input, not an age rating |
| 36v electric dirt bike | Youth voltage research | `/buying-guides/24v-36v-48v/` | Educational only unless matching SKU exists |
| 48v electric dirt bike | Compact/youth step-up | 48V product pages | Requires fit and safety context |
| 60v electric dirt bike | Adult step-up | `/adult-dirt-bikes/60v/` | Compare chassis, battery, terrain, support |
| 72v electric dirt bike | Adult performance | `/adult-dirt-bikes/72v/` | Needs speed/range test method |
| fastest electric dirt bike | Performance search | `/adult-dirt-bikes/fast/` | Do not claim fastest without approved test method |
| electric dirt bike motor | Power research | `/buying-guides/motor-power/` | Compare motor, controller, battery, gearing, brakes |

## Tier 4: Ownership And Support Keywords

| Keyword | Intent | Current page | Evidence gate |
|---|---|---|---|
| electric dirt bike price | Budget planning | `/buying-guides/price/` | Live price, inventory, financing, shipping |
| electric dirt bike range | Ride planning | `/buying-guides/range/` | Range test assumptions |
| electric dirt bike charger | Charging compatibility | `/buying-guides/charging/` | Charger/manual/battery review |
| how long does an electric dirt bike battery last | Battery ownership | `/buying-guides/battery-life/` | Battery technical review |
| electric dirt bike parts | Parts ownership | `/support/parts-maintenance/` | Parts catalog and compatibility |
| electric dirt bike repair near me | Repair/support | `/support/repair/` | Repair workflow and service path |
| electric dirt bike shipping | Delivery | `/support/shipping/` | Approved shipping policy |
| electric dirt bike warranty | Risk reduction | `/support/warranty-returns/` | Legal/warranty L3 |
| electric dirt bike finance | Payment planning | `/support/financing/` | Finance/legal L3 |

## Tier 5: Street-Legal And Compliance Keywords

| Keyword | Intent | Current page | Evidence gate |
|---|---|---|---|
| electric street legal dirt bike | Road-use research | `/street-legal/` | Legal review |
| street legal electric dirt bike | Road-use research | `/street-legal/` | Legal review |
| dual sport electric dirt bike | Mixed-use research | `/street-legal/dual-sport/` | Legal/product L3 |
| do you need a license for an electric dirt bike | Registration/license question | `/street-legal/registration-license/` | State/legal review |

## Tier 6: Competitor And Alternative Keywords

| Keyword | Current page | Decision job |
|---|---|---|
| surron electric dirt bike | `/blog/compare/surron-alternatives/` | Compare by class, fit, terrain, power, support |
| talaria electric dirt bike | `/blog/compare/talaria-alternatives/` | Compare Talaria-class intent against Ovkara paths |
| razor electric dirt bike | `/blog/compare/razor-alternatives/` | Help parents compare youth options |
| segway electric dirt bike | `/blog/compare/segway-alternatives/` | Compare known-brand search intent |
| stark varg electric dirt bike | `/blog/compare/stark-varg-alternatives/` | Separate competition-class intent |
| ktm electric dirt bike | `/blog/compare/ktm-electric-alternatives/` | Clarify KTM electric/off-road intent |
| honda electric dirt bike | `/blog/compare/honda-electric-dirt-bike/` | Separate electric-start from true electric |
| yamaha electric dirt bike | `/blog/compare/yamaha-electric-dirt-bike/` | Clarify concept/current product status |
| cake electric dirt bike | `/blog/compare/cake-alternatives/` | Compare lightweight premium electric intent |
| kuberg electric dirt bike | `/blog/compare/kuberg-alternatives/` | Compare youth/performance-youth intent |

## Recommended Dashboard Priority

| Priority | Cluster | Why |
|---:|---|---|
| P0 | Homepage + Find Your Bike | Own the broad category with decision-brand positioning |
| P0 | Kids/youth + ages 8-12 | High trust need, strong decision value |
| P0 | Best + price + range + charging | Core buyer objections before purchase |
| P1 | Adult 60V/72V + fast | Strong commercial intent but evidence-sensitive |
| P1 | Street legal | High search demand but legal risk |
| P2 | Competitor alternatives | Useful for capture, but requires source freshness |
| P2 | Support pages | Builds confidence and conversion readiness |

## Current Publication Recommendation

```text
Use these keyword clusters for internal dashboard routing and content QA.
Do not public-index until evidence, legal/safety, policy, support, visual identity, analytics,
and formal Ovkara clearance gates are complete.
```
