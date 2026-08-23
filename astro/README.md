# Connectivity Supply Static Site

Astro static site for a B2B connectivity and charging accessories sourcing system. The working identity is private-review only.

## Active functions

- Markdown content collection and static dynamic routes
- Structured product data and product detail pages
- Four-step procurement configurator with analytics events
- Product, specification and buyer-intent navigation
- RFQ and sample paths
- Canonical, Open Graph, Organization Schema and noindex support
- Build, configurator, link, private launch and React compatibility checks

## Development

```powershell
npm.cmd ci
npm.cmd run dev
npm.cmd run build
npm.cmd run check:decision
npm.cmd run check:links
npm.cmd run check:launch
npm.cmd run check:react
```

Use `$env:ASTRO_TELEMETRY_DISABLED='1'` in restricted Windows environments.

## Launch gate

Keep `.env.production` on `PUBLIC_NOINDEX=true` until the final brand, production domain, legal company identity, RFQ destination, product evidence, certifications and policies are approved. `check:public-launch` is expected to fail while the working identity is active.
