import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111111',
          body:    'rgba(17, 17, 17, 0.82)',
          meta:    'rgba(17, 17, 17, 0.68)',
          muted:   'rgba(17, 17, 17, 0.58)',
        },
        blue: {
          accent: '#0000FF',
          link:   '#0000CC',
        },
        grey: {
          950: '#0A0A0A',
          900: '#111111',
          800: '#1A1A1A',
          700: '#333333',
          500: '#666666',
          200: '#E0E0E0',
          100: '#F4F4F4',
          50:  '#FAFAFA',
        },
      },
      fontFamily: {
        display: ['var(--font-barlow-condensed)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 9vw, 9rem)',   { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 6rem)',   { lineHeight: '0.95', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem,   4vw, 4rem)',   { lineHeight: '1',    letterSpacing: '-0.02em'  }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee:  'marquee 32s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
