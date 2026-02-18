/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0C10',
        primary: '#D4AF37',
        secondary: '#9CA3AF',
        'surface-1': '#111318',
        'surface-2': '#0E0F14',
        'text-secondary': '#9CA3AF',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
