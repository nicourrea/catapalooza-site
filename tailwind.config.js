// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        pro: '390px',       // iPhone 12/13/14 Pro
        promax: '430px',    // iPhone 12/13/14 Pro Max
      },
    },
  },
  plugins: [],
};