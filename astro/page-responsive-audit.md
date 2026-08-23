# Page Responsive Audit

Last checked: 2026-08-22

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

| URL | Page type | Desktop | Tablet | Mobile | Notes |
| --- | --- | --- | --- | --- | --- |
| `/` | Home | Pass | Pass | Pass | Hero H1 follows the global title scale; category directory and configurator checked after title-size fixes. |
| `/products/` | Product-family directory | Pass | Pass | Pass | Product family cards, badges and directory heading checked. |
| `/products/usb-cables/` | Product collection | Pass | Pass | Pass | Product cards, visual summary and action modules checked. |
| `/products/hdmi-cables/` | Product collection | Pass | Pass | Pass | Used as the visual reference standard for collection pages. |
| `/products/displayport-cables/` | Product collection | Pass | Pass | Pass | Product card and display-workload modules checked. |
| `/products/hubs-docking/` | Product collection | Pass | Pass | Pass | Port-matrix modules checked. |
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
