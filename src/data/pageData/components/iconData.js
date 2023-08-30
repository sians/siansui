const codeSnippets = {
  1: `
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import theme from 'theme';

import IcomoonReact from 'icomoon-react';
import iconSet from 'assets/fonts/icons/selection.json';

import { Container } from './styles';

const Icon = ({ 
  name, 
  size,
  action,
  className,
  fill,
  isDisabled,
  rotateBy,
  verticalAlign,
  isHovered
}) => {
  const isLink = action ? true : false;

  const [color, setColor] = useState([]);

  useEffect(() => {
    setColor(makeColor())
  }, [fill])

  const handleAction = () => {
    if (!isDisabled && action) {
      action();
    }
  }

  const colorMap = {
    disabled: {
      base: theme.colors.grey.dark, 
      hover: theme.colors.grey.dark
    },
    link: {
      base: theme.colors.black, 
      hover: theme.colors.main
    },
    default: {
      base: theme.colors.black,
      hover: theme.colors.main
    },

    hasFill: { ...fill }
  }
  const makeColor = () => {
    if (isDisabled) {
      return colorMap.disabled;
    }

    if (fill) {
      return colorMap.hasFill;
    }

    if (isLink) {
      return colorMap.link
    }

    return colorMap.default;
  }

  return (
  <Container 
    size={size}
    onClick={() => handleAction()}
    isLink={isLink}
    className={className}
    isDisabled={isDisabled}
    rotateBy={rotateBy}
  >
    <IcomoonReact 
      iconSet={iconSet} 
      size={size}
      title={name} 
      icon={name}
      color={
        isHovered
          ? color.hover || color.base
          : color.base
      }
      style={{verticalAlign: verticalAlign || 'super'}}
    />
  </Container>
)}

export default Icon;

Icon.propTypes = {
  name: PropTypes.oneOf([
    'bars',
    'search',
    'chevron-down',
    'linkedin-square',
    'github',
    'circle',
    'toggle-off',
    'toggle-on',
    'icomoon',
  ]),
  size: PropTypes.number,
  action: PropTypes.func,
  className: PropTypes.string,
  fill: PropTypes.arrayOf([PropTypes.string])
}

Icon.defaultProps = {
  fill: []
}
  
  `,
  2: `
import styled from 'styled-components';

export const Container = styled.div(props => {
  const { size, isLink, isDisabled, rotateBy } = props;

  const defaultSize = 18;

  const baseStyles = {
    width: size ? size : defaultSize,
    height: size ? size : defaultSize,
    transform: rotateBy && \`rotate(\${rotateBy}deg)\`,
    transition: 'transform 0.3s'
  }

  const linkStyles = {
    '&:hover': { cursor: 'pointer' }
  }

  return {
    ...baseStyles,
    ...(isLink && !isDisabled && linkStyles),
  }

})  
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ "An Icon component that wraps around an iconomoon Icon." ]
      }
    ]
  },
  whenToUse: {
    title: 'When To Use',
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "This Icon component is a wrapper for the iconomoon Icon.  In order to build this component & display your own custom icons, you must first upload your custom Icon files to the iconomoon webapp.",
          "Once you have uploaded, you can then download a folder of SVGs and add it to your React project's assets/fonts/icons folder.",
          "This icon set is then imported into the Icon component below."
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
            property: 'name',
            description: 'Selects the Icon to display.  Corresponds to the "name" property in the selection.json file from iconomoon',
            propType: 'string',
            default: '',
          },
          { 
            property: 'size',
            description: 'Sets the height & width of the Icon',
            propType: 'int',
            default: '',
          }, 
          { 
            property: 'action',
            description: 'Function to be called onClick if provided',
            propType: 'func',
            default: '',
          }, 
          { 
            property: 'className',
            description: 'Sets the HTML class',
            propType: 'string',
            default: '',
          }, 
          { 
            property: 'fill',
            description: 'An object with two keys: base & hover.  Each value represents a css color string.  "base" overrides the Icon color, and "hover" sets the Icon color on hover.',
            propType: '{ base: String, hover: String }',
            default: '{}',
          }, 
          { 
            property: 'isDisabled',
            description: 'If the Icon is disabled, all hover styles & behaviours are also disabled',
            propType: 'boolean',
            default: '',
          }, 
          { 
            property: 'rotateBy',
            description: 'Rotates the icon by x degrees.',
            propType: 'int',
            default: '',
          }, 
          { 
            property: 'verticalAlign',
            description: 'Aligns the Icon',
            propType: 'string',
            default: '',
          }, 
          { 
            property: 'isHovered',
            description: 'A boolean property to track whether the Icon is hovered.  This is passed in as a prop by a parent using a useHover hook.',
            propType: 'boolean',
            default: '',
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
            title: 'components/Icon/index.js'
          },
          {
            str: codeSnippets[2],
            language: 'javascript',
            title: 'components/Icon/styles.js'
          },

        ]
      }
    ],
  },
  toDo: {
    title: 'To Do',
    widgets: [
      {
        widgetType: 'list',
        listType: 'ul',
        data: [
          "Abstract more styling info to theme - eg. 'defaultSize'",
          "Make UI 'sizes' for Icons - eg. 'small', 'med', 'large' have default sizes from style guide, instead of passing in pixels as 'size' prop."
        ]
      }
    ]
  }
}

const PAGE_DATA = {
  title: "Icon",
  sections: sections,
  cardData: {
    title: 'Icon',
    description: 'An Icon component build on top of the iconomoon library.'
  }   

}

export default PAGE_DATA;

