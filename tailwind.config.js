/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrains-mono)",
    },
    extend: {
      colors: {
        primary: '#0f172a',      // Navy 950
        secondary: '#1e293b',    // Navy 900
        tertiary: '#334155',     // Navy 700
        accent: {
          DEFAULT: '#1d4ed8',    // Blue 700
          hover: '#1e40af',      // Blue 800
          light: '#3b82f6',      // Blue 500
        },
        muted: '#64748b',        // Navy 500
        'muted-fg': '#94a3b8',   // Navy 400
        border: '#1e293b',       // Navy 900
        background: '#020617',   // Navy 950 darker
        surface: '#0f172a',      // Navy 950
        card: '#1e293b',         // Navy 900
      },
    },
  },
}