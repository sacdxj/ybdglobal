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

if (!fs.existsSync(dist)) {
  console.error('Missing dist/. Run npm run build before check:public-launch.');
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
  { label: 'temporary working identity', pattern: /Connectivity Supply|connectivity-supply\.invalid/i },
];

const findings = [];

for (const file of htmlFiles) {
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
const noindexPages = htmlFiles
  .filter((file) => fs.readFileSync(file, 'utf8').includes('name="robots" content="noindex, nofollow"'))
  .map((file) => path.relative(dist, file).replaceAll(path.sep, '/'));
const productionSite = process.env.PUBLIC_SITE_URL;
const canonicalIssues = htmlFiles
  .filter((file) => !productionSite || !fs.readFileSync(file, 'utf8').includes(`rel="canonical" href="${productionSite.replace(/\/$/, '')}/`))
  .map((file) => path.relative(dist, file).replaceAll(path.sep, '/'));

const result = {
  pages: htmlFiles.length,
  publicIndexing: {
    robotsAllowAll: /User-agent:\s*\*/i.test(robots) && /Allow:\s*\//i.test(robots) && !/Disallow:\s*\//i.test(robots),
    noindexPages,
    productionSiteConfigured: Boolean(productionSite && !productionSite.endsWith('.invalid')),
    sitemapUsesProductionDomain: Boolean(productionSite && robots.includes(`Sitemap: ${productionSite.replace(/\/$/, '')}/sitemap-index.xml`)),
    canonicalIssues,
  },
  forbiddenFindings: findings,
};

console.log(JSON.stringify(result, null, 2));

if (
  !result.publicIndexing.productionSiteConfigured ||
  !result.publicIndexing.robotsAllowAll ||
  result.publicIndexing.noindexPages.length > 0 ||
  !result.publicIndexing.sitemapUsesProductionDomain ||
  result.publicIndexing.canonicalIssues.length > 0 ||
  findings.length > 0
) {
  process.exitCode = 1;
}
