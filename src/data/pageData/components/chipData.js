import { ChipExample } from 'examples';
const codeSnippets = {
  1: `
import PropTypes from 'prop-types';
import { useMemo } from 'react';

import useHover from 'hooks/useHover';

import { Icon } from 'components';
import { Container, Remove, SIZE_MAP, VARIANT_MAP } from './styles';

const Chip = ({ 
  text,
  isDisabled,
  size,
  variant,
  iconName,
  onRemove,
  hasRemove,
  action
}) => {
  const [ref, isHovered] = useHover();
  const variantName = useMemo(() => {
    return isDisabled ? 'disabled' : variant
  }, [variant, isDisabled])

  const handleChipClick = () => !isDisabled && action();
  const handleRemoveChip = (e) => !isDisabled && onRemove(e);

  return (
    <Container
      ref={ref}
      size={size}
      isHovered={isHovered}
      isDisabled={isDisabled}
      variant={variantName}
      onClick={handleChipClick}
    >
      {!!iconName && 
        <div className='icon-container'>
          <Icon 
            name={iconName}
            size={SIZE_MAP[size]?.icon}
            isHovered={isHovered}
            fill={{
              base: VARIANT_MAP[variantName]?.base.color,
              hover: isDisabled 
                ? VARIANT_MAP[variantName]?.base.color
                : VARIANT_MAP[variantName]?.hover.color,
            }}
          />
        </div>
      }
      {text}

      {hasRemove && 
        <Remove onClick={(e) => handleRemoveChip(e)}>
          <Icon 
            name='close'
            size={SIZE_MAP[size]?.icon}
            isHovered={isHovered}
            fill={{
              base: VARIANT_MAP[variantName]?.base.color,
              hover: isDisabled 
                ? VARIANT_MAP[variantName]?.base.color
                : VARIANT_MAP[variantName]?.hover.color,

            }}
          />
        </Remove>    
      }
    </Container>
  )
}

export default Chip;

Chip.propTypes = {
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  variant: PropTypes.oneOf([
    'outline',
    'solid'
  ]),
  iconName: PropTypes.string,
  onRemove: PropTypes.func,
  hasRemove: PropTypes.bool,
  action: PropTypes.func
}

Chip.defaultProps = {
  isDisabled: false,
  size: 'md',
  variant: 'solid',
  onRemove: () => console.log('Remove chip'),
  hasRemove: false,
  action: () => console.log('Chip action')
}
  `,
  2: `
Chip.propTypes = {
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  variant: PropTypes.oneOf([
    'outline',
    'solid'
  ]),
  iconName: PropTypes.string,
  onRemove: PropTypes.func,
  hasRemove: PropTypes.bool,
  action: PropTypes.func
}

Chip.defaultProps = {
  isDisabled: false,
  size: 'md',
  variant: 'solid',
  onRemove: () => console.log('Remove chip'),
  hasRemove: false,
  action: () => console.log('Chip action')
}
  `
}

const sections = {
  description: {
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
            property: 'text',
            description: 'Text string for Chip',
            propType: 'string',
            default: '',
          },
          { 
            property: 'isDisabled',
            description: 'If true Chip is disabled & cannot be interacted with',
            propType: 'func',
            default: 'false',
          }, 
          { 
            property: 'size',
            description: "One of: 'sm', 'md' or 'lg'",
            propType: 'string',
            default: 'md',            
          },
          { 
            property: 'variant',
            description: "One of: 'solid', 'outline",
            propType: 'string',
            default: 'solid',            
          },           
          { 
            property: 'iconName',
            description: "Must be a valid name for an Icon component",
            propType: 'string',
            default: '',
          },           
          { 
            property: 'onRemove',
            description: "This function is called if the 'close' icon is clicked",
            propType: 'func',
            default: '',            
          },           
          { 
            property: 'hasRemove',
            description: "If true will display the 'close' icon on the right of the Chip",
            propType: 'boolean',
            default: 'false',            
          },           
          { 
            property: 'action',
            description: "This function is called if the Chip container is clicked",
            propType: 'func',
            default: '',            
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
          <ChipExample />,
        ]
      }      
    ]
  }
}

const PAGE_DATA = {
  title: "Chip",
  sections: sections,
  cardData: {
    title: 'Chip',
    description: ''
  }   

}

export default PAGE_DATA;

