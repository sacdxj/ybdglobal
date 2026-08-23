# Procurement Decision Page Audit

This audit uses `PROCUREMENT_DECISION_AUDIT_PLAN.md` as the standard. It is a planning and diagnosis document only; page changes should be made after the diagnosis is reviewed.

Status key:

- Pass: close to target; only minor evidence or content-depth improvements needed.
- Needs Upgrade: direction is correct, but page needs stronger buyer decision support.
- Priority Fix: important page with clear conversion or evidence gap.

## S-Level Pages

| Page | Buyer / Role | Intent | Status | Main Gap | Recommended Upgrade |
| --- | --- | --- | --- | --- | --- |
| `/` | Mixed: engineer, purchasing, owner | Positioning, segmentation, RFQ entry | Phase Pass | Added decision-evidence band and buyer journey; still needs real factory/QC/project assets later | Add real factory/QC/project evidence when assets are available |
| `/products` | Engineer + purchasing | Product-family selection | Phase Pass | Added product decision guide and RFQ input hints; still needs real commercial/spec proof later | Add quick comparison/spec evidence and light trust band when data is available |
| `/products/binding-posts` | Engineer + purchasing | Main product entry | Phase Pass | Added Quick Specs, material/insulation route decisions, and FAQ; still needs downloads/real evidence later | Add datasheet/download placeholder and real product/QC evidence later |
| `/products/custom-terminal-components` | Engineer + sourcing | Custom project routing | Phase Pass | Added custom-route decision matrix and production-control logic; still needs case/evidence examples later | Add prototype/sample approval visuals and custom project FAQ later |
| `/rfq` | Purchasing + engineer | Conversion | Phase Pass | Added pre-submit procurement checks and after-submission expectations; operational verification still needed | Test form submission, file upload, analytics, thank-you route, and email delivery |

## A-Level Product Pages

| Page | Buyer / Role | Intent | Status | Main Gap | Recommended Upgrade |
| --- | --- | --- | --- | --- | --- |
| `/products/banana-plugs` | Engineer + purchasing | Banana plug / jack project entry | Phase Pass | Added 4 mm/interface quick specs, termination routes, route comparison, and mating-fit FAQ | Add real mating-sample photos, drawings, and download assets later |
| `/products/spade-connectors` | Engineer + purchasing | Cable-side fork terminal entry | Phase Pass | Added fork/cable quick specs, audio vs power route comparison, and geometry/finish FAQ | Add real fork-geometry drawings and cable assembly photos later |
| `/products/high-current-terminals` | Engineer + quality | Power terminal validation | Phase Pass | Added current-path quick specs, threaded/copper/insulated route comparison, and validation FAQ | Add tested current/heat examples only when verified data is available |
| `/products/custom-brass-components` | Engineer + sourcing | Brass hardware / structural parts | Phase Pass | Added brass material, thread, finish, and production evidence plus RFQ FAQ | Add real brass grade examples, machining photos, and finish samples later |
| `/products/custom-copper-components` | Engineer + quality | Conductive copper contact parts | Phase Pass | Added electrical, material, surface, and inspection evidence plus copper RFQ FAQ | Add real copper inspection images and validated performance notes later |
| `/products/oem-terminal-development` | Owner + engineer + purchasing | New or undefined OEM project development | Phase Pass | Added requirement, prototype, approval, and change-control evidence plus OEM FAQ | Add prototype timeline, sample approval/change-control diagram, NDA/private-label details |

## Application Pages

| Page | Buyer / Role | Intent | Status | Main Gap | Recommended Upgrade |
| --- | --- | --- | --- | --- | --- |
| `/applications` | Engineer + sourcing | Application routing | Pass | Good route selection; needs stronger product next-step linking | Add product-path links under each application card over time |
| `/applications/audio-equipment` | Audio OEM engineer + brand sourcing | Priority market fit | Phase Pass | Added recommended product next steps for binding posts, banana plugs, and spade connectors | Add audio-specific examples: finish/color/private label, panel spacing, application RFQ examples |
| `/applications/test-measurement` | Test equipment engineer | Interface reliability | Phase Pass | Added recommended next steps for banana plugs, high-current terminals, and copper components | Add repeated mating guidance, probe/jack compatibility examples, inspection checks |
| `/applications/power-equipment` | Power engineer + quality | Power interface fit | Phase Pass | Added product/capability next-step links and sharper current-path route | Add verified current/heat examples and insulation evidence later |
| `/applications/industrial-equipment` | Industrial OEM sourcing + engineer | Custom industrial terminal fit | Phase Pass | Added next-step links to custom terminal, brass, and OEM development routes | Add machine/control panel scenarios, batch consistency, revision control, packaging evidence |

## Capability Pages

| Page | Buyer / Role | Intent | Status | Main Gap | Recommended Upgrade |
| --- | --- | --- | --- | --- | --- |
| `/capabilities` | Purchasing + quality + owner | Capability hub / manufacturing proof | Phase Pass | Added Evidence Library for engineering, manufacturing, commercial, and project proof | Add equipment/QC/process proof, machine categories, inspection capabilities |
| `/capabilities/cnc-machining` | Engineer + quality | CNC feasibility | Phase Pass | Added drawing/process/inspection/release evidence plus CNC RFQ FAQ | Add verified machine/process photos, tolerance policy, and inspection examples later |
| `/capabilities/brass-machining` | Engineer | Brass machining proof | Phase Pass | Strengthened brass-specific material choice, thread behavior, plating compatibility, binding post use cases, and RFQ FAQ | Add real brass grade examples, thread inspection visuals, and plating-prep photos later |
| `/capabilities/copper-machining` | Engineer + quality | Copper machining proof | Phase Pass | Added electrical/material/surface/assembly evidence plus copper RFQ FAQ | Add verified contact-surface, burr-control, and current-path examples later |
| `/capabilities/injection-molding` | Engineer + quality | Insulation part validation | Phase Pass | Reframed as insulation design decision page with isolation, shrinkage, crack, looseness, color, insert-fit, and assembly-risk controls | Add real nylon/color samples, mold/sample approval visuals, and fit examples later |
| `/capabilities/assembly` | Purchasing + quality | Assembly and packaging proof | Phase Pass | Added assembly/packaging/quality/revision evidence plus assembly RFQ FAQ | Add real kit, packaging, final inspection, and private-label examples later |
| `/capabilities/plating` | Engineer + quality | Surface finish decision | Phase Pass | Added finish/masking/inspection/approval evidence plus plating RFQ FAQ | Add real finish samples, masking examples, and inspection acceptance references later |

## Trust / Support Pages

| Page | Buyer / Role | Intent | Status | Main Gap | Recommended Upgrade |
| --- | --- | --- | --- | --- | --- |
| `/about` | Owner + sourcing lead | Supplier trust | Phase Pass | Added supplier validation map, project evidence request path, and next-step routing | Add real factory, equipment, QC, export, team, and project evidence when assets are available |
| `/faq` | Purchasing + engineer | Objection handling | Pass | Strong RFQ/MOQ/material coverage | Add page-specific FAQ links and expand product FAQ clusters |
| `/contact` | Existing leads + fallback communication | Contact routing | Pass | Correctly does not compete with RFQ | Keep concise; maybe add response-time expectation and RFQ reminder |
| `/rfq/thank-you` | Converted lead | Post-submit guidance | Phase Pass | Added missing-file email path, engineering review preparation, and clearer post-submit expectations | Test real form redirect and email delivery after deployment |
| `/blog` | Research visitors | Knowledge center | Phase Pass | Added knowledge clusters, editorial roadmap, and RFQ/product routes; content volume is still small | Publish first P0 Knowledge Base articles from `NEXT_PHASE_OPERATING_PLAN.md` |
| `/privacy` | Compliance | Utility | Pass | Not a current conversion page | Leave as utility page unless legal changes are needed |

## Immediate Priority Recommendation

Do not expand blog or add many new URLs yet. First upgrade the existing high-value pages.

Recommended sequence:

1. Confirm this audit standard.
2. Finish checking RFQ thank-you page and trust/support pages.
3. Upgrade S-level pages in this order:
   - `/products/binding-posts`
   - `/products`
   - `/`
   - `/products/custom-terminal-components`
   - `/rfq` operational verification
4. Upgrade A-level product pages.
5. Upgrade application pages that still need sharpening:
   - `/applications/power-equipment`
   - `/applications/industrial-equipment`
6. Upgrade capability proof pages.
7. Build information-gain content layer.

## Page Pass Criteria

A page is considered acceptable after modification when:

- Buyer role and page intent are obvious in the first screen.
- The visitor can decide whether the page fits their project.
- The page identifies the main sourcing or engineering risks.
- The page provides at least one form of decision evidence.
- The page adds useful information beyond generic manufacturer claims.
- The next step is obvious and relevant.
- RFQ or related CTA is visible without forcing the user to reach the footer.
- Build passes and no encoding issues are introduced.
