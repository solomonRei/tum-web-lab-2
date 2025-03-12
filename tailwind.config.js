/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js,css}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        slate: {
          900: '#0f172a',
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 0.5s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      boxShadow: {
        'soft': '0 4px 15px rgba(0, 0, 0, 0.1)',
        'hover': '0 8px 30px rgba(79, 70, 229, 0.15)',
      },
    },
  },
  plugins: [],
  safelist: [
    'px-4',
    'py-2',
    'rounded-lg',
    'font-semibold',
    'transition-all',
    'duration-300',
    'bg-primary',
    'text-white',
    'hover:-translate-y-1',
    'hover:shadow-lg',
    'bg-white',
    'text-gray-900'
  ]
}
  