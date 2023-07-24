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
    white: '#fefeff',
    trueWhite: '#FFF',
    
    main: '#B668FF',
    mainLightest: '#b668ff17',
    mainLighter: '#B668FF30',
    mainDarker: '#7A34BB',

    secondary: '#E5FC59',
    secondaryLighter: '#E5FC5960',
    secondaryDarker: '',

    lightestGrey: '#d9d9d926',
    grey: '#D9D9D9',
    midGrey: '#BEB8C2',
    darkerGrey: '#322f35db'
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
      color: theme.colors.black,
      backgroundColor: theme.colors.white
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