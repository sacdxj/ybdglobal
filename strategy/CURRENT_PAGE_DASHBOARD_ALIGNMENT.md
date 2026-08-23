# Current Page ↔ Dashboard Alignment

## Verdict

The current site follows the Dashboard's B2B connectivity positioning, but the implemented routes are not all equivalent to Dashboard-approved SEO pages.

- Dashboard-planned SEO routes: **44**
- Current content routes: **30**
- Dashboard core category routes implemented and approved for Brief: **5**
- Dashboard buyer-solution candidates implemented but still pending Top-10 SERP review: **3**
- Supplier-listing product evidence pages in private review: **7**
- Draft/hold routes: **3**
- Necessary prototype, trust, conversion, navigation, and policy routes: **12**

All routes must remain `private-review`/`noindex` unless their individual SERP, semantic, evidence, and RFQ gates pass.

## A. Dashboard core pages — keep and continue improving

| Current URL | Primary keyword | Audience / task | Dashboard state | Required action |
|---|---|---|---|---|
| `/products/usb-cables/` | usb c cable | Cable buyers comparing configuration starting points | Approved for Brief | Keep; retain category-comparison intent |
| `/products/hdmi-cables/` | hdmi cable | AV buyers matching source, display and installation | Approved for Brief | Keep; retain category-comparison intent |
| `/products/displayport-cables/` | displayport cable | PC/display buyers defining workload and display target | Approved for Brief | Keep; retain category-comparison intent |
| `/products/hubs-docking/` | usb hub | Buyers building a port matrix and compatibility brief | Approved for Brief | Keep; retain category-comparison intent |
| `/products/chargers/` | usb c charger | Charging buyers defining devices, outputs and market | Approved for Brief | Keep; retain category-comparison intent |

## B. Dashboard candidates — implemented, but not SEO-approved yet

| Current URL | Dashboard role | Current state | Required action |
|---|---|---|---|
| `/solutions/wholesalers-distributors/` | Buyer solution | Pending Top-10 SERP | Keep private; validate SERP before indexing |
| `/solutions/brands-private-label/` | Buyer solution | Pending Top-10 SERP | Keep private; validate SERP before indexing |
| `/solutions/retail-ecommerce/` | Buyer solution | Pending Top-10 SERP | Keep private; validate SERP before indexing |

These pages may support navigation and buyer journeys now, but they must not be described as final Dashboard-approved SEO landing pages.

## C. Product evidence pages — supplier-data driven, not Dashboard substitutes

| Current URL | Evidence basis | State | Required action |
|---|---|---|---|
| `/products/usb-cables/usb-c-fast-charging-cable/` | Alibaba listing supplied by user | Private review | Keep model claims evidence-gated |
| `/products/usb-cables/usb-c-to-usb-c-pd-cable/` | Alibaba listing supplied by user | Private review | Keep model claims evidence-gated |
| `/products/usb-cables/usb-3-2-20gbps-100w-cable/` | Alibaba listing supplied by user | Private review | Verify protocol, video and power claims |
| `/products/usb-cables/usb4-140w-20gbps-full-function-cable/` | Alibaba listing supplied by user | Private review | Verify exact model and USB4 claim |
| `/products/displayport-cables/displayport-2-1-cable/` | Alibaba listing supplied by user | Private review | Verify bandwidth, resolution and certification |
| `/products/chargers/jl-p150-dual-port-wall-charger/` | Alibaba listing supplied by user | Private review | Resolve inconsistent output/power evidence |
| `/products/chargers/jl-s5-3-in-1-wireless-charger/` | Alibaba listing supplied by user | Private review | Verify compatibility and wireless output claims |

These routes may support product selection and RFQ, but they must not replace planned specification clusters such as `/products/usb-cables/usb4/` unless a later merge/redirect decision explicitly approves it.

## D. Necessary functional and trust routes — retain outside the SEO page count

| Current URL | Role | Required action |
|---|---|---|
| `/` | Homepage and commercial orientation | Keep aligned to five product families and B2B RFQ |
| `/products/` | Product-family directory | Keep as navigation, not a competing keyword pillar |
| `/oem-odm/` | Customization workflow | Keep as functional pillar; do not replace five planned OEM keyword pages |
| `/quality-factory/` | Evidence and supplier-review workflow | Keep claims conditional until records exist |
| `/about-us/` | Company/sourcing-model review | Keep company facts provisional |
| `/contact/` | Inquiry routing | Keep separate from the structured RFQ page |
| `/get-a-quote/` | Transactional RFQ preparation | Keep; live submission destination remains gated |
| `/request-sample/` | Sample-request preparation | Keep; commercial terms remain project-specific |
| `/resources/` | Resource navigation | Keep as a directory; do not publish unvalidated guide clusters |
| `/solutions/` | Buyer-path navigation | Keep as a directory; do not treat as a keyword landing page |
| `/privacy/` | Policy placeholder | Keep noindex until legal review |
| `/terms-of-service/` | Policy placeholder | Keep noindex until legal review |

## E. Draft / hold routes — do not promote

| Current URL | Reason for hold | Next decision |
|---|---|---|
| `/products/hdmi-cables/hdmi-2-1-cable/` | Draft product record lacks approved evidence | Draft content hidden; old URL is a noindex redirect to the HDMI category, while selection routes to a prefilled RFQ |
| `/products/hubs-docking/multiport-usb-c-hub/` | Draft product record lacks approved evidence | Draft content hidden; old URL is a noindex redirect to the Hub category, while selection routes to a prefilled RFQ |
| `/solutions/importers-distributors/` | Not a Dashboard-approved landing route | Hidden from static routes pending merge, redirect, or SERP review |

## Content guardrails for every future edit

1. Preserve the page's assigned audience, search task, funnel stage, and CTA.
2. Do not turn category pages into single-product pages.
3. Do not let product pages compete with planned category or specification URLs.
4. Treat certification, factory, MOQ, lead-time, compatibility, and performance claims as conditional until evidence is attached to the exact model.
5. Keep visual/layout edits separate from keyword and URL decisions.
6. Run live SERP review before splitting, merging, renaming, or indexing a Dashboard candidate.

## Next review queue

1. Complete product evidence before restoring the two hidden draft product routes.
2. Review the three buyer-solution candidates against live Top-10 results.
3. Map the seven product evidence pages to the 44 planned routes and record keep/merge/redirect decisions.
4. Decide whether the hidden importer route should merge into the wholesale/distributor page.
5. Only then start Batch 2 specification and OEM pages.

## Sources of truth

- `outputs/usb-seo/usb_connectivity_keyword_architecture_full.xlsx`
- `strategy/SEO_SITEMAP_EXECUTION.md`
- `strategy/FULL_PROJECT_COMPLETION_AUDIT.md`
- `astro/src/content/site/*.md`
