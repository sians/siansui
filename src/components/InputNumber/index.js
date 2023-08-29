import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import useHover from 'hooks/useHover';
import useFocus from 'hooks/useFocus';

import { Icon } from 'components';

import { Container, Input, IconContainer, Arrows } from './styles';

const InputNumber = ({
  label,
  name,
  value,
  onChange,
  defaultValue,
  min,
  max,
  step,
  errorText,
  helperText,
  placeholder,
  onFocus,
  onBlur,
  isRequired,
  isDisabled,
  isAutofocus,
  isFullWidth,
  isLabelHidden,
  iconData,
  className,
}) => {
  const inputRef = useRef(null);
  const [hoverRef, isHovered] = useHover();
  const [arrowRef, isArrowHovered] = useHover();
  const [focusRef, isFocused, setFocus] = useFocus();

  useEffect(() => {
    if (isAutofocus) {
      setFocus(true);
    }
  }, [isAutofocus, setFocus])

  useEffect(() => {
    if (isFocused && onFocus) {
      onFocus();
    };
    
    if (!isFocused && onBlur) {
      onBlur();
    }
  }, [isFocused, onFocus, onBlur])

  const handleArrowClick = (arrow) => {
    if (inputRef.current) {
      let currentValue = parseFloat(inputRef.current.value) || 0;
      let newValue;
      
      if (arrow === 'Up') {
        newValue = currentValue + (step || 1);
      } else {
        newValue = currentValue - (step || 1);
      }
      
      if (min != null) newValue = Math.max(newValue, min);
      if (max != null) newValue = Math.min(newValue, max);

      inputRef.current.value = newValue;

      const syntheticEvent = {
        target: {
          value: newValue,
          name: inputRef.current.name,
        },
        bubbles: true,
        cancelable: true,
      };
  
      onChange(syntheticEvent);
    }
  };


  return (
    <Container 
      className={className}
      isFullWidth={isFullWidth}
      isLabelHidden={isLabelHidden}
      hasError={!!errorText}
    >
      {iconData?.leftIcon &&
        <IconContainer isLeft>
          {iconData.leftIcon}
        </IconContainer>
      }

      <label htmlFor={name}>
        <p>{label}</p>

        <Input
          type='number'
          ref={(elem) => { 
            inputRef.current = elem;
            hoverRef.current = elem; 
            focusRef(elem);
          }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          name={name}
          id={name}
          isHovered={isHovered || isArrowHovered}
          isFocused={isFocused}          
          required={isRequired}
          disabled={isDisabled}
          isFullWidth={isFullWidth}
          hasError={!!errorText}
          iconKeys={Object.keys(iconData)}
        />

        <Arrows 
          ref={arrowRef}
          isHovered={isHovered || isFocused || isArrowHovered}
        >
          <div 
            className='arrow up'
            onClick={() => handleArrowClick('Up')}
          >
            <Icon 
              name='chevron-up'
              size={6}
            />
          </div>

          <div 
            className='arrow'
            onClick={() => handleArrowClick('Down')}
          >
            <Icon 
              name='chevron-down'
              size={6}
            />
          </div>
        </Arrows>

        <p className='sub-text'>
          {errorText}
          {helperText && !errorText && helperText}
        </p>
      </label>
    </Container>
  )
}

export default InputNumber;

InputNumber.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isAutofocus: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isLabelHidden: PropTypes.bool,
  iconData: PropTypes.shape({
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
  }),
  className: PropTypes.string,
}

InputNumber.defaultProps = {
  placeholder: 42,
  min: 0,
  isFullWidth: true,
  isRequired: false,
  isDisabled: false,
  isAutofocus: false,
  isLabelHidden: false,
  className: '',
  iconData: {}
}