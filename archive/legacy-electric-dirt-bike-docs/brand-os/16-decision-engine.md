# Brand Decision Engine

## Purpose

The Decision Engine is the brand's future moat.

Articles can be copied. Product catalogs can be copied. A trusted decision system, improved by
data, support feedback, and product proof, is much harder to copy.

## Core Idea

The homepage should eventually shift from:

```text
Shop electric dirt bikes
```

to:

```text
Find Your Bike
```

The buyer answers a few structured questions and receives a decision path, shortlist, proof
checklist, and next step.

## Decision Engine Promise

```text
Answer a few questions. Get a safer, clearer electric dirt bike shortlist.
```

## Engine Inputs

### Rider Inputs

- Rider age range.
- Height.
- Inseam.
- Approximate weight.
- Experience level.
- Confidence level.
- Parent/supervision context.

### Use-Case Inputs

- Private property.
- Trail.
- Farm/ranch.
- Track/practice.
- Weekend recreation.
- Possible public-road interest.
- Transport and storage constraints.

### Performance Inputs

- Desired speed feel.
- Beginner/control priority.
- Range needs.
- Terrain difficulty.
- Hill use.
- Payload or utility needs.

### Budget Inputs

- Target budget.
- Flexibility.
- Financing interest.
- Accessory budget.
- Ownership-cost concern.

### Risk Inputs

- Youth safety concern.
- Street-legal concern.
- Battery/charging concern.
- Warranty/support concern.
- Repair/parts concern.

## Engine Outputs

### Decision Path

Examples:

- Parent-first youth fit path.
- Adult beginner trail path.
- 60V performance path.
- 72V experienced rider path.
- Street-legal verification path.
- Farm/property utility path.
- Support-first ownership path.

### Product Shortlist

Output only products that match available proof.

If no product fits, say so.

### Proof Checklist

Show what the buyer must verify:

- Fit.
- Speed control.
- Range method.
- Charging.
- Shipping.
- Warranty.
- Parts.
- Legal documents.

### Content Recommendations

Route the buyer to:

- Buying guide.
- Product page.
- Comparison page.
- Support page.
- Contact path.

### Confidence Score

Possible output:

```text
High confidence
Medium confidence
Low confidence: more data needed
```

Confidence score should be based on match quality and proof completeness, not sales priority.

## Decision Rules

### Youth Rule

Never recommend a youth bike by age alone.

Required:

- Size.
- Experience.
- Control.
- Supervision.
- Protective gear.
- Riding area.
- Model proof.

### Street-Legal Rule

Never recommend public-road use without documents and local verification.

Output should say:

```text
Treat as off-road until documentation and local rules are verified.
```

### Performance Rule

Never recommend by voltage alone.

Use:

- Rider skill.
- Terrain.
- Brakes.
- Suspension.
- Battery.
- Weight.
- Heat.
- Support.

### Range Rule

Never recommend range without assumptions.

Use:

- Rider weight.
- Terrain.
- Speed.
- Temperature.
- Battery.
- Riding mode.
- Test method.

### Support Rule

If warranty, parts, shipping, or repair data is missing, lower confidence.

## MVP Version

The first Decision Engine can be simple:

1. Choose rider type:
   - Adult.
   - Teen/youth.
   - Child.
   - Property/utility.
   - Street-legal research.

2. Choose use:
   - Beginner.
   - Trail.
   - Performance.
   - Farm/ranch.
   - Compare alternatives.

3. Choose concerns:
   - Safety.
   - Range.
   - Speed.
   - Budget.
   - Legal.
   - Support.

4. Output:
   - Starting guide.
   - Product category.
   - Proof checklist.
   - Support CTA.

## V2 Version

Add:

- Fit calculator.
- Product scoring.
- Model eligibility rules.
- Confidence score.
- Email capture.
- Saved shortlist.
- Comparison matrix.
- Analytics by answer path.

## V3 Version

Add:

- AI-assisted advisor.
- Owner review data.
- Range estimator.
- Dealer/service lookup.
- Accessory recommendations.
- Post-purchase maintenance plan.

## Engine Data Model

Recommended entities:

- Rider profile.
- Use case.
- Terrain.
- Risk concern.
- Product.
- Product proof.
- Policy proof.
- Legal status.
- Recommendation rule.
- Confidence score.
- CTA.

## Engine Analytics

Track:

- Most common rider type.
- Most common concern.
- Products shortlisted.
- Guides recommended.
- Confidence-score distribution.
- Email capture by path.
- Product inquiry by path.
- Support inquiry by path.
- No-fit results.

## Strategic Moat

The Decision Engine becomes stronger when it learns from:

- Buyer questions.
- Support tickets.
- Product data.
- Owner reviews.
- Range feedback.
- Repair patterns.
- Legal updates.
- Content performance.

## Launch Gate

Do not present the engine as a perfect recommender.

Position MVP as:

```text
A decision guide to help you narrow the right path.
```

Only call it a recommendation engine when product proof, fit rules, and support data are strong.
