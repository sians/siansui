import { SwitchExample } from 'examples';
const codeSnippets = {
  1: `
import { PropTypes } from 'prop-types';
import { Container } from './styles';

const Switch = ({ isActive, action, isDisabled }) => {
  const handleAction = () => {
    if (!isDisabled) {
      action()
    }
  }
  return (
    <Container 
      onClick={handleAction}
      isActive={isActive}
      isDisabled={isDisabled}
    >
      <div className='toggle' />
    </Container>
  )
}

export default Switch; 
  `,
  2: `
Switch.propTypes = {
  isActive: PropTypes.bool,
  action: PropTypes.func,
  isDisabled: PropTypes.bool
}

Switch.defaultProps = {
  isDisabled: false,
  action: console.log('action is required')
}
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "The Switch component is a boolean on/off toggle.",
          "Often used in forms to collect data, or manage settings."
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
            property: 'isActive',
            description: 'State of the switch',
            propType: 'boolean',
            default: '',
          },
          { 
            property: 'action',
            description: 'Function to call when the switch is clicked.',
            propType: 'func',
            default: '',
          }, 
          { 
            property: 'isDisabled',
            description: "Disables the switch if true",
            propType: 'boolean',
            default: 'false',            
          },           
        ]
      },
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[2],
            language: 'javascript',
            title: 'props in components/Badge/index.js'
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
            title: 'components/Body/index.js'
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
          <SwitchExample />,
          "",
        ]
      }      
    ]
  }
}

const PAGE_DATA = {
  title: "Switch",
  sections: sections,
  cardData: {
    title: 'Switch',
    description: 'A switch for toggling between options.'
  }   

}

export default PAGE_DATA;

