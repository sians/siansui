import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme, isDisabled, isHovered } = props;
  return {
    display: 'flex',
    alignItems: 'center',
    color: isDisabled && theme.colors.grey.main,
    
    'label': {
      cursor: isDisabled 
        ? 'default'
        : isHovered ? 'pointer' : 'default',
      padding: 4,
      display: 'flex',
      alignItems: 'center',
      'p': {
        margin: 0,
        fontSize: '0.9rem'
      },        
    }
  }
})

export const Box = styled.input(props => {
  const { theme, isHovered, disabled, checked } = props;

  const borderSize = 1;
  const borderColor = isHovered 
    ? theme.colors.main.base 
    : checked ? theme.colors.main.base : theme.colors.grey.main;
  const boxSize = theme.margin;
  const tickSize = theme.margin/1.5;

  const baseStyles = {
    '-webkit-appearance': 'none',
    appearance: 'none',
  
    border: `${borderSize}px solid ${borderColor}`,
    width: boxSize,
    height: boxSize,
    borderRadius: theme.borderRadius.small,
    cursor: isHovered && 'pointer',
    position: 'relative',
  }

  const checkedStyles = {
    backgroundColor: theme.colors.main.base,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: `calc(50% - ${tickSize/2}px)`,
      left: `calc(50% - ${tickSize/2}px)`,
      width: tickSize,
      height: tickSize,
      backgroundColor: theme.colors.bg,
      clipPath: 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
      transformOrigin: 'bottom left',
    },        
  }

  const disabledStyles = {
    backgroundColor: checked 
      ? `${theme.colors.main.base}30`
      : theme.colors.lightestGrey,
    border: `${borderSize}px solid ${checked ? `${theme.colors.main.base}50` : theme.colors.grey.main}`,
    cursor: 'default'
  }

  return {
    ...baseStyles,
    ...(checked && checkedStyles),
    ...(disabled && disabledStyles)
  }
})