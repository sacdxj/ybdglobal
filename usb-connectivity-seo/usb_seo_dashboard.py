from pathlib import Path
import pandas as pd
import streamlit as st

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_BOOK = ROOT / "outputs" / "usb-seo" / "usb_keyword_page_plan_v2.xlsx"

st.set_page_config(page_title="USB Connectivity SEO", page_icon="🔌", layout="wide")
st.title("USB Connectivity SEO Control Room")
st.caption("Keyword → intent → page → RFQ, with evidence gates before publication")

book = Path(st.sidebar.text_input("Mapping workbook", str(DEFAULT_BOOK)))
if not book.exists():
    st.error(f"Workbook not found: {book}")
    st.stop()

@st.cache_data(show_spinner=False)
def load(path: str, stamp: float):
    return {name: pd.read_excel(path, sheet_name=name) for name in pd.ExcelFile(path).sheet_names}

sheets = load(str(book), book.stat().st_mtime)
library = sheets["SEO_Keyword_Library"]
pages = sheets["Page_Clusters"]
discarded = sheets["Discarded_Keywords"]

c1, c2, c3, c4 = st.columns(4)
c1.metric("Retained keywords", f"{len(library):,}")
c2.metric("Mapped pages", f"{pages['assigned_url'].nunique():,}")
c3.metric("Measured volume", f"{int(library['search_volume'].fillna(0).sum()):,}")
c4.metric("Discarded", f"{len(discarded):,}")

tab_pages, tab_keywords, tab_review, tab_sitemap = st.tabs(["Page plan", "Keyword library", "Review queue", "Sitemap"])

with tab_pages:
    priorities = ["All"] + sorted(pages["Implementation_Priority"].dropna().astype(str).unique().tolist())
    priority = st.selectbox("Priority", priorities)
    view = pages if priority == "All" else pages[pages["Implementation_Priority"].astype(str) == priority]
    st.dataframe(view, use_container_width=True, hide_index=True)

with tab_keywords:
    query = st.text_input("Filter keyword or URL")
    view = library
    if query:
        mask = library["keyword"].astype(str).str.contains(query, case=False, na=False) | library["assigned_url"].astype(str).str.contains(query, case=False, na=False)
        view = library[mask]
    st.dataframe(view, use_container_width=True, hide_index=True)

with tab_review:
    review = library[library["serp_validation_required"].fillna(False).astype(bool)]
    st.warning("These rows need SERP or human review before final page split and content approval.")
    st.dataframe(review, use_container_width=True, hide_index=True)

with tab_sitemap:
    st.dataframe(sheets["Final_Sitemap"], use_container_width=True, hide_index=True)

st.divider()
st.caption("Zero-volume manual seed terms are strategy inputs, not proof of zero demand. Product and factory claims require source evidence.")
