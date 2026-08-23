import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const files = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html') && entry.name !== '404.html') files.push(full);
  }
};
walk(root);

const strip = (html) => html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z#0-9]+;/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const rows = files.map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  const body = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  const words = strip(body).split(/\s+/).filter(Boolean).length;
  const images = (body.match(/<img\b/gi) ?? []).length;
  const visualSummaries = (body.match(/page-visual-summary/g) ?? []).length;
  const productGalleries = (body.match(/product-gallery/g) ?? []).length;
  const paragraphs = (body.match(/<p\b/gi) ?? []).length;
  const relative = path.relative(root, file).replaceAll('\\', '/').replace(/index\.html$/, '') || '/';
  const risk = words > 650 && images === 0 && visualSummaries === 0 ? 'high'
    : words > 450 && images === 0 ? 'review'
    : 'ok';
  return { route: `/${relative}`.replaceAll('//', '/'), words, paragraphs, images, visualSummaries, productGalleries, risk };
}).sort((a,b) => b.words-a.words);

console.log(JSON.stringify({ pages: rows.length, high: rows.filter(r=>r.risk==='high'), review: rows.filter(r=>r.risk==='review'), rows }, null, 2));
