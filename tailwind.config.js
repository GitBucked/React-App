/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        palanquin: ['Palanquin', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'slate-gray': '#708090',
      },
      maxWidth: {
        container: '1440px',
      },
    },
  },
  plugins: [],
};
