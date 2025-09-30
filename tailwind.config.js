/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace'],
      },
      colors: {
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
        // Paleta médica profissional
        medical: {
          blue: {
            50: 'rgb(var(--medical-blue-50))',
            100: 'rgb(var(--medical-blue-100))',
            500: 'rgb(var(--medical-blue-500))',
            600: 'rgb(var(--medical-blue-600))',
            700: 'rgb(var(--medical-blue-700))',
            900: 'rgb(var(--medical-blue-900))',
          },
          slate: {
            50: 'rgb(var(--medical-slate-50))',
            100: 'rgb(var(--medical-slate-100))',
            200: 'rgb(var(--medical-slate-200))',
            300: 'rgb(var(--medical-slate-300))',
            600: 'rgb(var(--medical-slate-600))',
            700: 'rgb(var(--medical-slate-700))',
            800: 'rgb(var(--medical-slate-800))',
            900: 'rgb(var(--medical-slate-900))',
          },
          green: {
            50: 'rgb(var(--medical-green-50))',
            600: 'rgb(var(--medical-green-600))',
            700: 'rgb(var(--medical-green-700))',
          },
          amber: {
            50: 'rgb(var(--medical-amber-50))',
            600: 'rgb(var(--medical-amber-600))',
            700: 'rgb(var(--medical-amber-700))',
          },
          red: {
            50: 'rgb(var(--medical-red-50))',
            600: 'rgb(var(--medical-red-600))',
            700: 'rgb(var(--medical-red-700))',
          },
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
        "fadeIn": {
          from: { 
            opacity: "0",
            transform: "translateY(10px)"
          },
          to: { 
            opacity: "1",
            transform: "translateY(0)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeIn": "fadeIn 0.4s ease-out",
      },
      // Espaçamento específico para ambiente médico
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      minHeight: {
        'touch': '44px', // Área mínima de toque iOS
        'touch-md': '48px', // Área recomendada para luvas médicas
      },
      maxWidth: {
        'prose': '65ch', // Largura ideal para leitura médica
      },
      boxShadow: {
        'medical': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'medical-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'medical-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
