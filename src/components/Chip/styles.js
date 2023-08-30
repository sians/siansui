import styled from 'styled-components';

export const makeSizeMap = (size) => {
  const sizes = {
    sm: {
      xPadding: 4,
      yPadding: 2,
      icon: 10
    },
    md: {
      xPadding: 10,
      yPadding: 4,
      icon: 12
    },
    lg: {
      xPadding: 16,
      yPadding: 8,
      icon: 14
    }
  }
  return sizes[size]
}

export const makeVariantStyles = (theme, variant) => {
  const styles = {
    solid: {
      base: {
        backgroundColor: theme.colors.main.base,
        color: theme.colors.bg,
      },
      hover: {
        backgroundColor: theme.colors.main.light,
        color: theme.colors.main.dark,
      }
    },

    outline: {
      base: {
        backgroundColor: theme.colors.main.lightest,
        color: `${theme.colors.main.dark}`,
        border: `1px solid ${theme.colors.main.dark}`
      },
      hover: {
        backgroundColor: theme.colors.main.light,
        color: theme.colors.main.dark,
      }
    },

    disabled: {
      base: {
        backgroundColor: theme.colors.grey.lightest,
        color: theme.colors.grey.dark
      },
    }
  }
  return styles[variant];
}

export const Container = styled.div(props => {
  const { theme, size, variant, isDisabled } = props;

  const sizing = makeSizeMap(size);
  const variantStyles = makeVariantStyles(theme, variant);
  const xPadding = sizing.xPadding;
  const yPadding = sizing.yPadding;

  const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: `${yPadding}px ${xPadding}px`,
    fontSize: '0.8rem',
    borderRadius: theme.borderRadius.big,
    border: `1px solid transparent`,
    fontWeight: 600,

    '.icon-container': {
      marginRight: theme.margin / 2,
      padding: 2,
      borderRadius: '50%',
    }
  }

  const baseHover = {
    backgroundColor: theme.colors.main.base,
    cursor: 'pointer'
  }

  return {
    ...baseStyles,
    ...variantStyles?.base,
    '&:hover': !isDisabled && {
      ...baseHover,
      ...variantStyles?.hover,
    }
  }
})

export const Remove = styled.div(props => {
  const { theme } = props;
  return {
    marginLeft: theme.margin / 2,
    padding: 2,
    borderRadius: '50%',
  }
})