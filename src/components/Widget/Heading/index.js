import React from 'react';
import { useTheme } from 'styled-components';

import { Typography } from 'components';

const Heading = ({ widget, parentId }) => {
  const theme = useTheme();
  const { data } = widget;
  const { id, text, size, textAlign } = data;

  return (typeof text === 'string') ? (
    <Typography.Heading 
      key={`w-${parentId}h-${id}`} 
      marginY={theme.margin}
      size={size}
      textAlign={textAlign}
    >
      {text}
    </Typography.Heading>
  ) : ( 
    React.isValidElement(text) &&
      React.cloneElement(text, { key: `w-${parentId}h-${id}` })
  )
}

export default Heading;