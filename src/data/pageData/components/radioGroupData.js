import { RadioGroupExample } from 'examples';

const codeSnippets = {
  1: `

  `,
  2: `
  `,
  3: `
RadioGroup.propTypes = {
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isHorizontal: PropTypes.bool,
  showFieldset: PropTypes.bool,
}

RadioGroup.defaultProps = {
  isHorizontal: false,
  showFieldset: true
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
          <RadioGroupExample />
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
            property: 'legend',
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
            property: 'options',
            description: '',
            propType: 'object',
            default: '',
          },
          { 
            property: 'selected',
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
            property: 'isHorizontal',
            description: '',
            propType: 'boolean',
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
  title: "RadioGroup",
  sections: sections,
  cardData: {
    title: 'RadioGroup',
    description: 'An RadioGroup component.'
  }   

}

export default PAGE_DATA;

