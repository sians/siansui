import styled from 'styled-components';

export const Page = styled.div(props => {
  const { theme } = props;
  
  const margin = theme.margin*2
  const height = `calc(100vh - ${theme.nav.height + margin*2}px)`
  
  return {
    height: height,
    margin: `${margin}px auto`,
    maxWidth: 600,
    textAlign: 'center',

    'img': {
      height: 400
    },

    'p': {
      marginBottom: theme.margin
    }
  }
})