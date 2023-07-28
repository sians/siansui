import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Container } from './styles';

const Badge = ({ 
  children,
  number,
  size,
  max
}) => {
  const numberStr = useMemo(() => {
    return number <= max ? `${number}` : `${max}+`
  }, [number, max])
  return (
    <Container
      size={size}
    >
      <div className='badge'>
        {!(size === 'sm') && numberStr}
      </div>

      {children}
    </Container>
  )
}

export default Badge;

Badge.propTypes = {
  children: PropTypes.node,
  number: PropTypes.number,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  max: PropTypes.number
}

Badge.defaultProps = {
  max: 99,
  size: 'md'
}