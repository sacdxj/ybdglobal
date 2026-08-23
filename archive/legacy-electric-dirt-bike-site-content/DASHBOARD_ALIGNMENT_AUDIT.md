# Dashboard Alignment Audit

## Conclusion

The content set is fully accounted for against the Dashboard keyword opportunity pool, but it
does not mechanically copy every Dashboard URL, page type, H2, or H3 recommendation.

This is intentional. The Dashboard is used as the demand, clustering, priority, and decision
source. Human editorial rules correct cannibalization, competitor placement, unsafe claims, and
machine-generated heading noise before content production.

## Dashboard Source Reviewed

Source workbook:

`electric dirt bike/outputs/electric_dirt_bike_keyword_architecture_serp.xlsx`

Reviewed sheets:

- `Production_Batches`
- `Site_Foundation`
- `SERP_Content_Blueprint`
- `Internal_Links`

## Candidate Coverage

| Semantic production decision | Dashboard candidates | Accounted for |
|---|---:|---:|
| Build now | 19 | 19 |
| Build later | 10 | 10 |
| Merge into parent/FAQ | 19 | 19 |
| Manual review before build | 8 | 8 |
| **Total** | **56** | **56** |

Every candidate is mapped in `CANDIDATE_DISPOSITION.md` to:

- a standalone commercial, guide, support, legal, or Blog page;
- a stronger parent page or subsection;
- or a review hold.

## Alignment That Was Preserved

- Shop All is the main electric dirt bike commercial hub.
- Adult content owns adult fit, performance, 72V, 60V, and fast-bike intent.
- Kids & Youth owns parent buying, ages 8-12, teens, and low-voltage safety intent.
- Street Legal owns legal, dual-sport, registration, license, VIN, and compliance intent.
- Buying Guides owns price, range, motor, charging, battery, and selection education.
- Parts and repair intent is routed into Customer Support.
- Competitor intent is used only for comparison Blog acquisition.
- Build now, Build later, merge, and manual-review boundaries are respected.
- Commercial CTAs return visitors to own-brand collections or products.

## Intentional Corrections

### 1. Shop All and "For Sale"

Dashboard candidates:

- Shop All Electric Dirt Bikes
- Electric Dirt Bikes for Sale

Final treatment:

- One canonical `/shop/` collection page.

Reason:

- Both terms have the same transactional job and would compete with each other as separate
  collection pages.

### 2. Budget Threshold Pages

Dashboard contains multiple candidates from under $100 through under $5,000.

Final treatment:

- One `/buying-guides/price/` page with live price bands and threshold jump links.

Reason:

- Separate threshold pages would be thin, repetitive, and difficult to keep accurate.

### 3. 24V, 36V, and 48V

Final treatment:

- One parent-first voltage guide.

Reason:

- Voltage is not an age or safety rating. The combined guide can explain the shared decision
  without repeating generic content.

### 4. Competitor Pages

Dashboard uses the `Compare & Save` section and `/compare/` URLs.

Final treatment:

- `/blog/compare/` only.

Reason:

- Surron, Razor, Talaria, Stark, KTM, Yamaha, Honda, Segway, CAKE, and Kuberg are acquisition
  topics, not own-brand commercial navigation or product categories.

### 5. Page Types

Some Dashboard collection candidates are labeled `SEO Article`, including core shopping or
collection intent.

Final treatment:

- Collection, collection-pillar, buying-guide, support, legal-guide, or comparison-blog based on
  the buyer's actual job.

Reason:

- Page type must match intent and site function, not a generic exporter default.

### 6. H2 and H3 Recommendations

Dashboard-generated headings contain keyword fragments such as spelling variants, years,
retailer/model residue, and generic related words.

Final treatment:

- Rebuilt around rider fit, terrain, control, voltage, battery, range, charging, chassis,
  safety, support, budget, and legal verification.

Reason:

- Keyword fragments do not resolve buyer decisions and can create low-quality content.

## SERP Evidence Limitation

The current Dashboard workbook reports:

- `SERP Status = missing-cache` for 56 of 56 candidates.
- `SERP Intent Match = Weak` for 56 of 56 candidates.

Therefore:

- the workbook should not be described as live-SERP validated;
- SERP-generated page types and headings are not strong enough to copy without review;
- `Semantic Production Decision` remains the primary production gate;
- current official sources are required for legal and competitor claims.

## Additions Not Driven by a Standalone Keyword Candidate

The content system also adds pages required by a real ecommerce site:

- Home.
- Buying Guides hub.
- Compare Blog hub.
- Shipping & Delivery.
- Warranty & Returns.
- Contact.
- Battery Life & Care.
- Product-detail template.

These pages support navigation, conversion, trust, and ownership even when the Dashboard does not
promote them as standalone keyword opportunities.

## Remaining Gap

The Dashboard contains no real SKU-level product-detail opportunities because no own-brand
catalog was supplied.

Current treatment:

- A product-detail content template exists.
- No model names, prices, specifications, speed, range, warranty, shipping, or street-legal
  claims are invented.
- Commercial pages remain blocked until real product data is added.

## Final Assessment

- Keyword candidate accounting: complete.
- Hub/Pillar/Cluster positioning: aligned.
- Audience and intent design: aligned and strengthened.
- Competitor boundary: aligned and corrected.
- URL/page-type implementation: intentionally refined.
- Live SERP validation: incomplete in the current Dashboard.
- Product-page completeness: blocked by missing catalog data.

