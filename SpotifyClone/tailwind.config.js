import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: colors.neutral[800],
          hover: colors.neutral[900],
          border: colors.neutral[900],
          text: colors.neutral[400],
          ["text-hover"]: colors.neutral[400],
          dark: colors.neutral[950],
          ["dark-hover"]: colors.neutral[900],
        }
      }
    },
  },
  plugins: [],
}