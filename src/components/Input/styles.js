import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme, isLabelHidden, hasError } = props;
  
  return {
    position: 'relative',
    'label': {
      fontWeight: 'bold',
      'p': {
        opacity: isLabelHidden ? 0 : 0.7,
        height: isLabelHidden && 0,
        fontSize: '0.9rem',
        margin: 0
      }
    },
    '.sub-text': {
      fontSize: '0.75rem',
      margin: 0,
      color: hasError 
        ? theme.colors.error.main
        : theme.colors.main.base,
      height: 20,
      textAlign: hasError ? 'left' : 'right'
    }

  }
})

export const StyledInput = styled.input(props => {
  const { theme, isFullWidth, isHovered, isFocused, hasError, iconKeys, styles } = props;

  const padding = theme.margin / 2;
  const borderSize = 1;
  const outlineSize = 2;
  const totalHeight = 36;
  const height = totalHeight - padding*2 - borderSize*2;
  const width = isFullWidth && `calc(100% - ${(padding*2) + (borderSize*2)}px)`;

  const hasBorder = isHovered || isFocused;

  const baseStlyes = {
    padding: padding,
    width: width,
    height: height,
    color: theme.colors.fg,
    backgroundColor: theme.colors.bg,
    border: `${borderSize}px solid ${hasBorder ? theme.colors.main.base : theme.colors.main.light}`,
    borderRadius: theme.borderRadius.small,
    outline: isFocused && `${outlineSize}px solid ${theme.colors.main.light}`,
    transition: 'border 0.3s',

    '&::placeholder': {
      color: theme.colors.grey.dark,
      fontFamily: theme.font.family.base
    },
  }

  const errorStyles = {
    border: `${borderSize}px solid ${theme.colors.error.main}`,
    outline: isFocused && `${outlineSize}px solid ${theme.colors.error.light}`,
  }

  const iconPadding = theme.margin*2;
  const iconStyles = {
    paddingLeft: iconKeys.includes('leftIcon') && iconPadding,
    paddingRight: iconKeys.includes('rightIcon') && iconPadding,
    width: isFullWidth && `calc(100% - ${(borderSize*2) + (iconKeys.length * iconPadding) + (iconKeys.length === 1 && padding)}px)`
  }

  return {
    ...baseStlyes,
    ...(hasError && errorStyles),
    ...(iconKeys && iconKeys.length > 0 && iconStyles),
    ...(styles && styles)
  }
})

export const IconContainer = styled.div(props => {
  const { theme, isLeft } = props;

  return {
    position: 'absolute',
    top: theme.margin*2,
    left: isLeft && theme.margin/2,
    right: !isLeft && theme.margin/2,
    zIndex: 1,
  }
})