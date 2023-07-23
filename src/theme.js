import { createGlobalStyle } from 'styled-components';
import './fonts.css';

const margin = 16;

const theme = {
  margin: margin,
  fontFamily: "Avenir",
  borderRadius: 8,
  boxShadowBig: `0 6px 16px -8px #00000014, 0 9px 28px #0000000d, 0 12px 48px 16px #00000008;`,

  // dimensiony thingys
  sidebarWidth: 300,
  sidebarPadding: margin,
  navHeight: 60,

  // colours 
  colors: {
    black: '#2A282C',
    white: 'FDFBFF',
    
    main: '#B668FF',
    mainLighter: '#B668FF30',
    mainDarker: '#7A34BB',

    secondary: '#E5FC59',
    secondaryLighter: '#E5FC5960',
    secondaryDarker: '',

    grey: '#D9D9D9',
    midGrey: '#BEB8C2',
  },
};

export const GlobalStyles = createGlobalStyle(() => {
  return {
    'html': {
      scrollBehavior: 'smooth'
    },
    'body': {
      margin: 0,
      fontFamily: theme.fontFamily,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      overflow: 'hidden',
      color: theme.colors.black
    },
    'code': {
      fontFamily: "Red Hat Mono",
      fontWeight: 400, /* use a normal weight */
      fontVariationSettings: "'wght' 400",
    },
    'ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },    
  }
})

export default theme;