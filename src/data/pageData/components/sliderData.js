import { Code, Link } from 'components';
import { SliderExample } from 'examples';
const codeSnippets = {
  1: `
import PropTypes from 'prop-types';
import { useEffect, useMemo } from 'react';

import useDrag from 'hooks/useDrag';

import { Icon } from 'components';

import { Container, Tick } from './styles';
import theme from 'theme';

const Slider = ({
  value,
  onChange,
  min,
  max,
  step,  
  icons,
  iconFill,
  hasTicks,
  size
}) => {
  const drag = useDrag((v) => console.log(v));
  const stepsAry = useMemo(() => {
    return max && step ? Array(max / step).fill() : [];
  }, [step, max])

  const roundValueToStep = (v) => {
    if (step) {
      return Math.round(v / step) * step;
    } 

    return v
  }
  const setValueWithPosition = (positionX) => {
    if (drag.boundingRect) {
      let newValue;
      if (max) {
        newValue = (positionX - drag.boundingRect.left) / max * 100;
      } else {
        newValue = ((positionX - drag.boundingRect.left) / drag.boundingRect.width) * 100;
      }
      
      newValue = roundValueToStep(Math.max(0, Math.min(newValue, max)));

      onChange(newValue)
    }
  }
  const handleMouseDown = (e) => {
    drag.onMouseDown(e)
  }
  const handleTouchStart = (e) => {
    drag.onTouchStart(e)
  }
  const handleRailClick = (e) => {
    if (drag.boundingRect) {
      setValueWithPosition(e.clientX)
    }
  }

  useEffect(() => {
    if (drag.position.x) {
      setValueWithPosition(drag.position.x)
    }
  }, [drag.position.x])


  return (
    <Container 
      value={value}
      min={min}
      max={max}
      ref={drag.containerRef}
      hasIcons={icons.length > 0}
      hasTicks={hasTicks && step}
      step={step}
      size={size}
    >
      {icons && icons.length === 2 &&
        <div className='icon-container left'>
          <Icon 
            name={icons[0]} 
            size={theme.margin}
            fill={{ base: iconFill }}
          />
        </div>
      }

      <div className='rail' onClick={handleRailClick}/>
      <div className='track' onClick={handleRailClick}/>
      
      {stepsAry && hasTicks &&
        stepsAry.map((_, index) => 
          <Tick 
            key={index}
            idx={index}
            step={step}
            max={max}
            value={value}
            className='tick'
            onClick={handleRailClick}
            size={size}
          />
        )
      }

      
      <div 
        className='thumb'
        onMouseDown={handleMouseDown} 
        onTouchStart={handleTouchStart}         
      />

      {icons && icons.length === 2 &&
        <div className='icon-container right'>
          <Icon 
            name={icons[1]} 
            size={theme.margin}
            fill={{ base: iconFill }}
          />
        </div>
      }
    </Container>
  )
}
  
  `,
  2: `
Slider.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,  
  icons: PropTypes.arrayOf([PropTypes.string]),
  iconFill: PropTypes.string,
  hasTicks: PropTypes.bool,
  size: PropTypes.oneOf([
    'sm',
    'lg'
  ])
}

Slider.defaultProps = {
  icons: [],
  iconFill: theme.colors.main,
  hasTicks: false,
  size: 'sm'
}
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "" 
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
            description: 'The value of the Slider',
            propType: 'int',
            default: '',
          },
          { 
            property: 'onChange',
            description: 'Is called when the "value" of the Slider changes',
            propType: 'func',
            default: '',
          }, 
          { 
            property: 'min',
            description: "The minimum value of the range",
            propType: 'int',
            default: '',            
          },
          { 
            property: 'max',
            description: "The maximum value of the range",
            propType: 'int',
            default: '',            
          },           
          { 
            property: 'step',
            description: "The value for stepping through the range",
            propType: 'int',
            default: '',            
          },           
          { 
            property: 'icons',
            description: "An array of two icon name strings. The string at index=0 is the left icon",
            propType: 'Array',
            default: '[]',            
          },           
          { 
            property: 'iconFill',
            description: "CSS color string to override default Icon color",
            propType: 'string',
            default: 'theme.colors.main',            
          },           
          { 
            property: 'hasTicks',
            description: "If the range has 'step' set, then ticks will be display.  Note you cannot display ticks on a continuous Slider.",
            propType: 'boolean',
            default: 'false',
          },           
          { 
            property: 'size',
            description: "One of 'sm' or 'lg'",
            propType: 'string',
            default: 'sm',
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
  setUp: {
    title: 'Set Up',
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "The Slider component is dependent on drag functionality, which it accesses through a useDrag hook.",
          "",
        ]
      },
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
            title: 'components/Slider/index.js'
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
          <SliderExample />,
          "",
        ]
      }      
    ]
  }
}

const PAGE_DATA = {
  title: "Slider",
  sections: sections,
  cardData: {
    title: 'Slider',
    description: 'A slider for setting a value on a range.'
  }   

}

export default PAGE_DATA;

