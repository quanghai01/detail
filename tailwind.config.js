/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgGreen: "#8cc63f",
        textColor: "#1c1c1c",
        bgReed: "#ed6663",
        pri: "#fff",
        se: "rgba(102,102,102,0.85)",
        orange: "#C89979",

        bgBlack: "#333333",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        sm: "0.625vw",
        base: "1.25vw",
        xl: "1.875vw",
        "2xl": "2.5vw",
        "3xl": "5vw",
        "4xl": "6.5625vw",
      },
    },
  },
  plugins: [],
};
