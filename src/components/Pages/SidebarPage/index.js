import { useState, useEffect, useMemo } from 'react';

import { useTheme } from 'styled-components';
import useAppTheme from 'hooks/useAppTheme';

import { Sidebar, FloatingMenu } from 'components';

import { Page, Content, Animate } from './styles';

const SidebarPage = ({ children }) => {
  const theme = useTheme();
  const { themeState, setIsSidebarExpanded } = useAppTheme();
  const { isSidebarExtended: isOpen } = themeState;

  const [isClosing, setIsClosing] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);
  

  const handleCloseClick = () => setIsClosing(true);
  const handleCloseSidebar = () => {
    setIsSidebarExpanded(false);
    setIsSidebarOpen(false);
    setIsClosing(false);
  }
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => handleCloseSidebar(), 500);
      return () => clearTimeout(timer);
    }
  }, [isClosing])

  useEffect(() => {
    if (isOpen) {
      setIsSidebarOpen(isOpen)
    } else {
      handleCloseClick()
    }
  }, [isOpen])  


  return (
    <>
      <Page id='page'>
        <Sidebar
          isClosing={isClosing} 
          isOpen={isSidebarOpen}          
        />

        <Animate
          isClosing={isClosing} 
          isOpen={isSidebarOpen}          
        >
          <Content>
            {children}
          </Content>  
        </Animate>
      </Page>
      
      <FloatingMenu />      
    </>
  )
}

export default SidebarPage;