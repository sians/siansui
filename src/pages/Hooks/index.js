import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Nav, Sidebar, FooterNav } from 'components';
import { Page, Content } from './styles';

const MAP = {
  useHover: '',
  useFocus: '',
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

            hooky
          </>
        )}
      </Page>
    </>
  )
}

export default Index;