import styled from 'styled-components';
import theme from 'theme';

const PADDING = theme.margin / 2;
const BORDER_SIZE = 1;
const TOTAL_HEIGHT = 36;
const HEIGHT = TOTAL_HEIGHT - PADDING*2 - BORDER_SIZE*2;

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
  const { isFullWidth, isHovered, isFocused, hasError, iconKeys, styles } = props;

  const outlineSize = 2;
  const width = isFullWidth && `calc(100% - ${(PADDING*2) + (BORDER_SIZE*2)}px)`;

  const hasBorder = isHovered || isFocused;

  const baseStlyes = {
    padding: PADDING,
    width: width,
    height: HEIGHT,
    border: `${BORDER_SIZE}px solid ${hasBorder ? theme.colors.main : theme.colors.mainLighter}`,
    borderRadius: theme.borderRadiusSmall,
    outline: isFocused && `${outlineSize}px solid ${theme.colors.mainLighter}`,
    transition: 'border 0.3s',

    '&::placeholder': {
      color: theme.colors.midGrey,
      fontFamily: theme.fontFamily
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
    border: `${BORDER_SIZE}px solid ${theme.colors.error.main}`,
    outline: isFocused && `${outlineSize}px solid ${theme.colors.error.light}`,
  }

  const iconPadding = theme.margin*2;
  const iconStyles = {
    paddingLeft: iconKeys?.includes('leftIcon') && iconPadding,
    paddingRight: iconKeys?.includes('rightIcon') && iconPadding,
    width: isFullWidth && `calc(100% - ${(BORDER_SIZE*2) + (iconKeys.length * iconPadding) + (iconKeys.length === 1 && PADDING)}px)`
  }

  return {
    ...baseStlyes,
    ...(hasError && errorStyles),
    ...(iconKeys && iconKeys.length > 0 && iconStyles),
    ...(styles && styles)
  }
})

export const IconContainer = styled.div(props => {
  const { isLeft } = props;

  return {
    position: 'absolute',
    top: theme.margin*2,
    left: isLeft && theme.margin/2,
    right: !isLeft && theme.margin/2,
    zIndex: 3,
  }
})

export const Arrows = styled.div(props => {
  const { isHovered } = props;

  return {
    opacity: isHovered ? 1 : 0,
    height: TOTAL_HEIGHT,
    width: theme.margin * 1.5,
    position: 'absolute',
    bottom: TOTAL_HEIGHT / 2,
    right: 2,
    transition: 'opacity 0.3s',
    '.arrow': {
      height: (TOTAL_HEIGHT / 2) - (BORDER_SIZE*2),
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center',
      borderLeft: `1px solid ${theme.colors.mainLighter}`,
      borderRadius: `0px ${theme.borderRadiusSmall}px ${theme.borderRadiusSmall}px 0px`,
      
      '&:hover': {
        backgroundColor: theme.colors.mainLightest
      }
    }
  }
})