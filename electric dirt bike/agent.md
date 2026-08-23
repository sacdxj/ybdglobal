# Electric Dirt Bike SEO Keyword Cleaning Agent

## Confirmed Operating Spec

Use `electric_dirt_bike_preflight_decisions.md` as the source of truth for business boundaries, output goals, page-count targets, risk strategy, semantic QA mode, and final execution decisions.

This project preserves the Zhutova SEO workflow, sheet structure, semantic QA process, SERP validation process, dashboard behavior, article brief export behavior, and skill-based operating discipline. Only the product universe has changed: the business is now a US independent ecommerce site for electric dirt bikes.

## Purpose

Clean and classify raw English keyword exports for an Electric Dirt Bike ecommerce project.

The job is not to keep high-volume keywords by default. The job is:

```text
Raw keywords
-> normalize
-> filter by electric dirt bike business fit
-> classify rider, buyer, dealer, parts, safety, law, and comparison intent
-> group into Hub / Pillar / Topic / Cluster
-> create page opportunities
-> split into Build now / Build later / Parent-FAQ / Review / Reject
-> run semantic QA
-> optionally run SERP validation as evidence, not as the primary gate
-> output one production workbook
-> export article briefs from qualified page opportunities
-> feed blog and social content production from the same architecture
```

## Functional Rule

Do not rewrite this as a new project. Keep these functions:

- Keyword cleaning and classification.
- Hub / pillar / topic / cluster architecture.
- Production decision fields.
- Semantic QA sheets.
- Optional SERP evidence sheets.
- Streamlit SEO dashboard.
- Article brief exporter.
- Skill-driven article and content production rules.

Only replace the product boundary, keyword universe, page labels, copy rules, output filenames, and content strategy. Do not delete workbook fields, sheet names, semantic QA evidence, SERP evidence, or production decision labels.

## Business Boundary

Core SEO universe:

- US electric dirt bike buyers for an independent ecommerce store.
- Adult electric dirt bikes, especially performance, speed, 72V and 60V categories.
- Kids and youth electric dirt bikes, including ages 8-12, teens/youth 13+, and low-voltage safety intent.
- Street legal electric dirt bikes, dual-sport bikes, registration, insurance, license, VIN, lights, mirrors, and compliance education.
- Electric motocross bikes, electric trail bikes, electric pit bikes, mini electric dirt bikes, and off-road e-motos.
- Buyer-intent searches around best, price, for sale, buy, dealer, distributor, wholesale, specs, range, top speed, battery, motor power, suspension, brakes, tires, charging, maintenance, shipping, financing, warranty, parts, and accessories.
- Commercial collection and product-support pages for the store's own brand.
- Competitor and alternative searches such as Surron, Sur Ron, Razor, Talaria, Stark, KTM, Segway, Yamaha, Honda, and budget alternatives when the intent can be captured by objective comparison content that links back to the own brand.

Adjacent but useful:

- Electric dirt bike vs gas dirt bike comparisons.
- Off-road e-bike and lightweight electric motorcycle topics when electric dirt bike overlap is clear.
- Safety gear, riding tips, battery care, winter storage, troubleshooting, maintenance, trail rules, and ownership education.
- Parent education for kids/youth sizing, age fit, speed limiting, protective gear, and supervised riding.
- Dealer, wholesale, financing, shipping, returns, warranty, and support questions when relevant to purchase confidence.

Out of scope:

- Pure pedal bicycle topics without electric dirt bike relevance.
- Generic motorcycle content without electric/off-road relevance.
- ATV, scooter, mobility scooter, generic e-bike, toy-only, or random automotive terms unless the electric dirt bike overlap is clear.
- Entertainment, celebrity, game, adult, medical, illegal, coupon/login/tracking/navigation-only traffic.
- Unsafe modification instructions, speed limiter bypasses, battery hacking, or legal evasion.

Mandatory reject:

- Adult/erotic/porn terms.
- Medical drug/medication intent.
- Illegal riding, bypassing limits, unsafe battery modification, or instructions that increase physical risk.
- Entertainment/games/celebrity traffic.
- Coupon/login/tracking/navigation intent without buyer, support, or product value.

## Site Structure

Map valid pages to this structure:

- Main Menu / Header:
  - Shop All.
  - Adult Dirt Bikes.
    - High-Speed (40+ MPH).
    - 72V Powerhouses.
    - 60V Performance.
  - Kids & Youth.
    - Ages 8-12.
    - Teens & Youth (13+).
    - Safety First (Low Voltage).
  - Street Legal.
    - Dual-Sport Bikes.
    - Registry & Compliance Guide.
  - Buying Guides.
- Footer Menu:
  - Customer Support.
    - Contact Us.
    - Shipping & Delivery.
    - Financing Plans (Pay Later).
  - Buying Guides.
    - Are Electric Dirt Bikes Street Legal in the US?
    - 72V vs 60V: Which Battery System Do You Need?
    - How Long Does an Electric Dirt Bike Battery Last?
  - Compare & Alternatives Blog.
    - Own Brand vs. Surron.
    - Own Brand vs. Razor.
    - Budget-Friendly Electric Dirt Bike Guides.
    - Other competitor and alternative articles.

Commercial pillars, collections, header navigation, and product pages must feature the store's own brand only. Competitor names must never become collection pillars or product navigation.

## Architecture Levels

Preserve:

```text
Hub
-> Macro Pillar
-> Topic
-> Cluster
-> Page / Article Candidate
-> QA
-> Production Decision
-> Semantic Production Decision
-> SERP Recommended Decision
```

Recommended hubs:

- Product Collections and Purchase Intent
- Adult Performance and Power
- Kids, Youth and Safety
- Street Legal and Dual Sport
- Comparisons and Alternatives
- Battery, Range and Charging
- Parts, Accessories and Maintenance
- Dealer, Wholesale and Support
- Out of Scope / Review

## Target Output Mode

Use balanced mode.

Final workbook must include:

- Core production pages.
- Batch 1 SEO pages.
- Batch 2 SEO expansion.
- Parent/FAQ merge candidates.
- Manual review queue.
- Full opportunity pool.
- Keyword-level master classification.
- Semantic QA evidence.
- SERP evidence when validation is enabled.

Target ranges:

- Build now after semantic QA: 50-80 pages.
- Core commercial/header pages inside Build now: 5-15 pages.
- Batch 2 SEO expansion: 150-300 pages.
- Parent/FAQ merge candidates: 50-120 pages.
- Manual review queue: under 80 pages.
- Full opportunity pool: keep all qualified opportunities even when not Build now.

If Build now is below 40, the rules are probably too conservative.

If Build now is above 100, the rules are probably too aggressive.

## Classification Fields

Use these fields:

- Normalized Keyword
- Business Scope: Core, Adjacent, Out of Scope
- Functional Filter: Shop / Buyer, Adult / Performance, Kids / Youth, Street Legal, Comparison, Battery / Charging, Parts / Accessories, Support / Maintenance, Dealer / Wholesale, Safety / Rules, Review
- Platform / Brand Filter: Own Brand, Surron, Razor, Talaria, Stark, KTM, Segway, Yamaha, Honda, Other, blank
- Buyer Profile: Adult Rider, Parent Buyer, Youth Rider, Beginner, Performance Rider, Trail Rider, Commuter / Dual-Sport, Dealer / Wholesale, Parts Buyer, Consumer / Unknown
- Search Intent Class: commercial/product, collection navigation, comparison, street-legal/how-to, battery/range, maintenance/support, parts/accessories, safety/parent education, dealer/wholesale, consumer navigation, official lookup/navigation, review
- Site Section: Header Collections, Product Pages, Buying Guides, Compare & Alternatives Blog, Customer Support, Help / FAQ, Review
- Page Role: collection page, product-support page, buying guide, comparison article, street-legal guide, battery guide, parts/support guide, FAQ/section, parent-page section, review
- Risk Flags: generic-bike, generic-motorcycle, ATV/scooter, toy-only, unsafe-modification, legal-compliance-review, competitor-navigation, coupon, tracking, weak-commercial, mixed-intent, out-of-scope
- Geo / Language Intent: US English, non-US English, mixed/unknown, non-English
- Production Decision: Build now, Build later, Merge into parent/FAQ, Manual review before build, Reject/deprioritize
- Production Batch: Batch 1 - Commercial/Core, Batch 1 - SEO Articles, Batch 2 - SEO Expansion, Parent Support, Review Queue, Rejected

## Decision Rules

Use `Build now` only when:

- the page has clear electric dirt bike business fit
- the intent is buyer, collection, product, comparison, street legal, parts/support, dealer/wholesale, financing/shipping, or high-value ownership education
- the term is US English or explicitly approved
- no serious legal, safety, competitor-navigation, coupon, tracking, or unrelated-vehicle risk exists
- the page has enough demand or enough clustered supporting keywords
- the total Build now count stays inside the 50-80 target range

Use `Build later` for valid SEO expansion pages that are useful but not first-batch priorities.

Use `Merge into parent/FAQ` for useful long-tail ownership, support, safety, and parts terms that do not justify standalone pages.

Use `Manual review before build` for legal/compliance topics, mixed e-bike/motorcycle/ATV intent, competitor terms, local dealer terms, brand navigation terms, or borderline semantic fit.

Use `Reject/deprioritize` for pure consumer navigation, unrelated bicycles/motorcycles/ATVs/scooters, toys with no dirt-bike fit, coupons, login, tracking, entertainment, adult, medical, illegal, or unsafe modification traffic.

Competitor keywords should mostly be `Build later`, `Manual review before build`, or controlled Blog opportunities. They should not become own-brand collection or product pages.

## Semantic QA

Semantic QA is enabled for this project.

Required:

- Embed non-rejected keyword rows.
- Embed page candidates.
- Calculate Semantic Topic Similarity.
- Calculate Semantic Cluster Similarity.
- Calculate Semantic Topic Purity.
- Calculate Semantic Cluster Purity.
- Add `Semantic QA Decision`.
- Add `Semantic Production Decision`.
- Add `Keyword_Semantic_QA`.
- Add `Semantic_QA`.
- Add `Semantic_Group_Summary`.
- Add `Feature_Consistency_Audit`.

Final execution must use `Semantic Production Decision`, not the pre-semantic `Production Decision`.

Do not claim semantic QA unless the embedding API actually runs or the cache proves the exact texts were embedded.

## SERP Validation

SERP validation is an optional second-pass evidence layer for page candidates after semantic QA.

Required when enabled:

- Use SerpAPI Google results for United States English SERPs (`gl=us`, `hl=en`).
- Fetch organic top URLs, titles, snippets and domains for page primary keywords.
- Analyze SERP business-intent fit against electric dirt bike buyer, comparison, product, parts, support, street-legal, dealer, financing, and ownership intent.
- Calculate SERP overlap for same-topic page candidates to flag merge or split review.
- Add page blueprint fields: `url_slug`, H1, page type, search intent, Level 1/2/3 categories, H2/H3 recommendations, internal links and page priority.
- Add `SERP Recommended Decision` without overwriting `Semantic Production Decision`.
- Add `SERP_Evidence`, `SERP_Merge_Review`, `SERP_Content_Blueprint`, `Internal_Links`, and `SERP_Feature_Audit`.

SERP should not rescue out-of-scope traffic into Build now. It may only support, downgrade, merge-review, or manual-review existing qualified opportunities.

## Article Brief Production

Use `article_brief_exporter.py` as the article production interface.

Each brief should turn one qualified page opportunity into a writing assignment with:

- primary keyword
- page type
- search intent
- SERP competitors and gaps when available
- H1/H2/H3 structure
- internal links
- CTA
- proof layer
- risk boundary
- reviewer/data requirements

All briefs must route unsupported product, warranty, dealer, parts, range, speed, and legal claims to `[DATA NEEDED: ...]` instead of inventing proof.

## Content And Social Production Loop

The SEO workbook is the planning system for site pages, blog articles, and social topics.

Use this repeatable loop:

```text
Product positioning
-> keyword boundary
-> site structure
-> page opportunity pool
-> Build now / Build later priority
-> article brief
-> article production
-> social content columns
-> data feedback
```

Social content should reuse the same pillars:

- adult performance and speed
- kids/youth safety
- street-legal education
- 72V vs 60V and battery/range
- comparison and alternatives
- maintenance, parts and support
- shipping, financing and purchase confidence

Do not turn social into random vehicle entertainment. Every recurring column should connect back to buyer trust, product education, safety, or conversion.

## Required Workbook Sheets

Final workbook must include:

- Keyword_Master.
- Topic_Map.
- Topic_Mid.
- Mid_Clusters.
- Article_Plan_Mid.
- Page_Opportunity_Expansion.
- QA_Scored_Topics.
- QA_Scored_Clusters.
- QA_Scored_Articles.
- Production_Batches.
- Execution_Roadmap.
- Site_Foundation.
- Keyword_Semantic_QA.
- Semantic_QA.
- Semantic_Group_Summary.
- Feature_Consistency_Audit.
- SERP_Evidence, when SERP validation is enabled.
- SERP_Merge_Review, when SERP validation is enabled.
- SERP_Content_Blueprint, when SERP validation is enabled.
- Internal_Links, when SERP validation is enabled.
- SERP_Feature_Audit, when SERP validation is enabled.

## Final QA Rules

Before finalizing:

- Source row count must match `Keyword_Master`.
- Build now must be between 50 and 80 after semantic QA.
- Sensitive terms must not appear in Build now.
- Unsafe modification, legal evasion, and competitor-navigation terms must not appear in Build now.
- Competitor terms must remain Blog-only and link back to own-brand commercial pages.
- Street-legal pages must be reviewed for legal/compliance accuracy.
- Battery, speed, range, safety, warranty, dealer, and parts claims need proof or `[DATA NEEDED: ...]`.
- Very large clusters must be represented as multiple page opportunities or marked for parent/FAQ.
- `Feature_Consistency_Audit` must match actual implemented behavior.
- `SERP_Feature_Audit` must match actual SerpAPI/cache coverage when SERP validation is enabled.

## Final Principle

One final version. One production workbook. Strict business-fit gate.

The project should win from qualified US electric dirt bike buyer, comparison, product, parts, support, street-legal, dealer, financing, and education intent, not from broad unrelated traffic.
