import styled from 'styled-components';

const ARROW = {
  height: 5,
  width: 8
}

export const Wrapper = styled.div({
  position: 'relative',
})

export const makePosition = (placement, childRect, tipRect) => {
  const margin = 16;
  const map = {
    top: {
      tip: {
        bottom: childRect.height + margin,
        right: ((childRect.width - tipRect.width)/2)
      },
      arrow: {

      }
    },
    right: {
      tip: {
        bottom: ((childRect.height - tipRect.height)/2),
        left: `calc(100% + ${margin}px)`
      },
      arrow: {

      }
    },
    bottom: {
      tip: {
        right: ((childRect.width - tipRect.width)/2),
        top: `calc(100% + ${margin}px)`
      },
      arrow: {

      }
    },
    left: {
      tip: {
        bottom: ((childRect.height - tipRect.height)/2),
        right: `calc(100% + ${margin}px)`
      },
      arrow: {
        right: -8,
        top: (tipRect.height-ARROW.height)/2 - (ARROW.height/2)
      }
    } 
  }
  return map[placement]
}

export const Tip = styled.div(props => {
  const { theme, position, isActive} = props;
  
  const activeStyles = {
    ...position.tip,    
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    
    '.arrow': {
      ...position.arrow,
      position: 'absolute',
      width: 0,
      height: 0,
      borderTop: `${ARROW.height}px solid transparent`,
      borderLeft: `${ARROW.width}px solid ${theme.colors.secondary.base}`,
      borderBottom: `${ARROW.height}px solid transparent`,
    }
  }

  return {
    ...(isActive && activeStyles),
    display: !isActive && 'none'
  }
})

export const Inner = styled.div(props => {
  const { theme } = props;

  const padding = theme.margin/2;
  return {
    backgroundColor: theme.colors.secondary.base,
    whiteSpace: 'nowrap',
    color: theme.colors.fg,
    borderRadius: theme.borderRadius.small,
    padding: `${padding/2}px ${padding}px`,
    fontSize: '0.8rem'
  }
})