import { useNavigate, useLocation } from 'react-router-dom';

import { Search, Icon, Logo } from 'components';

import { Container, MenuItem } from './styles';
import theme from 'theme';

const MENU = [
  'Components',
  'Hooks'
]

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
          <MenuItem>
            <Icon 
              name='bars' 
              fill={{base: theme.colors.black}}
            />
          </MenuItem>
        </ul>

        
      </div>
    </Container>
  )
}

export default Nav;