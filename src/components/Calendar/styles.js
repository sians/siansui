import styled from 'styled-components';
import { Layout } from 'components';

export const Container = styled.div(props => {
  return {

  }
});

export const Row = styled(Layout.Row)(props => {
  const { theme } = props;
  const borderSize = 1;

  return {
    border: `${borderSize}px solid ${theme.colors.grey.main}`,
    borderBottom: 'none',
    borderRight: 'none',

    '&:last-child': {
      borderBottom: `${borderSize}px solid ${theme.colors.grey.main}`,
    }
  }
});

export const Header = styled(Row)(props => {
  const { theme } = props;
  const borderSize = 1;
  
  const cellPy = theme.margin/3;
  const cellPx = theme.margin/2;
  const cellWidth = `calc(100% - ${cellPx*2 + borderSize}px)`

  return {
    boxShadow: theme.boxShadow.big,
    '.header-cell': {
      width: cellWidth,
      padding: `${cellPy}px ${cellPx}px`,
      borderRight: `${borderSize}px solid ${theme.colors.grey.main}`,
      'h5': {
        margin: 0,
        fontSize: 12,
        fontWeight: 'bold',
        opacity: 0.5  
      }
    }
  }
});
