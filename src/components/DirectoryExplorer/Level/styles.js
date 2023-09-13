import styled from 'styled-components';

export const Title = styled.div(props => {
  const { theme } = props;
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    '.title-chev': {
      marginRight: theme.margin/2
    },

    '&:hover': {
      cursor: 'pointer'
    }
  }
})

export const Children = styled.div(props => {
  const { theme } = props;
  return {
    marginLeft: theme.margin * 1.5

  }
})

export const VerticalLine = styled.div(props => {
  const { theme, left } = props;

  return {
    position: 'absolute',
    left: -theme.margin*1.5*(left+1),
    width: 1,
    height: '100%',
    backgroundColor: theme.colors.grey.lightest
  }
})