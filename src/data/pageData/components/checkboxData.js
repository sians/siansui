import { generateId } from 'utils';
import { CheckboxExample } from 'examples';

const codeSnippets = {
  1: `

  `,
  2: `
  `,
  3: `
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
}

Checkbox.defaultProps = {
  isChecked: false,
  isDisabled: false,
}
`,
  4: `
CheckboxGroup.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  legend: PropTypes.string,
  colNum: PropTypes.number,
  showFieldset: PropTypes.bool,
}

CheckboxGroup.defaultProps = {
  isHorizontal: false,
  showFieldset: true,
  colNum: 1
}
`
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "Checkbox & CheckboxGroup components.",
          <CheckboxExample />
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
        widgetType: 'heading',
        data: {
          id: generateId(),
          text: 'Checkbox Props',
          size: 5,
          textAlign: 'center'
        }
      },
      {
        widgetType: 'table',
        tableType: 'props',
        data: [
          
          { 
            property: 'label',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'id',
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
            property: 'onChange',
            description: '',
            propType: 'func',
            default: '',
          },
          { 
            property: 'isChecked',
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
        ]
      },
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[3],
            language: 'javascript',
            title: 'props in components/Checkbox/index.js'            
          }
        ]
      },
      {
        widgetType: 'heading',
        data: {
          id: generateId(),
          text: 'CheckboxGroup Props',
          size: 5,
          textAlign: 'center'
        }
      },      
      {
        widgetType: 'table',
        tableType: 'props',
        data: [
          
          { 
            property: 'options',
            description: '',
            propType: 'array',
            default: '',
          },
          { 
            property: 'onChange',
            description: '',
            propType: 'func',
            default: '',
          },
          { 
            property: 'name',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'legend',
            description: '',
            propType: 'string',
            default: '',
          },
          { 
            property: 'colNum',
            description: '',
            propType: 'int',
            default: '',
          },
          { 
            property: 'showFieldset',
            description: '',
            propType: 'boolean',
            default: '',
          },
        ]
      },      
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[4],
            language: 'javascript',
            title: 'props in components/CheckboxGroup/index.js'            
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
  title: "Checkbox",
  sections: sections,
  cardData: {
    title: 'Checkbox',
    description: 'An Checkbox component.'
  }   

}

export default PAGE_DATA;

