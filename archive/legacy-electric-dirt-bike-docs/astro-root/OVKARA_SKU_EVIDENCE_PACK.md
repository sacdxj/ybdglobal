# Ovkara SKU Evidence Pack

## Purpose

This pack turns the current G1, K2, and X1 product parameters into SKU-level launch evidence
requirements. It should be used with `OVKARA_PRODUCT_PARAMETER_AUDIT.md`.

The product pages can support private review, but they cannot become public purchase pages until
each SKU has approved retail, inventory, media, manual, fit, battery, speed/range, warranty,
shipping, parts, repair, and schema evidence.

## Current Verdict

```text
SKU parameter extraction: Ready for private review
Product/Offer schema: Blocked
Public retail launch: Blocked
Main blockers: retail price, inventory, final SKU status, images, manuals, fit ranges,
speed/range methods, battery evidence, youth safety, K2-60 battery conflict, K2-72-LZ weight row
```

## SKU Evidence Matrix

| SKU | Current class | Source commercial data | Source parameter confidence | Public blockers |
|---|---|---|---|---|
| G1 24V Kids Electric Dirt Bike | Kids | Factory reference 979 loose / 919 full-container; 30-day source lead time; orange/black source color | Medium | Retail price, inventory, youth safety, fit table, manual, lead-acid battery/charger instructions, media, warranty, shipping, parts. |
| K2-48-MX-1214 | Step-Up | Factory reference 3800 loose / 3500 full-container; 30-day source lead time; black/red/orange/customization | Medium | Retail price, inventory, fit range, teen/adult transition rule, speed/range method, battery/charger docs, media, warranty, shipping, parts. |
| K2-48-MY-1417 | Step-Up | Factory reference 3900 loose / 3600 full-container; 30-day source lead time; black/red/orange/customization | Medium | Retail price, inventory, fit range, speed/range method, battery/charger docs, media, warranty, shipping, parts. |
| K2-60-MY-1417 | Adult | Factory reference 4300 loose / 4000 full-container; 30-day source lead time; black/red/orange/customization | Hold | Battery capacity conflict: source has 22.5Ah battery type and 25Ah capacity row. Resolve before public spec or schema. |
| K2-72-MY-1417 | Adult | Factory reference 4900 loose / 4600 full-container; 30-day source lead time; black/red/orange/customization | Medium | Speed/range method, battery/charger docs, retail price, inventory, media, warranty, shipping, parts. |
| K2-72-LZ-1719 | Adult | Factory reference 5500 loose / 5100 full-container; 30-day source lead time; black/red/orange/customization | Hold | Gross/net weight row appears inverted or conflicting: 56 kg / 66.5 kg. Resolve before public spec or schema. |
| X1-48-MX-1214 | Step-Up | Factory reference 4200 loose / 3900 full-container; 30-45 day source lead time; black/red/orange/customization | Medium | Fit and safety review before youth/teen use, speed/range method, retail price, inventory, media, warranty, shipping, parts. |
| X1-48-MY-1417 | Step-Up | Factory reference 4300 loose / 4000 full-container; 30-45 day source lead time; black/red/orange/customization | Medium | Fit range, speed/range method, retail price, inventory, media, warranty, shipping, parts. |
| X1-60-MY-1417 | Adult | Factory reference 4800 loose / 4500 full-container; 30-45 day source lead time; black/red/orange/customization | Medium | Speed/range method, retail price, inventory, media, warranty, shipping, parts, technical review. |

## SKU Packets

### G1 24V Kids Electric Dirt Bike

| Field | Current value | Launch status |
|---|---|---|
| Route | `/products/g1-24v-kids-electric-dirt-bike/` | Ready |
| Public class | Kids | Hold for youth safety review |
| Key fit | 420 mm seat, 730 mm wheelbase, 120-125 mm clearance, 18.5 kg curb weight | Needs rider height/inseam/reach/weight guidance |
| Power | 24V, 180W hub motor | Needs manual and safety owner review |
| Battery/charger | 24V 1.5Ah lead-acid, 1.5A charger, 4-5 hour charge time | Needs charger label, storage, replacement, recycling, and safety instructions |
| Speed/range | 9.94 mph source speed, 13 km range | Needs public test method |
| Commercial | Factory reference 979/919; retail price pending | Retail price and inventory blocked |
| Schema | Product/Offer blocked | Need retail price, inventory, media, warranty, policy eligibility |

### K2-48-MX-1214

| Field | Current value | Launch status |
|---|---|---|
| Route | `/products/k2-48-mx-1214-electric-dirt-bike/` | Ready |
| Public class | Step-Up | Do not publish as child product without safety review |
| Key fit | 730 mm seat, 1080 mm wheelbase, 220 mm clearance, 12/14 wheels | Needs fit range and control-reach review |
| Power | 48V, 1200W rated / 3200W max mid motor | Needs technical review |
| Battery/charger | 48V 20.8Ah lithium, 1000Wh; 3A/5A charger options | Needs charger input/output and certification scope |
| Speed/range | 60 km/h source max, 60 km range | Needs public test method |
| Commercial | Factory reference 3800/3500; retail price pending | Retail price and inventory blocked |
| Schema | Product/Offer blocked | Need retail price, inventory, media, warranty, policy eligibility |

### K2-48-MY-1417

| Field | Current value | Launch status |
|---|---|---|
| Route | `/products/k2-48-my-1417-electric-dirt-bike/` | Ready |
| Public class | Step-Up | Fit review required |
| Key fit | 780 mm seat, 1150 mm wheelbase, 280 mm clearance, 14/17 wheels | Needs fit range and rider guidance |
| Power | 48V, 1200W rated / 3200W max mid motor | Needs technical review |
| Battery/charger | 48V 20.8Ah lithium, 1000Wh; 3A/5A charger options | Needs charger input/output and certification scope |
| Speed/range | 65 km/h source max, 60 km range | Needs public test method |
| Commercial | Factory reference 3900/3600; retail price pending | Retail price and inventory blocked |
| Schema | Product/Offer blocked | Need retail price, inventory, media, warranty, policy eligibility |

### K2-60-MY-1417

| Field | Current value | Launch status |
|---|---|---|
| Route | `/products/k2-60-my-1417-electric-dirt-bike/` | Ready |
| Public class | Adult | Hold for battery conflict |
| Key fit | 760-770 mm seat, 1150 mm wheelbase, 280 mm clearance, 14/17 wheels | Needs fit range |
| Power | 60V, 1500W rated / 4000W max mid motor | Needs technical review |
| Battery/charger | 60V 22.5Ah battery type; 25Ah capacity row in source | Hold until battery label/source owner resolves |
| Speed/range | 65 km/h source max, 60 km range | Needs public test method |
| Commercial | Factory reference 4300/4000; retail price pending | Retail price and inventory blocked |
| Schema | Product/Offer blocked | Battery conflict must resolve first |

### K2-72-MY-1417

| Field | Current value | Launch status |
|---|---|---|
| Route | `/products/k2-72-my-1417-electric-dirt-bike/` | Ready |
| Public class | Adult | Speed/range review required |
| Key fit | 760-770 mm seat, 1150 mm wheelbase, 280 mm clearance, 14/17 wheels | Needs fit range |
| Power | 72V, 2000W rated / 6000W max mid motor | Needs technical review |
| Battery/charger | 72V 25Ah domestic ternary lithium; 3A/5A chargers | Needs charger input/output and certification scope |
| Speed/range | Field modes 21 / 29 / 49 km/h, 60 km range | Needs public test method |
| Commercial | Factory reference 4900/4600; retail price pending | Retail price and inventory blocked |
| Schema | Product/Offer blocked | Need retail price, inventory, media, warranty, policy eligibility |

### K2-72-LZ-1719

| Field | Current value | Launch status |
|---|---|---|
| Route | `/products/k2-72-lz-1719-electric-dirt-bike/` | Ready |
| Public class | Adult | Hold for weight row review |
| Key fit | 860-870 mm seat, 1150 mm wheelbase, 370 mm clearance, 17/19 wheels | Needs fit range and experienced-rider guidance |
| Power | 72V, 2000W rated / 6000W max mid motor | Needs technical review |
| Battery/charger | 72V 25Ah domestic ternary lithium | Needs charger and battery documentation |
| Speed/range | Field modes 25 / 35 / 54 km/h, 60 km range | Needs public test method |
| Commercial | Factory reference 5500/5100; retail price pending | Retail price and inventory blocked |
| Schema | Product/Offer blocked | Weight row must resolve first |

### X1-48-MX-1214

| Field | Current value | Launch status |
|---|---|---|
| Route | `/products/x1-48-mx-1214-electric-dirt-bike/` | Ready |
| Public class | Step-Up | Do not publish as youth recommendation without safety review |
| Key fit | 730 mm seat, 1100 mm wheelbase, 250 mm clearance, 12/14 wheels, 51 kg net weight | Needs fit range and transition criteria |
| Power | 48V, 1000W rated / 2900W max mid motor | Needs technical review |
| Battery/charger | 48V 20.8Ah lithium, 1000Wh, 5A charger, 5-hour charge | Needs charger input/output and certification scope |
| Speed/range | Field modes 25 / 38 / 55 km/h, 35 km range | Needs public test method |
| Commercial | Factory reference 4200/3900; retail price pending | Retail price and inventory blocked |
| Schema | Product/Offer blocked | Need retail price, inventory, media, warranty, policy eligibility |

### X1-48-MY-1417

| Field | Current value | Launch status |
|---|---|---|
| Route | `/products/x1-48-my-1417-electric-dirt-bike/` | Ready |
| Public class | Step-Up | Fit review required |
| Key fit | 770 mm seat, 1100 mm wheelbase, 280 mm clearance, 14/17 wheels, 52 kg net weight | Needs fit range |
| Power | 48V, 1000W rated / 2900W max mid motor | Needs technical review |
| Battery/charger | 48V 20.8Ah lithium, 1000Wh, 5A charger, 5-hour charge | Needs charger input/output and certification scope |
| Speed/range | Field modes 22 / 37 / 55 km/h, 35 km range | Needs public test method |
| Commercial | Factory reference 4300/4000; retail price pending | Retail price and inventory blocked |
| Schema | Product/Offer blocked | Need retail price, inventory, media, warranty, policy eligibility |

### X1-60-MY-1417

| Field | Current value | Launch status |
|---|---|---|
| Route | `/products/x1-60-my-1417-electric-dirt-bike/` | Ready |
| Public class | Adult | Technical review required |
| Key fit | 770 mm seat, 1100 mm wheelbase, 280 mm clearance, 14/17 wheels, 53 kg net weight | Needs fit range |
| Power | 60V, 1500W rated / 4500W max mid motor | Needs technical review |
| Battery/charger | 60V 25Ah lithium, 1500Wh, 5A charger, 6-hour charge | Needs battery/charger documentation |
| Speed/range | Field mode 3: 65 km/h, 45 km range | Needs public test method |
| Commercial | Factory reference 4800/4500; retail price pending | Retail price and inventory blocked |
| Schema | Product/Offer blocked | Need retail price, inventory, media, warranty, policy eligibility |

## Required Evidence Before Product/Offer Schema

| Evidence | Applies to | Required owner |
|---|---|---|
| Final public SKU name and active/inactive status | All models | Product |
| Retail price and sale rules | All models | Merchandising |
| Inventory and preorder/backorder status | All models | Merchandising / Operations |
| Product media by SKU | All models | Product / Brand |
| Manual and safety document | All models | Product / Safety |
| Fit range and rider guidance | All models | Product / Safety |
| Battery and charger documentation | All models | Battery / Technical |
| Speed and range test method | All models | Technical |
| Warranty, returns, shipping, parts, and repair eligibility | All models | Operations / Legal / Support |
| K2-60 battery capacity resolution | K2-60-MY-1417 | Product / Battery |
| K2-72-LZ weight row resolution | K2-72-LZ-1719 | Product / Technical |

## Current Gate Decision

```text
Use these SKUs for private decision and product-review workflows.
Do not publish final product offers, Product/Offer schema, price tables, "best" rankings, or
checkout CTAs until each SKU packet has owner-approved evidence.
```

