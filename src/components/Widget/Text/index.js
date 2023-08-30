import React from 'react';
import { useTheme } from 'styled-components';
import { Typography } from 'components';

const Text = ({ widget, parentId }) => {
  const theme = useTheme();
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