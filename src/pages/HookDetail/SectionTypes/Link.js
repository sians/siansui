import { Link as LinkComponent } from 'components';

const Link = ({ data, sectionIdx }) => {
  return (
    <>
      <ul>
        {data && data?.map((link, linkIdx) => {
          const { url, text } = link;
          return (
            <LinkComponent 
              key={`${sectionIdx}-link-${linkIdx}`}
              url={url}
              text={text}
            />
          )
        })}
      </ul>    
    </>
  )
}

export default Link;