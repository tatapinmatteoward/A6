/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.md",
    "./blog/**/*.md",
    "./**/*.md",
    "./.vitepress/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#FFC107'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          }
        }
      }
    }
  },
  plugins: []
}
