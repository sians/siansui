import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme } = props;
  const width = '200%';
  const height = 'fit-content';

  return {
    width: width,
    height: height,
    backgroundColor: theme.colors.trueWhite,
    boxShadow: theme.boxShadow.big,
    borderRadius: theme.borderRadius.main,
    position: 'absolute',
    top: 60,
    left: '-50%',
    // transform: 'translate(-50%, -50%)',
    zIndex: 10,
    color: theme.colors.grey.darkest
  }
})

export const MenuItem = styled.div(props => {
  const { theme } = props;

  const padding = theme.margin;
  const totalHeight = theme.margin / 4;
  const height = totalHeight - padding * 2;

  return {
    backgroundColor: theme.colors.grey.light,
    height: height,
    padding: padding,
    borderRadius: theme.borderRadius.main,
    margin: theme.margin / 4,


    '&:hover': {
      backgroundColor: theme.colors.secondary.base,
      cursor: 'pointer',
      color: theme.colors.fg
    }
  }
})

export const Category = styled.div(props => {
  const { theme, isFirst } = props; 
  return {
    padding: `${theme.margin / 5}px ${theme.margin / 2}px`,
    borderRadius: `
      ${isFirst ? theme.borderRadius.main : 0}px 
      ${isFirst ? theme.borderRadius.main : 0}px 
      0px 
      0px`,
    marginBottom: theme.margin / 4,
    backgroundColor: theme.colors.main.light,
    color: theme.colors.main.base

  }
})