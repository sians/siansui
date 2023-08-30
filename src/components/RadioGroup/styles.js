import styled from 'styled-components';

export const Fieldset = styled.fieldset(props => {
  const { theme, isHorizontal, showFieldset } = props;
  return {
    border: `1px solid ${showFieldset ? `${theme.colors.fg}50` : 'transparent'}`,
    borderRadius: theme.borderRadius.main,
    '.radio-btns': {
      display: 'flex',
      flexDirection: !isHorizontal && 'column',
    },
    'label': {
      padding: 4,
      display: 'flex',
      alignItems: 'center',
      'p': {
        margin: 0,
        marginLeft: theme.margin / 3,
        marginTop: theme.margin / 4,
        fontSize: '0.9rem'
      },
      '&:hover': {
        cursor: 'pointer'
      }
    }
  }
})

export const Radio = styled.input(props => {
  const { theme, isHovered, isSelected } = props;

  const size = 12;
  const borderSize = 2;
  const outlineSize = 2;

  const baseStyles = {
    appearance: 'none',
    borderRadius: '50%',
    backgroundColor: isHovered ? theme.colors.main.lightest : theme.colors.bg,
    border: `${borderSize}px solid ${isHovered ? theme.colors.main.light : theme.colors.bg}`,
    outline: `${outlineSize}px solid ${isHovered ? theme.colors.main.base : `${theme.colors.fg}50`}`,
    height: size,
    width: size,
    cursor: isHovered && 'pointer'
  }

  const selectedStyles = {
    backgroundColor: theme.colors.main.base,
    border: `${borderSize}px solid ${theme.colors.bg}`,
    outline: `${outlineSize}px solid ${theme.colors.main.base}`,
  }

  return {
    ...baseStyles,
    ...(isSelected && selectedStyles)
  }
})