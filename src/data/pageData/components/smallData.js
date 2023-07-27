const codeSnippets = {
  1: `
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = styled.small(props => {
  const { marginY, isItalic, isBold, color } = props;

  return {
    margin: \`\${marginY} 0px\`,
    fontSize: '0.85rem',
    fontWeight: 400,
    fontStyle: isItalic && 'italic',
    fontWeight: isBold && 900,
    color: color
  }
})

const Small = ({ 
  children, 
  marginY, 
  isItalic, 
  isBold,
  color
}) => {
  return (
    <Styled 
      marginY={marginY}
      isItalic={isItalic}
      isBold={isBold}
      color={color}
    >
      {children}
    </Styled>
  )
}

export default Small;
  `,
  2: `
Small.propTypes = {
  children: PropTypes.node.isRequired,
  marginY: PropTypes.number,
  isItalic: PropTypes.bool,
  isBold: PropTypes.bool,
  color: PropTypes.string
};

Small.defaultProps = {
  marginY: 0,
  isItalic: false,
  isBold: false,
};
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "The Small component is a text component for subtitle text styles.",
          "It is used for text that is both visually and semantically smaller than the standard <Body> text."
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
            description: 'Overrides the default <p> margin.',
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
            property: 'color',
            description: 'Overrides the default color with a string',
            propType: 'string',
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
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[1],
            language: 'javascript',
            title: 'components/Small/index.js'
          },
        ]
      },
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[2],
            language: 'javascript',
            title: 'props in components/Small/index.js'
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
          "",
        ]
      }
    ]
  }
}

const PAGE_DATA = {
  title: "Small",
  sections: sections,
  cardData: {
    title: 'Small',
    description: 'Text component for small styles.'
  }   

}

export default PAGE_DATA;

