import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto-regular": ["var(--font-roboto-regular)"],
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(16,42,86,1) 100%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
