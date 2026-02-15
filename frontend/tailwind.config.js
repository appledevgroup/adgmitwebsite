/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Ensure dark mode is enabled
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        softBlack: '#0b0b0b',
        creme: {
          light: '#faf7f2',
          DEFAULT: '#f5e6d3',
          warm: '#efd8bc',
          muted: '#d9c3a6',
        },
        white: '#ffffff',
        gray: {
          800: '#4a4a4a',
          900: '#1a1a1a', // Add darker gray for dark mode
        },
      },
      animation: {
        blob: "blob 7s infinite",
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
