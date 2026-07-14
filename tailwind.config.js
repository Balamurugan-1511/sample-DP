module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#1363DF',
          dark: '#082A5E',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#dee2e6',
        },
        navy: '#082A5E',
        violet: '#472DD9',
        bodyText: '#39557E',
        accentBlue: '#1363DF',
        darkText: '#171718',
      },
      fontFamily: {
        heading: ['Lexend Deca', 'sans-serif'],
        body: ['Hind', 'sans-serif'],
      },
      borderRadius: {
        'xl2': '20px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(8, 42, 94, 0.12)',
        cardHover: '0 8px 32px rgba(8, 42, 94, 0.2)',
      },
    },
  },
  plugins: [],
};
