import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme, minHeight } = props;
  return {
    height: minHeight,
    backgroundColor: theme.colors.grey.light,
    position: 'relative'
  }
})

export const Images = styled.div(props => {
  const { activeIdx, width, transitionType } = props;

  const isFade = transitionType === 'fade';
  
  return {
    height: '100%',
    width: width ? width : '100%',
    overflow: 'clip',
    position: 'relative',

    '.inner': {
      position: 'absolute',
      minWidth: width,
      left: isFade ? 0 : -((activeIdx) * width),
      transition: 'left 0.3s ease-in-out',
      height: '100%',
      display: 'flex',
    }
  }
})

export const Image = styled.img(props => {
  const { width, transitionType, isActive, isStretchToFit } = props;
  const isFade = transitionType === 'fade';

  const imageWidth = isFade
  ? isStretchToFit 
    ? '100%' : undefined
  : width ? width : '100%';

  return {
    position: isFade ? 'absolute' : undefined,
    height: isStretchToFit ? '100%' : undefined,
    minWidth: imageWidth,
    width: imageWidth,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: isActive ? 1 : 0,
    transition: 'opacity 0.3s'
  }
})

export const Chevrons = styled.div(props => {
  const { theme } = props;

  const px = theme.margin;

  return {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: `calc(100% - ${px*2}px)`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `0px ${px}px`,

    '.icon': {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  }
})

export const Dots = styled.div(props => {
  const { theme, dotType, dotPosition } = props;

  const types = {
    round: {
      borderRadius: '50%',
      height: theme.margin / 2,
      width: theme.margin / 2
    },
    dash: {
      height: theme.margin / 4,
      width: theme.margin
    }
  }

  return {
    position: 'absolute',
    width: '100%',
    [dotPosition]: theme.margin,
    display: 'flex',
    justifyContent: 'center',

    '.dot': {
      ...types[dotType],
      backgroundColor: theme.colors.bg,
      margin: `0px ${theme.margin / 4}px`,

      '&:first-child': {
        marginLeft: 0
      },
      '&:last-child': {
        marginRight: 0
      },      
      '&:hover': {
        cursor: 'pointer'
      }
    },

    '.dot.active': {
      backgroundColor: theme.colors.fg,
    }
  }
})