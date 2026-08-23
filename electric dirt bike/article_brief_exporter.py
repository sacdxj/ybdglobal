from __future__ import annotations

import argparse
import re
from pathlib import Path

import pandas as pd

from content_architecture_alignment import apply_content_alignment, align_internal_links


BASE_DIR = Path(__file__).resolve().parent
OUTPUTS_DIR = BASE_DIR / "outputs"
BRIEFS_DIR = OUTPUTS_DIR / "briefs"
WORKBOOK_CANDIDATES = [
    OUTPUTS_DIR / "electric_dirt_bike_keyword_architecture_serp_full.xlsx",
    OUTPUTS_DIR / "electric_dirt_bike_keyword_architecture_serp_80.xlsx",
    OUTPUTS_DIR / "electric_dirt_bike_keyword_architecture_serp.xlsx",
    OUTPUTS_DIR / "electric_dirt_bike_keyword_architecture_serp_dryrun.xlsx",
    OUTPUTS_DIR / "electric_dirt_bike_keyword_architecture_semantic.xlsx",
    OUTPUTS_DIR / "electric_dirt_bike_keyword_architecture.xlsx",
]


def pick_workbook(explicit: str | None = None) -> Path:
    if explicit:
        path = Path(explicit)
        if not path.exists():
            raise FileNotFoundError(f"Workbook not found: {path}")
        return path
    for path in WORKBOOK_CANDIDATES:
        if path.exists():
            return path
    raise FileNotFoundError("No electric dirt bike SERP workbook found in outputs.")


def slugify(value: str) -> str:
    value = value.lower().strip()
    replacements = {
        "á": "a", "à": "a", "ã": "a", "â": "a",
        "é": "e", "ê": "e",
        "í": "i",
        "ó": "o", "õ": "o", "ô": "o",
        "ú": "u",
        "ç": "c",
    }
    for src, dst in replacements.items():
        value = value.replace(src, dst)
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "seo-article-brief"


def clean(value) -> str:
    if value is None or pd.isna(value):
        return ""
    return str(value).strip()


def split_pipe(value) -> list[str]:
    text = clean(value).replace(";", "|")
    return [part.strip() for part in text.split("|") if part.strip()]


def load_sheet(xls: pd.ExcelFile, name: str) -> pd.DataFrame:
    if name not in xls.sheet_names:
        return pd.DataFrame()
    return pd.read_excel(xls, sheet_name=name)


def find_page(prod: pd.DataFrame, keyword: str) -> pd.Series:
    if prod.empty:
        raise ValueError("Production_Batches sheet is empty or missing.")
    keyword_norm = keyword.strip().lower()
    candidates = prod[
        prod.get("Primary Keyword", pd.Series("", index=prod.index)).astype(str).str.lower().eq(keyword_norm)
    ]
    if candidates.empty:
        candidates = prod[
            prod.get("Expanded Page Candidate", pd.Series("", index=prod.index)).astype(str).str.lower().eq(keyword_norm)
        ]
    if candidates.empty:
        contains = prod[
            prod.get("Primary Keyword", pd.Series("", index=prod.index)).astype(str).str.lower().str.contains(
                re.escape(keyword_norm),
                na=False,
            )
        ]
        if not contains.empty:
            candidates = contains
    if candidates.empty:
        raise ValueError(f"No page candidate found for keyword: {keyword}")
    return candidates.iloc[0]


def related_evidence(evidence: pd.DataFrame, keyword: str) -> pd.Series | None:
    if evidence.empty or "Primary Keyword" not in evidence.columns:
        return None
    rows = evidence[evidence["Primary Keyword"].astype(str).str.lower().eq(keyword.lower())]
    if rows.empty:
        return None
    return rows.iloc[0]


def related_links(links: pd.DataFrame, keyword: str, limit: int = 8) -> pd.DataFrame:
    if links.empty or "Source Primary Keyword" not in links.columns:
        return pd.DataFrame()
    rows = links[links["Source Primary Keyword"].astype(str).str.lower().eq(keyword.lower())].copy()
    if "Link Score" in rows.columns:
        rows = rows.sort_values("Link Score", ascending=False)
    return rows.head(limit)


def bullet_list(items: list[str], fallback: str = "n/a") -> str:
    if not items:
        return f"- {fallback}"
    return "\n".join(f"- {item}" for item in items)


def infer_competitive_audit(titles: list[str], snippets: list[str], top_urls: list[str]) -> dict[str, list[str] | str]:
    joined = " ".join([*titles, *snippets, *top_urls]).lower()
    patterns = []
    if any(term in joined for term in ["surron", "sur ron", "razor", "talaria", "ktm", "stark"]):
        patterns.append("competitor / alternative comparison")
    if any(term in joined for term in ["street legal", "registration", "license", "dual sport"]):
        patterns.append("street legal / compliance guide")
    if any(term in joined for term in ["72v", "60v", "battery", "range", "charger", "motor"]):
        patterns.append("technical spec guide")
    if any(term in joined for term in ["kids", "youth", "teen", "age", "safety"]):
        patterns.append("parent and youth buying guide")
    dominant = ", ".join(patterns) if patterns else "mixed or unclear SERP pattern"
    return {
        "dominant_pattern": dominant,
        "competitor_strengths": [
            "Existing results may have product inventory, brand authority, videos, reviews, or spec tables.",
            "Competitor pages may already rank for Surron/Razor/Talaria-style comparison and budget queries.",
        ],
        "competitor_gaps": [
            "Often weak on matching rider age, size, speed tolerance, terrain, range, and support needs in one page.",
            "Often weak on clear voltage tradeoffs, battery expectations, maintenance, financing, and shipping support.",
            "Often weak on legal/safety disclaimers and practical pre-purchase checklists.",
        ],
        "electric_dirt_bike_advantage": "Compete by combining clear product fit, range/speed/battery guidance, terrain use cases, safety support, parts availability, financing, shipping, and after-sales workflow.",
        "content_moat": [
            "rider fit checklist",
            "voltage/speed/range comparison table",
            "adult vs youth decision table",
            "street legal verification checklist",
            "budget and financing decision table",
            "source-to-claim map",
            "[DATA NEEDED] real electric dirt bike product specs, photos, test notes, reviewer, warranty, shipping, or financing proof",
        ],
        "can_win": "Possible",
        "stronger_if": [
            "Add real electric dirt bike product specs and comparison tables",
            "Add reviewer identity",
            "Add model photos, videos, terrain/rider examples, or owner support examples",
            "Add financing/shipping details when the page targets budget buyers",
        ],
    }


def independent_review_template() -> dict[str, str]:
    return {
        "seo_reviewer": "[DATA NEEDED: SEO reviewer name/title or independent review status]",
        "subject_reviewer": "[DATA NEEDED: electric dirt bike product/safety reviewer name/title]",
        "conversion_reviewer": "[DATA NEEDED: conversion/offer reviewer name/title]",
        "proof_reviewer": "[DATA NEEDED: proof/source reviewer name/title]",
        "publish_cap": "Publish as test until independent review and proof gaps are completed.",
    }


def qa_notes(slug: str, decision: str, serp_match: str, merge_flag: str) -> list[str]:
    notes: list[str] = []
    if "/-/" in slug or "-/-" in slug or " " in slug:
        notes.append("Review URL slug before publishing; the workbook value may contain a path-format artifact.")
    if decision and decision.lower() not in {"build now", "build"}:
        notes.append(f"Do not write as a standalone article unless manually approved; decision is `{decision}`.")
    if serp_match.lower() in {"weak", "medium"}:
        notes.append(f"Recheck page type and intent before writing; SERP intent match is `{serp_match}`.")
    if merge_flag and merge_flag.lower() not in {"none", "nan"}:
        notes.append(f"Resolve merge/split decision before writing: `{merge_flag}`.")
    return notes


def infer_problem_map(primary: str, page_type: str, cluster: str, snippets: list[str]) -> dict[str, list[str] | str]:
    text = " ".join([primary, page_type, cluster, *snippets]).lower()
    blockers = ["rider fit", "battery range", "speed control", "price", "safety", "parts/support", "shipping", "legal use"]
    if re.search(r"\b(adult|adults|40\+?\s*mph|50\+?\s*mph|high[- ]speed|high performance|72v|60v)\b", text):
        primary_job = "Choose an adult electric dirt bike that fits the rider's speed, terrain, range, power, budget, and support expectations."
        minimum_answer = "Explain adult rider fit, speed class, 72V/60V tradeoffs, suspension, brakes, tires, range, charging, price, and ownership support."
        depth_assets = [
            "adult rider fit table",
            "speed and voltage comparison table",
            "terrain/use-case decision table",
            "range and charging assumptions",
            "ownership cost and support checklist",
        ]
    elif re.search(r"\b(kid|kids|youth|teen|teens|ages?|8|9|10|11|12|13|low voltage)\b", text):
        primary_job = "Choose a youth electric dirt bike that fits the rider's age, size, skill, speed tolerance, and safety needs."
        minimum_answer = "Explain age/size fit, voltage, top speed, parental controls or safety boundaries, protective gear, and when to choose a different class."
        depth_assets = [
            "age and rider-size fit table",
            "voltage/speed safety table",
            "parent buying checklist",
            "protective gear checklist",
            "upgrade path for teens",
        ]
    elif any(term in text for term in ["street legal", "dual sport", "register", "license", "compliance"]):
        primary_job = "Understand whether an electric dirt bike can be used legally on roads or needs to stay off-road."
        minimum_answer = "Explain street-legal vs off-road use, what to verify by state/local rule, and what claims require official documentation."
        depth_assets = [
            "street legal verification checklist",
            "off-road vs dual-sport comparison table",
            "state/local rule disclaimer",
            "registration documentation checklist",
        ]
    elif any(term in text for term in ["surron", "sur ron", "razor", "talaria", "alternative", "vs", "budget", "cheap"]):
        primary_job = "Compare alternatives and decide whether the buyer should pay for a premium model or choose a budget-friendly option."
        minimum_answer = "Compare price, power, range, size, parts support, warranty, shipping, and rider use case without attacking competitors."
        depth_assets = [
            "comparison table",
            "budget decision tree",
            "ownership cost checklist",
            "support and parts availability comparison",
        ]
    elif any(term in text for term in ["battery", "range", "charger", "charging", "72v", "60v", "motor"]):
        primary_job = "Understand the power system before choosing a bike."
        minimum_answer = "Explain voltage, battery capacity, range, charging time, motor power, rider weight, terrain, and maintenance implications."
        depth_assets = [
            "72V vs 60V table",
            "range assumptions table",
            "charging and battery care checklist",
            "terrain and rider weight notes",
        ]
    else:
        primary_job = "Choose the right electric dirt bike with less uncertainty."
        minimum_answer = "Explain buyer fit, terrain, speed, battery, price, safety, parts/support, shipping, and next action."
        depth_assets = [
            "buyer checklist",
            "comparison table",
            "rider/terrain fit table",
            "ownership cost notes",
            "support and warranty checklist",
        ]
    return {
        "primary_job": primary_job,
        "searcher_stage": "Beginner rider, parent buyer, experienced off-road rider, dealer, or comparison-stage buyer depending on age, terrain, budget, and performance needs.",
        "decision_blockers": blockers,
        "minimum_answer": minimum_answer,
        "required_depth_assets": depth_assets,
        "conversion_bridge": "Move the reader toward the store's own-brand Shop All, Adult Dirt Bikes, Kids & Youth, Street Legal collection, matching product page, financing, shipping, parts support, or contact only after solving the core use-case problem. Competitor names belong only in Blog comparisons and must not become commercial pillars.",
    }


def infer_eeat_target(primary: str, page_type: str, cluster: str) -> dict[str, list[str] | str]:
    text = " ".join([primary, page_type, cluster]).lower()
    sensitive = any(term in text for term in ["street legal", "license", "register", "safety", "kid", "youth", "battery", "charger", "72v", "60v"])
    reviewer = (
        "Electric dirt bike product/safety reviewer required before publish."
        if sensitive
        else "Electric dirt bike editorial or product owner should review for operational accuracy."
    )
    return {
        "trust_goal": "Reader should trust that the page helps buyers choose an electric dirt bike with practical range, speed, size, terrain, safety, maintenance, and budget expectations.",
        "experience_goal": "Show product perspective through rider fit, terrain fit, battery/range tradeoffs, power levels, parts support, maintenance needs, and safety boundaries.",
        "expertise_goal": "Demonstrate topic-specific knowledge such as motor power, battery capacity, charging, suspension, brakes, tires, frame size, rider weight, terrain, and service support where relevant.",
        "authority_goal": "Tie credibility to the brand's role in electric dirt bike product selection, specs, dealer/wholesale support, parts availability, service guidance, and riding safety.",
        "evidence_plan": [
            "Electric dirt bike product/spec source",
            "Search Intent Problem Map",
            "SERP evidence summary",
            "method/source note",
            "assumptions for any examples or calculations",
            reviewer,
            "[DATA NEEDED] for missing brand facts, product specs, reviewer credentials, warranty details, safety notes, dealer contacts, or legal/rules specifics",
        ],
        "risk_boundary": [
            "no unsafe riding advice",
            "no unsupported speed/range claims",
            "no street-legal claims unless sourced and jurisdiction-specific",
            "no battery modification instructions that increase risk",
            "no warranty, dealer, or parts availability claims unless supported",
            "no legal/safety advice unless reviewed and sourced",
        ],
    }


def infer_proof_layer(primary: str, page_type: str, cluster: str) -> dict[str, list[str] | str]:
    text = " ".join([primary, page_type, cluster]).lower()
    external = [
        "Google Search Central helpful content guidance for people-first, reliable content",
    ]
    if any(term in text for term in ["battery", "range", "charger", "charging", "motor", "controller"]):
        external.extend([
            "Manufacturer product/spec documentation when discussing battery, range, motor, or charging claims",
            "Battery safety or transportation guidance from authoritative sources where relevant",
        ])
    if any(term in text for term in ["street legal", "license", "register", "dual sport"]):
        external.extend([
            "Relevant state DMV or local riding/trail authority resources where applicable",
            "Manufacturer documentation for on-road/off-road classification",
        ])
    return {
        "electric_dirt_bike_proof": [
            "agent.md",
            "relevant existing electric dirt bike product page or article",
            "[DATA NEEDED] for real product specs, screenshots, quote/dealer examples, reviewer, warranty, contact URL, or service metrics",
        ],
        "external_proof": external,
        "example_proof": [
            "Use real or anonymized product/customer/dealer examples only when provided",
            "Use illustrative examples only when assumptions are clearly labeled",
            "Do not invent model specs, safety guarantees, legal status, customer cases, pricing, or delivery timelines",
        ],
        "method_proof": [
            "Generated from electric dirt bike SERP workbook brief",
            "SERP evidence used for intent and gaps, not copied structure",
            "Electric dirt bike product knowledge base used for brand/product claims",
            "External sources used for general safety, legal/rules, battery, or technical facts",
        ],
        "reviewer_proof": "Product, safety, battery, legal/rules, or service reviewer required for high-risk electric dirt bike topics.",
        "missing_proof_risk": [
            "Article can be useful but not market-strong if it lacks real product/support proof",
            "Hold strong claims until real specs, reviewer identity, screenshots, warranty details, or operational data are provided",
        ],
        "publish_strength": "Publish as test unless product proof and reviewer proof are completed; Publish strong only after proof is added.",
    }


def render_brief(row: pd.Series, evidence_row: pd.Series | None, links_df: pd.DataFrame, workbook: Path) -> str:
    primary = clean(row.get("Primary Keyword")) or clean(row.get("Expanded Page Candidate"))
    slug = clean(row.get("Recommended URL Slug")) or slugify(primary)
    h1 = clean(row.get("Recommended H1")) or clean(row.get("H1")) or primary
    page_type = clean(row.get("Recommended Page Type")) or clean(row.get("Page Type")) or clean(row.get("Page Role"))
    decision = clean(row.get("Final Content Decision")) or clean(row.get("Semantic Production Decision")) or clean(row.get("Production Decision"))
    semantic_decision = clean(row.get("Effective Semantic Decision")) or clean(row.get("Semantic Production Decision"))
    serp_decision = clean(row.get("SERP Recommended Decision"))
    serp_match = clean(row.get("SERP Intent Match")) or "Not checked"
    merge_flag = clean(row.get("SERP Merge/Split Flag"))
    h2 = split_pipe(row.get("Recommended H2")) or split_pipe(row.get("H2 Keywords"))
    h3 = split_pipe(row.get("Recommended H3")) or split_pipe(row.get("H3 Keywords"))

    top_urls = split_pipe(evidence_row.get("Top URLs") if evidence_row is not None else row.get("Top URLs"))
    titles = split_pipe(evidence_row.get("Titles") if evidence_row is not None else row.get("Titles"))
    snippets = split_pipe(evidence_row.get("Snippets") if evidence_row is not None else row.get("Snippets"))
    competitive = infer_competitive_audit(titles, snippets, top_urls)
    independent = independent_review_template()
    notes = qa_notes(slug, decision, serp_match, merge_flag)
    problem_map = infer_problem_map(primary, page_type, clean(row.get("Cluster")), snippets)
    eeat_target = infer_eeat_target(primary, page_type, clean(row.get("Cluster")))
    proof_layer = infer_proof_layer(primary, page_type, clean(row.get("Cluster")))

    link_lines = []
    for _, link in links_df.iterrows():
        anchor = clean(link.get("Anchor Text"))
        target = clean(link.get("Target Primary Keyword"))
        score = clean(link.get("Link Score"))
        if anchor or target:
            line = f"- {anchor or target} -> {target or 'n/a'}"
            if score:
                line += f" (score {score})"
            link_lines.append(line)

    return f"""# SEO Article Brief: {primary}

## Source

- Workbook: `{workbook}`
- Generated from: `Production_Batches`
- Use with: electric dirt bike SEO writing workflow

## Page Candidate

- Primary Keyword: {primary}
- Recommended URL Slug: {slug}
- Recommended H1: {h1}
- Recommended Page Type: {page_type or 'n/a'}
- Page Role: {clean(row.get('Page Role')) or 'n/a'}
- Hub: {clean(row.get('Hub')) or 'n/a'}
- Macro Pillar: {clean(row.get('Macro Pillar')) or 'n/a'}
- Cluster: {clean(row.get('Cluster')) or 'n/a'}
- Page Priority Score: {clean(row.get('Page Priority Score')) or 'n/a'}
- Total Search Volume: {clean(row.get('Total Search Volume')) or 'n/a'}

## Production Decisions

- Semantic Production Decision: {semantic_decision or 'n/a'}
- Final Content Decision: {decision or 'n/a'}
- SERP Evidence Decision: {serp_decision or 'n/a'}
- SERP Intent Match: {serp_match}
- SERP Merge/Split Flag: {merge_flag or 'none'}
- Alignment Action: {clean(row.get('Alignment Action')) or 'n/a'}
- Content Status: {clean(row.get('Final Content Status')) or 'n/a'}
- Risk Flags: {clean(row.get('Risk Flags')) or 'n/a'}

## Pre-Writing QA Notes

{bullet_list(notes, 'No immediate QA blockers detected.')}

## Search Intent Problem Map

- Primary job-to-be-done: {problem_map['primary_job']}
- Searcher stage: {problem_map['searcher_stage']}
- Decision blockers: {", ".join(problem_map['decision_blockers'])}
- Minimum useful answer: {problem_map['minimum_answer']}
- Electric dirt bike conversion bridge: {problem_map['conversion_bridge']}

### Required Depth Assets

{bullet_list(problem_map['required_depth_assets'])}

Depth rule: do not write a generic article. The final page must help the reader decide which bike fits the rider, terrain, budget, range/speed needs, safety requirements, parts/support expectations, and when to contact the brand or dealer.

## E-E-A-T Target

- Trust goal: {eeat_target['trust_goal']}
- Experience goal: {eeat_target['experience_goal']}
- Expertise goal: {eeat_target['expertise_goal']}
- Authority goal: {eeat_target['authority_goal']}

### Evidence Plan

{bullet_list(eeat_target['evidence_plan'])}

### Risk Boundary

{bullet_list(eeat_target['risk_boundary'])}

## Proof Layer

### Electric Dirt Bike Proof

{bullet_list(proof_layer['electric_dirt_bike_proof'])}

### External Proof

{bullet_list(proof_layer['external_proof'])}

### Source-to-Claim Map Required

| Claim type | Required source | How to use it | Limitation |
|---|---|---|---|
| Product capability/process | Product source or `[DATA NEEDED]` | Support only approved product/brand claims | Do not invent specs, services, cases, metrics, or guarantees |
| Google helpful content / E-E-A-T | Google Search Central or Search Quality Rater Guidelines | Support content-quality method and Who/How/Why notes | Do not present E-E-A-T as a direct ranking score |
| Riding rules / street legality | Relevant local/state/trail authority source | Support general legal/rules caution and reviewer need | Do not give definitive legal advice |
| Battery / safety / youth riding | Manufacturer documentation or authoritative safety source | Support practical safety boundaries | Do not provide unsafe modification or riding instructions |

### Example Proof

{bullet_list(proof_layer['example_proof'])}

### Method Proof

{bullet_list(proof_layer['method_proof'])}

### Reviewer Proof

- {proof_layer['reviewer_proof']}

### Missing Proof Risk

{bullet_list(proof_layer['missing_proof_risk'])}

### Publish Strength

- {proof_layer['publish_strength']}

## Competitive Advantage Audit

- Dominant SERP pattern: {competitive['dominant_pattern']}
- Electric dirt bike advantage: {competitive['electric_dirt_bike_advantage']}
- Can it win: {competitive['can_win']}

### Competitor Strengths

{bullet_list(competitive['competitor_strengths'])}

### Competitor Gaps

{bullet_list(competitive['competitor_gaps'])}

### Content Moat

{bullet_list(competitive['content_moat'])}

### Stronger If

{bullet_list(competitive['stronger_if'])}

## Independent Review Gate

- SEO reviewer: {independent['seo_reviewer']}
- Subject reviewer: {independent['subject_reviewer']}
- Conversion reviewer: {independent['conversion_reviewer']}
- Proof reviewer: {independent['proof_reviewer']}
- Publish cap: {independent['publish_cap']}

## SERP Evidence

### Top URLs

{bullet_list(top_urls)}

### Titles

{bullet_list(titles)}

### Snippets

{bullet_list(snippets)}

## Recommended Outline

### H2

{bullet_list(h2)}

### H3

{bullet_list(h3)}

## Internal Links

{chr(10).join(link_lines) if link_lines else '- n/a'}

## Electric Dirt Bike Writing Instructions

- Read `agent.md` first.
- Use existing electric dirt bike product pages, manuals, specs, and support notes as style references when relevant.
- Write in the target market language unless instructed otherwise.
- Do not copy competitors. Use SERP evidence to understand intent and gaps.
- Add electric dirt bike information gain: rider fit, terrain fit, battery/range, motor power, charging, safety, parts, maintenance, dealer/wholesale support, or after-sales risk reduction.
- Mark unsupported claims as `[DATA NEEDED: ...]`.
- Include author/reviewer/data-method notes for publishable drafts.
- Run the SEO Writing Supervisor review before final approval, including Search Intent Resolution.

## Required Deliverables

- SEO title
- Meta description
- URL slug
- Search Intent Problem Map
- Article draft
- FAQ if useful and visible
- Internal link placements
- Schema recommendation with eligibility note
- Author/reviewer/data method notes
- E-E-A-T Target review
- Proof Layer review
- Competitive Advantage Audit
- Independent Review Gate
- SEO Writing Supervisor Review
"""


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Export an electric dirt bike SEO article brief from the SERP workbook.")
    parser.add_argument("--keyword", required=True, help="Primary keyword or page candidate to export.")
    parser.add_argument("--workbook", help="Optional workbook path.")
    parser.add_argument("--output", help="Optional markdown output path.")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    workbook = pick_workbook(args.workbook)
    xls = pd.ExcelFile(workbook)
    prod = load_sheet(xls, "Production_Batches")
    evidence = load_sheet(xls, "SERP_Evidence")
    links = load_sheet(xls, "Internal_Links")
    prod = apply_content_alignment(prod)
    links = align_internal_links(links, prod)

    page = find_page(prod, args.keyword)
    primary = clean(page.get("Primary Keyword")) or args.keyword
    ev = related_evidence(evidence, primary)
    link_rows = related_links(links, primary)
    brief = render_brief(page, ev, link_rows, workbook)

    output = Path(args.output) if args.output else BRIEFS_DIR / f"{slugify(primary)}.md"
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(brief, encoding="utf-8")
    print(f"Wrote brief: {output}")


if __name__ == "__main__":
    main()
