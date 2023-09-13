import { DirectoryExplorerExample } from 'examples';
const codeSnippets = {
  1: `
  `,
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "A DirectoryExplorer component.",
          <DirectoryExplorerExample />
        ]
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
  title: "DirectoryExplorer",
  sections: sections,
  cardData: {
    title: 'DirectoryExplorer',
    description: 'A flexible DirectoryExplorer component.'
  }   

}

export default PAGE_DATA;

