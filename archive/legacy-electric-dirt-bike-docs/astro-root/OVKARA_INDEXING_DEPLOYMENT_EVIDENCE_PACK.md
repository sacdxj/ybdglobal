# Ovkara Indexing & Deployment Evidence Pack

## Purpose

Indexing is the final public switch. Ovkara should not become crawlable because of a casual
environment change, robots edit, DNS mapping, or deployment promotion. This pack controls the
technical release path for `ovkara.com`, noindex removal, robots.txt, sitemap, canonical URLs,
hosting, DNS, Search Console, and rollback.

## Current Verdict

Public indexing switch: Prepared for initial launch.

The current site is configured for initial public launch:

- `.env.production` sets `PUBLIC_NOINDEX=false`.
- `public/robots.txt` allows crawlers.
- `astro.config.mjs` sets the canonical site to `https://ovkara.com`.
- `@astrojs/sitemap` generates `sitemap-index.xml`.
- `check:public-launch` verifies public robots, no noindex pages, production canonicals, and legacy leakage.

Do not switch public indexing until every evidence gate in `PUBLIC_LAUNCH_EVIDENCE_PACK.md` is
approved.

## Current Technical State

| Area | Current state | Release meaning |
|---|---|---|
| Canonical domain | `https://ovkara.com` | Correct target domain for private review and future public launch. |
| Production noindex | `PUBLIC_NOINDEX=true` | Correct; every generated page should include `noindex, nofollow`. |
| Robots | `User-agent: *` plus `Disallow: /` | Correct; all crawling remains blocked. |
| Sitemap | `https://ovkara.com/sitemap-index.xml` | Builds now, but should not be submitted until public switch. |
| Build output | `dist/` static output | Correct for Astro static hosting. |
| Hosting config | `vercel.json` with Astro build/output and security headers | Framework ready; production domain mapping still needs approval. |
| Contact/form env | Empty public Formspree, Turnstile, contact fields | Correct; support identity/form endpoint still blocked. |
| Public launch check | `check:launch` verifies private mode only | Add a separate public-launch check before switching indexing. |

## Indexing Gate Matrix

| Gate | Current status | Public blocker | Required approval |
|---|---|---|---|
| Evidence gates | In progress | Brand, visual, support, product, technical, youth, legal, policy, competitor, analytics/privacy gates still need signoff | Owners in `PUBLIC_LAUNCH_EVIDENCE_PACK.md` |
| Domain/DNS | Domain purchased | DNS, Vercel/project mapping, www/non-www redirect, SSL verification | Engineering + Brand |
| Noindex switch | Blocked | Must not set `PUBLIC_NOINDEX=false` yet | Engineering + SEO |
| Robots switch | Blocked | Must not remove `Disallow: /` yet | Engineering + SEO |
| Sitemap submission | Blocked | GSC property and public robots/indexing must be ready | SEO |
| Public launch check | Missing | Current script only validates private mode | Engineering |
| Rollback | Framework needed | Need defined rollback env/robots/GSC actions | Engineering + SEO |

## Public Switch Procedure

Only after all evidence gates are approved:

1. Archive the approved `PUBLIC_LAUNCH_EVIDENCE_PACK.md` with owner signoffs.
2. Confirm production domain is `https://ovkara.com`.
3. Confirm DNS points to the approved hosting provider.
4. Confirm SSL is active for apex and `www` if used.
5. Confirm canonical policy: apex vs `www`, trailing slash, and redirects.
6. Set production `PUBLIC_NOINDEX=false`.
7. Replace `public/robots.txt` with approved public crawl rules.
8. Run production build.
9. Run private safety checks before switch and public launch checks after switch.
10. Verify canonical URLs, sitemap URLs, internal links, forms, Decision Engine events, policy pages, product pages, and comparison pages.
11. Submit sitemap in Google Search Console only after the public robots and noindex state are correct.
12. Monitor GSC coverage, logs, analytics events, and support form submissions after launch.

## Approved Public Robots Template

Use this only after all launch gates pass:

```txt
# robots.txt for Ovkara

User-agent: *
Allow: /

Sitemap: https://ovkara.com/sitemap-index.xml
```

If any major gate remains incomplete, keep:

```txt
User-agent: *
Disallow: /
```

## Required Public Launch Checks

Before public indexing, add or run checks that verify:

| Check | Requirement |
|---|---|
| No private noindex | Public pages do not contain `noindex, nofollow` unless intentionally held. |
| Public robots | `robots.txt` allows crawl and points to `https://ovkara.com/sitemap-index.xml`. |
| Canonical domain | Every canonical URL uses `https://ovkara.com`. |
| Sitemap domain | Every sitemap URL uses `https://ovkara.com`. |
| Forbidden terms | No Axiterm, old domains, placeholders, or internal review markers in public output. |
| Evidence markers | No unapproved `DATA NEEDED`, draft status, or proof-blocking terms on public pages. |
| Internal links | `check:links` passes. |
| Decision Engine | `check:decision` passes and events are QA mapped. |
| React compatibility | `check:react` passes. |
| Forms | Contact/quote form endpoint submits, shows consent, and creates ticket or confirmation. |
| Privacy | Privacy page matches actual processors and consent implementation. |
| Product/schema | Product/Offer schema remains blocked unless SKU evidence is approved. |

## Rollback Procedure

If a public launch issue appears:

1. Set production `PUBLIC_NOINDEX=true`.
2. Restore private `public/robots.txt` with `Disallow: /`.
3. Redeploy.
4. Verify pages again contain `noindex, nofollow`.
5. Verify robots blocks all crawling.
6. Pause sitemap submissions and request temporary removals in GSC if needed.
7. Record the issue in the launch evidence pack and assign the owner.

## Dashboard Requirements

The deployment/indexing dashboard should track:

| Field | Requirement |
|---|---|
| Domain | `ovkara.com`, `www`, SSL, redirect policy. |
| Hosting | Provider/project, production URL, deployment ID, build command, output directory. |
| Env vars | `PUBLIC_SITE_URL`, `PUBLIC_NOINDEX`, form/contact/analytics IDs. |
| Robots state | Private, public, or rollback. |
| Sitemap state | Generated, submitted, discovered, or blocked. |
| Canonical state | Verified or failed. |
| GSC state | Property verified, sitemap submitted, indexing monitored. |
| Launch checks | Build, launch, links, decision, React, public indexing check. |
| Rollback owner | Engineering/SEO owner and timestamp. |
| Approval | Final launch approver and date. |

## Release Rules

Do not publicly index until:

1. All non-indexing evidence packs are approved.
2. Production support identity and form workflow are approved.
3. Analytics/privacy stack is approved.
4. Product pages either have approved SKU evidence or remain non-indexed/claim-gated.
5. Street legal, youth safety, technical, policy, and competitor claims are approved.
6. Public launch checks exist and pass.
7. Rollback plan is tested or at least operationally documented.

## Next Actions

1. Keep current private noindex and robots state unchanged.
2. Add a separate public indexing check script when launch approval is near.
3. Confirm hosting provider and DNS mapping for `ovkara.com`.
4. Prepare GSC property verification but do not submit sitemap until public switch.
5. Use this pack as the final release checklist after evidence gates are signed.
