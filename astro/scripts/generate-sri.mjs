/**
 * Generate an SRI hash for the pinned Decap CMS script.
 *
 * Usage:
 *   node scripts/generate-sri.mjs
 */

import { createHash } from 'node:crypto';
import { createWriteStream, readFileSync, unlinkSync } from 'node:fs';
import { get } from 'node:https';
import { join } from 'node:path';

const CDN_URL = 'https://unpkg.com/decap-cms@3.1.0/dist/decap-cms.js';
const TEMP_FILE = join(process.cwd(), 'temp-decap-cms.js');

export function generateSRI(filePath) {
  const fileContent = readFileSync(filePath);
  const hash = createHash('sha384').update(fileContent).digest('base64');
  return `sha384-${hash}`;
}

async function download(url, targetPath) {
  await new Promise((resolve, reject) => {
    get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Download failed with status ${response.statusCode}`));
        return;
      }

      const fileStream = createWriteStream(targetPath);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(resolve);
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function generateCDNSRI() {
  console.log('Downloading pinned Decap CMS script...');
  await download(CDN_URL, TEMP_FILE);

  const sri = generateSRI(TEMP_FILE);
  unlinkSync(TEMP_FILE);

  console.log('\nSRI hash generated:');
  console.log(sri);
  console.log('\nUse this value in the CMS script integrity attribute.');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  generateCDNSRI().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}
