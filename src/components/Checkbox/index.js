import PropTypes from 'prop-types';
import { useEffect } from 'react';

import useHover from 'hooks/useHover';

import { Container, Box } from './styles';

const Checkbox = ({
  label,
  id,
  name,
  onChange,
  isChecked,
  isDisabled,
}) => {
  const [hoverRef, isHovered] = useHover();
  const handleChange = () => onChange(label);

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
        checked={isChecked}
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
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
}

Checkbox.defaultProps = {
  isChecked: false,
  isDisabled: false,
}