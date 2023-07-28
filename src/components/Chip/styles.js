import styled from 'styled-components';
import theme from 'theme';

export const SIZE_MAP = {
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

export const VARIANT_MAP = {
  solid: {
    base: {
      backgroundColor: theme.colors.main,
      color: theme.colors.white,
    },
    hover: {
      backgroundColor: theme.colors.mainLighter,
      color: theme.colors.mainDarker,
    }
  },

  outline: {
    base: {
      backgroundColor: theme.colors.mainLightest,
      color: `${theme.colors.mainDarker}`,
      border: `1px solid ${theme.colors.mainDarker}`
    },
    hover: {
      backgroundColor: theme.colors.mainLighter,
      color: theme.colors.mainDarker,
    }
  },

  disabled: {
    base: {
      backgroundColor: theme.colors.veryLightestGrey,
      color: theme.colors.midGrey
    },
  }
}

export const Container = styled.div(props => {
  const { size, variant, isDisabled } = props;

  const xPadding = SIZE_MAP[size].xPadding;
  const yPadding = SIZE_MAP[size].yPadding;

  const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: `${yPadding}px ${xPadding}px`,
    fontSize: '0.8rem',
    borderRadius: theme.borderRadiusBig,
    border: `1px solid transparent`,
    fontWeight: 600,

    '.icon-container': {
      marginRight: theme.margin / 2,
      padding: 2,
      borderRadius: '50%',
    }
  }

  const baseHover = {
    backgroundColor: theme.colors.main,
    cursor: 'pointer'
  }

  return {
    ...baseStyles,
    ...VARIANT_MAP[variant]?.base,
    '&:hover': !isDisabled && {
      ...baseHover,
      ...VARIANT_MAP[variant]?.hover,
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