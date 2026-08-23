# Procurement Decision Audit Plan

This document defines the operating goal, page standards, and verification workflow for upgrading the Axiterm / Binding Post website from an SEO-ready manufacturing site into a procurement-decision website that can generate higher-quality OEM RFQs.

## 1. Strategic Goal

The website should help OEM buyers decide whether Axiterm is a realistic manufacturing partner for precision terminal component projects.

Primary positioning:

- Precision Terminal Components Manufacturer for OEM Audio, Test, Power, and Industrial Equipment.
- Binding Posts remain the main buyer-recognition and SEO entry point.
- Custom terminal components, copper/brass machining, insulation, assembly, and OEM development form the brand ceiling.
- RFQ quality matters more than traffic volume.

The site should not drift into:

- A pure audiophile consumer product site.
- A generic CNC machining factory directory.
- A large but shallow product catalog.
- A blog-first SEO site without RFQ conversion logic.

## 2. Operating Principle

Every important page must reduce procurement risk.

The page should answer:

- Can this supplier understand my project?
- Can this supplier manufacture this part or assembly?
- What evidence supports the claim?
- What project details do they need from me?
- What should I do next?

## 3. Audit Dimensions

Each page will be reviewed against eight dimensions.

| Dimension | Key Question |
| --- | --- |
| Buyer | Which decision role does this page serve: engineer, purchasing, quality, owner, or mixed? |
| Intent | What is the page's primary job in the buyer journey? |
| Fit | Can the visitor decide whether this page matches their project? |
| Risk Reduction | Does the page address the buyer's likely concerns and failure risks? |
| Decision Evidence | Does the page show evidence, not just claims? |
| Information Gain | Does the page add useful information competitors may not provide? |
| CTA / RFQ | Does the page clearly move the buyer toward quote, drawing review, sample review, or another useful action? |
| Next Step | Does the page make the next logical page or action obvious? |

## 4. Scorecard

Each important page should receive six scores.

| Score | Meaning |
| --- | --- |
| Sales Score | Does the page make the offer commercially clear and persuasive? |
| Engineering Score | Does it help engineers validate fit, material, interface, tolerance, current path, or assembly? |
| Evidence Score | Does it provide proof through specifications, process, QC, factory, packaging, cases, or project records? |
| Conversion Score | Does it create clear action paths such as Upload Drawing, Request Quote, Request Sample, or Engineering Review? |
| SEO Score | Is the page aligned with search intent, unique keywords, headings, schema, and internal links? |
| Authority Score | Does the page build topical authority through original guidance, comparison, FAQs, checklists, or technical depth? |

Target after optimization:

- S-level pages: average 90+ with no score below 85.
- A-level pages: average 85+ with no score below 80.
- B-level pages: average 80+ with no score below 75.
- Utility pages: clear function, no serious UX or trust gaps.

## 5. Buyer Journey Map

The site should support this procurement path:

1. Google / direct / referral entry.
2. Landing page: product, application, capability, or RFQ.
3. Fit check: product family, application, material, or manufacturing route.
4. Specification check: dimensions, material, finish, current, insulation, assembly, tolerance, packaging.
5. Evidence check: process, inspection, sample approval, factory, packaging, cases, documents.
6. Risk reduction: MOQ, lead time, sample, NDA, private label, revision control, repeat orders.
7. RFQ: drawing, sample, quantity, application, material, finish, validation needs.
8. Engineering discussion.
9. Sample approval.
10. Repeat production.

Each page should clearly support one or more steps and point to the next step.

## 6. Page Priority Levels

### S-Level Pages

These pages directly affect positioning and RFQ conversion. They should be optimized first.

- `/`
- `/products`
- `/products/binding-posts`
- `/products/custom-terminal-components`
- `/rfq`

### A-Level Pages

These pages support core buyer segmentation, important product families, and manufacturing proof.

- `/products/banana-plugs`
- `/products/spade-connectors`
- `/products/high-current-terminals`
- `/products/custom-brass-components`
- `/products/custom-copper-components`
- `/products/oem-terminal-development`
- `/applications`
- `/applications/audio-equipment`
- `/applications/test-measurement`
- `/applications/power-equipment`
- `/applications/industrial-equipment`
- `/capabilities`

### B-Level Pages

These pages build trust, answer objections, and support buyer validation.

- `/capabilities/cnc-machining`
- `/capabilities/brass-machining`
- `/capabilities/copper-machining`
- `/capabilities/injection-molding`
- `/capabilities/assembly`
- `/capabilities/plating`
- `/about`
- `/faq`
- `/contact`
- `/blog`
- `/blog/[slug]`

### Utility Pages

- `/privacy`
- `/404`
- `/rfq/thank-you`

## 7. Page Upgrade Pattern

Use this order when modifying pages.

1. Define page role and buyer role.
2. Rewrite hero only if positioning, fit, or CTA is unclear.
3. Add or sharpen fit checks.
4. Add risk-reduction content.
5. Add decision evidence.
6. Add information gain.
7. Improve CTA and next step.
8. Check internal links.
9. Build and scan for content or layout issues.
10. Record whether the page passes.

## 8. Required Page Elements by Page Type

### Product Pages

Must include:

- Product family fit.
- Variants or use cases.
- Quick specs or specification checklist.
- RFQ checks.
- Buyer checklist by role.
- Application links.
- Material / finish / assembly notes.
- CTA to RFQ or drawing upload.

Should add over time:

- FAQ.
- Download / datasheet placeholder.
- Material or plating comparison.
- Real product, QC, or process evidence.

### Application Pages

Must include:

- Equipment fit.
- Component scope.
- Application-specific RFQ review points.
- Link to relevant product pages.
- CTA to application-based RFQ.

Should add over time:

- Failure risks.
- Typical interface examples.
- Application-specific specification table.

### Capability Pages

Must include:

- What buyers can verify.
- RFQ inputs.
- Manufacturing risks to control.
- Related products and applications.
- CTA to capability-based RFQ.

Should add over time:

- Real machine/process evidence.
- Inspection method examples.
- Tolerance policy.
- Material behavior notes.

### RFQ / Trust Pages

Must include:

- Clear form or contact path.
- File upload guidance.
- What happens next.
- Review path.
- FAQ and buyer confidence.
- Tracking or validation checks.

## 9. Verification Checklist After Each Page Edit

After modifying a page:

- Run a content scan for mojibake, replacement characters, and unsupported punctuation in `src/pages` and `src/components`.
- Use `WEBSITE_DESIGN_SYSTEM.md` for page structure and `WEBSITE_CONTENT_SYSTEM.md` for copy, evidence, information gain, CTA, and lifecycle standards.
- Confirm intended CTA and next-step links exist.
- Confirm no unsupported claims were added.
- Confirm page still supports OEM B2B RFQ, not consumer hobbyist positioning.
- Run `npm.cmd run build`.
- Review diff for unrelated changes.

## 10. Initial Site-Level Diagnosis

Current strengths:

- Product / Application / Capability / RFQ structure is strategically correct.
- RFQ direction is much stronger than a normal contact-form site.
- Existing pages already use buyer checklists, RFQ inputs, and project review language.
- SEO foundation and internal page coverage are strong enough to build from.

Current gaps:

- Decision evidence is still weaker than page structure.
- Many images are conceptual, so buyer trust still depends heavily on copy.
- Product pages need more quick specs, FAQs, downloads, and comparison content.
- Capability pages need more proof: machines, inspection, tolerances, material handling, sample approval, packaging.
- Application pages need stronger next-step links into specific products and RFQ paths.
- Blog and knowledge layers are not yet strong enough to create authority.

## 11. Immediate Work Plan

Phase 1: Finish diagnosis and standardize S-level pages.

- Home.
- Products.
- Binding Posts.
- Custom Terminal Components.
- RFQ.

Phase 2: Standardize A-level product and application pages.

- Banana Plugs.
- Spade Connectors.
- High Current Terminals.
- Custom Brass Components.
- Custom Copper Components.
- OEM Terminal Development.
- Applications hub and four application pages.

Phase 3: Strengthen capability and trust evidence.

- Capabilities hub.
- Six capability pages.
- About.
- FAQ.
- Contact.
- RFQ thank-you page.

Phase 4: Build information-gain layer.

- Product FAQs.
- Material and plating comparisons.
- Selection guides.
- Application examples.
- Download placeholders.
- Future case-study framework.
