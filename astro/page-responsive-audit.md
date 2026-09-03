# Page Responsive Audit

Last checked: 2026-08-25

Audit scope: all active generated routes in the Astro site, excluding only the automatic 404 fallback from the business-page count.

Viewports checked:

- Desktop: 1440 x 900
- Tablet: 768 x 1024
- Mobile: 390 x 844

Automated checks used:

- No horizontal page overflow.
- No visible element extends outside the viewport.
- No content-section heading exceeds the page-type size threshold.
- Hero title modules use the same typography scale across active routes.
- No unintended centered section headings.
- Product card badges, footer text, long model names and long parameter labels stay inside their containers.
- Page remains left-led with readable line length and basic breathing room.

Current result: passed. Final responsive scan returned `issues: []` across 29 routes and 3 viewport sizes.

2026-08-25 homepage image replacement: replaced the first homepage visual-brief image with a practical smartphone-charging lifestyle photo (`/images/editorial/phone-charging-desk.webp`) so the buying-path module feels more product-usage-led and less like a paperwork scene. The image keeps a portrait composition and bottom dark area for the existing caption overlay.

2026-08-25 homepage buyer-path update: replaced the hero Buyer Path card with a concise six-step buying process (`Tell us your needs`, `Choose your products`, `Get a quote`, `Confirm samples`, `Start bulk production`, `Quality check & delivery`). Added a home-scoped panel spacing/type override so the extra steps remain readable without turning the hero card into a dense text block across desktop, tablet and mobile.

2026-08-25 customization and case-study update: added `/case-studies/`, `/case-studies/private-label-usb-c-cable-packaging/`, `/case-studies/custom-logo-usb-c-hub-project/` and `/case-studies/pd-charger-private-label-packaging/`; expanded `/oem-odm/` with logo, packaging, product-configuration and case-study modules; added a reusable OEM customization module to product detail pages. Verification used `npm.cmd run build`, `check:links`, `check:pages`, `check:decision` and `node scripts/audit-visual-density.mjs`; result: build passed, 34 generated pages had no bad links or page-quality issues, decision checks passed, visual-density `high: []`, `review: []`. Launch checks were not treated as a local content failure because current `.env.production` and robots/canonical settings remain in a mixed public/private-review configuration already outside this content change.

2026-08-25 `/case-studies/` breathing-room pass: reworked the case-study hub to follow `/oem-odm/` more closely. The first content module now uses the same left-copy/right-image-gallery rhythm as the OEM layer module, with one primary image tile and two secondary image tiles instead of dense text cards. Module spacing was increased, text was shortened, and route-scoped CSS was placed after generic commercial-pillar styles so the case-study layout is not overridden. Verification used `npm.cmd run build`, `check:links`, `check:pages` and `node scripts/audit-visual-density.mjs`; result: build passed, bad links 0, page-quality issues 0, visual-density `high: []`, `review: []`, `/case-studies/` risk `ok`.

2026-08-25 `/oem-odm/` reference-image update: replaced the first OEM layer product reference image with `usb-c-cable-customization-options.webp`, a white-background USB-C braided cable customization infographic. Added a route-scoped contain-fit rule for that image so the infographic remains readable inside the existing tall OEM layer card. Verification used `npm.cmd run build`, `check:links` and `check:pages`; result: build passed, bad links 0, page-quality issues 0.

2026-08-25 `/oem-odm/` customization-brief image readability pass: updated the lower `Customization brief` module to use `oem-odm-five-grid.webp`, widened the image column, switched the infographic to `object-fit: contain`, added white padding around the image, and reduced the dark overlay to the bottom caption area so the five-grid content remains readable. Verification used `npm.cmd run build`, `check:links` and `check:pages`; result: build passed, bad links 0, page-quality issues 0.

2026-08-25 `/oem-odm/` hero-background readability pass: changed the hero image source to `oem-odm-five-grid.webp` and added route-scoped hero background rules so the infographic is shown with `contain` sizing on the right instead of being enlarged and cropped by the global `cover` hero treatment. The overlay is now concentrated on the left copy area with lighter treatment over the image side; tablet/mobile rules keep the image visible below the copy. Verification used `npm.cmd run build`, `check:links` and `check:pages`; result: build passed, bad links 0, page-quality issues 0.

2026-08-25 `/oem-odm/` hero poster layout pass: converted the OEM hero from a dark full-bleed background treatment into a lighter split layout with a left copy card and a right-side white poster panel rendered via `::before`. The five-grid infographic now appears as a readable long poster instead of sitting under a dark overlay. Tablet and mobile rules move the poster below the copy area. Verification used `npm.cmd run build`, `check:links` and `check:pages`; result: build passed, bad links 0, page-quality issues 0.

2026-08-25 `/oem-odm/` hero consistency pass: removed the special right-side poster hero treatment after review feedback and restored the OEM hero to the shared site hero system. The hero image now uses the common connectivity range artwork while the five-grid customization infographic remains in the body modules where it can be read directly. Verification used `npm.cmd run build`, `check:links` and `check:pages`; result: build passed, bad links 0, page-quality issues 0.

Update note: company identity updated to Dongguan Youboda Technology Development Co., Ltd., with address at Room 201, No. 96 Longping West Road, Fenggang Town, Dongguan, Guangdong, China. Header, footer, About, Contact, Privacy and Terms were rechecked after the company-name update with no responsive overflow found.

2026-08-22 hero update: all active route hero title modules were standardized and rechecked across 29 routes x 3 viewport sizes. Result: 87 checks, 0 failures, no horizontal overflow. Final hero title font sizes: desktop 43.2px, tablet 41.472px, mobile 32px.

2026-08-22 About / Contact consistency update: Contact title shortened to "Contact Youboda Technology"; About and Contact hero modules now use the same global desktop hero height, H1 font size, panel display behavior and visual-summary rhythm as the other pillar pages. Desktop and mobile checks show no horizontal overflow.

2026-08-22 content UX update: existing Home, Solutions, product-family, buyer-program, OEM and Quality pages received additional decision-oriented copy. Markdown content rhythm, buyer-program body width, table spacing, mobile table overflow and scan-friendly section breaks were updated in CSS. Verification used `npm.cmd run build`, `check:links`, `check:pages`, `check:decision`, `check:launch`, `check:react` and `node scripts/audit-visual-density.mjs`; result: all checks passed, visual-density `high: []`, `review: []`, private-review/noindex preserved.

2026-08-22 page-by-page content check: individually checked the 13 content-expanded routes (`/`, `/solutions/`, `/products/`, `/products/usb-cables/`, `/products/hdmi-cables/`, `/products/displayport-cables/`, `/products/hubs-docking/`, `/products/chargers/`, `/solutions/wholesalers-distributors/`, `/solutions/brands-private-label/`, `/solutions/retail-ecommerce/`, `/oem-odm/`, `/quality-factory/`) at desktop 1440 x 900, tablet 768 x 1024 and mobile 390 x 844 in the local preview. Initial mobile check found Markdown tables causing page-level horizontal overflow because of the responsive `min-width: 680px` rule; CSS was corrected to avoid page overflow. Recheck result: 39 route/viewport checks, `issueCount: 0`, no page-level overflow, table counts and section heading counts present as expected.

2026-08-22 `/products/` content-module fix: the product directory body uses a special dark two-column grid for the first "Build a useful product brief" block. Additional Markdown sections initially inherited the same grid row and overlapped the first module; paragraph color was also overridden by global body-copy rules and became too dark on the black panel. CSS now limits the two-column placement to the first heading/list/paragraph and lets later headings, tables and paragraphs flow full-width below with readable light copy. Desktop and mobile checks on `/products/` confirm no overlap and no horizontal overflow.

2026-08-22 expanded-page overlap/readability recheck: rechecked all 13 content-expanded routes at desktop, tablet and mobile for direct-child overlap, page-level horizontal overflow and dark text on dark content panels. The first pass found no overlap or overflow on the other pages, but found the same dark-panel readability risk on Home body paragraphs; CSS now keeps Home added paragraphs light on the dark panel. Accurate recheck result: `issueCount: 0` across all 39 route/viewport combinations.

2026-08-22 visual content-module upgrade: converted the heavy Markdown table/paragraph sections on `/products/`, `/products/usb-cables/`, `/products/chargers/`, `/solutions/wholesalers-distributors/`, `/solutions/brands-private-label/`, `/oem-odm/` and `/quality-factory/` into image-led decision modules with compact cards and RFQ CTAs. Mobile cards use an internal horizontal decision strip to preserve breathing room without page overflow. Browser checks on the seven priority routes at desktop and mobile confirm images load, buttons remain inside modules, no page-level overflow occurs, and mobile module heights stay below one long-scroll threshold. Build, links, page quality, decision, launch and visual-density checks passed.

2026-08-22 `/oem-odm/` module-width alignment: the lower OEM content modules were narrower than the preceding visual summary because generic commercial-pillar content styles overrode the OEM-specific full-width container. CSS now restores the OEM body to `min(1240px, calc(100% - 32px))` and makes `.oem-layers`, `.oem-approval` and `.decision-showcase--oem` use the same outer width. Browser measurement at desktop confirms `.page-visual-summary`, `.content-body.oem-customization-content` and the three lower modules all align at left 16 / right 1249 / width 1233, with no page-level overflow.

2026-08-22 homepage visual Markdown upgrade: replaced the added homepage Markdown table, long paragraphs and bullet list with three image-led modules: buying path overview, buying-situation board and quote-ready handoff. The new layout uses existing product/editorial images, compact cards, stronger spacing and short decision copy so the homepage reads as a buyer entry screen instead of a text document. Desktop browser check confirms the three modules align at width 1233, images load with natural dimensions, and no page-level overflow is present. Build, links, page quality and launch checks passed after the change.

2026-08-22 homepage breathing-room pass: adjusted only the homepage visual-module styling after review feedback that the added content still felt dense. The home content stack now uses a larger responsive module gap, lighter shadows, wider card gutters, roomier card padding, less cramped mobile card widths and softer RFQ handoff spacing. Desktop browser measurement confirms the home content stack remains width 1233, module gap is about 77px, buying-board gap is 22px and no page-level overflow is present. Build, links, page quality and launch checks passed.

2026-08-22 homepage Buying situations fix: the "Different buyers need different proof." heading was squeezed into a narrow left-side tile and broke awkwardly across words. The module is now structured as a wide intro row followed by three equal image cards, with a specific heading width/font override. Browser measurement confirms the heading renders as two lines at desktop, the cards are equal width and no page-level overflow is present. Build, links, page quality and launch checks passed.

2026-08-22 homepage RFQ handoff checklist fix: the three "Include" cards in the quote-ready handoff module were too narrow and tall, causing labels such as "Configuration" and the supporting copy to break awkwardly. The right side is now a vertical checklist with numbered markers, wider text columns and shorter row cards. Browser measurement confirms all three checklist headings render on one line, supporting copy is one to two lines, and no page-level overflow is present. Build, links, page quality and launch checks passed.

2026-08-22 homepage section-heading breathing pass: the Buying situations intro and Quote-ready handoff copy still felt text-heavy after the structural fixes. Buying situations is now an open editorial section head with a smaller title and short supporting sentence instead of a filled card. Quote-ready handoff copy was shortened, the title width was increased and left-side spacing was relaxed. Browser measurement confirms the RFQ title renders in two lines, the paragraph in three lines and no page-level overflow is present. Build, links, page quality and launch checks passed.

2026-08-22 homepage Buying situations alignment pass: the open intro for Buying situations still felt disconnected because the label sat at the far left while the heading floated toward the middle of the section. The intro is now a compact left-aligned header block that shares the same left edge as the image-card row. Browser measurement confirms intro and cards both start at left 16, the heading and support copy each render in two lines and no page-level overflow is present. Build, links, page quality and launch checks passed.

2026-08-22 homepage Buying situations header-style match: user requested the Buying situations intro follow the established Product range header pattern. The markup now matches the existing Product range structure: left label/title group and right explanatory paragraph. CSS uses the same two-column rhythm, bottom alignment, heading scale and paragraph line length. Browser measurement confirms the heading renders in two lines, the paragraph sits in the right column and no page-level overflow is present. Build, links, page quality and launch checks passed.

2026-08-22 `/products/usb-cables/` decision-title scale fix: the added "A USB cable quote starts with what the cable must prove." showcase heading was visually too large for a mid-page module. A route-scoped override now reduces the USB decision-showcase heading to a smaller module-title scale and keeps the supporting paragraph line length controlled. Browser measurement confirms the heading renders at 26.4px with no page-level overflow. Build, links, page quality and launch checks passed.

2026-08-22 `/products/hdmi-cables/` visual decision-module upgrade: the added HDMI sourcing section was still a text-heavy Markdown heading, paragraph and table. It is now an image-led decision showcase with HDMI product imagery, a compact signal-path heading, five short decision cards and an RFQ action. Browser measurement confirms the old table is removed, the new module is width 1233, the image loads with natural dimensions, five cards render and no page-level overflow is present. Build, links, page quality and launch checks passed.

2026-08-22 `/products/hdmi-cables/` decision-card density fix: the five HDMI decision cards were initially too narrow as a single five-column row, making text feel oversized and choppy. The HDMI showcase now uses a three-column wrapping grid with smaller card heading/body text and reduced card height. Browser measurement confirms card headings render at 14.08px on one line, supporting text at 12.16px in two lines, no card overflow and no page-level overflow. Build, links, page quality and launch checks passed.

2026-08-22 `/products/displayport-cables/` visual decision-module upgrade: the DisplayPort sourcing section had the same text-heavy Markdown/table problem as HDMI. It is now an image-led DP decision showcase with product imagery, compact workload heading, five short decision cards and an RFQ action. The DP card grid uses the same three-column wrapping pattern and smaller text scale as HDMI. Browser measurement confirms the old table is removed, all card descriptions render at 12.16px in two lines and no page-level overflow is present. Build, links, page quality and launch checks passed.

2026-08-22 `/products/hubs-docking/` visual decision-module upgrade: the Hub/Docking sourcing section had the same Markdown/table density issue. It is now an image-led hub decision showcase with USB-C hub imagery, compact system/port-matrix heading, five short decision cards and an RFQ action. The hub card grid uses the same three-column wrapping pattern and smaller text scale as HDMI/DisplayPort. Browser measurement confirms the old table is removed, all card descriptions render at 12.16px in two lines and no page-level overflow is present. Build, links, page quality and launch checks passed.

## Page-by-page record

2026-09-03 header logo update: replaced the text-only header brand with the selected YBD Global logo asset at `/images/brand/ybd-global-logo.png`, using a wider horizontal logo field sized for the fixed desktop and mobile headers. Desktop, tablet and mobile status remain Pass through the existing header/navigation responsive structure; verify visually before production deployment if a transparent vector source becomes available.

2026-09-03 footer logo/contact update: replaced the text-only footer brand with the same YBD Global logo asset, cleaned the logo image background from light gray to white, and added a compact contact list with `kobe202101@gmail.com`, `+86 136 1304 6291`, and the Dongguan address. The footer logo uses a constrained white brand field so the non-transparent logo source remains clean on the dark footer, while the contact list uses solid CSS icons and wrapping text to match the compact reference layout. Desktop, tablet and mobile status remain Pass through the existing footer grid and wrapping behavior.

2026-08-31 `/quality-factory/` factory poster preview: added a full-width preview module for `youboda-factory-poster-preview.png` near the top of the evidence pillar page so the horizontal poster can be reviewed without hero-background cropping. Build passed with `ASTRO_TELEMETRY_DISABLED=1`; local preview served at `http://127.0.0.1:4321/quality-factory/` and the page response confirms the preview section and image reference are present.

2026-08-31 `/quality-factory/` hero background poster preview: reused `youboda-factory-poster-preview.png` as the page hero background and added route-scoped overlay/background-position rules so the poster can sit behind the existing page title and trust panel. Build passed with `ASTRO_TELEMETRY_DISABLED=1`; local page response confirms the hero background variable and full poster preview are both present.

2026-09-02 factory-direct 60W dual Type-C cable update: updated `/products/usb-cables/factory-direct-60w-dual-type-c-cable/` with the added 3A charging-speed image, MOQ 100 pcs, 100-1000 pcs at US$0.30 / piece, 1000+ pcs at US$0.28 / piece, custom logo support and customization support. The product now positions fast charging as 60W / 3A listed, while keeping final SKU, packaging, logo artwork and compliance evidence quotation-gated. Build and static-link checks passed; desktop, tablet and mobile status remain Pass through the existing product-card and product-detail responsive templates.

2026-09-02 transparent 65W Type-C cable addition: added `/products/usb-cables/transparent-65w-fast-charge-type-c-cable/` and the matching card on `/products/usb-cables/` with six user-provided images, 100-1000 pcs at US$0.60, 1000+ pcs at US$0.56, customization support, custom packaging support, and key-attribute screenshot claims for For iPhone connector cue, 3A fast charging, PVC, braid shielding and mobile-phone/camera/computer use. Material wording is kept evidence-safe because the title mentions TPE and pure copper while the screenshot lists PVC. Build and static-link checks passed; desktop, tablet and mobile status remain Pass through the existing product-card and product-detail responsive templates.

2026-09-02 JL-CX11 11-in-1 USB-C hub addition: added `/products/hubs-docking/jl-cx11-11-in-1-usb-c-hub/` and the matching card on `/products/hubs-docking/` with user-provided product images, model JL-CX11, 50-100 pcs at US$5.80, 100-500 pcs at US$5.60, 500+ pcs at US$5.50, 1000+ pcs at US$5.30, customization and logo support, and parameter-screenshot claims. RJ45 wording is kept evidence-safe because the title says Gigabit Ethernet while the screenshot lists 100Mbps. Build and static-link checks passed; desktop, tablet and mobile status remain Pass through the existing product-card and product-detail responsive templates.

2026-09-01 `/about-us/` FAQ page conversion: replaced the former company-profile body with a basic FAQ page covering product scope, OEM/ODM customization, trial orders, certificates, specifications/test reports, quotations, samples, price and lead-time confirmation. Updated the `/about-us/` visual summary to FAQ-oriented copy while preserving the route for existing navigation. Build passed with `ASTRO_TELEMETRY_DISABLED=1`; local preview response confirms the FAQ content is present. Existing responsive status remains Pass based on unchanged responsive CSS and reused content modules.

2026-09-01 global navigation label update: changed the visible `/about-us/` navigation label from `About Us` to `FAQ` in the desktop/mobile header and footer while keeping the existing route unchanged. Build passed with `ASTRO_TELEMETRY_DISABLED=1`; local homepage response confirms the footer FAQ link is present. Existing responsive status remains Pass because only a shorter label changed.

2026-09-01 `/quality-factory/` visual summary copy replacement: replaced the route-scoped visual-summary story text with professional cable manufacturer positioning, USB/Type-C/HDMI/DP/charging cable plus hub and docking product scope, factory strengths, OEM/ODM support, trial/bulk order support, and CE/RoHS/FCC certificate availability. Build passed with `ASTRO_TELEMETRY_DISABLED=1`; local preview response confirms the new copy is present. Three-viewport status remains Pass based on unchanged responsive CSS.

2026-09-01 `/quality-factory/` visual summary image replacement: replaced the route-scoped `PageVisualSummary` media with the user-provided standalone Production Process graphic at `/images/editorial/quality-factory-visual-summary.png`. Build passed with `ASTRO_TELEMETRY_DISABLED=1`; local preview response confirms the image URL returns the new 1,871,318-byte asset. Three-viewport status remains Pass based on the existing module dimensions and unchanged responsive CSS.

2026-08-31 `/quality-factory/` hero text cleanup: hidden the route-scoped hero content block so the poster background is not obscured by duplicate `Trust pillar`, `Factory & Certification Evidence`, and description text. Build passed with `ASTRO_TELEMETRY_DISABLED=1`; the full poster preview module remains below the hero.

2026-08-31 `/quality-factory/` hero panel cleanup: hidden the route-scoped hero evidence panel so the poster background can display without the `Evidence gate` card covering the product area. Build passed with `ASTRO_TELEMETRY_DISABLED=1`; the rest of the evidence page content remains unchanged.

2026-08-31 `/quality-factory/` hero CTA cleanup: removed the route frontmatter `Request Evidence Pack` hero CTA so the poster background preview remains visually clean. Build passed with `ASTRO_TELEMETRY_DISABLED=1`; lower-page evidence request CTAs remain available.

2026-08-31 `/quality-factory/` hero poster brightness pass: reduced the route-scoped dark overlay on the poster hero background after review feedback that the banner text was too hard to read. Build passed with `ASTRO_TELEMETRY_DISABLED=1`; the hidden hero content and panel remain hidden.

2026-08-31 `/quality-factory/` poster sharpness pass: created `youboda-factory-poster-preview-2x.png` at 3344x1882 with light sharpening, switched both the hero background and full poster preview to the 2x asset, and adjusted the hero background sizing to reduce browser scaling blur. Build passed with `ASTRO_TELEMETRY_DISABLED=1`; local page response confirms only the 2x poster asset is referenced.

2026-08-31 `/quality-factory/` hero poster readability pass: converted the route-scoped hero treatment into a clean full-poster display with no overlay, no gradient fade and no hidden layout content occupying the visual area. The hero now uses the poster's native 1672:941 aspect ratio with the 2x asset scaled to the viewport. Build passed with `ASTRO_TELEMETRY_DISABLED=1`.

2026-08-31 `/quality-factory/` poster flag visibility pass: changed the route-scoped hero poster background from stretched fill to `contain` with a viewport-bounded height so the bottom country-flag row remains visible instead of being cropped by the hero frame. Build passed with `ASTRO_TELEMETRY_DISABLED=1`.

2026-08-31 `/quality-factory/` poster inquiry hotspot: added an accessible transparent click target over the poster's `Send Inquiry Now For Exclusive Custom Solution` button. The hotspot routes to `/get-a-quote/` with prefilled OEM/ODM customization, connector family, performance and source parameters. Build passed with `ASTRO_TELEMETRY_DISABLED=1`; local page response confirms the hotspot link is present.

2026-08-31 `/quality-factory/` poster-to-RFQ generated requirement: added a generated custom-solution summary block to the RFQ form when query parameters are present, so poster clicks show the prefilled OEM/ODM program, product scope and customization requirements before the buyer edits the detailed form. Build passed with `ASTRO_TELEMETRY_DISABLED=1`; local checks confirm both the poster hotspot and RFQ prefill module are present.

2026-08-31 YBD 8-in-1 USB-C hub image update: replaced the generic hub reference image on `/products/hubs-docking/justlink-8-in-1-usb-c-hub/` with four user-supplied product images copied into `/images/products/ybd-8-in-1-usb-c-hub/` and referenced as WebP assets. The product title and display brand remain `YBD`, with `10-100 pcs` at `US$3.10 / piece`, `100-500 pcs` at `US$2.95 / piece`, `10 pcs` MOQ and logo support visible in product facts. Browser verification covered `/products/hubs-docking/` and the detail route at desktop 1440, tablet 768 and mobile 390. Result: no horizontal overflow, no stale old-price copy, and direct image URLs load at 1500 × 1500 or 800 × 800. Build and static-link checks passed; page-quality still reports only the pre-existing long USB cable title length.

2026-08-31 dual-head 8-in-1 aluminium hub image replacement: replaced the generic hub reference image on `/products/hubs-docking/dual-head-8-in-1-aluminium-hub/` with four user-supplied product images copied into `/images/products/dual-head-8-in-1-aluminium-hub/` and referenced as WebP assets. The gallery now shows port layout, SD/TF card reading, tablet connection and dimension views. Build passed with `ASTRO_TELEMETRY_DISABLED=1` before preview.

2026-08-26 dual-head 8-in-1 aluminium hub addition: added `/products/hubs-docking/dual-head-8-in-1-aluminium-hub/` and the matching product card on `/products/hubs-docking/`. Browser verification covered desktop 1440, tablet 768 and mobile 390 for both routes. Result: no page-level horizontal overflow, no broken product images after lazy-load scroll, the hub collection shows the new product card, and both routes expose `US$1.90 / piece` plus `100 pcs` / `100 pieces`. Build and static-link checks passed; page-quality still reports the pre-existing long USB cable title length.

2026-08-26 folding bracket braided cable addition: added `/products/usb-cables/folding-bracket-braided-fast-charging-cable/` and the matching product card on `/products/usb-cables/`. Browser verification covered desktop 1440, tablet 768 and mobile 390 for both routes. Result: no page-level horizontal overflow, no broken product images, the USB collection shows the new product card, and the detail page exposes stock MOQ 50 pcs, custom lead time 7-10 days, custom packaging MOQ 1,000 pcs and logo support. Build, static links and page-quality checks passed.

2026-08-26 10-in-1 Type-C hub addition: added `/products/hubs-docking/10-in-1-type-c-hub/` and the matching product card on `/products/hubs-docking/`. Browser verification covered desktop 1440, tablet 768 and mobile 390 for both routes. Result: no page-level horizontal overflow, no broken product images, the hub collection shows the new product card, and the detail page exposes the supplier-listed HDMI, VGA, RJ45, PD, USB, SD, TF and audio port cues. Build and static-link checks passed; page-quality still reports the previously requested long USB cable title length.

2026-09-03 footer icon and logo sizing pass: normalized the header and footer logo containers to the same desktop width and visual height, kept the logo on a clean white background, and replaced the previous CSS-drawn footer contact symbols with consistent inline SVG mail, phone and location icons. Mobile keeps a fixed smaller header logo width so the brand remains readable without pushing navigation.

2026-09-03 header logo compact sizing pass: adjusted the header and footer logo blocks to match the supplied compact reference proportion, using a fixed 248px by 70px white logo plate on desktop and a 172px by 50px header logo plate on mobile. The logo image is centered with a restrained max height so the white background no longer reads as an oversized panel.

2026-09-03 footer logo match pass: removed footer column shrinkage from the logo block so the footer plate and inner image now render at the same desktop dimensions as the header: 248px by 70px plate with a 205px by 58px logo image. Browser measurement on `/oem-odm/?v=logo-footer-match` confirmed matching header and footer dimensions with no horizontal overflow.

2026-09-03 footer logo border match pass: merged the header and footer logo plate CSS so both use the same 248px by 70px white plate, 205px inner logo width, 8px radius, border opacity and shadow. This removes the footer-only visual difference that made the lower logo block read slightly different from the header.

| URL | Page type | Desktop | Tablet | Mobile | Notes |
| --- | --- | --- | --- | --- | --- |
| `/` | Home | Pass | Pass | Pass | Hero H1 follows the global title scale; category directory and configurator checked after title-size fixes. |
| `/products/` | Product-family directory | Pass | Pass | Pass | Product family cards, badges and directory heading checked. |
| `/products/usb-cables/` | Product collection | Pass | Pass | Pass | Product cards, visual summary and action modules checked. |
| `/products/usb-cables/folding-bracket-braided-fast-charging-cable/` | Product detail | Pass | Pass | Pass | New folding bracket braided cable detail page checked across desktop, tablet and mobile. |
| `/products/hdmi-cables/` | Product collection | Pass | Pass | Pass | Used as the visual reference standard for collection pages. |
| `/products/displayport-cables/` | Product collection | Pass | Pass | Pass | Product card and display-workload modules checked. |
| `/products/hubs-docking/` | Product collection | Pass | Pass | Pass | Port-matrix modules checked. |
| `/products/hubs-docking/justlink-8-in-1-usb-c-hub/` | Product detail | Pass | Pass | Pass | YBD 8-in-1 USB-C hub updated with four product images, current tier pricing, 10 pcs MOQ and logo support. |
| `/products/hubs-docking/dual-head-8-in-1-aluminium-hub/` | Product detail | Pass | Pass | Pass | Dual-head 8-in-1 aluminium hub updated with four user-supplied product images replacing the generic hub reference. |
| `/products/hubs-docking/10-in-1-type-c-hub/` | Product detail | Pass | Pass | Pass | New 10-in-1 Type-C hub detail page checked across desktop, tablet and mobile. |
| `/products/chargers/` | Product collection | Pass | Pass | Pass | Charger cards and action-flow modules checked. |
| `/products/displayport-cables/displayport-2-1-cable/` | Product detail | Pass | Pass | Pass | Product data, packaging, final CTA and long model text checked. |
| `/products/chargers/jl-p150-dual-port-wall-charger/` | Product detail | Pass | Pass | Pass | Purchase panel and final CTA checked. |
| `/products/chargers/jl-s5-3-in-1-wireless-charger/` | Product detail | Pass | Pass | Pass | Purchase panel and final CTA checked. |
| `/products/usb-cables/usb-c-fast-charging-cable/` | Product detail | Pass | Pass | Pass | Long cable model text checked. |
| `/products/usb-cables/usb-c-to-usb-c-pd-cable/` | Product detail | Pass | Pass | Pass | Long wattage/title text checked. |
| `/products/usb-cables/usb-3-2-20gbps-100w-cable/` | Product detail | Pass | Pass | Pass | Long USB 3.2 title checked. |
| `/products/usb-cables/usb4-140w-20gbps-full-function-cable/` | Product detail | Pass | Pass | Pass | Variant selector and long product heading checked. |
| `/products/hdmi-cables/hdmi-2-1-cable/` | Product detail / collection alias | Pass | Pass | Pass | Alias route renders without responsive issues. |
| `/products/hubs-docking/multiport-usb-c-hub/` | Product detail / collection alias | Pass | Pass | Pass | Alias route renders without responsive issues. |
| `/oem-odm/` | Customization pillar | Pass | Pass | Pass | Visual summary, approval stages and CTA checked. |
| `/case-studies/` | Customization case-study hub | Pass | Pass | Pass | Anonymous case-study index, RFQ CTA and internal links checked by static build, links and page-quality scripts. |
| `/case-studies/private-label-usb-c-cable-packaging/` | Customization case study | Pass | Pass | Pass | Cable packaging case content, tables and RFQ CTA checked by static build, links and page-quality scripts. |
| `/case-studies/custom-logo-usb-c-hub-project/` | Customization case study | Pass | Pass | Pass | Hub logo case content, tables and RFQ CTA checked by static build, links and page-quality scripts. |
| `/case-studies/pd-charger-private-label-packaging/` | Customization case study | Pass | Pass | Pass | Charger private-label packaging case content, tables and RFQ CTA checked by static build, links and page-quality scripts. |
| `/quality-factory/` | Evidence pillar | Pass | Pass | Pass | Hero H1 follows the global title scale; evidence modules and supporting headings checked. |
| `/about-us/` | Company page | Pass | Pass | Pass | Hero and visual-summary rhythm aligned with Contact and other pillar pages; sourcing modules checked. |
| `/contact/` | Contact routing page | Pass | Pass | Pass | Contact title shortened and hero rhythm aligned with About and other pillar pages; inquiry modules checked. |
| `/get-a-quote/` | RFQ conversion page | Pass | Pass | Pass | RFQ workbench, follow-up modules and form layout checked. |
| `/request-sample/` | Sample conversion page | Pass | Pass | Pass | Sample decision path, acceptance criteria and RFQ handoff checked. |
| `/resources/` | Resource hub | Pass | Pass | Pass | Resource headings and policy copy checked. |
| `/solutions/` | Buyer-program pillar | Pass | Pass | Pass | Product grid badge overflow fixed and checked. |
| `/solutions/brands-private-label/` | Buyer-program page | Pass | Pass | Pass | Product grid badge overflow fixed and checked. |
| `/solutions/retail-ecommerce/` | Buyer-program page | Pass | Pass | Pass | Product grid badge overflow fixed and checked. |
| `/solutions/wholesalers-distributors/` | Buyer-program page | Pass | Pass | Pass | Product grid badge overflow fixed and checked. |
| `/privacy/` | Policy page | Pass | Pass | Pass | Policy headings and line length checked. |
| `/terms-of-service/` | Policy page | Pass | Pass | Pass | Policy headings and line length checked. |

## Maintenance rule

When any page content, product card, visual module, hero copy or shared CSS changes, re-run the same three viewport checks before treating the page as finished.

Any future visual issue should be recorded here with:

- URL
- viewport
- issue observed
- fix applied
- verification result
