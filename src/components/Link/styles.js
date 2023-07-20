import styled from 'styled-components';

export const ButtonLink = styled.button(props => {
  const { theme, variant } = props;

  const variants = {
    sidebar: {
      textDecoration: 'none',
      color: theme.colors.black,
      background: 'none',
      outline: 'none',
      border: 'none',
      width: '100%',
      textAlign: 'left',
      padding: theme.margin,
      fontFamily: theme.fontFamily,
      fontSize: 14,
      height: '100%',
      width: '100%',
      borderRadius: theme.borderRadius,      
  
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme.colors.secondary,
      }
    }
  }

  const mainStyles = {
    color: theme.colors.main,
    '&:hover': {
      cursor: 'pointer',
      color: theme.colors.mainDarker
    }
  }

  return {
    ...(variants[variant] || mainStyles),
  }
})