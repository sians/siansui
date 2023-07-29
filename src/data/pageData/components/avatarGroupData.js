import { AvatarGroupExample } from 'examples';
const codeSnippets = {
  1: `
import PropTypes from 'prop-types';

import { Avatar, Icon, Typography } from 'components';
import { Container, Item } from './styles';

const AvatarGroup = ({ 
  data, 
  max, 
  size, 
  variant, 
  total 
}) => {
  return (
    <Container>
      {data && data.slice(0,max).map((avatar, idx) => {
        return (
          <Item indent={idx} size={size} variant={variant}>
            <Avatar 
              src={avatar.src}
              name={avatar.name}
              size={size}
              variant={variant}
              hasOutline
            />
          </Item>
        )
      })}

      {data.length > max &&
        <Item indent={max} size={size} variant={variant}>
          <Typography.Small>{total || data.length - max}+</Typography.Small>
        </Item>
      }
    </Container>
  )
}

export default AvatarGroup;
  
  `,
  2: `
AvatarGroup.propTypes = {
  avatars: PropTypes.arrayOf([PropTypes.node]),
  max: PropTypes.number,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  variant: PropTypes.oneOf([
    'rounded',
    'squared'
  ]),
  total: PropTypes.number
}

AvatarGroup.defaultProps = {
  max: 5,
  size: 'sm',
  variant: 'rounded'
}
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "A grouped collection of Avatars."
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
            property: 'avatarData',
            description: 'An array of objects containing avatar data.',
            propType: 'obj',
            default: '',
          },
          { 
            property: 'max',
            description: 'The maximum number of Avatars to display in a group.',
            propType: 'number',
            default: 5,
          }, 
          { 
            property: 'size',
            description: 'One of "sm", "md" or "lg".',
            propType: 'number',
            default: "",
          }, 
          { 
            property: 'variant',
            description: 'One of "rounded" or "squared"',
            propType: 'string',
            default: "",
          }, 
          { 
            property: 'total',
            description: 'A number value that overrides the value to show the total remaining Avatars in the stack "',
            propType: 'int',
            default: "",
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
          <AvatarGroupExample />,
          ""
        ]
      }      
    ]
  }
}

const PAGE_DATA = {
  title: "AvatarGroup",
  sections: sections,
  cardData: {
    title: 'AvatarGroup',
    description: 'Groups together Avatar components.'
  }   

}

export default PAGE_DATA;

