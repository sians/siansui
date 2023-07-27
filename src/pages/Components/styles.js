import styled from 'styled-components';

export const Page = styled.div(props => {
  const { theme } = props;
  return {
    height: `calc(100vh - ${theme.navHeight}px - ${theme.margin * 3}px)`,
    overflowY: 'scroll',
    position: 'relative',
    display: 'flex',
    paddingTop: theme.margin * 3
  }
})

export const Content = styled.article(props => {
  const { theme } = props;

  const margin = theme.margin;
  const width = `calc(100vw - ${theme.sidebarWidth}px - ${margin * 4}px)`

  return {
    paddingLeft: theme.sidebarWidth,
    margin: `0px ${margin * 2}px`,
    width: width,
    'section': {
      margin: `${margin * 3}px 0px`
    },
    '.group': {
      marginTop: theme.margin * 3
    },
    'h4': {
      marginBottom: theme.margin
    }
  }
})