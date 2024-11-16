/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-primary'  : '#29354F',
        'icon-primary'  : '#DA3468',
      },
    },
  },
  plugins: [],
}

