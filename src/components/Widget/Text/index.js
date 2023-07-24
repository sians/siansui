import { Typography } from 'components';

const Text = ({ widget, parentId }) => {
  const { data } = widget;
  return data && data.map((paragraph, idx) => {
    return (
      <Typography.Body key={`w-${parentId}p-${idx}`}>
        {paragraph}
      </Typography.Body>
    )
  })
}

export default Text;