const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#001219',
        primary: '#0a9396',
        primaryDarker: '#056062',
        primaryLighter: '#94d2bd',
        accent: '#ee9b00',
        accentLighter: '#e9d8a6',
        light: '#fefae0'
      }
    },
    fontFamily: {
      serif: ['Permanent Marker', ...defaultTheme.fontFamily.serif],
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: []
};
