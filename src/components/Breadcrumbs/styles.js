import styled from 'styled-components';

export const Container = styled.div(props => {
  return {
    display: 'flex'
  }
})

export const Crumb = styled.div(props => {
  const { theme, isLast } = props;
  return {
    '.divider': {
      margin: `0px ${theme.margin}px`
    },

    '.text:hover': !isLast && {
      cursor: 'pointer',
      color: theme.colors.main.base
    }
  }
})
