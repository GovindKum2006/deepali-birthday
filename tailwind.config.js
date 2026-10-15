/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff5f7',
          100: '#ffe4e9',
          200: '#fecdce',
          300: '#fca5ab',
          400: '#f6707c',
          500: '#e11d48',
          600: '#be123c',
        },
        rosewine: '#881337',
        deepred: '#4c0519',
        lavender: {
          50: '#f8f7ff',
          100: '#f0eeff',
          200: '#e3dffe',
          300: '#cebeff',
          400: '#b495fe',
          500: '#9b6bfa',
          900: '#2e1065',
        },
        champagne: {
          100: '#fef9ee',
          200: '#fdf0d2',
          300: '#f9de9b',
          400: '#f4c45e',
          500: '#dfa22b',
        },
        gold: {
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
        }
      },
      fontFamily: {
        script: ['"Great Vibes"', '"Dancing Script"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 15px rgba(225, 29, 72, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(244, 63, 94, 0.8))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
