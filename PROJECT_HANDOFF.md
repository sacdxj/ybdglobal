# USB Connectivity Project Handoff

## Active project areas

- `astro/`: private-review Astro website.
- `usb-connectivity-seo/`: keyword cleaning, full architecture, validation and Dashboard scripts.
- `outputs/usb-seo/usb_keyword_cleaning_v2.xlsx`: cleaned keyword decisions.
- `outputs/usb-seo/usb_keyword_page_plan_v2.xlsx`: one-keyword-one-URL page plan.
- `outputs/usb-seo/usb_connectivity_keyword_architecture_full.xlsx`: complete 21-layer architecture workbook.
- `outputs/usb-seo/usb_full_architecture_validation.xlsx`: strict local validation report.
- `outputs/usb-seo/usb_connectivity_seo_dashboard.html`: full static Dashboard.
- `strategy/`: positioning, cleaning boundary, SERP sampling and planning audit.
- `site-content/`: evidence, schema and editorial requirements.
- `handoff/skills/seo-skill-usb-connectivity/`: installable project Skill backup.
- `archive/`: recoverable legacy files and assets.

The `electric dirt bike/` and `obsidian-electric-dirt-bike/` directories remain read-only migration references. They are not active USB data sources.

## New-computer sequence

1. Copy the complete project directory.
2. Copy `handoff/skills/seo-skill-usb-connectivity` to `C:\Users\<username>\.codex\skills\seo-skill-usb-connectivity`.
3. Reinstall Astro dependencies with `npm.cmd ci` inside `astro/`.
4. Reinstall Python dependencies required by pandas/openpyxl and optional Streamlit.
5. Rebuild the keyword pipeline in this order:

```powershell
python .\usb-connectivity-seo\clean_usb_keywords_v2.py
python .\usb-connectivity-seo\build_page_plan_v2.py
python .\usb-connectivity-seo\build_usb_full_architecture.py
python .\usb-connectivity-seo\validate_usb_full_architecture.py
python .\usb-connectivity-seo\export_usb_full_dashboard.py
```

6. Start the full static Dashboard:

```powershell
node .\usb-connectivity-seo\dashboard_server.js
```

Open `http://127.0.0.1:8602/`.

7. Validate the private Astro site:

```powershell
cd .\astro
$env:ASTRO_TELEMETRY_DISABLED='1'
npm.cmd run build
npm.cmd run check:decision
npm.cmd run check:links
npm.cmd run check:launch
npm.cmd run check:react
```

## Current state

- Full keyword architecture: structurally complete and locally validated.
- Live page-level top-10 SERP evidence: pending for all 44 candidates.
- External semantic/Gemini review: pending explicit authorization.
- Website: functional private prototype; not aligned to all 44 planned URLs.
- Public launch: blocked by missing company identity, domain, RFQ receiver, product/SKU evidence, factory evidence, certifications and policies.

Do not set `PUBLIC_NOINDEX=false` until all launch gates are approved.
