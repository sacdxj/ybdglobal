# Ovkara Content Launch QA - 2026-08-03

## Scope

This pass prepares Ovkara for a content-led public launch before the ecommerce checkout loop is
implemented.

## Completed

- Core SEO pages were polished for decision intent:
  - `/`
  - `/shop/`
  - `/adult-dirt-bikes/`
  - `/adult-dirt-bikes/fast/`
  - `/adult-dirt-bikes/60v/`
  - `/adult-dirt-bikes/72v/`
  - `/kids-youth/`
  - `/kids-youth/ages-8-12/`
  - `/kids-youth/teens/`
  - `/buying-guides/best/`
  - `/buying-guides/price/`
  - `/buying-guides/range/`
  - `/buying-guides/charging/`
  - `/buying-guides/battery-life/`
  - `/buying-guides/motor-power/`
  - `/buying-guides/24v-36v-48v/`
  - `/street-legal/`
  - `/street-legal/dual-sport/`
  - `/street-legal/registration-license/`

- FAQ and support content were strengthened:
  - `/support/faqs/`
  - `/support/contact/`
  - `/support/shipping/`
  - `/support/warranty-returns/`
  - `/support/financing/`
  - `/support/parts-maintenance/`
  - `/support/repair/`

- First comparison/blog pages were reviewed for brand-safe alternative positioning:
  - Surron
  - Talaria
  - Razor
  - Stark VARG
  - KTM
  - Yamaha
  - Honda
  - Segway
  - Kuberg
  - CAKE

## Quality Rules Applied

- Removed user-visible internal launch language such as publish gates, schema notes, draft
  ranking notes, and private-review wording.
- Kept competitor names in blog comparison content only.
- Avoided direct-equivalence claims where Ovkara is not a proven same-class replacement.
- Kept street-legal content as verification guidance, not legal advice.
- Kept youth content parent-led and measurement-first.
- Kept speed, range, battery, and charging claims tied to source specs and method caveats.
- Kept product prices as quote/current-price prompts rather than unsupported retail claims.

## Verification

- `npm run build`: passed.
- `npm run check:public-launch`: passed.
- `npm run check:links`: passed.
- `npm run check:decision`: passed.
- Residual content scan for internal launch markers: no findings.

## Remaining For Later Ecommerce Phase

- Checkout and payment provider.
- Live inventory and retail price automation.
- Product/Offer schema.
- Support form endpoint and ticket workflow.
- GA4/GSC after domain binding.
- Product photography and manuals.
