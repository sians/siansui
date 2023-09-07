import styled from 'styled-components';
import { Layout } from 'components';

export const LabelContainer = styled.div(props => {
  const { theme, isOverflow } = props;
  return {
    width: isOverflow && `calc(100vw - ${theme.margin*2}px)`,
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
    '&::-webkit-scrollbar': {
      display: 'none',
    }    
  }
})

export const LabelRow = styled(Layout.Row)(props => {
  return {
    flexWrap: 'nowrap',
    width: props.width
  }
})

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
  const barHeight = 2;
  return {
    position: 'absolute',
    left: leftOffset,
    bottom: 0,
    height: barHeight,
    width: activeWidth,
    backgroundColor: theme.colors.main.base,
    transition: 'width 0.3s,left 0.3s,right 0.3s'
  }
})

export const RowBar = styled.div(props => {
  const { theme, isShowBar, width, isOverflow, labelMargin } = props;

  return {
    height: 1,
    position: 'relative',
    width: isOverflow ? width - labelMargin : '100%',
    backgroundColor: isShowBar 
      ? theme.colors.grey.main
      : 'transparent',
    marginTop: theme.margin*0.5,
    marginBottom: theme.margin*2
  }
})

export const Content = styled.div(props => {
  const { theme, isOverflow } = props;
  return {
    width: isOverflow && `calc(100vw - ${theme.margin*4}px)`,
  }
})
