import { InputExample } from 'examples';

const codeSnippets = {
  1: `

  `,
  2: `
  `,
  3: `
Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isFullWidth: PropTypes.bool,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLabelHidden: PropTypes.bool,
  isAutocomplete: PropTypes.bool,
  errorText: PropTypes.string,
  className: PropTypes.string,
  iconData: PropTypes.shape({
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
  })
}

Input.defaultProps = {
  placeholder: 'Default placeholder',
  value: '',
  inputType: 'text',
  onChange: () => console.log('No onChange prop was passed to Input'),
  isFullWidth: true,
  isRequired: false,
  isDisabled: false,
  isLabelHidden: false,
  isAutocomplete: false,
  errorText: '',
  className: '',
  iconData: {}
}  
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "An Input component",
          <InputExample />
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
            property: 'value',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'onChange',
            description: '',
            propType: 'func',
            default: '',
          },
          { 
            property: 'label',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'name',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'inputType',
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
            property: 'isFullWidth',
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
            property: 'isDisabled',
            description: '',
            propType: 'boolean',
            default: '',
          },
          { 
            property: 'isLabelHidden',
            description: '',
            propType: 'boolean',
            default: '',
          },
          { 
            property: 'isAutocomplete',
            description: '',
            propType: 'boolean',
            default: '',
          },
          { 
            property: 'errorText',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'className',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'iconData',
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
  title: "Input",
  sections: sections,
  cardData: {
    title: 'Input',
    description: 'An Input component.'
  }   

}

export default PAGE_DATA;

