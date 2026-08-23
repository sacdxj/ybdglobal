# SEO Keyword Cleaning Preflight

Before running keyword cleaning for any new project, confirm these inputs first.

Do not start by generating the final workbook unless the user explicitly says to use defaults.

## 1. Business Boundary

Ask what is:

- Core business intent.
- Adjacent but useful intent.
- Out-of-scope intent.
- Mandatory reject categories.

Examples:

- Consumer shopping, coupons, tracking, login, entertainment, adult, medical, legal-risk, or unrelated traffic.
- Brand/platform terms that may be navigational.
- Competitor terms that need review.

## 2. Site Structure

Confirm the intended website structure, such as:

- Home.
- Solutions.
- Services / Features.
- Platforms / Integrations.
- Resources.
- Help / FAQ.
- Pricing.
- About / Contact.

Do not force keywords into a guessed structure if the project has a real structure.

## 3. Output Goal

Ask which output mode the user wants:

- Core production pages only.
- Core pages plus SEO expansion.
- Full opportunity pool.
- All of the above in separate sheets.

## 4. Target Page Counts

Ask for target ranges:

- Build now pages.
- Build later pages.
- Review queue tolerance.
- Whether long-tail pages should be separate pages or merged into parent/FAQ.

Useful defaults when the user has no preference:

- Conservative: 30-50 Build now pages.
- Balanced: 50-100 Build now pages.
- Aggressive: 100-200+ Build now pages.

## 5. Risk Strategy

Confirm how to handle:

- Sensitive categories.
- Low-volume long-tail terms.
- Platform/marketplace brand terms.
- Competitor terms.
- Geo/language mismatch.
- Mixed-intent terms.
- Product category pages.

## 6. Semantic QA

Confirm whether embedding-based semantic QA should run:

- No semantic QA: rule-based classification only.
- Page-candidate semantic QA only.
- Keyword-level plus page-candidate semantic QA.

If semantic QA is enabled:

- Use real embedding calls.
- Write model, embedded row count, cache path, pass/review/block counts.
- Add semantic fields to final production sheets.
- Use `Semantic Production Decision` for final execution.

## 7. Required Final Views

For production-ready output, include:

- Keyword_Master.
- Topic_Map.
- Topic_Mid.
- Mid_Clusters.
- Page_Opportunity_Expansion.
- QA_Scored_Topics.
- QA_Scored_Clusters.
- QA_Scored_Articles.
- Production_Batches.
- Execution_Roadmap.
- Site_Foundation.
- Feature_Consistency_Audit.
- Semantic_QA sheets when semantic QA is enabled.

## Operating Rule

For a new project, first produce or confirm an `agent.md` with the above decisions.

Then run cleaning.

Then verify:

- Source row count equals Keyword_Master row count.
- Build now count is inside the target range.
- Sensitive/risky terms are not in Build now.
- Very large clusters are split or marked as parent/FAQ.
- Semantic claims match real implemented output.
