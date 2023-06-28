/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
      },
      colors: {
        'bgcolor': {
            DEFAULT: '#282828',
            surface: '#1F1F1F',
        },
        'primary': {
            light: '#14d868',
            DEFAULT: '#0fa84e',
            dark: '#0a6430',
        },
        'secondary': {
            // light: '#33B1FF',
            DEFAULT: '#000000',
        },
        'destacado': {
            light: '#bac0bc',
            DEFAULT: '#16994d',
        },
        'onbgcolor': {
            // light: '#637B9D',
            DEFAULT: '#FFFFFF',
            // dark: '#0F172A',
        },
        'onprimary': {
            light: '#f4fffb',
            DEFAULT: '#FFFFFF',
            // dark: '#EFF3F8',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
