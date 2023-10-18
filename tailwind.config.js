/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'minQ': '380px',
      'medQ': '445px',
    },
    extend: {},
  },
  plugins: [],
}

