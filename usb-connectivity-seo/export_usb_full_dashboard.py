from pathlib import Path
import html
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
BOOK = ROOT / "outputs" / "usb-seo" / "usb_connectivity_keyword_architecture_full.xlsx"
OUTPUT = ROOT / "outputs" / "usb-seo" / "usb_connectivity_seo_dashboard.html"


def esc(value) -> str:
    return html.escape("" if pd.isna(value) else str(value))


def fmt(value) -> str:
    try:
        return f"{int(float(value)):,}"
    except Exception:
        return esc(value)


def badge(value) -> str:
    value = str(value)
    key = value.lower().replace(" ", "-").replace("/", "-")
    return f'<span class="badge {esc(key)}">{esc(value)}</span>'


def table(df: pd.DataFrame, columns: list[str], limit: int | None = None, table_id: str = "") -> str:
    view = df[columns].head(limit) if limit else df[columns]
    heads = "".join(f"<th>{esc(c)}</th>" for c in columns)
    rows = []
    for _, row in view.iterrows():
        cells = []
        for col in columns:
            val = row[col]
            if col in {"Production Decision", "Production Batch", "SERP Status", "Status", "Semantic QA Decision", "Recommended Action"}:
                rendered = badge(val)
            elif "Volume" in col or col in {"Keyword Count", "Page Count", "QA Score", "Page Priority Score", "Demand Score", "RFQ Fit Score", "Evidence Completeness Score", "Item Count", "Prioritized for Validation", "Build Later", "Review", "Parent Support"}:
                rendered = fmt(val)
            elif "URL" in col or col in {"Cluster", "url_slug"}:
                rendered = f"<code>{esc(val)}</code>"
            else:
                rendered = esc(val)
            cells.append(f"<td>{rendered}</td>")
        rows.append("<tr>" + "".join(cells) + "</tr>")
    suffix = "" if limit is None or len(df) <= limit else f'<p class="muted">Showing {limit:,} of {len(df):,} rows. Full data remains in the workbook.</p>'
    return f'<div class="table-wrap"><table id="{esc(table_id)}"><thead><tr>{heads}</tr></thead><tbody>{"".join(rows)}</tbody></table></div>{suffix}'


def section(title: str, subtitle: str, body: str, section_id: str) -> str:
    return f'<section id="{section_id}"><div class="section-title"><div><h2>{esc(title)}</h2><p>{esc(subtitle)}</p></div></div>{body}</section>'


def main() -> None:
    xls = pd.ExcelFile(BOOK)
    data = {name: pd.read_excel(BOOK, sheet_name=name) for name in xls.sheet_names}
    km = data["Keyword_Master"]
    prod = data["Production_Batches"]
    roadmap = data["Execution_Roadmap"]
    site = data["Site_Foundation"]
    features = data["Feature_Consistency_Audit"]
    evidence = data["SERP_Evidence"]
    merge = data["SERP_Merge_Review"]
    blueprint = data["SERP_Content_Blueprint"]
    links = data["Internal_Links"]
    semantic = data["Semantic_QA"]
    review = km[km["Production Decision"].eq("Review")]
    content_support = km[km["Production Decision"].eq("Content Support")]
    rejected = km[km["Production Decision"].eq("Reject")]
    active = km[km["Production Decision"].isin(["Prioritized for Validation", "Build Later", "Parent / FAQ"])]
    validation_priority = int(prod["Production Decision"].eq("Prioritized for Validation").sum())
    build_later = int(prod["Production Decision"].eq("Build Later").sum())
    parent = int(prod["Production Decision"].eq("Parent / FAQ").sum())
    serp_pending = int((~prod["SERP Status"].astype(str).str.startswith("verified")).sum())

    metrics = [
        ("Source Keywords", len(km)), ("Retained for Architecture", len(active)),
        ("Page Candidates", len(prod)), ("Validation Priority", validation_priority), ("Build Later", build_later),
        ("Parent / FAQ", parent), ("Content Support", len(content_support)), ("Manual Review", len(review)), ("Rejected Noise", len(rejected)),
    ]
    metric_html = "".join(f'<div class="metric"><strong>{fmt(v)}</strong><span>{esc(k)}</span></div>' for k, v in metrics)

    hub_cards = []
    for hub, group in prod.groupby("Hub"):
        volume = int(group["Total Search Volume"].sum())
        names = "".join(f'<li><span>{esc(r["Expanded Page Candidate"])}</span><code>{esc(r["Cluster"])}</code></li>' for _, r in group.sort_values("Page Priority Score", ascending=False).head(8).iterrows())
        hub_cards.append(f'<article class="hub-card"><h3>{esc(hub)}</h3><p>{len(group)} pages · {volume:,} measured volume</p><ul>{names}</ul></article>')

    page_table = table(prod, ["Hub", "Macro Pillar", "Page Tier", "Expanded Page Candidate", "Primary Keyword", "Keyword Count", "Total Search Volume", "Demand Score", "RFQ Fit Score", "Evidence Completeness Score", "Page Priority Score", "Production Decision", "Production Batch", "QA Score", "SERP Status", "Recommended URL Slug"], table_id="pageTable")
    roadmap_table = table(roadmap, ["Production Batch", "Hub", "Macro Pillar", "Page Count", "Total Search Volume", "Prioritized for Validation", "Build Later", "Review", "Parent Support", "Top Page Candidate"])
    site_table = table(site, ["Site Area", "Purpose", "Recommended Action"])
    feature_table = table(features, ["Feature", "Status", "Evidence", "Notes"])
    semantic_table = table(semantic, ["Hub", "Macro Pillar", "Expanded Page Candidate", "Primary Keyword", "Original Production Decision", "Semantic QA Decision", "Semantic QA Reason"])
    serp_table = table(evidence, ["Hub", "Expanded Page Candidate", "Primary Keyword", "SERP Status", "SERP Intent Match", "SERP Message", "Recommended URL Slug"])
    merge_table = table(merge, ["Hub", "Keyword A", "Keyword B", "Title/Snippet Token Overlap", "Recommendation", "Reason"], limit=100)
    blueprint_table = table(blueprint, ["Hub", "Expanded Page Candidate", "Primary Keyword", "url_slug", "Page Type", "Search Intent", "H1", "H2 Keywords", "Page Priority Score", "SERP Recommended Decision"])
    links_table = table(links, ["Hub", "Source Primary Keyword", "Source URL", "Target Primary Keyword", "Target URL", "Link Score", "Anchor Text"])
    review_table = table(review.sort_values("Search Volume", ascending=False), ["Keyword", "Search Volume", "Business Scope", "Search Intent Class", "Risk Flags", "QA Score", "QA Reason"], limit=250)
    content_support_table = table(content_support.sort_values("Search Volume", ascending=False), ["Keyword", "Search Volume", "Business Scope", "Search Intent Class", "QA Score", "QA Reason"], limit=150)
    rejected_table = table(rejected.sort_values("Search Volume", ascending=False), ["Keyword", "Search Volume", "Business Scope", "QA Score", "QA Reason"], limit=150)

    sheet_rows = "".join(f"<tr><td>{esc(name)}</td><td>{len(frame):,}</td><td>{len(frame.columns):,}</td></tr>" for name, frame in data.items())
    sheet_table = f'<div class="table-wrap"><table><thead><tr><th>Workbook Layer</th><th>Rows</th><th>Fields</th></tr></thead><tbody>{sheet_rows}</tbody></table></div>'

    css = """
    :root{--bg:#071018;--panel:#0d1b27;--panel2:#122535;--line:#24465b;--text:#e9f3f8;--muted:#8fa8b7;--cyan:#3fd8d0;--orange:#ffae57;--red:#ff6d78;--green:#67d391}
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:linear-gradient(140deg,#061018,#0a1722 45%,#071018);color:var(--text);font:14px/1.5 Inter,Segoe UI,Arial,sans-serif}
    header{padding:44px max(24px,5vw) 30px;border-bottom:1px solid var(--line);background:radial-gradient(circle at 80% 0,#15485a88,transparent 35%)}
    h1{font-size:clamp(32px,5vw,62px);line-height:1.05;margin:8px 0 14px;max-width:980px}h2{font-size:27px;margin:0}h3{font-size:19px;margin:0 0 6px}p{margin:5px 0}.eyebrow{color:var(--cyan);text-transform:uppercase;letter-spacing:.16em;font-weight:700}.muted,.section-title p{color:var(--muted)}
    nav{position:sticky;top:0;z-index:5;display:flex;gap:8px;overflow:auto;padding:10px max(20px,5vw);background:#071018ee;backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}nav a{color:var(--text);text-decoration:none;padding:7px 11px;border:1px solid var(--line);border-radius:999px;white-space:nowrap}nav a:hover{border-color:var(--cyan);color:var(--cyan)}
    main{padding:0 max(20px,5vw) 80px}section{padding:42px 0;border-bottom:1px solid #173243}.section-title{display:flex;justify-content:space-between;align-items:end;margin-bottom:18px}.metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:12px}.metric{background:linear-gradient(145deg,var(--panel2),var(--panel));border:1px solid var(--line);padding:18px;border-radius:14px}.metric strong{display:block;font-size:30px;color:var(--cyan)}.metric span{color:var(--muted)}
    .callout{padding:16px 18px;border-left:4px solid var(--orange);background:#2b2218;border-radius:8px;margin:18px 0}.callout.danger{border-color:var(--red);background:#2d171c}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:14px}.hub-card{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:18px}.hub-card p{color:var(--muted)}.hub-card ul{padding:0;margin:12px 0 0;list-style:none}.hub-card li{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-top:1px solid #183447}.hub-card code{color:var(--cyan);font-size:11px;text-align:right}
    .table-wrap{overflow:auto;border:1px solid var(--line);border-radius:12px;background:var(--panel)}table{border-collapse:collapse;width:100%;min-width:900px}th,td{padding:10px 12px;border-bottom:1px solid #193647;text-align:left;vertical-align:top}th{position:sticky;top:0;background:#102433;color:#b9d1dc;font-size:12px;text-transform:uppercase;letter-spacing:.05em}tr:hover td{background:#102432}code{color:#7ce2dd}.badge{display:inline-block;border-radius:999px;padding:3px 8px;background:#263846;color:#cbdce4;white-space:nowrap}.badge.pass,.badge.build-now,.badge.ready-structure,.badge.pass-structure{background:#163d2a;color:#8fe6ad}.badge.pending,.badge.pending-live-serp,.badge.pending-embedding,.badge.review,.badge.review-queue{background:#44321b;color:#ffd08a}.badge.reject,.badge.rejected,.badge.fail,.badge.closed{background:#492129;color:#ff9ca6}
    footer{padding:30px max(20px,5vw);color:var(--muted)}@media(max-width:700px){header{padding-top:28px}.section-title{align-items:start;flex-direction:column}th,td{padding:8px}}
    """

    sections = [
        section("System Status", "What is complete, what remains gated, and what must not be published yet.", f'<div class="metrics">{metric_html}</div><div class="callout danger"><strong>Strict evidence boundary:</strong> {serp_pending} of {len(prod)} page candidates do not yet have page-level live top-10 SERP evidence. Semantic embedding review is also pending. This dashboard is structurally complete but does not mislabel pending evidence as verified.</div>{feature_table}', "status"),
        section("Pillars & Clusters", "USB industry Hub → Macro Pillar → page candidate structure.", f'<div class="grid">{"".join(hub_cards)}</div>', "pillars"),
        section("Page Architecture", "Every retained keyword maps to one primary URL; page candidates carry decisions, QA and evidence gates.", page_table, "architecture"),
        section("Execution Roadmap", "Batch sequencing based on conversion value, evidence risk and measured demand.", roadmap_table, "roadmap"),
        section("Site Foundation", "Required commercial, trust, resource and RFQ areas beyond keyword-only pages.", site_table, "foundation"),
        section("Semantic QA", "Deterministic cluster checks are complete; embedding validation remains explicitly pending.", semantic_table, "semantic"),
        section("SERP Evidence", "Page-level evidence status and publication gate. Pending rows are not final approvals.", serp_table, "serp"),
        section("Merge / Split Review", "Lexically or topically close page pairs requiring live SERP domain-overlap review.", merge_table, "merge"),
        section("Content Blueprints", "Keyword-derived H1/H2/H3 drafts, intent, page type and priority. Claims still require evidence.", blueprint_table, "blueprints"),
        section("Internal Linking", "Proposed parent and commercial conversion paths; finalize after URL freeze.", links_table, "links"),
        section("Manual Review Queue", "Brand, device compatibility, connector normalization and ambiguous keywords excluded from automatic page production.", review_table, "review"),
        section("Content Support Only", "Consumer comparison demand retained for buying guides, FAQs and selection criteria; these terms do not create standalone URLs.", content_support_table, "support"),
        section("Rejected Noise Sample", "High-volume rejected rows shown for false-discard inspection.", rejected_table, "rejected"),
        section("Workbook Layer Inventory", "Full parity view of the 21-layer analysis workbook.", sheet_table, "sheets"),
    ]
    nav = "".join(f'<a href="#{sid}">{label}</a>' for sid, label in [("status","Status"),("pillars","Pillars"),("architecture","Architecture"),("roadmap","Roadmap"),("semantic","Semantic QA"),("serp","SERP"),("merge","Merge Review"),("blueprints","Blueprints"),("links","Links"),("review","Review"),("sheets","21 Layers")])
    doc = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>USB Connectivity SEO Architecture Dashboard</title><style>{css}</style></head><body>
    <header><div class="eyebrow">USB Connectivity · B2B Google-to-RFQ</div><h1>Keyword Architecture & Evidence Control Room</h1><p>Workbook: {esc(BOOK.name)} · Positioning → cleaning → intent → architecture → semantic QA → SERP gate → blueprint → internal links.</p></header>
    <nav>{nav}</nav><main>{''.join(sections)}</main><footer>Private planning dashboard. Product, factory, certification, MOQ, lead-time and performance claims remain evidence-gated.</footer></body></html>'''
    OUTPUT.write_text(doc, encoding="utf-8")
    print(OUTPUT)
    print(f"bytes={OUTPUT.stat().st_size} sections={len(sections)} workbook_layers={len(data)}")


if __name__ == "__main__":
    main()
