/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Barlow Condensed'", "sans-serif"],
        body: ["'Manrope'", "sans-serif"],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        navy: {
          DEFAULT: '#0E152C',
          900: '#0E152C',
          800: '#1A2547',
          700: '#2A3863',
          600: '#3D4D7E',
        },
        gold: {
          DEFAULT: '#C9A961',
          600: '#B5934A',
          400: '#D9BD7E',
          200: '#EAD9B0',
        },
        cream: {
          DEFAULT: '#F7F5F0',
          100: '#FBFAF7',
          200: '#F1EDE3',
        },
        mist: {
          DEFAULT: '#E8EAF0',
          200: '#F2F4F8',
          300: '#D7DAE3',
          400: '#A8ADBF',
        },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        'float': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    // Cores custom usadas em estados hover/group-hover — protege contra purge agressivo em produção
    "bg-navy", "bg-navy-800", "bg-navy-700", "bg-navy-600", "bg-navy/5", "bg-navy/10",
    "bg-gold", "bg-gold-600", "bg-gold-400", "bg-gold/10", "bg-gold/15", "bg-gold/40",
    "bg-cream", "bg-cream-100", "bg-cream-200",
    "text-navy", "text-gold", "text-gold-600", "text-mist", "text-mist-400",
    "border-navy", "border-gold", "border-mist",
    "hover:bg-navy", "hover:bg-navy-800", "hover:bg-cream", "hover:bg-cream-200",
    "hover:border-navy", "hover:border-gold",
    "hover:text-navy", "hover:text-gold", "hover:text-gold-600", "hover:text-white",
    "hover:-translate-y-2", "hover:-translate-y-3",
    "hover:shadow-xl", "hover:shadow-2xl",
    "group-hover:bg-navy", "group-hover:bg-gold",
    "group-hover:border-navy", "group-hover:border-gold",
    "group-hover:text-navy", "group-hover:text-gold", "group-hover:text-white",
    "group-hover:opacity-100", "group-hover:w-full", "group-hover:rotate-45",
    "group-hover:translate-x-1", "group-hover:grayscale-0",
  ],
};
