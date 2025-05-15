/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidium: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e5fe',
          300: '#7cd1fd',
          400: '#36bff9',
          500: '#0ca6eb',
          600: '#0284c7',
          700: '#036ba1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      transitionProperty: {
        'colors': 'background-color, color, border-color, text-decoration-color, fill, stroke',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right bottom, rgba(12, 74, 110, 0.9), rgba(2, 132, 199, 0.9))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, 20px)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '27ch' }, // match the exact character count
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        typing: 'typing 3s steps(30, end) forwards, blink 0.75s step-end infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),

  ],
};
