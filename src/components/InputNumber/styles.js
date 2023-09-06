import styled from 'styled-components';

const makeSharedStyles = (theme) => {
  const padding = theme.margin / 2;
  const borderSize = 1;
  const totalHeight = 36;
  
  return {
    padding: padding,
    borderSize: borderSize,
    totalHeight: totalHeight,
    height: totalHeight - padding*2 - borderSize*2
  }  
}

export const Container = styled.div(props => {
  const { theme, isFullWidth, isLabelHidden, hasError } = props;
  return {
    position: 'relative',
    'label': {
      position: 'relative',
      display: 'inline-block',
      width: isFullWidth ? '100%' : 'fit-content',
      fontWeight: 'bold',
      opacity: isLabelHidden ? 0 : 0.7,
      fontSize: '0.9rem',
      'p': {
        margin: 0
      }
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

export const Input = styled.input(props => {
  const { theme, isFullWidth, isHovered, isFocused, hasError, iconKeys, styles } = props;
  const { padding, borderSize, height  } = makeSharedStyles(theme);

  const outlineSize = 2;
  const width = isFullWidth && `calc(100% - ${(padding*2) + (borderSize*2)}px)`;

  const hasBorder = isHovered || isFocused;

  const baseStlyes = {
    padding: padding,
    width: width,
    height: height,
    backgroundColor: theme.colors.bg,
    color: theme.colors.fg,
    border: `${borderSize}px solid ${hasBorder ? theme.colors.main.base : theme.colors.main.light}`,
    borderRadius: theme.borderRadius.small,
    outline: isFocused && `${outlineSize}px solid ${theme.colors.main.light}`,
    transition: 'border 0.3s',

    '&::placeholder': {
      color: theme.colors.grey.dark,
      fontFamily: theme.font.family.base
    },

    // remove default styles for arrows
    '&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    "&[type='number']": {
      '-moz-appearance': 'textfield'
    }
  }

  const errorStyles = {
    border: `${borderSize}px solid ${theme.colors.error.main}`,
    outline: isFocused && `${outlineSize}px solid ${theme.colors.error.light}`,
  }

  const iconPadding = theme.margin*2;
  const iconStyles = {
    paddingLeft: iconKeys?.includes('leftIcon') && iconPadding,
    paddingRight: iconKeys?.includes('rightIcon') && iconPadding,
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

export const Arrows = styled.div(props => {
  const { theme, isHovered, isDark } = props;
  const { totalHeight, borderSize } = makeSharedStyles(theme);

  return {
    opacity: isHovered ? 1 : 0,
    height: totalHeight,
    width: theme.margin * 1.5,
    position: 'absolute',
    bottom: totalHeight / 2,
    right: 2,
    transition: 'opacity 0.3s',
    '.arrow': {
      height: (totalHeight / 2) - (borderSize*2),
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center',
      borderLeft: `1px solid ${theme.colors.main.light}`,
      borderRadius: `0px ${theme.borderRadius.small}px ${theme.borderRadius.small}px 0px`,
      
      '&:hover': {
        backgroundColor: isDark 
          ? theme.colors.main.light
          : theme.colors.main.lightest
      }
    }
  }
})