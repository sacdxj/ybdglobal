@echo off
setlocal
set "PYTHONPATH=E:\trae\USB charging cable\.codex_tmp\streamlit-deps"
set "STREAMLIT_BROWSER_GATHER_USAGE_STATS=false"
set "STREAMLIT_SERVER_HEADLESS=true"
"C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m streamlit run "E:\trae\USB charging cable\usb-connectivity-seo\usb_seo_dashboard.py" --global.developmentMode false --server.address 127.0.0.1 --server.port 8501 >> "E:\trae\USB charging cable\outputs\usb-seo\dashboard-v2.log" 2>&1
