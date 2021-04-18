module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "max-w-screen-3xl": "100rem",
      },
      colors: {
        UrlBlue: "#117BC5",
      },
    },
  },
  variants: {
    extend: {
      contrast: ["hover", "group-hover"],
      rotate: ["group-hover"],
      textColor: ["even"],
      translate: ["group-hover"],
      outline: ["focus"],
      borderWidth: ["focus, hover"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
