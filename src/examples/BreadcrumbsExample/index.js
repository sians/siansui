import { useState } from 'react';
import { Breadcrumbs } from 'components';

const LOCATION = 'root/components/Layout/Row';

const BreadcrumbsExample = () => {
  const [location, setLocation] = useState(LOCATION);
  return (
    <div>
      <Breadcrumbs 
        location={location}
        setLocation={setLocation}
      />
    </div>
  )
}

export default BreadcrumbsExample;