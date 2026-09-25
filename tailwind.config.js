/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        digi: {
          dark: '#0d0d0d',
          charcoal: '#141414',
          card: '#1c1c1c',
          yellow: '#FFDF01',
          gold: '#e6c800',
          cream: '#FAF9F6',
          bgLight: '#F7F6F2',
          borderLight: '#E6E3DA',
          textMuted: '#71717a',
          textDark: '#1a1a1a',
          accent: '#FFDF01',
        }
      },
      fontFamily: {
        sans: ['Rubik', 'Poppins', 'sans-serif'],
        display: ['Poppins', 'Rubik', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
