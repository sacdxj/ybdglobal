from __future__ import annotations

from functools import lru_cache
from pathlib import Path
import re

import pandas as pd


BASE_DIR = Path(__file__).resolve().parent
CONTENT_DIR = BASE_DIR.parent / "site-content"
PAGES_DIR = CONTENT_DIR / "pages"


CONTENT_FILE_MAP = {
    "Shop All Electric Dirt Bikes": "shop-all.md",
    "Electric Dirt Bikes for Sale": "shop-all.md",
    "Electric Dirt Bikes for Adults": "adult-dirt-bikes.md",
    "Fast Electric Dirt Bikes 40+ MPH": "adult-fast.md",
    "72V Electric Dirt Bikes": "adult-72v.md",
    "60V Electric Dirt Bikes": "adult-60v.md",
    "Electric Dirt Bikes for Kids": "kids-youth.md",
    "Electric Dirt Bikes for Ages 8-12": "kids-ages-8-12.md",
    "Electric Dirt Bikes for Teens and Youth": "kids-teens.md",
    "Best Electric Dirt Bikes": "best-electric-dirt-bikes.md",
    "Best Budget Electric Dirt Bikes": "price-guide.md",
    "Electric Dirt Bike Price Guide": "price-guide.md",
    "48V Electric Dirt Bike Guide": "youth-voltage-guide.md",
    "36V Electric Dirt Bike Guide": "youth-voltage-guide.md",
    "24V Electric Dirt Bike Guide": "youth-voltage-guide.md",
    "Electric Dirt Bike Range Guide": "range-guide.md",
    "Electric Dirt Bike Motor and Power Guide": "motor-power-guide.md",
    "Electric Dirt Bike Charging Guide": "charging-guide.md",
    "Parts Guide": "parts-maintenance.md",
    "Fat Tire Guide": "parts-maintenance.md",
    "Repair Guide": "repair-service.md",
    "Electric Dirt Bike Financing Guide": "financing.md",
    "Electric Dirt Bike Laws and Riding Rules": "street-legal.md",
    "Street Legal Electric Dirt Bikes": "street-legal.md",
    "Street Legal Dual-Sport Electric Dirt Bikes": "dual-sport.md",
    "How to Register a Street Legal Electric Dirt Bike": "registration-guide.md",
    "Electric Dirt Bike Comparison Guide": "electric-vs-gas.md",
    "Electric Dirt Bike vs Surron": "compare-surron.md",
    "Electric Dirt Bike vs Razor": "compare-razor.md",
    "Talaria Electric Dirt Bike Alternatives": "compare-talaria.md",
    "Stark Electric Dirt Bike Alternatives": "compare-stark-varg.md",
    "Ktm Electric Dirt Bike Alternatives": "compare-ktm.md",
    "Yamaha Electric Dirt Bike Alternatives": "compare-yamaha.md",
    "Honda Electric Dirt Bike Alternatives": "compare-honda.md",
    "Segway Electric Dirt Bike Alternatives": "compare-segway.md",
    "Cake Electric Dirt Bike Alternatives": "compare-cake.md",
    "Kuberg Electric Dirt Bike Alternatives": "compare-kuberg.md",
}

PRICE_CANONICAL = "Electric Dirt Bike Price Guide"
PRICE_PATTERN = re.compile(r"^Electric Dirt Bikes? Under \$|^Electric Dirt Bike for Adults Under \$", re.I)

MERGE_TO_PARENT = {
    "Electric Dirt Bikes for Sale",
    "Best Budget Electric Dirt Bikes",
    "24V Electric Dirt Bike Guide",
    "48V Electric Dirt Bike Guide",
    "36V Electric Dirt Bike Guide",
    "Fat Tire Guide",
    "Electric Dirt Bike Laws and Riding Rules",
}

DECISION_OVERRIDES = {
    "Electric Dirt Bike Financing Guide": "Build later",
    "Electric Dirt Bike Comparison Guide": "Manual review before build",
    "Electric Dirt Bikes for Teens and Youth": "Build later",
}

HEADER_MAIN_FILES = {
    "shop-all.md",
    "adult-dirt-bikes.md",
    "kids-youth.md",
    "street-legal.md",
    "buying-guides.md",
}

HEADER_DROPDOWN_FILES = {
    "adult-fast.md",
    "adult-72v.md",
    "adult-60v.md",
    "kids-ages-8-12.md",
    "kids-teens.md",
    "dual-sport.md",
    "registration-guide.md",
}


def _strip_quotes(value: str) -> str:
    value = str(value or "").strip()
    if len(value) >= 2 and value[0] == value[-1] and value[0] in "\"'":
        return value[1:-1]
    return value


@lru_cache(maxsize=None)
def read_content_page(filename: str) -> dict[str, object]:
    path = PAGES_DIR / filename
    if not path.exists():
        return {"filename": filename, "path": path, "missing": True}
    text = path.read_text(encoding="utf-8")
    parts = text.split("---", 2)
    frontmatter = parts[1] if len(parts) >= 3 else ""
    body = parts[2] if len(parts) >= 3 else text
    meta: dict[str, object] = {"filename": filename, "path": path, "missing": False}
    for line in frontmatter.splitlines():
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        meta[key.strip()] = _strip_quotes(value)
    h1 = re.search(r"(?m)^#\s+(.+)$", body)
    meta["h1"] = h1.group(1).strip() if h1 else meta.get("title", "")
    meta["h2"] = re.findall(r"(?m)^##\s+(.+)$", body)
    meta["h3"] = re.findall(r"(?m)^###\s+(.+)$", body)
    return meta


def content_file_for(candidate: str) -> str:
    if PRICE_PATTERN.search(candidate):
        return "price-guide.md"
    return CONTENT_FILE_MAP.get(candidate, "")


def final_decision(candidate: str, original: str) -> str:
    if candidate in DECISION_OVERRIDES:
        return DECISION_OVERRIDES[candidate]
    if PRICE_PATTERN.search(candidate):
        return "Merge into parent/FAQ"
    if candidate in MERGE_TO_PARENT:
        return "Merge into parent/FAQ"
    return original


def alignment_action(candidate: str, filename: str, decision: str) -> str:
    if decision == "Merge into parent/FAQ":
        if filename == "price-guide.md":
            return "Merge into Price & Budget Guide"
        if filename == "youth-voltage-guide.md":
            return "Merge into 24V vs 36V vs 48V Guide"
        if filename == "shop-all.md":
            return "Merge into Shop All canonical page"
        if filename == "parts-maintenance.md":
            return "Merge into Parts & Maintenance"
        if filename == "street-legal.md":
            return "Merge into Street-Legal Guide"
        return "Merge into canonical page or FAQ"
    return "Standalone page"


def display_page_type(meta: dict[str, object], decision: str) -> str:
    if decision == "Merge into parent/FAQ":
        return "Merged Section / FAQ"
    raw = str(meta.get("pageType") or "").strip()
    labels = {
        "home": "Home",
        "collection": "Collection",
        "collection-pillar": "Collection / Pillar",
        "collection-guide": "Collection / Guide",
        "content-hub": "Content Hub",
        "commercial-buying-guide": "Buying Guide",
        "technical-buying-guide": "Technical Guide",
        "support-buying-guide": "Support Guide",
        "support-guide": "Support / Guide",
        "support-policy": "Support / Policy",
        "contact": "Support / Contact",
        "legal-guide": "Legal / Compliance Guide",
        "legal-product-guide": "Legal / Product Guide",
        "legal-how-to": "Legal / How-To",
        "blog-hub": "Blog Hub",
        "comparison-blog": "Blog / Comparison",
        "research-blog": "Blog / Research",
        "comparison-buying-guide": "Buying Guide / Comparison",
        "product-prototype": "Product Prototype / Hold",
        "product": "Product Detail Page",
    }
    return labels.get(raw, raw.replace("-", " ").title() or "Content Page")


def menu_location(filename: str, decision: str) -> str:
    if decision == "Merge into parent/FAQ":
        return "SEO Section / Not Standalone"
    if filename.startswith("compare-"):
        return "Blog / SEO Only"
    if filename in HEADER_MAIN_FILES:
        return "Header Main"
    if filename in HEADER_DROPDOWN_FILES:
        return "Header Dropdown"
    if filename in {
        "parts-maintenance.md",
        "repair-service.md",
        "shipping.md",
        "financing.md",
        "warranty-returns.md",
        "contact.md",
    }:
        return "Footer / Customer Support"
    return "Buying Guides / SEO"


def apply_content_alignment(prod: pd.DataFrame) -> pd.DataFrame:
    aligned = prod.copy()
    rows: list[dict[str, object]] = []
    for _, row in aligned.iterrows():
        candidate = str(row.get("Expanded Page Candidate") or "").strip()
        filename = content_file_for(candidate)
        meta = read_content_page(filename) if filename else {"missing": True}
        semantic = str(row.get("Semantic Production Decision") or "").strip()
        original = semantic or str(row.get("Production Decision") or "").strip()
        decision = final_decision(candidate, original)
        final_url = str(meta.get("slug") or row.get("Recommended URL Slug") or "").strip()
        final_h1 = str(meta.get("h1") or row.get("Recommended H1") or candidate).strip()
        final_h2 = " | ".join(str(x) for x in meta.get("h2", [])[:8])
        final_h3 = " | ".join(str(x) for x in meta.get("h3", [])[:10])
        content_status = str(meta.get("status") or "missing-content-map").strip()
        action = alignment_action(candidate, filename, decision)
        rows.append(
            {
                "Original Production Decision": row.get("Production Decision", ""),
                "Effective Semantic Decision": original,
                "Final Content Decision": decision,
                "Final URL": final_url,
                "Final H1": final_h1,
                "Final Page Type": display_page_type(meta, decision),
                "Final H2": final_h2,
                "Final H3": final_h3,
                "Final Content Status": content_status,
                "Content File": str(meta.get("path") or ""),
                "Alignment Action": action,
                "Final Menu Location": menu_location(filename, decision),
                "Canonical Candidate": PRICE_CANONICAL if filename == "price-guide.md" else final_h1,
                "Alignment Mapped": "Yes" if filename and not meta.get("missing") else "No",
            }
        )
    additions = pd.DataFrame(rows, index=aligned.index)
    for column in additions.columns:
        aligned[column] = additions[column]
    aligned["Recommended URL Slug"] = aligned["Final URL"]
    aligned["Recommended H1"] = aligned["Final H1"]
    aligned["Recommended Page Type"] = aligned["Final Page Type"]
    aligned["Recommended H2"] = aligned["Final H2"]
    aligned["Recommended H3"] = aligned["Final H3"]
    return aligned


def align_internal_links(links: pd.DataFrame, prod: pd.DataFrame) -> pd.DataFrame:
    if links.empty:
        return links.copy()
    aligned = links.copy()
    source_map = (
        prod[["Primary Keyword", "Final URL"]]
        .drop_duplicates("Primary Keyword")
        .set_index("Primary Keyword")["Final URL"]
        .to_dict()
    )
    if "Source Primary Keyword" in aligned.columns:
        aligned["Source URL"] = (
            aligned["Source Primary Keyword"].map(source_map).fillna(aligned.get("Source URL", ""))
        )
    if "Target Primary Keyword" in aligned.columns:
        aligned["Target URL"] = (
            aligned["Target Primary Keyword"].map(source_map).fillna(aligned.get("Target URL", ""))
        )
    if {"Source URL", "Target URL"}.issubset(aligned.columns):
        aligned = aligned[aligned["Source URL"].ne(aligned["Target URL"])].copy()
        dedupe = [
            column
            for column in ["Source URL", "Target URL", "Anchor Text"]
            if column in aligned.columns
        ]
        aligned = aligned.drop_duplicates(dedupe)
    return aligned.reset_index(drop=True)


def supplemental_pages() -> pd.DataFrame:
    files = [
        "home.md",
        "buying-guides.md",
        "compare-hub.md",
        "battery-life-guide.md",
        "shipping.md",
        "warranty-returns.md",
        "contact.md",
        "product-g1-24v-kids-electric-dirt-bike.md",
        "product-k2-48-mx-1214.md",
        "product-k2-48-my-1417.md",
        "product-k2-60-my-1417.md",
        "product-k2-72-my-1417.md",
        "product-k2-72-lz-1719.md",
        "product-x1-48-mx-1214.md",
        "product-x1-48-my-1417.md",
        "product-x1-60-my-1417.md",
    ]
    rows = []
    for filename in files:
        meta = read_content_page(filename)
        rows.append(
            {
                "Page": meta.get("h1", ""),
                "Final URL": meta.get("slug", ""),
                "Final Page Type": display_page_type(meta, ""),
                "Final Content Status": meta.get("status", ""),
                "Content File": str(meta.get("path", "")),
                "Reason Added": (
                    "Product SKU draft; requires final brand, retail price, inventory, media, policies, and verified specifications"
                    if filename.startswith("product-")
                    else "Required ecommerce navigation, trust, support, or content-hub page"
                ),
            }
        )
    return pd.DataFrame(rows)
