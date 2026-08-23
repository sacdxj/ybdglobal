const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "outputs", "usb-seo");
const host = "127.0.0.1";
const port = Number(process.env.PORT || 8602);
const types = { ".html": "text/html; charset=utf-8", ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ".json": "application/json; charset=utf-8" };

http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  const relative = pathname === "/" ? "usb_connectivity_seo_dashboard.html" : pathname.replace(/^\/+/, "");
  const file = path.resolve(root, relative);
  if (!file.startsWith(`${root}${path.sep}`)) { response.writeHead(403); response.end("Forbidden"); return; }
  fs.readFile(file, (error, data) => {
    if (error) { response.writeHead(error.code === "ENOENT" ? 404 : 500); response.end("Not found"); return; }
    response.writeHead(200, { "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-store" });
    response.end(data);
  });
}).listen(port, host, () => console.log(`USB SEO full dashboard: http://${host}:${port}/`));
