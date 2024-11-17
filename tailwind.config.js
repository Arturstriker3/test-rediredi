/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#29354F",
        "text-secondary": "#586893",
        "icon-primary": "#DA3468",
        "icon-secondary": "#8693B4",
        "input-border": "#008197",
        "btn-activated": "#F24F82",
        "btn-disabled": "#DDE2EF",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-input-border": theme("colors.input-border"),
        },
      });
    },
  ],
};
