/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#00d4ff',
        secondary: '#ff006e',
        dark: '#0a0e27',
        accent: '#ffd60a',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e0e0e0',
          },
        },
      },
    },
  },
  plugins: [],
};
