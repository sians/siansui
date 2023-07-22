import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Nav, Sidebar } from 'components';
import { Page, Content } from './styles';

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

        <Content>
          index
        </Content>

      </Page>
    </>
  )
}

export default Index;