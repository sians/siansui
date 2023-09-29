import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme, isToday, isActiveMonth, isHovered, isSelected } = props;

  const totalHeight = 100;
  const borderSize = 1;
  const padding = theme.margin/2;
  const height = totalHeight - borderSize*2 - padding*2;

  const hoverStyles = {
    cursor: 'pointer',
    backgroundColor: theme.colors.main.light
  }

  return {
    borderRight: `${borderSize}px solid ${theme.colors.grey.main}`,
    padding: padding,
    height: height,
    backgroundColor: isSelected 
      ? theme.colors.secondary.base
      : isActiveMonth ? 'transparent' : theme.colors.grey.light,

    '.date': isToday && {
      width: theme.margin,
      height: theme.margin,
      padding: `${theme.margin/4}px ${theme.margin/4}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      backgroundColor: theme.colors.main.base,
      color: theme.colors.bg,
      fontWeight: 'bold'
    },

    ...(isHovered && hoverStyles)
  }
})