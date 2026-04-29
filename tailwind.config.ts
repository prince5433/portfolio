import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)"
        }
      },
      boxShadow: {
        glass: "0 24px 80px rgba(0, 0, 0, 0.35)",
        glow: "0 0 0 1px rgba(125, 211, 252, 0.18), 0 20px 80px rgba(34, 211, 238, 0.18)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 42%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.16), transparent 30%), radial-gradient(circle at 20% 80%, rgba(34,197,94,0.12), transparent 26%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        reverseOrbit: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" }
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(-4%, -2%, 0) scale(1)", opacity: "0.72" },
          "50%": { transform: "translate3d(5%, 4%, 0) scale(1.08)", opacity: "1" }
        },
        beam: {
          "0%": { transform: "translateX(-35%) rotate(12deg)", opacity: "0" },
          "18%, 70%": { opacity: "0.55" },
          "100%": { transform: "translateX(135%) rotate(12deg)", opacity: "0" }
        },
        scan: {
          "0%": { transform: "translateY(-110%)" },
          "100%": { transform: "translateY(420%)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        orbit: "orbit 22s linear infinite",
        reverseOrbit: "reverseOrbit 28s linear infinite",
        aurora: "aurora 16s ease-in-out infinite",
        beam: "beam 9s ease-in-out infinite",
        scan: "scan 3.8s linear infinite",
        marquee: "marquee 28s linear infinite",
        marqueeReverse: "marqueeReverse 30s linear infinite",
        shimmer: "shimmer 14s linear infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
