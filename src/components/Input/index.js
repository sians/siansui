import PropTypes from 'prop-types';
import { useEffect } from 'react';
 
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
  errorText,
  className,
  iconData,
  styles
 }) => {
  const [hoverRef, isHovered] = useHover();
  const [focusRef, isFocused] = useFocus();

  useEffect(() => {
    if (isFocused && onFocus) {
      onFocus();
    };
    
    if (!isFocused && onBlur) {
      onBlur();
    }
  }, [isFocused])



  return (
    <Container
      className={className}
      isLabelHidden={isLabelHidden}      
    >
      {iconData?.leftIcon &&
        <IconContainer isLeft>
          {iconData.leftIcon}
        </IconContainer>
      }

      <label for={name}>
        {label}

        <StyledInput 
          ref={(elem) => { 
            hoverRef.current = elem; 
            focusRef(elem);
          }}
          placeholder={placeholder}
          value={value}
          name={name}
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

        <p className='error-text'>
          {errorText}
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
  errorText: PropTypes.string,
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
  errorText: '',
  className: '',
  iconData: {}
}