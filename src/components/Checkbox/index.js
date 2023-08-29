import PropTypes from 'prop-types';
import { useEffect } from 'react';

import useHover from 'hooks/useHover';

import { Container, Box } from './styles';

const Checkbox = ({
  label,
  id,
  name,
  onChange,
  value,
  isDisabled,
}) => {
  const [hoverRef, isHovered] = useHover();
  const handleChange = () => onChange({
    target: {
      name: name,
      value: !value,
      label: label
    }
  });

  return (
    <Container 
      className='checkbox'
      isDisabled={isDisabled}
      isHovered={isHovered}
      ref={hoverRef}
    >
      <Box 
        type="checkbox" 
        id={id}
        name={name}
        checked={value}
        disabled={isDisabled}
        onChange={handleChange}
        isHovered={isHovered}
        
      />
      <label htmlFor={id}>
        <p>{label}</p>
      </label>
    </Container>
  )
}

export default Checkbox;

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool,
  isDisabled: PropTypes.bool,
}

Checkbox.defaultProps = {
  value: false,
  isDisabled: false,
}