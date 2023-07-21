import { useEffect } from 'react';
import Prism from 'prismjs';
import './prism.css';

const Code = ({ code, language, plugins }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className={!plugins ? "" : plugins.join(" ")}>
      <code className={`language-${language}`}>
        {code?.trim()}
      </code>
    </pre>
  )
}

export default Code;