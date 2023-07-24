import styled from 'styled-components';

export const Container = styled.div(props => {
  const { size, isLink, isDisabled, rotateBy } = props;

  const defaultSize = 18;

  const baseStyles = {
    width: size ? size : defaultSize,
    height: size ? size : defaultSize,
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