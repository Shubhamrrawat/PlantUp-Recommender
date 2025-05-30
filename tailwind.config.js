/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#45624E',
        secondary: '#7A9A7E',
        background: '#E4E6D9',
        accent: '#A67C52',
        lightAccent: '#D3BEA1',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
      },
      height: {
        'navbar': '10vh',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};