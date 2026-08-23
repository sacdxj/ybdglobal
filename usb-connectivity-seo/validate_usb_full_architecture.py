from pathlib import Path
import re
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
BOOK = ROOT / "outputs" / "usb-seo" / "usb_connectivity_keyword_architecture_full.xlsx"
PLAN = ROOT / "outputs" / "usb-seo" / "usb_keyword_page_plan_v2.xlsx"
OUTPUT = ROOT / "outputs" / "usb-seo" / "usb_full_architecture_validation.xlsx"

REQUIRED_SHEETS = [
    "Keyword_Master", "Topic_Map", "Topic_Mid", "Mid_Clusters", "Article_Plan_Mid",
    "Page_Opportunity_Expansion", "QA_Scored_Topics", "QA_Scored_Clusters", "QA_Scored_Articles",
    "Production_Batches", "Execution_Roadmap", "Site_Foundation", "Keyword_Semantic_QA",
    "Semantic_QA", "Semantic_Group_Summary", "Feature_Consistency_Audit", "SERP_Evidence",
    "SERP_Merge_Review", "SERP_Content_Blprint", "Internal_Links", "SERP_Feature_Audit",
]
NOISE = re.compile(r"\b(?:wii|ps3|fitbit|garmin|gopro|nikon|blue yeti|oculus|meta quest|near me|walmart|best buy|not working|repair|replacement|rca to hdmi|vga to hdmi)\b", re.I)


def check(name, passed, evidence, severity="critical"):
    return {"check": name, "status": "pass" if passed else "fail", "severity": severity, "evidence": evidence}


def main():
    xls = pd.ExcelFile(BOOK)
    lib = pd.read_excel(PLAN, sheet_name="SEO_Keyword_Library")
    prod = pd.read_excel(BOOK, sheet_name="Production_Batches")
    km = pd.read_excel(BOOK, sheet_name="Keyword_Master")
    blueprint = pd.read_excel(BOOK, sheet_name="SERP_Content_Blueprint")
    evidence = pd.read_excel(BOOK, sheet_name="SERP_Evidence")
    links = pd.read_excel(BOOK, sheet_name="Internal_Links")
    required = [s if s != "SERP_Content_Blprint" else "SERP_Content_Blueprint" for s in REQUIRED_SHEETS]
    missing = sorted(set(required) - set(xls.sheet_names))
    mapped_urls = set(lib["assigned_url"].dropna().astype(str))
    prod_urls = set(prod["Cluster"].dropna().astype(str))
    link_urls = set(links["Source URL"].dropna().astype(str)) | set(links["Target URL"].dropna().astype(str))
    active_km = km[km["Production Decision"].isin(["Prioritized for Validation", "Build Later", "Parent / FAQ"])]
    noisy = active_km[active_km["Keyword"].astype(str).str.contains(NOISE, na=False)]
    checks = [
        check("All 21 architecture sheets exist", not missing and len(xls.sheet_names) == 21, f"sheets={len(xls.sheet_names)} missing={missing}"),
        check("Every retained keyword maps to one URL", lib["assigned_url"].notna().all(), f"unmapped={lib['assigned_url'].isna().sum()}"),
        check("No retained normalized keyword is duplicated", not lib["keyword_norm"].duplicated().any(), f"duplicates={lib['keyword_norm'].duplicated().sum()}"),
        check("Production page set matches keyword URL set", prod_urls == mapped_urls, f"production={len(prod_urls)} keyword_urls={len(mapped_urls)} delta={len(prod_urls ^ mapped_urls)}"),
        check("Blueprint covers every page", set(blueprint["Cluster"]) == prod_urls, f"blueprints={len(blueprint)} pages={len(prod)}"),
        check("SERP evidence row exists for every page", set(evidence["Cluster"]) == prod_urls, f"evidence={len(evidence)} pages={len(prod)}"),
        check("Internal links reference planned pages only", link_urls.issubset(prod_urls), f"unknown_link_urls={sorted(link_urls-prod_urls)}"),
        check("Known device/retail/support noise excluded from active architecture", noisy.empty, f"noise_rows={len(noisy)}", "high"),
        check("No page falsely marked live-SERP verified", not prod["SERP Status"].eq("verified-live").any(), f"verified_live={prod['SERP Status'].eq('verified-live').sum()}", "high"),
        check("Embedding status remains explicit", prod["Semantic QA Decision"].eq("pending-embedding").all(), f"pending={prod['Semantic QA Decision'].eq('pending-embedding').sum()}/{len(prod)}", "high"),
        check("Every validation-priority page has an RFQ-compatible page type", prod.loc[prod["Production Decision"].eq("Prioritized for Validation"), "Page Role"].notna().all(), f"validation_priority={prod['Production Decision'].eq('Prioritized for Validation').sum()}"),
        check("Keyword master preserves source plus manual seeds", len(km) >= len(lib), f"keyword_master={len(km)} retained={len(lib)}"),
    ]
    checks = pd.DataFrame(checks)
    summary = pd.DataFrame([
        {"metric": "checks", "value": len(checks)},
        {"metric": "passed", "value": int(checks.status.eq("pass").sum())},
        {"metric": "failed", "value": int(checks.status.eq("fail").sum())},
        {"metric": "publication_gate", "value": "closed until live SERP + approved semantic review"},
    ])
    with pd.ExcelWriter(OUTPUT, engine="openpyxl") as writer:
        summary.to_excel(writer, sheet_name="Validation_Summary", index=False)
        checks.to_excel(writer, sheet_name="Validation_Checks", index=False)
        noisy.to_excel(writer, sheet_name="Noise_Exceptions", index=False)
    print(OUTPUT)
    print(summary.to_string(index=False))
    print(checks.to_string(index=False))
    if checks.status.eq("fail").any():
        raise SystemExit(1)


if __name__ == "__main__":
    main()
