import styled from 'styled-components';
import { makeSizeMap } from 'components/Avatar/styles';

export const Container = styled.div(props => {
  return {
    display: 'flex',
    position: 'relative'
  }
})

export const Item = styled.div(props => {
  const { theme, indent, size, variant } = props;
  const sizeMap = makeSizeMap(theme);

  const left = {
    sm: theme.margin * 1.5,
    md: theme.margin * 2.5,
    lg: theme.margin * 3.5
  }  
  
  const borderSize = 2;
  const height = sizeMap[size].width - borderSize;
  const width = height;

  return {
    display: 'flex',
    position: 'absolute',
    left: indent * left[size],
    justifyContent: 'center',
    alignItems: 'center',
    border: `${borderSize}px solid ${theme.colors.bg}`,
    backgroundColor: theme.colors.main.light,
    borderRadius: variant === 'rounded' ? '50%' : theme.borderRadius.main,
    height: height,
    width: width,
  }
})