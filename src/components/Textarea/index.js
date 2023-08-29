import PropTypes from 'prop-types';
import { useEffect } from 'react';
 
import useHover from 'hooks/useHover';
import useFocus from 'hooks/useFocus';

import { Container, StyledTextarea } from './styles';

const Textarea = ({
  name,
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  defaultValue,
  placeholder,
  isDisabled,
  isRequired,
  isAutofocus,
  maxLength,
  className,
}) => {
  const [hoverRef, isHovered] = useHover();
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

  return (
    <Container className={className}>
      <label htmlFor={name}>
        {label}

        <StyledTextarea 
          ref={(elem) => { 
            hoverRef.current = elem; 
            focusRef(elem);
          }}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          placeholder={placeholder}
          isHovered={isHovered}
          isFocused={isFocused}
          required={isRequired}
          disabled={isDisabled}
          maxLength={maxLength}
        />
      </label>
    </Container>
  )
}

export default Textarea;

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  isAutofocus: PropTypes.bool,
  maxLength: PropTypes.number,
  className: PropTypes.string,
}

Textarea.defaultProps = {
  placeholder: '',
  isDisabled: false,
  isRequired: false,
  isAutofocus: true
}