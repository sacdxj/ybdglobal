# USB Connectivity SEO Workspace

This is the active SEO workspace for USB cables, HDMI cables, DisplayPort cables, hubs, docking stations and chargers.

## Inputs

- Source workbook: `C:\Users\Administrator\Downloads\USB charging cable.xlsx`
- Base cleaning: `..\outputs\usb-seo\usb_keyword_cleaning_v2.xlsx`
- Manual audit: `..\outputs\usb-seo\usb_manual_review_audit_v1.xlsx`
- Reviewed cleaning used by the architecture: `..\outputs\usb-seo\usb_keyword_cleaning_reviewed_v1.xlsx`
- Cleaned mapping: `..\outputs\usb-seo\usb_keyword_page_plan_v2.xlsx`
- Full 21-layer architecture: `..\outputs\usb-seo\usb_connectivity_keyword_architecture_full.xlsx`

## Dashboard

Full static dashboard:

```powershell
node dashboard_server.js
```

Open `http://127.0.0.1:8602/`.

The Streamlit viewer is retained only for quick table filtering. The static dashboard is the complete architecture and evidence control room.

The legacy Electric Dirt Bike dashboard remains available only as migration reference.
