/** @type {import('tailwindcss').Config} */
export default {
  content: ['./lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#1fb6ff',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [],
};
