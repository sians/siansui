import styled from 'styled-components';

export const Container = styled.div(props => {
  const { size, isLink, isDisabled, rotateBy, opacity } = props;

  const baseStyles = {
    width: size,
    height: size,
    transform: rotateBy && `rotate(${rotateBy}deg)`,
    transition: 'transform 0.3s',
    opacity: opacity
  }

  const linkStyles = {
    '&:hover': { cursor: 'pointer' }
  }

  return {
    ...baseStyles,
    ...(isLink && !isDisabled && linkStyles),
  }

})