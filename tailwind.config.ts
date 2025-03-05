import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: "#515151", // Adding custom gray color
      },
      screens: {
        xs: "430px", //Custom breakpoint for 430px
      },
      fontFamily: {
        sans: ['var(--font-work-sans)', 'work-sans'], 
        urbanist: ['var(--font-urbanist)', 'urbanist']
      },
    },
  },
  plugins: [],
} satisfies Config;
