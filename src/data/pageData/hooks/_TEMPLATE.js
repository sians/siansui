const codeSnippets = {
  1: `

  `,
  2: `

  `
}

const sections = {
  description: {
    text: [
      "", 
      "",
    ]
  },
  whenToUse: {
    title: 'When To Use',
    text: [
      "",
      "",        
    ]
  },
  returnValue: {
    title: 'Returned Values',
    text: [
      "",
    ],
    tableData: [
      { 
        name: '',
        description: '',
        propType: ''
      },
      { 
        name: '',
        description: '',
        propType: ''
      }, 
    ]
  },
  snippets: {
    title: 'Snippets',
    code: [
      {
        str: codeSnippets[1],
        language: 'javascript',
        title: ''
      },
      {
        str: codeSnippets[2],
        language: 'javascript',
        title: 'Example use:'
      },
    ]
  },
  seeAlso: {
    title: 'See Also',
    links: [
      { url: '', text:  '' }
    ]
  }
}

const PAGE_DATA = {
  title: "useFocus",
  sections: sections,
  cardData: {
    title: 'useTimeout',
    description: 'Triggers a function after a specified delay in a React component.'
  }   

}

export default PAGE_DATA;

