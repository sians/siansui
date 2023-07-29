import { AvatarExample } from 'examples';
const codeSnippets = {
  1: `
import PropTypes from 'prop-types';
import { Container } from './styles';

const Avatar = ({ 
  src, 
  name,
  size, 
  alt,
  variant,
  hasOutline
}) => {
  console.log(name, src, )
  return (
    <Container
      size={size}
      variant={variant}
      hasOutline={hasOutline}
      hasName={name ? true : false}
    >
      {src ? (
        <img 
          src={src}
          alt={alt}
        />
      ): (
        <>
          {name && name.slice(0,2)}
        </>
      )}
    </Container> 
  )
}

export default Avatar;
  
  `,
  2: `
Avatar.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  alt: PropTypes.string,
  variant: PropTypes.oneOf([
    'squared',
    'rounded'
  ]),
  hasOutline: PropTypes.bool
}

Avatar.defaultProps = {
  size: 'sm',
  variant: 'rounded',
  alt: '',
  hasOutline: false
}
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "A component for displaying User's Avatar images.",

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
            property: 'src',
            description: 'Source string for the Avatar image',
            propType: 'string',
            default: '',
          },
          { 
            property: 'name',
            description: 'If no "src" string is supplied, falls back to the first two chars of "name"',
            propType: 'string',
            default: '',
          }, 
          { 
            property: 'size',
            description: "One of: 'sm', 'md' or 'lg'",
            propType: 'string',
            default: 'md',            
          },
          { 
            property: 'alt',
            description: "Alt string for Avatar image",
            propType: 'string',
            default: '',            
          },           
          { 
            property: 'variant',
            description: "One of 'rounded' or 'squared'",
            propType: 'string',
            default: '',
          },           
          { 
            property: 'hasOutline',
            description: "Avatar has an outline",
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
          <AvatarExample />,

        ]
      }
    ]
  }
}

const PAGE_DATA = {
  title: "Avatar",
  sections: sections,
  cardData: {
    title: 'Avatar',
    description: 'A component for displaying an Avatar image.'
  }   

}

export default PAGE_DATA;

