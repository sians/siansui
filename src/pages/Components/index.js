import { useParams, useNavigate } from 'react-router-dom';

import Row from './Row';

import { Nav, Sidebar } from 'components';
import { Page } from './styles';

const MAP = {
  row: <Row />,
}

const Index = () => {
  const params = useParams();

  return (
    <>
      <Nav />

      <Page>
        <Sidebar />
        
        {params.name ? (
          MAP[params.name]
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