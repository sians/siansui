import styled from 'styled-components';

export const Content = styled.div(props => {
  const { theme } = props;
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: `calc(100vh - ${theme.nav.height}px)`,
    maxWidth: '80%',
    margin: 'auto',
    textAlign: 'center',
    zIndex: 1,
    position: 'relative',

    '.btn-container': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.margin * 4,
      '.components-btn': {
          marginRight: theme.margin
      }
    }
  }
})

export const Background = styled.div(props => {
  const { url } = props;
  return {
    backgroundImage: `url(${url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    opacity: 0.1
  }
})