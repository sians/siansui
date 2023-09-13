import { useState, useMemo } from 'react';
import { useTheme } from 'styled-components';

import { Icon, Typography } from 'components';

import { Title, Children, VerticalLine } from './styles';

const Level = ({ 
  id, 
  name, 
  children, 
  levelIndex, 
  setLocation, 
  activeLocation 
}) => {
  const theme = useTheme();
  
  const [isExpanded, setIsExpanded] = useState(true);
  const isRoot = useMemo(() => name==='root', [name]);

  const handleToggleExpanded = () => {
    if (!children) setLocation(id)
    setIsExpanded(prev => !prev)
  };

  return (
    <>
      <Title onClick={handleToggleExpanded}>
        {children &&
          <Icon 
            name={name==='root' ? 'magic' : 'chevron-down'}
            rotateBy={isExpanded ? 0 : -90}
            size={12}
            className='title-chev'
            fill={{
              base: theme.colors.fg
            }}
          />        
        }

        <Typography.Heading size={7}>
          {name}
        </Typography.Heading>

        {!isRoot && [...Array(levelIndex-1)].map((_, i) => (
          <VerticalLine left={i}/>
        ))}
        
      </Title>

      {isExpanded && children && children.map(item => {
        return (
          <Children 
            levelIndex={levelIndex}
          >
            <Level 
              id={`${id}.${item.name}`}
              levelIndex={levelIndex + 1}
              children={item.children} 
              name={item.name} 
              setLocation={setLocation}
              activeLocation={activeLocation}
            />
          </Children>
        )
      })}
    </>
  )
}

export default Level;