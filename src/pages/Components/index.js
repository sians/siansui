import { useParams, useNavigate } from 'react-router-dom';

import Row from './Row';

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
          indexy
        </>
      )}
    </>
  )
}

export default Index;