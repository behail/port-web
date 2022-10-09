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
        372: '372px',
      },
      width: {
        50: '50%',
        500: '500px',
      },
      colors: {
        pinksh: 'rgb(249 198 17)',
        darkBlue: '#1E293B',
      },
      padding: {
        75: '75%',
      },
    },
  },
  plugins: [],
};
