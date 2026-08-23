# Decision Brand Website Audit

Audit date: 2026-08-01

## Current Superseding Note

This original audit is now partly historical. After `Ovkara.com` was purchased, brand/domain
status moved from working-name review to Ovkara activation.

Use the current re-audit for the latest positioning status:

```text
OVKARA_POSITIONING_REAUDIT.md
```

Related operating system:

```text
brand-os/00-brand-os-index.md
```

Use the Brand OS before changing the brand name, domain, homepage message, content architecture,
or public launch criteria. For Brand OS 2.0, review the Brand DNA, Archetype, Mental Availability,
Flywheel, and Decision Engine modules before naming or redesigning the homepage.

## Verdict

The current Astro site has the foundations of an electric dirt bike decision brand, but it still
reads too much like a working-name ecommerce catalog in the global chrome, metadata, and CTAs.

It is suitable for internal review after the low-risk copy changes in this pass. It is not ready
for public launch until final brand identity, domain, product proof, policy proof, and review
gates are completed.

## What Already Fits The Decision Brand Direction

- Homepage starts with rider fit, terrain, power, safety, and budget rather than only products.
- Buying guides cover price, range, charging, power, battery, and selection questions.
- Kids and youth pages are parent-led and safety-aware.
- Street-legal pages keep legal claims separate and require review.
- Competitor pages stay in the comparison blog and do not become product navigation.
- Dashboard candidates are fully accounted for, with human corrections for cannibalization,
  competitor placement, page type, and heading quality.

## Gaps Against The New Strategy

### 1. Brand Identity

Current state:

- The visible brand is still `Electric Dirt Bike`.
- Global metadata describes an `own-brand electric dirt bike catalog`.
- Footer and header use the category term as brand identity.

Risk:

- This makes the site feel like a keyword/domain project instead of a durable brand asset.

Required action:

- Keep `Electric Dirt Bike` only as the temporary working name.
- Complete the brand naming workflow before final public launch.

### 2. Homepage Promise

Current state:

- Homepage content is close to the decision-brand promise.
- Primary CTA still says `Shop Electric Dirt Bikes`.

Risk:

- The first action over-emphasizes shopping before the buyer has built confidence.

Required action:

- Shift primary homepage CTA to a decision path.
- Keep shopping as the secondary path.

### 3. Navigation

Current state:

- Header begins with `Shop All`.
- Comparison hub is present in footer but absent from primary nav.

Risk:

- The navigation frames the brand as a store first, not a decision system.

Required action:

- Put `Buying Guides` and `Compare` closer to the primary journey.
- Keep `Shop` visible, but not the only mental model.

### 4. Product Proof

Current state:

- Product data exists for G1, K2, and X1 drafts.
- Retail price, inventory, public test method, shipping, warranty, support, and final media remain
  incomplete.

Risk:

- Product pages cannot carry public purchase confidence yet.

Required action:

- Treat product pages as draft or noindex until proof is complete.

### 5. Legal And Safety Review

Current state:

- Street-legal and registration pages are held for legal review.
- Youth pages still need safety reviewer and approved fit guidance.

Risk:

- Public launch before review could create trust and liability problems.

Required action:

- Keep these pages blocked or noindexed until reviewed.

### 6. Domain And Production SEO

Current state:

- `astro.config.mjs` still uses `https://example.com`.
- `.env.example` contains unrelated `axitermmfg.com` defaults.

Risk:

- Canonical URLs, sitemap, Open Graph, schema, and deployment instructions would be wrong.

Required action:

- Replace placeholders only after the final brand `.com` is chosen.
- Use neutral placeholder values before then.

### 7. Dashboard Evidence

Current state:

- Keyword candidate coverage is complete.
- Live SERP evidence is incomplete: 56 of 56 candidates report missing cache / weak intent match.

Risk:

- The site must not claim live SERP validation.

Required action:

- Position dashboard as demand architecture and editorial routing evidence, not final SERP proof.

## Immediate Low-Risk Fixes In This Pass

- Add this Decision Brand audit.
- Add Decision Brand strategy v1.
- Update visible global copy from store/catalog-first to confidence/decision-first.
- Update neutral environment placeholders.
- Keep final naming and domain unresolved until the naming workflow runs.

## Public Launch Blockers

- Final `.com` brand name.
- Final brand story and one-sentence promise.
- Brand DNA and archetype reflected in homepage, navigation, and content QA.
- Category Entry Points mapped to core pages.
- Decision Engine MVP defined or explicitly deferred.
- Real company and contact information.
- Approved prices, inventory, shipping, warranty, returns, financing, and service policies.
- Product images, manuals, approved spec sheets, and public performance test method.
- Youth safety review.
- Street-legal/legal review.
- Real production domain in Astro config.
- No launch-blocking `DATA NEEDED` markers on indexable pages.
