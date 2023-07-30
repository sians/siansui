import styled from 'styled-components';
import theme from 'theme';

const SIZE_MAP = {
  sm: {
    railHeight: theme.margin / 3,
    tickHeight: theme.margin / 1.5,
    thumbSize: theme.margin
  },
  lg: {
    railHeight: theme.margin / 1.5,
    tickHeight: theme.margin / 0.9,
    thumbSize: theme.margin * 1.5
  },
}

export const Container = styled.div(props => {
  const { value, hasIcons, max, size } = props;

  const valuePercent = value / max * 100;
  const borderRadius = theme.borderRadius;
  const railHeight = SIZE_MAP[size]?.railHeight;
  const thumbSize = SIZE_MAP[size]?.thumbSize;
  
  const width = `calc(100% - ${hasIcons ? theme.margin * 4 : ''}px)`

  return {
    position: 'relative',
    marginLeft: hasIcons && theme.margin * 2,
    display: 'flex',
    alignItems: 'center',
    width: width,
    height: theme.margin,

    '.rail': {
      width: '100%',
      height: railHeight,
      backgroundColor: theme.colors.mainLighter,
      borderRadius: borderRadius,
      position: 'absolute'
    },

    '.track': {
      width: valuePercent ? `${valuePercent}%` : 0,
      height: railHeight,
      borderRadius: borderRadius,
      backgroundColor: theme.colors.main,
      position: 'absolute',
      zIndex: 2
    },
    
    '.thumb': {
      position: 'absolute',
      left: `calc(${valuePercent}% - ${thumbSize / 2}px)`,
      height: thumbSize,
      width: thumbSize,
      borderRadius: '50%',
      backgroundColor: theme.colors.main,
    },    

    '.icon-container': {
      position: 'absolute',
      '&:hover': {
        cursor: 'default'
      }
    },
    '.icon-container.left': {
      left: 0 - theme.margin - theme.margin,
    },
    '.icon-container.right': {
      right: 0 - theme.margin - theme.margin,
    },    

    '&:hover': {
      cursor: 'pointer'
    }
  }
})

export const Tick = styled.div(props => {
  const { step, max, value, idx, size } = props;
  
  const tickColor = ((idx+1) * step) < value
    ? theme.colors.main
    : theme.colors.mainLighter;
  const thumbSize = SIZE_MAP[size]?.thumbSize;

  return {
    width: (max / step) + thumbSize / 2,
    height: SIZE_MAP[size]?.tickHeight,
    zIndex: -1,
    borderRight: `1px solid ${tickColor}`,
  }
})