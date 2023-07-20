import styled from 'styled-components';

export const Container = styled.div(props => {
  const { maxWidth, isLink, isDisabled } = props;

  const size = 18;

  const baseStyles = {
    width: maxWidth ? maxWidth : size,
    height: maxWidth ? maxWidth : size,
  }

  const linkStyles = {
    '&:hover': { cursor: 'pointer' }
  }

  return {
    ...baseStyles,
    ...(isLink && !isDisabled && linkStyles),
  }

})