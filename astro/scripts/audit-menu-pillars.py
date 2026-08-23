from pathlib import Path
import pandas as pd

ROOT = Path(__file__).resolve().parents[2]
book = ROOT / "outputs" / "usb-seo" / "usb_connectivity_keyword_architecture_full.xlsx"
df = pd.read_excel(book, sheet_name="Production_Batches")

cols = [
    "Hub", "Macro Pillar", "Topic", "Page Tier", "Page Role", "Site Section",
    "Primary Keyword", "Recommended URL Slug", "Recommended H1",
    "Production Decision", "Production Batch", "Page Priority Score",
    "Brief Approval Status", "SERP Recommended Decision",
]
cols = [c for c in cols if c in df.columns]

mask = (
    df["Page Tier"].astype(str).isin(["L0 Hub", "L1 Parent"])
    | df["Page Role"].astype(str).str.contains("Pillar|Category|Landing", case=False, na=False)
)
out = df.loc[mask, cols].sort_values(
    ["Brief Approval Status", "Page Priority Score"], ascending=[True, False]
)
print(out.to_string(index=False))
print("\nCOUNTS_BY_SECTION")
print(out.groupby("Site Section", dropna=False).size().sort_values(ascending=False).to_string())
