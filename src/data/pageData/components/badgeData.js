const codeSnippets = {
  1: `
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Container } from './styles';

const Badge = ({ 
  children,
  number,
  size,
  max
}) => {
  const numberStr = useMemo(() => {
    return number <= max ? \`\${number}\` : \`\${max}+\`
  }, [number, max])
  return (
    <Container
      size={size}
    >
      <div className='badge'>
        {!(size === 'sm') && numberStr}
      </div>

      {children}
    </Container>
  )
}

export default Badge;
  `,
  2: `
Badge.propTypes = {
  children: PropTypes.node,
  number: PropTypes.number,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  max: PropTypes.number
}

Badge.defaultProps = {
  max: 99,
  size: 'md'
}
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "The Bage component generates a badge on the upper right corner of it's child element.  The badge can be sizes 'sm', 'md' and 'lg'.",
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
            property: 'children',
            description: 'A React node',
            propType: 'React.node',
            default: '',
          },
          { 
            property: 'number',
            description: 'Notification text for the badge.',
            propType: 'int',
            default: '0',
          }, 
          { 
            property: 'size',
            description: "The size of the bage.  One of 'sm', 'md' or 'lg'.",
            propType: 'string',
            default: 'md',            
          },           
          { 
            property: 'max',
            description: "The max number of digits that the notification text can display.",
            propType: 'number',
            default: 99,
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
}

const PAGE_DATA = {
  title: "Badge",
  sections: sections,
  cardData: {
    title: 'Badge',
    description: 'Main Text component for paragraph styles.'
  }   

}

export default PAGE_DATA;

