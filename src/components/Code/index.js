import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Prism from 'prismjs';
import styled from 'styled-components';

import { Typography } from 'components';
import './prism.css';

const Inline = styled.code(props => {
  const { theme } = props;
  return {
    margin: '0px 1px',
    padding: `${theme.margin / 5}px ${theme.margin / 2}px`,
    fontSize: '0.8em',
    background: theme.colors.grey.lightest,
    border: `1px solid ${theme.colors.grey.main}`,
    borderRadius: theme.borderRadius.main / 2,
  }
})

const Code = ({ code, language, plugins, title, isInline }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return isInline ? (
    <Inline>
      {code}
    </Inline>
  ) : (
    <>
      {title && <Typography.Small isItalic>{title}</Typography.Small>}
      <pre className={!plugins ? "" : plugins.join(" ")}>
        <code className={`language-${language}`}>
          {code?.trim()}
        </code>
      </pre>
    </>
  )
}

export default Code;

Code.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string,
  plugins: PropTypes.arrayOf([PropTypes.string]),
  title: PropTypes.string,
  isInline: PropTypes.bool
}

Code.defaultProps = {
  isInline: false
}