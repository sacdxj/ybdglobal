# Decision Brand Launch Gate

## Current Verdict

The site is ready for private Decision Engine and purchase-path review. The brand and domain are
now locked as `Ovkara` and `Ovkara.com`, but the site is not yet ready for full public launch
because operational, legal, technical, product, policy, and visual evidence still need owner
approval.

Use `PUBLIC_LAUNCH_EVIDENCE_PACK.md` as the execution checklist for the remaining public-launch
evidence gates. Use `OVKARA_BRAND_CLEARANCE_WORKBENCH.md` for the formal brand-clearance workflow.

The product direction is now correct: the homepage leads with `Find Your Bike`, gives the buyer a
decision path, and moves product browsing after rider-fit and proof checks. That supports the
brand promise: help riders buy with confidence.

## Passed Gates

- Astro production build passes.
- Static internal link check passes.
- React compatibility check passes.
- Homepage Decision Engine smoke check passes.
- Private-review launch readiness check passes.
- Final brand name and exact `.com` domain are locked: `Ovkara` / `Ovkara.com`.
- The final homepage output contains the `Find Your Bike` anchor, four-step quiz, result paths,
  proof checklist, and analytics events.
- First-pass blocker cleanup removed public-facing placeholders from home, shop, contact,
  shipping, warranty/returns, financing, and product pages.
- Second-pass cleanup removed internal placeholders from legal, youth safety, battery/charging,
  range, adult performance, support, price, motor-power, and competitor-comparison content.
- `DATA NEEDED`, `PRODUCT BLOCK`, `COMPONENT NOTE`, `REVIEW NEEDED`, `draft-data-needed`,
  `draft-review-needed`, and `hold-*` markers are no longer present in `src/content/site/`.

## Blocked Gates

- Formal trademark, common-law, social-handle, and negative-meaning screening for `Ovkara` have
  not been completed.
- One-sentence promise is strategically approved, but final legal/brand-owner signoff is still
  required before public launch.
- Product prices, availability, fit ranges, specifications, range tests, speed tests, shipping,
  warranty, returns, parts, service, and legal document claims are not fully sourced.
- Public customer support details and form endpoint are not final.
- Real product photography and approved policy copy are still required.
- Legal, youth safety, battery, performance, and competitor pages are written conservatively, but
  still need owner/legal/product review before broad SEO publication.
- `PUBLIC_NOINDEX` and `robots.txt` are intentionally blocking indexation in private-review mode.

## Required Validation Commands

```powershell
$env:ASTRO_TELEMETRY_DISABLED=1
npm.cmd run build
npm.cmd run check:decision
npm.cmd run check:launch
npm.cmd run check:links
npm.cmd run check:react
```

## Next Gate

Move from private review to public launch only after the homepage is visually checked in a real
browser and the remaining evidence tasks are completed:

- Final logo direction and visual identity system for `Ovkara`.
- Formal clearance for `Ovkara`: USPTO, WIPO, EUIPO/TMview, common-law search, social handles,
  and negative-meaning review.
- Real customer-facing company/contact/support details and form endpoint.
- Approved shipping, warranty, returns, financing, parts, and repair policies.
- Approved product prices, inventory, images, manuals, fit ranges, and support status.
- Reviewed speed, range, battery, motor, charging, youth safety, and street-legal evidence.
- Current official competitor sources and owner-approved comparison rules.

## Evidence Execution Pack

The next operational document is `PUBLIC_LAUNCH_EVIDENCE_PACK.md`. It breaks the blockers above
into owner, approval level, affected pages, evidence templates, and the required public-indexing
switch sequence.
