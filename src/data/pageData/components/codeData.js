import { Code, Link } from 'components';

const codeSnippets = {
  1: `
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
    padding: \`\${theme.margin / 5}px \${theme.margin / 2}px\`,
    fontSize: '0.8em',
    background: theme.colors.veryLightestGrey,
    border: \`1px solid \${theme.colors.grey}\`,
    borderRadius: theme.borderRadius / 2,
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
        <code className={\`language-\${language}\`}>
          {code?.trim()}
        </code>
      </pre>
    </>
  )
}

export default Code;
  `,
  2: `
{
  "plugins": [
    [
      "prismjs",
      {
        "languages": ["javascript", "css", "html"],
        "plugins": ["line-numbers", "show-language"],
        "css": true
      }
    ]
  ]
}  
  `,
  3: `
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
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "This Code component is built using the Prism.js library for syntax highlighting.",
          "There is both block and inline styling."
        ]
      }
    ]
  },
  whenToUse: {
    title: 'When To Use',
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "Use to syntactically mark up code, whether inline or in code blocks.",
          "Style consistently with your UI's guide for code elements."
        ]
      }
    ]
  },
  props: {
    title: 'Props',    
    widgets: [
      {
        widgetType: 'table',
        tableType: 'props',
        data: [
          { 
            property: 'code',
            description: 'String of the code to format.',
            propType: 'string',
            default: '',
          },
          { 
            property: 'language',
            description: 'The language of the code snippet.  Must be one of the languages listed in the .babelrc file.',
            propType: 'string',
            default: '',
          }, 
          { 
            property: 'plugins',
            description: '',
            propType: 'Array',
            default: '',
          }, 
          { 
            property: 'title',
            description: 'A title for the snippet, often the file name & location.',
            propType: 'string',
            default: '',
          }, 
          { 
            property: 'isInline',
            description: 'True if the code component is an inline snippet.  Defaults to block.',
            propType: 'boolean',
            default: 'false',
          }, 

        ]
      },
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[3],
            language: 'javascript',
            title: 'props in components/Code/index.js'            
          }
        ]
      }
    ]
  },
  setUp: {
    title: 'Set Up',
    widgets: [
      {
        widgetType: 'list',
        listType: 'ul',
        data: [
          { text: `Install prism: `, subtext: <Code code={'yarn add prismjs'} isInline/>},
          {
            text: "You also need to add babel-plugin-prismjs as a dev dependency:",
            subtext: <Code code={'yarn add babel-plugin-prismjs --dev'} isInline/>
          },
          "Create your own custom theme, with a prism.css file in the Code component folder.",
          {
            text: "Some templates to check out:",
            subtext: <Link isExternal text={"https://github.com/PrismJS/prism-themes"} url={"https://github.com/PrismJS/prism-themes"}/>,
          },
          { 
            text: "Then add some setup for prism to a .babelrc file in the root level of your project:",
            subtext: <Code code={codeSnippets[2]} title='.babelrc'/>
          },
          
          
        ]
      }
    ]
  },
  snippets: {
    title: 'Snippets',
    widgets: [
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[1],
            language: 'javascript',
            title: 'components/Code/index.js'
          },
        ]
      }
    ],
  },
  toDo: {
    title: 'To Do',
    widgets: [
      {
        widgetType: 'list',
        listType: 'ul',
        data: [
          "",
        ]
      }
    ]
  }
}

const PAGE_DATA = {
  title: "Code",
  sections: sections,
  cardData: {
    title: 'Code',
    description: 'Style with code blocks or inline.'
  }   

}

export default PAGE_DATA;

