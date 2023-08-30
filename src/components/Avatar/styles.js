import styled from 'styled-components';

export const makeSizeMap = (theme) => {
  return {
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
}

export const Container = styled.div(props => {
  const { theme, size, variant, fallbackType } = props;
  const variantMap = {
    squared: { borderRadius: theme.borderRadius.main },
    rounded: { borderRadius: '50%' }
  }
  
  const fallbackMap = {
    src: { backgroundColor: theme.colors.bg },
    name: { backgroundColor: theme.colors.main.base },
    default: { backgroundColor: theme.colors.grey.main }
  }  

  const sizeMap = makeSizeMap(theme);

  const borderSize = 2;
  const height = sizeMap[size]?.width - borderSize;
  const width = height;
  const fontSize = sizeMap[size]?.fontSize;

  const baseStyles = {
    backgroundColor: fallbackMap[fallbackType].backgroundColor,
    height: height,
    width: width,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: fontSize,
    fontWeight: 300,
    color: theme.colors.bg,

    'img': {
      height: height,
      width: width,
    }
  }

  return {
    ...baseStyles,
    ...(variantMap[variant])
  }
})