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
  const width = `calc(100vw - ${theme.sidebarWidth}px - ${margin * 5}px)`

  return {
    paddingLeft: theme.sidebarWidth,
    margin: `0px ${margin * 2}px`,
    width: width,
    position: 'relative',
    '.floating-action-btn': {
      position: 'absolute',
      right: 0,
      bottom: theme.navHeight + theme.margin * 2
    },

    'section': {
      margin: `${margin * 3}px 0px`
    }
  }
})