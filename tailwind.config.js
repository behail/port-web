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
        33: '33rem',
        35: '35rem',
        61: '61vh',
        70: '70%',
        372: '372px',
      },
      width: {
        50: '50%',
        19: '19rem',
        21: '21rem',
        23: '23rem',
        25: '25rem',
        30: '30rem',
        33: '33rem',
        35: '35rem',
        37: '37rem',
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
