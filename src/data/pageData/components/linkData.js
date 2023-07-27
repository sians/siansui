const codeSnippets = {
  1: `
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ButtonLink, ALink } from './styles';

const Link = ({ text, url, variant, isExternal }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(url);
  }

  return isExternal ? (
    <ALink href={url} target='_blank'>
      {text}
    </ALink>
  ) : (
    <ButtonLink
      role="link"
      aria-label={text}
      variant={variant}
      onClick={handleClick}
    >
      {text}
    </ButtonLink>
  )
}

export default Link;
  `,
  2: `
Link.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  variant: PropTypes.string,
  isExternal: PropTypes.bool
}

Link.defaultProps = {
  isExternal: false
}  
  `,

}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "The Link tag provides both internal and external page navigation for your application." 
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
          "There are two underlying types of link tag: a <button> and an <a> tag.",
          "The <button> tag is used for internal links, as it shows up in screen readers & assisted devices, but does not reset the react router.",
          "The <a> tag is used for external links, to provide href & target attributes.",
          "Make sure the specify that the link is external if you are redirection outside of the App, as the link will fail if it does not know to redirect outside of the application."
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
            property: 'text',
            description: 'The text that the link will wrap around',
            propType: 'string',
            default: '',
          },
          { 
            property: 'url',
            description: 'The url that the link will direct to',
            propType: 'string',
            default: '',
          }, 
          { 
            property: 'variant',
            description: 'The variant of link',
            propType: 'string',
            default: '',
          },
          { 
            property: 'isExternal',
            description: 'True if the link is redirecting to an external page.',
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
            title: 'Props in components/Body/index.js'
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
      }
    ],
  },

}

const PAGE_DATA = {
  title: "Link",
  sections: sections,
  cardData: {
    title: 'Link',
    description: 'An Icon component build on top of the iconomoon library.'
  }   

}

export default PAGE_DATA;

