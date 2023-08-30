import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme, isClickable } = props;
  return {
    border: `1px solid ${theme.colors.grey.main}`,
    borderRadius: theme.borderRadius.main,
    padding: theme.margin,


    '&:hover': isClickable && {
      boxShadow: theme.boxShadow.big,
      cursor: 'pointer'
    }
  }
})