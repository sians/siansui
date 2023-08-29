import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme } = props;

  const paddingY = theme.margin / 2;

  return {
    display: 'flex',
    height: 60 + paddingY * 2,
    marginTop: theme.margin * 2,
    borderTop: `1px solid ${theme.colors.grey}`,
    justifyContent: 'space-between',
    color: theme.colors.midGrey,
    padding: `${paddingY}px 0px`,
    
    '.col':{
      borderRadius: theme.borderRadius,
      '&:hover': {
        backgroundColor: theme.colors.secondary,
        cursor: 'pointer',
        color: theme.colors.black
      }
    },

    '.nav-icon-left': {
      marginRight: theme.margin,
    },

    '.nav-icon-right': {
      marginLeft: theme.margin,
    },
  }
})

