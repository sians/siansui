import styled from 'styled-components';
import theme from 'theme';

// const variants = [
//   'primary',
//   'secondary',
//   'disabled',
// ]

const borderSize = 1;
const maxFABHeight = 46;

const BASE_HOVER = { cursor: 'pointer' }
const BASE_STYLES = {
  borderRadius: theme.borderRadius,
  padding: theme.margin,
  outline: 'none',
  fontFamily: theme.fontFamily,
  fontWeight: 600,
  border: `${borderSize}px solid transparent`,
  transition: 'all 0.2s',
  display: 'flex',

  '.icon.start': {
    marginRight: theme.margin / 2,
  },
  '.icon.end': {
    marginLeft: theme.margin / 2,
  }
}

export const MAP = {
  primary: {
    styles: {
      backgroundColor: `${theme.colors.main}`,
      color: theme.colors.white,
    },
    hover: {
      ...BASE_HOVER,
      backgroundColor: `${theme.colors.main}80`,
    },
    fill: { // for icon base/hover state
      base: theme.colors.white
    }
  },

  secondary: {
    styles: {
      backgroundColor: `${theme.colors.white}`,
      color: theme.colors.darkerGrey,
      border: `${borderSize}px solid ${theme.colors.midGrey}`,
    },
    hover: {
      ...BASE_HOVER,
      color: theme.colors.main,
      border: `${borderSize}px solid ${theme.colors.main}`,
      backgroundColor: theme.colors.mainLightest
    },
    fill: {
      base: theme.colors.black,
      hover: theme.colors.main
    }
  },  

  floatingAction: {
    styles: {
      backgroundColor: theme.colors.white,
      color: theme.colors.darkerGrey,
      borderRadius: '50%',
      boxShadow: theme.boxShadowDark,
      height: maxFABHeight - borderSize * 2,
      width: maxFABHeight - borderSize * 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    hover: {
      ...BASE_HOVER,
      backgroundColor: theme.colors.secondaryLighter,
    },
    fill: {
      base: theme.colors.black,
      hover: theme.colors.secondaryBrighter,
    }
  },    

  disabled: {
    styles: {
      color: `${theme.colors.black}50`,
      backgroundColor: theme.colors.grey
    },
    hover: { ...BASE_HOVER }
  }
}


export const StyledButton = styled.button(props => {
  const { variant } = props;
  const buttonStyles = MAP[variant]?.styles;
  const hoverStyles = MAP[variant]?.hover;

  return {
    ...BASE_STYLES,
    ...buttonStyles,
    '&:hover': hoverStyles
  }
})

