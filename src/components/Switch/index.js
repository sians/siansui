import { PropTypes } from 'prop-types';
import { Container } from './styles';

const Switch = ({ isActive, action, isDisabled }) => {
  const handleAction = () => {
    if (!isDisabled) {
      action()
    }
  }
  return (
    <Container 
      onClick={handleAction}
      isActive={isActive}
      isDisabled={isDisabled}
    >
      <div className='toggle' />
    </Container>
  )
}

export default Switch; 

Switch.propTypes = {
  isActive: PropTypes.bool,
  action: PropTypes.func,
  isDisabled: PropTypes.bool
}

Switch.defaultProps = {
  isDisabled: false,
  action: () => console.log('action is required')
}