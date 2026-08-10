import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0B0D12",
          panel: "#111318",
          raised: "#171A21",
          border: "#22252C",
        },
        text: {
          primary: "#F3F4F6",
          secondary: "#9CA3AF",
          muted: "#6B7280",
        },
        brand: {
          blue: "#38BDF8",
          purple: "#A855F7",
          pink: "#EC4899",
        },
        status: {
          positive: "#22C55E",
          negative: "#F87171",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
