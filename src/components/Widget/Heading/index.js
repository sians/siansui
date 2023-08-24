import React from 'react';
import { Typography } from 'components';
import theme from 'theme';

const Heading = ({ widget, parentId }) => {
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