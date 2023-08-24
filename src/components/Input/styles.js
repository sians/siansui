import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme, isLabelHidden, hasError } = props;
  return {
    position: 'relative',
    'label': {
      fontWeight: 'bold',
      opacity: isLabelHidden ? 0 : 0.7,
      fontSize: '0.9rem',
    },
    '.sub-text': {
      fontSize: '0.75rem',
      margin: 0,
      color: hasError 
        ? theme.colors.error.main
        : theme.colors.main,
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
    border: `${borderSize}px solid ${hasBorder ? theme.colors.main : theme.colors.mainLighter}`,
    borderRadius: theme.borderRadiusSmall,
    outline: isFocused && `${outlineSize}px solid ${theme.colors.mainLighter}`,
    transition: 'border 0.3s',

    '&::placeholder': {
      color: theme.colors.midGrey,
      fontFamily: theme.fontFamily
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
    zIndex: 3,
  }
})