# Ovkara Technical Claim Evidence Pack

## Purpose

This pack controls public use of speed, range, motor, battery, charger, weight, tire, and chassis
claims. Ovkara's positioning is buyer confidence, so technical claims must be explainable,
method-labeled, and reviewed before they appear as final product proof, comparison proof, schema,
ads, or sales copy.

## Current Verdict

Technical education pages: Ready for private review.

Model-specific technical claims: Blocked for public launch.

The current site can discuss how buyers should evaluate range, battery life, charging, and motor
power. It should not yet present source speed/range/battery rows as final retail claims.

## Current Technical Content Status

| Area | Current page/data | Private-review status | Public blocker | Required approval |
|---|---|---|---|---|
| Range | `/buying-guides/range/`, `src/data/products.ts` | Framework safe | Test method, rider/load, terrain, speed, temperature, battery condition, reserve, reviewer date per model | Battery + Technical + Product |
| Speed | `src/data/products.ts`, product pages, 60V/72V/fast pages | Draft only | Definition of source speed, mode/setup, rider/load, surface, battery state, temperature, measurement method | Technical + Product |
| Motor power | `/buying-guides/motor-power/`, product data | Framework safe | Rated vs max/peak definitions, controller limits, thermal behavior, source rows, reviewer | Technical + Battery + Product |
| Battery | `/buying-guides/battery-life/`, charging guide, product data | Framework safe | Chemistry, capacity, Wh, BMS notes, charger part, replacement policy, safety docs, shipping restrictions | Battery + Safety + Support |
| Charging | `/buying-guides/charging/` | Framework safe | Charger part numbers, output ratings, charging time methods, stop-use rules, storage guidance, manuals | Battery + Safety + Support |
| Tires/wheels | Product data and product pages | Draft mostly safe | Final tire specs, fitment, terrain guidance, pressure/wear guidance, manual review | Product + Technical |
| Weight/dimensions | Product data and product pages | Draft only | Net/gross clarification, carton vs bike weight, measured dimensions, K2-72-LZ row correction | Product + Operations |

## Per-SKU Technical Claim Matrix

| SKU | Speed claim status | Range claim status | Battery claim status | Technical release status |
|---|---|---|---|---|
| G1 24V | Source top speed `9.94 mph`; public method missing | Source range `13 km`; method missing | `24V 1.5Ah lead-acid`; charger/manual/safety docs missing | Hold for youth safety and battery/charger review |
| K2-48-MX | Source max speed `60 km/h`; method missing | Source range `60 km`; method missing | `48V 20.8Ah lithium, 1000Wh`; docs missing | Hold for fit, speed/range method, battery docs |
| K2-48-MY | Source max speed `65 km/h`; method missing | Source range `60 km`; method missing | `48V 20.8Ah lithium, 1000Wh`; docs missing | Hold for fit, speed/range method, battery docs |
| K2-60-MY | Source max speed `65 km/h`; method missing | Source range `60 km`; method missing | `60V 22.5Ah lithium; 25Ah row needs verification` | Hold due battery-capacity conflict |
| K2-72-MY | Field modes `21 / 29 / 49 km/h`; method missing | Source range `60 km`; method missing | `72V 25Ah ternary lithium`; docs missing | Hold for mode definition and battery docs |
| K2-72-LZ | Field modes `25 / 35 / 54 km/h`; method missing | Source range `60 km`; method missing | `72V 25Ah ternary lithium`; docs missing | Hold due weight row and method review |
| X1-48-MX | Field modes `25 / 38 / 55 km/h`; method missing | Source range `35 km`; method missing | `48V 20.8Ah lithium, 1000Wh`; docs missing | Hold for fit, mode definition, battery docs |
| X1-48-MY | Field modes `22 / 37 / 55 km/h`; method missing | Source range `35 km`; method missing | `48V 20.8Ah lithium, 1000Wh`; docs missing | Hold for fit, mode definition, battery docs |
| X1-60-MY | Field mode 3 `65 km/h`; full mode set missing | Source range `45 km`; method missing | `60V 25Ah lithium, 1500Wh`; docs missing | Hold for full drive-system review |

## Required Test Method Fields

### Speed

Each public speed claim requires:

- Exact model, SKU, controller mode, tire/wheel setup, and production configuration.
- Rider/load weight and whether gear is included.
- Surface, grade, wind, and temperature.
- Battery state of charge and battery condition.
- Measurement method and equipment.
- Whether figure is governed, field-measured, factory source, calculated, or maximum observed.
- Reviewer, review date, and public wording.

### Range

Each public range claim requires:

- Exact model, SKU, battery, charger, tire setup, and production configuration.
- Rider/load weight and gear/cargo assumptions.
- Terrain, elevation, surface, speed, riding mode, and temperature.
- Battery state at start and stop.
- Reserve assumption and whether the claim is maximum, typical, or planning range.
- Reviewer, review date, and public wording.

### Battery and Charger

Each public battery/charger claim requires:

- Chemistry, voltage, Ah, Wh, cell/source documentation, BMS notes where available.
- Charger part number, input/output rating, connector, communication/lock requirement.
- Charging time method and start/end state of charge.
- Storage guidance, temperature guidance, stop-use conditions, and replacement policy.
- Shipping restrictions and warranty terms.
- Reviewer, review date, and public wording.

### Motor and Controller

Each public motor/controller claim requires:

- Rated/continuous/max/peak definition.
- Controller limit, mode behavior, thermal behavior, and protection notes.
- Gearing, wheel size, and production configuration.
- Source document or engineering review.
- Reviewer, review date, and public wording.

## Claims That Must Stay Blocked

Do not publish these as final claims yet:

- "Up to" speed or range without a method label.
- Best/fastest/longest-range rankings.
- Runtime estimates converted from battery capacity.
- Charging time by model.
- Battery cycle-life or years-of-use estimates.
- Safe age/height/weight claims for youth models.
- Street-legal or registration eligibility tied to a model.
- Product/Offer schema that includes final technical specs as validated retail claims.

## Dashboard Requirements

The technical dashboard should track:

| Field | Requirement |
|---|---|
| SKU | Exact model and slug. |
| Claim type | Speed, range, battery, charger, motor, controller, tires, dimensions, or weight. |
| Source value | Raw source value and source file/document row. |
| Public value | Exact customer-facing wording. |
| Method label | Test or source method visible to reviewers and, when needed, customers. |
| Reviewer | Technical, battery, product, safety, or operations reviewer. |
| Review date | Last approved date. |
| Confidence | High, medium, low, or hold. |
| Blocker | Missing evidence or conflict. |
| Page usage | Routes/components where the claim appears. |

## Release Rules

Technical claims can move from private review to public only when:

1. The source value and public wording match.
2. The method label explains the conditions or source boundary.
3. Conflicting rows are resolved.
4. Battery and charger safety documents exist for the model.
5. Product and technical reviewers sign off.
6. The claim is reflected consistently in product cards, product pages, guides, comparison pages, schema, and ads.

## Next Actions

1. Resolve K2-60-MY battery capacity conflict.
2. Resolve K2-72-LZ weight row.
3. Build a speed/range method table for all nine SKUs.
4. Collect battery/charger/manual evidence per SKU.
5. Approve public wording for speed, range, battery, motor, charger, and weight claims.
6. Re-run product, policy, launch, decision, link, and React checks before public indexing.

