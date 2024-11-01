/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#1a237e',
          600: '#0d1b5e',
          700: '#0a1142',
          800: '#070c2e',
          900: '#040718',
        },
      },
    },
  },
  plugins: [],
};