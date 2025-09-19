import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme, isClickable } = props;
  return {
    display: 'flex',
    '.stars': {
      display: 'flex',

      '.rating-star': {
        marginRight: theme.margin/3,
  
        '&:last-child': {
          marginRight: theme.margin/1.5,
        },
  
        '&:hover': isClickable && {
          cursor: 'pointer'
        }
      }
    }
  }
})