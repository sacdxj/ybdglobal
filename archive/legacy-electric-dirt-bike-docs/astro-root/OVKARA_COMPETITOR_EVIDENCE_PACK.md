# Ovkara Competitor Evidence Pack

## Purpose

Competitor comparison pages can be valuable SEO entry points, but they can also damage trust if
they force false equivalence, use stale reseller specs, mix model years, or imply affiliation.
This pack controls all third-party brand, model, comparison, and alternative claims before any
comparison page is publicly indexed.

## Current Verdict

Comparison architecture: Ready for private editorial review.

Public SEO release: Blocked.

The comparison hub and pages are directionally correct because they route brand-aware shoppers
by exact model, rider class, product class, terrain, evidence, support, and legal boundary. They
must stay noindex until official sources, review dates, Ovkara SKU mapping, and editorial/product
signoff exist for each page.

## Official Source Baseline

Source review date: 2026-08-02.

| Brand/page | Current source status | Required source rule |
|---|---|---|
| Surron | Needs official manufacturer or authorized US distributor verification before model specs | Do not use reseller or modified-bike claims as stock data without labeling. |
| Talaria | Needs official manufacturer and authorized US distribution verification before model specs | Distinguish market/version and seller authorization. |
| Razor | Official Dirt Rocket source identified | Use exact model page/manual, not the Dirt Rocket family name alone. |
| KTM | Official US electric lineup and FREERIDE E pages identified | Recheck model year, US availability, specs, price, and dealer/support context at publication. |
| Honda | Official Honda Powersports catalog/dual-sport context identified | Separate electric start gas bikes from battery-electric dirt bikes. |
| Yamaha | Official YE-01 concept announcement identified | Do not convert concept/race activity into a current US retail product claim. |
| CAKE | Official off-road and all-bikes sources identified | Recheck US availability, configuration, price, support, and road/off-road version. |
| Kuberg | Official category/model sources identified | Separate young-rider, teen/adult, trial, and racing classes. |
| Segway | Official X260 support source identified | Recheck availability, model year, support status, and test assumptions. |
| Stark VARG | Official technical document/manual source identified | Do not compare recreational trail bikes as direct VARG equivalents. |

## Comparison Gate Matrix

| Gate | Current status | Public blocker | Required approval |
|---|---|---|---|
| Source freshness | Open | Every page needs current official URLs and retrieved dates | Editorial + SEO |
| Exact model mapping | Open | Pages must name exact competitor model/year/market/configuration before specs | Editorial + Product |
| Ovkara equivalence | Open | Need proof that an Ovkara SKU solves the same rider/use problem | Product + Technical |
| Product-class boundary | In progress | No mixing youth, adult, road, off-road, concept, gas, electric-start, and modified products | Product + Editorial |
| Technical comparison | Open | Speed/range/motor/battery terms require comparable definitions and source conditions | Technical + Product |
| Youth comparison | Open | Razor/Kuberg youth comparisons require youth-safety and fit evidence | Youth Safety + Product |
| Street/legal comparison | Open | Any road-use or dual-sport discussion must use the Street Legal Evidence Pack | Legal + Product |
| Trademark/disclosure | In progress | Need consistent third-party trademark and non-affiliation disclosure | Editorial + Legal |
| Schema/ads | Blocked | No Review/Product/Offer/comparison ad claims until sources and boundaries are approved | SEO + Legal + Growth |

## Page Status Matrix

| Page | Current role | Status | Main blockers |
|---|---|---|---|
| `/blog/compare/` | Comparison router | Private review ready | Each child page needs source packet and review date. |
| `/blog/compare/surron-alternatives/` | Adult performance intent | Source gated | Official/authorized source, exact Surron model, Ovkara class mapping, legal boundary. |
| `/blog/compare/talaria-alternatives/` | Adult performance intent | Source gated | Official source, US distribution path, exact Talaria model/version, Ovkara mapping. |
| `/blog/compare/razor-alternatives/` | Parent/youth intent | Youth-safety gated | Exact Razor model/manual, G1 fit table, youth safety review. |
| `/blog/compare/ktm-electric-alternatives/` | Youth/adult electric research | Source and mapping gated | Current KTM model year/source, youth vs adult separation, Ovkara non-equivalence boundary. |
| `/blog/compare/honda-electric-dirt-bike/` | Product-existence research | Source gated | Current Honda US catalog check, electric-start vs electric-power boundary. |
| `/blog/compare/yamaha-electric-dirt-bike/` | Product-existence research | Source gated | Current Yamaha US catalog check and concept vs retail boundary. |
| `/blog/compare/cake-alternatives/` | Lightweight electric/off-road research | Source and availability gated | Current CAKE availability, market/configuration, road/off-road distinction. |
| `/blog/compare/kuberg-alternatives/` | Youth/adult specialist research | Youth/product gated | Exact Kuberg model, youth-safety mapping, age/fit controls. |
| `/blog/compare/segway-alternatives/` | Older/tech e-bike research | Availability gated | X260 support/current availability, used/older configuration boundary. |
| `/blog/compare/stark-varg-alternatives/` | Premium motocross performance research | Product-class gated | No current direct Ovkara equivalent; keep non-equivalence visible. |

## Required Competitor Source Packet

Each comparison page needs one packet per competitor model before public indexing:

| Field | Required evidence |
|---|---|
| Competitor brand/model | Exact public model, model year, market, configuration, and official URL. |
| Source type | Manufacturer, authorized distributor, manual, support page, dealer, or reseller. |
| Retrieved date | Date source was checked. |
| Availability status | Current, discontinued, concept, support-only, out-of-market, unknown, or used-market. |
| Claim fields | Specs or claims used: price, battery, motor, speed, range, weight, seat height, wheels, warranty, parts, road status. |
| Claim boundary | What the source does and does not prove. |
| Ovkara mapping | Which Ovkara SKU, if any, belongs in the same rider/use/product class. |
| Non-equivalence note | Why the products are not automatically equivalent. |
| Reviewer | Editorial, product, technical, youth safety, legal, or SEO reviewer. |
| Public wording | Exact approved language and disclosure. |

## Comparison Copy Rules

Allowed:

- "Identify the exact model before comparing."
- "No direct Ovkara equivalent" when the product class does not match.
- "Alternative to the buyer's use problem" instead of "direct replacement."
- "Official source checked on [date]."
- "Third-party trademark; no affiliation unless disclosed."
- "`Not published`" for missing data.

Blocked:

- "Best [competitor] alternative" as a universal product claim.
- "Equivalent to Surron/Talaria/Stark/KTM" without matched evidence.
- Mixing modified-bike data with stock data.
- Mixing youth and adult models in one row.
- Mixing road and off-road configurations.
- Treating electric-start gas bikes as electric dirt bikes.
- Treating concepts or prototypes as retail products.
- Using competitor logos, photos, or manuals beyond permitted citation/fair-use boundaries.
- Review/rating claims without actual ownership, testing, or review evidence.

## Ovkara Mapping Rules

| Buyer intent | Correct mapping behavior |
|---|---|
| Parent comparing Razor or Kuberg youth products | Route through youth safety, fit, supervision, and G1 candidate evidence. Do not show adult models as substitutes. |
| Adult comparing Surron/Talaria/Segway | Match by product class, rider size, terrain, system, support, and legal boundary. Do not compare by voltage alone. |
| Premium Stark VARG shopper | State no direct Ovkara equivalent unless a true competition-level SKU exists. |
| KTM electric shopper | Split youth SX-E intent from adult FREERIDE E intent. |
| Honda/Yamaha searcher | First answer product-existence/current-retail question, then route to available electric dirt bike classes. |
| CAKE shopper | Separate design/lightweight/road/off-road intent before mapping. |

## Dashboard Requirements

The competitor dashboard should track:

| Field | Requirement |
|---|---|
| Page route | Exact comparison URL. |
| Competitor source status | Missing, partial, official, authorized, or refreshed. |
| Retrieved date | Date official source was checked. |
| Exact model | Model/year/market/configuration. |
| Ovkara mapping | Direct, adjacent, no equivalent, or buyer-problem alternative. |
| Evidence level | Framework only, source verified, model mapped, public approved. |
| Reviewer | Editorial/product/technical/youth/legal/SEO owner. |
| Disclosure | Trademark/non-affiliation and source-boundary statement. |
| Schema status | No schema, Article only, or approved enhanced schema. |
| Launch status | Private review, source gated, approved, or retired. |

## Release Rules

Do not publicly index comparison pages until:

1. Every competitor model claim has an official or clearly labeled source.
2. Every source has a retrieved date.
3. Ovkara SKU mapping is approved or the page clearly says no direct equivalent.
4. Youth comparisons pass the Youth Safety Evidence Pack.
5. Road-use claims pass the Street Legal Evidence Pack.
6. Technical comparisons pass the Technical Claim Evidence Pack.
7. Third-party trademark and non-affiliation disclosures are visible.
8. The page does not use competitor media or logos without a legal basis.

## Next Actions

1. Build a source packet for each comparison page.
2. Refresh official source URLs and retrieved dates before public indexing.
3. Mark pages as `source-gated`, `mapping-gated`, or `ready-for-editorial-review`.
4. Add `No direct Ovkara equivalent` where product class does not match.
5. Re-run build, launch, link, decision, React, and competitor-claim searches.

