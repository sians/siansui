import { useEffect } from 'react';
import Prism from 'prismjs';
import styled from 'styled-components';
import './prism.css';

const Title = styled.h6(props => {
  return {
    color: props.theme.midGrey,
    fontSize: 14,
    margin: 0,
    fontStyle: 'italic',
    fontWeight: 400,
    letterSpacing: 0.5
  }
})

const Code = ({ code, language, plugins, title }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      {title && <Title>{title}</Title>}
      <pre className={!plugins ? "" : plugins.join(" ")}>
        <code className={`language-${language}`}>
          {code?.trim()}
        </code>
      </pre>
    </>
  )
}

export default Code;