module.exports = {
  purge: ['./src/**/*.tsx', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      button: '$color-button-text',
      transparent: 'transparent',
      primary: {
        100: '$color-primary-100',
        200: '$color-primary-200',
        300: '$color-primary-300',
        400: '$color-primary-400',
        500: '$color-primary-500',
        600: '$color-primary-600',
        700: '$color-primary-700',
        800: '$color-primary-800',
        900: '$color-primary-900',
      },
      secondary: {
        DEFAULT: '$color-secondary',
      },
      accent: {
        DEFAULT: '$color-accent',
      },
    },
    spacing: {
      0: '0px',
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '30px',
      6: '40px',
      7: '60px',
      8: '75px',
    },
    extend: {
      textColor: {
        menu: {
          selected: '$color-menu-selected-text',
        },
      },
      backgroundColor: {
        menu: {
          selected: '$color-menu-selected-bg',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
