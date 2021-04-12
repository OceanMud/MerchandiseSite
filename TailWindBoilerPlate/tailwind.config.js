module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
