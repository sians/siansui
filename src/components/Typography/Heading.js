import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const BASE_STYLES = {
  padding: 0,
  margin: 0
};

const createStyledHeading = styles => styled.h1(props => {
  const { textAlign, margin } = props;
  return {
    ...BASE_STYLES,
    ...styles,
    textAlign: textAlign,
    margin: margin
  }
})

const MAP = {
  1: { element: createStyledHeading({ fontSize: '3rem'}) },
  2: { element: createStyledHeading({ fontSize: '2.5rem'}) },
  3: { element: createStyledHeading({ fontSize: '2rem'}) },
  4: { element: createStyledHeading({ fontSize: '1.5rem'}) },
  5: { element: createStyledHeading({ fontSize: '1.3rem'}) },
  6: { element: createStyledHeading({ fontSize: '1.1rem'}) },
  7: { element: createStyledHeading({ fontSize: '0.8rem'}) }
};

const Heading = ({ text, size, children, textAlign, margin }) => {
  const Element = MAP[size]?.element;
  const { mt, mr, mb, ml } = margin;

  return Element && (
    <Element 
      textAlign={textAlign}
      margin={`${mt || 0}px ${mr || 0}px ${mb || 0}px ${ml || 0}px`}
    >
      {children || text}
    </Element>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  text: PropTypes.string,
  textAlign: PropTypes.string,
  margin: PropTypes.object
};

Heading.defaultProps = {
  size: 4,
  margin: {
    mt: 0,
    mr: 0,    
    mb: 0,
    ml: 0
  }
};

export default Heading;
