/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-custom-color': '#1D4ED8',
        'brand-primary': '#FF6347',
        'brand-secondary': '#2D3748',
        'background-light': '#F7FAFC', 
      },
    },
  },
  plugins: [],
}

