import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = styled.div(props => {
  const { padding, margin, align, justify, height, width, overflowY } = props;

  return {
    display: 'flex',
    flexDirection: 'row',
    padding: padding,
    margin: margin,
    width: width,
    alignItems: align,
    justifyContent: justify,
    height: height,
    overflowY: overflowY,
    flexWrap: 'wrap',
  }
})

const Row = ({
  padding,
  margin,
  align,
  justify,
  height,
  overflowY,
  children,
  className,
  innerRef
}) => {
  const { pt, pr, pb, pl } = padding;
  const { mt, mr, mb, ml } = margin;

  let finalHeight;
  if (typeof(height) === 'string') {
    finalHeight = `calc(${height} - ${(pt || 0) - (pb || 0)}px)`;
  } else {
    finalHeight = height - (pt || 0) - (pb || 0);
  }

  const width = `calc(100% - ${(pr || 0) + (pl || 0)}px)`;
  
  return (
    <Styled 
      padding={`${pt || 0}px ${pr || 0}px ${pb || 0}px ${pl || 0}px`}
      margin={`${mt || 0}px ${mr || 0}px ${mb || 0}px ${ml || 0}px`}
      align={align}
      justify={justify}
      height={height && finalHeight}
      width={width}
      overflowY={overflowY}
      className={className}
      ref={innerRef}
    >
      {children}
    </Styled>
  )
}

export default Row;

Row.propTypes = {
  padding: PropTypes.object,
  margin: PropTypes.object,
  align: PropTypes.string,
  justify: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  overflowY: PropTypes.string,
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.any })
  ])  
}

Row.defaultProps = {
  padding: {pt: 0, pr: 0, pb: 0, pl: 0},
  margin: {mt: 0, mr: 0, mb: 0, ml: 0},
}