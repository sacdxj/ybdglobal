import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const htmlFiles = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, name);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (name.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
}

walk(dist);

const routes = new Set(['/']);
const files = new Set();

for (const file of htmlFiles) {
  const relative = path.relative(dist, file).replaceAll(path.sep, '/');
  files.add(`/${relative}`);
  const directory = path.dirname(relative);
  routes.add(directory === '.' ? '/' : `/${directory}/`);
}

for (const name of fs.readdirSync(dist)) {
  files.add(`/${name}`);
}

const badLinks = [];
const hrefPattern = /href="(\/[^"#?]+)"/g;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(hrefPattern)) {
    const rawHref = match[1];
    if (rawHref.startsWith('/_assets/') || rawHref.startsWith('/assets/')) continue;
    if (files.has(rawHref)) continue;
    const normalized = rawHref.endsWith('/') ? rawHref : `${rawHref}/`;
    if (!routes.has(normalized)) {
      badLinks.push({
        file: path.relative(dist, file).replaceAll(path.sep, '/'),
        href: rawHref,
      });
    }
  }
}

console.log(JSON.stringify({ pages: htmlFiles.length, badLinks }, null, 2));

if (badLinks.length > 0) {
  process.exitCode = 1;
}
