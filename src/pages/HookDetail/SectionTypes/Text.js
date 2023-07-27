import { Typography } from 'components';

const Text = ({ data, sectionIdx }) => {
  return (
    <>
      {data && data.map((str, textIdx) => {
        return (
          <Typography.Body 
            key={`${sectionIdx}-text-${textIdx}`}
          >
            {str}
          </Typography.Body>)
      })} 
    </>
  )
}

export default Text;



