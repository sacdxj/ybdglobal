# Ovkara SEO Keyword Matrix

## Purpose

This matrix keeps the Ovkara site aligned with its positioning:

```text
Ovkara helps riders choose electric dirt bikes with confidence.
```

The site should not drift into:

- A generic electric dirt bike keyword site.
- A product-first powersports store.
- A thin affiliate comparison site.
- A lowest-price marketplace.

Every page should answer a buyer decision question before pushing a product path.

## Dashboard Rule

Dashboard/SEO demand is treated as routing evidence, not as permission to publish unsupported
claims.

Pages can be public only when their claim type passes the required evidence level in
`EVIDENCE_APPROVAL_MATRIX.md`.

Detailed keyword grouping is maintained in:

```text
OVKARA_DASHBOARD_KEYWORD_REORGANIZATION.md
```

## Core Architecture

| URL | Page role | Primary keyword | Decision job | Public launch status |
|---|---|---|---|---|
| `/` | Brand home + Decision Engine | electric dirt bike | Route buyers by rider, use case, concern, and stage | Private review |
| `/shop/` | Model comparison hub | electric dirt bike | Build a model shortlist after the decision path | Private review |
| `/buying-guides/` | Buying guide hub | electric dirt bike buying guide | Route buyer questions to the right guide | Private review |
| `/adult-dirt-bikes/` | Adult rider collection | electric dirt bike for adults | Compare adult fit, terrain, power, and support | Private review |
| `/kids-youth/` | Parent/youth collection | electric dirt bike for kids | Compare youth fit, supervision, controls, and safety | Private review |
| `/street-legal/` | Legal decision hub | electric street legal dirt bike | Separate road-use research from product claims | Private review / legal gated |
| `/blog/compare/` | Competitor comparison hub | electric dirt bike comparison | Compare known brands without forced sales claims | Private review |
| `/support/contact/` | Support routing | electric dirt bike support | Route pre-sale, order, technical, warranty, and dealer questions | Private review |

## Buying Guide Cluster

| URL | Primary keyword | Decision job | Evidence gate |
|---|---|---|---|
| `/buying-guides/best/` | best electric dirt bikes | Turn "best" into rider/use-case scenarios | Product, fit, price, media, support, and test-method proof |
| `/buying-guides/price/` | electric dirt bike price | Separate listed price from total ownership cost | Live prices, inventory, financing, shipping, and policy proof |
| `/buying-guides/range/` | electric dirt bike range | Convert range claims into ride-planning assumptions | Battery/range test method and technical review |
| `/buying-guides/charging/` | electric dirt bike charger | Explain charger compatibility and safe charging workflow | Battery/manual/charger review |
| `/buying-guides/battery-life/` | how long does an electric dirt bike battery last | Explain battery life factors without guarantees | Battery technical review |
| `/buying-guides/motor-power/` | electric dirt bike motor | Compare power as a full system, not one wattage number | Motor/controller/battery definitions |
| `/buying-guides/24v-36v-48v/` | 24v electric dirt bike | Help parents compare youth voltage paths | Youth safety and fit review |
| `/buying-guides/electric-vs-gas-dirt-bike/` | dirt bike vs electric bike | Compare ownership style, maintenance, noise, and use case | Editorial/product review |

## Adult And Performance Cluster

| URL | Primary keyword | Decision job | Evidence gate |
|---|---|---|---|
| `/adult-dirt-bikes/60v/` | 60v electric dirt bike | Compare 60V as a step-up platform | SKU specs, fit ranges, speed/range method |
| `/adult-dirt-bikes/72v/` | 72v electric dirt bikes | Compare 72V performance-class choices | SKU specs, test method, safety/performance review |
| `/adult-dirt-bikes/fast/` | fastest electric dirt bike | Prevent unsupported fastest claims; compare control and chassis | Performance test method and reviewer approval |

## Kids And Youth Cluster

| URL | Primary keyword | Decision job | Evidence gate |
|---|---|---|---|
| `/kids-youth/ages-8-12/` | electric dirt bike for 10 year old | Help parents evaluate younger-rider fit | Youth fit and safety review |
| `/kids-youth/teens/` | electric dirt bike for teens | Compare teen/youth progression before adult platforms | Youth fit and product review |

## Street-Legal Cluster

| URL | Primary keyword | Decision job | Evidence gate |
|---|---|---|---|
| `/street-legal/dual-sport/` | dual sport electric dirt bike | Keep dual-sport claims conditional until documents support them | Legal/product L3 |
| `/street-legal/registration-license/` | do you need a license for an electric dirt bike | Explain registration and license questions by state/process | Legal review |

## Competitor Comparison Cluster

| URL | Primary keyword | Decision job | Evidence gate |
|---|---|---|---|
| `/blog/compare/surron-alternatives/` | surron electric dirt bike | Compare by rider, terrain, power class, support, and value | Current official source + comparison method |
| `/blog/compare/talaria-alternatives/` | talaria electric dirt bike | Compare Talaria-class intent against Ovkara fit paths | Current official source + comparison method |
| `/blog/compare/razor-alternatives/` | razor electric dirt bike | Help parents compare Razor-style youth intent | Current official source + youth safety review |
| `/blog/compare/segway-alternatives/` | segway electric dirt bike | Compare known Segway searches by use case and support | Current official source + product mapping |
| `/blog/compare/stark-varg-alternatives/` | stark varg electric dirt bike | Separate competition-level motocross from recreational fit | Current official source + performance boundary |
| `/blog/compare/ktm-electric-alternatives/` | ktm electric dirt bike | Compare KTM electric/off-road search intent | Current official source + product mapping |
| `/blog/compare/honda-electric-dirt-bike/` | honda electric dirt bike | Clarify Honda electric-start vs true electric intent | Current official source |
| `/blog/compare/yamaha-electric-dirt-bike/` | yamaha electric dirt bike | Clarify concept/current-product searches | Current official source |
| `/blog/compare/cake-alternatives/` | cake electric dirt bike | Compare CAKE-style lightweight electric intent | Current official source + availability review |
| `/blog/compare/kuberg-alternatives/` | kuberg electric dirt bike | Compare youth/performance youth intent | Current official source + youth safety review |

## Product Pages

| URL | Primary keyword | Decision job | Evidence gate |
|---|---|---|---|
| `/products/g1-24v-kids-electric-dirt-bike/` | 24v electric dirt bike | Evaluate entry-level kids product fit | Final price, inventory, media, manual, youth safety review |
| `/products/k2-48-mx-1214-electric-dirt-bike/` | 48v electric dirt bike | Evaluate compact 48V K2 fit | Final SKU, price, media, specs, safety review |
| `/products/x1-48-mx-1214-electric-dirt-bike/` | 48v electric dirt bike | Evaluate compact 48V X1 fit | Final SKU, price, media, specs, fit review |
| `/products/k2-48-my-1417-electric-dirt-bike/` | 48v electric dirt bike | Evaluate mid-size 48V K2 fit | Final SKU, price, media, specs, fit review |
| `/products/x1-48-my-1417-electric-dirt-bike/` | 48v electric dirt bike | Evaluate mid-size 48V X1 fit | Final SKU, price, media, specs, fit review |
| `/products/k2-60-my-1417-electric-dirt-bike/` | 60v electric dirt bike | Evaluate 60V K2 step-up fit | Final SKU, price, media, specs, performance review |
| `/products/x1-60-my-1417-electric-dirt-bike/` | 60v electric dirt bike | Evaluate 60V X1 performance fit | Final SKU, price, media, specs, speed-method review |
| `/products/k2-72-my-1417-electric-dirt-bike/` | 72v electric dirt bike | Evaluate 72V mid-size K2 fit | Final SKU, price, media, specs, speed-test review |
| `/products/k2-72-lz-1719-electric-dirt-bike/` | 72v electric dirt bike | Evaluate full-size 72V K2 fit | Final SKU, price, media, specs, speed-test review |

## Support Cluster

| URL | Primary keyword | Decision job | Evidence gate |
|---|---|---|---|
| `/support/shipping/` | electric dirt bike shipping | Explain delivery, damage, carton, and assembly questions | Approved shipping policy |
| `/support/warranty-returns/` | electric dirt bike warranty | Explain warranty/return eligibility and claim workflow | Legal/warranty L3 |
| `/support/parts-maintenance/` | electric dirt bike parts | Explain ownership, parts, maintenance, and compatibility | Parts catalog and support workflow |
| `/support/repair/` | electric dirt bike repair near me | Route repair and service questions responsibly | Repair workflow and authorized support path |
| `/support/financing/` | electric dirt bike finance | Explain financing as conditional until provider terms are live | Finance/legal L3 |
| `/privacy/` | electric dirt bike privacy policy | Explain visitor/support data handling | Legal/privacy review |

## Anti-Overlap Notes

- `/` owns the brand promise and Decision Engine, not a generic product catalog.
- `/shop/` owns model comparison and should not become the first mental model of the brand.
- Buying guides own decision questions before product selection.
- Competitor pages must not become attack pages or fake affiliate rankings.
- Product pages must not publish live Offer/Product schema until price, inventory, warranty,
  shipping, and SKU evidence are approved.
- Street-legal, youth, battery, speed, range, warranty, financing, and legal claims remain
  high-risk gates.

## Current Dashboard Verdict

```text
Architecture fit: Pass
Dashboard routing fit: Pass
Public SEO launch: Blocked
Reason: evidence, legal/safety, product, policy, visual identity, analytics, and formal clearance
gates remain incomplete.
```
