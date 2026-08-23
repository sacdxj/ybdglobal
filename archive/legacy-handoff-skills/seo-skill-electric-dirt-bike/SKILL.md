---
name: seo-skill-electric-dirt-bike
description: Complete Electric Dirt Bike SEO system for US ecommerce electric dirt bike projects: keyword workbook cleaning, Hub/Pillar/Topic/Cluster architecture, semantic QA, SERP validation, page opportunity workbooks, article brief export, SERP analysis, content outlines, SEO writing, content optimization, and audit workflows. Use when Codex needs to process Electric Dirt Bike keyword spreadsheets or create, audit, plan, brief, write, or optimize SEO pages around adult performance, kids/youth safety, 72V/60V power, street legal/dual sport questions, Surron/Razor/Talaria alternatives, battery/range/charging, parts, maintenance, dealer/wholesale, shipping, or financing.
---

# Electric Dirt Bike SEO Assistant

## Core Identity

This skill is the bike equivalent of `seo-skill-zhutova`, consolidated into one skill. Its primary goal is to turn an Electric Dirt Bike keyword export into the SEO architecture workbook and dashboard system. Content production is downstream of that dashboard, not a separate or competing goal.

Keyword architecture automation includes raw workbook cleaning, Hub / Pillar / Topic / Cluster, page opportunities, semantic QA, SERP validation, internal links, and dashboard-ready workbook output.

Content production includes page briefs, SERP analysis, outlines, writing, proof layer, technical SEO, and review after the dashboard/workbook has decided what should be built.

Write and plan SEO for qualified buyer, product, comparison, support, and safety intent, not broad vehicle traffic. Electric Dirt Bike should win from useful buyer education, clear own-brand commercial paths, careful safety/legal guidance, and proof-aware content.

## Required Source Order

Before writing, outlining, auditing, or planning Electric Dirt Bike SEO content:

1. Read the project rules in `D:\Electric Dirt Bike\electric dirt bike\agent.md`.
2. Read the brand content rules in `D:\Electric Dirt Bike\obsidian-electric-dirt-bike\AGENT.md`.
3. Prefer these sources when present:
   - `D:\Electric Dirt Bike\electric dirt bike\electric_dirt_bike_preflight_decisions.md`
   - `D:\Electric Dirt Bike\electric dirt bike\navigation_menu.md`
   - `D:\Electric Dirt Bike\electric dirt bike\outputs\electric_dirt_bike_keyword_architecture_serp.xlsx`
   - `D:\Electric Dirt Bike\electric dirt bike\outputs\electric_dirt_bike_keyword_architecture_semantic.xlsx`
   - `D:\Electric Dirt Bike\electric dirt bike\outputs\briefs\*.md`
   - `D:\Electric Dirt Bike\electric dirt bike\article_brief_exporter.py`
   - this skill's `scripts\build_electric_dirt_bike_keyword_architecture.py`
   - this skill's `scripts\apply_electric_dirt_bike_semantic_qa.py`
   - this skill's `scripts\apply_electric_dirt_bike_serp_validation.py`
4. Do not invent product specs, top speed, range, battery capacity, charging time, warranty, shipping time, financing terms, dealer coverage, legal status, certifications, reviews, test results, or customer cases.
5. If a required fact is missing, write `[DATA NEEDED: ...]` and name the local file or team source that should be updated.

## Keyword Workbook Automation

Use the bundled scripts in this skill for keyword architecture work. Do not use the old project-local skill path.

Default project folder:

```text
D:\Electric Dirt Bike\electric dirt bike
```

Rule-based workbook:

```powershell
python "C:\Users\hzthu\.codex\skills\seo-skill-electric-dirt-bike\scripts\build_electric_dirt_bike_keyword_architecture.py" --input "electric_dirt_bike.xlsx" --agent "agent.md" --output "outputs\electric_dirt_bike_keyword_architecture.xlsx"
```

Semantic QA workbook:

```powershell
python "C:\Users\hzthu\.codex\skills\seo-skill-electric-dirt-bike\scripts\apply_electric_dirt_bike_semantic_qa.py" --source "outputs\electric_dirt_bike_keyword_architecture.xlsx" --output "outputs\electric_dirt_bike_keyword_architecture_semantic.xlsx" --cache "outputs\electric_dirt_bike_semantic_embedding_cache.jsonl"
```

SERP validation workbook:

```powershell
python "C:\Users\hzthu\.codex\skills\seo-skill-electric-dirt-bike\scripts\apply_electric_dirt_bike_serp_validation.py" --source "outputs\electric_dirt_bike_keyword_architecture_semantic.xlsx" --output "outputs\electric_dirt_bike_keyword_architecture_serp.xlsx"
```

If no SerpAPI key is available, use `--dry-run` and do not claim live SERP evidence.

Workbook automation workflow:

1. Read `agent.md` and `electric_dirt_bike_preflight_decisions.md`.
2. Inspect source workbook columns and sample rows.
3. Run the rule-based architecture script.
4. Run semantic QA only when embeddings or cache evidence are available.
5. Run SERP validation only after semantic QA exists.
6. Verify:
   - `Keyword_Master` row count matches the source workbook.
   - `Production_Batches` contains only qualified or reviewable opportunities.
   - Semantic QA fields exist only when semantic QA actually ran.
   - SERP audit sheets do not claim live coverage when run in dry-run mode.
   - competitor names remain Blog-only and do not become own-brand collection/product navigation.
   - street-legal, battery, safety, speed/range, warranty, shipping, dealer, and financing claims are routed to proof/review when needed.

Required workbook sheets:

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
- `Feature_Consistency_Audit`
- `Keyword_Semantic_QA`, when semantic QA is enabled
- `Semantic_QA`, when semantic QA is enabled
- `Semantic_Group_Summary`, when semantic QA is enabled
- `SERP_Evidence`, when SERP validation is enabled
- `SERP_Merge_Review`, when SERP validation is enabled
- `SERP_Content_Blueprint`, when SERP validation is enabled
- `Internal_Links`, when SERP validation is enabled
- `SERP_Feature_Audit`, when SERP validation is enabled

## Article Brief Input

When a standard article brief exists, treat it as the primary production input, then verify facts against project files.

Standard briefs are generated by:

```powershell
python "D:\Electric Dirt Bike\electric dirt bike\article_brief_exporter.py" --keyword "Primary Keyword"
```

Default brief output:

```text
D:\Electric Dirt Bike\electric dirt bike\outputs\briefs\*.md
```

The brief should carry:

- `Primary Keyword`
- `Recommended URL Slug`
- `Recommended H1`
- page role, hub, macro pillar, cluster
- page priority score and search volume
- `Semantic Production Decision`
- `SERP Recommended Decision`
- `SERP Intent Match`
- `SERP Merge/Split Flag`
- SERP titles, snippets, and top URLs when available
- recommended H2/H3
- internal link candidates
- proof layer, risk boundary, and CTA guidance

Brief-first workflow:

1. Read the article brief.
2. Read project `agent.md`, brand `AGENT.md`, and any overlapping existing briefs/articles.
3. Confirm the production decision still makes sense. If it says merge, review, or reject, do not write a standalone article unless the user explicitly overrides it.
4. Build a Search Intent Problem Map before writing.
5. Build an E-E-A-T Target and Proof Layer before writing.
6. Use SERP evidence to understand intent and gaps. Do not copy competitor headings or claims.
7. Add electric dirt bike information gain: rider fit, terrain fit, speed/range tradeoffs, voltage, battery, charging, suspension, brakes, tires, safety, parts, maintenance, warranty/support, shipping, financing, or dealer path.
8. Preserve the brief fields in the final output so analytics feedback can join back to the workbook.
9. Run the SEO Writing Supervisor before approving the article.

## Search Intent Resolution Standard

Every article must solve the buyer's real problem, not merely contain the keyword.

Before drafting, create a Search Intent Problem Map with:

- **Primary job-to-be-done**: what the searcher wants to decide now.
- **Searcher stage**: parent buyer, beginner rider, adult performance rider, comparison shopper, street-legal researcher, parts/support buyer, dealer/wholesale prospect.
- **Decision blockers**: rider size, age, terrain, budget, speed, voltage, battery/range, charging, safety, legality, warranty, shipping, financing, parts, maintenance, or brand comparison.
- **Minimum useful answer**: what the page must explain so the reader can take the next step.
- **Proof or method needed**: product spec table, comparison matrix, checklist, source note, reviewer, calculator, or `[DATA NEEDED]`.
- **Conversion bridge**: when the reader should shop all bikes, view adult bikes, view kids/youth bikes, compare voltage, read street-legal guidance, contact support, or ask about dealer/wholesale.

High-quality Electric Dirt Bike SEO writing must include at least four depth assets when relevant:

- rider-fit checklist
- age/safety checklist
- speed/range/battery tradeoff table
- voltage comparison table
- terrain-use decision table
- competitor alternative matrix
- maintenance/parts checklist
- legal/safety limitation note
- FAQ that answers real objections
- own-brand next-step path

## E-E-A-T Target Standard

Every page must define its E-E-A-T target before drafting:

1. **Trust goal**: what the reader must trust by the end, such as fit guidance, safe buying logic, or cautious legal boundaries.
2. **Experience goal**: what practical perspective should be visible: rider fit, terrain fit, product ownership, parent supervision, parts/support, charging, maintenance.
3. **Expertise goal**: what specialized knowledge must be shown: voltage, battery, motor, range, speed, suspension, brakes, tires, rider weight, charging, safety gear, legal requirements.
4. **Authority goal**: why the site is credible: ecommerce product guidance, support path, product-selection framework, and own-brand buying route.
5. **Evidence plan**: exact proof elements needed: local product source, spec sheet, reviewer, official legal source, manufacturer data, SERP evidence, or `[DATA NEEDED]`.
6. **Risk boundary**: what must not be claimed: unsupported speed/range, universal street legality, warranty/dealer availability, battery modification advice, unsafe riding, or legal evasion.

## Proof Layer Requirement

Every publishable article needs a Proof Layer:

- **Brand/product proof**: product sheet, approved positioning, support workflow, real spec, real image, real warranty/shipping/financing source, or `[DATA NEEDED]`.
- **External proof**: official or reputable source for legal, safety, battery, standards, or policy claims.
- **Source-to-claim map**: map each important claim to a source URL, local file, or `[DATA NEEDED]`.
- **Example proof**: real example, anonymized example, or illustrative scenario with assumptions.
- **Method proof**: how SERP, workbook, product data, and external sources were used.
- **Reviewer proof**: who must review safety, legal, battery, warranty, or product-spec content.
- **Missing proof risk**: what remains weak.
- **Publish strength**: `Hold`, `Publish as test`, `Publish strong`, or `Publish only after proof added`.

Proof Layer blocking failures:

- unsupported top-speed/range/battery/product claim
- no official or authoritative source for legal/safety claims
- fake test, fake customer case, fake review, or invented spec
- publish decision says strong while important proof is missing

## Competitive Advantage Audit

Every article must explain how it expects to compete in the SERP:

- **Dominant SERP pattern**: ecommerce category, product listing, listicle, buyer guide, competitor brand page, forum/social result, legal explainer, or mixed intent.
- **Competitor strengths**: what top results do well.
- **Competitor gaps**: what they miss: rider fit, parent safety, realistic range, voltage tradeoffs, parts/support, shipping/financing, legal caveats, or own-brand next step.
- **Electric Dirt Bike advantage**: what this page adds that generic competitors do not.
- **Content moat**: table, checklist, product filter, spec comparison, support flow, calculator, official-source map, or reviewer note.
- **Can it win?** choose `Likely`, `Possible`, `Unlikely`, or `Unknown`.

## Business Boundary

Core SEO universe:

- US electric dirt bike buyers.
- Adult electric dirt bikes, especially performance, speed, 72V, and 60V categories.
- Kids and youth electric dirt bikes, including ages 8-12, teens/youth 13+, and low-voltage safety intent.
- Street legal electric dirt bikes, dual-sport bikes, registration, insurance, license, VIN, lights, mirrors, and compliance education.
- Electric motocross bikes, trail bikes, pit bikes, mini electric dirt bikes, and off-road e-motos.
- Buyer-intent searches around best, price, for sale, dealer, distributor, wholesale, specs, range, speed, battery, motor, suspension, brakes, tires, charging, maintenance, shipping, financing, warranty, parts, and accessories.
- Competitor and alternative searches when used for objective blog acquisition that links back to own-brand products.

Reject or deprioritize:

- pure pedal bicycle topics
- generic motorcycle topics without electric/off-road relevance
- ATV, scooter, mobility scooter, toy-only, random automotive, entertainment, celebrity, game, adult, medical, illegal, coupon/login/tracking/navigation-only traffic
- unsafe modification, speed-limiter bypass, battery hacking, or legal evasion

## SEO Workflow

Use this order:

1. **Keyword Architecture**, when starting from a spreadsheet: run the bundled workbook scripts and verify sheet/row/audit integrity.
2. **Knowledge Base Search**: read local bike files and briefs.
3. **Business-Fit Gate**: classify Core, Adjacent, Review, or Out of Scope.
4. **SERP Analysis**: analyze US English SERP when current evidence matters (`gl=us`, `hl=en`).
5. **Intent Classification**: classify as commercial/product, comparison, street-legal/how-to, battery/range, parts/support, safety/parent education, dealer/wholesale, navigation, or review.
6. **PAA and Related Questions**: map real questions to H2/H3 and FAQ candidates.
7. **Page Type Selection**: choose collection page, product-support page, buying guide, comparison article, street-legal guide, battery guide, parts/support guide, FAQ/section, parent-page section, or review.
8. **Outline and Brief**: match search intent while adding buyer decision value.
9. **Content Writing**: write in US English unless requested otherwise.
10. **Writing Supervisor Review**: score the draft before publishing.
11. **Technical SEO**: create title, meta, URL slug, headings, internal links, and schema recommendations.
12. **Validation**: run the checklist and flag missing data, business-fit risk, SERP mismatch, weak proof, or writing-supervisor failures.

## Site Architecture

Map valid pages into:

- Shop All
- Adult Dirt Bikes: High-Speed (40+ MPH), 72V Powerhouses, 60V Performance
- Kids & Youth: Ages 8-12, Teens & Youth (13+), Safety First (Low Voltage)
- Street Legal: Dual-Sport Bikes, Registry & Compliance Guide
- Buying Guides
- Customer Support: Contact, Shipping & Delivery, Financing Plans
- Compare & Alternatives Blog

Competitor names belong only in Blog comparison content and must link back to own-brand commercial pages.

## SEO Writing Supervisor

Use the supervisor before approving an outline, draft, or final article. Score each gate from 0-20:

1. **Business Fit Supervisor**: confirms the topic serves electric dirt bike buyers and is not unrelated vehicle traffic.
2. **SERP Intent Supervisor**: confirms page type and angle match search intent.
3. **Search Intent Resolution Supervisor**: confirms the page solves the buyer's practical decision.
4. **E-E-A-T Target Supervisor**: confirms trust, experience, expertise, authority, evidence, and risk boundary are explicit.
5. **Proof Layer Supervisor**: confirms product proof, external proof, claim mapping, examples, method, reviewer, missing proof, and publish strength.
6. **Competitive Advantage Supervisor**: confirms the page has a realistic reason to compete.
7. **Independent Review Supervisor**: caps publish strength when safety/legal/product proof review is missing.
8. **Truth and Evidence Supervisor**: blocks unsupported specs, speed/range, legal, warranty, dealer, shipping, financing, or case claims.
9. **Electric Dirt Bike Value Supervisor**: confirms buyer-specific value beyond generic powersports writing.
10. **Writing Quality Supervisor**: confirms clear US English, direct opening, useful tables/checklists, and natural CTA.

Blocking failures override the score:

- wrong business fit
- wrong search intent/page type
- unsupported speed/range/battery/legal/product/warranty/shipping/dealer claim
- fake case, fake review, fake test, or invented data
- no Electric Dirt Bike-specific information gain
- generic content that could be published by any powersports blog
- no internal-link plan
- writing supervisor score below 75

## Page Brief Output

When creating a brief, include:

- target keyword and US intent
- Business Scope: Core, Adjacent, Review, or Out of Scope
- page role and site section
- recommended URL slug
- H1
- title tag and meta description
- SERP pattern summary
- PAA/questions to answer
- H2/H3 outline
- Electric Dirt Bike angle
- required proof/data
- internal links
- schema recommendation and eligibility note
- author/reviewer/data method note
- technical launch QA
- writing supervisor checklist and target score
- production decision

## Workbook and Keyword Architecture

When working with bike keyword architecture workbooks, preserve:

- Business Scope
- Functional Filter
- Platform / Brand Filter
- Buyer Profile
- Search Intent Class
- Site Section
- Page Role
- Risk Flags
- Geo / Language Intent
- Production Decision
- Production Batch
- Semantic QA Decision
- Semantic Production Decision
- SERP Recommended Decision

Use `Semantic Production Decision` as the final decision when semantic QA exists. Use `SERP Recommended Decision` as evidence, not as a replacement for semantic QA.

## References

Read only the reference file needed for the current task:

- `knowledge-base-config.md`: source paths and evidence rules.
- `electric-dirt-bike-seo-guide.md`: business-fit guide and templates.
- `content/analysis.md`: content strategy and audit model.
- `content/methods/01-SERP分析.md`: SERP-first analysis and PAA extraction.
- `content/methods/02-内容大纲.md`: intent-based outline templates.
- `content/methods/03-内容写作.md`: writing quality, E-E-A-T, proof, links, FAQ.
- `content/methods/04-标题优化.md`: title and meta optimization.
- `content/methods/05-技术SEO.md`: schema, URL, heading, image, mobile, and speed checks.
- `seo-checklist.md`: pre-publish scoring.
- `scripts/build_electric_dirt_bike_keyword_architecture.py`: keyword workbook cleaning and page opportunity generation.
- `scripts/apply_electric_dirt_bike_semantic_qa.py`: embedding-based semantic QA.
- `scripts/apply_electric_dirt_bike_serp_validation.py`: SERP validation, content blueprint, and internal links.

## Automatic Fail Conditions

Content or page plans fail if any of these apply:

- no bike business-fit check
- unrelated bicycle/motorcycle/ATV/scooter/toy traffic treated as Build now
- unsafe modification or legal evasion content
- unsupported speed, range, battery, warranty, shipping, financing, legal, dealer, product, review, or customer claim
- search intent mismatches the SERP
- no direct answer near the opening
- no Electric Dirt Bike-specific angle beyond generic powersports advice
- competitor names used as own-brand collection/product navigation
- legal/safety/battery content lacks reviewer/source notes
- schema recommendation does not match visible content
- technical launch QA is missing
- writing supervisor score is below 75, or any blocking issue remains unresolved
