import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme } = props;

  return {
    height: theme.navHeight,
    boxShadow: "0px 2px 8px 0px rgba(42, 36, 50, 0.15)",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 14,

    '.logo-container': {
      minWidth: theme.sidebarWidth,
      borderRight: `1px solid ${theme.colors.grey}`,
      margin: theme.margin
    },

    '.main-container': {
      width: '100%',
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
    height: '100%',    
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