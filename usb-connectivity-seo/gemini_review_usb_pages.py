from __future__ import annotations

import argparse
import json
import os
import re
import time
import urllib.error
import urllib.request
from pathlib import Path
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
INPUT = ROOT / "outputs" / "usb-seo" / "usb_connectivity_keyword_architecture_full.xlsx"
OUTPUT = ROOT / "outputs" / "usb-seo" / "usb_gemini_page_reviews.xlsx"
API_URL = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"

SYSTEM = """You are a strict B2B SEO quality-control reviewer for an international connectivity-accessories manufacturer/supplier website.
Scope: USB/USB-C/USB4 cables, HDMI cables, DisplayPort cables, USB-C hubs, docking stations and USB-C/GaN chargers.
Target buyers: wholesalers, distributors, importers, electronics brands, private-label programs and ecommerce retailers.
Conversion: RFQ, configuration, sample and evidence request; not consumer checkout.
Reject consumer troubleshooting, retailer navigation, device-brand replacement queries, cross-interface converters outside scope, and weak informational junk.
Judge whether each keyword cluster deserves a standalone page, should merge into its parent, be held for live SERP review, or be filtered.
Do not assume claims, certifications, wattage, bandwidth, MOQ or lead time are proven.
Return strict compact JSON only."""


def prompt(row: pd.Series) -> str:
    return f"""Review this USB connectivity SEO page cluster.
Hub: {row.get('Hub','')}
Pillar: {row.get('Macro Pillar','')}
Candidate: {row.get('Expanded Page Candidate','')}
Current URL: {row.get('Cluster','')}
Primary keyword: {row.get('Primary Keyword','')}
Page role: {row.get('Page Role','')}
Current decision: {row.get('Production Decision','')}
Keyword count: {row.get('Keyword Count','')}
Total volume: {row.get('Total Search Volume','')}
Risk flags: {row.get('Risk Flags','')}
Sample keywords: {str(row.get('Supporting Keywords',''))[:1100]}

Judge business fit, shared search intent, standalone-page need, primary keyword quality, URL fit and whether live SERP review is mandatory."""


SCHEMA = {
    "type": "OBJECT",
    "properties": {
        "decision": {"type": "STRING", "enum": ["build_page", "merge_into_parent", "filter_noise", "move_url", "manual_serp_review"]},
        "confidence": {"type": "INTEGER", "minimum": 1, "maximum": 5},
        "business_fit": {"type": "STRING", "enum": ["high", "medium", "low"]},
        "intent_purity": {"type": "STRING", "enum": ["high", "medium", "low"]},
        "primary_keyword_ok": {"type": "BOOLEAN"},
        "better_primary_keyword": {"type": "STRING"},
        "recommended_url": {"type": "STRING"},
        "serp_required": {"type": "BOOLEAN"},
        "reason": {"type": "STRING"},
        "content_angle": {"type": "STRING"},
    },
    "required": ["decision", "confidence", "business_fit", "intent_purity", "primary_keyword_ok", "better_primary_keyword", "recommended_url", "serp_required", "reason", "content_angle"],
}


def extract(value: str) -> dict:
    match = re.search(r"\{.*\}", value, re.S)
    return json.loads(match.group(0) if match else value)


def call(text_prompt: str, key: str, model: str, retries: int) -> dict:
    body = {
        "systemInstruction": {"parts": [{"text": SYSTEM}]},
        "contents": [{"role": "user", "parts": [{"text": text_prompt}]}],
        "generationConfig": {"temperature": 0.1, "maxOutputTokens": 1500, "responseMimeType": "application/json", "responseSchema": SCHEMA},
    }
    req = urllib.request.Request(API_URL.format(model=model), data=json.dumps(body).encode(), headers={"Content-Type": "application/json", "x-goog-api-key": key}, method="POST")
    error = None
    for attempt in range(retries + 1):
        try:
            with urllib.request.urlopen(req, timeout=90) as response:
                data = json.loads(response.read().decode())
            return extract(data["candidates"][0]["content"]["parts"][0]["text"])
        except Exception as exc:
            error = exc
            if attempt < retries:
                time.sleep(min(10, 2 ** attempt))
    raise RuntimeError(type(error).__name__)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", default="gemini-2.5-flash")
    parser.add_argument("--max-rows", type=int, default=0)
    parser.add_argument("--retries", type=int, default=2)
    args = parser.parse_args()
    key = os.environ.get("GEMINI_API_KEY")
    if not key:
        raise RuntimeError("GEMINI_API_KEY is not set")
    pages = pd.read_excel(INPUT, sheet_name="Production_Batches").sort_values(["Production Decision", "Total Search Volume"], ascending=[True, False])
    if args.max_rows:
        pages = pages.head(args.max_rows)
    rows = []
    for _, row in pages.iterrows():
        base = row.to_dict()
        try:
            result = call(prompt(row), key, args.model, args.retries)
            base.update(result)
            base["review_status"] = "completed"
        except Exception as exc:
            base.update({"decision": "manual_serp_review", "confidence": 1, "business_fit": "unknown", "intent_purity": "unknown", "primary_keyword_ok": False, "better_primary_keyword": row["Primary Keyword"], "recommended_url": row["Cluster"], "serp_required": True, "reason": f"API review failed: {type(exc).__name__}", "content_angle": "manual review"})
            base["review_status"] = "failed"
        rows.append(base)
        time.sleep(0.15)
    reviews = pd.DataFrame(rows)
    summary = reviews.groupby(["review_status", "decision"], dropna=False).size().reset_index(name="count")
    with pd.ExcelWriter(OUTPUT, engine="openpyxl") as writer:
        summary.to_excel(writer, sheet_name="Gemini_Review_Summary", index=False)
        reviews.to_excel(writer, sheet_name="Gemini_Page_Reviews", index=False)
    print(OUTPUT)
    print(summary.to_string(index=False))


if __name__ == "__main__":
    main()
