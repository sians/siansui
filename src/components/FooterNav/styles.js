import styled from 'styled-components';
import { Row } from 'components/Layout';

export const Container = styled(Row)(props => {
  const { theme } = props;

  const paddingY = theme.margin / 2;

  return {
    height: 60 + paddingY * 2,
    height: 60,
    marginTop: theme.margin * 2,
    borderTop: `1px solid ${theme.colors.grey}`,
    justifyContent: 'space-between',
    color: theme.colors.midGrey,
    padding: paddingY,
    

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