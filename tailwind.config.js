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
        21: '21rem',
        23: '23rem',
        25: '25rem',
        41: '41rem',
        43: '43rem',
        70: '70rem',
        500: '500px',

      },
      colors: {
        pinksh: 'rgb(249 198 17)',
        darkBlue: '#1E293B',
      },
      padding: {
        75: '75%',
      },
      margin: {
        25: '25%',
        50: '50%',
      },
      borderWidth: {
        1: '0.5px',
      },
    },
  },
  plugins: [],
};
