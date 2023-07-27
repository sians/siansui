import { Typography } from 'components';

const codeSnippets = {
  1: `
import PropTypes from 'prop-types';
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
  7: {
    element: styled.h6({
      ...BASE_STYLES,      
      fontSize: '0.8rem',
    })
  },  
}

const Heading = ({ text, size, children }) => {
  const Element = MAP[size].element;
  
  return <Element>{children || text}</Element>;
}

export default Heading;

  `, 
  2: `
Heading.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  text: PropTypes.string,
};

Heading.defaultProps = {
  size: 4,
};
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ "Encompasses the html heading tags: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>:" ]
      },
      {
        widgetType: 'table',
        tableType: 'headings',
        data: [
          {
            html: '<h1>',
            eg: <Typography.Heading size={1}>Heading 1</Typography.Heading>,
            use: `
              <Heading size={1}>
                Heading 1
              </Heading>
              `
          },
          {
            html: '<h2>',
            eg: <Typography.Heading size={2}>Heading 2</Typography.Heading>,
            use: `
              <Heading size={2}>
                Heading 2
              </Heading>
              `
          },
          {
            html: '<h3>',
            eg: <Typography.Heading size={3}>Heading 3</Typography.Heading>,
            use: `
              <Heading size={3}>
                Heading 3
              </Heading>
              `
          },
          {
            html: '<h4>',
            eg: <Typography.Heading size={4}>Heading 4</Typography.Heading>,
            use: `
              <Heading size={4}>
                Heading 4
              </Heading>
              `
          },
          {
            html: '<h5>',
            eg: <Typography.Heading size={5}>Heading 5</Typography.Heading>,
            use: `
              <Heading size={5}>
                Heading 5
              </Heading>
              `
          },
          {
            html: '<h6>',
            eg: <Typography.Heading size={6}>Heading 6</Typography.Heading>,
            use: `
              <Heading size={6}>
                Heading 6
              </Heading>
              `
          },          
          {
            html: '<h6>',
            eg: <Typography.Heading size={7}>Heading 7</Typography.Heading>,
            use: `
              <Heading size={7}>
                Heading 7
              </Heading>
              `
          },                              
        ]
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
          { 
            property: 'children',
            description: '',
            propType: 'React.node',
            default: '',
          },           
        ]
      }
    ]
  },
  snippets: {
    title: 'Snippets',
    widgets: [
      {
        widgetType: 'text',
        data: [
          "Customise your own Heading styles by updating the styles in the MAP object."
        ]
      },
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[1],
            language: 'javascript',
            title: 'components/Heading/index.js'
          },
        ]
      },
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[2],
            language: 'javascript',
            title: 'props in components/Heading/index.js'
          },
        ]
      },      
    ],
  },
  toDo: {
    title: 'To Do',
    widgets: [
      {
        widgetType: 'list',
        listType: 'ul',
        data: [
          "Add underlining prop",
          "Refactor either to text OR children, instead of leaving the option open for both?"
        ]
      }
    ]
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

