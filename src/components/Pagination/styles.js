import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme } = props;
  return {
    display: 'flex',
    alignItems: 'center',

    '.pagination-pill': {
      margin: `0px ${theme.margin/2}px`,
      '&:first-child': { marginLeft: 0 },
      '&:last-child': { marginRight: 0 },
    }
  }
})

export const Pill = styled.div(props => {
  const { theme, shape, hasBorder, isSolid, isActive } = props;

  const borderSize = 1;
  const size = (theme.margin/2) - borderSize*2;

  const shapes = {
    round: { borderRadius: '50%' },
    square: { borderRadius: theme.borderRadius.small }
  }
  const bg = isSolid ? theme.colors.grey.light : 'transparent';

  return {
    ...shapes[shape],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: size,
    width: size,
    padding: theme.margin,
    backgroundColor: isActive && bg,
    border: `${borderSize}px solid ${hasBorder && isActive ? theme.colors.grey.main : 'transparent'}`,

    '&:hover': {
      cursor: 'pointer'
    }
  }
})

export const Chevron = styled.div({
  '&:hover': {
    cursor: 'pointer'
  }
})