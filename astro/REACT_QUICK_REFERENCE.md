# React Compatibility Quick Reference

## ✅ Correct Configuration

```json
{
  "dependencies": {
    "react": "^18.3.1",          // ✅ Latest React 18
    "react-dom": "^18.3.1",      // ✅ Matching DOM
    "@astrojs/react": "^3.6.2",  // ✅ Astro React integration
    "astro": "^4.16.12",
    "decap-cms": "^3.1.0"        // ✅ Via CDN
  }
}
```

## ❌ Common Mistakes

### Mistake 1: Using React 19

```json
{
  "dependencies": {
    "react": "^19.0.0"    // ❌ NOT compatible with Decap CMS
  }
}
```

**Problem**: Decap CMS 3.x doesn't support React 19 yet

**Fix**:
```bash
npm install react@^18.3.1 react-dom@^18.3.1
```

### Mistake 2: Missing React Integration

```javascript
// astro.config.mjs - WRONG
integrations: [tailwind(), sitemap()]  // Missing React
```

**Problem**: React components won't work

**Fix**:
```javascript
import react from '@astrojs/react';
integrations: [react(), tailwind(), sitemap()]
```

### Mistake 3: Type Definition Mismatch

```json
{
  "devDependencies": {
    "@types/react": "^19.0.0"    // ❌ Wrong version
  }
}
```

**Fix**:
```bash
npm install -D @types/react@^18 @types/react-dom@^18
```

## 🔍 Verify Your Setup

Run the compatibility checker:
```bash
npm run check:react
```

Expected output:
```
✅ React version: 18.3.1
✅ React DOM version: 18.3.1
✅ @types/react: 18.3.x
✅ @types/react-dom: 18.3.x
```

## 🚨 Troubleshooting

### Error: "Multiple React instances"

**Cause**: npm installed React 19 as a dependency of another package

**Fix**:
```bash
# Check what's using React 19
npm ls react

# Force React 18
npm install react@18.3.1 react-dom@18.3.1 --save-exact
```

### Error: "Cannot find module 'react'"

**Cause**: React not installed

**Fix**:
```bash
npm install react@^18.3.1 react-dom@^18.3.1
npm install -D @types/react@^18 @types/react-dom@^18
```

### Error: "Decap CMS won't load"

**Cause**: CMS script not loaded or React version conflict

**Check**:
1. Browser console for errors
2. React version in package.json
3. CMS script in `<head>` or `<body>`

## 📦 Installation Order

Fresh project setup:
```bash
# 1. Install all dependencies
npm install

# 2. Verify React version
npm run check:react

# 3. Start dev server
npm run dev
```

## ⚠️ Warnings You Can Ignore

- "React 18 is not the latest version" - **This is intentional**
- "npm suggests upgrading React" - **Ignore until Decap CMS supports React 19**

## 🔗 Links

- [Decap CMS Releases](https://github.com/decap-org/decap-cms/releases)
- [React 18 Docs](https://react.dev/blog/2022/03/29/react-v18)
- [Astro React Guide](https://docs.astro.dev/en/guides/integrations-guide/react/)

## 📋 Checklist Before Production

- [ ] `npm run check:react` passes
- [ ] No React 19 in dependencies
- [ ] `@astrojs/react` installed
- [ ] TypeScript types installed
- [ ] Decap CMS loads in /admin
- [ ] Build completes without React errors
