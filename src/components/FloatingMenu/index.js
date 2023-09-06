import { useState, useEffect } from 'react';
import useAppTheme from 'hooks/useAppTheme';

import { Button } from 'components';
import { Container, Animate } from './styles';

const FloatingMenu = () => {
  const { themeState, toggleTheme, toggleSidebar } = useAppTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleToggleMenu = () => {
    if (isExpanded) {
      setIsClosing(true);
    } else {
      setIsExpanded(true);
    }
  }
  const handleClosingTimeout = () => {
    setIsExpanded(false);
    setIsClosing(false);
  }
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => handleClosingTimeout(), 500);
      return () => clearTimeout(timer);
    }
  }, [isClosing])

  const handleThemeChange = () => toggleTheme();
  const handleToggleSidebar = () => toggleSidebar();

  const menuItems = [
    {
      iconName: themeState?.themeName === 'light' ? 'sun' : 'moon',
      onClick: () => handleThemeChange(),
    },
    {
      iconName: 'compress',
      onClick: () => handleToggleSidebar(),
    },    
  ]

  return (
    <Container 
      isExpanded={isExpanded}
      className='floating-action-btn'
    >
      {isExpanded && menuItems.map(props => (
        <Animate isClosing={isClosing}>
          <Button 
            variant='floatingAction'
            {...props} 
          />
        </Animate>
      ))}

      <Button 
        variant='floatingAction'
        iconName='bars'
        onClick={() => handleToggleMenu()}
      />
    </Container>
  )
}

export default FloatingMenu;