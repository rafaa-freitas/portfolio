/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  purge: {
    enable: 'true',
  },
  theme: {
    screens: {
      sm: '340px',
      md: '620px',
      lg: '960px',
      xl: '1216px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        primary: 'Space Grotesk',
        secondary: 'Inter',
      },
      colors: {
        'black-normal': '#020617',
        'black-light': '#151B26',
        'black-text': '#0F172A',
        customCyan: 'rgba(0, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
};
