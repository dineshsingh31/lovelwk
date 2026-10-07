import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F6F1E7",
        },
        paper: {
          DEFAULT: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#14110D",
        },
        charcoal: {
          DEFAULT: "#0D0D0F",
        },
        gold: {
          DEFAULT: "#C9A54B",
          hover: "#B8923A",
          light: "#E5C885",
        },
        silver: {
          DEFAULT: "#B9BEC6",
          light: "#D4D8DE",
        },
      },
      fontFamily: {
        display: ["var(--font-bodoni-moda)", "var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "Courier New", "monospace"],
      },
      fontSize: {
        price: "clamp(0.875rem, 1vw, 1rem)",
        hero: "clamp(2.5rem, 6vw, 5.5rem)",
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        card: "16px",
      },
      spacing: {
        section: "clamp(60px, 8vw, 120px)",
      },
      boxShadow: {
        soft: "0 8px 32px rgba(20, 17, 13, 0.08)",
        "soft-lg": "0 16px 48px rgba(20, 17, 13, 0.12)",
      },
      lineHeight: {
        tight: "1.05",
      },
      letterSpacing: {
        label: "0.12em",
      }
    },
  },
  plugins: [],
};

export default config;
