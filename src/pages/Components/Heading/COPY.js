const COPY = {
  description: "Encompasses the html heading tags:",
  htmlTags: {
    h1: "<h1>",
    h2: "<h2>",
    h3: "<h3>",
    h4: "<h4>",
    h5: "<h5>",
    h6: "<h6>",
  },
  size: [
    "Accepts a size attribute that corresponds to the int in the html tag.",
    "ie:",
    "<h1> will have a size={1}"
  ],
  whenToUse: "Use with the same semantic weight as you would the standard html tags, to meaningfully demark the hierarchy of text on the page.  ",
  code: `
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
  
  const Heading = ({ text, size }) => {
    const Element = MAP[size].element;
    
    return <Element>{text}</Element>;
  }
  
  export default Heading;  
  `,
}

export default COPY;