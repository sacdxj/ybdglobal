# Electric Dirt Bike Content System

## Current Scope

This folder defines website content before visual design or frontend implementation.

The future delivery stack is:

```text
Approved content
-> Astro content collections
-> static page templates
-> GitHub
-> Vercel
```

No visual direction, component styling, animation, or hosting decision should reshape the
content architecture. The page must first solve a real buyer problem.

## Positioning

The site is an independent US ecommerce brand that sells its own electric dirt bikes.

Core promise:

> Find the right electric dirt bike for your rider, terrain, speed goals, and budget.

Commercial pages feature only the store's own products. Surron, Razor, Talaria, Stark,
KTM, Yamaha, Honda, Segway, Cake, and Kuberg are Blog acquisition topics only.

## Page Standard

Every publishable page must define:

1. Target audience.
2. Search intent and buyer stage.
3. Job to be done.
4. Decision blockers.
5. Direct answer near the opening.
6. Useful decision tools such as filters, tables, checklists, or comparison matrices.
7. Required proof and reviewer.
8. Primary CTA and internal-link path.
9. Metadata and schema eligibility.
10. A clear reason the page is better than generic powersports content.

Unsupported product, legal, shipping, warranty, financing, battery, speed, and range
claims must use `[DATA NEEDED: ...]`.

## Files

- `PAGE_BLUEPRINTS.md`: approved page inventory and the content purpose of every page.
- `CANDIDATE_DISPOSITION.md`: mapping from the 56 workbook candidates to final pages,
  sections, Blog articles, or review holds.
- `DATA_REQUIREMENTS.md`: facts required before commercial copy can be publishable.
- `CONTENT_SCHEMA.md`: frontmatter and editorial marker contract for future Astro collections.
- `CONTENT_STATUS.md`: production totals, QA results, and remaining publication gates.
- `pages/*.md`: complete first-pass page content.
- `product-page-template.md`: SKU-level product content contract.
