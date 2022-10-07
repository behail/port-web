/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        30: '30rem',
        70: '70%',
      },
      width: {
        50: '50%',
      },
      colors: {
        pinksh: 'rgb(249 198 17)',
        darkBlue: '#1E293B',
      },
    },
  },
  plugins: [],
};
