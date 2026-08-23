/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#07111d',
          secondary: '#0f1a28',
          tertiary: '#172437'
        },
        accent: {
          cyan: '#49c6df',
          amber: '#c4893d',
          green: '#7db59a'
        },
        text: {
          primary: '#f3f7fa',
          secondary: '#a8b4c1',
          muted: '#70808e'
        },
        border: {
          DEFAULT: '#26384a'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'tech-grid': 'linear-gradient(rgba(73, 198, 223, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(73, 198, 223, 0.06) 1px, transparent 1px)'
      }
    }
  },
  plugins: [],
  // Safari 16.4+ font-display optimization
  safelist: []
};
