import styled from 'styled-components';

export const Overlay = styled.div(props => {
  const { theme, isActive } = props;
  return { 
    height: `calc(100vh - ${theme.nav.height}px)`,
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    left: 0,
    backdropFilter: 'blur(5px)',
    opacity: isActive ? 1 : 0,
    visibility: isActive ? 'visible' : 'hidden',
    transition: 'opacity 0.5s, visibility 0.5s',
  }
})
