# React & Decap CMS Compatibility Guide

## Version Compatibility

This project uses **React 18.3.1**, which is fully compatible with **Decap CMS 3.x**.

### Package Versions

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "@astrojs/react": "^3.6.2",
  "astro": "^4.16.12",
  "decap-cms": "^3.1.0" (loaded via CDN)
}
```

## Why React 18 (Not React 19)?

Decap CMS 3.x is built and tested with **React 18**. While React 19 was released, Decap CMS has not yet been updated to require React 19.

### Official Compatibility:
- ✅ Decap CMS 3.x + React 18.3.1 = **Fully Compatible**
- ⚠️ Decap CMS 3.x + React 19 = **Not Tested, May Cause Issues**

## Installation

After cloning this project, install dependencies:

```bash
npm install
```

This will install:
- `react@18.3.1` - React core library
- `react-dom@18.3.1` - React DOM renderer
- `@astrojs/react@3.6.2` - Astro React integration
- `@types/react@18.3.12` - TypeScript definitions
- `@types/react-dom@18.3.1` - TypeScript definitions

## Decap CMS Loading

Decap CMS is loaded via CDN in `src/components/CMScript.astro`:

```astro
<script src="https://unpkg.com/decap-cms@^3.1.0/dist/decap-cms.js"></script>
```

The CMS bundles its own React dependencies and doesn't conflict with your project's React 18 installation.

## For Custom CMS Components

If you create custom Decap CMS widgets or preview components:

1. Create React components in `src/components/cms/`
2. Import them in your admin page
3. Use React 18 syntax

```tsx
// src/components/cms/MyCustomWidget.tsx
import React from 'react';

export default function MyCustomWidget() {
  return <div>Custom CMS Widget</div>;
}
```

## Potential Issues & Solutions

### Issue: "Multiple React Versions" Warning

**Cause**: Having both React 18 and React 19 installed

**Solution**: Ensure only React 18 is installed:
```bash
npm ls react react-dom
```

Should show:
```
react@18.3.1
react-dom@18.3.1
```

### Issue: Decap CMS Won't Initialize

**Cause**: Conflicting React versions or missing dependencies

**Solution**:
1. Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. Verify React integration is enabled in `astro.config.mjs`:
```javascript
import react from '@astrojs/react';
integrations: [react(), tailwind(), sitemap()]
```

### Issue: TypeScript Errors with React

**Cause**: Missing type definitions

**Solution**: Ensure devDependencies include:
```json
{
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1"
  }
}
```

## Updating Dependencies

To update dependencies while maintaining React 18 compatibility:

```bash
# Check for updates
npm outdated

# Update non-React packages
npm update @astrojs/tailwind @astrojs/sitemap @astrojs/check

# Keep React at 18.x (DO NOT upgrade to 19 until Decap CMS supports it)
npm install react@^18.3.1 react-dom@^18.3.1
```

## Checking Compatibility Before Updates

Before updating any dependency, check:

1. **Decap CMS Releases**: https://github.com/decap-org/decap-cms/releases
   - Look for React version requirements

2. **Astro React Integration**: https://docs.astro.dev/en/guides/integrations-guide/react/
   - Verify supported React versions

3. **Project package.json**:
   ```bash
   npm ls react
   # Should show: react@18.3.1
   ```

## React 19 Migration (Future)

When Decap CMS officially supports React 19, migration steps will be:

1. Update React:
```bash
npm install react@^19.0.0 react-dom@^19.0.0
```

2. Update type definitions:
```bash
npm install -D @types/react@^19.0.0 @types/react-dom@^19.0.0
```

3. Test Decap CMS functionality

**⚠️ DO NOT upgrade until Decap CMS officially supports React 19**

## Verification

To verify your setup:

```bash
# Check React version
npm list react react-dom

# Check for conflicts
npm ls react

# Run dev server
npm run dev

# Build for production
npm run build
```

All should complete without React-related warnings or errors.

## Additional Resources

- [Decap CMS Documentation](https://decapcms.org/)
- [Astro React Integration](https://docs.astro.dev/en/guides/integrations-guide/react/)
- [React 18 Release Notes](https://react.dev/blog/2022/03/29/react-v18)
