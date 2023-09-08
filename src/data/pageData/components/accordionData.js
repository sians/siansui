import { AccordionExample } from 'examples';
const codeSnippets = {
  1: `
  `,
  2: `
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          <AccordionExample />,
          // "A Accordion component.",
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
            property: 'accordion',
            description: 'Array of tab objects',
            propType: 'Array',
            default: '',
          },
          { 
            property: 'defaultActiveIdx',
            description: 'Index of the tab that will default to active.',
            propType: 'int',
            default: '0',
          }, 
        ]
      },
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[2],
            language: 'javascript',
            title: 'props in components/Accordion/index.js'
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
            title: 'components/Accordion/index.js'
          },
        ]
      },  
    ],
  },
  examples: {
    title: 'Examples',
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "",
        ]
      }      
    ]
  }
}

const PAGE_DATA = {
  title: "Accordion",
  sections: sections,
  cardData: {
    title: 'Accordion',
    description: 'An Accordion component.'
  }   

}

export default PAGE_DATA;

