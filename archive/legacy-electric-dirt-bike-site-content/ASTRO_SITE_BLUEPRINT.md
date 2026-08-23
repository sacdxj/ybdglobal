# Astro Static Site Blueprint

## Purpose

This blueprint converts the current SEO/content system into an Astro-ready static ecommerce
site plan. Product data is still draft, so the first implementation should focus on clean
navigation, content structure, reusable templates, and clear publish gates rather than live
checkout.

Current source content:

- 48 Markdown pages in `site-content/pages`.
- 9 draft product pages.
- 1 product catalog reference.
- 1 product data gap checklist.
- Dashboard output in `electric dirt bike/outputs/electric_dirt_bike_dashboard.html`.

## Site Positioning

The site should present a new own-brand electric dirt bike catalog organized by rider and use:

- Kids/youth entry: G1 24V only, pending safety and fit review.
- Compact 48V step-up: K2-48-MX-1214 and X1-48-MX-1214.
- Mid-size 48V: K2-48-MY-1417 and X1-48-MY-1417.
- 60V performance: K2-60-MY-1417 and X1-60-MY-1417.
- 72V performance: K2-72-MY-1417 and K2-72-LZ-1719.

Competitor brand names belong only in Blog comparison pages. Header, collection pages, product
pages, support pages, and buying guides should keep the focus on the store's own brand.

## Main Navigation

Header navigation:

| Label | URL | Page role |
|---|---|---|
| Shop All | `/shop/` | Full product catalog and filters |
| Adult Dirt Bikes | `/adult-dirt-bikes/` | Adult collection pillar |
| Kids & Youth | `/kids-youth/` | Parent-led youth collection pillar |
| Street Legal | `/street-legal/` | Legal/compliance education |
| Buying Guides | `/buying-guides/` | Guide hub |

Adult dropdown:

| Label | URL | Page role |
|---|---|---|
| Fast Bikes | `/adult-dirt-bikes/fast/` | Performance comparison |
| 72V Bikes | `/adult-dirt-bikes/72v/` | 72V collection guide |
| 60V Bikes | `/adult-dirt-bikes/60v/` | 60V collection guide |

Kids dropdown:

| Label | URL | Page role |
|---|---|---|
| Ages 8-12 | `/kids-youth/ages-8-12/` | Parent fit guide |
| Teens & Youth | `/kids-youth/teens/` | Teen readiness guide |
| 24V vs 36V vs 48V | `/buying-guides/24v-36v-48v/` | Youth voltage guide |

Footer navigation:

| Group | Links |
|---|---|
| Customer Support | Contact, Shipping, Warranty & Returns, Financing |
| Buying Guides | Best Bikes, Price, Range, Charging, Battery Life, Motor Power |
| Compare & Alternatives | Surron, Razor, Talaria, KTM, Stark VARG, Segway, Cake, Kuberg, Yamaha, Honda |
| Ownership | Parts & Maintenance, Repair & Service, Street Legal, Registration |

## Astro Content Collections

Recommended collection layout:

```text
src/content/pages/
src/content/products/
src/content/guides/
src/content/compare/
src/content/support/
src/content/legal/
src/data/navigation.ts
src/data/productCatalog.ts
```

For the first build, keep the existing Markdown as the editorial source and map pages by
`pageType`.

### Shared Frontmatter Schema

Required for every Markdown page:

```ts
{
  title: string;
  description: string;
  slug: string;
  pageType: string;
  primaryKeyword: string;
  audience: string;
  intent: string;
  buyerStage: string;
  status: string;
  primaryCta: string;
  primaryCtaHref: string;
  proofStatus: string;
  reviewers: string[];
}
```

### Product Data Schema

Products should eventually move from prose-only Markdown into a typed data file:

```ts
{
  model: string;
  family: "G1" | "K2" | "X1";
  slug: string;
  status: "draft-data-needed" | "ready";
  audienceClass: "kids-youth" | "adult-step-up" | "adult-performance";
  voltage: "24V" | "48V" | "60V" | "72V";
  battery: string;
  motorRated: string;
  motorMax: string;
  speedRecord: string;
  range: string;
  seatHeight: string;
  wheelSetup: string;
  ratedLoad: string;
  maxLoad: string;
  frame: string;
  charger: string;
  chargeTime: string;
  sourcePriceLoose: number | null;
  sourcePriceContainer: number | null;
  retailPrice: number | null;
  availability: "draft" | "in-stock" | "out-of-stock" | "preorder";
  mediaStatus: "missing" | "partial" | "complete";
}
```

## Page Templates

### Home Template

Use for `pageType: home`.

Required modules:

- Compact hero with brand/category signal.
- Shop by rider: Kids, Compact 48V, Adult, Performance.
- Featured product grid.
- Bike finder entry module.
- Compare by voltage.
- Buying guide strip.
- Support/trust strip.

Do not make this a generic landing page. The first viewport should immediately show electric
dirt bikes and the shopping paths.

### Collection Template

Use for `collection`, `collection-pillar`, and `collection-guide`.

Required modules:

- H1 and intent answer.
- Product cards or qualifying-candidate table.
- Filter chips by rider, voltage, wheel setup, seat height, speed class, and range.
- Comparison table.
- Fit/safety guidance.
- Internal links to related guides.
- FAQ.

Collection pages must show own-brand products only.

### Product Template

Use for `pageType: product`.

Required modules:

- Product hero with gallery placeholder.
- Purchase summary.
- Best for / not best for.
- Key specs table.
- Fit and terrain guidance.
- Battery and charging.
- Speed/range evidence.
- Chassis/components.
- Compare nearby models.
- Delivery, warranty, support.
- FAQ.
- Schema gate note hidden from final public UI or shown only in admin/editor mode.

Product pages should not use competitor names.

### Buying Guide Template

Use for:

- `buying-guide`
- `commercial-buying-guide`
- `technical-buying-guide`
- `support-buying-guide`
- `comparison-buying-guide`

Required modules:

- Direct answer.
- Decision framework.
- Product examples where relevant.
- Evidence limits.
- CTA back to collection or product.
- FAQ.

### Comparison Blog Template

Use for:

- `comparison-blog`
- `research-blog`
- `blog-hub`

Required modules:

- Editorial disclosure.
- Exact competitor-model identification.
- Comparison method.
- Own-brand candidate table.
- Non-equivalence warning.
- CTA back to own-brand collections.
- Source review date where competitor information is used.

Competitor names should not leak into product or collection navigation.

### Support Template

Use for:

- `support-policy`
- `support-guide`
- `contact`

Required modules:

- Plain policy summary.
- Scope and limitations.
- Customer action steps.
- Links to related support pages.
- Data-needed notices until operational policies are final.

### Legal Template

Use for:

- `legal-guide`
- `legal-product-guide`
- `legal-how-to`

Required modules:

- Compliance warning.
- State/local-rule caveat.
- Product documentation requirements.
- Registration or equipment checklist.
- Legal review gate.

## Product Card Rules

Every product card should include:

- Model.
- Product family.
- Rider class.
- Voltage.
- Seat height.
- Battery.
- Rated/max motor.
- Speed record with method label.
- Range with method label.
- Wheel setup.
- Draft status.
- Link to product page.

Do not show:

- Source factory price as retail price.
- Street-legal claim.
- Kids recommendation for K2 or X1.
- `40+ MPH` badge without approved mph conversion and test method.

## First Build Routes

Static routes should be generated from frontmatter `slug`:

```text
/                                   home.md
/shop/                              shop-all.md
/adult-dirt-bikes/                  adult-dirt-bikes.md
/adult-dirt-bikes/60v/              adult-60v.md
/adult-dirt-bikes/72v/              adult-72v.md
/adult-dirt-bikes/fast/             adult-fast.md
/kids-youth/                        kids-youth.md
/kids-youth/ages-8-12/              kids-ages-8-12.md
/kids-youth/teens/                  kids-teens.md
/products/...                       9 product pages
/buying-guides/...                  buying-guide pages
/blog/compare/...                   comparison pages
/support/...                        support pages
/street-legal/...                   legal pages
```

## Design Direction

The first visual direction should be functional ecommerce, not a marketing-only hero site.

Principles:

- Product and rider paths visible above the fold.
- Dense but readable comparison tables.
- Strong product photography once available.
- Neutral technical palette with one clear accent.
- No oversized generic lifestyle copy.
- Cards only for product cards and repeated guide items.
- Clear status labels while pages remain draft.

Suggested tone:

- Rugged but precise.
- Parent-safe where youth products appear.
- Performance-aware without exaggerating speed.
- Practical ownership language.

## Implementation Phases

### Phase 1: Static Content Shell

- Create Astro project.
- Configure content collections.
- Import current Markdown files.
- Build shared layout, navigation, footer, SEO meta.
- Render all pages from frontmatter `slug`.
- Render product cards from `productCatalog.ts`.
- Add draft status labels.

### Phase 2: Ecommerce-Ready Product Templates

- Move product specs into typed data.
- Build product gallery placeholders.
- Build comparison tables.
- Add collection filters.
- Add schema generation gated by product readiness.

### Phase 3: Visual Design

- Define typography, spacing, color tokens, buttons, cards, tables, badges, and forms.
- Build responsive header, product grids, and comparison surfaces.
- Verify desktop and mobile screenshots.

### Phase 4: GitHub + Vercel

- Initialize repository.
- Add build scripts and CI-safe checks.
- Push to GitHub.
- Deploy to Vercel preview.
- Add production deployment when content and brand are approved.

## Immediate Next Work

1. Create the Astro project skeleton.
2. Add the content collection schema.
3. Copy or transform `site-content/pages` into `src/content`.
4. Build the core templates for home, collection, product, guide, comparison, support, and legal.
5. Start a local dev server and visually inspect the first pages.
