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

export const Content = styled.article(props => {
  const { theme } = props;

  return {
    paddingLeft: theme.sidebarWidth,
    margin: `0px ${theme.margin * 2}px`,
    'section': {
      margin: `${theme.margin * 3}px 0px`
    }
  }
})