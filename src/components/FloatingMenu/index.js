import { useState, useEffect } from 'react';
import useAppTheme from 'hooks/useAppTheme';

import { Button, Tooltip } from 'components';
import { Container, Animate } from './styles';

const FloatingMenu = () => {
  const { themeState, toggleTheme, toggleLayout, toggleDefaultExpanded } = useAppTheme();
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
  const handleLayoutChange = () => toggleLayout();
  const handleDefaultExpandedChange = () => toggleDefaultExpanded();
  const handleScrollToTop = () => {
    document.getElementById("page").scrollTo({ top: 0, left: 0, behavior: 'smooth'})
  };

  const menuItems = [
    {
      itemName: 'returnToTup',
      iconName: 'chevron-up',
      onClick: () => handleScrollToTop(),
      tooltipText: 'Return to Top'
    },    
    {
      itemName: 'toggleExpanded',
      iconName: 'arrows',
      onClick: () => handleDefaultExpandedChange(),
      tooltipText: 'Default Expanded'
    },    
    {
      itemName: 'toggleLayout',
      iconName: themeState?.isGridLayout ? 'cards-lg' : 'list',
      onClick: () => handleLayoutChange(),
      tooltipText: 'Toggle Display'
    },    
    {
      itemName: 'toggleTheme',
      iconName: themeState?.themeName === 'light' ? 'sun' : 'moon',
      onClick: () => handleThemeChange(),
      tooltipText: 'Toggle Theme'
    },
  ]

  return (
    <Container 
      isExpanded={isExpanded}
      className='floating-action-btn'
    >
      {isExpanded && menuItems.map((props, idx) => (
        <Animate isClosing={isClosing} key={`floaty-${idx}`}>
          <Tooltip 
            placement='left'
            content={props.tooltipText}
          >
            <Button 
              variant='floatingAction'
              {...props} 
            />
          </Tooltip>
        </Animate>
      ))}

      <Button 
        variant='floatingAction'
        iconName='magic'
        onClick={() => handleToggleMenu()}
      />
    </Container>
  )
}

export default FloatingMenu;