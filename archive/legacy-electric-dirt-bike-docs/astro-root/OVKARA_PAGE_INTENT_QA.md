# Ovkara Page Intent QA

Date: 2026-08-02

## Verdict

The current content set is aligned with the Ovkara dashboard direction for private review:

- Every content page has dashboard-readable frontmatter for route, page type, keyword, audience, intent, buyer stage, CTA, proof status, and reviewers.
- Product pages now use review-oriented CTAs instead of direct "Choose model" language.
- Comparison pages now point to rider-fit or class-specific decision paths instead of using the comparison blog as a direct shop funnel.
- The fast-performance page no longer uses "fastest electric dirt bike" as the primary dashboard keyword.
- Street-legal language remains framed as a guide and verification workflow, not a product promise.

## QA Rules Applied

1. Business fit must serve US electric dirt bike buyers.
2. Each page must define audience, intent, buyer stage, CTA, and proof gate.
3. Product pages must not imply final purchase readiness before price, inventory, warranty, images, manuals, and support evidence are approved.
4. Competitor pages must remain comparison/blog acquisition pages and link back to own-brand decision paths.
5. Legal and safety content must use verification language, not universal claims.
6. Speed, range, battery, warranty, shipping, financing, and product claims must remain evidence-gated.

## Changes Made

### Dashboard Parsing

Removed UTF-8 BOM from 20 content files so internal QA scripts and dashboard extraction can read frontmatter consistently.

### Product CTAs

Updated product-page primary CTAs from direct purchase language to decision language:

- G1 24V: `Review Parent Fit`
- K2/X1 48V step-up models: `Review Fit & Quote`
- K2/X1 60V adult models: `Review Model Fit`
- K2 72V models: `Review Performance Fit`

### Comparison CTAs

Updated broad `/shop/` CTA routes on comparison pages to more intentional decision routes:

- Compare hub: `/buying-guides/best/`
- CAKE comparison: `/adult-dirt-bikes/`
- Honda/Yamaha research pages: `/buying-guides/best/`
- KTM comparison: `/adult-dirt-bikes/fast/`
- Kuberg comparison: `/buying-guides/best/`

### Performance Keyword

Changed the fast-performance page dashboard keyword from `fastest electric dirt bike` to `fast electric dirt bike` to reduce unsupported superlative pressure while keeping the page capable of answering fastest-related questions with caveats.

## Current Remaining Launch Boundary

This QA confirms page-intent alignment. It does not remove the public launch blockers already tracked in the evidence packs:

- Brand clearance
- Final visual identity
- Product images and manuals
- Retail price and inventory
- Warranty, returns, shipping, financing, and support identity
- Speed/range/battery test evidence
- Youth safety review
- Street-legal/legal review
- Analytics/privacy approval

