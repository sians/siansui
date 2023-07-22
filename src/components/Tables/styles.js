import styled from 'styled-components';

export const Container = styled.table(props => {
  const { theme, fontFamily, maxWidth } = props;
  return {
    display: 'flex',
    fontFamily: fontFamily,
    flexDirection: 'column',
    fontSize: 14,
    width: '100%',
    maxWidth: maxWidth,
    border: `1px solid ${theme.colors.grey}`,
  }
});

export const Row = styled.tr(props => {
  const { theme, paddingY, paddingX, align, justify, height, overflowY, backgroundColor} = props;

  const padding = `${paddingY || 0}px ${paddingX || 0}px`;
  const borderWidth = 1;
  return {
    display: 'flex',
    flexDirection: 'row',
    padding: padding,
    width: `calc(100% - ${paddingX * 2}px)`,
    alignItems: align,
    justifyContent: justify,
    height: height,
    overflowY: overflowY,
    flexWrap: 'wrap',
    backgroundColor: backgroundColor,
    borderTop: `${borderWidth}px solid ${theme.colors.grey}`,
  }
});

export const Header = styled(Row)(props => {
  return {
    
  }
});

export const Cell = styled.td(props => {
  const { size, padding, theme, justify, align, overflow, maxHeight } = props;
  const colPadding = padding || 0;
  const widthPercentage = size / 12 * 100;

  return {
    display: 'flex',
    flexDirection: 'column',
    padding: colPadding,
    width: `calc(${widthPercentage}% - ${colPadding * 2}px)`,
    flexWrap: 'wrap',
    justifyContent: justify,
    alignItems: align,
    transition: 'width 0.5s',
    overflow: overflow && overflow,
    maxHeight: maxHeight && maxHeight
  }
});