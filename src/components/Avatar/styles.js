import styled from 'styled-components';
import theme from 'theme';

export const SIZE_MAP = {
  sm: { 
    width: theme.margin * 2 ,
    fontSize: '0.8rem',
  },
  md: { 
    width: theme.margin * 3 ,
    fontSize: '1rem',
  },
  lg: { 
    width: theme.margin * 5,
    fontSize: '1.8rem',
   }
}

const VARIANT_MAP = {
  squared: { borderRadius: theme.borderRadius },
  rounded: { borderRadius: '50%' }
}

const FALLBACK_MAP = {
  src: { backgroundColor: theme.colors.white },
  name: { backgroundColor: theme.colors.main },
  default: { backgroundColor: theme.colors.grey }
}

export const Container = styled.div(props => {
  const { size, variant, fallbackType } = props;

  const borderSize = 2;
  const height = SIZE_MAP[size]?.width - borderSize;
  const width = height;
  const fontSize = SIZE_MAP[size]?.fontSize;

  const baseStyles = {
    backgroundColor: FALLBACK_MAP[fallbackType].backgroundColor,
    height: height,
    width: width,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: fontSize,
    fontWeight: 300,
    color: theme.colors.white,

    'img': {
      height: height,
      width: width,
    }
  }

  return {
    ...baseStyles,
    ...(VARIANT_MAP[variant])
  }
})