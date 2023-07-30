import { createGlobalStyle } from 'styled-components';
import './fonts.css';

const margin = 16;

const theme = {
  margin: margin,
  fontFamily: "Avenir",
  
  borderRadiusSmall: 4,
  borderRadius: 8,
  borderRadiusBig: 16,

  boxShadowBig: `0 6px 16px -8px #00000014, 0 9px 28px #0000000d, 0 12px 48px 16px #00000008;`,
  boxShadowDark: ` 0 6px 16px -8px #00000014, 0 9px 28px #00000014, 0 12px 48px 16px #0000000f;`,
  boxShadowSmall: `0 3px 8px 3px #00000014, 1px 3px 8px #00000024`,

  // dimensiony thingys
  sidebarWidth: 300,
  sidebarPadding: margin,
  navHeight: 60,

  text: {
    sizes: {
      body: '1.05rem'
    }
  },

  // colours 
  colors: {
    black: '#2A282C',
    white: '#fefeff',
    trueWhite: '#FFF',
    
    main: '#B668FF',
    mainLightest: '#b668ff17',
    mainLighter: '#f1e2ff',
    mainDarker: '#7A34BB',

    secondary: '#E5FC59',
    secondaryLighter: '#E5FC5960',
    secondaryBrighter: '#61ad09',
    secondaryDarker: '',

    tercery: '#eb64b9',
    terceryLighter: '',

    danger: '#ff0140',

    error: {
      dark: '#993232',
      main: '#D85656',
      light: '#ECD5D5'
    },
    success: {
      dark: '#327730',
      main: '#7FB27E',
      light: '#DDECDD'
    },
    warning: {
      dark: '#D8A012',
      main: '#E9CC82',
      light: '#F8F1E1'
    },
    info: {
      dark: '',
      main: '',
      light: ''
    },


    veryLightestGrey: 'rgba(5, 5, 5, 0.06)',
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