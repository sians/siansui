import styled from 'styled-components';

export const ButtonLink = styled.button(props => {
  const { theme, variant, isBold } = props;

  const variants = {
    sidebar: {
      textDecoration: 'none',
      color: theme.colors.fg,
      background: 'none',
      outline: 'none',
      border: 'none',
      width: '100%',
      textAlign: 'left',
      padding: theme.margin,
      fontFamily: theme.font.family.base,
      fontSize: 14,
      fontWeight: 400,
      height: '100%',
      borderRadius: theme.borderRadius.main,      
  
      '&:hover': {
        cursor: 'pointer',
        color: theme.colors.fg,
        backgroundColor: theme.colors.secondary.base,
      }
    },
    small: {
      fontSize: '0.9rem',
      padding: 0
    },
    nostyle: {
      textDecoration: 'none',
      color: theme.colors.fg,
      background: 'none',
      outline: 'none',
      border: 'none',
      fontSize: 'inherit',
      fontWeight: 'normal',
      '&:hover': {
        cursor: 'pointer',
        color: theme.colors.fg,
      }      
    }
  }
  
  const btBottomPadding = 3;
  const mainStyles = {
    color: theme.colors.main.base,
    fontFamily: theme.font.family.base,
    fontSize: theme.font.size.body,
    outline: 'none',
    border: 'none',
    fontWeight: isBold ? 'bold' : 400,

    background: `
      linear-gradient(to right, ${theme.colors.bg}, ${theme.colors.bg}),
      linear-gradient(to right, ${theme.colors.secondary.base}, ${theme.colors.secondary.base})`,
    backgroundSize: '100% 0.6em, 0 0.6em',
    backgroundPosition: '100% 100%, 0 100%',
    backgroundRepeat: 'no-repeat',
    paddingBottom: `${btBottomPadding}px`,
    transition: 'all 400ms',
  
    '&:hover, &:focus': {
      backgroundSize: "0 0.6em, 100% 0.6em",
      color: theme.colors.main.base,
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
    color: theme.colors.main.base,
    position: 'inline-block',
    padding: `0px ${theme.margin / 3}px`,
    fontSize: theme.font.size.body,
    fontWeight: isBold ? 'bold' : 400,
    textDecoration: 'none',
    background: `
      linear-gradient(to right, ${theme.colors.bg}, ${theme.colors.bg}),
      linear-gradient(to right, ${theme.colors.secondary.base}, ${theme.colors.secondary.base})`,
    backgroundSize: '100% 0.6em, 0 0.6em',
    backgroundPosition: '100% 100%, 0 100%',
    backgroundRepeat: 'no-repeat',
    paddingBottom: `${btBottomPadding}px`,
    transition: 'all 400ms',
  
    '&:hover, &:focus': {
      backgroundSize: "0 0.6em, 100% 0.6em",
      color: theme.colors.main.base,
      cursor: 'pointer'
    }

  }
})