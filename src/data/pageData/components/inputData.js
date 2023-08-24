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
    isAutofocus: PropTypes.bool,
    errorText: PropTypes.string,
    helperText: PropTypes.string,
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
    isAutofocus: false,
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
            description: 'The current value of the input.',
            propType: 'string',
            default: "''",
          },
          {
            property: 'onChange',
            description: 'Callback to be invoked when the input value changes.',
            propType: 'func',
            default: "() => console.log('No onChange prop was passed to Input')",
          },
          {
            property: 'label',
            description: 'The label text associated with the input.',
            propType: 'string',
            default: 'undefined',
          },
          {
            property: 'name',
            description: 'The name attribute for the input.',
            propType: 'string',
            default: 'undefined',
          },
          {
            property: 'placeholder',
            description: 'The placeholder text displayed when the input is empty.',
            propType: 'string',
            default: "'Default placeholder'",
          },
          {
            property: 'inputType',
            description: 'The HTML type attribute for the input.',
            propType: 'string',
            default: "'text'",
          },
          {
            property: 'onFocus',
            description: 'Callback to be invoked when the input gains focus.',
            propType: 'func',
            default: 'undefined',
          },
          {
            property: 'onBlur',
            description: 'Callback to be invoked when the input loses focus.',
            propType: 'func',
            default: 'undefined',
          },
          {
            property: 'isFullWidth',
            description: 'Determines whether the input should take up the full width of its container.',
            propType: 'bool',
            default: 'true',
          },
          {
            property: 'isRequired',
            description: 'Specifies whether the input is required to have a value.',
            propType: 'bool',
            default: 'false',
          },
          {
            property: 'isDisabled',
            description: 'Determines whether the input is disabled.',
            propType: 'bool',
            default: 'false',
          },
          {
            property: 'isLabelHidden',
            description: 'Specifies whether the label should be hidden.',
            propType: 'bool',
            default: 'false',
          },
          {
            property: 'isAutocomplete',
            description: 'Specifies whether the autocomplete feature is enabled.',
            propType: 'bool',
            default: 'false',
          },
          {
            property: 'isAutofocus',
            description: 'Specifies whether the input should be focused automatically on mount.',
            propType: 'bool',
            default: 'false',
          },
          {
            property: 'errorText',
            description: 'The text to display when there is an error.',
            propType: 'string',
            default: 'undefined',
          },
          {
            property: 'helperText',
            description: 'Additional text displayed below the input for guidance.',
            propType: 'string',
            default: 'undefined',
          },
          {
            property: 'className',
            description: 'Additional CSS classes to apply to the container.',
            propType: 'string',
            default: "''",
          },
          {
            property: 'iconData',
            description: 'An object containing the left and right icons to display in the input.',
            propType: 'shape',
            default: '{}',
          },
          {
            property: 'styles',
            description: 'Inline styles to apply to the component.',
            propType: 'object',
            default: 'undefined',
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
  title: "Input",
  sections: sections,
  cardData: {
    title: 'Input',
    description: 'An Input component.'
  }   

}

export default PAGE_DATA;

