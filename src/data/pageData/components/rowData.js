const codeSnippets = {
  1: `
const Row = styled.div(props => {
  const { padding, theme, align, justify, height, overflowY } = props;
  const rowPadding = padding || 0;
  return {
    display: 'flex',
    flexDirection: 'row',
    padding: rowPadding,
    width: \`calc(100% - \${rowPadding * 2}px)\`,
    alignItems: align,
    justifyContent: justify,
    height: height,
    overflowY: overflowY,
    flexWrap: 'wrap'
  }
})
  `,
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ "A row layout component." ]
      }
    ]
  },
  whenToUse: {
    title: 'When To Use',
    widgets: [
      {
        widgetType: 'text',
        data: [ "Used with <Col> to help create flexible & responsive grid layouts." ]
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
            property: 'justify',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'align',
            description: '',
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
            title: ''
          },
        ]
      }
    ],
  }
}

const PAGE_DATA = {
  title: "Row",
  sections: sections,
  cardData: {
    title: 'Row',
    description: 'A flexible Row component.'
  }   

}

export default PAGE_DATA;

