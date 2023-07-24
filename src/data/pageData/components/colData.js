const codeSnippets = {
  1: `
  export const Col = styled.div(props => {
    const { size, paddingX, paddingY, theme, justify, align, overflow, maxHeight, spacing, gutterSize } = props;
    const padding = \`\${paddingY || 0}px \${paddingX || 0}px\`;
    const widthPercentage = size / 12 * 100;
    const widthSubtractPx = ((paddingX || 0) * 2) + gutterSize;
  
    return {
      display: 'flex',
      flexDirection: 'column',
      padding: padding,
      width: \`calc(\${widthPercentage}% - \${widthSubtractPx}px)\`,
      flexWrap: 'wrap',
      justifyContent: justify,
      alignItems: align,
      transition: 'width 0.5s',
      overflow: overflow && overflow,
      maxHeight: maxHeight && maxHeight,
    }
  })
  `, 

}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ "A flexible Layout component that is the child of a <Row> component.  Used to create resonsive Columns." ]
      }
    ]
  },
  whenToUse: {
    title: 'When To Use',
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "Use to create a flexible column solution.",
          "The total size of all Columns in a Row should add up to 12.",
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
            property: 'size',
            description: "The width of the col as an int between 0-12, where the total number of Cols size props will equal 12.",
            propType: 'int',
            default: '',
          },
          { 
            property: 'paddingX',
            description: 'Left and right padding in pixels',
            propType: 'int',
            default: '0',
          }, 
          { 
            property: 'paddingY',
            description: 'Top and bottom padding in pixels',
            propType: 'int',
            default: '0',
          }, 
          { 
            property: 'justify',
            description: 'How to justify content',
            propType: 'string',
            default: '',
          }, 
          { 
            property: 'align',
            description: 'How to align items',
            propType: 'string',
            default: '',
          }, 
          { 
            property: 'overflow',
            description: 'How to handle overflow content',
            propType: 'string',
            default: '',
          },           
          { 
            property: 'maxHeight',
            description: 'The max height that the component can grow',
            propType: 'string',
            default: '',
          },           
          { 
            property: 'gutterSize',
            description: "size of Col's gutter in a grid",
            propType: 'string',
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
      }
    ],
  }
}

const PAGE_DATA = {
  title: "Col",
  sections: sections,
  cardData: {
    title: 'Col',
    description: 'A flexible Col component.'
  }   

}

export default PAGE_DATA;

