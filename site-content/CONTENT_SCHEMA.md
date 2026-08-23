# Content Schema

Every publishable Astro Markdown page uses:

```yaml
title: string
description: string
route: absolute trailing-slash URL
pageType: home | product-collection | product | commercial-pillar | buyer-solution | trust-pillar | resource-pillar | conversion | support-policy
primaryKeyword: optional string
audience: optional string
intent: optional string
buyerStage: optional string
status: draft | private-review | evidence-approved | publish-ready
primaryCta: optional string
primaryCtaHref: optional internal URL
proofStatus: optional string
reviewers: optional list
```

One retained keyword maps to one primary URL. A page may cover related variants, but its main user task must remain coherent.
