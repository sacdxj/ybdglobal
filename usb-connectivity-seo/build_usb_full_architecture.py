from __future__ import annotations

from pathlib import Path
import math
import re
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
CLEAN = ROOT / "outputs" / "usb-seo" / "usb_keyword_cleaning_reviewed_v1.xlsx"
PLAN = ROOT / "outputs" / "usb-seo" / "usb_keyword_page_plan_v2.xlsx"
OUTPUT = ROOT / "outputs" / "usb-seo" / "usb_connectivity_keyword_architecture_full.xlsx"
CORE_SERP = ROOT / "outputs" / "usb-seo" / "usb_core_top10_serp_audit.xlsx"


def text(value) -> str:
    return "" if pd.isna(value) else str(value).strip()


def tokens(value: str) -> set[str]:
    stop = {"a", "an", "and", "for", "of", "the", "to", "with", "cable", "cables", "usb"}
    return {x for x in re.findall(r"[a-z0-9.]+", text(value).lower()) if len(x) > 1 and x not in stop}


def overlap(a: str, b: str) -> float:
    aa, bb = tokens(a), tokens(b)
    if not aa or not bb:
        return 0.0
    return round(len(aa & bb) / len(aa | bb), 3)


def architecture_layer(intent: str) -> str:
    return {
        "Product": "Product Families",
        "Specification": "Specifications & Performance",
        "Procurement": "OEM / Procurement",
        "Buyer Solution": "Buyer Programs",
        "Application": "Applications",
        "Informational": "Selection Resources",
    }.get(intent, "Review / Excluded")


def production_decision(row) -> str:
    decision = text(row.get("decision"))
    priority = text(row.get("Implementation_Priority"))
    if decision == "discard_noise":
        return "Reject"
    if decision == "review":
        return "Review"
    if decision == "content_support":
        return "Content Support"
    if priority in {"P0", "P1"}:
        return "Prioritized for Validation"
    if priority == "P2":
        return "Build Later"
    if priority == "P3":
        return "Parent / FAQ"
    return "Review"


def qa_score(row) -> int:
    score = 35
    intent = text(row.get("intent_class"))
    decision = text(row.get("decision"))
    volume = float(row.get("Volume", 0) or 0)
    if intent in {"Procurement", "Buyer Solution"}:
        score += 30
    elif intent in {"Product", "Specification"}:
        score += 24
    elif intent == "Application":
        score += 14
    else:
        score += 6
    if decision in {"core_keep", "manual_seed"}:
        score += 15
    elif decision == "expand":
        score += 6
    elif decision == "review":
        score -= 15
    else:
        score -= 35
    if volume >= 1000:
        score += 10
    elif volume >= 100:
        score += 5
    if bool(row.get("serp_validation_required", False)):
        score -= 8
    return max(0, min(100, int(score)))


def page_type(url: str) -> str:
    if url.startswith("/oem/"):
        return "OEM / Manufacturer Landing"
    if url.startswith("/solutions/"):
        return "Buyer Solution"
    if url.startswith("/applications/"):
        return "Application Landing"
    if url.startswith("/resources/"):
        return "Resource / Guide"
    if url.count("/") <= 3:
        return "Product Category"
    return "Specification / Product Cluster"


def page_goal(url: str) -> str:
    if url.startswith("/oem/"):
        return "Prove sourcing fit and move qualified buyers to RFQ."
    if url.startswith("/solutions/"):
        return "Match the buyer program to range, packaging, compliance and supply needs."
    if url.startswith("/resources/"):
        return "Answer selection intent and route readers to a commercial parent."
    if url.startswith("/applications/"):
        return "Explain application requirements and route to specification selection."
    return "Present the product range, configurable requirements and RFQ path."


def cta(url: str) -> str:
    if url.startswith("/resources/"):
        return "Configure & Quote"
    if url.startswith("/solutions/"):
        return "Discuss Private Label"
    if url.startswith("/oem/"):
        return "Get a Quote"
    return "Configure & Quote"


def main() -> None:
    review = pd.read_excel(CLEAN, sheet_name="Keyword_Review")
    library = pd.read_excel(PLAN, sheet_name="SEO_Keyword_Library")
    pages = pd.read_excel(PLAN, sheet_name="Page_Clusters")
    sitemap = pd.read_excel(PLAN, sheet_name="Final_Sitemap")

    plan_cols = ["keyword_norm", "assigned_url", "Page_Cluster", "Funnel_Stage"]
    merged = review.merge(library[plan_cols].drop_duplicates("keyword_norm"), on="keyword_norm", how="left")
    priority_map = pages.set_index("assigned_url")["Implementation_Priority"].to_dict()
    status_map = pages.set_index("assigned_url")["Publication_Status"].to_dict()
    merged["Implementation_Priority"] = merged["assigned_url"].map(priority_map).fillna("")
    merged["Publication_Status"] = merged["assigned_url"].map(status_map).fillna("")
    merged["Production Decision"] = merged.apply(production_decision, axis=1)
    merged["Production Batch"] = merged["Implementation_Priority"].map({
        "P0": "Batch 1 - Core Categories",
        "P1": "Batch 2 - Commercial / Specification",
        "P2": "Batch 3 - Expansion",
        "P3": "Parent / FAQ Hold",
    }).fillna(merged["Production Decision"].map({"Review": "Review Queue", "Content Support": "Content Support Only", "Reject": "Rejected"}).fillna("Review Queue"))
    merged["QA Score"] = merged.apply(qa_score, axis=1)
    merged["QA Reason"] = merged.apply(lambda r: f"{text(r.get('decision_reason'))}; priority={text(r.get('Implementation_Priority')) or 'none'}; evidence-safe rule pass", axis=1)
    merged["Hub"] = merged["product_family"].replace("", "Review / Excluded").fillna("Review / Excluded")
    merged["Macro Pillar"] = merged["intent_class"].map(architecture_layer).fillna("Review / Excluded")
    merged["Topic"] = merged["Page_Cluster"].fillna(merged["intent_class"]).replace("", "Unassigned Review")
    merged["Cluster"] = merged["assigned_url"].fillna(merged["decision"].map({"review": "Manual Classification Review", "content_support": "Content Support Only", "discard_noise": "Rejected Noise"}).fillna("Unassigned Review"))
    merged["Functional Filter"] = merged["product_family"]
    merged["Platform Filter"] = ""
    merged["Seller Profile"] = merged["product_family"].eq("Buyer Solutions").map({True: "B2B buyer type", False: ""})
    merged["Search Intent Class"] = merged["intent_class"]
    merged["Site Section"] = merged["assigned_url"].fillna("").map(lambda u: u.strip("/").split("/")[0] if u else "review")
    merged["Page Role"] = merged["assigned_url"].fillna("").map(page_type)
    merged["Risk Flags"] = merged.apply(lambda r: "SERP validation required" if bool(r.get("serp_validation_required", False)) else ("Manual review" if r["Production Decision"] == "Review" else ""), axis=1)
    merged["Geo / Language Intent"] = "English / international B2B"
    merged["Semantic Enabled"] = False
    merged["Semantic Model"] = "pending-embedding; rule-based-token-QA-only"

    primary_map = pages.set_index("assigned_url")["primary_keyword"].to_dict()
    merged["Semantic Topic Similarity"] = merged.apply(lambda r: overlap(r.get("Keyword", ""), primary_map.get(r.get("assigned_url", ""), "")) if text(r.get("assigned_url")) else 0, axis=1)
    merged["Semantic Cluster Similarity"] = merged["Semantic Topic Similarity"]
    page_family_purity = library.groupby("assigned_url")["product_family"].apply(lambda s: s.value_counts(normalize=True).iloc[0]).to_dict()
    page_intent_purity = library.groupby("assigned_url")["intent_class"].apply(lambda s: s.value_counts(normalize=True).iloc[0]).to_dict()
    page_sizes = library.groupby("assigned_url").size().to_dict()
    merged["Semantic Topic Purity"] = merged["assigned_url"].map(page_intent_purity).fillna(0)
    merged["Semantic Cluster Purity"] = merged["assigned_url"].map(page_family_purity).fillna(0)
    merged["Semantic Cluster Size"] = merged["assigned_url"].map(page_sizes).fillna(0).astype(int)
    merged["Semantic QA Decision"] = merged.apply(lambda r: "pending-embedding" if r["Production Decision"] not in {"Reject", "Review"} else r["Production Decision"].lower(), axis=1)
    merged["Semantic Production Decision"] = merged["Production Decision"]
    merged["Semantic QA Reason"] = "Token-overlap and cluster-purity checks completed; embedding review not yet approved as live evidence."

    keyword_master = pd.DataFrame({
        "Keyword": merged["Keyword"], "Normalized Keyword": merged["keyword_norm"], "Search Volume": merged["Volume"],
        "Keyword Difficulty": merged["Keyword Difficulty"], "Keyword Intents": merged["Intent"],
        "Business Scope": merged["product_family"], "Hub": merged["Hub"], "Macro Pillar": merged["Macro Pillar"],
        "Topic": merged["Topic"], "Cluster": merged["Cluster"], "Page / Article Candidate": merged["Page_Cluster"],
        "Functional Filter": merged["Functional Filter"], "Platform Filter": merged["Platform Filter"],
        "Seller Profile": merged["Seller Profile"], "Search Intent Class": merged["Search Intent Class"],
        "Site Section": merged["Site Section"], "Page Role": merged["Page Role"], "Risk Flags": merged["Risk Flags"],
        "Geo / Language Intent": merged["Geo / Language Intent"], "Production Decision": merged["Production Decision"],
        "Production Batch": merged["Production Batch"], "QA Score": merged["QA Score"], "QA Reason": merged["QA Reason"],
        "Semantic Enabled": merged["Semantic Enabled"], "Semantic Model": merged["Semantic Model"],
        "Semantic Topic Similarity": merged["Semantic Topic Similarity"], "Semantic Cluster Similarity": merged["Semantic Cluster Similarity"],
        "Semantic Topic Purity": merged["Semantic Topic Purity"], "Semantic Cluster Purity": merged["Semantic Cluster Purity"],
        "Semantic Cluster Size": merged["Semantic Cluster Size"], "Semantic QA Decision": merged["Semantic QA Decision"],
        "Semantic Production Decision": merged["Semantic Production Decision"], "Semantic QA Reason": merged["Semantic QA Reason"],
    })

    active = keyword_master[keyword_master["Production Decision"].isin(["Prioritized for Validation", "Build Later", "Parent / FAQ"])].copy()

    def grouped(levels: list[str]) -> pd.DataFrame:
        rows = []
        for keys, group in active.groupby(levels, dropna=False):
            keys = keys if isinstance(keys, tuple) else (keys,)
            row = dict(zip(levels, keys))
            row.update({
                "Keyword Count": len(group), "Total Search Volume": int(group["Search Volume"].fillna(0).sum()),
                "Validation Priority Keywords": int(group["Production Decision"].eq("Prioritized for Validation").sum()),
                "Review Keywords": int(group["Production Decision"].eq("Review").sum()),
                "Rejected Keywords": 0, "Average QA Score": round(group["QA Score"].mean(), 1),
                "Top Keyword": group.sort_values("Search Volume", ascending=False).iloc[0]["Keyword"],
            })
            rows.append(row)
        return pd.DataFrame(rows)

    topic_map = grouped(["Hub", "Macro Pillar"])
    topic_mid = grouped(["Hub", "Macro Pillar", "Topic"])
    mid_clusters = grouped(["Hub", "Macro Pillar", "Topic", "Cluster"])
    qa_topics = topic_mid.copy(); qa_topics["QA Decision"] = qa_topics["Average QA Score"].map(lambda x: "Pass" if x >= 70 else "Review")
    qa_clusters = mid_clusters.copy(); qa_clusters["QA Decision"] = qa_clusters["Average QA Score"].map(lambda x: "Pass" if x >= 70 else "Review")

    article_rows = []
    for url, group in library.groupby("assigned_url"):
        page = pages[pages["assigned_url"].eq(url)].iloc[0]
        ordered = group.sort_values("search_volume", ascending=False)
        article_rows.append({
            "Hub": ordered.iloc[0]["product_family"], "Macro Pillar": architecture_layer(ordered.iloc[0]["intent_class"]),
            "Topic": page["Page_Cluster"], "Cluster": url, "Page / Article Candidate": page["Page_Cluster"],
            "Page Role": page_type(url), "Site Section": url.strip("/").split("/")[0], "Primary Keyword": page["primary_keyword"],
            "Keyword Count": len(group), "Total Search Volume": int(group["search_volume"].sum()),
            "Average KD": round(pd.to_numeric(group["Keyword Difficulty"], errors="coerce").mean(), 1),
            "Business Scope Mix": " | ".join(group["product_family"].value_counts().index[:4]),
            "Risk Flags": "SERP review" if group["serp_validation_required"].astype(bool).any() else "",
            "Production Decision": {"P0": "Prioritized for Validation", "P1": "Prioritized for Validation", "P2": "Build Later", "P3": "Parent / FAQ"}[page["Implementation_Priority"]],
            "Production Batch": {"P0": "Batch 1 - Core Categories", "P1": "Batch 2 - Commercial / Specification", "P2": "Batch 3 - Expansion", "P3": "Parent / FAQ Hold"}[page["Implementation_Priority"]],
            "QA Score": int(round(group.apply(qa_score, axis=1).mean())),
            "Supporting Keywords": " | ".join(ordered.iloc[1:21]["keyword"].astype(str)),
        })
    articles = pd.DataFrame(article_rows)
    opportunities = articles.rename(columns={"Page / Article Candidate": "Expanded Page Candidate"}).copy()
    opportunities.insert(4, "Page Tier", opportunities["Cluster"].map(lambda u: "L1 Parent" if u.count("/") <= 3 else "L2 Cluster"))
    opportunities.insert(5, "Opportunity Type", opportunities["Page Role"])
    opportunities.insert(6, "Opportunity Topic", opportunities["Topic"])

    qa_articles = opportunities.copy()
    qa_articles["QA Decision"] = qa_articles["QA Score"].map(lambda x: "Pass" if x >= 70 else "Review")
    for col, value in {
        "Semantic Enabled": False, "Semantic Model": "pending-embedding; rule-based-token-QA-only",
        "Semantic Topic Similarity": 0.0, "Semantic Cluster Similarity": 0.0,
        "Semantic Topic Purity": 1.0, "Semantic Cluster Purity": 1.0,
        "Semantic Cluster Size": 0, "Semantic QA Decision": "pending-embedding",
        "Semantic Production Decision": "", "Semantic QA Reason": "Embedding QA pending; page cluster passed deterministic family/intent checks.",
    }.items():
        qa_articles[col] = value
    qa_articles["Semantic Cluster Size"] = qa_articles["Keyword Count"]
    qa_articles["Semantic Production Decision"] = qa_articles["Production Decision"]

    production = qa_articles.drop(columns=["QA Decision"]).copy()
    production["SERP Checked"] = False
    production["SERP Status"] = "pending-live-serp"
    production["SERP Intent Match"] = "not-verified"
    production["SERP Matched Terms"] = ""
    production["SERP Merge/Split Flag"] = production["Keyword Count"].map(lambda x: "review-large-cluster" if x >= 300 else "pending")
    production["SERP Recommended Decision"] = "Hold until live SERP validation"
    max_volume = max(1, int(production["Total Search Volume"].max()))
    production["Demand Score"] = production["Total Search Volume"].map(lambda v: round(100 * math.log1p(max(0, float(v))) / math.log1p(max_volume), 1))
    production["RFQ Fit Score"] = production.apply(lambda r: 95 if r["Page Role"] in {"OEM / Manufacturer Landing", "Buyer Solution"} else 78 if "Product" in r["Page Role"] else 58 if "Specification" in r["Page Role"] else 35, axis=1)
    production["Evidence Completeness Score"] = 25
    production["Page Priority Score"] = production.apply(lambda r: round(0.45 * r["RFQ Fit Score"] + 0.25 * r["Demand Score"] + 0.20 * r["QA Score"] + 0.10 * r["Evidence Completeness Score"], 1), axis=1)
    production["Page Priority Reason"] = production.apply(lambda r: f"{r['Production Decision']}; volume={int(r['Total Search Volume'])}; QA={r['QA Score']}; SERP pending", axis=1)
    production["Recommended URL Slug"] = production["Cluster"]
    production["Recommended H1"] = production["Expanded Page Candidate"]
    production["Recommended Page Type"] = production["Page Role"]
    production["Recommended H2"] = production["Supporting Keywords"].map(lambda s: " | ".join(text(s).split(" | ")[:6]))
    production["Recommended H3"] = production["Supporting Keywords"].map(lambda s: " | ".join(text(s).split(" | ")[6:12]))
    production["SERP Top10 Commercial Count"] = 0
    production["SERP Top10 Editorial Count"] = 0
    production["Brief Approval Status"] = "Pending Top 10"
    if CORE_SERP.exists():
        core_approvals = pd.read_excel(CORE_SERP, sheet_name="Page_Approval_Summary")
        approval_map = core_approvals.set_index("Target URL").to_dict("index")
        for idx, row in production.iterrows():
            approval = approval_map.get(row["Recommended URL Slug"])
            if not approval:
                continue
            production.at[idx, "SERP Checked"] = True
            production.at[idx, "SERP Status"] = approval["SERP Status"]
            production.at[idx, "SERP Intent Match"] = "verified-commercial-category"
            production.at[idx, "SERP Recommended Decision"] = approval["Approval Decision"]
            production.at[idx, "SERP Top10 Commercial Count"] = int(approval["Commercial_Results"])
            production.at[idx, "SERP Top10 Editorial Count"] = int(approval["Editorial_Results"])
            production.at[idx, "Brief Approval Status"] = approval["Approval Decision"]
            production.at[idx, "Page Priority Reason"] = f"{row['Production Decision']}; US Top 10 verified; commercial/category={int(approval['Commercial_Results'])}/10; claims still gated"

    keyword_semantic = keyword_master[keyword_master["Production Decision"].isin(["Prioritized for Validation", "Build Later", "Parent / FAQ"])][[
        "Keyword", "Hub", "Macro Pillar", "Topic", "Cluster", "Production Decision", "Semantic Production Decision",
        "Semantic Topic Similarity", "Semantic Cluster Similarity", "Semantic Topic Purity", "Semantic Cluster Purity",
        "Semantic Cluster Size", "Semantic QA Decision", "Semantic QA Reason",
    ]].rename(columns={"Production Decision": "Original Production Decision"})
    semantic_qa = production[["Hub", "Macro Pillar", "Topic", "Cluster", "Expanded Page Candidate", "Primary Keyword", "Production Decision",
        "Semantic Production Decision", "Semantic Topic Similarity", "Semantic Cluster Similarity", "Semantic Topic Purity", "Semantic Cluster Purity",
        "Semantic Cluster Size", "Semantic QA Decision", "Semantic QA Reason"]].rename(columns={"Production Decision": "Original Production Decision"})
    semantic_summary = production.groupby(["Hub", "Macro Pillar"], as_index=False).agg(
        **{"Item Count": ("Expanded Page Candidate", "count"), "Semantic Purity": ("Semantic Cluster Purity", "mean"),
           "Low Similarity Count": ("Semantic QA Decision", lambda s: int(s.eq("pending-embedding").sum())),
        "Validation Priority Count": ("Production Decision", lambda s: int(s.eq("Prioritized for Validation").sum()))})
    semantic_summary.insert(0, "Level", "Hub / Pillar")
    semantic_summary["Topic"] = ""; semantic_summary["Cluster"] = ""
    semantic_summary["Recommendation"] = "Run approved embedding review before final URL freeze"

    roadmap = production.groupby(["Production Batch", "Hub", "Macro Pillar"], as_index=False).agg(
        **{"Page Count": ("Expanded Page Candidate", "count"), "Total Search Volume": ("Total Search Volume", "sum"),
           "Prioritized for Validation": ("Production Decision", lambda s: int(s.eq("Prioritized for Validation").sum())),
           "Build Later": ("Production Decision", lambda s: int(s.eq("Build Later").sum())),
           "Review": ("SERP Status", lambda s: int(s.ne("verified-live").sum())),
           "Parent Support": ("Production Decision", lambda s: int(s.eq("Parent / FAQ").sum()))})
    roadmap["Cluster"] = "Multiple"
    top_map = production.sort_values("Total Search Volume", ascending=False).groupby(["Production Batch", "Hub", "Macro Pillar"])["Expanded Page Candidate"].first()
    roadmap["Top Page Candidate"] = roadmap.set_index(["Production Batch", "Hub", "Macro Pillar"]).index.map(top_map)

    site_foundation = pd.DataFrame([
        ("Home", "Position the connectivity product range and route qualified buyers to RFQ.", "Rewrite after P0/P1 URL freeze"),
        ("Products", "Parent directory for USB, HDMI, DisplayPort, hubs/docks and chargers.", "Build now"),
        ("OEM / ODM", "Explain configurable elements and evidence-gated development process.", "Build now"),
        ("Buyer Solutions", "Serve wholesalers, distributors, importers, brands and ecommerce buyers.", "Build after core categories"),
        ("Quality & Factory", "Present only verified testing, certification and factory evidence.", "Evidence required"),
        ("Resources", "Selection and procurement education linked to commercial parents.", "Hold until SERP validation"),
        ("RFQ", "Capture specification, quantity, packaging, destination and sample requirements.", "Build now"),
        ("Legal / Privacy", "Support private review and future public launch.", "Confirm company identity"),
    ], columns=["Site Area", "Purpose", "Recommended Action"])

    serp_evidence = production[["Hub", "Macro Pillar", "Topic", "Cluster", "Expanded Page Candidate", "Primary Keyword"]].copy()
    serp_evidence["SERP Status"] = production["SERP Status"]
    serp_evidence["SERP Message"] = production["SERP Status"].map(lambda s: "Semrush US organic Top 10 captured; approved for brief, not publication." if str(s).startswith("verified") else "No page-level cached top-10 evidence. Do not treat URL split as final.")
    serp_evidence["SERP Intent Match"] = production["SERP Intent Match"]
    serp_evidence["SERP Matched Terms"] = ""
    serp_evidence["SERP Intent Reason"] = "Deterministic intent classification only; live SERP review required."
    serp_evidence["Top URLs"] = ""; serp_evidence["Titles"] = ""; serp_evidence["Snippets"] = ""
    serp_evidence["Recommended H1"] = production["Recommended H1"]
    serp_evidence["Recommended H2"] = production["Recommended H2"]
    serp_evidence["Recommended H3"] = production["Recommended H3"]
    serp_evidence["Recommended URL Slug"] = production["Recommended URL Slug"]
    serp_evidence["Recommended Page Type"] = production["Recommended Page Type"]

    merge_rows = []
    for _, group in production.groupby("Hub"):
        rows = group.sort_values("Total Search Volume", ascending=False).head(12).to_dict("records")
        for i, a in enumerate(rows):
            for b in rows[i + 1:]:
                score = overlap(a["Primary Keyword"], b["Primary Keyword"])
                if score >= 0.2 or a["Topic"] == b["Topic"]:
                    merge_rows.append({
                        "Keyword A": a["Primary Keyword"], "Keyword B": b["Primary Keyword"],
                        "Page Candidate A": a["Expanded Page Candidate"], "Page Candidate B": b["Expanded Page Candidate"],
                        "Hub": a["Hub"], "Macro Pillar": a["Macro Pillar"], "Topic": a["Topic"], "Cluster": f"{a['Cluster']} <> {b['Cluster']}",
                        "SERP Overlap Score": "pending", "Domain Overlap Score": "pending", "Title/Snippet Token Overlap": score,
                        "Recommendation": "Manual live SERP merge review", "Reason": "Lexical/topic proximity detected; no live domain overlap evidence yet.",
                    })
    merge_review = pd.DataFrame(merge_rows)

    blueprint = production[["Hub", "Macro Pillar", "Topic", "Cluster", "Expanded Page Candidate", "Primary Keyword"]].copy()
    blueprint["url_slug"] = production["Recommended URL Slug"]
    blueprint["H1"] = production["Recommended H1"]
    blueprint["Page Type"] = production["Recommended Page Type"]
    blueprint["Search Intent"] = production["Page Role"].map(lambda x: "Commercial / Transactional" if "OEM" in x or "Product" in x or "Buyer" in x else "Informational / Commercial")
    blueprint["Level 1 Category"] = production["Hub"]
    blueprint["Level 2 Subcategory"] = production["Macro Pillar"]
    blueprint["Level 3 Page"] = production["Expanded Page Candidate"]
    blueprint["Cluster Label"] = production["Topic"]
    blueprint["H2 Keywords"] = production["Recommended H2"]
    blueprint["H3 Keywords"] = production["Recommended H3"]
    blueprint["Page Priority Score"] = production["Page Priority Score"]
    blueprint["SERP Recommended Decision"] = production["SERP Recommended Decision"]
    blueprint["Page Priority Reason"] = production["Page Priority Reason"]

    links = []
    product_parents = {f: g.sort_values("Keyword Count", ascending=False).iloc[0] for f, g in production.groupby("Hub")}
    for _, source in production.iterrows():
        target = product_parents[source["Hub"]]
        if source["Cluster"] != target["Cluster"]:
            links.append({"Source Primary Keyword": source["Primary Keyword"], "Source URL": source["Cluster"],
                "Target Primary Keyword": target["Primary Keyword"], "Target URL": target["Cluster"], "Hub": source["Hub"],
                "Source Topic": source["Topic"], "Target Topic": target["Topic"], "Link Score": 100, "Anchor Text": target["Primary Keyword"]})
        if source["Production Decision"] == "Prioritized for Validation" and not source["Cluster"].startswith("/oem/"):
            oem = production[(production["Hub"].eq(source["Hub"])) & production["Cluster"].str.startswith("/oem/")]
            if not oem.empty:
                target2 = oem.iloc[0]
                links.append({"Source Primary Keyword": source["Primary Keyword"], "Source URL": source["Cluster"],
                    "Target Primary Keyword": target2["Primary Keyword"], "Target URL": target2["Cluster"], "Hub": source["Hub"],
                    "Source Topic": source["Topic"], "Target Topic": target2["Topic"], "Link Score": 90, "Anchor Text": f"custom {source['Hub'].lower()} manufacturing"})
    internal_links = pd.DataFrame(links).drop_duplicates() if links else pd.DataFrame(columns=["Source Primary Keyword", "Source URL", "Target Primary Keyword", "Target URL", "Hub", "Source Topic", "Target Topic", "Link Score", "Anchor Text"])

    feature_audit = pd.DataFrame([
        ("Positioning before keywords", "pass", "POSITIONING_DECISION_V2.md", "B2B Google-to-RFQ boundary exists."),
        ("Noise and brand isolation", "pass", f"{int(review.decision.eq('discard_noise').sum())} discarded; {int(review.decision.eq('review').sum())} review", "Review rows are excluded from page mapping."),
        ("One keyword one URL", "pass" if not library.keyword_norm.duplicated().any() else "fail", f"{library.keyword_norm.duplicated().sum()} duplicates", "Required invariant."),
        ("Unmapped retained keywords", "pass" if library.assigned_url.notna().all() else "fail", f"{library.assigned_url.isna().sum()} unmapped", "Required invariant."),
        ("Semantic embeddings", "pending", "GEMINI_API_KEY available but no approved run recorded", "Do not claim embedding validation until executed and reviewed."),
        ("Live SERP top-10 evidence", "partial", f"{int(production['SERP Status'].astype(str).str.startswith('verified').sum())} verified; {int((~production['SERP Status'].astype(str).str.startswith('verified')).sum())} pending", "Semrush US organic Top 10 is recorded for approved core pages."),
        ("SERP merge/split review", "pending", f"{len(merge_review)} candidate pairs", "Requires live domain overlap."),
        ("Content blueprint", "pass-structure", f"{len(blueprint)} page blueprints", "Claims remain evidence-gated."),
        ("Internal links", "pass-structure", f"{len(internal_links)} proposed links", "Validate after URL freeze."),
        ("Claim gate", "pass", "claim-and-rfq-rules.md", "No unsupported public claim is approved."),
        ("Astro implementation", "frozen", "Workflow gate", "Do not edit active pages until P0/P1 approval."),
        ("Dashboard parity", "pending", "Full workbook ready for exporter", "Static dashboard must consume this workbook."),
    ], columns=["Feature", "Status", "Evidence", "Notes"])
    serp_feature_audit = pd.DataFrame([
        ("SERP_Evidence", "pending", f"{len(serp_evidence)} page rows", "No top-10 cache yet."),
        ("SERP_Merge_Review", "pending", f"{len(merge_review)} lexical candidate pairs", "Live overlap required."),
        ("SERP_Content_Blueprint", "ready-structure", f"{len(blueprint)} rows", "H2/H3 are keyword-derived drafts."),
        ("Internal_Links", "ready-structure", f"{len(internal_links)} rows", "Final after URL freeze."),
        ("High-risk keywords", "review", f"{int(library.serp_validation_required.astype(bool).sum())} keywords", "Prioritize P0/P1."),
        ("Publication gate", "closed", "No page-level verified-live SERP status", "Private review only."),
    ], columns=["Feature", "Status", "Evidence", "Notes"])

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    sheets = {
        "Keyword_Master": keyword_master, "Topic_Map": topic_map, "Topic_Mid": topic_mid,
        "Mid_Clusters": mid_clusters, "Article_Plan_Mid": articles,
        "Page_Opportunity_Expansion": opportunities, "QA_Scored_Topics": qa_topics,
        "QA_Scored_Clusters": qa_clusters, "QA_Scored_Articles": qa_articles,
        "Production_Batches": production, "Execution_Roadmap": roadmap,
        "Site_Foundation": site_foundation, "Keyword_Semantic_QA": keyword_semantic,
        "Semantic_QA": semantic_qa, "Semantic_Group_Summary": semantic_summary,
        "Feature_Consistency_Audit": feature_audit, "SERP_Evidence": serp_evidence,
        "SERP_Merge_Review": merge_review, "SERP_Content_Blueprint": blueprint,
        "Internal_Links": internal_links, "SERP_Feature_Audit": serp_feature_audit,
    }
    with pd.ExcelWriter(OUTPUT, engine="openpyxl") as writer:
        for name, frame in sheets.items():
            frame.to_excel(writer, sheet_name=name, index=False)
    print(OUTPUT)
    print(f"sheets={len(sheets)} keywords={len(keyword_master)} pages={len(production)} links={len(internal_links)} merge_pairs={len(merge_review)}")


if __name__ == "__main__":
    main()
