from pathlib import Path
import re
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "outputs" / "usb-seo" / "usb_keyword_cleaning_reviewed_v1.xlsx"
OUTPUT = ROOT / "outputs" / "usb-seo" / "usb_keyword_page_plan_v2.xlsx"


def has(k, pattern):
    return bool(re.search(pattern, str(k), re.I))


def assign(row):
    k = row["keyword_norm"]
    family = row["product_family"]
    intent = row["intent_class"]

    if family == "Buyer Solutions":
        if has(k, r"wholesale|wholesaler|distributor|importer"):
            return "Wholesale & Distribution Buyers", "/solutions/wholesalers-distributors/", "BOFU"
        if has(k, r"brand|oem|odm|private label"):
            return "Brands & Private Label Buyers", "/solutions/brands-private-label/", "BOFU"
        return "Retail & Ecommerce Buyers", "/solutions/retail-ecommerce/", "BOFU"

    family_slug = {
        "USB Cables": "usb-cable",
        "HDMI Cables": "hdmi-cable",
        "DisplayPort Cables": "displayport-cable",
        "Hubs & Docking": "usb-hub-docking-station",
        "Chargers": "usb-c-charger",
    }[family]
    if intent == "Procurement":
        return f"{family} OEM Manufacturer", f"/oem/{family_slug}-manufacturer/", "BOFU"

    if intent == "Informational":
        topic = "buying-guide"
        if has(k, r"vs|versus|difference"):
            topic = "comparison-guide"
        elif has(k, r"what|meaning|explained|type"):
            topic = "technical-guide"
        elif has(k, r"how long|length|long"):
            topic = "length-guide"
        return f"{family} {topic.replace('-', ' ').title()}", f"/resources/{family_slug}-{topic}/", "TOFU"

    if family == "USB Cables":
        if has(k, r"usb4|40\s*gbps|80\s*gbps"):
            cluster, url = "USB4 High-Speed Cables", "/products/usb-cables/usb4/"
        elif has(k, r"240\s*w|140\s*w|100\s*w|pd fast|pd charging|high power"):
            cluster, url = "High-Power USB-C PD Cables", "/products/usb-cables/high-power-pd/"
        elif has(k, r"data|sync|10\s*gbps|20\s*gbps"):
            cluster, url = "USB Data & Sync Cables", "/products/usb-cables/data-sync/"
        elif has(k, r"(?:usb[ -]?a|type[ -]?a).{0,18}(?:usb[ -]?c|type[ -]?c)|(?:usb[ -]?c|type[ -]?c).{0,18}(?:usb[ -]?a|type[ -]?a)"):
            cluster, url = "USB-A to USB-C Cables", "/products/usb-cables/usb-a-to-usb-c/"
        elif has(k, r"usb[ -]?c.{0,12}usb[ -]?c|type[ -]?c.{0,12}type[ -]?c"):
            cluster, url = "USB-C to USB-C Cables", "/products/usb-cables/usb-c-to-usb-c/"
        else:
            cluster, url = "USB & USB-C Cable Range", "/products/usb-cables/"
    elif family == "HDMI Cables":
        if has(k, r"fiber|optical|aoc|50\s*m|100\s*m"):
            cluster, url = "Fiber HDMI AOC Cables", "/products/hdmi-cables/fiber-aoc/"
        elif has(k, r"2\.1|8k|10k|4k\s*120|ultra high speed"):
            cluster, url = "HDMI 2.1 Ultra High Speed Cables", "/products/hdmi-cables/hdmi-2-1/"
        elif has(k, r"2\.0|4k|high speed"):
            cluster, url = "HDMI 2.0 High Speed Cables", "/products/hdmi-cables/hdmi-2-0/"
        elif has(k, r"gaming|ps5|xbox|120\s*hz"):
            cluster, url = "Gaming HDMI Cables", "/applications/gaming-hdmi-cables/"
        else:
            cluster, url = "HDMI Cable Range", "/products/hdmi-cables/"
    elif family == "DisplayPort Cables":
        if has(k, r"2\.1|2\.0|16k"):
            cluster, url = "DisplayPort 2.1 Cables", "/products/displayport-cables/dp-2-1/"
        elif has(k, r"1\.4|8k"):
            cluster, url = "DisplayPort 1.4 8K Cables", "/products/displayport-cables/dp-1-4/"
        elif has(k, r"gaming|144\s*hz|165\s*hz|240\s*hz|refresh"):
            cluster, url = "High-Refresh Gaming DP Cables", "/applications/gaming-displayport-cables/"
        else:
            cluster, url = "DisplayPort Cable Range", "/products/displayport-cables/"
    elif family == "Hubs & Docking":
        if has(k, r"docking|dual monitor|triple display"):
            cluster, url = "USB-C Docking Stations", "/products/hubs-docking/docking-stations/"
        elif has(k, r"7\s*in\s*1|8\s*in\s*1|10\s*in\s*1|12\s*in\s*1|multiport|with hdmi|ethernet"):
            cluster, url = "Multiport USB-C Hubs", "/products/hubs-docking/multiport-usb-c-hubs/"
        else:
            cluster, url = "USB Hubs & Docking Range", "/products/hubs-docking/"
    else:
        if has(k, r"gan"):
            cluster, url = "GaN Chargers", "/products/chargers/gan/"
        elif has(k, r"65\s*w|100\s*w|140\s*w|240\s*w|high power"):
            cluster, url = "High-Power USB-C Chargers", "/products/chargers/high-power-usb-c/"
        else:
            cluster, url = "USB-C PD Charger Range", "/products/chargers/"
    return cluster, url, "MOFU" if intent in {"Specification", "Application"} else "BOFU"


def main():
    retained = pd.read_excel(SOURCE, sheet_name="Retained_Keywords")
    assigned = retained.apply(assign, axis=1, result_type="expand")
    retained[["Page_Cluster", "Target_URL", "Funnel_Stage"]] = assigned
    retained["keyword"] = retained["Keyword"]
    retained["assigned_url"] = retained["Target_URL"]
    retained["search_volume"] = pd.to_numeric(retained["Volume"], errors="coerce").fillna(0)
    retained["intent_class_id"] = retained["intent_class"]
    retained["keyword_class"] = retained["product_family"]
    retained["funnel"] = retained["Funnel_Stage"].map({"TOFU": "top", "MOFU": "middle", "BOFU": "bottom"})
    retained["serp_risk"] = retained["serp_validation_required"].map({True: "high", False: "low"})
    retained["label"] = retained["decision"]
    retained["Primary_or_Secondary"] = "Secondary"
    primary_idx = retained.sort_values(["Target_URL", "Volume"], ascending=[True, False]).groupby("Target_URL").head(1).index
    retained.loc[primary_idx, "Primary_or_Secondary"] = "Primary"

    pages = []
    for url, group in retained.groupby("Target_URL", sort=True):
        ordered = group.sort_values("Volume", ascending=False)
        pages.append({
            "Target_URL": url,
            "Page_Cluster": ordered.iloc[0]["Page_Cluster"],
            "Page_Type": "Resource" if url.startswith("/resources/") else "Solution" if url.startswith("/solutions/") else "OEM" if url.startswith("/oem/") else "Application" if url.startswith("/applications/") else "Product",
            "Funnel_Stage": ordered.iloc[0]["Funnel_Stage"],
            "Primary_Keyword": ordered.iloc[0]["Keyword"],
            "Secondary_Keywords": " | ".join(ordered.iloc[1:16]["Keyword"].astype(str)),
            "Keyword_Count": len(group),
            "Measured_Volume": int(pd.to_numeric(group["Volume"], errors="coerce").fillna(0).sum()),
            "Manual_Seed_Count": int(group["source_type"].eq("manual_seed").sum()),
            "SERP_Validation_Required": bool(group["serp_validation_required"].any()),
        })
    pages = pd.DataFrame(pages).sort_values(["Funnel_Stage", "Measured_Volume"], ascending=[True, False])
    pages["assigned_url"] = pages["Target_URL"]
    pages["primary_keyword"] = pages["Primary_Keyword"]
    pages["keyword_count"] = pages["Keyword_Count"]
    pages["total_volume"] = pages["Measured_Volume"]
    pages["serp_review_count"] = pages["SERP_Validation_Required"].astype(int)
    pages["funnel"] = pages["Funnel_Stage"].map({"TOFU": "top", "MOFU": "middle", "BOFU": "bottom"})
    pages["url_class_id"] = range(1, len(pages) + 1)
    pages["Implementation_Priority"] = "P2"
    pages.loc[pages["Page_Type"].eq("Resource"), "Implementation_Priority"] = "P3"
    pages.loc[pages["Page_Type"].isin(["OEM", "Solution"]), "Implementation_Priority"] = "P1"
    pages.loc[(pages["Page_Type"].eq("Product")) & (pages["Measured_Volume"] >= 10000), "Implementation_Priority"] = "P1"
    pages.loc[pages["Target_URL"].isin([
        "/products/usb-cables/", "/products/hdmi-cables/", "/products/displayport-cables/",
        "/products/hubs-docking/", "/products/chargers/",
    ]), "Implementation_Priority"] = "P0"
    pages["Publication_Status"] = pages["Implementation_Priority"].map({"P0": "build_first", "P1": "build_after_serp_check", "P2": "backlog", "P3": "hold_resource"})
    summary = pd.DataFrame([
        {"metric": "retained_keywords_mapped", "value": len(retained)},
        {"metric": "unique_target_urls", "value": retained["Target_URL"].nunique()},
        {"metric": "duplicate_keyword_url_assignments", "value": int(retained["keyword_norm"].duplicated().sum())},
        {"metric": "unmapped_keywords", "value": int(retained["Target_URL"].isna().sum())},
    ])
    discarded = pd.read_excel(SOURCE, sheet_name="Discarded_Keywords")
    review = pd.read_excel(SOURCE, sheet_name="Keyword_Review")
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with pd.ExcelWriter(OUTPUT, engine="openpyxl") as writer:
        summary.to_excel(writer, sheet_name="Summary", index=False)
        retained.to_excel(writer, sheet_name="SEO_Keyword_Library", index=False)
        pages.to_excel(writer, sheet_name="Page_Clusters", index=False)
        pages[["Target_URL", "Page_Cluster", "Page_Type", "Funnel_Stage", "Implementation_Priority", "Publication_Status", "Measured_Volume"]].to_excel(writer, sheet_name="Final_Sitemap", index=False)
        retained.groupby(["Target_URL", "product_family", "intent_class"], as_index=False).agg(Keyword_Count=("Keyword", "count"), Total_Volume=("Volume", "sum")).to_excel(writer, sheet_name="Page_Keyword_Coverage", index=False)
        review.to_excel(writer, sheet_name="Keyword_Review", index=False)
        discarded.to_excel(writer, sheet_name="Discarded_Keywords", index=False)
    print(OUTPUT)
    print(summary.to_string(index=False))
    print(pages[["Target_URL", "Primary_Keyword", "Keyword_Count", "Measured_Volume"]].to_string(index=False))


if __name__ == "__main__":
    main()
