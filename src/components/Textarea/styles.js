import styled from 'styled-components';

export const Container = styled.div(props => {
  const { isLabelHidden } = props;
  return {
    'label': {
      display: 'flex',
      flexDirection: 'column',
      fontWeight: 'bold',
      opacity: isLabelHidden ? 0 : 0.7,
      fontSize: '0.9rem',
    }  
  }
})

export const StyledTextarea = styled.textarea(props => {
  const { theme, isFullWidth, isHovered, isFocused, hasError } = props;

  const padding = theme.margin / 2;
  const borderSize = 1;
  const outlineSize = 2;
  const width = isFullWidth && `calc(100% - ${(padding*2) + (borderSize*2)}px)`;

  const hasBorder = isHovered || isFocused;

  const baseStlyes = {
    padding: padding,
    width: width,
    border: `${borderSize}px solid ${hasBorder ? theme.colors.main.base : theme.colors.main.light}`,
    borderRadius: theme.borderRadius.small,
    outline: isFocused && `${outlineSize}px solid ${theme.colors.main.light}`,
    transition: 'border 0.3s',
    fontFamily: theme.font.family.base,

    '&::placeholder': {
      color: theme.colors.grey.dark,
      fontFamily: theme.font.family.base
    },
  }

  const errorStyles = {
    border: `${borderSize}px solid ${theme.colors.error.main}`,
    outline: isFocused && `${outlineSize}px solid ${theme.colors.error.light}`,
  }  
  return {
    ...baseStlyes,
    ...(hasError && errorStyles),

  }
})