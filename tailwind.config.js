/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        'primary-dark': '#2563EB',
        'background-light': '#F8FAFC',
        'background-dark': '#050A14',
        'surface-light': '#FFFFFF',
        'surface-dark': '#0A1628',
        'code-bg': '#0a0a0a',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
