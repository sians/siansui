import { useTheme } from 'styled-components';

import { months } from 'utils';

import { Icon, Chip } from 'components';

import { Container } from './styles';

const Nav = ({ 
  activeMonth, 
  activeYear, 
  onNav
}) => {
  const theme = useTheme();
  const today = new Date();

  const iconFill = { base: theme.colors.fg };
  const iconSize = 14;

  const prev = () => {
    if (activeMonth === 0) {
      return {
        month: 11,
        year: activeYear-1,
      }
    } else {
      return { month: activeMonth-1 }
    }
  }

  const next = () => {
    if (activeMonth === 11) {
      return {
        month: 0,
        year: activeYear+1,
      }
    } else {
      return { month: activeMonth+1 }
    }    
  }

  const handleNav = ({ isPrev, isNext }) => {
    if (isPrev) onNav(prev());
    if (isNext) onNav(next());
  }

  const resetToToday = () => {
    onNav({
      month: today.getMonth(),
      year: today.getFullYear()
    })
  }

  return (
    <Container>
      <div className='icons'>
        <Icon 
          name='chevron-down'
          rotateBy={90}
          size={iconSize}
          fill={iconFill}
          className='icon'
          action={() => handleNav({ isPrev: true })}
        />

        <Icon 
          name='chevron-down'
          rotateBy={-90}
          size={iconSize}
          fill={iconFill}
          className='icon'
          action={() => handleNav({ isNext: true })}
        />

        {months[activeMonth]} {activeYear}
      </div>
    
      <div>
        <Chip 
          text='Today'
          variant='solid'
          isDisabled={today.getFullYear() === activeYear && today.getMonth() === activeMonth}
          action={resetToToday}
        />
      </div>
    </Container>
  )
}

export default Nav;