import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ReactSelect from 'react-select'

import useHover from 'hooks/useHover';

import { useTheme } from 'styled-components';
import { Container, makeStyles } from './styles';

const Select = ({ 
  options,
  onChange,
  placeholder,
  isFullWidth,
  isAutofocus,
  isMulti,
  onFocus,
  onBlur
}) => {
  const [hoverRef, isHovered] = useHover();
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();
  const styleProps = useMemo(() => {
    return { isFullWidth, isHovered, isFocused };
  }, [isFullWidth, isHovered, isFocused])
  const styles = useMemo(() => {
    return makeStyles(theme, styleProps)
  }, [theme, styleProps]);


  const handleFocus = (e) => {
    if (e.type === 'focus') setIsFocused(true);
    if (onFocus) onFocus();
  }
  const handleBlur = (e) => {
    if (e.type === 'blur') setIsFocused(false);
    if (onBlur) onBlur();
  }

  
  return (
    <Container 
      ref={hoverRef}
    >
      <ReactSelect 
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        styles={styles}
        autofocus={isAutofocus}
        isMulti={isMulti}
        onFocus={(e) => handleFocus(e)}
        onBlur={(e) => handleBlur(e)}
      />
    </Container>
  )
}

export default Select;

Select.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  isFullWidth: PropTypes.bool,
  isAutofocus: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}

Select.defaultProps = {
  options: []
}