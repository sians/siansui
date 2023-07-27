const codeSnippets = {
  1: `
const Spacer = styled.div(props => {
  return {
    width: '100%',
    height: props.size
  }
})
  `, 
  2: `
const Grid = ({ elements, gutterSize, colNum }) => {
  const colSize = 12 / colNum;

  const chunkedElements = useMemo(() => {
    if (elements.length > 0) {
      return chunkAry(elements, colNum);
    }
  }, [elements])

  return (
    <Row>
      <Col size={12}>
        {chunkedElements && chunkedElements.map((row, rowIdx) => {
          const isFirstRow = rowIdx === 0;
          return (
            <>
              {!isFirstRow && <Spacer size={gutterSize}/>}            
              <Row key={\`grid-r-\${rowIdx}\`} justify='space-between'>
                {row && row.map((elem, elemId) => {
                  const totalMarginSize = gutterSize * (colNum  - 1);
                  const colSubtractSize = totalMarginSize / colNum;
                  return (
                    <>
                      <Col 
                        size={colSize} 
                        key={\`grid-c-\${elemId}\`}
                        gutterSize={colSubtractSize}
                      >
                        {elem} 
                      </Col>
                    </>
                  )
                })}
              </Row>
            </>
          )
        })}
      </Col>
    </Row>
  )
}  
  `
  ,
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ "A flexible Layout component that creates an evenly spaced grid using <Col> & <Row> components." ]
      }
    ]
  },
  whenToUse: {
    title: 'When To Use',
    widgets: [
      {
        widgetType: 'text',
        data: [ "Use when you need to define an evenly spaced multi-column grid." ]
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
            property: 'elements',
            description: 'Array of Grid elements',
            propType: 'Array',
            default: '[]',
          },
          { 
            property: 'gutterSize',
            description: 'Size of margin between Columns in pixels',
            propType: 'int',
            default: '0',
          }, 
          { 
            property: 'colNum',
            description: 'Number of Columns in Grid',
            propType: 'int',
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
          "Styles a 'Spacer' component to create the horizontal gutter:"
        ]
      },
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
      {
        widgetType: 'text',
        data: [
          "Main Grid component:"
        ]
      },
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[2],
            language: 'javascript',
            title: ''
          },
        ]
      },
    ],
  }
}

const PAGE_DATA = {
  title: "Grid",
  sections: sections,
  cardData: {
    title: 'Grid',
    description: 'A flexible Grid component.'
  }   

}

export default PAGE_DATA;

