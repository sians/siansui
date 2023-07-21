import { Typography, Link, Tables, Code } from 'components';

import COPY from './COPY';
import PROPS from './PROPS';

const Col = () => {
  return (
    <>
      <header>
        <Typography.Heading 
          text='Col'
          size={1}
        />

        <Typography.Body>
          {COPY.description}
        </Typography.Body>
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

export default Col;