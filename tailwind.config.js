/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E87FF',
          dark: '#2E87FF',
        },
        neutrals1: {},
        secondary: {
          DEFAULT: '#2ecc71',
          dark: '#27ae60',
        },
        background: {
          light: '#ffffff',
          dark: '#121212',
        },
        text: {
          light: '#333333',
          dark: '#ffffff',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
}

