import styled from 'styled-components';

const BAR_HEIGHT = 2;

export const Label = styled.div(props => {
  const { theme, isActive, marginRight } = props;

  return {
    marginRight: marginRight,
    color: isActive && theme.colors.main.base,

    '&:hover': {
      cursor: 'pointer',
    }
  }
})

export const Active = styled.div(props => {
  const { theme, activeWidth, leftOffset } = props;
  return {
    position: 'absolute',
    left: leftOffset,
    bottom: 0,
    height: BAR_HEIGHT,
    width: activeWidth,
    backgroundColor: theme.colors.main.base,
    transition: 'width 0.3s,left 0.3s,right 0.3s'
  }
})

export const RowBar = styled.div(props => {
  const { theme, isShowBar } = props;
  return {
    marginTop: BAR_HEIGHT,
    height: 1,
    position: 'relative',
    width: '100%',
    backgroundColor: isShowBar 
      ? theme.colors.grey.main
      : 'transparent',
    marginTop: theme.margin*0.5,
    marginBottom: theme.margin*2
  }
})