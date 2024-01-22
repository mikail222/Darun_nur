/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      sm: "150px",
      md: "768px",
      lg: "1008px",
    },
    extend: {
      outlineWidth: {
        1: "1px",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
