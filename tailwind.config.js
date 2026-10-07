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
        brand: {
          violet: '#8b5cf6',
          pink: '#ec4899',
          orange: '#f59e0b',
          accent: '#fb923c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #8b5cf6, #ec4899 50%, #f59e0b)',
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
