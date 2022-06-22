// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bgColor: '#090A19',
        pink: '#F713F2',
        purple: '#CB4DF6',
        red: '#FC5965',
        orange: '#FC6F4F',
        cardColor: '#16182D',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
