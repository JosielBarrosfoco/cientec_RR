/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#005A9C',
          dark: '#004B82',
          light: '#4DB3FF',
        },
        accent: {
          DEFAULT: '#007ACC',
          bright: '#0091EA',
        },
        complement: {
          DEFAULT: '#FFC744',
          light: '#FFE8B3',
        },
        neutral: {
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#BDBDBD',
        },
        text: {
          DEFAULT: '#333333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
