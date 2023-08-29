/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      width: {
        little_logo: "125px",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        open: ["Open sans", "sans-serif"],
        concert: ["Concert One", "cursive"],
      },
      boxShadow: {
        little2: "0 0 3px 2px rgba(0,0,0,0.3)",
        little: "0 0 10px 1px rgba(0,0,0,0.1)",
        little_inset: "inset 0 0 10px 1px rgba(0,0,0,0.1)",
        li_mid: "0 0 10px 3px rgba(0,0,0,0.1)",
        mid: "0 0 10px 5px rgba(0,0,0,0.1)",
      },
      colors: {
        purple_logo: "#3F0071",
        tee_dark: "#1B524B",
        rose: "#FF6363",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
