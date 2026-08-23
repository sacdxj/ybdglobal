import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const htmlFiles = [];
const searchableFiles = [];
const searchableExtensions = new Set(['.html', '.svg', '.css', '.xml', '.txt', '.json', '.js']);

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, name);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else {
      if (name.endsWith('.html')) htmlFiles.push(fullPath);
      if (searchableExtensions.has(path.extname(name).toLowerCase())) searchableFiles.push(fullPath);
    }
  }
}

if (!fs.existsSync(dist)) {
  console.error('Missing dist/. Run npm run build before check:launch.');
  process.exit(1);
}

walk(dist);

const forbiddenPatterns = [
  { label: 'example.com placeholder', pattern: /example\.com/i },
  { label: 'Axiterm legacy brand', pattern: /axiterm/i },
  { label: 'Axiterm legacy email', pattern: /sales@axitermmfg\.com/i },
  { label: 'Axiterm legacy domain', pattern: /axitermmfg\.com/i },
  { label: 'internal data placeholder', pattern: /DATA NEEDED|PRODUCT BLOCK|COMPONENT NOTE|REVIEW NEEDED/i },
  { label: 'draft status marker', pattern: /draft-data-needed|draft-review-needed|hold-/i },
  { label: 'legacy Ovkara brand', pattern: /ovkara/i },
  { label: 'legacy electric dirt bike category', pattern: /electric dirt bike|street-legal|surron|talaria/i },
  { label: 'legacy bike SKU', pattern: /\b(?:G1|K2|X1)[ -]?(?:24|48|60|72)/i },
];

const findings = [];

for (const file of searchableFiles) {
  const html = fs.readFileSync(file, 'utf8');
  for (const item of forbiddenPatterns) {
    if (item.pattern.test(html)) {
      findings.push({
        file: path.relative(dist, file).replaceAll(path.sep, '/'),
        issue: item.label,
      });
    }
  }
}

const robotsPath = path.join(dist, 'robots.txt');
const robots = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf8') : '';
const hasNoindexMeta = htmlFiles.every((file) => {
  const html = fs.readFileSync(file, 'utf8');
  const isRedirect = html.includes('http-equiv="refresh"');
  return isRedirect
    ? html.includes('name="robots" content="noindex"')
    : html.includes('name="robots" content="noindex, nofollow"');
});

const result = {
  pages: htmlFiles.length,
  searchableFiles: searchableFiles.length,
  privateReview: {
    robotsDisallowAll: /User-agent:\s*\*/i.test(robots) && /Disallow:\s*\//i.test(robots),
    allPagesNoindex: hasNoindexMeta,
  },
  forbiddenFindings: findings,
};

console.log(JSON.stringify(result, null, 2));

if (!result.privateReview.robotsDisallowAll || !result.privateReview.allPagesNoindex || findings.length > 0) {
  process.exitCode = 1;
}
