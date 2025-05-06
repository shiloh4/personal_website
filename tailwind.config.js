/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'tech-gold': '#B3A369',
        'navy-blue': '#003057',
        'dark-navy': '#1C1C1C',
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
        'sans': ['Roboto', 'sans-serif'],
        'heading': ['Open Sans', 'sans-serif'],
      },
      width: {
        'mobile': '55%',
        'desktop': '80%',
    },
  },
  plugins: [],
  darkMode: 'class',
  }
}