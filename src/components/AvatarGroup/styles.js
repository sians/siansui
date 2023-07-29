import styled from 'styled-components';
import theme from 'theme';
import { SIZE_MAP } from 'components/Avatar/styles';

const LEFT = {
  sm: theme.margin * 1.5,
  md: theme.margin * 2.5,
  lg: theme.margin * 3.5
}

export const Container = styled.div(props => {
  return {
    display: 'flex',
    position: 'relative'
  }
})

export const Item = styled.div(props => {
  const { theme, indent, size, variant } = props;
  
  const borderSize = 2;
  const height = SIZE_MAP[size].width - borderSize;
  const width = height;

  return {
    display: 'flex',
    position: 'absolute',
    left: indent * LEFT[size],
    justifyContent: 'center',
    alignItems: 'center',
    border: `${borderSize}px solid ${theme.colors.white}`,
    backgroundColor: theme.colors.mainLighter,
    borderRadius: variant === 'rounded' ? '50%' : theme.borderRadius,
    height: height,
    width: width,
  }
})