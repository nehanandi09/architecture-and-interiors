module.exports = {
  content: ["./src/**/*.{html,js,css}", "./public/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#EFD4AA",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Raleway"],
      },
    },
  },
  plugins: [],
};
