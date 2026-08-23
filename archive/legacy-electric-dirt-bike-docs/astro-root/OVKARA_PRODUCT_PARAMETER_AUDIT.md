# Ovkara Product Parameter Audit

## Purpose

This audit checks the current product data against product-page copy and collection-page logic.
Use `OVKARA_SKU_EVIDENCE_PACK.md` for SKU-by-SKU launch evidence requirements.
The goal is to prevent Ovkara from presenting draft workbook values as final retail, safety,
fit, speed, or range claims.

## Current Verdict

The product parameter layer is accepted for initial public launch after the corrections below.

Latest source refresh: 2026-08-03 from:

- `D:/xwechat_files/husac__070c/msg/file/2026-07/K2价目表xlsx(1).xlsx`
- `D:/xwechat_files/husac__070c/msg/file/2026-07/X1价目表(1).xlsx`
- `D:/xwechat_files/husac__070c/msg/file/2026-07/G1价目表参数表(1).xlsx`

Saved source records:

- `product-evidence/source_product_specs_2026-08-03.json`
- `product-evidence/source_product_specs_2026-08-03.md`

Product parameters are sourced from the supplied Excel files and saved source records. Full
checkout, live inventory, final retail pricing automation, Product/Offer schema, and manuals can
be added after the content-led launch.

## Corrections Made

| Area | Before | After | Reason |
|---|---|---|---|
| G1 speed | guarded youth placeholder | `9.94 mph` | Excel source table lists 9.94 mph. |
| G1 tires | `10--10 front/rear` | `10-inch front/rear` | Avoids ambiguous double-hyphen display. |
| K2-48-MX speed | guarded source-speed placeholder | `60 km/h` | Excel source table lists 60 km/h. |
| K2-48-MY speed | guarded source-speed placeholder | `65 km/h` | Excel source table lists 65 km/h. |
| K2-60-MY speed | guarded source-speed placeholder | `65 km/h` | Excel source table lists 65 km/h. |
| K2/X1 48V rider class | `Youth` | `Step-Up` | Product pages position these as step-up/adult-transition candidates, not automatic kids products. |
| K2/X1 48V card copy | Youth-oriented short descriptions | Step-up / 48V comparison descriptions | Product cards should not imply automatic youth approval. |
| Collection filtering | Kids/youth received every non-adult model | Kids pages now receive kids products; teen/voltage pages can receive kids + step-up; adult pages receive step-up + adult | Aligns product cards with page copy and avoids implying unapproved youth recommendations. |
| X1-48-MX tire spec | `60/100-14 front, 80/100-12 rear` | `90/100-14 front, 80/100-12 rear` | 2026-08-03 source workbook check shows X1-48-MX front tire as `前90/100-14`, not K2-48-MX's `60/100-14`. |
| K2-60-MY battery display | guarded single-value battery display | `60V 22.5Ah ternary lithium; capacity row 25Ah` | Excel source table lists battery type as `60V22.5AH` and battery capacity row as `25AH`; site now shows both source values. |
| K2-72-LZ weight display | guarded weight-row note | `56 kg / 66.5 kg` | Excel source row is `56kgs/66.5kg`; site now follows source row exactly. |

## Parameter Consistency Table

| Model | Data status | Page consistency | Public-risk note |
|---|---|---|---|
| G1 24V | Corrected | Matches page: 420 mm seat, 13 km range, 9.94 mph source speed, 24V 1.5Ah lead-acid, 180W hub motor | Needs youth safety, manual, charger, battery handling, and fit review. |
| K2-48-MX-1214 | Corrected | Matches page: 730 mm seat, 220 mm clearance, 60 km range, 60 km/h source max, 48V 20.8Ah, 1200W/3200W | Step-up candidate; do not publish as child product without safety review. |
| K2-48-MY-1417 | Corrected | Matches page: 780 mm seat, 280 mm clearance, 60 km range, 65 km/h source max, 48V 20.8Ah, 1200W/3200W | Step-up/adult candidate; needs fit and range method. |
| K2-60-MY-1417 | Source exact | Page follows Excel source values: battery type 60V 22.5Ah and battery capacity row 25Ah | Use both source values unless a newer approved workbook replaces them. |
| K2-72-MY-1417 | Watch | Matches page: 760-770 mm seat, 280 mm clearance, 72V 25Ah, mode speeds 21/29/49 km/h field | Needs speed/range method and battery documentation. |
| K2-72-LZ-1719 | Source exact | Matches page: 860-870 mm seat, 370 mm clearance, 72V 25Ah, mode speeds 25/35/54 km/h field, 56 kg / 66.5 kg weight row | Site follows the Excel source row exactly. |
| X1-48-MX-1214 | Corrected | Page says adult/step-up, not kids default; data now says Step-Up; tire spec corrected to 90/100-14 front, 80/100-12 rear | Needs fit and safety review before any youth recommendation. |
| X1-48-MY-1417 | Corrected | Page says adults comparing a 48V platform; data now says Step-Up | Needs fit range, price, and product evidence. |
| X1-60-MY-1417 | Watch | Matches page: 770 mm seat, 45 km range, 60V 25Ah, 1500Wh, field mode 3 65 km/h | Needs speed/range method and technical review. |

## Open Parameter Gates

| Gate | Affected models | Required evidence |
|---|---|---|
| Retail pricing | All models | Current retail price, sale rules, last-updated date, inventory status. |
| Speed method | All models with speed values | Test surface, rider/load, battery state, mode, temperature, measurement tool, reviewer. |
| Range method | All models | Test route/surface, rider/load, average speed, battery condition, reserve assumption, reviewer. |
| Battery value replacement | K2-60-MY-1417 | Only change if a newer approved workbook replaces the 22.5Ah battery-type row or 25Ah capacity row. |
| Weight value replacement | K2-72-LZ-1719 | Only change if a newer approved workbook replaces the `56kgs/66.5kg` source row. |
| K2 48V battery cycle value | K2-48-MY-1417, K2-48-MX-1214 | Source workbook says `22000 Times`; verify whether this is intended or a typo before using publicly. |
| Youth fit | G1 and any Step-Up model considered for teen/youth pages | Rider measurements, bike weight, reach/control checks, supervision, PPE, manual. |
| Product media | All models | Real or approved images by SKU, alt text, usage rights, final media folder. |
| Schema eligibility | All product pages | Final SKU, retail price, inventory, images, warranty, policy eligibility, and reviewed specifications. |

## Current Gate Decision

```text
Private product comparison: Pass after parameter correction
Initial public product content: Accepted
Commerce/schema expansion: Hold until checkout, inventory, final retail pricing, media, manuals,
and schema rules are configured
```
