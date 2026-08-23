---
name: seo-skill-usb-connectivity
description: Build and audit evidence-safe B2B SEO systems for USB cables, HDMI cables, DisplayPort cables, USB-C hubs, docking stations, chargers and related connectivity accessories. Use when Codex needs to clean keyword spreadsheets, create keyword-to-URL mappings, design product/specification/buyer-intent sitemaps, write page briefs or website content, review RFQ conversion paths, validate product claims, or check Astro content for this connectivity sourcing project.
---

# USB Connectivity SEO

Build a Google-to-RFQ acquisition system, not a generic export-company brochure or retail catalog.

## Required workflow

1. Confirm positioning, target buyers, product scope and commercial conversion model before keyword work.
2. Inspect available keyword, product, certification, factory and commercial data.
3. Separate product, specification, application, procurement and informational intent.
4. Remove irrelevant consumer troubleshooting, replacement, retailer and unrelated accessory terms.
5. Cluster by likely shared search intent; never create one page per keyword.
6. Map every retained keyword to one primary URL and coverage role.
7. Derive the sitemap and priority from cleaned clusters; do not invent pages first and backfill keywords.
8. Approve page briefs and apply the claim gate before writing or publishing content.
9. Connect every commercial page to an appropriate RFQ, sample or customization CTA.
10. Only after the plan is stable, change the Astro site and run build, link, noindex and legacy-content checks.

## Architecture model

Use three coordinated layers:

- `Product`: USB, HDMI, DisplayPort, hubs/docks and chargers.
- `Specification`: connector, protocol, power, bandwidth, resolution, refresh rate, length, material and port mix.
- `Buyer Intent`: manufacturer, supplier, wholesale, importer, distributor, OEM/ODM, private label and buyer type.

Merge manufacturer/supplier/factory terms unless SERP evidence supports separate user tasks. Merge closely related specification variants when the same product set and SERP intent apply.

## Page roles

- Product/category pages: explain range and route to configuration.
- Specification pages: answer a distinct verified performance requirement.
- Buyer-solution pages: answer MOQ, range, packaging, compliance, logistics and program needs for one buyer type.
- OEM/ODM pages: explain configurable elements and the development process.
- Resources: teach selection or procurement and link to a commercial parent.
- Trust pages: publish only supported factory, quality, testing and certification evidence.

## Claim gate

Read [references/claim-and-rfq-rules.md](references/claim-and-rfq-rules.md) before writing product, factory, certification, MOQ, pricing, lead-time, warranty or capacity claims.

When evidence is missing:

- do not invent a value;
- state that the field is confirmed by configuration or project;
- route the buyer to RFQ or evidence request;
- keep public indexing disabled when company identity or legal data is provisional.

## Keyword workbook outputs

Prefer these sheets:

- `SEO_Keyword_Library`
- `URL_Class_Summary`
- `Keyword_Review`
- `Page_Clusters`
- `Final_Sitemap`
- `Page_Keyword_Coverage`
- `Discarded_Keywords`

Retain search volume, difficulty, CPC, source and SERP-risk fields when available. Mark manually supplied seed terms separately from tool-measured terms.

## Astro project checks

After active-site edits, run from `astro/`:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'
npm.cmd run build
npm.cmd run check:decision
npm.cmd run check:links
npm.cmd run check:launch
npm.cmd run check:react
```

Search active source and `dist/` for legacy Ovkara, electric dirt bike, rider, street-legal and old G1/K2/X1 SKU leakage. Do not scan intentional archive folders as active content.

## Completion standard

Do not call a migration complete until:

- active routes reflect the new sitemap;
- product data uses the new schema;
- the configurator and RFQ paths work;
- build and private launch checks pass;
- no old-industry content appears in generated pages;
- missing evidence is explicitly gated;
- the final brand, domain and company identity are either approved or clearly marked private-review.
