import { PaginationExample } from 'examples';

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
          "A Pagination layout component.",
          <PaginationExample />
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
  title: "Pagination",
  sections: sections,
  cardData: {
    title: 'Pagination',
    description: 'A flexible Pagination component.'
  }   

}

export default PAGE_DATA;

