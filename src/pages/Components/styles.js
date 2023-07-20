import styled from 'styled-components';

export const Page = styled.div(props => {
  const { theme } = props;
  return {
    height: `calc(100vh - ${theme.navHeight}px)`,
    overflowY: 'scroll',
    position: 'relative',
    display: 'flex',
    paddingTop: theme.margin * 3
  }
})