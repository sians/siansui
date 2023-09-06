import styled, { createGlobalStyle } from 'styled-components';
import './fonts.css';

const margin = 16;

const THEME = {
  margin: margin,
  page: {
    maxWidth: 900
  },
  sidebar: {
    width: 300,
    padding: margin
  },
  nav: { height: 60 },

  font: {
    family: {
      base: 'Avenir',
      code: '',
    },
    size: {
      input: 14,
      body: '1.05rem'
    }
  },
  borderRadius: {
    small: 4,
    main: 8,
    big: 16
  },
  boxShadow: {
    small: `0 3px 8px 3px #00000014, 1px 3px 8px #00000024`,
    big: `0 6px 16px -8px #00000014, 0 9px 28px #0000000d, 0 12px 48px 16px #00000008;`,
    dark: `0 6px 16px -8px #00000014, 0 9px 28px #00000014, 0 12px 48px 16px #0000000f;`,
  },
}

const LIGHT = {
  fg: '#2A282C',
  bg: '#fefeff',

  main: {
    lightest: '#F9F3FF',
    light: '#f1e2ff',
    base: '#B668FF',
    dark: '#9352D0',
    darkest: '#714699'    
  },
  secondary: {
    lightest: '#FAFFDD',
    light: '#F3FFA6',
    base: '#E5FC59',
    dark: '#D2EB3A',
    darkest: '#ACC223'
  },
  grey: {
    lightest: 'rgba(5, 5, 5, 0.06)',
    light: '#d9d9d926',
    main: '#D9D9D9',
    dark: '#BEB8C2',
    darkest: '#322f35db'
  },  

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
  }
}

const DARK = {
  fg: '#ffffffd9',
  bg: '#1c1b1d',
  // bg: '#2A282C',

  main: {
    lightest: '#F9F3FF',
    // light: '#f1e2ff',
    light: '#3b254f',
    base: '#B668FF',
    // base: '#552684',
    dark: '#9352D0',
    darkest: '#714699'    
  },
  secondary: {
    lightest: '#FAFFDD',
    light: '#F3FFA6',
    // base: '#E5FC59',
    base: '#3b411b',
    dark: '#D2EB3A',
    darkest: '#ACC223'
  },
  grey: {
    lightest: '#333037',
    light: '#2A282C',
    main: '#d9d9d947',
    dark: '#dfdfe075',
    darkest: '#322f35db'
  },  

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
  }  
}

export const setThemeType = (themeName) => { // 'light', 'dark'
  return {
    ...THEME,
    colors: themeName === 'light' ? LIGHT : DARK
  }
}

export const GlobalStyles = createGlobalStyle(() => {
  return {
    'html': {
      scrollBehavior: 'smooth'
    },
    'body': {
      margin: 0,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      overflow: 'hidden',
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

export const AppStyles = styled.div(props => {
  const { theme } = props;
  return {
    fontFamily: theme.font.family.base,
    color: theme.colors.fg,
    backgroundColor: theme.colors.bg,

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

export default THEME;