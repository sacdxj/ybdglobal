# Keyword Cleaning Preflight V2

## Source

`C:\Users\Administrator\Downloads\USB charging cable.xlsx`

Expected source columns:

- Keyword
- Intent
- Volume
- Trend
- Keyword Difficulty
- CPC (USD)
- Competitive Density
- SERP Features
- Number of Results

## Required labels

- `core_keep`: directly matches an in-scope product, specification or procurement task
- `expand`: relevant informational/application term that supports an approved commercial parent
- `manual_seed`: supplied by the project owner but absent from measured source data
- `review`: relevant but ambiguous intent, product fit or SERP overlap
- `discard_noise`: outside positioning, consumer-only noise, brand navigation or unrelated accessory

## Required intent classes

- Product
- Specification
- Procurement
- Buyer Solution
- Application
- Informational
- Brand/Competitor Review
- Discard

## Conservative rules

- Do not retain a keyword merely because it contains USB, HDMI, DP, cable, hub or charger.
- Conversion/adaptor queries must not be mapped to straight cable pages.
- “Best,” “what is,” “how,” “vs” and troubleshooting terms belong to informational review, not product pages.
- Brand/model terms stay out of the commercial sitemap unless an explicit comparison policy approves them.
- Manufacturer/supplier/factory variants usually merge within one procurement page per product family.
- Product category pages must not target manufacturer intent.
- Specification clusters require a plausible product/evidence path before becoming pages.

## Outputs before page planning

1. Full keyword review table
2. Retained keyword library
3. Discarded/noise table
4. Brand and ambiguous review queue
5. Intent summary
6. Product-family summary

Page URLs must not be assigned until these cleaning outputs are stable.
