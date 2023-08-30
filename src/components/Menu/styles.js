import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme } = props;
  return {
    backgroundColor: theme.colors.bg,
    boxShadow: `0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);`,
    padding: theme.margin / 2,
    borderRadius: theme.borderRadius.main,
    minWidth: 200,
    textAlign: 'center',

    'ul': {
      display: 'flex',
      flexDirection: 'column'   
    },
  }
})

export const Item = styled.li(props => {
  const { theme, isSelected } = props;

  const baseStyles = {
    borderRadius: theme.borderRadius.main,
    marginBottom: theme.margin / 4,
    padding: theme.margin / 2,
    '&:last-child': {
      marginBottom: 0
    }
  }

  const selectedStyles = {
    backgroundColor: theme.colors.main.light,
    color: theme.colors.main.base,
  }

  return {
    ...baseStyles,
    ...(isSelected && selectedStyles),
    '&:hover': {
      backgroundColor: theme.colors.secondary.base,
      color: theme.colors.fg,
      cursor: 'pointer'
    }
  }
})