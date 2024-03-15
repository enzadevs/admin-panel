/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        keppel: {
          DEFAULT: "#1eaea0",
          50: "#f1fcfa",
          100: "#cff8f0",
          200: "#9ff0e2",
          300: "#66e2d0",
          400: "#31b9aa",
          500: "#1eaea0",
          600: "#158c83",
          700: "#15706a",
          800: "#165956",
          900: "#174a48",
          950: "#072b2c",
        },
        mercury: {
          DEFAULT: "#f7f7f7",
          50: "#f7f7f7",
          100: "#ededed",
          200: "#e0e0e0",
          300: "#c8c8c8",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
