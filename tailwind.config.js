/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Cairo', 'Noto Sans Arabic', 'sans-serif'],
      },
      colors: {
        primary: '#6750A4',
        'on-primary': '#FFFFFF',
        surface: '#FEF7FF',
        'on-surface': '#1D1B20',
        // أضف باقي ألوان Material 3 هنا إذا أحببت
      },
    },
  },
  plugins: [],
};
