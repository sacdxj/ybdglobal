# Decision Engine MVP Specification

## Status

Version: 1.0
Date: 2026-08-01
Status: Product specification for future implementation.

## Product Name

Working product name:

```text
Find Your Bike
```

This is a working feature name, not the final brand name.

## Strategic Role

The Decision Engine is the first interactive expression of the brand promise:

```text
We help riders buy with confidence.
```

The MVP should not behave like a generic quiz. It should behave like a guided decision tool that
routes the buyer to the safest and most useful next step.

## MVP Promise

```text
Answer a few questions. Get a clearer starting path, product direction, and proof checklist.
```

Do not promise:

```text
Get the perfect bike recommendation.
```

The current catalog and proof set are not strong enough for that claim.

## MVP Goals

1. Help first-time visitors choose a starting path.
2. Segment buyers by rider type, use case, and concern.
3. Route buyers to the most useful guide, collection, product group, or support page.
4. Show proof checks before product claims.
5. Collect analytics on buyer intent for future product, content, SEO, and inventory decisions.

## Non-Goals

The MVP does not:

- Guarantee a perfect model recommendation.
- Verify street legality.
- Replace youth safety review.
- Replace product support.
- Calculate real-world range.
- Confirm price, inventory, shipping, warranty, or financing.
- Recommend road use.
- Recommend by age alone.
- Recommend by voltage alone.

## Placement

### Homepage

The homepage should eventually lead with the Decision Engine.

Recommended placement:

1. Hero promise.
2. `Find Your Bike` module.
3. Decision paths / guide cards.
4. Product comparison.
5. Ownership support.

### Buying Guides Hub

Secondary placement:

- Entry point for buyers who prefer reading first.

### Product Collections

Use as a helper:

- "Not sure which model fits? Start the decision guide."

## MVP Flow

### Step 1: Rider Type

Question:

```text
Who is the bike for?
```

Options:

- Adult rider.
- Teen or youth rider.
- Child / first-time young rider.
- Farm, ranch, or property use.
- I mainly need street-legal information.
- I am comparing a brand like Surron or Talaria.

Required event:

```text
decision_engine_step_1_rider_type
```

### Step 2: Riding Goal

Question:

```text
How will it be used most often?
```

Options:

- Beginner off-road practice.
- Trail or weekend riding.
- Higher-performance riding.
- Quiet property or utility use.
- Parent-supervised youth riding.
- Road-use research.
- Brand comparison.

Required event:

```text
decision_engine_step_2_use_case
```

### Step 3: Main Concern

Question:

```text
What do you most need to feel confident about?
```

Options:

- Rider fit and size.
- Safety and control.
- Speed and power.
- Range and battery.
- Street legality.
- Budget and total cost.
- Shipping, warranty, parts, or repair.
- Competitor comparison.

Required event:

```text
decision_engine_step_3_primary_concern
```

### Step 4: Budget Readiness

Question:

```text
Where are you in the buying process?
```

Options:

- Just learning.
- Comparing options.
- Ready to shortlist models.
- Need to ask support before buying.
- Dealer or wholesale inquiry.

Required event:

```text
decision_engine_step_4_buyer_stage
```

## MVP Outputs

Each result should include:

1. Decision path.
2. Why this path fits.
3. Best next guide.
4. Product direction.
5. Proof checklist.
6. Recommended CTA.
7. Confidence status.

## Decision Paths

### Path A: Parent-First Youth Fit

Triggered by:

- Child / first-time young rider.
- Teen or youth rider.
- Parent-supervised youth riding.
- Rider fit and size.
- Safety and control.

Output:

- Primary guide: `/kids-youth/`
- Supporting guide: `/kids-youth/ages-8-12/`
- Voltage guide: `/buying-guides/24v-36v-48v/`
- Product direction: Kids/youth products only.
- Proof checklist:
  - Rider height and inseam.
  - Reach and control.
  - Speed control.
  - Brakes.
  - Protective gear.
  - Supervision.
  - Riding area.
  - Model-specific fit proof.

Confidence status:

```text
Medium confidence until final youth fit and safety review are complete.
```

### Path B: Adult Trail Starter

Triggered by:

- Adult rider.
- Beginner off-road practice.
- Trail or weekend riding.
- Rider fit and size.
- Budget and total cost.

Output:

- Primary guide: `/adult-dirt-bikes/`
- Supporting guide: `/buying-guides/best/`
- Product direction: Adult products, with preference for manageable fit and control.
- Proof checklist:
  - Seat height.
  - Rider confidence.
  - Terrain.
  - Brakes and suspension.
  - Range assumptions.
  - Shipping and warranty.

Confidence status:

```text
Medium confidence until approved fit ranges, prices, and policies are complete.
```

### Path C: 60V / 72V Performance Comparison

Triggered by:

- Higher-performance riding.
- Speed and power.
- Adult rider.
- Comparing Surron/Talaria.

Output:

- Primary guide: `/adult-dirt-bikes/fast/`
- 60V guide: `/adult-dirt-bikes/60v/`
- 72V guide: `/adult-dirt-bikes/72v/`
- Supporting guide: `/buying-guides/motor-power/`
- Product direction: Adult 60V and 72V products only.
- Proof checklist:
  - Verified speed method.
  - Range method.
  - Motor/controller data.
  - Brakes and suspension.
  - Rider skill.
  - Parts and warranty.

Confidence status:

```text
Low to medium confidence until public performance test methods are approved.
```

### Path D: Street-Legal Verification

Triggered by:

- Street-legal information.
- Road-use research.
- Street legality concern.

Output:

- Primary guide: `/street-legal/`
- Supporting guide: `/street-legal/registration-license/`
- Dual-sport guide: `/street-legal/dual-sport/`
- Product direction: No product should be recommended as street legal until documents prove it.
- Proof checklist:
  - VIN/title/MSO.
  - Required equipment.
  - Model classification.
  - State/local rules.
  - Insurance and registration requirements.
  - Legal/compliance review.

Confidence status:

```text
Low confidence until model documents and legal review are complete.
```

### Path E: Farm / Property Utility

Triggered by:

- Farm, ranch, or property use.
- Quiet property or utility use.
- Range and battery.
- Shipping, warranty, parts, or repair.

Output:

- Primary guide: `/buying-guides/range/`
- Support guide: `/support/parts-maintenance/`
- Repair guide: `/support/repair/`
- Product direction: Adult or youth products depending on rider size and terrain.
- Proof checklist:
  - Terrain.
  - Range assumptions.
  - Charging access.
  - Parts availability.
  - Maintenance.
  - Warranty and repair path.

Confidence status:

```text
Medium confidence for decision path; product confidence depends on support data.
```

### Path F: Competitor Alternative Research

Triggered by:

- Comparing a brand like Surron or Talaria.
- Competitor comparison.
- Higher-performance riding.

Output:

- Primary hub: `/blog/compare/`
- Surron guide: `/blog/compare/surron-alternatives/`
- Talaria guide: `/blog/compare/talaria-alternatives/`
- Razor guide when youth/parent concern exists: `/blog/compare/razor-alternatives/`
- Product direction: Only show products that are genuinely comparable by rider and use case.
- Proof checklist:
  - Official competitor source.
  - Matching product class.
  - Fit comparison.
  - Range/speed method.
  - Support and ownership.
  - Current-source review.

Confidence status:

```text
Medium confidence for research path; product alternative confidence depends on verified mapping.
```

### Path G: Support-First Buyer

Triggered by:

- Shipping, warranty, parts, or repair.
- Need to ask support before buying.
- Budget and total cost.

Output:

- Shipping: `/support/shipping/`
- Warranty: `/support/warranty-returns/`
- Parts: `/support/parts-maintenance/`
- Contact: `/support/contact/`
- Product direction: No product recommendation until ownership concerns are addressed.
- Proof checklist:
  - Shipping coverage.
  - Damage process.
  - Warranty terms.
  - Return rules.
  - Parts catalog.
  - Service workflow.

Confidence status:

```text
Low confidence until policies are approved.
```

## Recommendation Rules

### Rule 1: Youth Safety Overrides Sales

If rider type is child or teen/youth and concern includes safety or fit:

- Prioritize youth guide and safety checklist.
- Do not route directly to checkout.
- Do not recommend by age alone.

### Rule 2: Street-Legal Overrides Product Recommendation

If street legality is selected:

- Route to street-legal verification.
- Do not show a "street legal model" recommendation unless verified documents exist.

### Rule 3: Product Proof Controls Confidence

If price, inventory, public test method, shipping, warranty, or fit data is pending:

- Lower confidence status.
- Show proof checklist.

### Rule 4: Voltage Is Not Enough

If user selects speed and power:

- Ask or infer rider skill and terrain.
- Recommend 60V/72V guide path, not a voltage-only product.

### Rule 5: No-Fit Is A Valid Result

If no current product fits:

```text
No current model is a confident match yet. Start with this guide or contact support before buying.
```

This builds trust.

## MVP Data Model

Recommended TypeScript model:

```ts
type RiderType =
  | 'adult'
  | 'teen_youth'
  | 'child'
  | 'property_utility'
  | 'street_legal_research'
  | 'competitor_comparison';

type UseCase =
  | 'beginner_practice'
  | 'trail_weekend'
  | 'performance'
  | 'property_utility'
  | 'parent_supervised_youth'
  | 'road_use_research'
  | 'brand_comparison';

type PrimaryConcern =
  | 'fit'
  | 'safety_control'
  | 'speed_power'
  | 'range_battery'
  | 'street_legal'
  | 'budget_total_cost'
  | 'support_ownership'
  | 'competitor_comparison';

type BuyerStage =
  | 'learning'
  | 'comparing'
  | 'shortlisting'
  | 'ask_support'
  | 'dealer_wholesale';

type ConfidenceStatus = 'high' | 'medium' | 'low';

interface DecisionEngineAnswer {
  riderType: RiderType;
  useCase: UseCase;
  primaryConcern: PrimaryConcern;
  buyerStage: BuyerStage;
}

interface DecisionEngineResult {
  pathId: string;
  title: string;
  summary: string;
  confidenceStatus: ConfidenceStatus;
  confidenceReason: string;
  primaryGuideHref: string;
  secondaryLinks: Array<{ label: string; href: string }>;
  productFilter?: {
    riderClass?: Array<'Kids' | 'Youth' | 'Adult'>;
    voltage?: Array<'24V' | '48V' | '60V' | '72V'>;
  };
  proofChecklist: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}
```

## Analytics Events

Recommended GA4-style events:

```text
decision_engine_start
decision_engine_step_answer
decision_engine_result_view
decision_engine_result_cta_click
decision_engine_product_click
decision_engine_support_click
decision_engine_no_fit_result
```

Event properties:

```text
rider_type
use_case
primary_concern
buyer_stage
result_path
confidence_status
cta_label
destination_url
```

## Success Metrics

MVP should track:

- Completion rate.
- Result path distribution.
- CTA click rate by path.
- Product click rate by path.
- Support click rate by path.
- No-fit result rate.
- Email capture rate if added later.
- Guide engagement after result.

## Content Requirements Before Build

Each output path needs:

- A route that exists.
- A short result explanation.
- A proof checklist.
- A CTA.
- A fallback path.
- No unsupported product claim.

## UX Requirements

- Mobile-first.
- Four steps maximum in MVP.
- One question per screen or compact segmented UI.
- Show progress.
- Allow back/edit.
- Never hide safety or legal caveats.
- Results should be shareable in future versions.
- Avoid dark-pattern urgency.

## Copy Requirements

The UI should sound like the Guide / Navigator archetype.

Example result opening:

```text
Your best starting path is parent-first youth fit. Before comparing models, verify rider size,
control, supervision, gear, and riding area.
```

Avoid:

```text
Perfect match! Buy this bike now.
```

## Launch Gate

MVP can launch as:

```text
Find Your Bike: decision guide
```

MVP cannot launch as:

```text
AI recommendation engine
```

Until:

- Product proof is complete.
- Fit rules are approved.
- Legal rules are reviewed.
- Youth safety logic is reviewed.
- Support policies are approved.

## Implementation Sequence

1. Build static data file for questions and result paths.
2. Build a client-side Astro/React component or vanilla JS module.
3. Add homepage module below the hero.
4. Add analytics events.
5. Add no-fit and low-confidence states.
6. Validate mobile UX.
7. Review safety/legal copy.
8. Run build and link checks.

## Future Versions

### V1.1

- Email capture after result.
- Saved result URL.
- More nuanced product filters.

### V2

- Fit calculator.
- Product scoring.
- Confidence score by proof completeness.
- Comparison matrix.

### V3

- AI-assisted advisor.
- Owner review and range data.
- Dealer/service lookup.
- Post-purchase plan.
