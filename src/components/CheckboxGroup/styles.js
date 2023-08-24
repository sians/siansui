import styled from 'styled-components';

export const Fieldset = styled.fieldset(props => {
  const { theme, showFieldset } = props;
  return {
    border: `1px solid ${showFieldset ? `${theme.colors.black}50` : 'transparent'}`,
    borderRadius: theme.borderRadius,
  }
})