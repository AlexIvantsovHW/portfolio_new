import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        sm: "16px",
        sm2: "16px",
        md: "32px",
        md2: "32px",
        lg: "32px",
        xl: "32px",
      },
    },
    screens: {
      xxl: "1920px",
      xl2: "1375px",
      xl: "1279px",
      lg: "1024px",
      md2: "768px",
      md: "640px",
      sm2: "480px",
      sm: "320px",
    },
    extend: {
      colors: {
        orangeLight: "#e1770d",
        orangeDark: "#844f1c",
        lightGray: "#888888",
        lightGreen: "#50C878",
        blue: {
          950: "#17275c",
        },
        gradGreenLeft: "#12B767",
        gradGreenRight: "#07711E",
        blueColor: "#17275c",
        green: "#13B868",
        white: "#ffffff",
        red: "#ff0000",
        granate: "#800000",
        granateMedium: "#B00000",
        strokeGray: "#F0F2F0",
        lighGray: "#D3D1D4",
        middleGray: "#E3E5E3",
        grayText: "#929292",
        grayLowContast: "#E3E5E3",
        yellow: "#FFCC00",
        black: "#1F1D1D",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        durationOne: " 0.8s ",
      },
      fontFamily: {
        sans: "var(--font-pt-sans)",
        serif: "var(--font-pt-serif)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/line-clamp")],
} satisfies Config;

export default config;
