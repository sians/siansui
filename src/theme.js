import { createGlobalStyle } from 'styled-components';
import './fonts.css';

const theme = {
  margin: 16,
  fontFamily: "Avenir",
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
    },
    'code': {
      fontFamily: "Red Hat Mono",
      fontWeight: 400, /* use a normal weight */
      fontVariationSettings: "'wght' 400",
    },
  }
})

export default theme;