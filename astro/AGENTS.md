# Connectivity Supply Astro Project Rules

## Positioning

- Treat `Connectivity Supply` as a private-review working identity only.
- Build a B2B Google-to-RFQ sourcing system for USB, HDMI and DisplayPort cables, hubs, docking stations and chargers.
- Keep Product, Specification and Buyer Intent as separate SEO layers.
- Product category pages target product demand; manufacturer/supplier/factory intent belongs on separate procurement landing pages.
- Do not use Buy Now until real stock, price, payment and fulfillment operations exist.

## Mandatory production order

1. Approve positioning, buyer scope and product boundaries.
2. Clean, de-duplicate, classify and cluster the keyword source.
3. Derive the sitemap, URL inventory and priorities from the cleaned clusters.
4. Approve page briefs and evidence requirements.
5. Only then write content or implement routes/components.

Existing pages remain private prototypes until their URLs and intent are validated by the cleaned keyword plan. Never invent pages first and backfill keywords afterward.

## Evidence rules

- Do not invent protocol, wattage, bandwidth, resolution, refresh, length, certification, MOQ, price, lead time, factory or policy claims.
- Use `private-review` and confirmation language while evidence is missing.
- Read `brand-os/00-brand-os-index.md` and `product-evidence/PRODUCT_EVIDENCE_SCHEMA.md` before changing positioning or claims.
- Keep `PUBLIC_NOINDEX=true` until the final brand, domain, legal company, RFQ receiver, evidence and policies are approved.

## Technical rules

- Use `src/content/config.ts` for the Astro collection schema.
- Use `src/content/site/` for page SEO/editorial content and `src/data/products.ts` for structured product data.
- Astro templates render HTML; do not add React-only `key` attributes to ordinary Astro elements.
- On Windows, use `npm.cmd` when PowerShell blocks `npm.ps1`.
- In restricted environments set `$env:ASTRO_TELEMETRY_DISABLED='1'`.
- `astro check` scans `.astro` files under the whole project root, including `astro/archive/`; archive obsolete Astro components outside the `astro/` directory.
- When changing colors, update both CSS variables and `tailwind.config.mjs` when Tailwind utilities depend on the palette.

## Required validation

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'
npm.cmd run build
npm.cmd run check:decision
npm.cmd run check:links
npm.cmd run check:launch
npm.cmd run check:react
```

The public-launch check should continue to fail while the working identity or `.invalid` domain remains active.
