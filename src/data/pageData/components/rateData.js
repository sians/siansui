import { RateExample } from 'examples';

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
          "A Rate layout component.",
          <RateExample />
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
  title: "Rate",
  sections: sections,
  cardData: {
    title: 'Rate',
    description: 'A flexible Rate component.'
  }   

}

export default PAGE_DATA;

