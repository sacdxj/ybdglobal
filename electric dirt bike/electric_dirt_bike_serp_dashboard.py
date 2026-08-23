from __future__ import annotations

from html import escape
from pathlib import Path

import pandas as pd
import streamlit as st

from content_architecture_alignment import apply_content_alignment, align_internal_links, supplemental_pages


BASE_DIR = Path(__file__).resolve().parent
OUTPUTS_DIR = BASE_DIR / "outputs"
WORKBOOK_CANDIDATES = [
    OUTPUTS_DIR / "electric_dirt_bike_keyword_architecture_serp_full.xlsx",
    OUTPUTS_DIR / "electric_dirt_bike_keyword_architecture_serp_80.xlsx",
    OUTPUTS_DIR / "electric_dirt_bike_keyword_architecture_serp.xlsx",
    OUTPUTS_DIR / "electric_dirt_bike_keyword_architecture_serp_dryrun.xlsx",
    OUTPUTS_DIR / "electric_dirt_bike_keyword_architecture_semantic.xlsx",
    OUTPUTS_DIR / "electric_dirt_bike_keyword_architecture.xlsx",
]

st.set_page_config(page_title="Electric Dirt Bike SEO 架构看板", page_icon="E", layout="wide")

CSS = """
<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,650&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');
:root { --ink:#172019; --muted:#667064; --moss:#50643e; --clay:#b96b43; --gold:#d6a84c; --blue:#3f6f8f; }
.stApp {
  background: radial-gradient(circle at 8% 10%, rgba(214,168,76,.20), transparent 28rem), radial-gradient(circle at 94% 4%, rgba(63,111,143,.18), transparent 24rem), linear-gradient(135deg,#fbfaf4 0%,#eef3e8 100%);
  color: var(--ink); font-family:'IBM Plex Sans', sans-serif;
}
.block-container { padding-top:2rem; max-width:1420px; }
h1,h2,h3 { font-family:'Fraunces', serif; letter-spacing:-.03em; }
.hero { border:1px solid rgba(80,100,62,.22); background:linear-gradient(135deg,rgba(255,255,255,.88),rgba(231,239,223,.82)); border-radius:28px; padding:28px 30px; box-shadow:0 24px 80px rgba(44,62,38,.13); position:relative; overflow:hidden; }
.hero:after { content:""; position:absolute; right:-80px; top:-120px; width:300px; height:300px; border-radius:50%; border:48px solid rgba(185,107,67,.12); }
.hero-title { font-family:'Fraunces', serif; font-size:42px; line-height:1.02; margin-bottom:8px; }
.hero-sub { color:var(--muted); font-size:16px; max-width:930px; }
.metric-grid { display:grid; grid-template-columns:repeat(5,minmax(130px,1fr)); gap:12px; margin:18px 0 8px; }
.metric-card { background:rgba(255,255,255,.82); border:1px solid rgba(80,100,62,.18); border-radius:18px; padding:14px 16px; }
.metric-value { font-family:'Fraunces', serif; font-size:28px; color:var(--moss); }
.metric-label { color:var(--muted); font-size:12px; text-transform:uppercase; letter-spacing:.08em; }
section[data-testid="stSidebar"] { background:rgba(255,255,255,.72); border-right:1px solid rgba(80,100,62,.16); }
[data-testid="stExpander"] { background:rgba(255,255,255,.78); border:1px solid rgba(80,100,62,.18); border-radius:18px; box-shadow:0 12px 35px rgba(44,62,38,.08); overflow:hidden; }
[data-testid="stExpander"] summary { font-weight:700; color:#132016; }
.hub-summary { display:grid; grid-template-columns:repeat(auto-fit,minmax(210px,1fr)); gap:10px; margin:8px 0 16px; }
.pillar-stat { background:rgba(255,255,255,.72); border:1px solid rgba(80,100,62,.14); border-radius:14px; padding:10px 12px; }
.pillar-stat-name { font-weight:800; color:#172019; font-size:13px; }
.pillar-stat-meta { color:#667064; font-size:12px; margin-top:4px; }
.pillar-title, .cluster-title { display:flex; align-items:center; gap:10px; margin:18px 0 10px; font-weight:800; }
.pillar-title { font-size:17px; }
.cluster-title { font-size:14px; padding:10px 12px; border-left:4px solid var(--gold); background:rgba(255,255,255,.62); border-radius:12px; }
.badge { display:inline-flex; align-items:center; border-radius:999px; padding:4px 9px; font-size:11px; font-weight:700; letter-spacing:.02em; background:#e8f2e5; color:#3d5e32; border:1px solid rgba(80,100,62,.12); }
.badge.serp-strong { background:#e1f4dc; color:#315d27; } .badge.serp-medium { background:#fff1cf; color:#75501c; } .badge.serp-weak { background:#ffe5d8; color:#884228; }
.badge.build { background:#dbeefe; color:#235376; } .badge.review { background:#fff0c2; color:#805a00; } .badge.merge { background:#efe4ff; color:#624091; }
.page-card { border:1px solid rgba(29,44,33,.12); background:linear-gradient(180deg,#fff 0%,#fbfcf8 100%); border-radius:18px; padding:18px 18px 16px; margin:12px 0; box-shadow:0 10px 26px rgba(35,50,32,.07); }
.card-top { display:flex; justify-content:space-between; align-items:flex-start; gap:18px; }
.keyword { font-size:17px; font-weight:800; color:#152318; } .slug { color:#23724a; font-size:13px; margin-left:4px; }
.h1 { color:#445044; margin-top:8px; font-size:15px; } .meta { display:flex; flex-wrap:wrap; gap:7px; margin-top:10px; }
.chip-row-title { color:#6b7368; font-weight:700; margin:14px 0 6px; font-size:13px; }
.chips { display:flex; flex-wrap:wrap; gap:8px; } .chip { background:#f1f3ef; border:1px solid rgba(23,32,25,.06); color:#243026; border-radius:999px; padding:7px 11px; font-size:12px; }
.info-box { margin-top:14px; background:#f7f2e8; border:1px dashed rgba(185,107,67,.34); border-radius:14px; padding:12px 13px; color:#55483b; font-size:13px; }
.link-box { margin-top:10px; background:#eef5f0; border:1px solid rgba(80,100,62,.16); border-radius:14px; padding:12px 13px; color:#314135; font-size:13px; }
.small-muted { color:var(--muted); font-size:12px; }
.priority-ring { min-width:64px; height:64px; border-radius:50%; display:grid; place-items:center; font-family:'Fraunces', serif; color:#142016; background:conic-gradient(var(--gold) calc(var(--score) * 1%), #edf0e8 0); box-shadow:inset 0 0 0 7px #fff; }
.status-strip { margin:12px 0; padding:10px 14px; border-radius:14px; background:rgba(255,255,255,.70); border:1px solid rgba(80,100,62,.16); color:#475445; }
.gate-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:12px; margin:12px 0 18px; }
.gate-card { background:rgba(255,255,255,.78); border:1px solid rgba(80,100,62,.16); border-radius:16px; padding:14px; }
.gate-card.danger { border-color:rgba(185,80,55,.38); background:#fff3ed; }
.gate-card.warn { border-color:rgba(214,168,76,.45); background:#fff8e8; }
.gate-card.ok { border-color:rgba(80,130,70,.32); background:#edf7ea; }
.gate-value { font-family:'Fraunces', serif; font-size:30px; line-height:1; }
.gate-label { color:#667064; font-size:12px; text-transform:uppercase; letter-spacing:.06em; margin-top:6px; }
.challenge-high { color:#8a2f1d; font-weight:800; }
.challenge-medium { color:#805a00; font-weight:800; }
.challenge-low { color:#315d27; font-weight:800; }
</style>
"""


def pick_workbook() -> Path | None:
    for path in WORKBOOK_CANDIDATES:
        if path.exists():
            return path
    return None


def safe_text(value) -> str:
    if value is None or pd.isna(value):
        return ""
    return escape(str(value))


def split_pipe(value) -> list[str]:
    if value is None or pd.isna(value):
        return []
    raw = str(value).replace(";", "|")
    return [part.strip() for part in raw.split("|") if part.strip()]


def safe_int(value) -> int:
    try:
        if value is None or pd.isna(value):
            return 0
        return int(float(value))
    except Exception:
        return 0


def css_class_for_serp(value: str) -> str:
    value = str(value or "").lower()
    if "strong" in value:
        return "serp-strong"
    if "medium" in value:
        return "serp-medium"
    if "weak" in value:
        return "serp-weak"
    return ""


def css_class_for_decision(value: str) -> str:
    value = str(value or "").lower()
    if "build now" in value or "build later" in value:
        return "build"
    if "review" in value:
        return "review"
    if "merge" in value:
        return "merge"
    return ""


def serp_verdict(row: pd.Series) -> str:
    serp = str(row.get("SERP Intent Match", "") or "Not checked")
    decision = str(row.get("Final Content Decision", "") or row.get("Semantic Production Decision", "") or "")
    flag = str(row.get("SERP Merge/Split Flag", "") or "")
    if serp == "Strong" and decision == "Build now":
        return "建议保留为优先建设页面：SERP 与 electric dirt bike 的购买/对比/产品/配件/支持意图匹配。"
    if serp == "Strong":
        return "SERP 业务相关性强，可作为后续内容扩展或人工复核的正向证据。"
    if serp == "Medium":
        return "SERP 有部分业务匹配，建议结合关键词组和商业价值复核后再发布。"
    if serp == "Weak":
        return "SERP 偏弱或混合，建议人工复核，避免把消费者/导航型流量做成正式页面。"
    if flag:
        return "该页面存在合并/拆分提示，请在 SERP 复核视图里比较相邻页面。"
    return "尚未抓取真实 SERP，当前仅展示规则和语义层结果。"


def link_rows_for(keyword: str, links_df: pd.DataFrame, limit: int = 4) -> pd.DataFrame:
    if links_df.empty or not keyword:
        return pd.DataFrame()
    mask = links_df["Source Primary Keyword"].astype(str) == str(keyword)
    rows = links_df[mask].copy()
    if rows.empty:
        return rows
    return rows.sort_values("Link Score", ascending=False).head(limit)


def page_card(row: pd.Series, links_df: pd.DataFrame | None = None) -> str:
    links_df = links_df if links_df is not None else pd.DataFrame()
    keyword = row.get("Primary Keyword", "")
    slug = row.get("Recommended URL Slug", "") or row.get("url_slug", "")
    h1 = row.get("Recommended H1", "") or row.get("H1", "") or row.get("Expanded Page Candidate", "")
    page_type = row.get("Recommended Page Type", "") or row.get("Page Type", "") or row.get("Page Role", "")
    decision = row.get("Final Content Decision", "") or row.get("Semantic Production Decision", "") or row.get("Production Decision", "")
    content_status = row.get("Final Content Status", "") or "not-mapped"
    alignment_action = row.get("Alignment Action", "") or ""
    serp = row.get("SERP Intent Match", "") or "Not checked"
    status = row.get("SERP Status", "") or "not-selected"
    priority = safe_int(row.get("Page Priority Score", 0))
    volume = safe_int(row.get("Total Search Volume", 0))
    h2 = split_pipe(row.get("Recommended H2", "") or row.get("H2 Keywords", ""))
    h3 = split_pipe(row.get("Recommended H3", "") or row.get("H3 Keywords", ""))
    reason = row.get("Page Priority Reason", "") or ""
    matched = row.get("SERP Matched Terms", "") or ""
    top_urls = split_pipe(row.get("Top URLs", ""))[:3]
    link_rows = link_rows_for(str(keyword), links_df)

    h2_html = "".join(f"<span class='chip'>{safe_text(x)}</span>" for x in h2[:8]) or "<span class='small-muted'>暂无 H2 建议</span>"
    h3_html = "".join(f"<span class='chip'>{safe_text(x)}</span>" for x in h3[:10]) or "<span class='small-muted'>暂无 H3 建议</span>"
    urls_html = "".join(f"<div>{i + 1}. {safe_text(url)}</div>" for i, url in enumerate(top_urls)) or "<span class='small-muted'>该页面尚未抓取 SERP Top URLs</span>"
    links_html = "".join(
        f"<div>{safe_text(r.get('Anchor Text'))} -> {safe_text(r.get('Target Primary Keyword'))} <span class='small-muted'>score {safe_text(r.get('Link Score'))}</span></div>"
        for _, r in link_rows.iterrows()
    ) or "<span class='small-muted'>暂无推荐内链</span>"

    return f"""
    <div class="page-card">
      <div class="card-top">
        <div>
          <div class="keyword">{safe_text(keyword)} <span class="slug">· {safe_text(slug)}</span></div>
          <div class="h1">{safe_text(h1)}</div>
          <div class="meta">
            <span class="badge {css_class_for_decision(decision)}">{safe_text(decision)}</span>
            <span class="badge">{safe_text(page_type)}</span>
            <span class="badge {css_class_for_serp(serp)}">SERP {safe_text(serp)}</span>
            <span class="badge">状态 {safe_text(status)}</span>
            <span class="badge">内容 {safe_text(content_status)}</span>
            <span class="badge">搜索量 {volume:,}</span>
          </div>
        </div>
        <div class="priority-ring" style="--score:{priority}">{priority}</div>
      </div>
      <div class="chip-row-title">H2 建议</div><div class="chips">{h2_html}</div>
      <div class="chip-row-title">H3 建议</div><div class="chips">{h3_html}</div>
      <div class="info-box">
        <b>SERP 结论</b><br>{safe_text(serp_verdict(row))}<br>
        <span class="small-muted">匹配词:</span> {safe_text(matched or 'n/a')}<br>
        <span class="small-muted">内容映射:</span> {safe_text(alignment_action or 'n/a')}<br>
        <span class="small-muted">优先级原因:</span> {safe_text(reason or 'n/a')}<br>
        <span class="small-muted">Top URLs:</span>{urls_html}
      </div>
      <div class="link-box"><b>推荐内链</b><br>{links_html}</div>
    </div>
    """


def hub_structure_summary(hub_df: pd.DataFrame) -> str:
    cards = []
    for pillar, pillar_df in hub_df.groupby("Macro Pillar", dropna=False):
        cluster_count = pillar_df["Cluster"].nunique(dropna=True) if "Cluster" in pillar_df else 0
        page_count = len(pillar_df)
        serp_count = int((pillar_df.get("SERP Status", pd.Series(dtype=str)) == "ok").sum()) if "SERP Status" in pillar_df else 0
        cards.append(
            f"""
            <div class="pillar-stat">
              <div class="pillar-stat-name">{safe_text(pillar)}</div>
              <div class="pillar-stat-meta">{page_count} pages · {cluster_count} clusters · SERP {serp_count}/{page_count}</div>
            </div>
            """
        )
    return "<div class='hub-summary'>" + "".join(cards) + "</div>"


def render_metrics(df: pd.DataFrame) -> str:
    checked = int((df.get("SERP Status", pd.Series(dtype=str)) == "ok").sum()) if "SERP Status" in df else 0
    decision = df.get("Final Content Decision", pd.Series("", index=df.index)).astype(str)
    build_now = int(decision.eq("Build now").sum())
    review = int(decision.str.contains("review", case=False, na=False).sum())
    avg_priority = safe_int(df.get("Page Priority Score", pd.Series([0])).mean()) if "Page Priority Score" in df else 0
    st.markdown(
        f"""
        <div class="metric-grid">
          <div class="metric-card"><div class="metric-value">{len(df):,}</div><div class="metric-label">页面候选</div></div>
          <div class="metric-card"><div class="metric-value">{checked:,}</div><div class="metric-label">已跑 SERP</div></div>
          <div class="metric-card"><div class="metric-value">{build_now:,}</div><div class="metric-label">第一批建设</div></div>
          <div class="metric-card"><div class="metric-value">{review:,}</div><div class="metric-label">人工复核</div></div>
          <div class="metric-card"><div class="metric-value">{avg_priority}</div><div class="metric-label">平均优先级</div></div>
        </div>
        """,
        unsafe_allow_html=True,
    )
    if "metric_filter" not in st.session_state:
        st.session_state.metric_filter = "all"
    cols = st.columns(5)
    buttons = [
        ("all", f"全部页面 · {len(df):,}"),
        ("serp_checked", f"已跑 SERP · {checked:,}"),
        ("build_now", f"第一批建设 · {build_now:,}"),
        ("review", f"人工复核 · {review:,}"),
        ("above_avg_priority", f"高于均值 · {avg_priority}"),
    ]
    for col, (key, label) in zip(cols, buttons):
        button_type = "primary" if st.session_state.metric_filter == key else "secondary"
        if col.button(label, key=f"metric_{key}", use_container_width=True, type=button_type):
            st.session_state.metric_filter = key
    labels = {
        "all": "当前查看：全部符合侧边栏筛选的页面。",
        "serp_checked": "当前查看：已有真实 SERP 证据的页面。",
        "build_now": "当前查看：最终内容映射确定为第一批建设的页面。",
        "review": "当前查看：最终内容映射中仍需人工复核的页面。",
        "above_avg_priority": "当前查看：优先级不低于当前均值的页面。",
    }
    st.markdown(f"<div class='status-strip'>{labels.get(st.session_state.metric_filter, labels['all'])}</div>", unsafe_allow_html=True)
    return st.session_state.metric_filter


def apply_metric_filter(df: pd.DataFrame, metric_filter: str) -> pd.DataFrame:
    if metric_filter == "serp_checked" and "SERP Status" in df:
        return df[df["SERP Status"] == "ok"]
    if metric_filter == "build_now" and "Final Content Decision" in df:
        return df[df["Final Content Decision"] == "Build now"]
    if metric_filter == "review" and "Final Content Decision" in df:
        return df[df["Final Content Decision"].astype(str).str.contains("review", case=False, na=False)]
    if metric_filter == "above_avg_priority" and "Page Priority Score" in df:
        avg_priority = df["Page Priority Score"].fillna(0).mean()
        return df[df["Page Priority Score"].fillna(0) >= avg_priority]
    return df


def apply_sidebar_filters(prod: pd.DataFrame) -> tuple[pd.DataFrame, int]:
    st.sidebar.title("Electric Dirt Bike SEO")
    st.sidebar.caption(f"数据文件：{st.session_state.get('workbook_name', '')}")
    hubs = sorted([x for x in prod["Hub"].dropna().unique()])
    decisions = sorted([x for x in prod.get("Final Content Decision", prod.get("Semantic Production Decision")).dropna().unique()])
    selected_hubs = st.sidebar.multiselect("Hub 主题", hubs, default=hubs)
    selected_decisions = st.sidebar.multiselect("生产决策", decisions, default=decisions)
    serp_options = sorted([x for x in prod.get("SERP Intent Match", pd.Series(dtype=str)).dropna().unique()])
    selected_serp = st.sidebar.multiselect("SERP 意图", serp_options, default=serp_options)
    search = st.sidebar.text_input("搜索关键词 / 页面", "")
    max_cards = st.sidebar.slider("每个 Cluster 最多显示页面数", 3, 120, 18)

    df = prod.copy()
    if selected_hubs:
        df = df[df["Hub"].isin(selected_hubs)]
    decision_col = "Final Content Decision" if "Final Content Decision" in df else "Semantic Production Decision"
    if selected_decisions and decision_col in df:
        df = df[df[decision_col].isin(selected_decisions)]
    if selected_serp and "SERP Intent Match" in df:
        df = df[df["SERP Intent Match"].isin(selected_serp)]
    if search:
        haystack = (
            df.get("Primary Keyword", "").astype(str) + " " +
            df.get("Expanded Page Candidate", "").astype(str) + " " +
            df.get("Recommended H1", "").astype(str)
        ).str.lower()
        df = df[haystack.str.contains(search.lower(), na=False)]
    return df, max_cards


def render_architecture(df: pd.DataFrame, links_df: pd.DataFrame, max_cards: int) -> None:
    sort_col = "Page Priority Score" if "Page Priority Score" in df else "Total Search Volume"
    df = df.sort_values(["Hub", "Macro Pillar", "Cluster", sort_col], ascending=[True, True, True, False])
    for hub, hub_df in df.groupby("Hub", dropna=False):
        hub_volume = safe_int(hub_df.get("Total Search Volume", pd.Series([0])).sum())
        checked = int((hub_df.get("SERP Status", pd.Series(dtype=str)) == "ok").sum()) if "SERP Status" in hub_df else 0
        pillar_count = hub_df["Macro Pillar"].nunique(dropna=True) if "Macro Pillar" in hub_df else 0
        cluster_count = hub_df["Cluster"].nunique(dropna=True) if "Cluster" in hub_df else 0
        label = f"{hub} · Theme Hub · {pillar_count} pillars · {cluster_count} clusters · {len(hub_df)} pages · volume {hub_volume:,} · SERP {checked}/{len(hub_df)}"
        with st.expander(label, expanded=False):
            st.markdown(hub_structure_summary(hub_df), unsafe_allow_html=True)
            shown = 0
            for pillar, pillar_df in hub_df.groupby("Macro Pillar", dropna=False):
                pillar_cluster_count = pillar_df["Cluster"].nunique(dropna=True) if "Cluster" in pillar_df else 0
                st.markdown(f"<div class='pillar-title'>{safe_text(pillar)} <span class='badge'>Pillar</span><span class='badge'>{pillar_cluster_count} clusters</span><span class='badge'>{len(pillar_df)} pages</span></div>", unsafe_allow_html=True)
                for cluster, cluster_df in pillar_df.groupby("Cluster", dropna=False):
                    cluster_volume = safe_int(cluster_df.get("Total Search Volume", pd.Series([0])).sum())
                    st.markdown(f"<div class='cluster-title'>{safe_text(cluster)} <span class='badge'>Cluster</span><span class='badge'>{len(cluster_df)} pages</span><span class='badge'>volume {cluster_volume:,}</span></div>", unsafe_allow_html=True)
                    for _, row in cluster_df.head(max_cards).iterrows():
                        st.markdown(page_card(row, links_df), unsafe_allow_html=True)
                        shown += 1
                    if len(cluster_df) > max_cards:
                        st.caption(f"本 Cluster 共 {len(cluster_df)} 页，目前显示 {max_cards} 页。可在侧边栏提高显示上限。")
            if shown == 0:
                st.info("当前筛选条件下没有页面。")


def render_build_queue(df: pd.DataFrame, links_df: pd.DataFrame) -> None:
    build = df[df.get("Final Content Decision", pd.Series(dtype=str)) == "Build now"].copy()
    if build.empty:
        st.info("当前筛选下没有 Build now 页面。")
        return
    st.subheader(f"第一批建设队列：{len(build)} 页")
    st.info(
        "写文章前先导出标准 brief："
        "python article_brief_exporter.py --keyword \"这里填 Primary Keyword\"。"
        " brief 会把 Production_Batches、SERP_Evidence 和 Internal_Links 合成 electric dirt bike 的写作输入。"
    )
    build = build.sort_values("Page Priority Score", ascending=False)
    cols = ["Hub", "Macro Pillar", "Cluster", "Primary Keyword", "Recommended URL Slug", "Recommended H1", "Page Priority Score", "SERP Intent Match", "Total Search Volume"]
    st.dataframe(build[[c for c in cols if c in build.columns]], use_container_width=True, hide_index=True)
    if "Primary Keyword" in build.columns:
        selected_keyword = st.selectbox(
            "选择一个页面导出写作 brief",
            build["Primary Keyword"].dropna().astype(str).tolist(),
        )
        if selected_keyword:
            st.code(
                f'python article_brief_exporter.py --keyword "{selected_keyword}"',
                language="powershell",
            )
    st.markdown("### 优先级最高页面")
    for _, row in build.head(12).iterrows():
        st.markdown(page_card(row, links_df), unsafe_allow_html=True)


def render_serp_review(df: pd.DataFrame, merge_df: pd.DataFrame) -> None:
    st.subheader("SERP 复核队列")
    weak = df[df.get("SERP Intent Match", pd.Series(dtype=str)).isin(["Weak", "Medium"])].copy()
    if not weak.empty:
        st.markdown("#### SERP 意图偏弱 / 混合")
        cols = ["Hub", "Macro Pillar", "Cluster", "Primary Keyword", "SERP Intent Match", "SERP Recommended Decision", "Final Content Decision", "Alignment Action", "Page Priority Score"]
        st.dataframe(weak[[c for c in cols if c in weak.columns]].sort_values(["SERP Intent Match", "Page Priority Score"], ascending=[True, False]), use_container_width=True, hide_index=True)
    if not merge_df.empty:
        st.markdown("#### 合并 / 拆分候选")
        st.dataframe(merge_df, use_container_width=True, hide_index=True)


def render_internal_links(links_df: pd.DataFrame) -> None:
    st.subheader("内链建议")
    if links_df.empty:
        st.info("暂无内链数据。")
        return
    keyword = st.text_input("按 Source / Target 关键词过滤内链", "")
    view = links_df.copy()
    if keyword:
        mask = view["Source Primary Keyword"].astype(str).str.contains(keyword, case=False, na=False) | view["Target Primary Keyword"].astype(str).str.contains(keyword, case=False, na=False)
        view = view[mask]
    st.dataframe(view.sort_values("Link Score", ascending=False).head(1000), use_container_width=True, hide_index=True)


def audit_table(df: pd.DataFrame, title: str, cols: list[str]) -> int:
    count = len(df)
    with st.expander(f"{title} · {count} 项", expanded=count > 0):
        if count == 0:
            st.success("未发现问题。")
        else:
            visible = [c for c in cols if c in df.columns]
            st.dataframe(df[visible], use_container_width=True, hide_index=True)
    return count


def render_quality_gate(df: pd.DataFrame, links_df: pd.DataFrame, merge_df: pd.DataFrame) -> None:
    st.subheader("质量监工")
    st.caption("这里不是展示更多数据，而是专门挑错：找出不该直接进入生产的页面、结构过粗的 Cluster、内容蓝图缺失、内链孤岛和决策冲突。")

    decision = df.get("Final Content Decision", pd.Series("", index=df.index)).astype(str)
    semantic_decision = df.get("Effective Semantic Decision", df.get("Semantic Production Decision", pd.Series("", index=df.index))).astype(str)
    serp = df.get("SERP Intent Match", pd.Series("", index=df.index)).astype(str)
    semantic_gate = df.get("Semantic QA Decision", pd.Series("", index=df.index)).astype(str)
    risk_flags = df.get("Risk Flags", pd.Series("", index=df.index)).astype(str)
    merge_flag = df.get("SERP Merge/Split Flag", pd.Series("", index=df.index)).astype(str)
    h2 = df.get("Recommended H2", pd.Series("", index=df.index)).astype(str)
    h3 = df.get("Recommended H3", pd.Series("", index=df.index)).astype(str)
    h1 = df.get("Recommended H1", pd.Series("", index=df.index)).astype(str)
    priority = df.get("Page Priority Score", pd.Series(0, index=df.index)).fillna(0)

    build_now = df[decision == "Build now"].copy()
    build_serp_weak = build_now[build_now.get("SERP Intent Match", "").astype(str).isin(["Weak", "Not checked"])] if not build_now.empty else build_now
    build_semantic_risk = build_now[build_now.get("Semantic QA Decision", "").astype(str).isin(["Semantic Review", "Semantic Block"])] if not build_now.empty else build_now
    build_risk_flags = build_now[build_now.get("Risk Flags", "").astype(str).str.len() > 0] if not build_now.empty else build_now
    build_merge_review = build_now[build_now.get("SERP Merge/Split Flag", "").astype(str).str.contains("merge|split", case=False, na=False)] if not build_now.empty else build_now
    decision_conflict = df[(decision != semantic_decision) & semantic_decision.ne("")].copy()
    missing_headings = df[(h2.str.strip().isin(["", "nan"])) | (h3.str.strip().isin(["", "nan"]))].copy()
    generic_h1 = df[h1.str.len().fillna(0) < 18].copy()
    low_priority_build = build_now[build_now.get("Page Priority Score", pd.Series(0, index=build_now.index)).fillna(0) < 50] if not build_now.empty else build_now

    cluster_stats = (
        df.groupby(["Hub", "Macro Pillar", "Cluster"], dropna=False)
        .agg(Pages=("Primary Keyword", "count"), Volume=("Total Search Volume", "sum"), AvgPriority=("Page Priority Score", "mean"))
        .reset_index()
    )
    oversized_clusters = cluster_stats[cluster_stats["Pages"] >= 20].copy()
    thin_clusters = cluster_stats[cluster_stats["Pages"] == 1].copy()
    pillar_stats = (
        df.groupby(["Hub", "Macro Pillar"], dropna=False)
        .agg(Pages=("Primary Keyword", "count"), Clusters=("Cluster", "nunique"))
        .reset_index()
    )
    broad_pillars = pillar_stats[(pillar_stats["Pages"] >= 40) & (pillar_stats["Clusters"] <= 2)].copy()

    if not links_df.empty:
        linked_sources = set(links_df["Source Primary Keyword"].astype(str))
        isolated = df[~df["Primary Keyword"].astype(str).isin(linked_sources)].copy()
        target_counts = links_df.groupby("Target Primary Keyword").size().reset_index(name="Incoming Link Suggestions")
        overlinked = target_counts[target_counts["Incoming Link Suggestions"] >= 40].copy()
    else:
        isolated = df.copy()
        overlinked = pd.DataFrame()

    hard_risks = len(build_serp_weak) + len(build_semantic_risk) + len(build_risk_flags) + len(build_merge_review)
    structure_risks = len(oversized_clusters) + len(thin_clusters) + len(broad_pillars)
    content_risks = len(missing_headings) + len(generic_h1) + len(low_priority_build)
    link_risks = len(isolated) + len(overlinked)
    total_risks = hard_risks + structure_risks + content_risks + link_risks + len(decision_conflict)
    gate_class = "ok" if total_risks == 0 else "warn" if hard_risks == 0 else "danger"
    gate_text = "PASS" if total_risks == 0 else "REVIEW" if hard_risks == 0 else "BLOCK"

    st.markdown(
        f"""
        <div class="gate-grid">
          <div class="gate-card {gate_class}"><div class="gate-value">{gate_text}</div><div class="gate-label">生产网关</div></div>
          <div class="gate-card {'danger' if hard_risks else 'ok'}"><div class="gate-value">{hard_risks}</div><div class="gate-label">Build Now 硬风险</div></div>
          <div class="gate-card {'warn' if structure_risks else 'ok'}"><div class="gate-value">{structure_risks}</div><div class="gate-label">结构风险</div></div>
          <div class="gate-card {'warn' if content_risks else 'ok'}"><div class="gate-value">{content_risks}</div><div class="gate-label">内容蓝图风险</div></div>
          <div class="gate-card {'warn' if link_risks else 'ok'}"><div class="gate-value">{link_risks}</div><div class="gate-label">内链风险</div></div>
        </div>
        """,
        unsafe_allow_html=True,
    )

    page_cols = [
        "Hub", "Macro Pillar", "Cluster", "Primary Keyword", "SERP Recommended Decision",
        "Semantic Production Decision", "SERP Intent Match", "Semantic QA Decision",
        "Risk Flags", "SERP Merge/Split Flag", "Page Priority Score", "Recommended URL Slug",
    ]
    st.markdown("### Build Now 风险")
    audit_table(build_serp_weak, "Build Now 但 SERP Weak / Not checked", page_cols)
    audit_table(build_semantic_risk, "Build Now 但 Semantic Review / Block", page_cols)
    audit_table(build_risk_flags, "Build Now 但仍有 Risk Flags", page_cols)
    audit_table(build_merge_review, "Build Now 但存在 SERP 合并/拆分提示", page_cols)
    audit_table(low_priority_build, "Build Now 但优先级低于 50", page_cols)

    st.markdown("### 决策冲突")
    audit_table(decision_conflict, "SERP Recommended Decision 与 Semantic Production Decision 不一致", page_cols)

    st.markdown("### 结构风险")
    audit_table(oversized_clusters, "过大的 Cluster（>=20 pages）", ["Hub", "Macro Pillar", "Cluster", "Pages", "Volume", "AvgPriority"])
    audit_table(thin_clusters, "过薄的 Cluster（只有 1 page）", ["Hub", "Macro Pillar", "Cluster", "Pages", "Volume", "AvgPriority"])
    audit_table(broad_pillars, "Pillar 过粗（>=40 pages 且 <=2 clusters）", ["Hub", "Macro Pillar", "Pages", "Clusters"])

    st.markdown("### 内容蓝图风险")
    audit_table(missing_headings, "缺少 H2/H3 建议", page_cols + ["Recommended H2", "Recommended H3"])
    audit_table(generic_h1, "H1 过短，可能太泛", page_cols + ["Recommended H1"])

    st.markdown("### 内链风险")
    audit_table(isolated, "没有作为 Source 产生内链建议的页面", ["Hub", "Macro Pillar", "Cluster", "Primary Keyword", "Recommended URL Slug", "Page Priority Score"])
    audit_table(overlinked, "目标页面被过度推荐链接", ["Target Primary Keyword", "Incoming Link Suggestions"])


def challenge_rows(df: pd.DataFrame, links_df: pd.DataFrame, merge_df: pd.DataFrame) -> pd.DataFrame:
    linked_sources = set(links_df["Source Primary Keyword"].astype(str)) if not links_df.empty and "Source Primary Keyword" in links_df else set()
    merge_keywords = set()
    if not merge_df.empty:
        for col in ["Keyword A", "Keyword B"]:
            if col in merge_df:
                merge_keywords.update(merge_df[col].dropna().astype(str).tolist())

    rows = []
    for _, row in df.iterrows():
        keyword = str(row.get("Primary Keyword", "") or "")
        decision = str(row.get("SERP Recommended Decision", "") or row.get("Semantic Production Decision", "") or "")
        semantic_decision = str(row.get("Semantic Production Decision", "") or "")
        serp = str(row.get("SERP Intent Match", "") or "Not checked")
        semantic_gate = str(row.get("Semantic QA Decision", "") or "")
        risk = str(row.get("Risk Flags", "") or "")
        role = str(row.get("Page Role", "") or "")
        h1 = str(row.get("Recommended H1", "") or "")
        h2 = str(row.get("Recommended H2", "") or "")
        h3 = str(row.get("Recommended H3", "") or "")
        priority = safe_int(row.get("Page Priority Score", 0))
        volume = safe_int(row.get("Total Search Volume", 0))
        cluster = str(row.get("Cluster", "") or "")
        objection = []
        evidence = []
        action = []
        severity_score = 0

        if decision == "Build now" and serp in {"Weak", "Not checked"}:
            objection.append("Build Now 缺少可靠 SERP 正向证据。")
            evidence.append(f"SERP Intent Match = {serp}")
            action.append("反馈质量监工：降级到 Manual review，直到 SERP 证据明确。")
            severity_score += 4
        if decision == "Build now" and semantic_gate in {"Semantic Review", "Semantic Block"}:
            objection.append("语义层尚未放行，却进入了 Build Now。")
            evidence.append(f"Semantic QA Decision = {semantic_gate}")
            action.append("反馈质量监工：复核 Topic/Cluster 归属或降级。")
            severity_score += 4
        if decision == "Build now" and risk:
            objection.append("Build Now 页面仍带风险标记。")
            evidence.append(f"Risk Flags = {risk}")
            action.append("反馈质量监工：风险清零前不得进入第一批。")
            severity_score += 3
        if decision == "Build now" and priority < 50:
            objection.append("优先级偏低，但被放入第一批。")
            evidence.append(f"Page Priority Score = {priority}")
            action.append("要求说明商业理由，否则降级 Build later。")
            severity_score += 2
        if "product opportunity" in role.lower() and decision == "Build now":
            objection.append("产品机会页进入第一批，可能偏离核心服务成交路径。")
            evidence.append(f"Page Role = {role}")
            action.append("反馈质量监工：除非有强商业证据，否则改为 Batch 2 / Parent FAQ。")
            severity_score += 2
        if keyword in merge_keywords or str(row.get("SERP Merge/Split Flag", "") or ""):
            objection.append("存在 SERP 合并/拆分反证，当前页面边界可能不稳。")
            evidence.append(f"Cluster = {cluster}")
            action.append("要求比较相邻页面，确认合并、拆分或保留。")
            severity_score += 2
        if decision != semantic_decision and semantic_decision:
            objection.append("SERP 推荐决策与语义生产决策不一致。")
            evidence.append(f"Semantic={semantic_decision}; SERP={decision}")
            action.append("反馈质量监工：必须记录采用哪一层决策及理由。")
            severity_score += 2
        if not h2.strip() or not h3.strip():
            objection.append("内容蓝图不足，H2/H3 无法支撑生产。")
            evidence.append("Recommended H2/H3 missing")
            action.append("补齐内容结构后再进入生产。")
            severity_score += 1
        if len(h1.strip()) < 18:
            objection.append("H1 过短或太泛，可能不是可执行页面主题。")
            evidence.append(f"H1 = {h1}")
            action.append("重写 H1，使其包含用户、场景和业务价值。")
            severity_score += 1
        if keyword not in linked_sources:
            objection.append("没有作为 Source 产生内链建议，可能形成内容孤岛。")
            evidence.append("No outgoing internal link suggestions")
            action.append("反馈内链监工：补充上级/同级/下级链接。")
            severity_score += 1
        if volume >= 5000 and decision == "Build now" and serp != "Strong":
            objection.append("高搜索量页面可能被流量诱导，业务意图证据不足。")
            evidence.append(f"Volume={volume}; SERP={serp}")
            action.append("要求提供商业转化理由，否则降级复核。")
            severity_score += 2

        if severity_score >= 5:
            level = "High"
            status = "Blocked"
        elif severity_score >= 2:
            level = "Medium"
            status = "Needs Action"
        elif severity_score == 1:
            level = "Low"
            status = "Approved with Notes"
        else:
            level = "None"
            status = "Approved"
            objection.append("暂无反方质疑。")
            evidence.append("规则、语义、SERP、内容和内链未触发主要反证。")
            action.append("可进入下一步人工抽样或生产队列。")

        rows.append(
            {
                "Challenge Status": status,
                "Challenge Level": level,
                "Hub": row.get("Hub"),
                "Macro Pillar": row.get("Macro Pillar"),
                "Cluster": row.get("Cluster"),
                "Primary Keyword": keyword,
                "SERP Recommended Decision": decision,
                "Semantic Production Decision": semantic_decision,
                "SERP Intent Match": serp,
                "Page Priority Score": priority,
                "Objection": " ".join(objection),
                "Evidence": " | ".join(evidence),
                "Required Action": " ".join(dict.fromkeys(action)),
            }
        )
    return pd.DataFrame(rows)


def render_opposition_gate(df: pd.DataFrame, links_df: pd.DataFrame, merge_df: pd.DataFrame) -> None:
    st.subheader("对立监工")
    st.caption("这个 Tab 专门唱反调：只有没有质疑或质疑被处理后，页面才算真正通过。它不会替代质量监工，而是把反证反馈给质量监工执行。")
    challenges = challenge_rows(df, links_df, merge_df)
    if challenges.empty:
        st.info("当前筛选下没有页面。")
        return

    status_counts = challenges["Challenge Status"].value_counts().to_dict()
    high = int((challenges["Challenge Level"] == "High").sum())
    medium = int((challenges["Challenge Level"] == "Medium").sum())
    low = int((challenges["Challenge Level"] == "Low").sum())
    approved = int(status_counts.get("Approved", 0))
    approved_notes = int(status_counts.get("Approved with Notes", 0))
    blocked = int(status_counts.get("Blocked", 0))
    needs_action = int(status_counts.get("Needs Action", 0))

    st.markdown(
        f"""
        <div class="gate-grid">
          <div class="gate-card {'danger' if blocked else 'ok'}"><div class="gate-value">{blocked}</div><div class="gate-label">Blocked</div></div>
          <div class="gate-card {'warn' if needs_action else 'ok'}"><div class="gate-value">{needs_action}</div><div class="gate-label">Needs Action</div></div>
          <div class="gate-card ok"><div class="gate-value">{approved}</div><div class="gate-label">Approved</div></div>
          <div class="gate-card ok"><div class="gate-value">{approved_notes}</div><div class="gate-label">Approved with Notes</div></div>
          <div class="gate-card {'danger' if high else 'ok'}"><div class="gate-value">{high}</div><div class="gate-label">High Challenges</div></div>
        </div>
        """,
        unsafe_allow_html=True,
    )

    status_filter = st.multiselect(
        "查看状态",
        ["Blocked", "Needs Action", "Approved with Notes", "Approved"],
        default=["Blocked", "Needs Action"],
    )
    level_filter = st.multiselect(
        "质疑等级",
        ["High", "Medium", "Low", "None"],
        default=["High", "Medium", "Low"],
    )
    view = challenges.copy()
    if status_filter:
        view = view[view["Challenge Status"].isin(status_filter)]
    if level_filter:
        view = view[view["Challenge Level"].isin(level_filter)]

    order = {"High": 0, "Medium": 1, "Low": 2, "None": 3}
    view["_order"] = view["Challenge Level"].map(order).fillna(9)
    view = view.sort_values(["_order", "Page Priority Score"], ascending=[True, False]).drop(columns=["_order"])
    st.dataframe(view, use_container_width=True, hide_index=True)

    st.markdown("### 反馈给质量监工的动作清单")
    action_view = view[view["Challenge Status"].isin(["Blocked", "Needs Action"])].copy()
    if action_view.empty:
        st.success("当前筛选范围内没有需要反馈的质疑。")
    else:
        st.dataframe(
            action_view[[
                "Challenge Status", "Challenge Level", "Primary Keyword", "Objection", "Evidence", "Required Action"
            ]],
            use_container_width=True,
            hide_index=True,
        )

    st.markdown("### 监工回流处理结果")
    feedback = supervisor_feedback_rows(challenges)
    status_cols = st.columns(5)
    counts = feedback["Post-feedback Status"].value_counts().to_dict()
    status_cols[0].metric("必须降级", int(counts.get("Downgrade", 0)))
    status_cols[1].metric("必须人工复核", int(counts.get("Manual Review", 0)))
    status_cols[2].metric("补内容/内链", int(counts.get("Fix Required", 0)))
    status_cols[3].metric("带备注通过", int(counts.get("Approved with Notes", 0)))
    status_cols[4].metric("通过", int(counts.get("Approved", 0)))
    st.dataframe(feedback, use_container_width=True, hide_index=True)


def supervisor_feedback_rows(challenges: pd.DataFrame) -> pd.DataFrame:
    rows = []
    for _, row in challenges.iterrows():
        status = row.get("Challenge Status", "")
        objection = str(row.get("Objection", ""))
        decision = row.get("SERP Recommended Decision", "")
        final_decision = decision
        post_status = "Approved"
        owner = "质量监工"
        next_step = "保持当前安排。"

        if status == "Blocked":
            post_status = "Downgrade"
            final_decision = "Manual review before build"
            owner = "质量监工 + 人工复核"
            next_step = "先移出 Build Now；处理 SERP/语义/风险冲突后再决定是否恢复。"
        elif "语义层尚未放行" in objection or "风险标记" in objection:
            post_status = "Manual Review"
            final_decision = "Manual review before build"
            owner = "质量监工"
            next_step = "要求复核语义归属和风险标记，未清零不得进入第一批。"
        elif "优先级偏低" in objection or "产品机会页" in objection:
            post_status = "Manual Review"
            final_decision = "Build later"
            owner = "内容策略监工"
            next_step = "默认降到 Build later；除非补充强商业理由。"
        elif "合并/拆分反证" in objection:
            post_status = "Manual Review"
            final_decision = "Merge review before build"
            owner = "SERP 监工"
            next_step = "比较 SERP_Merge_Review，决定合并、拆分或保留。"
        elif "内容蓝图不足" in objection or "H1 过短" in objection:
            post_status = "Fix Required"
            owner = "内容监工"
            next_step = "补 H1/H2/H3 后重新进入质量监工。"
        elif "内容孤岛" in objection:
            post_status = "Approved with Notes"
            owner = "内链监工"
            next_step = "可保留当前决策，但发布前补上上级/同级/下级内链。"
        elif status == "Approved with Notes":
            post_status = "Approved with Notes"
            owner = "对应专项监工"
            next_step = "轻微提醒，不阻断生产；进入发布前清单。"

        rows.append(
            {
                "Primary Keyword": row.get("Primary Keyword"),
                "Current Decision": decision,
                "Supervisor Final Decision": final_decision,
                "Post-feedback Status": post_status,
                "Owner": owner,
                "Next Step": next_step,
                "Challenge Level": row.get("Challenge Level"),
                "Objection": row.get("Objection"),
                "Evidence": row.get("Evidence"),
            }
        )
    return pd.DataFrame(rows)


def pick_performance_sheet(xls: pd.ExcelFile) -> str | None:
    for sheet in ["Performance_Feedback", "GSC_Performance", "GA4_Performance"]:
        if sheet in xls.sheet_names:
            return sheet
    return None


def pick_technical_qa_sheet(xls: pd.ExcelFile) -> str | None:
    for sheet in ["Technical_SEO_QA", "Launch_QA", "Indexability_QA"]:
        if sheet in xls.sheet_names:
            return sheet
    return None


def performance_status(row: pd.Series) -> tuple[str, str]:
    impressions = safe_int(row.get("Impressions", 0))
    sessions = safe_int(row.get("Sessions", 0))
    conversions = safe_int(row.get("Conversions", 0))
    cta_clicks = safe_int(row.get("CTA Clicks", 0)) + safe_int(row.get("WhatsApp Clicks", 0)) + safe_int(row.get("Quote Clicks", 0))
    try:
        ctr = float(row.get("CTR", 0) or 0)
    except Exception:
        ctr = 0.0
    try:
        position = float(row.get("Average Position", 0) or 0)
    except Exception:
        position = 0.0
    try:
        engagement = float(row.get("Engagement Rate", 0) or 0)
    except Exception:
        engagement = 0.0

    if impressions >= 500 and ctr < 0.02:
        return "Improve title/meta", "高曝光低 CTR：优先改 Title、Meta、SERP 角度。"
    if impressions >= 500 and position > 15:
        return "Refresh content", "高曝光但平均排名偏低：补内容深度、信息增益、E-E-A-T 和内链。"
    if sessions >= 50 and engagement and engagement < 0.45:
        return "Fix intent/UX", "有访问但互动弱：检查开头、搜索意图匹配、页面结构和 CTA。"
    if sessions >= 50 and conversions == 0 and cta_clicks == 0:
        return "Improve CTA", "有访问但无转化信号：优化 WhatsApp、询价、产品清单等下一步。"
    if conversions > 0 or cta_clicks > 0:
        return "Keep and support", "已有转化信号：保留页面，并增加内链或支持内容。"
    return "Monitor", "数据不足或暂无明显异常：继续观察。"


def render_performance_feedback(perf_df: pd.DataFrame, technical_df: pd.DataFrame) -> None:
    st.subheader("数据反馈")
    if perf_df.empty:
        st.info(
            "当前工作簿没有 Performance_Feedback / GSC_Performance / GA4_Performance 表。"
            "建议导入 GA4/GSC 数据后再回到这里复核。"
        )
        st.markdown(
            """
            **建议字段**

            `Final URL`, `Recommended URL Slug`, `Primary Keyword`, `Hub`, `Macro Pillar`, `Cluster`,
            `Impressions`, `Clicks`, `CTR`, `Average Position`, `Sessions`, `Users`, `Views`,
            `Engagement Rate`, `Conversions`, `CTA Clicks`, `WhatsApp Clicks`, `Quote Clicks`,
            `Top Queries`, `Recommended Action`, `Action Reason`, `Priority`, `Last Updated`
            """
        )
    else:
        df = perf_df.copy()
        if "Recommended Action" not in df.columns or "Action Reason" not in df.columns:
            actions = df.apply(performance_status, axis=1)
            df["Recommended Action"] = [x[0] for x in actions]
            df["Action Reason"] = [x[1] for x in actions]

        total = len(df)
        improve_title = int((df["Recommended Action"] == "Improve title/meta").sum())
        refresh = int((df["Recommended Action"] == "Refresh content").sum())
        cta = int((df["Recommended Action"] == "Improve CTA").sum())
        support = int((df["Recommended Action"] == "Keep and support").sum())
        st.markdown(
            f"""
            <div class="metric-grid">
              <div class="metric-card"><div class="metric-value">{total:,}</div><div class="metric-label">反馈页面</div></div>
              <div class="metric-card"><div class="metric-value">{improve_title:,}</div><div class="metric-label">Title/Meta</div></div>
              <div class="metric-card"><div class="metric-value">{refresh:,}</div><div class="metric-label">内容刷新</div></div>
              <div class="metric-card"><div class="metric-value">{cta:,}</div><div class="metric-label">CTA 优化</div></div>
              <div class="metric-card"><div class="metric-value">{support:,}</div><div class="metric-label">保留加内链</div></div>
            </div>
            """,
            unsafe_allow_html=True,
        )

        action_options = sorted([x for x in df["Recommended Action"].dropna().unique()])
        selected_actions = st.multiselect("反馈动作", action_options, default=action_options)
        if selected_actions:
            df = df[df["Recommended Action"].isin(selected_actions)]

        display_cols = [
            "Primary Keyword", "Final URL", "Recommended URL Slug", "Hub", "Macro Pillar", "Cluster",
            "Impressions", "Clicks", "CTR", "Average Position", "Sessions", "Engagement Rate",
            "Conversions", "CTA Clicks", "WhatsApp Clicks", "Quote Clicks", "Top Queries",
            "Recommended Action", "Action Reason", "Priority", "Last Updated",
        ]
        existing = [c for c in display_cols if c in df.columns]
        sort_cols = [c for c in ["Priority", "Impressions", "Sessions"] if c in df.columns]
        if sort_cols:
            df = df.sort_values(sort_cols, ascending=False)
        st.dataframe(df[existing] if existing else df, use_container_width=True, hide_index=True)

    st.markdown("### 技术上线 QA")
    if technical_df.empty:
        st.info(
            "当前工作簿没有 Technical_SEO_QA / Launch_QA / Indexability_QA 表。"
            "建议上线前补充 indexability、canonical、sitemap、robots、移动端、结构化数据和性能检查。"
        )
        st.markdown(
            """
            **建议字段**

            `Final URL`, `Recommended URL Slug`, `Primary Keyword`, `Indexable`, `Canonical OK`,
            `In Sitemap`, `Robots Allowed`, `Crawlable Links`, `Mobile OK`, `Structured Data Valid`,
            `Performance Risk`, `Technical Status`, `Technical Issue`, `Owner`, `Last Checked`
            """
        )
    else:
        tech = technical_df.copy()
        display_cols = [
            "Primary Keyword", "Final URL", "Recommended URL Slug", "Indexable", "Canonical OK",
            "In Sitemap", "Robots Allowed", "Crawlable Links", "Mobile OK", "Structured Data Valid",
            "Performance Risk", "Technical Status", "Technical Issue", "Owner", "Last Checked",
        ]
        existing = [c for c in display_cols if c in tech.columns]
        st.dataframe(tech[existing] if existing else tech, use_container_width=True, hide_index=True)


def main() -> None:
    st.markdown(CSS, unsafe_allow_html=True)
    workbook = pick_workbook()
    if workbook is None:
        st.error("没有找到 SERP 工作簿。请先生成 electric_dirt_bike_keyword_architecture_serp*.xlsx。")
        return
    st.session_state.workbook_name = workbook.name
    xls = pd.ExcelFile(workbook)
    prod = pd.read_excel(workbook, sheet_name="Production_Batches")
    evidence = pd.read_excel(workbook, sheet_name="SERP_Evidence") if "SERP_Evidence" in xls.sheet_names else pd.DataFrame()
    links_df = pd.read_excel(workbook, sheet_name="Internal_Links") if "Internal_Links" in xls.sheet_names else pd.DataFrame()
    merge_df = pd.read_excel(workbook, sheet_name="SERP_Merge_Review") if "SERP_Merge_Review" in xls.sheet_names else pd.DataFrame()
    performance_sheet = pick_performance_sheet(xls)
    performance_df = pd.read_excel(workbook, sheet_name=performance_sheet) if performance_sheet else pd.DataFrame()
    technical_qa_sheet = pick_technical_qa_sheet(xls)
    technical_qa_df = pd.read_excel(workbook, sheet_name=technical_qa_sheet) if technical_qa_sheet else pd.DataFrame()

    if not evidence.empty:
        evidence_small = evidence[["Primary Keyword", "Top URLs", "Titles", "Snippets"]].drop_duplicates("Primary Keyword")
        prod = prod.merge(evidence_small, on="Primary Keyword", how="left")

    prod = apply_content_alignment(prod)
    links_df = align_internal_links(links_df, prod)
    df, max_cards = apply_sidebar_filters(prod)
    st.markdown(
        """
        <div class="hero">
          <div class="hero-title">Electric Dirt Bike SEO 架构看板</div>
          <div class="hero-sub">用于审查 Hub / Pillar / Cluster / Page 结构、最终内容映射、真实 H2/H3、规范 URL、内链建议和生产优先级。SERP 仍作为证据层；缓存缺失不会覆盖已审计的内容决策。</div>
        </div>
        """,
        unsafe_allow_html=True,
    )
    metric_filter = render_metrics(df)
    df = apply_metric_filter(df, metric_filter)

    tab_arch, tab_build, tab_serp, tab_links, tab_quality, tab_opposition, tab_performance = st.tabs(["架构视图", "建设队列", "SERP 复核", "内链建议", "质量监工", "对立监工", "数据反馈"])
    with tab_arch:
        missing_serp = int(prod.get("SERP Status", pd.Series("", index=prod.index)).astype(str).ne("ok").sum())
        if missing_serp:
            st.warning(f"SERP 证据边界：{missing_serp}/{len(prod)} 个候选未取得有效缓存。页面生产决策来自语义集群与已完成内容审计，发布前仍应抽样复核实时 SERP。")
        with st.expander("关键词候选之外的必要站点页面", expanded=False):
            st.dataframe(supplemental_pages(), use_container_width=True, hide_index=True)
        render_architecture(df, links_df, max_cards)
    with tab_build:
        render_build_queue(df, links_df)
    with tab_serp:
        render_serp_review(df, merge_df)
    with tab_links:
        render_internal_links(links_df)
    with tab_quality:
        render_quality_gate(df, links_df, merge_df)
    with tab_opposition:
        render_opposition_gate(df, links_df, merge_df)
    with tab_performance:
        render_performance_feedback(performance_df, technical_qa_df)


if __name__ == "__main__":
    main()
