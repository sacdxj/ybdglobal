# Electric Dirt Bike Keyword Cleaning Preflight Decisions

This file is the confirmed operating spec for cleaning `electric_dirt_bike.xlsx`.

Keep the same output structure and QA logic from the previous SEO workflow; the product/business boundary is now Electric Dirt Bike for the US independent-store market.

## 1. Business Boundary

The project is for electric dirt bikes and closely related off-road electric motorcycle products.

Core intent:

- Electric dirt bikes for adults, kids, youth riders, beginners, and experienced off-road riders.
- Electric motocross bikes, electric trail bikes, electric pit bikes, mini electric dirt bikes, and off-road e-motos.
- Buyer-intent keywords around best, price, for sale, dealer, wholesale, distributor, specs, range, speed, battery, motor, suspension, tires, weight, charging, maintenance, and replacement parts.
- Navigation and collection keywords that match the own-brand store menu: Shop All, Adult Dirt Bikes, High-Speed 40+ MPH, 72V Powerhouses, 60V Performance, Kids & Youth, Ages 8-12, Teens & Youth 13+, Safety First Low Voltage, Street Legal, Dual-Sport Bikes, and Buying Guides.
- Competitor, alternative, and budget searches remain valid Blog acquisition topics, but they must never become commercial pillars, collections, or product navigation.
- Commercial category pages, comparison pages, buying guides, product support pages, and FAQ pages.

Adjacent intent:

- Electric vs gas dirt bike comparisons.
- Safety gear, riding tips, battery care, maintenance, storage, and troubleshooting.
- Local rules and trail guidance when tied to electric dirt bikes.
- Off-road e-bike or lightweight electric motorcycle topics when the searcher likely means an electric dirt bike.

Out of scope:

- Pure pedal bicycle topics.
- Generic motorcycle topics without electric/off-road intent.
- Toys, games, entertainment, celebrity, unrelated automotive terms, medical, adult, illegal, coupon/login/tracking/navigation-only terms.
- ATV, scooter, mobility scooter, or generic e-bike terms unless the electric dirt bike overlap is clear.

Mandatory reject:

- Adult/erotic/porn terms.
- Medical drug/medication intent.
- Illegal riding, bypassing limits, unsafe battery modification, or instructions that increase physical risk.
- Entertainment/games/celebrity traffic.
- Coupon/login/tracking/navigation intent without buyer or support value.

## 2. Site Structure

Use this structure for mapping pages:

- Main Menu / Header:
  - Shop All.
  - Adult Dirt Bikes.
    - High-Speed (40+ MPH).
    - 72V Powerhouses.
    - 60V Performance.
  - Kids & Youth.
    - Ages 8-12.
    - Teens & Youth (13+).
    - Safety First (Low Voltage).
  - Street Legal.
    - Dual-Sport Bikes.
    - Registry & Compliance Guide.
  - Buying Guides.
- Footer Menu:
  - Customer Support.
    - Contact Us.
    - Shipping & Delivery.
    - Financing Plans (Pay Later).
  - Buying Guides.
    - Are Electric Dirt Bikes Street Legal in the US?
    - 72V vs 60V: Which Battery System Do You Need?
    - How Long Does an Electric Dirt Bike Battery Last?
  - Compare & Alternatives Blog.
    - Own Brand vs. Surron.
    - Own Brand vs. Razor.
    - Budget-Friendly Electric Dirt Bike Guides.
    - Other competitor and alternative articles.

All Header, collection, pillar, and product pages sell the store's own brand. Competitor names are restricted to Blog content whose conversion path returns to own-brand products.

## 3. Output Goal

Output all of the following in separate sheets:

- Core production pages.
- Batch 1 SEO pages.
- Batch 2 SEO expansion.
- Parent/FAQ merge candidates.
- Manual review queue.
- Full opportunity pool.
- Keyword-level master classification.
- Semantic QA evidence.

## 4. Target Page Counts

Use balanced mode.

- Build now: 50-80 pages.
- Core product/commercial pages inside Build now: 5-15 pages.
- Batch 2 SEO expansion: 150-300 pages.
- Parent/FAQ merge candidates: 50-120 pages.
- Manual review queue: under 80 pages.

## 5. Risk Strategy

- Keep Build now focused on buyer, comparison, product, parts, support, dealer, and education intent.
- Route ambiguous motorcycle, e-bike, ATV, scooter, and toy terms to review unless electric dirt bike fit is clear.
- Safety, legal, and battery modification topics require cautious wording and review.
- Do not Build now for broad unrelated volume.

## 6. Semantic QA Mode

Use keyword-level plus page-candidate semantic QA.

Required behavior:

- Embed non-rejected keyword rows.
- Embed page candidates.
- Calculate topic similarity, cluster similarity, topic purity, cluster purity.
- Add semantic fields to `Keyword_Master`, `QA_Scored_Articles`, and `Production_Batches`.
- Add `Keyword_Semantic_QA`.
- Add `Semantic_QA`.
- Add `Semantic_Group_Summary`.
- Add `Feature_Consistency_Audit`.
- Final execution should use `Semantic Production Decision`.

Do not claim semantic QA unless the embedding API actually runs or cache evidence proves the exact texts were embedded.

## 7. Required Workbook Sheets

Final workbook must include:

- Keyword_Master.
- Topic_Map.
- Topic_Mid.
- Mid_Clusters.
- Article_Plan_Mid.
- Page_Opportunity_Expansion.
- QA_Scored_Topics.
- QA_Scored_Clusters.
- QA_Scored_Articles.
- Production_Batches.
- Execution_Roadmap.
- Site_Foundation.
- Keyword_Semantic_QA.
- Semantic_QA.
- Semantic_Group_Summary.
- Feature_Consistency_Audit.

## 8. Default Execution Decision

- `Semantic Production Decision = Build now`: first production batch.
- `Semantic Production Decision = Build later`: SEO expansion queue.
- `Semantic Production Decision = Merge into parent/FAQ`: supporting content, not standalone page.
- `Semantic Production Decision = Manual review before build`: inspect manually before publishing.
- `Reject/deprioritize`: do not build.
