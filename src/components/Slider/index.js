import PropTypes from 'prop-types';
import { useEffect, useMemo, useCallback } from 'react';
import { useTheme } from 'styled-components';

import useDrag from 'hooks/useDrag';

import { Icon } from 'components';

import { Container, Tick } from './styles';

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
  const theme = useTheme();
  const drag = useDrag((v) => console.log(v));
  const stepsAry = useMemo(() => {
    return max && step ? Array(max / step).fill() : [];
  }, [step, max])

  const roundValueToStep = useCallback((v) => {
    if (step) {
      return Math.round(v / step) * step;
    } 

    return v
  }, [step])

  const setValueWithPosition = useCallback((positionX) => {
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
  }, [drag.boundingRect, max, onChange, roundValueToStep])

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
  }, [drag.position.x, setValueWithPosition])


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

export default Slider;

Slider.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,  
  icons: PropTypes.arrayOf(PropTypes.string),
  iconFill: PropTypes.string,
  hasTicks: PropTypes.bool,
  size: PropTypes.oneOf([
    'sm',
    'lg'
  ])
}

Slider.defaultProps = {
  icons: [],
  iconFill: 'black',
  hasTicks: false,
  size: 'sm'
}