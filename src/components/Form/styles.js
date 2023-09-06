import styled from 'styled-components';

export const StyledForm = styled.div(props => {
  const { theme } = props;
  const isDark = theme.themeName === 'dark';

  const totalWidth = 500;
  const padding = theme.margin*2;
  const width = totalWidth - padding*2;

  return {
    width: width,
    padding: padding,
    borderRadius: theme.borderRadius.big,
    boxShadow: !isDark && theme.boxShadow.big,
    backgroundColor: isDark && 'transparent'
    // margin: 'auto'
  }
})
