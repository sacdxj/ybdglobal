# USB Connectivity SEO Dashboard

The complete architecture dashboard is the canonical review interface.

From the project root:

```powershell
Set-Location .\usb-connectivity-seo
node .\dashboard_server.js
```

Open `http://127.0.0.1:8602/`.

It displays the full 21-layer workbook at
`outputs\usb-seo\usb_connectivity_keyword_architecture_full.xlsx`, including
keyword decisions, page architecture, merge controls, internal links, evidence
status and publication gates.

The Streamlit viewer can still be started for quick table filtering:

```powershell
cmd /c ".\usb-connectivity-seo\run_dashboard.cmd"
```

That viewer reads `outputs\usb-seo\usb_keyword_page_plan_v2.xlsx` and is not the
final validation dashboard.
