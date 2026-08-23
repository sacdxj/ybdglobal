import sharp from 'sharp';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(currentDir, '../public/images');

function processDirectory(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name.match(/\.(png|jpg|jpeg|avif)$/i) && !entry.name.includes('-original')) {
      const webpPath = fullPath.replace(/\.(png|jpg|jpeg|avif)$/i, '.webp');

      if (existsSync(webpPath)) {
        console.log('SKIP (exists):', relative(imagesDir, fullPath));
        continue;
      }

      sharp(fullPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(webpPath)
        .then((info) => {
          const originalSize = statSync(fullPath).size;
          const savings = Math.round((1 - info.size / originalSize) * 100);
          console.log(
            'OK:',
            relative(imagesDir, fullPath),
            '->',
            `${Math.round(info.size / 1024)}KB`,
            `(${savings}% saved)`
          );
        })
        .catch((error) => console.error('ERROR:', fullPath, error.message));
    }
  }
}

console.log('Converting images to WebP...');
processDirectory(imagesDir);
console.log('Done!');
