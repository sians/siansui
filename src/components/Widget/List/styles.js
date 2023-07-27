import styled from 'styled-components';

export const Ordered = styled.ol(props => {
  return {

  }
})

export const Unordered = styled.ul(props => {
  return {

  }
})

export const Item = styled.li(props => {
  const { theme } = props;
  return {
    marginBottom: theme.margin,

    '.li-subtext': {
      width: `calc(100% - ${theme.margin}px)`,
      paddingLeft: theme.margin,
    }
  }
})

export const Bullet = styled.div(props => {
  const { theme } = props;
  const size = 7;
  return {
    borderRadius: '50%',
    backgroundColor: theme.colors.main,
    width: size,
    height: size,
    marginRight: theme.margin / 2
  }
})