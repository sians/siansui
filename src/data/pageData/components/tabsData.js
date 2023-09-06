import { TabsExample } from 'examples';
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
          <TabsExample />,
          // "A Tabs component.",
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
            property: 'tabs',
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
            title: 'props in components/Tabs/index.js'
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
            title: 'components/Tabs/index.js'
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
  title: "Tabs",
  sections: sections,
  cardData: {
    title: 'Tabs',
    description: 'A Tabs for toggling between options.'
  }   

}

export default PAGE_DATA;

