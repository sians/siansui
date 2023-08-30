import styled from 'styled-components';

export const Page = styled.div(props => {
  const { theme } = props;
  return {
    height: `calc(100vh - ${theme.nav.height}px - ${theme.margin * 3}px)`,
    overflowY: 'scroll',
    position: 'relative',
    display: 'flex',
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
    width: width,
    '.floating-action-btn': {
      position: 'fixed',
      right: theme.margin * 1.5,
      bottom: theme.nav.height + theme.margin * 2.5
    },

    'section': {
      margin: `${margin * 3}px 0px`
    }
  }
})