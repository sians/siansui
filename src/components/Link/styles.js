import styled from 'styled-components';

const baseStyles = (theme, isBold) => ({
  color: theme.colors.main.base,
  fontFamily: theme.font.family.base,
  fontSize: theme.font.size.body,
  outline: 'none',
  border: 'none',
  fontWeight: isBold ? 'bold' : 400,
  transition: 'all 400ms',
  '&:hover, &:focus': {
    cursor: 'pointer'
  }
});

const textOnlyStyle = (theme) => ({
  textDecoration: 'none',
  color: theme.colors.fg,
  background: 'none',
  outline: 'none',
  border: 'none'
});

const mainBackgroundStyle = (theme, btBottomPadding) => ({
  background: `
    linear-gradient(to right, ${theme.colors.bg}, ${theme.colors.bg}),
    linear-gradient(to right, ${theme.colors.secondary.base}, ${theme.colors.secondary.base})`,
  backgroundSize: '100% 0.6em, 0 0.6em',
  backgroundPosition: '100% 100%, 0 100%',
  backgroundRepeat: 'no-repeat',
  paddingBottom: `${btBottomPadding}px`,
  '&:hover, &:focus': {
    backgroundSize: "0 0.6em, 100% 0.6em",
    cursor: 'pointer'
  }
});

export const ButtonLink = styled.button(({ theme, variant, isBold }) => {
  const btBottomPadding = 3;
  const variants = {
    sidebar: {
      ...textOnlyStyle(theme),
      width: '100%',
      textAlign: 'left',
      padding: theme.margin,
      fontSize: 14,
      fontWeight: 400,
      height: '100%',
      borderRadius: theme.borderRadius.main,
      '&:hover': {
        backgroundColor: theme.colors.secondary.base,
      }
    },
    small: {
      fontSize: '0.9rem',
      padding: 0
    },
    nostyle: {
      ...textOnlyStyle(theme),
      fontSize: 'inherit',
      fontWeight: 'normal'
    },
    navburger: {
      ...textOnlyStyle(theme),
      height: '100%',
      width: '100%',
      fontSize: 'inherit',
      fontWeight: 'normal'
    }
  };

  return {
    ...baseStyles(theme, isBold),
    ...mainBackgroundStyle(theme, btBottomPadding),
    ...(variant && variants[variant]),
  };
});

export const ALink = styled.a(({ theme, isBold }) => {
  const btBottomPadding = 3;

  return {
    ...baseStyles(theme, isBold),
    ...mainBackgroundStyle(theme, btBottomPadding),
    position: 'inline-block',
    padding: `0px ${theme.margin / 3}px`,
    textDecoration: 'none'
  };
});
