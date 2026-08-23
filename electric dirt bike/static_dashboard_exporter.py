from __future__ import annotations

from pathlib import Path
import html
import re

import pandas as pd

from content_architecture_alignment import apply_content_alignment, supplemental_pages


BASE_DIR = Path(__file__).resolve().parent
OUTPUTS_DIR = BASE_DIR / "outputs"


def esc(value) -> str:
    if pd.isna(value):
        return ""
    return html.escape(str(value))


def num(value) -> str:
    try:
        return format(int(float(value)), ",")
    except Exception:
        return esc(value)


PILLAR_PAGES = {
    "Shop All": "Shop All Electric Dirt Bikes",
    "Adult Dirt Bikes": "Electric Dirt Bikes for Adults",
    "Kids & Youth": "Electric Dirt Bikes for Kids",
    "Street Legal": "Street Legal Electric Dirt Bikes",
    "Compare & Save": "Blog / Compare & Alternatives",
    "Buying Guides": "Electric Dirt Bike Buying Guides Hub (planned)",
    "Parts And Support": "Parts & Support Hub (planned)",
    "Safety And Rules": "Electric Dirt Bike Buying Guides Hub (planned)",
}

HEADER_MAIN = {
    "Shop All Electric Dirt Bikes",
    "Electric Dirt Bikes for Adults",
    "Electric Dirt Bikes for Kids",
    "Street Legal Electric Dirt Bikes",
}

HEADER_DROPDOWN = {
    "Fast Electric Dirt Bikes 40+ MPH",
    "72V Electric Dirt Bikes",
    "60V Electric Dirt Bikes",
    "Electric Dirt Bikes for Ages 8-12",
    "Electric Dirt Bikes for Teens and Youth",
    "Street Legal Dual-Sport Electric Dirt Bikes",
    "How to Register a Street Legal Electric Dirt Bike",
}


def slugify(value: str) -> str:
    value = re.sub(r"[^a-z0-9]+", "-", str(value).lower()).strip("-")
    return value


def page_type(row: pd.Series) -> str:
    final_type = str(row.get("Final Page Type", "")).strip()
    if final_type:
        return final_type
    tier = str(row.get("Page Tier", ""))
    opportunity = str(row.get("Opportunity Type", ""))
    if tier == "Core Page":
        return "Collection / Pillar"
    if opportunity == "Compare":
        return "Blog / Comparison"
    if opportunity in {"Buying Guide", "Adult", "Shop", "Safety", "Street Legal"}:
        return "Blog / Buying Guide"
    if opportunity == "Support":
        return "Support / Guide"
    return "SEO Supporting Page"


def page_level(row: pd.Series) -> str:
    candidate = str(row.get("Expanded Page Candidate", ""))
    hub = str(row.get("Hub", ""))
    decision = str(row.get("Final Content Decision", row.get("Production Decision", "")))
    if candidate == PILLAR_PAGES.get(hub):
        return "L1 Pillar"
    if decision == "Merge into parent/FAQ":
        return "L3 Support / FAQ"
    if hub == "Compare & Save":
        return "L2 Blog Cluster"
    return "L2 Cluster"


def menu_location(row: pd.Series) -> str:
    final_location = str(row.get("Final Menu Location", "")).strip()
    if final_location:
        return final_location
    candidate = str(row.get("Expanded Page Candidate", ""))
    opportunity = str(row.get("Opportunity Type", ""))
    if candidate in HEADER_MAIN:
        return "Header Main"
    if opportunity == "Compare":
        return "Blog / SEO Only"
    if candidate in HEADER_DROPDOWN:
        return "Header Dropdown"
    if opportunity in {"Buying Guide", "Support", "Safety"}:
        return "Footer / SEO"
    return "SEO Only"


def suggested_url(row: pd.Series) -> str:
    final_url = str(row.get("Final URL", "")).strip()
    if final_url:
        return final_url
    candidate = str(row.get("Expanded Page Candidate", ""))
    kind = page_type(row)
    slug = slugify(candidate)
    if kind == "Collection / Pillar":
        return f"/collections/{slug}"
    if kind == "Blog / Comparison":
        return f"/blogs/compare/{slug}"
    if kind == "Blog / Buying Guide":
        return f"/blogs/buying-guides/{slug}"
    return f"/pages/{slug}"


def parent_page(row: pd.Series) -> str:
    final_url = str(row.get("Final URL", "") or "")
    menu = str(row.get("Final Menu Location", "") or "")
    if menu == "Footer / Customer Support":
        return "Customer Support"
    if final_url.startswith("/buying-guides/"):
        return "Electric Dirt Bike Buying Guides"
    if final_url.startswith("/blog/compare/"):
        return "Blog / Compare & Alternatives"
    return PILLAR_PAGES.get(str(row.get("Hub", "")), "Site")


def pick_workbook() -> Path:
    for name in [
        "electric_dirt_bike_keyword_architecture_serp.xlsx",
        "electric_dirt_bike_keyword_architecture_semantic.xlsx",
        "electric_dirt_bike_keyword_architecture_serp_dryrun.xlsx",
        "electric_dirt_bike_keyword_architecture.xlsx",
    ]:
        path = OUTPUTS_DIR / name
        if path.exists():
            return path
    raise FileNotFoundError("No electric dirt bike workbook found in outputs.")


def main() -> None:
    workbook = pick_workbook()
    prod = pd.read_excel(workbook, sheet_name="Production_Batches")
    prod = apply_content_alignment(prod)
    prod["Production Decision"] = prod["Final Content Decision"]
    km = pd.read_excel(workbook, sheet_name="Keyword_Master")
    roadmap = pd.read_excel(workbook, sheet_name="Execution_Roadmap")
    site = pd.read_excel(workbook, sheet_name="Site_Foundation")
    supplemental = supplemental_pages()
    product_pages = supplemental[supplemental["Final Page Type"].eq("Product Detail Page")].copy()
    product_count = len(product_pages)
    site = site.copy()
    competitor_site = site["Site Area"].eq("Compare & Save")
    site.loc[competitor_site, "Purpose"] = (
        "Blog-only acquisition cluster for competitor comparisons and alternatives; "
        "all conversion paths return to the store's own brand."
    )
    site.loc[competitor_site, "Recommended Action"] = "SEO Blog only"

    build_now = prod[prod["Production Decision"].eq("Build now")].sort_values(
        "Total Search Volume", ascending=False
    )
    decisions = prod["Production Decision"].value_counts().to_dict()
    hubs = (
        prod.groupby("Hub", dropna=False)
        .agg(Pages=("Primary Keyword", "count"), Volume=("Total Search Volume", "sum"))
        .reset_index()
        .sort_values("Volume", ascending=False)
    )
    prod = prod.copy()
    prod["Dashboard Page Type"] = prod.apply(page_type, axis=1)
    prod["Architecture Level"] = prod.apply(page_level, axis=1)
    prod["Menu Location"] = prod.apply(menu_location, axis=1)
    prod["Parent Page"] = prod.apply(parent_page, axis=1)
    prod["Suggested URL"] = prod.apply(suggested_url, axis=1)
    page_type_counts = prod["Dashboard Page Type"].value_counts().to_dict()
    serp_missing = int(prod.get("SERP Status", pd.Series("", index=prod.index)).eq("missing-cache").sum())

    metric_data = [
        ("Source Keywords", len(km)),
        ("Page Candidates", len(prod)),
        ("Build Now", decisions.get("Build now", 0)),
        ("Build Later", decisions.get("Build later", 0)),
        ("Review", decisions.get("Manual review before build", 0)),
        ("Parent/FAQ", decisions.get("Merge into parent/FAQ", 0)),
    ]
    metrics = "".join(
        f"<div class='metric'><div>{num(value)}</div><span>{esc(label)}</span></div>"
        for label, value in metric_data
    )

    model_metrics = "".join(
        f"<div class='model-stat'><strong>{num(value)}</strong><span>{esc(label)}</span></div>"
        for label, value in [
            ("Collection / Pillar", sum(v for k, v in page_type_counts.items() if "Collection" in k)),
            ("Comparison Articles", page_type_counts.get("Blog / Comparison", 0)),
            ("Buying Guides", sum(v for k, v in page_type_counts.items() if "Guide" in k and "Collection" not in k)),
            ("Merged Sections", page_type_counts.get("Merged Section / FAQ", 0)),
            ("Draft Product Pages", product_count),
        ]
    )

    build_rows = ""
    for _, row in build_now.iterrows():
        build_rows += f"""
        <tr>
          <td><span class="pill">{esc(row["Hub"])}</span></td>
          <td><strong>{esc(row["Expanded Page Candidate"])}</strong><div class="muted">{esc(row["Primary Keyword"])}</div></td>
          <td>{num(row["Total Search Volume"])}</td>
          <td>{esc(row.get("Opportunity Topic", ""))}</td>
          <td>{esc(row.get("Production Batch", ""))}</td>
        </tr>
        """

    max_vol = max([float(v) for v in hubs["Volume"]]) if len(hubs) else 1
    hub_cards = ""
    for _, row in hubs.iterrows():
        pct = int(float(row["Volume"]) / max_vol * 100) if max_vol else 0
        hub_cards += f"""
        <div class="hub-card">
          <div class="hub-top"><strong>{esc(row["Hub"])}</strong><span>{int(row["Pages"])} pages</span></div>
          <div class="bar"><span style="width:{pct}%"></span></div>
          <div class="muted">Search volume {num(row["Volume"])}</div>
        </div>
        """

    site_rows = "".join(
        f"<tr><td>{esc(row['Site Area'])}</td><td>{esc(row['Purpose'])}</td><td>{esc(row['Recommended Action'])}</td></tr>"
        for _, row in site.iterrows()
    )
    roadmap_rows = "".join(
        f"<tr><td>{esc(row['Production Batch'])}</td><td>{esc(row['Hub'])}</td><td>{esc(row['Top Page Candidate'])}</td><td>{num(row['Total Search Volume'])}</td><td>{num(row['Page Count'])}</td></tr>"
        for _, row in roadmap.head(20).iterrows()
    )

    architecture_rows = ""
    for _, row in prod.sort_values(
        ["Hub", "Architecture Level", "Total Search Volume"],
        ascending=[True, True, False],
    ).iterrows():
        architecture_rows += f"""
        <tr data-hub="{esc(row['Hub'])}" data-type="{esc(row['Dashboard Page Type'])}" data-decision="{esc(row['Production Decision'])}">
          <td><span class="level">{esc(row["Architecture Level"])}</span></td>
          <td>{esc(row["Menu Location"])}</td>
          <td><strong>{esc(row["Final H1"])}</strong><div class="muted">Candidate: {esc(row["Expanded Page Candidate"])} | Parent: {esc(row["Parent Page"])}</div></td>
          <td>{esc(row["Dashboard Page Type"])}</td>
          <td>{esc(row["Primary Keyword"])}</td>
          <td>{num(row["Total Search Volume"])}</td>
          <td><span class="status">{esc(row["Production Decision"])}</span><div class="muted">{esc(row["Final Content Status"])}</div></td>
          <td><code>{esc(row["Suggested URL"])}</code></td>
        </tr>
        """

    filter_options = {
        "hub": sorted(prod["Hub"].dropna().astype(str).unique()),
        "type": sorted(prod["Dashboard Page Type"].dropna().astype(str).unique()),
        "decision": sorted(prod["Production Decision"].dropna().astype(str).unique()),
    }

    def options(values: list[str]) -> str:
        return "".join(f"<option value='{esc(value)}'>{esc(value)}</option>" for value in values)

    pillar_tree = ""
    for hub, group in prod.groupby("Hub", sort=False):
        parent = PILLAR_PAGES.get(str(hub), "Site")
        children = group.sort_values("Total Search Volume", ascending=False)
        child_rows = "".join(
            f"""<li><span><strong>{esc(row["Expanded Page Candidate"])}</strong>
            <small>{esc(page_level(row))} | {esc(page_type(row))}</small></span>
            <span class="tree-meta">{num(row["Total Search Volume"])} | {esc(row["Production Decision"])}</span></li>"""
            for _, row in children.iterrows()
        )
        pillar_tree += f"""
        <div class="tree-group">
          <div class="tree-head"><span><strong>{esc(hub)}</strong><small>Parent: {esc(parent)}</small></span><span>{len(group)} candidates</span></div>
          <ul class="tree-list">{child_rows}</ul>
        </div>
        """

    blog_rows = ""
    blog_pages = prod[
        prod["Dashboard Page Type"].str.contains("Blog|Guide|Support", case=False, na=False)
        & ~prod["Dashboard Page Type"].eq("Merged Section / FAQ")
    ]
    for _, row in blog_pages.sort_values(
        ["Production Decision", "Total Search Volume"], ascending=[True, False]
    ).iterrows():
        blog_rows += f"""
        <tr>
          <td>{esc(row["Dashboard Page Type"])}</td>
          <td><strong>{esc(row["Expanded Page Candidate"])}</strong><div class="muted">{esc(row["Primary Keyword"])}</div></td>
          <td>{esc(row["Parent Page"])}</td>
          <td>{num(row["Total Search Volume"])}</td>
          <td>{esc(row["Production Decision"])}</td>
        </tr>
        """

    review_rows = ""
    review = prod[
        prod["Production Decision"].eq("Manual review before build")
        | prod["Semantic QA Decision"].eq("Semantic Review")
    ].drop_duplicates("Expanded Page Candidate")
    for _, row in review.sort_values("Total Search Volume", ascending=False).iterrows():
        review_rows += f"""
        <tr>
          <td><strong>{esc(row["Expanded Page Candidate"])}</strong><div class="muted">{esc(row["Primary Keyword"])}</div></td>
          <td>{esc(row["Risk Flags"])}</td>
          <td>{esc(row["Semantic QA Decision"])}</td>
          <td>{num(row["Total Search Volume"])}</td>
          <td>{esc(row["Production Decision"])}</td>
        </tr>
        """

    supplemental_rows = "".join(
        f"<tr><td><strong>{esc(row['Page'])}</strong></td><td>{esc(row['Final Page Type'])}</td><td><code>{esc(row['Final URL'])}</code></td><td>{esc(row['Final Content Status'])}</td><td>{esc(row['Reason Added'])}</td></tr>"
        for _, row in supplemental.iterrows()
    )
    product_rows = "".join(
        f"<tr><td><strong>{esc(row['Page'])}</strong></td><td><code>{esc(row['Final URL'])}</code></td><td>{esc(row['Final Content Status'])}</td><td>{esc(row['Reason Added'])}</td></tr>"
        for _, row in product_pages.iterrows()
    )

    html_doc = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Electric Dirt Bike SEO Dashboard</title>
<style>
:root {{ --ink:#18201b; --muted:#66736b; --line:#d9e1d5; --green:#3f6b47; --gold:#c48a35; --bg:#f7f8f3; --card:#fff; }}
* {{ box-sizing:border-box; }}
body {{ margin:0; font-family:Inter, Arial, sans-serif; background:var(--bg); color:var(--ink); }}
header {{ padding:28px 36px 18px; background:#102017; color:#fff; }}
h1 {{ margin:0 0 8px; font-size:34px; letter-spacing:0; }}
header p {{ margin:0; color:#c7d6c8; }}
main {{ padding:24px 36px 50px; max-width:1440px; margin:0 auto; }}
.metrics {{ display:grid; grid-template-columns:repeat(6,minmax(130px,1fr)); gap:12px; margin-top:-8px; }}
.metric {{ background:var(--card); border:1px solid var(--line); border-radius:8px; padding:16px; box-shadow:0 8px 20px rgba(31,42,34,.06); }}
.metric div {{ font-size:28px; font-weight:800; color:var(--green); }}
.metric span {{ color:var(--muted); font-size:12px; text-transform:uppercase; }}
section {{ margin-top:24px; }}
.section-title {{ display:flex; align-items:end; justify-content:space-between; gap:16px; margin-bottom:10px; }}
h2 {{ margin:0; font-size:22px; }}
.grid {{ display:grid; grid-template-columns:1.1fr .9fr; gap:18px; }}
.panel {{ background:var(--card); border:1px solid var(--line); border-radius:8px; padding:18px; box-shadow:0 8px 20px rgba(31,42,34,.05); overflow:auto; }}
.hub-grid {{ display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:12px; }}
.hub-card {{ border:1px solid var(--line); border-radius:8px; padding:14px; background:#fbfcf8; }}
.hub-top {{ display:flex; justify-content:space-between; gap:10px; font-size:14px; }}
.bar {{ height:8px; background:#e8ece4; border-radius:99px; overflow:hidden; margin:10px 0; }}
.bar span {{ display:block; height:100%; background:var(--green); }}
table {{ width:100%; border-collapse:collapse; font-size:14px; }}
th,td {{ text-align:left; border-bottom:1px solid var(--line); padding:11px 10px; vertical-align:top; }}
th {{ color:#435247; font-size:12px; text-transform:uppercase; background:#f1f4ee; }}
.pill {{ display:inline-block; border:1px solid #c7d8c7; background:#eef6ee; color:#285432; padding:4px 8px; border-radius:999px; font-size:12px; white-space:nowrap; }}
.muted {{ color:var(--muted); font-size:12px; margin-top:4px; }}
.menu {{ display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:12px; }}
.menu-card {{ border-left:4px solid var(--gold); padding:12px 14px; background:#fbfcf8; border-radius:8px; border-top:1px solid var(--line); border-right:1px solid var(--line); border-bottom:1px solid var(--line); }}
.menu-card strong {{ display:block; margin-bottom:8px; }}
ul {{ margin:0; padding-left:18px; color:#39463d; }}
.jump-nav {{ position:sticky; top:0; z-index:5; display:flex; gap:6px; overflow:auto; padding:10px 36px; background:#fff; border-bottom:1px solid var(--line); }}
.jump-nav a {{ color:#294a32; text-decoration:none; white-space:nowrap; padding:7px 10px; border-radius:6px; font-size:13px; }}
.jump-nav a:hover {{ background:#eef3ea; }}
.model-strip {{ display:grid; grid-template-columns:repeat(5,minmax(130px,1fr)); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }}
.model-stat {{ padding:14px 16px; border-right:1px solid var(--line); }}
.model-stat:last-child {{ border-right:0; }}
.model-stat strong {{ display:block; font-size:24px; color:var(--green); }}
.model-stat span {{ display:block; color:var(--muted); font-size:12px; margin-top:4px; }}
.menu-zone {{ display:grid; grid-template-columns:1.2fr .8fr; gap:24px; }}
.menu-list {{ border-top:2px solid var(--ink); }}
.menu-row {{ display:grid; grid-template-columns:180px 1fr; gap:16px; padding:12px 0; border-bottom:1px solid var(--line); }}
.menu-row strong {{ font-size:14px; }}
.menu-row span {{ color:var(--muted); font-size:13px; }}
.tree-group {{ border-top:2px solid var(--green); padding:12px 0 4px; }}
.tree-head {{ display:flex; justify-content:space-between; gap:18px; margin-bottom:8px; }}
.tree-head small, .tree-list small {{ display:block; color:var(--muted); margin-top:3px; }}
.tree-list {{ list-style:none; padding:0; }}
.tree-list li {{ display:flex; justify-content:space-between; gap:18px; padding:9px 0 9px 18px; border-top:1px solid #e7ebe3; position:relative; }}
.tree-list li::before {{ content:""; position:absolute; left:3px; top:0; bottom:50%; width:9px; border-left:1px solid #a9b5a6; border-bottom:1px solid #a9b5a6; }}
.tree-meta {{ color:var(--muted); font-size:12px; text-align:right; white-space:nowrap; }}
.filters {{ display:flex; flex-wrap:wrap; gap:10px; align-items:end; margin-bottom:12px; }}
.filter {{ display:grid; gap:4px; }}
.filter label {{ color:var(--muted); font-size:11px; text-transform:uppercase; }}
.filter select {{ min-width:180px; border:1px solid var(--line); background:#fff; padding:8px 10px; border-radius:6px; color:var(--ink); }}
.filter-count {{ margin-left:auto; color:var(--muted); font-size:13px; padding-bottom:8px; }}
.level {{ white-space:nowrap; font-size:12px; font-weight:700; color:#315d3a; }}
.status {{ white-space:nowrap; font-size:12px; }}
code {{ font-family:Consolas, monospace; font-size:12px; color:#315d3a; white-space:nowrap; }}
.product-status {{ display:grid; grid-template-columns:220px 1fr; gap:24px; padding:18px 0; border-top:2px solid var(--gold); border-bottom:1px solid var(--line); }}
.product-status strong {{ font-size:20px; }}
.product-status p {{ margin:0 0 10px; color:var(--muted); }}
.facet-list {{ display:flex; flex-wrap:wrap; gap:7px; }}
.facet-list span {{ border:1px solid var(--line); padding:5px 8px; border-radius:5px; font-size:12px; background:#fff; }}
.callout {{ border-left:4px solid var(--gold); padding:12px 14px; background:#fffaf1; color:#554220; }}
@media (max-width: 900px) {{ .metrics {{ grid-template-columns:repeat(2,1fr); }} .grid {{ grid-template-columns:1fr; }} main, header {{ padding-left:18px; padding-right:18px; }} }}
@media (max-width: 900px) {{ .jump-nav {{ padding-left:18px; padding-right:18px; }} .model-strip {{ grid-template-columns:repeat(2,1fr); }} .menu-zone,.product-status {{ grid-template-columns:1fr; }} .menu-row {{ grid-template-columns:1fr; gap:4px; }} }}
</style>
</head>
<body>
<header>
  <h1>Electric Dirt Bike SEO Dashboard</h1>
  <p>Workbook: {esc(workbook.name)} | Keyword architecture aligned with the approved content system and canonical URLs.</p>
</header>
<nav class="jump-nav" aria-label="Dashboard sections">
  <a href="#overview">Overview</a>
  <a href="#navigation">Menu</a>
  <a href="#pillars">Pillars & Clusters</a>
  <a href="#products">Products</a>
  <a href="#content">Blog Content</a>
  <a href="#architecture">All Pages</a>
  <a href="#execution">Execution</a>
  <a href="#review">Review Queue</a>
</nav>
<main>
  <section id="overview">
    <div class="metrics">{metrics}</div>
    <div class="section-title" style="margin-top:20px"><h2>Page Model</h2><span class="muted">What the 56 candidates actually are</span></div>
    <div class="model-strip">{model_metrics}</div>
    <div class="callout" style="margin-top:14px"><strong>Brand-first rule:</strong> Header, collection pillars and product pages sell the store's own brand only. Competitor names belong exclusively to Blog comparison content and must link readers back to the store's own collections and products. Thin price/model variants merge into L3 FAQ or supporting sections.</div>
    <div class="callout" style="margin-top:10px"><strong>SERP evidence boundary:</strong> {serp_missing} of {len(prod)} candidates currently report <code>missing-cache</code>. Semantic decisions and the approved content map drive production; auto-generated SERP page types and heading fragments are not treated as live validation.</div>
  </section>

  <section id="navigation">
    <div class="section-title"><h2>Navigation Menu</h2><span class="muted">Customer navigation is intentionally smaller than the SEO sitemap</span></div>
    <div class="menu-zone">
      <div>
        <h3>Header Menu</h3>
        <div class="menu-list">
          <div class="menu-row"><strong>Shop All</strong><span>Own-brand collection pillar: Shop All Electric Dirt Bikes</span></div>
          <div class="menu-row"><strong>Adult Dirt Bikes</strong><span>Collection pillar &gt; Performance Bikes &gt; 72V &gt; 60V; use 40+ MPH only after product proof</span></div>
          <div class="menu-row"><strong>Kids & Youth</strong><span>Collection pillar &gt; Ages 8-12 &gt; Teens & Youth &gt; 24V vs 36V vs 48V parent guide</span></div>
          <div class="menu-row"><strong>Street Legal</strong><span>Compliance pillar &gt; Dual-Sport &gt; Registration Guide; publish after legal and product review</span></div>
          <div class="menu-row"><strong>Buying Guides</strong><span>Optional header resource for own-brand selection, sizing, voltage, speed and ownership education</span></div>
        </div>
      </div>
      <div>
        <h3>Footer Menu</h3>
        <div class="menu-list">
          <div class="menu-row"><strong>Buying Guides</strong><span>Range, motor, charging, voltage and riding-law articles</span></div>
          <div class="menu-row"><strong>Compare & Alternatives</strong><span>Competitor comparison Blog articles only; never a product collection or brand pillar</span></div>
          <div class="menu-row"><strong>Parts & Support</strong><span>Parts, charger, repair and ownership support</span></div>
          <div class="menu-row"><strong>Customer Support</strong><span>Contact, shipping, delivery and financing; operational pages, not keyword clusters</span></div>
          <div class="menu-row"><strong>SEO Only</strong><span>Competitor comparisons, alternatives and thin price variants remain completely outside navigation</span></div>
        </div>
      </div>
    </div>
  </section>
  <section id="pillars">
    <div class="section-title"><h2>Pillar & Cluster Map</h2><span class="muted">L1 parent pages, L2 clusters and L3 supporting intent</span></div>
    {pillar_tree}
  </section>

  <section id="products">
    <div class="section-title"><h2>Product Detail Pages</h2><span class="muted">Commerce layer status</span></div>
    <div class="product-status">
      <div><strong>{product_count} SKU drafts / 0 fully verified live SKUs</strong><div class="muted">Status: product pages built; final brand and evidence pass pending</div></div>
      <div>
        <p>G1 24V plus the K2 and X1 product families now have separate own-brand product drafts based on the G1, K2 and X1 price/spec workbooks. Each page defines fit, purchase options, specifications, battery, speed evidence, range, chassis, delivery, assembly, warranty, support, comparison and FAQ requirements.</p>
        <div class="facet-list"><span>Model</span><span>Audience</span><span>Voltage</span><span>Speed Method</span><span>Range</span><span>Factory Price Note</span><span>Wheel Size</span><span>Street Legal</span><span>Availability</span></div>
        <div class="muted" style="margin-top:10px">Every page remains a draft until final brand, retail pricing, inventory, media, policies, fit guidance and public test evidence are approved.</div>
      </div>
    </div>
    <div class="panel" style="margin-top:12px"><table><thead><tr><th>Product</th><th>URL</th><th>Status</th><th>Publication gate</th></tr></thead><tbody>{product_rows}</tbody></table></div>
  </section>

  <section id="content">
    <div class="section-title"><h2>Blog & Guide Content</h2><span class="muted">Comparison and informational pages separated from collections</span></div>
    <div class="panel"><table><thead><tr><th>Type</th><th>Article</th><th>Parent Pillar</th><th>Volume</th><th>Decision</th></tr></thead><tbody>{blog_rows}</tbody></table></div>
  </section>

  <section id="supplemental">
    <div class="section-title"><h2>Required Site Pages Added Beyond Keyword Candidates</h2><span class="muted">Navigation, trust, support and content hubs</span></div>
    <div class="panel"><table><thead><tr><th>Page</th><th>Type</th><th>Final URL</th><th>Status</th><th>Reason</th></tr></thead><tbody>{supplemental_rows}</tbody></table></div>
  </section>

  <section id="architecture">
    <div class="section-title"><h2>Complete Page Architecture</h2><span class="muted">All 56 candidates mapped to final page type, canonical URL and content status</span></div>
    <div class="filters">
      <div class="filter"><label for="hubFilter">Hub</label><select id="hubFilter"><option value="">All hubs</option>{options(filter_options["hub"])}</select></div>
      <div class="filter"><label for="typeFilter">Page Type</label><select id="typeFilter"><option value="">All page types</option>{options(filter_options["type"])}</select></div>
      <div class="filter"><label for="decisionFilter">Decision</label><select id="decisionFilter"><option value="">All decisions</option>{options(filter_options["decision"])}</select></div>
      <div class="filter-count"><span id="visibleCount">{len(prod)}</span> pages shown</div>
    </div>
    <div class="panel"><table id="architectureTable"><thead><tr><th>Level</th><th>Menu</th><th>Page / Parent</th><th>Type</th><th>Primary Keyword</th><th>Volume</th><th>Decision</th><th>Suggested URL</th></tr></thead><tbody>{architecture_rows}</tbody></table></div>
  </section>

  <section>
    <div class="section-title"><h2>Hub Distribution</h2><span class="muted">Volume-weighted page architecture</span></div>
    <div class="hub-grid">{hub_cards}</div>
  </section>
  <section id="execution">
    <div class="section-title"><h2>Build Now Queue</h2><span class="muted">First pages to build</span></div>
    <div class="panel"><table><thead><tr><th>Hub</th><th>Page</th><th>Volume</th><th>Topic</th><th>Batch</th></tr></thead><tbody>{build_rows}</tbody></table></div>
  </section>
  <section class="grid">
    <div class="panel"><h2>Execution Roadmap</h2><table><thead><tr><th>Batch</th><th>Hub</th><th>Top Page</th><th>Volume</th><th>Pages</th></tr></thead><tbody>{roadmap_rows}</tbody></table></div>
    <div class="panel"><h2>Site Foundation</h2><table><thead><tr><th>Area</th><th>Purpose</th><th>Action</th></tr></thead><tbody>{site_rows}</tbody></table></div>
  </section>

  <section id="review">
    <div class="section-title"><h2>Review Queue</h2><span class="muted">Legal, competitor and semantic-risk pages before publication</span></div>
    <div class="panel"><table><thead><tr><th>Page</th><th>Risk</th><th>Semantic Status</th><th>Volume</th><th>Decision</th></tr></thead><tbody>{review_rows}</tbody></table></div>
  </section>
</main>
<script>
const filters = ["hubFilter", "typeFilter", "decisionFilter"];
const rows = Array.from(document.querySelectorAll("#architectureTable tbody tr"));
function applyFilters() {{
  const hub = document.getElementById("hubFilter").value;
  const type = document.getElementById("typeFilter").value;
  const decision = document.getElementById("decisionFilter").value;
  let visible = 0;
  rows.forEach((row) => {{
    const show = (!hub || row.dataset.hub === hub)
      && (!type || row.dataset.type === type)
      && (!decision || row.dataset.decision === decision);
    row.hidden = !show;
    if (show) visible += 1;
  }});
  document.getElementById("visibleCount").textContent = visible;
}}
filters.forEach((id) => document.getElementById(id).addEventListener("change", applyFilters));
</script>
</body>
</html>"""

    output = OUTPUTS_DIR / "electric_dirt_bike_dashboard.html"
    output.write_text(html_doc, encoding="utf-8")
    alignment_output = OUTPUTS_DIR / "electric_dirt_bike_content_alignment.csv"
    alignment_columns = [
        "Expanded Page Candidate",
        "Primary Keyword",
        "Original Production Decision",
        "Effective Semantic Decision",
        "Final Content Decision",
        "Final URL",
        "Final H1",
        "Final Page Type",
        "Final Content Status",
        "Alignment Action",
        "Final Menu Location",
        "Canonical Candidate",
        "Content File",
    ]
    prod[[column for column in alignment_columns if column in prod.columns]].to_csv(
        alignment_output, index=False, encoding="utf-8-sig"
    )
    print(output)
    print(alignment_output)


if __name__ == "__main__":
    main()
