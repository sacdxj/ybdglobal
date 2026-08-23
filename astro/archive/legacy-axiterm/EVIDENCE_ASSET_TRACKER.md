# Evidence Asset Tracker

Use this tracker to move the site from conceptual visuals to real procurement evidence. Do not publish unsupported claims; each asset should answer whether Axiterm can make, inspect, approve, package, and repeat the part.

## Priority Rules

- P0 assets should be collected before the first serious paid-search RFQ test.
- Real product, process, inspection, sample approval, and packaging evidence should replace conceptual visuals page by page.
- Keep captions factual. Use "example", "sample", or "project review" wording unless a claim is backed by approved data.
- Do not add material grades, tolerances, current ratings, certifications, MOQ, or lead times unless sales or engineering has approved the exact value.

## P0 Shot List

| Asset | Minimum | Status | Target Pages |
| --- | ---: | --- | --- |
| Binding post close-ups, red/black sets, panel fit | 12 | Needed | `/products/binding-posts`, `/applications/audio-equipment`, `/` |
| CNC / automatic lathe process photos | 8 | Needed | `/capabilities/cnc-machining`, `/capabilities/brass-machining`, `/capabilities/copper-machining` |
| Inspection photos with caliper, micrometer, thread gauge | 10 | Needed | `/capabilities`, `/capabilities/cnc-machining`, `/rfq` |
| Sample approval or drawing review scenes | 4 | Needed | `/rfq`, `/products/custom-terminal-components`, `/products/oem-terminal-development` |
| Assembly and packaging photos | 10 | Needed | `/capabilities/assembly`, `/about`, product pages |

## Product Page Evidence

| Page | Evidence Needed | Replacement Goal | Status |
| --- | --- | --- | --- |
| `/products/binding-posts` | Binding post sets, insulation parts, panel fit, banana plug fit, packaging | Replace conceptual product proof and support audio OEM RFQs | Needed |
| `/products/banana-plugs` | 4 mm mating sample, jack interface, cable termination, packaging | Show mating fit and cable-side capability | Needed |
| `/products/spade-connectors` | Fork geometry, cable fit, edge/burr close-up, finish zones | Prove fork-fit and finish control | Needed |
| `/products/high-current-terminals` | Threaded terminal, busbar/lug interface, insulation clearance, inspection | Support power/test equipment sourcing confidence | Needed |
| `/products/custom-terminal-components` | Drawing review, sample comparison, mixed brass/copper/insulation parts | Prove drawing-based project handling | Needed |
| `/products/oem-terminal-development` | Reference sample, prototype revision, approval sample, packaging approval | Prove OEM development workflow | Needed |

## Capability Page Evidence

| Page | Evidence Needed | Status |
| --- | --- | --- |
| `/capabilities/cnc-machining` | CNC/lathe, threading, go/no-go gauge, dimensional inspection | Needed |
| `/capabilities/brass-machining` | Brass stock, threaded brass bodies, plating-ready surfaces | Needed |
| `/capabilities/copper-machining` | Copper contacts, current-path surfaces, burr-control checks | Needed |
| `/capabilities/injection-molding` | Red/black insulation parts, washers, caps, fit checks | Needed |
| `/capabilities/assembly` | Kits, paired sets, labels, packaging, final inspection | Needed |
| `/capabilities/plating` | Finish sample board, masked/contact zones, plated parts | Needed |

## Approval Workflow

1. Collect raw photos and videos into a dated source folder.
2. Rename selected assets by page and evidence type.
3. Confirm each asset is approved for public website use.
4. Add factual caption and alt text tied to buyer decision intent.
5. Replace one page group at a time, then run `npm.cmd run build`.

