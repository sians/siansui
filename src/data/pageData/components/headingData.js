const codeSnippets = {
  1: `
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

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ "Encompasses the html heading tags: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>," ]
      }
    ]
  },
  whenToUse: {
    title: 'When To Use',
    widgets: [
      {
        widgetType: 'text',
        data: [ "Use with the same semantic weight as you would the standard html tags, to meaningfully demark the hierarchy of text on the page.  " ]
      }
    ]
  },
  props: {
    title: 'Props',    
    widgets: [
      {
        widgetType: 'table',
        tableType: 'props',
        data: [
          { 
            property: 'text',
            description: 'Heading text',
            propType: 'Array',
            default: '[]',
          },
          { 
            property: 'size',
            description: '1-7, Corresponds to the html heading size.  Size 7 is an <h6> with smaller styles.',
            propType: 'int',
            default: '0',
          }, 
        ]
      }
    ]
  },
  snippets: {
    title: 'Snippets',
    widgets: [
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[1],
            language: 'javascript',
            title: ''
          },
        ]
      },
    ],
  }
}

const PAGE_DATA = {
  title: "Heading",
  sections: sections,
  cardData: {
    title: 'Heading',
    description: 'A Heading component.'
  }   

}

export default PAGE_DATA;

