/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cal: ['Poppins', 'sans-serif']
      },
      colors: {
        cal: {
          purple: '#854DFF',
          gray: {
            light: '#F0F0F0',
            main: '#716F6F'
          },
          line: '#DCDCDC',
          red: '#FF5959'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
