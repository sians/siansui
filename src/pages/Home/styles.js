import styled from 'styled-components';

export const Content = styled.div(props => {
  const { theme } = props;
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: `calc(100vh - ${theme.navHeight}px)`,
    maxWidth: '80%',
    margin: 'auto',
    textAlign: 'center',

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