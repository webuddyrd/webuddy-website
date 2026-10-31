/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neutral surfaces carry the layout; color is reserved for the brand mark and small accents.
        ink: {
          950: '#09090b',
          900: '#0e0e11',
          850: '#131317',
          800: '#19191e',
          700: '#24242b',
        },
        // Taken from the logo (public/images). On the dark UI, use the "fondo oscuro" teal.
        brand: {
          teal: '#0F4C5C',
          'teal-light': '#3E8A99',
          'teal-glow': '#6FB3C1',
          orange: '#EE7330',
          amber: '#F8AE36',
          accent: '#fb923c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #3E8A99, #6FB3C1 40%, #EE7330 60%, #F8AE36)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'fade-in': 'fade-in 1.2s ease-out both',
      },
    },
  },
  plugins: [],
};
