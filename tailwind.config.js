module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        100: "#342F2C",
        200: "#9D4916",
        300: "#CDAD87",
        400: "#413B38",
        500: "#ffffff",
      },
      shadow: {
        100: "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 6px 5px #61280F",
      },
    },
    fontFamily: {
      Sanchez: ["Sanchez, serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1100px",
      },
    },
  },
  plugins: [],
};
