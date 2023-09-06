import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div(props => {
  const { theme , isExpanded} = props;
  return {
    position: 'fixed',
    right: 0,
    bottom: 0,
    padding: theme.margin * 2,

    '& > *': {
      marginTop: theme.margin / 2
    },

    '.menu-toggle': {
      position: 'relative',
      zIndex: 2,
      backgroundColor: isExpanded && theme.colors.main.base
    }
  }
})


const fadeInSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutSlideDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);

  }
  100% {
    opacity: 0;
    transform: translateY(100px);
  }
`;

export const Animate = styled.div`
animation: ${props => {
  return props.isClosing 
    ? css`${fadeOutSlideDown}  0.3s ease-out forwards;`
    : css`${fadeInSlideUp} 0.3s ease-out forwards;`
}}
`;