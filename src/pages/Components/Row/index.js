import { Typography, Link } from 'components';

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
          {`Used with <Col> to help create flexible & responsive grid layouts.`}
        </Typography.Body> 
      </section>

      <section>
        <Typography.Heading 
          text='Props'
          size={3}
        />

        tablleee
      </section>      

      <section>
        <Typography.Heading 
          text='Snippet'
          size={3}
        />

        codddeezz
      </section>   
    </>
  )
}

export default Row;