import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme, isFocused } = props;

  return {
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.grey,
    position: 'relative',

    '.hotkey': {
      opacity: isFocused ? 0 : 1,
      border: `1px solid ${theme.colors.midGrey}`,
      color: theme.colors.midGrey,
      padding: `0px ${theme.margin / 2}px`,
      borderRadius: 4,
      fontSize: 14,
      backgroundColor: `${theme.colors.midGrey}20`,
      transition: 'opacity 0.5s'
    }
  }
})

export const Input = styled.input(props => {
  const { theme } = props;

  return {
    marginLeft: theme.margin / 2,
    outline: 'none',
    border: 'transparent',
    height: `calc(${theme.navHeight}px - ${theme.margin}px)`,
    color: theme.colors.black,

    '&::placeholder': {
      color: theme.colors.midGrey,
      fontSize: 14
    }
  
  }
})