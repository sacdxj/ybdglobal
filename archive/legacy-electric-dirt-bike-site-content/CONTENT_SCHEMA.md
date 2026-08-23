# Content File Contract

Every page draft uses Markdown with YAML frontmatter so it can later move into an Astro
content collection without rewriting the editorial layer.

Required frontmatter:

```yaml
title:
description:
slug:
pageType:
primaryKeyword:
audience:
intent:
buyerStage:
status:
primaryCta:
primaryCtaHref:
proofStatus:
reviewers:
```

Allowed status values:

- `draft-data-needed`
- `draft-review-needed`
- `ready-for-editorial-review`
- `hold-legal-review`
- `hold-product-eligibility`

Editorial markers:

- `[DATA NEEDED: ...]` means a factual source is missing.
- `[PRODUCT BLOCK: ...]` defines catalog data needed from the future product collection.
- `[COMPONENT NOTE: ...]` describes a functional content block, not visual styling.
- `[REVIEW NEEDED: ...]` identifies a specialist review gate.

Pages must not contain fake testimonials, invented model names, estimated prices presented as
current prices, unsupported speed/range data, or universal street-legal claims.

