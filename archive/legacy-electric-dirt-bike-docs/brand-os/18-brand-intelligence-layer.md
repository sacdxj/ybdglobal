# Brand Intelligence Layer

## Purpose

The Brand Intelligence Layer turns the Brand OS and Decision Engine into a self-improving system.

The goal is not only to publish content or launch a quiz. The goal is to learn from real buyer
behavior, identify new questions, improve decision rules, update content, and strengthen brand
trust over time.

## Core Loop

```text
Search Console
-> GA4
-> Clarity
-> Support
-> Reviews
-> YouTube
-> Email
-> Decision Engine
-> Buyer Questions
-> Rule Updates
-> Content Updates
-> Homepage Updates
-> Brand Learning
```

## Operating Principle

Every data source should answer one question:

```text
What does the buyer still need to feel confident?
```

## Data Sources

### Google Search Console

Use for:

- Emerging buyer questions.
- Query patterns by CEP.
- Pages with impressions but low CTR.
- Pages that attract wrong intent.
- New comparison, legal, youth, range, and support questions.

Key fields:

- Query.
- Page.
- Country.
- Impressions.
- Clicks.
- CTR.
- Average position.

### GA4

Use for:

- Decision Engine starts.
- Step answers.
- Result paths.
- CTA clicks.
- Guide-to-product flow.
- Support clicks.
- Product inquiry clicks.
- Brand search and direct traffic trends.

Core events:

```text
decision_engine_start
decision_engine_step_answer
decision_engine_result_view
decision_engine_result_cta_click
decision_engine_product_click
decision_engine_support_click
decision_engine_no_fit_result
```

### Microsoft Clarity

Use for:

- Scroll depth.
- Rage clicks.
- Dead clicks.
- Mobile layout friction.
- Decision Engine abandonment.
- Result panel confusion.
- CTA visibility problems.

Do not use Clarity only as a heatmap tool. Use it to find confidence breakdowns.

### Support And Contact

Use for:

- Questions users ask before buying.
- Missing policy information.
- Product-fit confusion.
- Warranty and shipping anxiety.
- Youth safety concerns.
- Street-legal misunderstandings.
- Parts and repair gaps.

Support tags should map to Decision Engine concerns:

- `fit`
- `safety_control`
- `speed_power`
- `range_battery`
- `street_legal`
- `budget_total_cost`
- `support_ownership`
- `competitor_comparison`

### Reviews And Owner Feedback

Use for:

- Real fit outcomes.
- Real range assumptions.
- Assembly issues.
- Parts issues.
- Common upgrades.
- Youth rider feedback.
- Maintenance patterns.
- Product expectations versus reality.

Owner feedback is proof fuel. It should improve product pages, guides, and decision rules.

### YouTube

Use for:

- Questions in comments.
- Video retention drop-off points.
- Topics with high watch time.
- Misunderstood technical concepts.
- Comparison interest.
- Youth safety anxiety.

Each useful comment cluster should become:

- Decision Engine rule input.
- Content update.
- FAQ.
- New video topic.

### Email

Use for:

- Guide download interest.
- Clicks by persona.
- Abandoned decision paths.
- Buyer-stage segmentation.
- Follow-up questions.
- Product shortlist interest.

Email should continue the decision path, not only send promotions.

## Buyer Question Pipeline

All sources feed one pipeline:

```text
Raw signal
-> Buyer question
-> CEP
-> Persona
-> Concern
-> Decision path
-> Content or rule update
-> Measurement
```

Example:

```text
Raw signal: Many users search "is 72v too much for beginner"
Buyer question: Is 72V appropriate for beginner riders?
CEP: Performance upgrade anxiety
Persona: Adult trail starter
Concern: speed_power / safety_control
Decision path: 60V / 72V performance comparison
Action: Update 60V/72V guide and Decision Engine performance result
Measurement: Result CTA click and guide engagement
```

## Intelligence Review Cadence

### Weekly

- Review Decision Engine path distribution.
- Review support/contact question tags.
- Check major Clarity friction.
- Add urgent content fixes.

### Monthly

- Review Search Console query clusters.
- Update CEP map.
- Update content priorities.
- Review result path CTA rates.
- Identify missing product proof.

### Quarterly

- Review Brand Flywheel metrics.
- Update Decision Engine rules.
- Refresh top buying guides.
- Re-score high-traffic pages with Brand DNA.
- Update roadmap.

## Decision Engine Learning Rules

### Add A New Path When

- A recurring buyer question does not fit existing paths.
- A concern creates high support volume.
- A guide gets traffic but poor onward clicks.
- A new product category enters the catalog.

### Update A Path When

- Users abandon after a specific result.
- Support questions reveal missing proof.
- Product data changes.
- Legal or policy information changes.
- Owner feedback changes confidence status.

### Lower Confidence When

- Support data is missing.
- Product proof is incomplete.
- Legal review is missing.
- Youth safety review is missing.
- Range/speed methods are unclear.

### Raise Confidence When

- Product proof is approved.
- Policies are published.
- Reviews and owner feedback support the claim.
- Legal or safety review is complete.
- The path consistently leads to useful buyer action.

## Content Update Rules

Update content when:

- Search Console shows a new question cluster.
- Decision Engine results have low CTA click rate.
- Support repeats the same question.
- Product proof changes.
- Competitor source changes.
- A legal or safety page needs current review.

Do not create a new article until checking:

- Does this map to a CEP?
- Does this reduce buyer risk?
- Does an existing page already answer it?
- Should it be a section, FAQ, guide, tool, video, or support update?

## Homepage Update Rules

Update homepage modules when:

- One CEP dominates new visitors.
- Decision Engine result distribution shifts.
- A high-risk buyer segment grows.
- A new product category becomes proof-complete.
- Brand search starts increasing around a specific promise.

The homepage should reflect buyer reality, not internal preference.

## AI Integration

AI can help:

- Cluster raw questions.
- Draft content briefs.
- Suggest Decision Engine rule changes.
- Summarize support themes.
- Map queries to CEPs.
- Generate page update recommendations.

AI cannot:

- Approve legal claims.
- Invent product proof.
- Decide safety guidance alone.
- Publish unsupported claims.
- Replace human review.

## Intelligence Dashboard MVP

Recommended dashboard sections:

1. Decision Engine funnel.
2. Top result paths.
3. Top concerns.
4. No-fit results.
5. Support question themes.
6. Search query clusters.
7. Content update queue.
8. Product proof gaps.
9. CEP trend map.
10. Brand search trend.

## Metrics

### Decision Metrics

- Decision Engine starts.
- Completion rate.
- Result path distribution.
- CTA click rate by result.
- Support click rate by result.
- No-fit result rate.

### Trust Metrics

- Return visitors.
- Guide engagement.
- Product-to-support path.
- Brand search growth.
- Email reply rate.
- Review sentiment.

### Content Metrics

- Query growth by CEP.
- CTR by page type.
- Internal click-through.
- Content QA score.
- Update frequency.

### Product Metrics

- Product page visits by path.
- Availability requests.
- Support questions by model.
- Review themes.
- Parts/service questions.

## Governance

Every intelligence-driven update needs:

- Data source.
- Buyer question.
- Persona.
- CEP.
- Proposed change.
- Proof requirement.
- Owner.
- Review status.
- Measurement plan.

## Future Automation

Potential automation:

```text
Pull GSC queries
-> cluster buyer questions
-> map to CEPs
-> compare against existing pages
-> create content update queue
-> suggest Decision Engine rule updates
-> send weekly review report
```

Automation should recommend. Humans approve.

## Strategic Outcome

The brand becomes more valuable as it learns:

- What buyers fear.
- What they compare.
- What they misunderstand.
- Which proof builds trust.
- Which products fit which riders.
- Which content creates confident buyers.

That learning is the moat.
