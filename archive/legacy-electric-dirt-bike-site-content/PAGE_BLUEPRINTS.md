# Page Content Blueprints

## Content Model

Each page follows this reading sequence:

```text
Recognize the rider's situation
-> answer the immediate question
-> help the reader narrow the choice
-> explain tradeoffs and risks
-> provide proof
-> show the right own-brand next step
```

The site should not repeat a generic "power, adventure, freedom" message on every page.
Each page owns a distinct decision.

## 1. Home

- **Audience:** First-time visitors, adult riders, parents, and comparison shoppers.
- **Intent:** Mixed navigation and commercial discovery.
- **Job:** Understand what the brand sells and find the right shopping path quickly.
- **Opening answer:** Own-brand electric dirt bikes organized by rider, terrain, power,
  safety needs, and budget.
- **Content modules:** Brand promise; shop by rider; shop by performance/voltage; featured
  models; rider-fit selector; adult vs youth decision path; ownership support; buying-guide
  highlights; proof strip; support CTA.
- **Depth assets:** Four-question bike finder, model comparison table, support summary.
- **Proof:** Real product photos, product catalog, approved support policies, real reviews
  only when supplied.
- **Primary CTA:** Shop Electric Dirt Bikes.
- **Internal links:** Shop All, Adult, Kids & Youth, 72V, 60V, Buying Guides.
- **Schema:** Organization and WebSite. Product markup only on real visible products.

## 2. Shop All Electric Dirt Bikes

- **Primary keyword:** electric dirt bike.
- **Audience:** Buyers who know the product category but have not selected a model.
- **Intent:** Collection navigation and purchase comparison.
- **Job:** Compare all own-brand models without needing to understand the catalog first.
- **Opening answer:** A concise explanation of how the models differ by rider size,
  terrain, speed class, voltage, range class, and price.
- **Content modules:** Filterable catalog; compare toggle; rider-fit labels; terrain labels;
  key-spec rows; price/availability; financing note; shipping/support note; selection FAQ.
- **Filters:** Adult/youth, rider height or age, voltage, speed class, terrain, price,
  availability, street-use status only when proven.
- **Depth assets:** Visible comparison table and "How to choose" checklist.
- **Proof:** Exact SKU data, prices, inventory, approved specifications and product images.
- **Primary CTA:** View Model.
- **Internal links:** Adult, Kids & Youth, voltage collections, price guide.
- **Merge rule:** `electric dirt bikes for sale` is a keyword variation of this page, not a
  second collection.
- **Schema:** ItemList plus Product only for visible real products.

## 3. Adult Electric Dirt Bikes

- **Primary keyword:** electric dirt bike for adults.
- **Audience:** Adult beginners, trail riders, weekend riders, and performance riders.
- **Intent:** Commercial investigation.
- **Job:** Determine which adult model fits rider size, skill, terrain, and performance goals.
- **Opening answer:** Adult fit depends on dimensions, controllability, terrain, braking,
  suspension, usable power, and support, not top speed alone.
- **Content modules:** Adult catalog; rider-fit matrix; beginner vs experienced path;
  trail vs track vs private-property use; voltage/power explanation; range assumptions;
  suspension/brake/tire checks; ownership/support; FAQ.
- **Depth assets:** Rider-fit checklist, terrain table, model comparison.
- **Proof:** Dimensions, weight limits, speed/range test method, brake/suspension specs.
- **Primary CTA:** Compare Adult Models.
- **Internal links:** Fast Bikes, 72V, 60V, Range Guide, Motor Guide.
- **Schema:** CollectionPage and ItemList.

## 4. Fast Electric Dirt Bikes

- **Primary keyword:** fastest electric dirt bike.
- **Audience:** Experienced riders and performance shoppers.
- **Intent:** Performance comparison with strong commercial intent.
- **Job:** Compare speed-capable models while understanding control and terrain tradeoffs.
- **Opening answer:** "Fastest" is not a universal recommendation; rider skill, braking,
  suspension, tires, terrain, and verified test conditions determine whether speed is useful.
- **Content modules:** Verified speed-class catalog; test-condition disclosure; acceleration
  and control factors; braking/suspension/tires; rider skill gate; protective gear; range
  tradeoff; where high speed is inappropriate; model comparison.
- **Depth assets:** Speed claim methodology, performance/safety matrix, rider-readiness check.
- **Proof:** Verified top-speed method and reviewer. Do not use `40+ MPH` until a model proves it.
- **Primary CTA:** Compare Performance Models.
- **Internal links:** Adult, 72V, Range Guide, Safety content.
- **Schema:** CollectionPage only when qualifying products exist; otherwise Article.

## 5. 72V Electric Dirt Bikes

- **Primary keyword:** 72v electric dirt bikes.
- **Audience:** Performance-oriented adult riders comparing power systems.
- **Intent:** Technical commercial investigation.
- **Job:** Decide whether a 72V platform suits the rider and terrain.
- **Opening answer:** Voltage is one system characteristic, not a complete measure of speed,
  torque, range, or quality.
- **Content modules:** Qualifying catalog; what voltage changes; controller/motor/battery
  relationship; heat and sustained-load considerations; range tradeoffs; charging;
  rider/terrain fit; 72V vs 60V table; ownership costs; FAQ.
- **Depth assets:** System comparison table, use-case matrix, charging checklist.
- **Proof:** Battery nominal voltage, capacity, controller, motor, charger and test data.
- **Primary CTA:** Compare 72V Models.
- **Internal links:** Adult, 60V, Motor Guide, Range Guide, Charging Guide.
- **Schema:** CollectionPage and ItemList when real 72V products exist.

## 6. 60V Electric Dirt Bikes

- **Primary keyword:** 60v electric dirt bike.
- **Audience:** Adult riders seeking a balance of performance, control, weight, and cost.
- **Intent:** Technical commercial investigation.
- **Job:** Understand when a 60V system is the better fit than 72V or lower-voltage options.
- **Opening answer:** The right choice depends on the complete drive system and riding use,
  not voltage in isolation.
- **Content modules:** Qualifying catalog; system explanation; rider/terrain scenarios;
  60V vs 72V; range and charging; maintenance; support; FAQ.
- **Depth assets:** Scenario matrix and model spec table.
- **Proof:** Same product data standard as the 72V page.
- **Primary CTA:** Compare 60V Models.
- **Internal links:** Adult, 72V, Motor Guide, Range Guide.
- **Schema:** CollectionPage and ItemList when products exist.

## 7. Kids & Youth Electric Dirt Bikes

- **Primary keyword:** electric dirt bike for kids.
- **Audience:** Parents and guardians, with youth riders as a secondary audience.
- **Intent:** Commercial investigation plus safety education.
- **Job:** Choose a bike that matches the child's physical size, experience, supervision,
  terrain, and controllability needs.
- **Opening answer:** Age alone is not enough; fit, speed control, brakes, power delivery,
  protective gear, supervision, and riding location all matter.
- **Content modules:** Youth catalog; parent-first fit steps; inseam/reach/weight checks;
  beginner controls; speed modes; brake and tire checks; age-band paths; gear checklist;
  supervision and riding-area rules; support/parts; FAQ.
- **Depth assets:** Parent checklist, size worksheet, readiness matrix.
- **Proof:** Dimensions, minimum/maximum fit guidance, weight limits, speed modes and manuals.
- **Reviewer:** Youth safety reviewer.
- **Primary CTA:** Find a Kids Bike.
- **Internal links:** Ages 8-12, Teens, Low-Voltage Guide, Safety Guide.
- **Schema:** CollectionPage and ItemList.

## 8. Electric Dirt Bikes for Ages 8-12

- **Primary keyword:** electric dirt bike for 10 year old.
- **Audience:** Parents shopping for children roughly 8-12.
- **Intent:** Age-specific commercial investigation.
- **Job:** Translate an age query into a safe physical-fit and skill-fit decision.
- **Opening answer:** Do not recommend by age alone; measure the rider and assess experience.
- **Content modules:** Measure-before-buying instructions; fit ranges; beginner vs experienced
  child; control modes; brakes; protective gear; adult supervision; approved riding areas;
  qualifying models; common parent mistakes; FAQ by age.
- **Depth assets:** Printable measurement checklist and parent decision tree.
- **Proof:** Product dimensions and manufacturer fit guidance.
- **Reviewer:** Youth safety reviewer.
- **Primary CTA:** Compare Youth Models.
- **Internal links:** Kids & Youth, Teens, 24V/36V/48V Guide.
- **Schema:** CollectionPage if models qualify; otherwise Buying Guide.

## 9. Electric Dirt Bikes for Teens & Youth

- **Primary keyword:** electric dirt bike for teens.
- **Audience:** Parents and riders age 13+.
- **Intent:** Commercial investigation.
- **Job:** Find the transition point between youth models and adult-performance platforms.
- **Opening answer:** Rider size, maturity, experience, terrain, and control matter more than
  the teen label.
- **Content modules:** Youth-to-adult fit matrix; experience levels; speed/power progression;
  dimensions and weight; terrain; protective gear; supervision; maintenance responsibility;
  qualifying models; FAQ.
- **Depth assets:** Transition matrix and readiness checklist.
- **Proof:** Product fit data and safety review.
- **Primary CTA:** Compare Teen & Youth Models.
- **Internal links:** Kids & Youth, Adult, 60V, Safety Guide.
- **Schema:** CollectionPage or Buying Guide based on catalog.

## 10. Low-Voltage Youth Bike Guide

- **Keyword group:** 24V, 36V, and 48V electric dirt bike.
- **Audience:** Parents comparing entry-level voltage classes.
- **Intent:** Safety-led technical investigation.
- **Job:** Understand what voltage can and cannot tell them about suitability.
- **Opening answer:** Voltage does not equal an age rating; complete product fit and controls
  still determine suitability.
- **Content modules:** 24V/36V/48V comparison; typical use without invented performance
  numbers; rider-readiness questions; speed-mode and brake checks; battery/charging safety;
  model links; FAQ.
- **Depth assets:** Voltage selection table and parent checklist.
- **Proof:** Real qualifying product data. Avoid universal age/speed claims.
- **Reviewer:** Battery and youth safety reviewer.
- **Primary CTA:** Find a Youth Bike.
- **Internal links:** Kids & Youth, Ages 8-12, Teens, Charging Guide.
- **Schema:** Article.

## 11. Street-Legal Electric Dirt Bike Guide

- **Primary keyword:** electric street legal dirt bike.
- **Audience:** US buyers who want on-road or mixed-use capability.
- **Intent:** Legal research plus commercial investigation.
- **Job:** Determine whether a bike and intended use can comply in the rider's jurisdiction.
- **Opening answer:** Street legality varies by vehicle classification, equipment, paperwork,
  and state/local rules; an electric dirt bike is not automatically street legal.
- **Content modules:** Dirt bike vs dual-sport distinction; federal/state/local layers;
  VIN/title/registration; equipment checklist; license/insurance; state verification workflow;
  off-road alternatives; qualifying products only when documented; FAQ.
- **Depth assets:** Compliance checklist and official-source map.
- **Proof:** Current official DMV/statute sources and product documentation.
- **Reviewer:** US legal/compliance reviewer.
- **Primary CTA:** Check Model Documentation or Contact Support.
- **Internal links:** Dual-Sport Guide, Registration Guide, Shop All.
- **Schema:** Article. Never use Product legality claims without proof.
- **Status:** Hold until official-source review is complete.

## 12. Dual-Sport Electric Dirt Bike Guide

- **Primary keyword:** dual sport electric dirt bike.
- **Audience:** Riders seeking both off-road capability and road registration potential.
- **Intent:** Product-type research.
- **Job:** Understand the equipment, documentation, and use compromises of dual-sport models.
- **Opening answer:** Dual-sport suitability requires both physical equipment and legal
  documentation; adding lights alone may not make a dirt bike registrable.
- **Content modules:** Use-case comparison; equipment; documentation; tire/brake/suspension
  compromises; range/charging planning; registration verification; product evidence.
- **Depth assets:** Dirt bike vs dual-sport table and documentation checklist.
- **Proof/reviewer:** Same legal standard as the Street-Legal Guide.
- **Primary CTA:** Review Documented Models.
- **Status:** Hold until the catalog contains qualifying documented products.

## 13. Registration & License Guide

- **Primary keyword:** do you need a license for an electric dirt bike.
- **Audience:** Buyers trying to register or legally ride a bike on public roads.
- **Intent:** Legal how-to.
- **Job:** Follow a verification process without assuming eligibility.
- **Opening answer:** Requirements depend on location, vehicle classification, and riding use.
- **Content modules:** Determine intended use; identify classification; gather VIN/title/MSO;
  equipment check; DMV verification; insurance/license questions; rejection scenarios;
  support escalation.
- **Depth assets:** Step-by-step worksheet and official-source links.
- **Proof/reviewer:** Current official sources and legal review.
- **Primary CTA:** Contact Support With Your State and Model.
- **Status:** Hold until legal review.

## 14. Buying Guides Hub

- **Audience:** Shoppers who need education before choosing a model.
- **Intent:** Informational navigation with commercial progression.
- **Job:** Find the exact guide for the decision blocking purchase.
- **Content modules:** Start by rider; start by power; start by ownership question; start by
  budget; featured guides; recently reviewed dates.
- **Depth assets:** Guided decision paths, not a chronological blog feed.
- **Primary CTA:** Start With Rider Fit.
- **Internal links:** All buying guides and the relevant collection after each guide.
- **Schema:** CollectionPage.

## 15. Best Electric Dirt Bikes: Selection Guide

- **Primary keyword:** best electric dirt bikes.
- **Audience:** Broad comparison shoppers.
- **Intent:** Commercial investigation.
- **Job:** Define "best" by use case and compare only real own-brand models.
- **Opening answer:** There is no single best bike; the useful answer is best for a rider,
  terrain, performance need, support expectation, and budget.
- **Content modules:** Selection method; best-by-scenario categories; model matrix; tradeoffs;
  who should not choose each model; support and ownership; FAQ.
- **Depth assets:** Transparent scoring method and scenario matrix.
- **Proof:** Real products and documented specs. No paid-ranking disguise.
- **Primary CTA:** Compare All Models.
- **Schema:** ItemList only when the ranked items are visible and real.

## 16. Electric Dirt Bike Price & Budget Guide

- **Primary keywords:** electric dirt bike price, budget friendly electric dirt bike, and all
  `under $X` variations.
- **Audience:** Price-sensitive parents, beginners, and adult buyers.
- **Intent:** Commercial comparison.
- **Job:** Understand realistic purchase tiers and what is gained or sacrificed at each tier.
- **Opening answer:** Budget should include fit, safety equipment, shipping, support, parts,
  and ownership cost, not only the listed bike price.
- **Content modules:** Current catalog price bands; what changes by tier; adult vs youth
  expectations; false-economy warning; shipping/assembly/gear/maintenance costs; financing;
  live products by band; FAQ jump links for each searched threshold.
- **Depth assets:** Total-cost worksheet and tier comparison.
- **Proof:** Current prices and policies. Do not promise products under a threshold that the
  catalog does not contain.
- **Primary CTA:** Shop by Current Price.
- **Merge rule:** All `$100` through `$5,000` candidates become sections or filtered views,
  not standalone thin pages.
- **Schema:** Article plus ItemList for visible qualifying products.

## 17. Electric Dirt Bike Range Guide

- **Primary keyword:** electric dirt bike range.
- **Audience:** Buyers worried about ride duration and charging access.
- **Intent:** Technical ownership research.
- **Job:** Estimate useful range under the reader's conditions.
- **Opening answer:** Range changes with rider weight, speed, terrain, elevation, temperature,
  tires, pressure, battery condition, and riding style.
- **Content modules:** Range factors; test-method disclosure; estimate worksheet; trail
  planning; battery capacity context; cold weather; degradation; charging access; model data.
- **Depth assets:** Assumption-based calculator/table and pre-ride checklist.
- **Proof:** Real test method and model data; clearly label examples as illustrative.
- **Primary CTA:** Compare Model Range Data.
- **Internal links:** 72V, 60V, Charging, Battery Life.
- **Schema:** Article.

## 18. Motor & Power Guide

- **Primary keyword:** electric dirt bike motor.
- **Audience:** Technical shoppers comparing performance specifications.
- **Intent:** Informational/commercial investigation.
- **Job:** Understand how motor, controller, battery and gearing work together.
- **Opening answer:** Motor wattage alone does not predict usable performance.
- **Content modules:** Nominal vs peak claims; drive-system relationship; torque and gearing;
  heat and sustained load; terrain; rider weight; maintenance; how to compare spec sheets.
- **Depth assets:** Spec-reading checklist and system diagram/table.
- **Proof:** Approved technical data and engineering review.
- **Primary CTA:** Compare Complete Drive Systems.
- **Schema:** Article.

## 19. Charging Guide

- **Primary keyword:** electric dirt bike charger.
- **Audience:** Owners and buyers planning charging.
- **Intent:** Support and ownership education.
- **Job:** Charge safely, understand compatibility, and plan charging time.
- **Opening answer:** Use only a charger approved for the exact battery/system and follow the
  product manual.
- **Content modules:** Compatibility; connector and voltage checks; safe charging location;
  normal workflow; storage charge; temperature; warning signs; travel; replacement charger;
  support escalation.
- **Depth assets:** Charging checklist and troubleshooting boundary.
- **Proof:** Product manuals and battery reviewer.
- **Primary CTA:** Find Model Support.
- **Schema:** HowTo only if the visible instructions are complete and reviewed; otherwise Article.

## 20. Battery Life & Care Guide

- **Audience:** Buyers and owners evaluating long-term battery cost.
- **Intent:** Ownership research.
- **Job:** Distinguish ride range, runtime, cycle life, and calendar aging.
- **Opening answer:** "How long" can mean one ride, time to recharge, or service life; each
  needs a different answer.
- **Content modules:** Definitions; factors affecting life; storage; temperature; charging
  habits; signs of degradation; replacement/support; safety boundaries.
- **Depth assets:** Care checklist and terminology table.
- **Proof:** Manufacturer manuals and battery expert review.
- **Primary CTA:** View Battery Support.
- **Schema:** Article.

## 21. Parts & Maintenance Guide

- **Primary keyword:** electric dirt bike parts.
- **Audience:** Existing owners and support-conscious buyers.
- **Intent:** Parts/support.
- **Job:** Understand routine wear items, model compatibility, and how to obtain parts.
- **Opening answer:** Parts must be matched by exact model and revision; visual similarity is
  not enough.
- **Content modules:** Wear items; electric-system components; compatibility lookup; routine
  inspection; service intervals from manuals; parts request flow; discontinued-part policy;
  fat-tire considerations as a subsection.
- **Depth assets:** Maintenance calendar and parts-request checklist.
- **Proof:** Real parts catalog and service documentation.
- **Primary CTA:** Find Parts for My Model.
- **Schema:** Article or CollectionPage depending on parts commerce.

## 22. Repair & Service Guide

- **Primary keyword:** electric dirt bike repair near me.
- **Audience:** Owners with a fault or maintenance need.
- **Intent:** Local/service support.
- **Job:** Decide what can be checked safely and how to reach qualified service.
- **Opening answer:** The site should help identify the model, symptom, warranty status and
  safe next step; it should not imply a nationwide service network unless one exists.
- **Content modules:** Stop-riding conditions; model/serial lookup; basic non-invasive checks;
  support ticket requirements; warranty path; authorized service locator if real; shipping
  for repair; FAQ.
- **Depth assets:** Diagnostic intake form, not DIY battery or controller repair.
- **Proof:** Real service workflow and locations.
- **Primary CTA:** Start a Support Request.
- **Schema:** WebPage; LocalBusiness only for real locations.

## 23. Financing

- **Audience:** Buyers who need payment flexibility.
- **Intent:** Transaction support.
- **Job:** Understand available payment plans, eligibility process, costs, and alternatives.
- **Content modules:** Provider; how it works; eligibility; APR/fees disclosure; example only
  when approved; returns/refunds interaction; FAQ; support.
- **Proof:** Approved provider terms and legal disclosures.
- **Primary CTA:** Check Financing Options.
- **Schema:** FAQ only when visible answers qualify.

## 24. Shipping & Delivery

- **Audience:** Buyers concerned about delivery cost, timing, assembly and damage.
- **Intent:** Transaction support.
- **Job:** Know what happens from order to first ride.
- **Content modules:** Coverage; cost calculation; processing; carrier/freight; tracking;
  delivery appointment; packaging; assembly; inspection; damage claims; restricted areas.
- **Proof:** Approved operations policy.
- **Primary CTA:** Check Delivery for My ZIP.

## 25. Warranty, Returns & Support

- **Audience:** Risk-conscious buyers and current owners.
- **Intent:** Transaction/support.
- **Job:** Understand coverage, exclusions, return eligibility, claim evidence and response path.
- **Content modules:** Warranty summary; full terms; returns; cancellations; consumables;
  modifications; claim steps; required photos/video; response expectations; escalation.
- **Proof:** Approved legal policy.
- **Primary CTA:** Start a Claim or Contact Support.

## 26. Contact

- **Audience:** Pre-sale buyers, owners, dealers, and partners.
- **Intent:** Support navigation.
- **Job:** Reach the correct team with enough information for a useful answer.
- **Content modules:** Pre-sale form; order support; technical support; warranty; dealer inquiry;
  hours and response expectations; required model/order fields.
- **Proof:** Real contact channels and service-level expectations.
- **Primary CTA:** Send Request.

## 27. Compare & Alternatives Blog Hub

- **Audience:** Brand-aware shoppers arriving through competitor searches.
- **Intent:** Comparison navigation.
- **Job:** Learn how to compare alternatives objectively, then evaluate own-brand products.
- **Content modules:** Compare by rider; compare by budget; compare by performance; youth
  alternatives; methodology; latest review date; disclosure.
- **Rule:** Competitor names appear only in this Blog area.
- **Primary CTA:** Compare Our Models.
- **Schema:** CollectionPage.

## 28. Surron Alternative Guide

- **Keyword:** surron electric dirt bike.
- **Audience:** Performance shoppers familiar with Surron.
- **Intent:** Brand comparison and alternatives.
- **Job:** Decide whether to buy a Surron-class product or evaluate an own-brand model for a
  specific rider, terrain, support expectation, and budget.
- **Decision focus:** Rider fit, intended terrain, power delivery, battery, dimensions, parts,
  warranty/support, price and ownership path.
- **Required modules:** Search-intent acknowledgement; comparison method; current Surron
  reference data from official sources; own-brand fit matrix; scenario recommendations;
  limitations; FAQ.
- **Proof:** Current official competitor specs and own-brand specs. No invented "vs" claims.
- **CTA:** Compare Our Adult Models.

## 29. Razor Alternative Guide

- **Keyword:** razor electric dirt bike.
- **Audience:** Parents and budget/youth shoppers familiar with Razor.
- **Intent:** Brand comparison and alternatives.
- **Job:** Identify the correct youth product class and determine whether an own-brand model
  offers a better fit for the child's size, experience, riding area, and support needs.
- **Decision focus:** Rider size, age/readiness, controllability, speed modes, brakes, battery,
  terrain, support and budget.
- **Required modules:** Parent-first comparison; model-class boundaries; fit/safety checklist;
  own-brand alternatives only where genuinely comparable.
- **Proof/reviewer:** Official competitor data and youth safety review.
- **CTA:** Find a Kids or Youth Bike.

## 30. Talaria Alternative Guide

- **Audience:** Adult performance comparison shoppers.
- **Intent:** Brand alternative and commercial comparison.
- **Job:** Compare Talaria-class options with own-brand adult models without assuming that
  products in different power, size, or legal classes are interchangeable.
- **Decision focus:** Dimensions, drive system, suspension, brakes, battery, terrain, support,
  legal/off-road classification and total cost.
- **Required modules:** Product-class check; official-spec matrix; rider/terrain scenarios;
  support and parts comparison; limitations; own-brand next steps.
- **CTA:** Compare Adult Models.
- **Proof:** Current official Talaria source-to-claim table and approved own-brand data.

## 31. Stark VARG Alternative Guide

- **Audience:** High-performance motocross shoppers.
- **Intent:** Premium brand comparison and product-class research.
- **Job:** Determine whether the rider truly needs competition-level electric motocross
  performance or a different class of own-brand bike.
- **Decision focus:** Competition-level use vs recreational/trail use, rider skill, power
  adjustability, chassis, battery, support and price class.
- **Required modules:** Product-class explanation; official-spec comparison; track vs trail
  scenarios; rider-skill gate; ownership/support; alternatives by actual use.
- **Proof:** Current official Stark data and approved own-brand data.
- **Boundary:** Do not present a lower-class bike as a direct substitute.
- **CTA:** See Which Performance Class Fits You.

## 32. KTM Electric Alternative Guide

- **Audience:** Riders researching KTM electric off-road models.
- **Intent:** Brand navigation, product research, and alternatives.
- **Job:** Identify the KTM model class being searched and compare only genuinely relevant
  own-brand options.
- **Decision focus:** Youth vs adult model class, intended terrain, dealer/service expectations,
  specifications and ownership cost.
- **Required modules:** Current-product check; youth/adult class split; official-spec matrix;
  rider and terrain fit; service expectations; own-brand alternatives.
- **Proof:** Current official KTM data and approved own-brand data.
- **CTA:** Compare by Rider and Terrain.

## 33. Yamaha Electric Dirt Bike Research Guide

- **Audience:** Searchers expecting a Yamaha electric dirt bike.
- **Intent:** Often navigation or product-existence research.
- **Job:** Verify whether Yamaha currently offers the type of electric dirt bike the searcher
  expects, then identify honest alternatives by use case.
- **Content task:** Clarify what currently exists using official sources, distinguish electric
  bicycles/concepts/off-road products, then explain relevant own-brand alternatives without
  implying equivalence.
- **Required modules:** Current official product check; product-class definitions; alternative
  selection framework; own-brand next step.
- **Proof:** Current official Yamaha sources and approved own-brand data.
- **CTA:** Compare Electric Dirt Bikes by Use.
- **Status:** Manual review before publication.

## 34. Honda Electric Dirt Bike Research Guide

- **Audience:** Searchers expecting a Honda electric dirt bike.
- **Intent:** Brand navigation, product-existence research, and alternatives.
- **Job:** Establish what Honda currently offers in the relevant class and prevent concepts,
  toys, bicycles, motorcycles, and electric dirt bikes from being mixed together.
- **Content task:** Verify current official products first; separate concepts, kids products,
  motorcycles and electric dirt bikes; provide a neutral selection framework.
- **Required modules:** Official product check; product-class explanation; rider/use scenarios;
  honest alternative framework; own-brand next step.
- **Proof:** Current official Honda sources and approved own-brand data.
- **CTA:** Explore Electric Dirt Bikes.
- **Status:** Manual review before publication.

## 35. Segway Electric Dirt Bike Alternative Guide

- **Audience:** Tech-oriented off-road comparison shoppers.
- **Intent:** Brand comparison and alternatives.
- **Job:** Decide whether a Segway model or an own-brand model better matches the rider's
  product class, terrain, electronics expectations, support needs, and budget.
- **Decision focus:** Product class, dimensions, performance system, app/electronics where
  documented, parts/support, price and use case.
- **Required modules:** Current-product check; official-spec matrix; connected-feature
  relevance; terrain/rider scenarios; support comparison; limitations.
- **Proof:** Official Segway product sources and approved own-brand data.
- **CTA:** Compare Our Models.
- **Status:** Manual review before publication.

## 36. Cake Electric Dirt Bike Alternative Guide

- **Audience:** Design- and lightweight-mobility-oriented shoppers.
- **Intent:** Brand/product research and alternatives.
- **Job:** Determine whether the search is for a lightweight electric motorcycle, an off-road
  bike, or a dirt bike, and then compare within the correct class.
- **Content task:** Clarify product availability and class before comparing.
- **Required modules:** Availability check; product-class explanation; design/weight/use
  tradeoffs; support and parts; relevant own-brand alternatives.
- **Proof:** Current official Cake sources and approved own-brand data.
- **CTA:** Compare by Product Class.
- **Status:** Manual review before publication.

## 37. Kuberg Electric Dirt Bike Alternative Guide

- **Audience:** Youth and specialist electric off-road shoppers.
- **Intent:** Brand comparison and youth/off-road product research.
- **Job:** Match the rider's size, experience and use to the correct product class before
  presenting any own-brand alternative.
- **Decision focus:** Rider age/size, use class, controls, support, product availability.
- **Required modules:** Current-product check; youth-fit and product-class split; control and
  safety comparison; support/parts; relevant alternatives; limitations.
- **Proof:** Official Kuberg data, own-brand specs, and youth safety review.
- **CTA:** Find the Right Youth Bike.
- **Status:** Manual review before publication.

## 38. Electric vs Gas Dirt Bike Guide

- **Primary keyword group:** dirt bike vs electric bike and electric vs gas dirt bike.
- **Audience:** First-time buyers choosing a powertrain rather than a specific brand.
- **Intent:** Product-class comparison.
- **Job:** Decide which system better fits riding location, noise limits, maintenance tolerance,
  ride duration, transport, charging/fueling access, and budget.
- **Opening answer:** Neither system is universally better; electric often changes noise,
  maintenance and power delivery, while gas may change refueling, service familiarity and
  long-session planning.
- **Content modules:** Use-case table; noise and riding access; power delivery; ride-session
  planning; charging vs fueling; maintenance tasks; weight and handling; ownership cost;
  environmental claims boundary; who should choose each; FAQ.
- **Depth assets:** Scenario matrix and total-ownership checklist.
- **Proof:** Published model data and sourced technical claims. Do not make unsourced emissions
  or lifetime-cost claims.
- **Primary CTA:** Explore Electric Dirt Bikes.
- **Internal links:** Shop All, Adult, Kids & Youth, Range Guide, Charging Guide.
- **Schema:** Article.

## Product Detail Page Template

Product pages now use the K2 product workbook as the source specification record.

Nine current product SKU drafts implement this standard:

- `pages/product-g1-24v-kids-electric-dirt-bike.md`
- `pages/product-k2-48-mx-1214.md`
- `pages/product-k2-48-my-1417.md`
- `pages/product-k2-60-my-1417.md`
- `pages/product-k2-72-my-1417.md`
- `pages/product-k2-72-lz-1719.md`
- `pages/product-x1-48-mx-1214.md`
- `pages/product-x1-48-my-1417.md`
- `pages/product-x1-60-my-1417.md`

They remain non-indexable until final own-brand identity, SKU records, prices, inventory, media,
policies, manuals, fit guidance, youth-safety review where relevant, and public speed/range
test evidence are approved.

- **Audience:** A shopper evaluating one exact model.
- **Intent:** Transactional.
- **Opening:** Model name, verified use case, price, availability and primary fit statement.
- **Modules:** Product gallery; key facts; fit and terrain; complete specifications; performance
  with test method; battery/charging; controls; brakes/suspension/tires; dimensions; what's
  included; shipping/assembly; warranty/parts; comparison; FAQ; reviews only when real.
- **Decision tools:** "Best for / not for", rider-fit table, model comparison, downloadable manual.
- **Proof:** SKU-level source record for every claim.
- **Schema:** Product, Offer, and Review only when visible data is real and policy-compliant.
