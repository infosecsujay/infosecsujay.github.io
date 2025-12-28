/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--color-border)', // gray-200
        input: 'var(--color-input)', // gray-200
        ring: 'var(--color-ring)', // blue-500
        background: 'var(--color-background)', // white
        foreground: 'var(--color-foreground)', // gray-900
        primary: {
          DEFAULT: 'var(--color-primary)', // blue-900
          foreground: 'var(--color-primary-foreground)', // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // teal-600
          foreground: 'var(--color-secondary-foreground)', // white
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // coral-500
          foreground: 'var(--color-accent-foreground)', // white
        },
        surface: {
          DEFAULT: 'var(--color-surface)', // gray-50
          foreground: 'var(--color-surface-foreground)', // gray-900
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-50
          foreground: 'var(--color-muted-foreground)', // gray-600
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)', // gray-900
        },
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)', // gray-900
        },
        success: {
          DEFAULT: 'var(--color-success)', // green-600
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-500
          foreground: 'var(--color-warning-foreground)', // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-600
          foreground: 'var(--color-error-foreground)', // white
        },
        text: {
          primary: 'var(--color-text-primary)', // slate-900
          secondary: 'var(--color-text-secondary)', // slate-500
        },
        brand: {
          primary: 'var(--color-brand-primary)', // blue-900
          secondary: 'var(--color-brand-secondary)', // amber-500
          accent: 'var(--color-brand-accent)', // red-600
        },
        trust: 'var(--color-trust)', // green-600
        cta: {
          DEFAULT: 'var(--color-cta)', // blue-500
          foreground: 'var(--color-cta-foreground)', // white
        },
        navy: {
          DEFAULT: 'var(--color-navy)', // custom-navy
          foreground: 'var(--color-navy-foreground)', // white
        },
        teal: {
          DEFAULT: 'var(--color-teal)', // custom-teal
          foreground: 'var(--color-teal-foreground)', // white
        },
        coral: {
          DEFAULT: 'var(--color-coral)', // custom-coral
          foreground: 'var(--color-coral-foreground)', // white
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        headline: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': '3.5rem',
        'display': '2.5rem',
        'h1': '2.25rem',
        'h2': '1.875rem',
        'h3': '1.5rem',
        'h4': '1.25rem',
        'body-lg': '1.125rem',
        'body': '1rem',
        'body-sm': '0.875rem',
        'caption': '0.75rem',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        'base': 'var(--spacing-base)',
        '1.5x': 'calc(var(--spacing-base) * 1.5)',
        '2x': 'calc(var(--spacing-base) * 2)',
        '3x': 'calc(var(--spacing-base) * 3)',
        '4x': 'calc(var(--spacing-base) * 4)',
        '6x': 'calc(var(--spacing-base) * 6)',
        '8x': 'calc(var(--spacing-base) * 8)',
        '12x': 'calc(var(--spacing-base) * 12)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        cta: 'var(--shadow-cta)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-right': 'slide-in-right 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'smooth': '300ms',
        'professional': '400ms',
      },
    },
  },
  plugins: [],
}