import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://ybdglobal.com',
  integrations: [tailwind(), sitemap()],
  redirects: {
    '/products/hdmi-cables/hdmi-2-1-cable/': '/products/hdmi-cables/',
    '/products/hubs-docking/multiport-usb-c-hub/': '/products/hubs-docking/',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  compressHTML: true,
  build: {
    format: 'directory',
    assets: '_assets',
    inlineStylesheets: 'always'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash][extname]'
        }
      },
      cssCodeSplit: true,
      minify: 'esbuild'
    }
  }
});
