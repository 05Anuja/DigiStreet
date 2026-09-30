/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        silgate: {
          blue: '#00529B',
          'blue-dark': '#003D75',
          'blue-light': '#0066C2',
          'blue-pale': '#EBF3FB',
          orange: '#F36C3D',
          'orange-dark': '#D95627',
          'orange-light': '#FA855A',
          yellow: '#F6C84A',
          navy: '#091E3A',
          'navy-dark': '#07172C',
          'navy-card': '#0E2749',
          charcoal: '#111827',
        },
        digi: {
          dark: '#07172C',
          charcoal: '#091E3A',
          card: '#0E2749',
          yellow: '#F36C3D',
          gold: '#F6C84A',
          cream: '#F8FAFC',
          bgLight: '#F8FAFC',
          borderLight: '#E2E8F0',
          textMuted: '#64748B',
          textDark: '#0F172A',
          accent: '#F36C3D',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Poppins', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Poppins', 'sans-serif'],
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
