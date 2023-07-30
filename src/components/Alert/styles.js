import styled from 'styled-components';
import { Layout } from 'components';
import theme from 'theme';

export const makeVariantStyles = (variant, alertType) => {
  const variantMap = {
    solid: {
      backgroundColor: theme.colors?.[alertType].dark,
      color: theme.colors.white,
      icon: theme.colors[alertType].dark,
      iconContainer: theme.colors.white,
      close: theme.colors.white,
      closeHover: theme.colors[alertType]?.main
    },
  
    light: {
      backgroundColor: theme.colors[alertType].light,
      color: theme.colors[alertType].dark,
      icon: theme.colors.white,
      iconContainer: theme.colors[alertType].dark,
      close: theme.colors.white,
      closeHover: theme.colors[alertType]?.main
    },

    toast: {

    }
  }

  return variantMap[variant];
}

export const Container = styled(Layout.Row)(props => {
  const { theme, styles } = props;

  const size = theme.margin * 1.7;

  return {
    transition: 'opacity 0.5s',
    alignItems: 'center',
    backgroundColor: styles?.backgroundColor,
    color: styles?.color,

    'small': {
      lineHeight: 1
    },

    '.icon-container': {
      borderRadius: '50%',
      height: size,
      width: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '.icon-container.left': {
      backgroundColor: styles?.iconContainer,
    },
    '.icon-container.right': {
      '&:hover': {
        backgroundColor: styles?.closeHover,
        cursor: 'pointer'
      }
    }
  }
})

