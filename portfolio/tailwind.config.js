/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-gold': '#B3A369',
        'navy-blue': '#003057',
        'dark-navy': '#1C1C1C',
        'link-dark': '#003057',
        'link-light': '#61dafb',
      },
      backgroundColor: {
        'light-default': '#FFFFFF',
        'light-paper': '#F5F5F5',
        'dark-default': '#1C1C1C',
        'dark-paper': '#1C1C1C',
      },
      textColor: {
        'light-primary': '#000000',
        'dark-primary': '#FFFFFF',
        'dark-secondary': '#E0E0E0',
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        // 'heading': ['Open Sans', 'sans-serif'],
      },
      width: {
        'mobile': '90%',
        'desktop': '55%',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
} 