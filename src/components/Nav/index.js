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

  const [menuState, setMenuState] = useState("closed"); 
  const handleToggleMenu = () => {
    if (menuState === "closed") {
      setMenuState("opening");
    } else if (menuState === "open") {
      setMenuState("closing");
    }
  };
  useEffect(() => {
    console.log(menuState, 'state')
    let timer;
    if (menuState === "opening") {
      timer = setTimeout(() => setMenuState("open"), 200);
    } else if (menuState === "closing") {
      timer = setTimeout(() => setMenuState("closed"), 200);
    }
    return () => clearTimeout(timer);
  }, [menuState]);

  const outsideRef = useClickOutside(() => {
    console.log('ref')
    if (menuState === "open") {
      handleToggleMenu();
    }
  }); 

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
          <MenuItem onClick={handleToggleMenu}>
            <Icon 
              name='bars' 
              fill={{base: theme.colors.black}}
            />
          </MenuItem>
        </ul>

        <AnimateDropdown 
          ref={outsideRef}
          isMenuOpen={menuState === "open" || menuState === "closing"}
          isClosing={menuState === "closing"}
        >
          <Menu items={DROPDOWN_MENU} selected={location.pathname.split('/')?.[1]}/>
        </AnimateDropdown>

        
      </div>
    </Container>
  )
}

export default Nav;