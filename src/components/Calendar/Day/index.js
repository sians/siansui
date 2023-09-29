import { useMemo } from 'react';
import useHover from 'hooks/useHover';

import { Typography } from 'components';

import { Container } from './styles';

const Day = ({ 
  date, 
  isActiveMonth, 
  today,
  isSelected,
  onSelection
}) => {
  const [hoverRef, isHovered] = useHover();

  // TODO: hook to get any date "events" etc
  
  const isToday = useMemo(() => {
    return (
      today.getFullYear() === date.getFullYear() &&
      today.getMonth() === date.getMonth() &&
      today.getDate() === date.getDate()
    )
  }, [today, date])

  return (
    <Container 
      ref={hoverRef}
      isHovered={isHovered}
      isToday={isToday}
      isSelected={isSelected}
      isActiveMonth={isActiveMonth}
      onClick={() => onSelection(date)}
    >
      <div className='date'>
        <Typography.Small>
          {date.getDate()}
        </Typography.Small>
      </div>
    </Container>
  )
}

export default Day;