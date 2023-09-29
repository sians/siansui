import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme } = props;
  return {
    display: 'flex',
    padding: theme.margin,
    alignItems: 'center',
    justifyContent: 'space-between',

    '.icons': {
      display: 'flex',
      alignItems: 'center',

      '.icon': {
        marginRight: theme.margin*1.5,

        '&:hover': {
          cursor: 'pointer'
        }
      }
    }
  }
})

