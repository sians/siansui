import React from 'react';
import { Typography } from 'components';
import theme from 'theme';

const Text = ({ widget, parentId }) => {
  const { data } = widget;
  return data && data.map((paragraph, idx) => {
    return (typeof paragraph === 'string') ? (
      <Typography.Body key={`w-${parentId}p-${idx}`} marginY={theme.margin}>
        {paragraph}
      </Typography.Body>
    ) : ( 
      React.isValidElement(paragraph) &&
        React.cloneElement(paragraph, { key: `w-${parentId}p-${idx}` })
    )
  })
}

export default Text;