import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import useMediaQuery from 'hooks/useMediaQuery';

const BASE_STYLES = {
  padding: 0,
  margin: 0
};

const createStyledHeading = styles => styled.h1(props => {
  const { textAlign, margin, isMobile } = props;
  return {
    ...BASE_STYLES,
    ...(isMobile ? styles.mobile : styles.desktop),
    textAlign: textAlign,
    margin: margin
  }
})

const MAP = {
  1: { 
    element: createStyledHeading({ 
      desktop: { fontSize: '3rem' }, 
      mobile: { fontSize: '2rem' } 
    }) 
  },
  2: { 
    element: createStyledHeading({ 
      desktop: { fontSize: '2.5rem' }, 
      mobile: { fontSize: '1.7rem' } 
    }) 
  },
  3: { 
    element: createStyledHeading({ 
      desktop: { fontSize: '2rem' }, 
      mobile: { fontSize: '1.5rem' } 
    }) 
  },
  4: { 
    element: createStyledHeading({ 
      desktop: { fontSize: '1.5rem' }, 
      mobile: { fontSize: '1.2rem' } 
    }) 
  },
  5: { 
    element: createStyledHeading({ 
      desktop: { fontSize: '1.3rem' }, 
      mobile: { fontSize: '1.1rem' } 
    }) 
  },
  6: { 
    element: createStyledHeading({ 
      desktop: { fontSize: '1.1rem' }, 
      mobile: { fontSize: '1rem' } 
    }) 
  },
  7: { 
    element: createStyledHeading({ 
      desktop: { fontSize: '0.8rem' }, 
      mobile: { fontSize: '0.7rem' } 
    })
   }
};


const Heading = ({ text, size, children, textAlign, margin }) => {
  const { isMobile } = useMediaQuery();
  const Element = MAP[size]?.element;
  const { mt, mr, mb, ml } = margin;

  return Element && (
    <Element 
      textAlign={textAlign}
      isMobile={isMobile}
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
