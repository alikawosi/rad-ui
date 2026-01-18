import plugin from "tailwindcss/plugin";

export const raduiPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "40 20% 98%",
        "--foreground": "220 15% 15%",
        "--primary": "175 100% 31%",
        "--primary-foreground": "0 0% 100%",
        "--secondary": "40 10% 92%",
        "--secondary-foreground": "220 15% 15%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 100%",
        "--card": "40 20% 96%",
        "--card-foreground": "220 15% 15%",
        "--border": "40 10% 88%",
        "--muted": "40 10% 92%",
        "--muted-foreground": "220 10% 40%",
        "--ring": "175 100% 31%",
        "--radius": "0.5rem",
      },
      ".dark": {
        "--background": "222 47% 11%",
        "--foreground": "210 40% 98%",
        "--primary": "170 65% 50%",
        "--primary-foreground": "222 47% 11%",
        "--secondary": "217 33% 17%",
        "--secondary-foreground": "210 40% 98%",
        "--destructive": "0 63% 31%",
        "--destructive-foreground": "210 40% 98%",
        "--card": "222 47% 13%",
        "--card-foreground": "210 40% 98%",
        "--border": "217 33% 20%",
        "--muted": "217 33% 17%",
        "--muted-foreground": "210 20% 70%",
        "--ring": "170 65% 50%",
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
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
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          border: "hsl(var(--border))",
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          ring: "hsl(var(--ring))",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
  }
);

