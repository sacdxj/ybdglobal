# USB Connectivity Content System

This directory holds planning, evidence and editorial control documents. The project uses a layered source-of-truth model:

- `../astro/src/content/site/`: page SEO metadata and editorial copy.
- `../astro/src/data/products.ts`: structured product-platform data.
- `../astro/src/components/`: presentation and interaction rules.
- `../outputs/usb-seo/usb_connectivity_keyword_architecture_full.xlsx`: canonical keyword-to-page architecture and validation state.

Do not duplicate publishable copy or product values in this planning directory.

## Workflow

1. Select a planned URL from the `SERP_Content_Blueprint` sheet in `../outputs/usb-seo/usb_connectivity_keyword_architecture_full.xlsx`.
2. Confirm the page role, keyword coverage and current publication gate.
3. Check `DATA_REQUIREMENTS.md` for required evidence.
4. Draft against `PAGE_BLUEPRINTS.md` and `CONTENT_SCHEMA.md`.
5. Add the approved Markdown file to the Astro content collection.
6. Run build, link, configurator and private-launch checks.
