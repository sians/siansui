import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import useClickOutside from 'hooks/useClickOutside';

import { Search, Icon, Logo, Menu } from 'components';

import { Container, MenuItem, AnimateDropdown } from './styles';
import theme from 'theme';

const MENU = [
  'Components',
  'Hooks'
]

const DROPDOWN_MENU = [
  {
    text: 'Github',
    url: '',
    isExternal: true
  },  
  {
    text: 'Contact',
    url: '/contact'
  },
]


const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosingMenu, setIsClosingMenu] = useState(false);
  const handleCloseMenuClick = () => setIsClosingMenu(true);
  const handleCloseMenu = () => {
    setIsMenuOpen(prev => !prev)
    setIsClosingMenu(false);
  }

  const outsideRef = useClickOutside(() => {
    if (isMenuOpen) handleCloseMenuClick();
  }); 

  useEffect(() => {
    if (isClosingMenu) {
      const timer = setTimeout(() => handleCloseMenu(), 200);
      return () => clearTimeout(timer);
    }
  }, [isClosingMenu])  
  

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <Container>
      <div className='logo-container' onClick={handleLogoClick}>
          <Logo />
      </div>

      <div className='main-container'>
        <div>
          <Search 
            placeholder='Search...'
          />
        </div>

        <ul>
          {MENU.map(menu => {
            return (
              <MenuItem 
                key={`menu-item-${menu}`}
                isActive={location.pathname.split('/')?.[1] === menu.toLowerCase()}
                onClick={() => navigate(`/${menu.toLowerCase()}`)}
              >
                {menu}
              </MenuItem>
            )
          })}
          <MenuItem onClick={handleCloseMenuClick}>
            <Icon 
              name='bars' 
              fill={{base: theme.colors.black}}
            />
          </MenuItem>
        </ul>

        <AnimateDropdown 
          ref={outsideRef}
          isMenuOpen={isMenuOpen}
          isClosing={isClosingMenu}
        >
          <Menu items={DROPDOWN_MENU} selected={location.pathname.split('/')?.[1]}/>
        </AnimateDropdown>

        
      </div>
    </Container>
  )
}

export default Nav;