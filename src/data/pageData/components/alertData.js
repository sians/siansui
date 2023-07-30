import { AlertExample } from 'examples';
const codeSnippets = {
  1: `

  
  `,
  2: `

Alert.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  hasIcon: PropTypes.bool,
  hasClose: PropTypes.bool,
  alertType: PropTypes.oneOf([
    'error',
    'success',
    'warning',
    'info'
  ]).isRequired,
  variant: PropTypes.oneOf([
    'solid',
    'light',
    'toast'
  ]),
  onClose: PropTypes.func,
  displayTimeout: PropTypes.number
}

Alert.defaultProps = {
  title: "",
  description: "",
  hasIcon: true,
  hasClose: false,
  alertType: 'error',
  variant: 'light',
  onClose: () => console.log('Alert needs onClose prop'),
  displayTimeout: undefined
}
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "Display an alert",
          <AlertExample />
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
            property: 'title',
            description: 'Alert title text',
            propType: 'string',
            default: '',
          },
          { 
            property: 'description',
            description: 'More detailed description of the alert message.',
            propType: 'string',
            default: '',
          },
          { 
            property: 'hasIcon',
            description: '',
            propType: 'boolean',
            default: '',
          }, 
          { 
            property: 'hasClose',
            description: '',
            propType: 'boolean',
            default: '',
          },
          { 
            property: 'alertType',
            description: 'error | success | warning | info',
            propType: 'string',
            default: '',
          }, 
          { 
            property: 'variant',
            description: 'solid | light',
            propType: 'string',
            default: '',
          }, 
          { 
            property: 'onClose',
            description: '',
            propType: 'func',
            default: '',
          }, 
          { 
            property: 'displayTimeout',
            description: 'Will trigger onClose after this many milliseconds',
            propType: 'int',
            default: '',
          }, 

        ]
      },
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[2],
            language: 'javascript',
            title: 'props in components/Alert/index.js'
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
            title: 'components/Alert/index.js'
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
  title: "Alert",
  sections: sections,
  cardData: {
    title: 'Alert',
    description: 'A component for displaying an Avatar image.'
  }   

}

export default PAGE_DATA;

