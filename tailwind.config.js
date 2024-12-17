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
      backgroundImage: {
        'projetos-card': "url('./images/dot_bg.png')",
        'card-gradient':
          'linear-gradient(224.78deg, #5390E3 8.12%, #1357B3 92.21%)',
      },
      fontFamily: {
        primary: 'Space Grotesk',
        secondary: 'Inter',
      },
      colors: {
        'black-normal': '#020617',
        'black-light': '#151B26',
        'black-text': '#0F172A',
        'blue-light': '#6FB1FF',
        'blue-normal': '#1F7FF0',
        'blue-dark': '#1A3365',
        'card-border': '#35455F',
        customCyan: 'rgba(0, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
};
