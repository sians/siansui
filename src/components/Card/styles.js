import { makeSelectStyles } from 'components/Search/styles';
import styled from 'styled-components';

const makeDarkStyles = (theme) => {
  return {
    backgroundColor: theme.colors.grey.light,
    '&:hover': {
      cursor: 'pointer',
      border: `1px solid ${theme.colors.main.base}`,
    }
  }
}

export const Container = styled.div(props => {
  const { theme, isClickable, isDark, layoutType } = props;
  const isGrid = layoutType === 'grid';

  const minHeight = isGrid ? 110 : theme.margin*1.5;
  const baseStyles = {
    border: `1px solid ${theme.colors.grey.main}`,
    borderRadius: theme.borderRadius.main,
    padding: isGrid ? theme.margin : `${theme.margin/2}px ${theme.margin}px`,
    minHeight: minHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': isClickable && {
      boxShadow: theme.boxShadow.big,
      cursor: 'pointer'
    }
  }
  return {
    ...baseStyles,
    ...(isDark && makeDarkStyles(theme))
  }
})