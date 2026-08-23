@echo off
cd /d "%~dp0dist"
"C:\Users\hzthu\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m http.server 5173 --bind 0.0.0.0 > "%~dp0preview-static.log" 2> "%~dp0preview-static.err.log"
