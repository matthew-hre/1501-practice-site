/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define a new color palette with dark colors
        dark: {
          100: "#212121",
          200: "#424242",
          300: "#616161",
          400: "#9e9e9e",
          500: "#bdbdbd",
          600: "#e0e0e0",
          700: "#eeeeee",
          800: "#f5f5f5",
          900: "#ffffff",
        },
      },
    },
  },

  // Update the theme settings to use the new color palette
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "dark"],
    textColor: ["responsive", "hover", "focus", "dark"],
  },
  plugins: [],
};
