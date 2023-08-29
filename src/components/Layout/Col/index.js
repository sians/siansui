import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = styled.div(props => {
  const { width, padding, margin, justify, align, overflow, maxHeight } = props;

  return {
    display: 'flex',
    flexDirection: 'column',
    padding: padding,
    margin: margin,
    width: width,
    flexWrap: 'wrap',
    justifyContent: justify,
    alignItems: align,
    transition: 'width 0.5s',
    overflow: overflow,
    maxHeight: maxHeight,
  }
})

const Col = ({
  size,
  padding,
  margin,
  align,
  justify,
  height,
  overflow,
  maxHeight,
  gutterSize,
  children,
}) => {
  const { pt, pr, pb, pl } = padding;
  const { mt, mr, mb, ml } = margin;

  let finalHeight;
  if (typeof(height) === 'string') {
    finalHeight = `calc(${height} - ${(pt || 0) - (pb || 0)}px)`;
  } else {
    finalHeight = height - (pt || 0) - (pb || 0);
  }

  const widthPercentage = size / 12 * 100;
  const widthSubtractPx = ((pl || 0) + (pr || 0)) + (gutterSize || 0);
  const width = `calc(${widthPercentage}% - ${widthSubtractPx}px)`

  
  return (
    <Styled 
      padding={`${pt || 0}px ${pr || 0}px ${pb || 0}px ${pl || 0}px`}
      margin={`${mt || 0}px ${mr || 0}px ${mb || 0}px ${ml || 0}px`}
      align={align}
      justify={justify}
      height={finalHeight}
      maxHeight={maxHeight}
      width={width}
      overflow={overflow}
    >
      {children}
    </Styled>
  )
}

export default Col;

Col.propTypes = {
  size: PropTypes.number,
  padding: PropTypes.object,
  margin: PropTypes.object,
  align: PropTypes.string,
  justify: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  overflow: PropTypes.string,
  maxHeight: PropTypes.number,
  gutterSize: PropTypes.number,
}

Col.defaultProps = {
  height: '100%',
  padding: {pt: 0, pr: 0, pb: 0, pl: 0},
  margin: {mt: 0, mr: 0, mb: 0, ml: 0},
}