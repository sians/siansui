import { useParams, useNavigate } from 'react-router-dom';

import Row from './Row';

import { Nav } from 'components';

const MAP = {
  row: <Row />,
}

const Index = () => {
  const params = useParams();

  return (
    <>
      {params.name ? (
        MAP[params.name]
      ) : (
        <>
          <Nav />
          indexy
        </>
      )}
    </>
  )
}

export default Index;