import { Code as CodeComponent } from 'components';

const Code = ({ widget, parentId }) => {
  const { data } = widget;
  return data && data.map((codeBlock, idx) => {
    const { str, language, title } = codeBlock;
    return (
    <CodeComponent 
      key={`w-${parentId}-code-${idx}`}
      code={str} 
      language={language}
      title={title}
    />
  )})
}

export default Code;


