import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme } = props;
  const width = '200%';
  const height = 'fit-content';

  return {
    width: width,
    height: height,
    backgroundColor: theme.colors.trueWhite,
    boxShadow: theme.boxShadowBig,
    borderRadius: theme.borderRadius,
    position: 'absolute',
    top: 60,
    left: '-50%',
    // transform: 'translate(-50%, -50%)',
    zIndex: 10,
    color: theme.colors.darkerGrey
  }
})

export const MenuItem = styled.div(props => {
  const { theme } = props;

  const padding = theme.margin;
  const totalHeight = theme.margin / 4;
  const height = totalHeight - padding * 2;

  return {
    backgroundColor: theme.colors.lightestGrey,
    height: height,
    padding: padding,
    borderRadius: theme.borderRadius,
    margin: theme.margin / 4,


    '&:hover': {
      backgroundColor: theme.colors.secondary,
      cursor: 'pointer',
      color: theme.colors.black
    }
  }
})

export const Category = styled.div(props => {
  const { theme, isFirst } = props; 
  return {
    padding: `${theme.margin / 5}px ${theme.margin / 2}px`,
    borderRadius: `
      ${isFirst ? theme.borderRadius : 0}px 
      ${isFirst ? theme.borderRadius: 0}px 
      0px 
      0px`,
    marginBottom: theme.margin / 4,
    backgroundColor: theme.colors.mainLighter,
    color: theme.colors.main

  }
})