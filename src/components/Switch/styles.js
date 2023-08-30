import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme, isActive, isDisabled } = props;

  const borderRadius = theme.margin * 2;
  const padding = 2;
  const height = theme.margin * 2 - padding;
  const width = height * 2 - padding;

  const baseStyles = {
    position: 'relative',
    padding: padding,
    display: 'flex',
    alignItems: 'center',
    justifyContent: isActive ? 'flex-end' : 'flex-start',
    backgroundColor: isActive ? theme.colors.main.base : theme.colors.main.light,
    height: height,
    width: width,
    borderRadius: borderRadius,
    transition: 'background-color 0.2s; justify-content 0.3s',

    '.toggle': {
      backgroundColor: theme.colors.bg,
      borderRadius: borderRadius,
      height: height - 2,
      width: width / 2,
      boxShadow: theme.boxShadow.small
    },

    '&:hover': !isDisabled && {
      cursor: 'pointer'
    }
  }

  const disabledStyles = {
    backgroundColor: theme.colors.grey.main,
    '.toggle': {
      ...baseStyles['.toggle'],
      boxShadow: 'none'
    }
  }

  return {
    ...baseStyles,
    ...(isDisabled && disabledStyles)
  }
})