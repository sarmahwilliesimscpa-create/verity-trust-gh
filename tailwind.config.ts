import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F1A2E",
          50: "#F3F5F8",
          100: "#E4E8EF",
          200: "#C3CBDA",
          300: "#9AA6BE",
          400: "#66739A",
          500: "#3C4A6E",
          600: "#243352",
          700: "#182541",
          800: "#0F1A2E",
          900: "#0A1223",
        },
        gold: {
          DEFAULT: "#C8912F",
          50: "#FBF3E3",
          100: "#F5E4C1",
          200: "#EACB8A",
          300: "#E0B563",
          400: "#D4A24C",
          500: "#C8912F",
          600: "#A97621",
          700: "#87601C",
        },
        canvas: "#F8F9FB",
        surface: "#FFFFFF",
        line: "#E7E9EE",
        ink: "#0F1A2E",
        muted: "#5B6472",
        "muted-2": "#8A93A3",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl2: "20px",
      },
      boxShadow: {
        soft: "0 12px 32px -12px rgba(15,26,46,0.14)",
        card: "0 1px 2px rgba(15,26,46,0.04), 0 8px 24px -12px rgba(15,26,46,0.08)",
        lift: "0 24px 48px -16px rgba(15,26,46,0.22)",
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
