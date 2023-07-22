import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Row from './Row';
import Col from './Col';
import Heading from './Heading';

import { Nav, Sidebar, FooterNav } from 'components';
import { Page, Content } from './styles';

const MAP = {
  row: <Row />,
  col: <Col />,
  heading: <Heading />,
}

const Index = () => {
  const params = useParams();

  useEffect(() => {
    document.getElementById("page").scroll(0,0)
  }, [params?.name]);

  return (
    <>
      <Nav />

      <Page id='page'>
        <Sidebar />
        
        {params.name ? (
          <Content>
            {MAP[params.name]}

            <FooterNav />
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