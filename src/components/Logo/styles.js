import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme } = props;
  return {
    display: 'flex',
    fontSize: 26,
    fontFamily: 'Spartan',
    letterSpacing: -2,

    'span': {
      margin: `0px ${theme.margin / 4}px`
    }
  }
})