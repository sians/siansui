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
  const { theme, isClickable, isDark } = props;

  const minHeight = 110;
  const baseStyles = {
    border: `1px solid ${theme.colors.grey.main}`,
    borderRadius: theme.borderRadius.main,
    padding: theme.margin,
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