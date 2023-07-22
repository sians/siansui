import { Code } from 'components';

const Snippet = ({ data, sectionIdx }) => {
  return (
    <>
      {data && data.map((codeObj, codeIdx) => {
        const {str, language, title} = codeObj;
        return (
          <Code 
            key={`${sectionIdx}-snip-${codeIdx}`}
            code={str} 
            language={language} 
            title={title} 
          />
        )
      })} 
    </>
  )
}

export default Snippet;



