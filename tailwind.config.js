const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        serif: ["DM Serif Display", ...defaultTheme.fontFamily.serif],
        mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
