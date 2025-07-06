// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: '#fbd5e3',
        rose: '#f43f5e',
        softRose: '#f9cfd7',
      },
      boxShadow: {
        soft: '0 4px 14px rgba(255, 182, 193, 0.2)',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
