import { useState, useMemo } from 'react';
import { getWeeksInMonth, startOfWeek, add } from 'date-fns';

import { Layout } from 'components';

import Nav from './Nav';
import Day from './Day';

import { Container, Header, Row } from './styles';

const Calendar = () => {
  const today = useMemo(() => new Date(), []);
  const [activeMonth, setActiveMonth] = useState(today.getMonth());
  const [activeYear, setActiveYear] = useState(today.getFullYear());
  const startOfFirstWeek = useMemo(() => startOfWeek(new Date(activeYear, activeMonth, 1)), 
    [activeYear, activeMonth]);

  const [selectedDate, setSelectedDate] = useState(null);

  const calendarRows = useMemo(() => {
    const weeks = Array.from({ length: getWeeksInMonth(today) }, (_, i) => i);
    let currentDate = startOfFirstWeek;
    return weeks.map(_ => {
      const weekDays = Array.from(
        { length: 7 }, 
        (_, i) => add(currentDate, { days: i })
      );

      currentDate = add(
        weekDays[weekDays.length-1], 
        { days: 1}
      )

      return weekDays;
    })    
  }, [startOfFirstWeek, today])
  
  const handleSelection = (date) => {
    // TODO: pass selected up so other comps can access
    
    if (date?.toString() !== selectedDate?.toString()) {
      setSelectedDate(date);
    } else {
      setSelectedDate(null);
    }
  }

  const handleSetActive = ({ month, year}) => {
    if (month) setActiveMonth(month);
    if (year) setActiveYear(year);
  }

  return (
    <Container>
      <Nav 
        activeMonth={activeMonth}
        activeYear={activeYear}
        onNav={handleSetActive}
      />

      <Header>
        {calendarRows && calendarRows[0].map(weekDay => {
          return (
            <Layout.Col key={`head-${weekDay}`} size={12/7} >
              <div className='header-cell'>
                <h5>
                  {weekDay.toString().slice(0,4).toUpperCase()}
                </h5>
              </div>
            </Layout.Col>
          )
        })}
      </Header>

      {calendarRows && calendarRows.map((week, rowIndex) => (
        <Row key={`cal-r-${rowIndex}`}>
          {week.map(day => {
            return <Layout.Col key={`day-${day}`} size={12/7}>
              <Day 
                date={day}
                isSelected={day.toString() === selectedDate?.toString()}
                onSelection={handleSelection}
                today={today}
                isActiveMonth={day.getMonth() === activeMonth}
              />
            </Layout.Col>
          })}
        </Row>
      ))}
    </Container>
  )
}

export default Calendar;