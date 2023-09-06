import styled, { keyframes, css } from 'styled-components';

export const Page = styled.div(props => {
  const { theme } = props;
  return {
    height: `calc(100vh - ${theme.nav.height}px - ${theme.margin * 3}px)`,
    width: '100vw',
    overflowY: 'scroll',
    position: 'relative',
    paddingTop: theme.margin * 3
  }
})

export const Content = styled.article(props => {
  const { theme } = props;

  const margin = theme.margin;
  const width = `calc(100vw - ${theme.sidebar.width}px - ${margin * 5}px)`
  
  return {
    paddingLeft: theme.sidebar.width,
    margin: `0px ${margin * 2}px`,
    maxWidth: theme.page.maxWidth,
    width: width,

    'section': {
      margin: `${margin * 3}px 0px`
    }
  }
})

