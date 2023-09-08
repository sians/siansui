import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme } = props;
  return {
    '.offscreen': {
      marginBottom: theme.margin
    }
  }
})

export const Header = styled.div(props => {
  const { theme } = props;
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    padding: `${theme.margin*0.5}px 0px `,
    borderBottom: `1px solid ${theme.colors.grey.main}`,

    '&:hover': {
      cursor: 'pointer'
    }
  }
})

export const Content = styled.div(props => {
  const { theme, isExpanded, height } = props;

  return {
    padding: `0px ${theme.margin / 2}px`,
    overflow: 'hidden',
    transition: 'height 0.5s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
    height: isExpanded ? height : 0, 
    opacity: isExpanded ? 1 : 0,
    visibility: isExpanded ? 'visible' : 'hidden',
  }
})