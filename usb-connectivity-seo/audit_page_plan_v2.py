from pathlib import Path
import re
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
PLAN = ROOT / "outputs" / "usb-seo" / "usb_keyword_page_plan_v2.xlsx"
OUTPUT = ROOT / "outputs" / "usb-seo" / "usb_keyword_page_plan_v2_project_audit.xlsx"
REPORT = ROOT / "strategy" / "PAGE_PLAN_AUDIT_V2.md"

NOISE = {
    "brand_or_device": r"\b(?:blue yeti|nikon|coolpix|gopro|oculus|quest|fitbit|garmin|roku|vizio|wii|ps3|ps4|ps5)\b",
    "audio_not_hdmi_cable": r"\b(?:optical sound|sound cable|audio extractor|arc cable|soundbar|surround sound)\b",
    "retail_shopping": r"\b(?:best|nearby|near me|amazon|walmart|best buy|target|cvs|dollar general)\b",
    "conversion_or_accessory": r"\b(?:rca|vga|dvi|converter|splitter|switcher|extender|receptacle|tester)\b",
    "consumer_support": r"\b(?:not working|no signal|fix|repair|replacement|setup|driver|manual)\b",
}


def current_routes():
    routes = set()
    for path in (ROOT / "astro" / "src" / "content" / "site").glob("*.md"):
        text = path.read_text(encoding="utf-8")
        match = re.search(r'^route:\s*["\']([^"\']+)', text, re.M)
        if match:
            routes.add(match.group(1))
    return routes


def main():
    library = pd.read_excel(PLAN, sheet_name="SEO_Keyword_Library")
    pages = pd.read_excel(PLAN, sheet_name="Page_Clusters")
    issues = []
    for issue_type, pattern in NOISE.items():
        matched = library[library["keyword"].astype(str).str.contains(pattern, case=False, regex=True, na=False)]
        if issue_type == "retail_shopping":
            matched = matched[matched["product_family"].ne("Buyer Solutions")]
        for _, row in matched.iterrows():
            issues.append({
                "severity": "high" if issue_type in {"conversion_or_accessory", "consumer_support"} else "medium",
                "issue_type": issue_type,
                "keyword": row["keyword"],
                "assigned_url": row["assigned_url"],
                "search_volume": row["search_volume"],
                "recommended_action": "remove_or_manual_review",
            })
    issues = pd.DataFrame(issues).drop_duplicates() if issues else pd.DataFrame()

    page_checks = pages[["assigned_url", "primary_keyword", "keyword_count", "total_volume", "funnel"]].copy()
    page_checks["cluster_risk"] = "keep"
    page_checks.loc[page_checks["keyword_count"] > 300, "cluster_risk"] = "split_review"
    page_checks.loc[page_checks["primary_keyword"].astype(str).str.contains(r"\b(?:best|what|how|vs)\b", case=False, regex=True), "cluster_risk"] = "serp_review"

    existing = current_routes()
    planned = set(pages["assigned_url"].astype(str))
    comparison = []
    for route in sorted(existing | planned):
        if route in existing and route in planned:
            status = "keep_route"
        elif route in planned:
            status = "new_planned_route"
        else:
            status = "prototype_only_review"
        comparison.append({"route": route, "status": status})
    comparison = pd.DataFrame(comparison)

    summary = pd.DataFrame([
        {"metric": "planned_urls", "value": len(planned)},
        {"metric": "current_prototype_routes", "value": len(existing)},
        {"metric": "routes_already_aligned", "value": int((comparison.status == "keep_route").sum())},
        {"metric": "new_planned_routes", "value": int((comparison.status == "new_planned_route").sum())},
        {"metric": "prototype_only_routes_to_review", "value": int((comparison.status == "prototype_only_review").sum())},
        {"metric": "project_semantic_issues", "value": len(issues)},
        {"metric": "oversized_clusters", "value": int((page_checks.cluster_risk == "split_review").sum())},
    ])
    with pd.ExcelWriter(OUTPUT, engine="openpyxl") as writer:
        summary.to_excel(writer, sheet_name="Summary", index=False)
        issues.to_excel(writer, sheet_name="Semantic_Issues", index=False)
        page_checks.to_excel(writer, sheet_name="Page_Checks", index=False)
        comparison.to_excel(writer, sheet_name="Prototype_Comparison", index=False)

    md = [
        "# 页面规划 V2 审计结论",
        "",
        "## 当前结论",
        "",
        "定位与关键词清洗顺序已经纠正，页面候选由清洗后的关键词聚类生成，而非由现有 Astro 原型反推。",
        "",
        f"- 页面候选：{len(planned)} 个",
        f"- 已映射关键词：{len(library)} 个；一词多页：{library['keyword_norm'].duplicated().sum()} 个；未映射：{library['assigned_url'].isna().sum()} 个",
        f"- 项目语义复核项：{len(issues)} 个",
        f"- 超大聚类待拆分：{int((page_checks.cluster_risk == 'split_review').sum())} 个",
        f"- 与现有原型相同的路由：{int((comparison.status == 'keep_route').sum())} 个",
        f"- 新规划路由：{int((comparison.status == 'new_planned_route').sum())} 个",
        f"- 原型独有、需保留为功能页或重定向评估：{int((comparison.status == 'prototype_only_review').sum())} 个",
        "",
        "## 发布门槛",
        "",
        "1. `Semantic_Issues` 中的品牌、零售、转换器与消费支持词完成剔除或人工确认。",
        "2. HDMI 与 USB 两个大类目执行合并合理性复核；长度和同义变体保留合并，只有出现独立 SERP 意图时才拆页。",
        "3. 对高搜索量、高 SERP 风险词抽样验证后，才能冻结 URL。",
        "4. URL 冻结后再修改 Markdown 页面和 Astro 路由；现阶段原型继续保持 noindex。",
        "",
        "## 文件",
        "",
        "- `outputs/usb-seo/usb_keyword_cleaning_v2.xlsx`：清洗结果",
        "- `outputs/usb-seo/usb_keyword_page_plan_v2.xlsx`：关键词到页面规划",
        "- `outputs/usb-seo/usb_keyword_page_plan_v2_audit.xlsx`：通用审计",
        "- `outputs/usb-seo/usb_keyword_page_plan_v2_project_audit.xlsx`：本项目专用审计",
    ]
    REPORT.write_text("\n".join(md) + "\n", encoding="utf-8")
    print(OUTPUT)
    print(REPORT)
    print(summary.to_string(index=False))


if __name__ == "__main__":
    main()
