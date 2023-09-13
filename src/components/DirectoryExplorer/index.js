import PropTypes from 'prop-types';
import Level from './Level';

const DirectoryExplorer = ({ data, location, setLocation }) => {
  const handleSetLocation = (str) => setLocation && setLocation(str);

  return (
    <Level 
      id={data.name}
      levelIndex={1}
      name={data.name}
      children={data.children}
      setLocation={handleSetLocation}
      activeLocation={location || null}
    />
  )
}

export default DirectoryExplorer;

DirectoryExplorer.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    children: PropTypes.arrayOf([
      PropTypes.shape({
        name: PropTypes.string,
        children: PropTypes.array
      })
    ])
  }),
  location: PropTypes.string,
  setLocation: PropTypes.func
}