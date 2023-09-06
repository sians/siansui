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
  // const width = `calc(100vw - ${theme.sidebar.width}px - ${margin * 5}px)`
  
  return {
    // paddingLeft: theme.sidebar.width,
    // margin: `0px ${margin * 2}px`,
    // maxWidth: theme.page.maxWidth,
    // width: width,

    'section': {
      margin: `${margin * 3}px 0px`
    }
  }
})



const shrink = keyframes`
  0% {
    width: var(--initial-width);
  }
  100% {
    width: var(--final-width);
  }
`;

const expand = keyframes`
  0% {
    width: var(--final-width);
  }
  100% {
    width: var(--initial-width);
  }
`;

export const Animate = styled.div`
  margin: 0px ${props => props.theme.margin * 2}px;
  position: absolute;
  right: 0;
  width: ${props => {
    return props.isOpen 
      ? `calc(100vw - ${props.theme.sidebar.width}px - ${props.theme.margin * 5}px)`
      : `calc(100vw - ${props.theme.margin * 5}px)`
  }};

  --initial-width: calc(100vw - ${props => props.theme.margin * 5}px);
  --final-width: calc(100vw - ${props => props.theme.sidebar.width}px - ${props => props.theme.margin * 5}px);

  animation: ${props => {
    return props.isClosing 
      ? css`${expand} 0.8s ease-out forwards`
      : props.isOpen && css`${shrink} 0.8s ease-out forwards`
  }};
`;