import { useState } from 'react';
import { Switch } from 'components';

const SwitchExample = () => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => setIsActive(prev => !prev);

  return (
    <div>
      Switch is {isActive ? 'active' : 'inactive'}
      <Switch 
        isActive={isActive}
        action={handleToggle}
      />
    </div>
  )
}

export default SwitchExample;