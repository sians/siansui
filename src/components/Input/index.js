import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
 
import useHover from 'hooks/useHover';
import useFocus from 'hooks/useFocus';

import { Container, StyledInput, IconContainer } from './styles';

const Input = ({ 
  value,
  onChange,
  label,
  name,
  placeholder,
  inputType,
  onFocus,
  onBlur,
  isFullWidth,
  isRequired,
  isDisabled,
  isLabelHidden,
  isAutocomplete,
  isAutofocus,
  errorText,
  helperText,
  className,
  iconData,
  styles
 }) => {
  const [hoverRef, isHovered] = useHover();
  const [focusRef, isFocused, setFocus] = useFocus();
  const prevIsFocused = useRef(null);

  useEffect(() => {
    if (isAutofocus) {
      setFocus(true);
    }
  }, [isAutofocus, setFocus])


  useEffect(() => {
    if (isFocused && onFocus) {
      onFocus({
        target: {
          value: value,
          name: name
        }
      });
    };
    
    if ((prevIsFocused.current === true) && 
      !isFocused && onBlur) {
        onBlur({
          target: {
            value: value,
            name: name
          }
        });
    }

    prevIsFocused.current = isFocused;
  }, [isFocused, name, value, onBlur, onFocus])



  return (
    <Container
      className={className}
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

        <StyledInput 
          ref={(elem) => { 
            hoverRef.current = elem; 
            focusRef(elem);
          }}
          placeholder={placeholder}
          value={value}
          name={name}
          id={name}
          type={inputType}
          onChange={onChange}
          required={isRequired}
          isFullWidth={isFullWidth}
          disabled={isDisabled}
          hasError={!!errorText}
          iconKeys={Object.keys(iconData)}
          isHovered={isHovered}
          isFocused={isFocused}
          autocomplete={isAutocomplete}
          styles={styles}
          
        />

        <p className='sub-text'>
          {errorText}
          {helperText && !errorText && helperText}
        </p>
      </label>

      {iconData?.rightIcon &&
        <IconContainer>
          {iconData.rightIcon}
        </IconContainer>
      }      
    </Container>
  )
}

export default Input;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isFullWidth: PropTypes.bool,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLabelHidden: PropTypes.bool,
  isAutocomplete: PropTypes.bool,
  isAutofocus: PropTypes.bool,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
  iconData: PropTypes.shape({
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
  })
}

Input.defaultProps = {
  placeholder: 'Default placeholder',
  value: '',
  inputType: 'text',
  onChange: () => console.log('No onChange prop was passed to Input'),
  isFullWidth: true,
  isRequired: false,
  isDisabled: false,
  isLabelHidden: false,
  isAutocomplete: false,
  isAutofocus: false,
  className: '',
  iconData: {}
}