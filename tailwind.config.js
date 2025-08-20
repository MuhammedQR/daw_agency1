/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // نبقي أسماء دلالية فقط — القيم من CSS vars
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        border: "hsl(var(--border))",
        content: "hsl(var(--content))",
        muted: "hsl(var(--muted))",
        brand: {
          primary: "hsl(var(--brand-primary))",
          cta: "hsl(var(--brand-cta))",
          gray: "hsl(var(--brand-gray))"
        }
      },
      fontFamily: { sans: ["var(--font-inter)"] },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
        raise: "0 10px 35px rgba(0,0,0,0.10)"
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "1.25rem", lg: "2rem" }
      }
    }
  },
  plugins: []
}
