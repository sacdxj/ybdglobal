import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = normalize(join(fileURLToPath(new URL('..', import.meta.url)), 'dist'));
const port = Number(process.env.PORT || 5174);
const host = process.env.HOST || '0.0.0.0';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
};

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split('?')[0]).replace(/^\/+/, '');
  const requested = normalize(join(root, cleanPath));
  if (!requested.startsWith(root)) return null;
  if (existsSync(requested) && statSync(requested).isFile()) return requested;
  const indexFile = join(requested, 'index.html');
  if (existsSync(indexFile)) return indexFile;
  return join(root, '404.html');
}

const server = createServer((request, response) => {
  const filePath = resolveFile(request.url || '/');
  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  const extension = extname(filePath);
  response.writeHead(filePath.endsWith('404.html') ? 404 : 200, {
    'content-type': mimeTypes[extension] || 'application/octet-stream',
    'cache-control': 'no-store',
  });
  createReadStream(filePath).pipe(response);
});

server.listen(port, host, () => {
  console.log(`USB Connectivity preview: http://127.0.0.1:${port}/`);
  console.log(`Network preview: http://192.168.0.79:${port}/`);
});
