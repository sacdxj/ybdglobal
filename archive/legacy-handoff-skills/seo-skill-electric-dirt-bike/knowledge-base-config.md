# Electric Dirt Bike Knowledge Base Configuration

## Purpose

Use Electric Dirt Bike sources before creating SEO strategy, outlines, page briefs, content, keyword classifications, or optimization recommendations. The goal is factual consistency and strict business-fit filtering for a US electric dirt bike ecommerce site.

## Paths

Primary project:

```yaml
knowledge_base:
  path: "D:\\Electric Dirt Bike\\electric dirt bike"
  language: "en-US"
  market: "United States"
  brand: "Electric Dirt Bike"
```

Brand content rules:

```yaml
brand_content_rules:
  path: "D:\\Electric Dirt Bike\\obsidian-electric-dirt-bike"
```

## Source Priority

Read sources in this order when available:

1. `D:\Electric Dirt Bike\electric dirt bike\agent.md`
2. `D:\Electric Dirt Bike\obsidian-electric-dirt-bike\AGENT.md`
3. `D:\Electric Dirt Bike\electric dirt bike\electric_dirt_bike_preflight_decisions.md`
4. `D:\Electric Dirt Bike\electric dirt bike\navigation_menu.md`
5. Existing briefs in `D:\Electric Dirt Bike\electric dirt bike\outputs\briefs\*.md`
6. `D:\Electric Dirt Bike\electric dirt bike\outputs\electric_dirt_bike_keyword_architecture_serp.xlsx`
7. `D:\Electric Dirt Bike\electric dirt bike\outputs\electric_dirt_bike_keyword_architecture_semantic.xlsx`
8. `D:\Electric Dirt Bike\electric dirt bike\outputs\electric_dirt_bike_keyword_architecture.xlsx`
9. `C:\Users\hzthu\.codex\skills\seo-skill-electric-dirt-bike\scripts\build_electric_dirt_bike_keyword_architecture.py`
10. `C:\Users\hzthu\.codex\skills\seo-skill-electric-dirt-bike\scripts\apply_electric_dirt_bike_semantic_qa.py`
11. `C:\Users\hzthu\.codex\skills\seo-skill-electric-dirt-bike\scripts\apply_electric_dirt_bike_serp_validation.py`

When a workbook exists, inspect sheet names and columns before relying on it. Do not assume semantic QA or SERP validation ran unless the relevant sheets/cache are present.

## Evidence Rules

Never invent:

- product specs, voltage, battery capacity, motor power, top speed, range, charging time, rider weight limits, or compatibility
- customer stories, testimonials, reviews, test rides, or case studies
- warranty, shipping, financing, dealer, wholesale, or inventory promises
- universal street legality, registration outcomes, license requirements, or insurance rules
- certifications, safety approvals, compliance credentials, or official partnerships

Allowed without a specific data file:

- general buyer education about rider fit, terrain, voltage tradeoffs, safety gear, maintenance, battery care, and comparison logic
- clearly framed strategy recommendations
- SERP-derived observations when SERP data was actually checked
- page architecture recommendations derived from the project spec

If data is missing, output:

```markdown
[DATA NEEDED: describe the missing Electric Dirt Bike fact]
Suggested source to update: `D:\Electric Dirt Bike\electric dirt bike\[file-or-folder]`
```

## Business-Fit Filter

Classify every keyword/page before writing:

- **Core**: electric dirt bike buyer, adult performance, kids/youth safety, street legal/dual-sport, 72V/60V, battery/range, parts/support, shipping/financing, dealer/wholesale.
- **Adjacent**: electric vs gas dirt bike, trail rules, safety gear, riding tips, battery care, maintenance, off-road e-bike/lightweight e-moto with clear overlap.
- **Review**: competitor navigation, mixed e-bike/motorcycle/ATV intent, local dealer terms, legal topics, unsafe-adjacent queries.
- **Out of Scope**: pure pedal bicycle, generic motorcycle, ATV, scooter, toy-only, mobility, entertainment, adult, medical, illegal, coupon/login/tracking/navigation-only.

## Workbook Handling

For Electric Dirt Bike production workbooks, preserve:

- `Keyword_Master`
- `Topic_Map`
- `Topic_Mid`
- `Mid_Clusters`
- `Article_Plan_Mid`
- `Page_Opportunity_Expansion`
- `QA_Scored_Topics`
- `QA_Scored_Clusters`
- `QA_Scored_Articles`
- `Production_Batches`
- `Execution_Roadmap`
- `Site_Foundation`
- `Keyword_Semantic_QA`
- `Semantic_QA`
- `Semantic_Group_Summary`
- `Feature_Consistency_Audit`
- `SERP_Evidence`
- `SERP_Merge_Review`
- `SERP_Content_Blueprint`
- `Internal_Links`
- `SERP_Feature_Audit`

Use `Semantic Production Decision` as the final decision when semantic QA exists. Use `SERP Recommended Decision` as evidence, not as a replacement for semantic QA.
