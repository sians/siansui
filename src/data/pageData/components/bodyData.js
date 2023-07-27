const codeSnippets = {
  1: `
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = styled.p(props => {
  const { marginY, isItalic, isBold, variant } = props;

  const baseStyles = {
    margin: \`\${marginY}px 0px\`,
    fontSize: '1.05rem',
    fontStyle: isItalic && 'italic',
    fontWeight: isBold && 900,
  }

  const variantStyles = {
    large: { fontSize: '1.2rem' }
  }

  return {
    ...baseStyles,
    ...(variantStyles[variant])
  }
})

const Body = ({ 
  children, 
  marginY, 
  isItalic, 
  isBold,
  variant
}) => {
  return (
    <Styled 
      marginY={marginY}
      isItalic={isItalic}
      isBold={isBold}
      variant={variant}
    >
      {children}
    </Styled>
  )
}

export default Body;
  `,
  2: `
Body.propTypes = {
  children: PropTypes.node.isRequired,
  marginY: PropTypes.number,
  isItalic: PropTypes.bool,
  isBold: PropTypes.bool,
  variant: PropTypes.oneOf(['large', 'main'])
};

Body.defaultProps = {
  marginY: 0,
  isItalic: false,
  isBold: false,
  variant: 'main'
};  
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "The Body component is the standard text component for a website.",
          "Wrapping all text inside a Body tag ensures consistency in styles throughout the site.",
          "There are generally two variants of Body: small and large."
        ]
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
            property: 'children',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'marginY',
            description: 'Overrides native margin size in pixels',
            propType: 'int',
            default: '0',
          }, 
          { 
            property: 'isItalic',
            description: "Sets the font-transform property to 'italic'",
            propType: 'boolean',
            default: 'false',            
          },           
          { 
            property: 'isBold',
            description: "Sets the font-weight property to 'bold'",
            propType: 'boolean',
            default: 'false',
          },           
          { 
            property: 'variant',
            description: 'One of "large" or "main"',
            propType: 'string',
            default: 'main',
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
            title: 'components/Body/index.js'
          },
        ]
      },
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[2],
            language: 'javascript',
            title: 'props in components/Body/index.js'
          },
        ]
      }      
    ],
  },
  toDo: {
    title: 'To Do',
    widgets: [
      {
        widgetType: 'list',
        listType: 'ul',
        data: [
          "if children is not a str, then render it outside the Styled <p> tag",
        ]
      }
    ]
  }
}

const PAGE_DATA = {
  title: "Body",
  sections: sections,
  cardData: {
    title: 'Body',
    description: 'An Icon component build on top of the iconomoon library.'
  }   

}

export default PAGE_DATA;

