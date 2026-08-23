# Ovkara Youth Safety Evidence Pack

## Purpose

Youth pages are one of Ovkara's highest-trust and highest-risk decision areas. Parents are not
just choosing a product; they are deciding whether a child or teen can ride safely enough under
real supervision, terrain, fit, and ownership conditions. This pack prevents age, voltage, speed,
or product-card language from becoming unsupported youth-safety claims.

## Current Verdict

Youth decision framework: Ready for private review.

Youth product recommendation claims: Blocked for public launch.

G1 24V can remain a current kids/youth candidate in private review. K2 and X1 48V models can
remain step-up candidates, but they must not be published as kids bikes or automatic teen
recommendations until fit, controls, supervision, and safety review are approved.

## Youth Safety Gate Matrix

| Gate | Current status | Current evidence | Public blocker | Required approval |
|---|---|---|---|---|
| Age-based claims | Controlled | Pages say age is not enough | Approved fit table, measurement method, and public wording by model | Youth Safety + Product |
| G1 24V kids candidate | In progress | 420 mm seat, 18.5 kg curb weight, 40 kg rated load, 50 kg max load, 24V 1.5Ah battery, 180W motor, 9.94 mph source speed | Manual, fit range, control review, PPE guidance, terrain limits, charger/storage guidance | Youth Safety + Product + Battery |
| K2/X1 48V step-up candidates | In progress | Reclassified as Step-Up, not kids default | Youth/adult transition criteria, bike weight handling, control reach, terrain/supervision rules | Youth Safety + Product + Technical |
| Voltage guidance | Framework safe | 24V/36V/48V guide says voltage is not an age or safety rating | Battery docs, charger docs, speed/range methods, model fit review | Battery + Youth Safety + Product |
| Parent checklist | Framework safe | Fit, experience, control, riding area, protection, supervision, ownership | Approved measurement worksheet and parent acknowledgement workflow | Youth Safety + Support |
| PPE and riding area | Framework only | Pages defer to manual, local rules, qualified safety guidance | Approved PPE checklist, terrain boundaries, prohibited locations, local-rule disclaimer | Youth Safety + Legal |
| Stop-use and escalation | Partial | Battery/repair pages identify high-risk conditions | Youth-specific stop-use wording, support escalation path, incident intake fields | Youth Safety + Support + Battery |
| Product schema and recommendations | Blocked | No final Product/Offer schema release | Approved fit, safety, price, inventory, policy, media, and manuals | Product + Legal + Youth Safety |

## Product Classification Rules

| Classification | Allowed meaning | Blocked meaning |
|---|---|---|
| Kids | Candidate for parent-led fit review only after approved measurement and safety evidence | Universal child-safe product or age-guaranteed recommendation |
| Youth | Do not use as a final product class until criteria are approved | A vague middle category that makes 48V models look automatically child-appropriate |
| Step-Up | Larger transition platform requiring fit, control, terrain, and supervision review | A teen recommendation by age alone |
| Adult | Adult-oriented product class with fit and experience review | Safe for any older teen by default |

Current site rule: product cards may show `Kids`, `Step-Up`, or `Adult`, but the public copy must
explain that fit, controls, supervision, terrain, PPE, and support come before age or voltage.

## Per-Model Youth Safety Matrix

| SKU | Current youth role | Main youth-safety concerns | Release status |
|---|---|---|---|
| G1 24V | Kids/youth candidate | Fit range, 9.94 mph source-speed method, brake/control reach, supervision, PPE, lead-acid charger/storage, terrain limits, manual | Hold for youth-safety approval |
| K2-48-MX | Step-up candidate | 730 mm seat, larger/heavier platform, 48V system, 60 km/h source max speed, teen/adult transition criteria | Hold; not a kids recommendation |
| K2-48-MY | Step-up candidate | 780 mm seat, 14/17 wheels, 65 km/h source max speed, larger rider fit, supervision/terrain | Hold; not a kids recommendation |
| X1-48-MX | Step-up candidate | 730 mm seat, 51 kg net weight, aluminum-frame sport use, field modes up to 55 km/h | Hold; not a kids recommendation |
| X1-48-MY | Step-up candidate | 770 mm seat, 14/17 wheels, field modes up to 55 km/h, teen/adult transition criteria | Hold; not a kids recommendation |
| 60V/72V models | Adult candidates | Speed, weight, power, battery, terrain, legal-use boundaries | Exclude from youth recommendations unless separately approved |

## Required Fit Evidence

Each youth or step-up recommendation needs:

- Rider height range and inseam method.
- Rider weight with gear and model load limit.
- Seat height, stand-over/reach notes if applicable, bike weight, and wheel size.
- Brake lever reach and control-operability notes.
- Ability to manage the bike when stopped, walking, starting, braking, and turning.
- Skill/readiness checklist for parent review.
- Terrain and riding-area restrictions.
- Adult supervision rule.
- PPE checklist.
- Manual revision and reviewer date.

## Parent Decision Workflow

Before a parent is routed to a youth product CTA, the site should require or visibly present:

1. Measure rider height, inseam, and approximate geared weight.
2. Confirm riding experience and ability to follow instructions.
3. Confirm brake, throttle, and stop-control reach.
4. Confirm riding area is permitted, controlled, and separated from traffic.
5. Confirm active adult supervision for every ride.
6. Confirm PPE according to manual, local rules, and riding environment.
7. Confirm charger and storage remain under adult control.
8. Confirm parts, warranty, support, and stop-use escalation path.

## Youth Safety Copy Rules

Allowed:

- "Use age only as a starting point."
- "Measure before choosing."
- "Voltage is not an age rating."
- "Step-up models require fit and supervision review."
- "Contact support when fit, terrain, or safety guidance is unclear."

Blocked:

- "Best electric dirt bike for 8-year-olds" as a product claim.
- "Safe for kids" without model-specific evidence.
- "48V for teens" as a universal rule.
- "Beginner-proof" or "parent-approved" without evidence.
- Any claim that speed modes replace supervision.
- Any public-road or sidewalk suitability claim without legal evidence.

## Dashboard Requirements

The youth-safety dashboard should track:

| Field | Requirement |
|---|---|
| SKU | Exact model and slug. |
| Youth role | Kids candidate, step-up candidate, adult excluded, or approved youth model. |
| Fit evidence | Height, inseam, rider weight, seat height, bike weight, reach/control notes. |
| Readiness evidence | Experience, braking, turning, instruction-following, terrain maturity. |
| PPE requirement | Approved equipment checklist and source. |
| Supervision rule | Adult supervision language and boundary. |
| Terrain boundary | Permitted/prohibited use cases and local-rule disclaimer. |
| Battery/charger rule | Adult control, approved charger, storage, stop-use conditions. |
| Reviewer | Youth Safety, Product, Battery, Legal, or Support owner. |
| Review date | Last approved date. |
| Public wording | Exact page copy approved for publication. |

## Page Audit

| Page | Status | Notes |
|---|---|---|
| `/kids-youth/` | Private review ready | Correctly prioritizes measurement, control, supervision, terrain, PPE, and support. |
| `/kids-youth/ages-8-12/` | Private review ready | Correctly blocks universal age recommendations. |
| `/kids-youth/teens/` | Private review ready | Correctly frames teen selection as transition review, not age-based routing. |
| `/buying-guides/24v-36v-48v/` | Private review ready | Correctly says voltage is not age, speed, or safety proof. |
| G1 product page | Product/youth gated | Needs fit table, manual, PPE, speed method, charger/storage guidance. |
| 48V K2/X1 product pages | Step-up gated | Must remain step-up/adult-transition language until approved. |
| Adult 60V/72V pages | Youth-exclusion gated | Should not route youth buyers to higher-voltage models by age or price. |

## Release Rules

Do not publicly release youth recommendation claims until:

1. G1 fit table and youth safety language are approved.
2. K2/X1 48V transition criteria are approved or clearly excluded from youth recommendations.
3. PPE, terrain, supervision, charger/storage, and stop-use guidance are approved.
4. Speed/range methods are approved for any youth-visible product cards.
5. Product images, manual, price, inventory, shipping, warranty, returns, parts, and support are approved.
6. Public copy is checked so no page implies age-only, voltage-only, or mode-only safety.

## Next Actions

1. Build a G1 parent fit worksheet.
2. Create a K2/X1 step-up transition worksheet.
3. Collect manuals, battery/charger documents, PPE guidance, and stop-use conditions.
4. Define which products are excluded from youth pages.
5. Add youth-safety review dates to the dashboard.
6. Re-run launch, decision, link, React, and product-parameter checks.

