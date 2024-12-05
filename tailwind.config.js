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
        "home-single-btn": "#FFE2EB",
        "categorie-item": "#F3F3F5",
        "alert-color": "#E0A32E",
        "alert-text-color": "#31436F",
        "border-color": "#F3F3F5",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-input-border": theme("colors.input-border"),
          "--color-input-border-disabled": theme("colors.btn-disabled"),
          "--color-chip-bg": theme("colors.btn-disabled"),
          "--color-border-color": theme("colors.border-color"),
        },
      });
    },
  ],
};
