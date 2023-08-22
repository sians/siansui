import { TextareaExample } from 'examples';

const codeSnippets = {
  1: `

  `,
  2: `
  `,
  3: `
Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  isAutofocus: PropTypes.bool,
  maxLength: PropTypes.number,
  className: PropTypes.string,
}

Textarea.defaultProps = {
  placeholder: '',
  isDisabled: false,
  isRequired: false,
  isAutofocus: true
}
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "A textarea component",
          <TextareaExample />
        ]
      }
    ]
  },
  whenToUse: {
    title: 'When To Use',
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "",
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
            property: 'name',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'label',
            description: '',
            propType: 'string',
            default: '',
          },          
          { 
            property: 'value',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'onChange',
            description: '',
            propType: 'fun',
            default: '',
          },
          { 
            property: 'onFocus',
            description: '',
            propType: 'func',
            default: '',
          },
          { 
            property: 'onBlur',
            description: '',
            propType: 'func',
            default: '',
          },
          { 
            property: 'defaultValue',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'placeholder',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'isDisabled',
            description: '',
            propType: 'boolean',
            default: '',
          },
          { 
            property: 'isRequired',
            description: '',
            propType: 'boolean',
            default: '',
          },
          { 
            property: 'isAutofocus',
            description: '',
            propType: 'boolean',
            default: '',
          },
          { 
            property: 'maxLength',
            description: '',
            propType: 'int',
            default: '',
          },
          { 
            property: 'className',
            description: '',
            propType: 'string',
            default: '',
          },


        ]
      },
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[3],
            language: 'javascript',
            title: 'props in components/Code/index.js'            
          }
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
            title: 'components/Form/index.js'
          },
          {
            str: codeSnippets[2],
            language: 'javascript',
            title: 'components/Form/styles.js'
          },

        ]
      }
    ],
  },
}

const PAGE_DATA = {
  title: "Textarea",
  sections: sections,
  cardData: {
    title: 'Textarea',
    description: 'An Textarea component.'
  }   

}

export default PAGE_DATA;

