import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div(props => {
  const { theme } = props;

  const padding = theme.sidebar.padding;
  const width = `calc(${theme.sidebar.width}px - ${padding * 2}px)`

  return {
    '.animate': {
      width: width,
      height: `calc(100vh - ${theme.nav.height * 2}px)`,
      borderRight: `1px solid ${theme.colors.grey.main}`,

      margin: theme.margin,
      overflowY: 'scroll',
      position: 'absolute',
      zIndex: 1,  
    },

    'h4': {
      borderBottom: `1px solid ${theme.colors.grey.main}`,
      paddingBottom: theme.margin / 2,
      width: `calc(${theme.sidebar.width - padding * 2}px - ${theme.margin}px)`,
      margin: `${theme.margin / 2}px 0px`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer'
      }
    },
  }
})

const ITEM_HEIGHT = 57 + 8;
export const ItemGroup = styled.div(props => {
  const { isExpanded, numItemsInGroup } = props;
  return {
    'ul': {
      overflow: 'hidden',
      transition: 'height 0.5s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
      height: isExpanded ? numItemsInGroup * ITEM_HEIGHT : 0, // Adjust '500px' to fit your needs.
      opacity: isExpanded ? 1 : 0,
      visibility: isExpanded ? 'visible' : 'hidden',
  
    }
  }
})

export const ListItem = styled.li(props => {
  const { theme, isActive } = props;
  
  const width = `calc(${theme.sidebar.width}px - ${theme.margin * 3}px)`

  return {
    marginBottom: theme.margin / 2,
    width: width,
    height: 25 + theme.margin * 2,
    borderRadius: theme.borderRadius.main,

    backgroundColor: isActive && theme.colors.main.light,
    'button': isActive && {
      color: theme.colors.main.base,

      '&:hover': {
        color: theme.colors.fg
      }
    }
  }
})


const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;
const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;


export const Animate = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};

  animation: ${props => {
    return props.isClosing 
      ? css`${slideOut}  0.8s ease-out forwards;`
      : props.isOpen && css`${slideIn} 0.8s ease-out forwards;`
  }}
`

// const slideIn = keyframes`
//   0% {
//     width: var(--closed-width);
//   }
//   100% {
//     width: var(--open-width);
//   }
// `;
// const slideOut = keyframes`
//   0% {
//     width: var(--open-width);    
//   }
//   100% {
//     width: var(--closed-width);
//   }
// `;


// export const Animate = styled.div`
//   position: absolute;
//   height: 100vh;
//   top: 0;
//   left: 0;

//   --open-width: ${props => props.theme.sidebar.width}px; 
//   --closed-width: 0px;

//   animation: ${props => {
//     return props.isClosing 
//       ? css`${slideOut}  0.8s ease-out forwards;`
//       : props.isOpen && css`${slideIn} 0.8s ease-out forwards;`
//   }}
// `