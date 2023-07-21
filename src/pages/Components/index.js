import { useParams } from 'react-router-dom';

import Row from './Row';
import Col from './Col';
import Heading from './Heading';

import { Nav, Sidebar } from 'components';
import { Page, Content } from './styles';

const MAP = {
  row: <Row />,
  col: <Col />,
  heading: <Heading />,
}

const Index = () => {
  const params = useParams();

  return (
    <>
      <Nav />

      <Page>
        <Sidebar />
        
        {params.name ? (
          <Content>
            {MAP[params.name]}
          </Content>
        ) : (
          <>

            indexy
          </>
        )}
      </Page>
    </>
  )
}

export default Index;