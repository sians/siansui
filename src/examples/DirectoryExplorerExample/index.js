import { useState } from 'react';
import { DirectoryExplorer } from 'components';

import DUMMY_DATA from './DATA';

const DirectoryExplorerExample = () => {
  const [location, setLocation] = useState('');

  return (
    <div>
      <DirectoryExplorer 
        data={DUMMY_DATA}
        location={location}
        setLocation={setLocation}
      />
    </div>
  )
}

export default DirectoryExplorerExample;