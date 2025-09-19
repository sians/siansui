import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Container } from './styles';

import { Icon, Typography } from 'components';

const Rate = ({
  value = 3.5,
  numStars = 5,
  showText = true,
  isReadOnly = false,
  onChange
}) => {
  const theme = useTheme();
  const stars = Array.from({ length: numStars }, (_, i) => i);

    

  return (
    <Container isClickable={!isReadOnly}>
      <div className='stars'>
        {stars && stars.map(star => {
          const isHalf = star+(0.5)===value;
          return (
            <Icon 
              key={`star-${star}`}
              className='rating-star'
              name={isHalf 
                ? 'star-half-full' 
                : star < value ? 'star' : 'star-o'}
              fill={{ base: theme.colors.main.base}}
            />
          )
        })}
      </div>
      {showText && (
        <Typography.Small>
          {value}
        </Typography.Small>
      )}
    </Container>
  )
}

export default Rate;