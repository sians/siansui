import { Typography, Link, Tables, Code } from 'components';

import COPY from './COPY';
import PROPS from './PROPS';

const Heading = () => {
  return (
    <>
      <header>
        <Typography.Heading 
          text='Heading'
          size={1}
        />

        <Typography.Body>
          {COPY.description}
        </Typography.Body>

        <ul>
          <li>{COPY.htmlTags.h1}</li>
          <li>{COPY.htmlTags.h2}</li>
          <li>{COPY.htmlTags.h3}</li>
          <li>{COPY.htmlTags.h4}</li>
          <li>{COPY.htmlTags.h5}</li>
          <li>{COPY.htmlTags.h6}</li>
        </ul>
          
        {COPY.size.map(str => {
          return (
            <Typography.Body>
              {str}
            </Typography.Body>
          )
        })}

      </header>

      <section>
        <Typography.Heading 
          text='When to Use'
          size={3}
        />

        <Typography.Body>
          {COPY.whenToUse}
        </Typography.Body> 
      </section>

      <section>
        <Typography.Heading 
          text='Props'
          size={3}
        />

        <Tables.PropTable data={PROPS}/>
      </section>      

      <section>
        <Typography.Heading 
          text='Snippet'
          size={3}
        />
        <Code code={COPY.code} language='javascript'/>
      </section>  
    </>
  )
}

export default Heading;