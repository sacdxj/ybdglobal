const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "outputs");
const host = "0.0.0.0";
const port = 8501;
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".csv": "text/csv; charset=utf-8",
  ".png": "image/png",
};

http
  .createServer((request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
    const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
    const filePath = path.resolve(root, relativePath);

    if (!filePath.startsWith(`${path.resolve(root)}${path.sep}`)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.writeHead(error.code === "ENOENT" ? 404 : 500);
        response.end(error.code === "ENOENT" ? "Not found" : "Server error");
        return;
      }
      response.writeHead(200, {
        "Content-Type": contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      });
      response.end(data);
    });
  })
  .listen(port, host);
