import Typography from 'components/Typography';
import PropTypes from 'prop-types';
import { Container, Crumb } from './styles';

const Breadcrumbs = ({ location, setLocation }) => {
  const crumbs = location?.split('/');

  const handleClick = (index) => {
    const newCrumbs = crumbs.slice(0, index + 1);
    const newLocation = newCrumbs.join('/');
    setLocation(newLocation)
  }
  return (
    <Container>
      {crumbs && crumbs.map((crumb, idx) => {
        const isLast = (idx+1) === crumbs.length;
        
        return (
          <Crumb isLast={isLast}>
            <Typography.Heading size={7}>
              <span 
                className='text'
                onClick={() => handleClick(idx)}
              >
                {crumb}
              </span>

              {isLast 
                ? '' 
                : <span className='divider'>/</span>
              }
            </Typography.Heading>
          </Crumb>
        )
      })}
      
    </Container>
  )
}

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  location: PropTypes.string
}