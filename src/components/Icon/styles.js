import styled from 'styled-components';

export const Container = styled.div(props => {
  const { maxWidth, isLink, isDisabled, rotateBy } = props;

  const size = 18;

  const baseStyles = {
    width: maxWidth ? maxWidth : size,
    height: maxWidth ? maxWidth : size,
    transform: rotateBy && `rotate(${rotateBy}deg)`,
    transition: 'transform 0.3s'
  }

  const linkStyles = {
    '&:hover': { cursor: 'pointer' }
  }

  return {
    ...baseStyles,
    ...(isLink && !isDisabled && linkStyles),
  }

})