import { Code as CodeComponent } from 'components';

const Code = ({ widget }) => {
  const { data } = widget;
  return data && data.map(codeBlock => {
    const { str, language, title } = codeBlock;
    return (
    <CodeComponent 
      code={str} 
      language={language}
      title={title}
    />
  )})
}

export default Code;


