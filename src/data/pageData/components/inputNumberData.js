import { InputNumberExample } from 'examples';

const codeSnippets = {
  1: `

  `,
  2: `
  `,
  3: `
InputNumber.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isAutofocus: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isLabelHidden: PropTypes.bool,
  iconData: PropTypes.shape({
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
  }),
  className: PropTypes.string,
}

InputNumber.defaultProps = {
  placeholder: 42,
  min: 0,
  isFullWidth: true,
  isRequired: false,
  isDisabled: false,
  isAutofocus: false,
  isLabelHidden: false,
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
          "An Input Number component",
          <InputNumberExample />
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
            property: 'label',
            description: 'Text to display above the input field.',
            propType: 'string',
            default: '',
          },
          {
            property: 'name',
            description: 'Unique identifier for the input.',
            propType: 'string',
            default: '',
          },
          {
            property: 'value',
            description: 'Current value of the input.',
            propType: 'string | number',
            default: '',
          },
          {
            property: 'onChange',
            description: 'Function called when the input value changes.',
            propType: 'func',
            default: '',
          },
          {
            property: 'defaultValue',
            description: 'Initial value for uncontrolled component.',
            propType: 'number',
            default: '',
          },
          {
            property: 'min',
            description: 'Minimum value that can be entered.',
            propType: 'number',
            default: '0',
          },
          {
            property: 'max',
            description: 'Maximum value that can be entered.',
            propType: 'number',
            default: '',
          },
          {
            property: 'step',
            description: 'Step size for incrementing and decrementing value.',
            propType: 'number',
            default: '',
          },
          {
            property: 'errorText',
            description: 'Text to display when there is an error.',
            propType: 'string',
            default: '',
          },
          {
            property: 'helperText',
            description: 'Text to display for additional input information.',
            propType: 'string',
            default: '',
          },
          {
            property: 'placeholder',
            description: 'Placeholder text for the input.',
            propType: 'string | number',
            default: '42',
          },
          {
            property: 'onFocus',
            description: 'Function called when the input gains focus.',
            propType: 'func',
            default: '',
          },
          {
            property: 'onBlur',
            description: 'Function called when the input loses focus.',
            propType: 'func',
            default: '',
          },
          {
            property: 'isRequired',
            description: 'Whether the input is required or not.',
            propType: 'bool',
            default: 'false',
          },
          {
            property: 'isDisabled',
            description: 'Whether the input is disabled or not.',
            propType: 'bool',
            default: 'false',
          },
          {
            property: 'isAutofocus',
            description: 'Whether the input should autofocus on mount.',
            propType: 'bool',
            default: 'false',
          },
          {
            property: 'isFullWidth',
            description: 'Whether the input should take the full width of its container.',
            propType: 'bool',
            default: 'true',
          },
          {
            property: 'isLabelHidden',
            description: 'Whether to hide the label.',
            propType: 'bool',
            default: 'false',
          },
          {
            property: 'iconData',
            description: 'Object containing icons to display at left and/or right.',
            propType: 'object',
            default: '{}',
          },
          {
            property: 'className',
            description: 'Additional CSS classes for styling the component.',
            propType: 'string',
            default: '',
          }
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
  title: "InputNumber",
  sections: sections,
  cardData: {
    title: 'InputNumber',
    description: 'An InputNumber component.'
  }   

}

export default PAGE_DATA;

