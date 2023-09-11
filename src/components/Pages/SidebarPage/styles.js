import styled from 'styled-components';

export const Page = styled.div(props => {
  const { theme } = props;
  return {
    height: `calc(100vh - ${theme.nav.height}px - ${theme.margin * 3}px)`,
    width: '100vw',
    overflowY: 'scroll',
    position: 'relative',
    paddingTop: theme.margin * 3,

    '.group-content': {
      '.rw-card': {
        marginTop: theme.margin,
        maxHeight: 27,
        '&:last-of-type': {
          marginBottom: theme.margin,
        }
      }
    }
  }
})

export const Content = styled.article(props => {
  const { theme, isMobile } = props;

  const margin = theme.margin;
  const sidebarWidth = isMobile ? 0 : theme.sidebar.width;
  
  return {
    paddingLeft: sidebarWidth,
    margin: `0px ${margin * 2}px`,
    maxWidth: theme.page.maxWidth,

    'section': {
      margin: `${margin * 3}px 0px`
    }
  }
})

