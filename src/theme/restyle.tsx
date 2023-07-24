import {createTheme} from '@shopify/restyle';

const palette = {
  darkGrey: '#2C2F33',
  charcoal: '#23272A',
  softBlue: '#444b50',
  softBlueLight: '#bdc8d0',
  white: '#FFFFFF',
  vibrantBlue: '#7289DA',
  black: '#000000',
  lightGrey: '#d7dadf',
};

// default theme structure. Modify colors in the exported themes below
const baseTheme = createTheme({
  colors: {
    background: '',
    cardPrimaryBackground: '',
    cardSecondaryBackground: '',
    title: '',
    text: '',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      fontSize: 17,
      color: 'text',
    },
    header: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'title',
    },
    body: {
      fontSize: 17,
      lineHeight: 24,
      color: 'text',
    },
  },
  cardVariants: {
    defaults: {
      padding: 'm',
      borderRadius: 10,
    },
    primary: {
      backgroundColor: 'cardPrimaryBackground',
    },
    secondary: {
      backgroundColor: 'cardSecondaryBackground',
    },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  colors: {
    background: palette.darkGrey,
    cardPrimaryBackground: palette.charcoal,
    cardSecondaryBackground: palette.softBlue,
    title: palette.white,
    text: palette.white,
  },
});

export const lightTheme = createTheme({
  ...darkTheme,
  colors: {
    background: palette.lightGrey,
    cardPrimaryBackground: palette.white,
    cardSecondaryBackground: palette.softBlueLight,
    title: palette.black,
    text: palette.black,
  },
});

export type Theme = typeof darkTheme;
