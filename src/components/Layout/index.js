import styled from 'styled-components';

export const Row = styled.div(props => {
  const { padding, theme, align, justify, height, overflowY } = props;
  const rowPadding = padding || 0;
  return {
    display: 'flex',
    flexDirection: 'row',
    padding: rowPadding,
    width: `calc(100% - ${rowPadding * 2}px)`,
    alignItems: align,
    justifyContent: justify,
    height: height,
    overflowY: overflowY,
    flexWrap: 'wrap'
  }
})

export const Col = styled.div(props => {
  const { size, paddingX, paddingY, theme, justify, align, overflow, maxHeight } = props;
  const padding = `${paddingY || 0}px ${paddingX || 0}px`;
  const widthPercentage = size / 12 * 100;

  return {
    display: 'flex',
    flexDirection: 'column',
    padding: padding,
    width: `calc(${widthPercentage}% - ${(paddingX || 0) * 2}px)`,
    flexWrap: 'wrap',
    justifyContent: justify,
    alignItems: align,
    transition: 'width 0.5s',
    overflow: overflow && overflow,
    maxHeight: maxHeight && maxHeight
  }
})

export default {
  Row,
  Col
}