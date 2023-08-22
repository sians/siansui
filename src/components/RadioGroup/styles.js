import styled from 'styled-components';

export const Fieldset = styled.fieldset(props => {
  const { theme, isHorizontal, showFieldset } = props;
  return {
    border: `1px solid ${showFieldset ? `${theme.colors.black}50` : 'transparent'}`,
    borderRadius: theme.borderRadius,
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
    backgroundColor: isHovered ? theme.colors.mainLightest : theme.colors.white,
    border: `${borderSize}px solid ${isHovered ? theme.colors.mainLighter : theme.colors.white}`,
    outline: `${outlineSize}px solid ${isHovered ? theme.colors.main : `${theme.colors.black}50`}`,
    height: size,
    width: size,
    cursor: isHovered && 'pointer'
  }

  const selectedStyles = {
    backgroundColor: theme.colors.main,
    border: `${borderSize}px solid ${theme.colors.white}`,
    outline: `${outlineSize}px solid ${theme.colors.main}`,
  }

  return {
    ...baseStyles,
    ...(isSelected && selectedStyles)
  }
})