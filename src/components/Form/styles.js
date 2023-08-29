import styled from 'styled-components';

export const StyledForm = styled.div(props => {
  const { theme } = props;
  const totalWidth = 500;
  const padding = theme.margin*2;
  const width = totalWidth - padding*2;

  return {
    width: width,
    padding: padding,
    borderRadius: theme.borderRadiusBig,
    boxShadow: theme.boxShadowBig,
    margin: 'auto'
  }
})
