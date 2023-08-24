import styled from 'styled-components';

export const ButtonLink = styled.button(props => {
  const { theme, variant, isBold } = props;

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
      borderRadius: theme.borderRadius,      
  
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme.colors.secondary,
      }
    },
    small: {
      fontSize: '0.9rem',
      padding: 0
    },
    nostyle: {
      textDecoration: 'none',
      color: theme.colors.black,
      background: 'none',
      outline: 'none',
      border: 'none',
      fontSize: 'inherit',
      fontWeight: 'normal',
      '&:hover': {
        cursor: 'pointer',
        color: theme.colors.black,
      }      
    }
  }
  
  const btBottomPadding = 3;
  const mainStyles = {
    color: theme.colors.main,
    fontFamily: theme.fontFamily,
    fontSize: theme.text.sizes.body,
    outline: 'none',
    border: 'none',
    fontWeight: isBold ? 'bold' : 400,

    background: `
      linear-gradient(to right, ${theme.colors.white}, ${theme.colors.white}),
      linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.secondary})`,
    backgroundSize: '100% 0.6em, 0 0.6em',
    backgroundPosition: '100% 100%, 0 100%',
    backgroundRepeat: 'no-repeat',
    paddingBottom: `${btBottomPadding}px`,
    transition: 'all 400ms',
  
    '&:hover, &:focus': {
      backgroundSize: "0 0.6em, 100% 0.6em",
      color: theme.colors.main,
      cursor: 'pointer'
    }
  }

  return {
    ...mainStyles,
    ...(variant && variants[variant]),
  }
})

export const ALink = styled.a(props => {
  const { theme, isBold } = props;
  
  const btBottomPadding = 3;
  
  return {
    color: theme.colors.main,
    position: 'inline-block',
    padding: `0px ${theme.margin / 3}px`,
    fontSize: theme.text.sizes.body,
    fontWeight: isBold ? 'bold' : 400,
    textDecoration: 'none',
    background: `
      linear-gradient(to right, ${theme.colors.white}, ${theme.colors.white}),
      linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.secondary})`,
    backgroundSize: '100% 0.6em, 0 0.6em',
    backgroundPosition: '100% 100%, 0 100%',
    backgroundRepeat: 'no-repeat',
    paddingBottom: `${btBottomPadding}px`,
    transition: 'all 400ms',
  
    '&:hover, &:focus': {
      backgroundSize: "0 0.6em, 100% 0.6em",
      color: theme.colors.main,
      cursor: 'pointer'
    }

  }
})