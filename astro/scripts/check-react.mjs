#!/usr/bin/env node

/**
 * React compatibility checker.
 * Decap CMS 3.x should stay on React 18 until that integration is revalidated.
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const PACKAGE_JSON = 'package.json';
const REACT_VERSION_RANGE = '^18.0.0';

function isReact18Range(versionRange) {
  return /^[~^]?18(\.|$)/.test(versionRange);
}

console.log('Checking React compatibility...\n');

try {
  const packagePath = resolve(PACKAGE_JSON);
  const pkg = JSON.parse(readFileSync(packagePath, 'utf-8'));

  const reactVersion = pkg.dependencies?.react;
  const reactDOMVersion = pkg.dependencies?.['react-dom'];
  const astroReactVersion = pkg.dependencies?.['@astrojs/react'];

  if (!reactVersion) {
    console.error('React not found in dependencies.');
    console.log(`   Run: npm install react@${REACT_VERSION_RANGE} react-dom@${REACT_VERSION_RANGE}`);
    process.exit(1);
  }

  if (!isReact18Range(reactVersion)) {
    console.error(`Wrong React version: ${reactVersion}`);
    console.log(`   Expected: React ${REACT_VERSION_RANGE} for Decap CMS compatibility`);
    console.log(`   Current: ${reactVersion}`);
    console.log('\n   Decap CMS 3.x requires React 18.');
    console.log('   Do not upgrade to React 19 until Decap CMS support is verified.');
    console.log(`\n   To fix: npm install react@${REACT_VERSION_RANGE} react-dom@${REACT_VERSION_RANGE}`);
    process.exit(1);
  }

  console.log('React version:', reactVersion);
  console.log('React DOM version:', reactDOMVersion);
  console.log('Astro React integration:', astroReactVersion || 'Not installed');

  const typesReact = pkg.devDependencies?.['@types/react'];
  const typesReactDOM = pkg.devDependencies?.['@types/react-dom'];

  if (!typesReact || !typesReactDOM) {
    console.warn('\nTypeScript type definitions missing.');
    console.warn('   Recommended: npm install -D @types/react@^18 @types/react-dom@^18');
  } else {
    console.log('@types/react:', typesReact);
    console.log('@types/react-dom:', typesReactDOM);
  }

  console.log('\nAll checks passed. React 18 is properly configured.\n');
  console.log('For more information, see REACT_COMPATIBILITY.md\n');
} catch (error) {
  console.error('Error reading package.json:', error.message);
  process.exit(1);
}
