# Ovkara Mobile Page Audit - 2026-08-10

## Honest Status

The first mobile pass applied global responsive fixes across the site and directly changed shared layout behavior. It did not complete a manual mobile visual QA pass for every generated page.

## Directly Modified For Mobile Layout

These files affect every generated page or the main structured page rendering:

- `src/components/SitePage.astro`
  - Added page-type classes: policy, support, guide, commerce, product.
  - Prevented policy pages from rendering the extra SupportLanding block.
- `src/layouts/MainLayout.astro`
  - Updated stylesheet cache version to load the latest mobile CSS.
- `public/styles/site.css`
  - Added mobile overrides for header, mobile nav, hero, buttons, Decision Engine, product cards, product detail, guide sections, compare sections, support blocks, policy text, footer, and 721-980px tablet layout.

## Directly Rewritten Policy Pages

These pages were directly rewritten as plain text policy pages before or during the policy cleanup:

- `/privacy/`
- `/terms-of-service/`
- `/support/warranty-returns/`
- `/support/shipping/`

## Previously Directly Edited Product Display Logic

These page groups were affected by product-grid selection logic:

- `/`
- `/shop/`
- `/street-legal/`
- `/kids-youth/teens/`
- `/buying-guides/24v-36v-48v/`

## Generated Pages Covered By Global Mobile CSS, Not Yet Individually Visual-QA Checked

The following pages are generated and receive the new mobile CSS, but still need individual phone-width visual inspection:

- `/`
- `/adult-dirt-bikes/`
- `/adult-dirt-bikes/60v/`
- `/adult-dirt-bikes/72v/`
- `/adult-dirt-bikes/fast/`
- `/buying-guides/`
- `/buying-guides/best/`
- `/buying-guides/price/`
- `/buying-guides/range/`
- `/buying-guides/charging/`
- `/buying-guides/battery-life/`
- `/buying-guides/motor-power/`
- `/buying-guides/electric-vs-gas-dirt-bike/`
- `/buying-guides/24v-36v-48v/`
- `/kids-youth/`
- `/kids-youth/ages-8-12/`
- `/kids-youth/teens/`
- `/shop/`
- `/street-legal/`
- `/street-legal/dual-sport/`
- `/street-legal/registration-license/`
- `/blog/compare/`
- `/blog/compare/cake-alternatives/`
- `/blog/compare/honda-electric-dirt-bike/`
- `/blog/compare/ktm-electric-alternatives/`
- `/blog/compare/kuberg-alternatives/`
- `/blog/compare/razor-alternatives/`
- `/blog/compare/segway-alternatives/`
- `/blog/compare/stark-varg-alternatives/`
- `/blog/compare/surron-alternatives/`
- `/blog/compare/talaria-alternatives/`
- `/blog/compare/yamaha-electric-dirt-bike/`
- `/products/g1-24v-kids-electric-dirt-bike/`
- `/products/k2-48-mx-1214-electric-dirt-bike/`
- `/products/k2-48-my-1417-electric-dirt-bike/`
- `/products/k2-60-my-1417-electric-dirt-bike/`
- `/products/k2-72-my-1417-electric-dirt-bike/`
- `/products/k2-72-lz-1719-electric-dirt-bike/`
- `/products/x1-48-mx-1214-electric-dirt-bike/`
- `/products/x1-48-my-1417-electric-dirt-bike/`
- `/products/x1-60-my-1417-electric-dirt-bike/`
- `/support/contact/`
- `/support/faqs/`
- `/support/financing/`
- `/support/parts-maintenance/`
- `/support/repair/`
- `/support/shipping/`
- `/support/warranty-returns/`
- `/privacy/`
- `/terms-of-service/`
- `/404.html`

## Required Next QA Pass

For each page above, verify at 390px and 430px width:

- No horizontal overflow.
- Header and mobile nav do not consume too much vertical space.
- H1 and hero copy fit without awkward wrapping.
- Primary CTA is visible and tappable.
- Cards do not become overly tall.
- Images do not dominate the page.
- Product specs are readable without excessive scrolling.
- Policy pages behave like plain text documents.
- Footer links remain usable.

## Current Automated Verification

The latest automated checks passed after the first mobile pass:

- `npm run build`
- `npm run check:links`
- `npm run check:public-launch`

