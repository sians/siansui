import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme, isClickable } = props;
  return {
    border: `1px solid ${theme.colors.grey}`,
    borderRadius: theme.borderRadius,
    padding: theme.margin,


    '&:hover': isClickable && {
      boxShadow: theme.boxShadowBig,
      cursor: 'pointer'
    }
  }
})