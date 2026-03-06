// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // لتفعيل الوضع الداكن باستخدام class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, // هنا يمكنك إضافة تخصيصاتك مثل الألوان أو الخطوط
  },
  plugins: [
    require('@tailwindcss/typography'), // إذا كنت تستعمل إضافة typography
  ],
};
