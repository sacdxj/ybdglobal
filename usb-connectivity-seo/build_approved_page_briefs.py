from pathlib import Path
import re
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "outputs" / "usb-seo" / "usb_connectivity_keyword_architecture_full.xlsx"
OUT = ROOT / "outputs" / "usb-seo" / "usb_approved_page_briefs_v1.xlsx"
MD_DIR = ROOT / "outputs" / "usb-seo" / "briefs-v1"

PAGE_META = {
    "/products/usb-cables/": {
        "h1": "USB & USB-C Cable Range for B2B Sourcing",
        "intent": "Commercial category comparison and RFQ preparation",
        "sections": ["Define the cable range and buyer use cases", "Choose connector combinations", "Confirm charging and data requirements", "Select construction and customization", "Review evidence by selected SKU", "Prepare a quote-ready specification"],
        "filters": "connector combination; required protocol; requested power/data performance; length; jacket/material; color; packaging",
        "links": "/oem/usb-cable-manufacturer/; /resources/usb-cable-types/; /contact/",
    },
    "/products/hdmi-cables/": {
        "h1": "HDMI Cable Range for B2B Sourcing",
        "intent": "Commercial category comparison and RFQ preparation",
        "sections": ["Define the HDMI cable range", "Choose connector and form factor", "Confirm display and installation requirements", "Select length and construction", "Review test evidence by selected SKU", "Prepare a quote-ready specification"],
        "filters": "connector/form factor; requested resolution/refresh; required bandwidth/version; length; installation environment; jacket; packaging",
        "links": "/oem/hdmi-cable-manufacturer/; /resources/hdmi-cable-types/; /contact/",
    },
    "/products/displayport-cables/": {
        "h1": "DisplayPort Cable Range for B2B Sourcing",
        "intent": "Commercial category comparison and RFQ preparation",
        "sections": ["Define the DisplayPort cable range", "Choose connector combinations", "Confirm display requirements", "Select length and construction", "Review compliance evidence by selected SKU", "Prepare a quote-ready specification"],
        "filters": "DP/Mini DP/USB-C combination; requested resolution/refresh; required bandwidth/version; length; latch/construction; packaging",
        "links": "/oem/displayport-cable-manufacturer/; /resources/displayport-cable-types/; /contact/",
    },
    "/products/chargers/": {
        "h1": "USB-C Charger Range for B2B Sourcing",
        "intent": "Commercial category comparison and RFQ preparation",
        "sections": ["Define the charger range and deployment", "Choose port configuration", "Confirm requested power profile", "Select housing, plug and packaging", "Review market evidence by selected SKU", "Prepare a quote-ready specification"],
        "filters": "port count/type; requested output profile; plug/market; housing; cable inclusion; color; private label; packaging",
        "links": "/oem/usb-c-charger-manufacturer/; /resources/usb-c-charger-selection/; /contact/",
    },
    "/products/hubs-docking/": {
        "h1": "USB Hubs & Docking Station Range for B2B Sourcing",
        "intent": "Commercial category comparison with routing to hub or docking configurations",
        "sections": ["Choose between a USB hub and docking station", "Define host and downstream ports", "Confirm display, data and charging needs", "Select enclosure, cable and power method", "Review compatibility evidence by configuration", "Prepare a quote-ready specification"],
        "filters": "hub/dock type; host connector; downstream port mix; requested display outputs; requested charging/data; enclosure; power method; packaging",
        "links": "/products/usb-hubs/; /products/docking-stations/; /oem/usb-hub-manufacturer/; /contact/",
    },
}

RFQ_FIELDS = [
    ("Product family / SKU", "Buyer selects a family or requests a recommended configuration"),
    ("Connector / port combination", "Required input, output and port mix"),
    ("Performance requirement", "Requested power, protocol, bandwidth or display output; confirm by selected SKU"),
    ("Construction", "Length, jacket, housing, color and materials"),
    ("Quantity / forecast", "Trial quantity, order quantity and forecast"),
    ("Customization", "Logo, packaging, barcode and private-label requirements"),
    ("Market", "Destination country and required certification market"),
    ("Sample / timing", "Sample need and target delivery date; timing confirmed by project"),
    ("Buyer contact", "Company, buyer name, email/phone and preferred contact method"),
]

EVIDENCE_GAPS = [
    "Final SKU/model catalog", "Connector and port matrix", "Protocol/version by SKU",
    "Power/bandwidth/resolution/refresh evidence by SKU", "Length and material matrix",
    "Test method and report references", "Certificates mapped to model and destination market",
    "MOQ, sample cost, pricing and lead-time policy", "Company/factory identity and capacity evidence",
    "Warranty, shipping, returns and RFQ endpoint",
]

FORBIDDEN = "Do not publish exact compliance, wattage, bandwidth, resolution, refresh rate, MOQ, price, lead time, capacity, warranty or certification claims without current mapped evidence."

def clean_keywords(value):
    bad = re.compile(r"streaming issues|problems netflix|nakedcellphone|magsafe|rwy cable|transfer files", re.I)
    terms = []
    for term in str(value or "").split("|"):
        term = term.strip()
        if term and term.lower() != "nan" and not bad.search(term):
            terms.append(term)
    return list(dict.fromkeys(terms))

def main():
    source = pd.read_excel(SOURCE, sheet_name="Production_Batches")
    approved = source[source["Brief Approval Status"].eq("Approved for Brief")].copy()
    approved = approved[approved["Recommended URL Slug"].isin(PAGE_META)].copy()
    if len(approved) != 5:
        raise SystemExit(f"Expected 5 approved briefs, found {len(approved)}")

    summaries, briefs, kw_rows, rfq_rows, gap_rows, link_rows = [], [], [], [], [], []
    MD_DIR.mkdir(parents=True, exist_ok=True)
    for _, row in approved.sort_values("Recommended URL Slug").iterrows():
        url = row["Recommended URL Slug"]
        meta = PAGE_META[url]
        keywords = clean_keywords(row["Supporting Keywords"])
        primary = row["Primary Keyword"]
        if primary not in keywords:
            keywords.insert(0, primary)
        h2 = " | ".join(meta["sections"])
        summary = {
            "URL": url, "Hub": row["Hub"], "Page Type": "Product Category",
            "Primary Keyword": primary, "Recommended H1": meta["h1"],
            "Brief Status": "Approved for drafting", "Publication Status": "private-review / noindex",
            "SERP Evidence": row["SERP Status"], "SERP Market": "US",
            "Commercial / Editorial Top10": f"{int(row['SERP Top10 Commercial Count'])} / {int(row['SERP Top10 Editorial Count'])}",
            "Priority Score": row["Page Priority Score"],
        }
        summaries.append(summary)
        briefs.append({
            **summary, "Search Intent": meta["intent"], "Audience": "B2B importer, distributor, brand, integrator or procurement team",
            "H2 Outline": h2, "Selection Dimensions": meta["filters"],
            "Primary CTA": "Configure & Quote", "Secondary CTA": "Request a Sample", "Proof CTA": "Request Evidence Pack",
            "Claim Gate": FORBIDDEN, "Publishing Gate": "Remain private-review/noindex until commercial, company and SKU evidence is approved.",
        })
        for idx, kw in enumerate(keywords[:20]):
            kw_rows.append({"URL": url, "Keyword": kw, "Coverage Role": "Primary" if kw == primary else ("H2/support" if idx < 7 else "Body/FAQ support"), "Source": "Approved architecture workbook", "Use Note": "Natural task coverage; do not keyword-stuff"})
        for field, guidance in RFQ_FIELDS:
            rfq_rows.append({"URL": url, "RFQ Field": field, "Required": "Yes", "Guidance": guidance})
        for gap in EVIDENCE_GAPS:
            gap_rows.append({"URL": url, "Evidence Gap": gap, "Current Status": "Missing / not approved", "Publication Action": "Keep gated; request evidence or confirm by selected SKU/project"})
        for link in meta["links"].split("; "):
            link_rows.append({"From URL": url, "To URL": link, "Purpose": "Commercial routing / supporting decision path", "Status": "Planned; verify route before implementation"})

        slug = url.strip("/").replace("/", "-")
        md = [
            f"# Page Brief: {meta['h1']}", "", f"- URL: `{url}`", f"- Primary keyword: `{primary}`",
            f"- Intent: {meta['intent']}", f"- SERP evidence: {row['SERP Status']} (US; Top10 commercial/editorial {int(row['SERP Top10 Commercial Count'])}/{int(row['SERP Top10 Editorial Count'])})",
            "- Brief status: Approved for drafting", "- Publication status: `private-review` / `noindex`", "",
            "## Page goal", "", "Help a B2B buyer narrow the configuration and submit a quote-ready requirement without making unsupported product or company claims.", "",
            "## Keyword coverage", "", f"Primary: **{primary}**", "", "Supporting: " + ", ".join(keywords[1:20]), "",
            "## Recommended structure", "",
        ]
        md += [f"{i}. {section}" for i, section in enumerate(meta["sections"], 1)]
        md += ["", "## Selection dimensions", "", meta["filters"], "", "## Conversion path", "", "Primary: **Configure & Quote**  ", "Secondary: **Request a Sample**  ", "Proof: **Request Evidence Pack**", "", "## RFQ minimum fields", ""]
        md += [f"- **{field}:** {guidance}" for field, guidance in RFQ_FIELDS]
        md += ["", "## Evidence gate", "", FORBIDDEN, "", "Missing evidence:", ""]
        md += [f"- {gap}" for gap in EVIDENCE_GAPS]
        md += ["", "## Planned internal links", ""] + [f"- `{link}`" for link in meta["links"].split("; ")] + ["", "## Drafting acceptance", "", "The draft must use confirmation language, expose evidence gaps, include the RFQ fields above, and remain private-review/noindex until the publication gate passes.", ""]
        (MD_DIR / f"{slug}.md").write_text("\n".join(md), encoding="utf-8")

    checks = [
        ("Approved brief count", len(summaries) == 5, f"count={len(summaries)}"),
        ("All approved URLs recognized", set(x["URL"] for x in summaries) == set(PAGE_META), "exact approved URL set"),
        ("All briefs remain noindex", all("noindex" in x["Publication Status"] for x in summaries), "private-review / noindex"),
        ("Every page has keyword coverage", all(any(k["URL"] == x["URL"] for k in kw_rows) for x in summaries), "coverage rows present"),
        ("Every page has RFQ fields", all(sum(r["URL"] == x["URL"] for r in rfq_rows) == len(RFQ_FIELDS) for x in summaries), f"{len(RFQ_FIELDS)} fields/page"),
        ("Every page has evidence gaps", all(sum(g["URL"] == x["URL"] for g in gap_rows) == len(EVIDENCE_GAPS) for x in summaries), f"{len(EVIDENCE_GAPS)} gaps/page"),
        ("Markdown brief count", len(list(MD_DIR.glob("*.md"))) == 5, "5 files"),
    ]
    validation = pd.DataFrame([{"check": n, "status": "PASS" if ok else "FAIL", "detail": detail} for n, ok, detail in checks])

    with pd.ExcelWriter(OUT, engine="openpyxl") as writer:
        for name, data in [
            ("Brief_Summary", summaries), ("Page_Briefs", briefs), ("Keyword_Coverage", kw_rows),
            ("RFQ_Requirements", rfq_rows), ("Evidence_Gaps", gap_rows), ("Internal_Links", link_rows),
        ]:
            pd.DataFrame(data).to_excel(writer, sheet_name=name, index=False)
        validation.to_excel(writer, sheet_name="Validation_Checks", index=False)
        for ws in writer.book.worksheets:
            ws.freeze_panes = "A2"
            ws.auto_filter.ref = ws.dimensions
            for column in ws.columns:
                width = min(max(len(str(c.value or "")) for c in column) + 2, 60)
                ws.column_dimensions[column[0].column_letter].width = width

    if (validation["status"] != "PASS").any():
        raise SystemExit(validation.to_string(index=False))
    print(f"WROTE={OUT}")
    print(f"MARKDOWN_DIR={MD_DIR}")
    print(validation.to_string(index=False))

if __name__ == "__main__":
    main()
