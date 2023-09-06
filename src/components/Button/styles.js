import styled from 'styled-components';

// const variants = [
//   'primary',
//   'secondary',
//   'disabled',
// ]

const borderSize = 1;
const maxFABHeight = 46;

const BASE_HOVER = { cursor: 'pointer' }
const makeBaseStyles = (theme) => {
  return {
    borderRadius: theme.borderRadius.main,
    padding: theme.margin,
    outline: 'none',
    fontFamily: theme.font.family.base,
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
}

export const makeVariantStyles = (theme, variant, isDark) => {
  const map = {
    primary: {
      styles: {
        backgroundColor: `${theme.colors.main.base.base}`,
        color: theme.colors.bg,
      },
      hover: {
        ...BASE_HOVER,
        backgroundColor: `${theme.colors.main.base}80`,
      },
      fill: { // for icon base/hover state
        base: theme.colors.bg
      }
    },

    secondary: {
      styles: {
        backgroundColor: `${theme.colors.bg}`,
        color: theme.colors.grey.darkest,
        border: `${borderSize}px solid ${theme.colors.grey.dark}`,
      },
      hover: {
        ...BASE_HOVER,
        color: theme.colors.main.base,
        border: `${borderSize}px solid ${theme.colors.main.base}`,
        backgroundColor: theme.colors.main.lightest
      },
      fill: {
        base: theme.colors.fg,
        hover: theme.colors.main.base
      }
    },  

    floatingAction: {
      styles: {
        backgroundColor: isDark ? theme.colors.grey.light : theme.colors.bg,
        color: theme.colors.grey.darkest,
        borderRadius: '50%',
        boxShadow: theme.boxShadow.dark,
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
        base: theme.colors.fg,
        hover: theme.colors.secondaryBrighter,
      }
    },

    disabled: {
      styles: {
        color: `${theme.colors.fg}50`,
        backgroundColor: theme.colors.grey.main
      },
      hover: { ...BASE_HOVER }
    }
  }

  return [map[variant]?.styles, map[variant]?.hover, map[variant]?.fill];
}

export const StyledButton = styled.button(props => {
  const { theme, variant, isDark } = props;
  const baseStyles = makeBaseStyles(theme);
  const [buttonStyles, hoverStyles] = makeVariantStyles(theme, variant, isDark);

  return {
    ...baseStyles,
    ...buttonStyles,
    '&:hover': hoverStyles
  }
})

