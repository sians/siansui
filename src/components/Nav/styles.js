import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div(props => {
  const { theme, isDark, isMobile } = props;

  const logoWidth = `calc(${theme.sidebar.width}px - ${theme.sidebar.padding * 2}px)`

  return {
    height: theme.nav.height,
    boxShadow: "0px 2px 8px 0px rgba(42, 36, 50, 0.15)",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 14,
    backgroundColor: isDark ? theme.colors.grey.light : theme.colors.bg,
    zIndex: 2,
    position: 'relative',

    '.logo-container': {
      minWidth: logoWidth,
      borderRight: !isMobile && `1px solid ${theme.colors.grey.main}`,
      margin: theme.margin,
      '&:hover': {
        cursor: 'pointer'
      }
    },

    '.main-container': {
      display: 'flex',
      justifyContent: isMobile ? 'flex-end' : 'space-between',
      alignItems: 'center',
      width: `calc(100% - ${theme.margin}px)`,
      paddingRight: theme.margin
    },

    'ul': {
      display: 'flex', 
      justifyContent: 'space-between',      
    }
  }
})

export const MenuItem = styled.div(props => {
  const { theme, isActive } = props;
  const borderTop = 4;

  return {
    padding: `0px ${theme.margin / 2}px`,
    marginRight: theme.margin / 2,
    display: 'flex',
    alignItems: 'center',
    borderTop: `${borderTop}px solid ${isActive ? theme.colors.main.base : 'transparent'}`,
    height: `calc(${theme.nav.height}px - ${borderTop}px)`,
    color: isActive && theme.colors.main.base,

    '&:hover': {
      borderTop: `${borderTop}px solid ${theme.colors.main.base}`,
      cursor: 'pointer'
    }
  }
})

export const MobileBurger = styled.div(props => {
  return {
    cursor: 'pointer'
  }
})


const fadeInGrow = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
const fadeOutShrink = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
`;
export const AnimateDropdown = styled.div`
  animation: ${props => {
    return props.isClosing
      ? css`${fadeOutShrink}  0.2s ease-out forwards;`
      : props.isOpening ? css`${fadeInGrow}  0.2s ease-out forwards;` : 'none;'
  }}
  
  ${props => {
    return `
      right: ${props.theme.margin}px;
      top: ${props.theme.nav.height - props.theme.margin/2}px;
      z-index: 10;
      position: absolute;
      visibility: ${props.isMenuOpen ? 'visible' : 'hidden'};
      opacity: ${props.isMenuOpen ? 1 : 0};
    `
  }}
`
