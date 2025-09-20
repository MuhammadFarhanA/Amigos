/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#1A2A44',
        },
        orange: {
          500: '#FF4500',
        },
      },
    },
  },
  plugins: [],
}