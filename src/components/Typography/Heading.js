import React from 'react';
import styled from 'styled-components';

const BASE_STYLES = {
  padding: 0,
  margin: 0
}

const MAP = {
  1: {
    element: styled.h1({
      ...BASE_STYLES,
      fontSize: '3rem',
    })
  },
  2: {
    element: styled.h2({
      ...BASE_STYLES,      
      fontSize: '2.5rem',
    })
  },
  3: {
    element: styled.h3({
      ...BASE_STYLES,      
      fontSize: '2rem',
    })
  },
  4: {
    element: styled.h4({
      ...BASE_STYLES,      
      fontSize: '1.5rem',
    })
  },
  5: {
    element: styled.h5({
      ...BASE_STYLES,      
      fontSize: '1.3rem',
    })
  },
  6: {
    element: styled.h6({
      ...BASE_STYLES,      
      fontSize: '1.1rem',
    })
  },
}

const Heading = ({ text, size, children }) => {
  const Element = MAP[size].element;
  
  return <Element>{children || text}</Element>;
}

export default Heading;