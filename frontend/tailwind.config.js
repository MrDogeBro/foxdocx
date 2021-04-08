module.exports = {
  purge: ['./src/**/*.tsx', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      button: 'var(--color-button-text)',
      transparent: 'transparent',
      primary: {
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
        900: 'var(--color-primary-900)',
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
      },
      accent: {
        DEFAULT: 'var(--color-accent)',
        hover: 'var(--color-accent-hover)',
        disabled: 'var(--color-accent-disabled)',
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
          selected: 'var(--color-menu-selected-text)',
        },
      },
      backgroundColor: {
        menu: {
          selected: 'var(--color-menu-selected-bg)',
        },
      },
    },
  },
  variants: {
    backgroundColor: ({ after }) => after(['disabled']),
    textColor: ({ after }) => after(['disabled']),
  },
  plugins: [],
};
