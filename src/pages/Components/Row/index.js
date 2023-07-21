import { Typography, Link, Tables, Code } from 'components';

import PROPS from './PROPS';
import CODE from './CODE';

const Row = () => {
  return (
    <>
      <header>
        <Typography.Heading 
          text='Row'
          size={1}
        />

        <Typography.Body>
          A row layout <Link url='/components' text='component' />.
        </Typography.Body>
          
      </header>

      <section>
        <Typography.Heading 
          text='When to Use'
          size={3}
        />

        <Typography.Body>
          Used with <Link url='/components/col' text={`<Col>`} /> to help create flexible & responsive grid layouts.
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
        <Code code={CODE} language='javascript'/>
      </section>   
    </>
  )
}

export default Row;