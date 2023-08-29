import styled, { keyframes, css } from 'styled-components';
import theme from 'theme';

export const Container = styled.div(props => {
  const { theme } = props;

  const logoWidth = `calc(${theme.sidebarWidth}px - ${theme.sidebarPadding * 2}px)`

  return {
    height: theme.navHeight,
    boxShadow: "0px 2px 8px 0px rgba(42, 36, 50, 0.15)",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 14,
    backgroundColor: theme.colors.white,

    '.logo-container': {
      minWidth: logoWidth,
      borderRight: `1px solid ${theme.colors.grey}`,
      margin: theme.margin,
      '&:hover': {
        cursor: 'pointer'
      }
    },

    '.main-container': {
      display: 'flex',
      justifyContent: 'space-between',
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
    borderTop: `${borderTop}px solid ${isActive ? theme.colors.main : 'transparent'}`,
    height: `calc(${theme.navHeight}px - ${borderTop}px)`,
    color: isActive && theme.colors.main,

    '&:hover': {
      borderTop: `${borderTop}px solid ${theme.colors.main}`,
      cursor: 'pointer'
    }
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
      top: ${props.theme.navHeight - theme.margin/2}px;
      z-index: 10;
      position: absolute;
      visibility: ${props.isMenuOpen ? 'visible' : 'hidden'};
      opacity: ${props.isMenuOpen ? 1 : 0};
    `
  }}
`
