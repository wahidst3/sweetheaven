/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          playfair: ['Playfair Display', 'serif'],
        },
        boxShadow: {
          'recipe-card': '8px 8px 0 rgba(58, 45, 31, 0.1)',
          'recipe-card-hover': '12px 12px 0 rgba(58, 45, 31, 0.15)',
        },
        colors: {
          "warm-beige": "#F5E6D3",
          "soft-red": "#E34234",
          "dark-brown": "#3A2D1F",
        },
      }
    }
  ,
    plugins: [],
  }
  