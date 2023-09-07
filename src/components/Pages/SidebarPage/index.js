import useMediaQuery from 'hooks/useMediaQuery';

import { Sidebar, FloatingMenu } from 'components';

import { Page, Content } from './styles';

const SidebarPage = ({ children }) => {
  const { isMobile } = useMediaQuery();
  return (
    <>
      <Page id='page'>
        {!isMobile && <Sidebar/>}

        <Content isMobile={isMobile}>
          {children}
        </Content>  
      </Page>
      
      <FloatingMenu />      
    </>
  )
}

export default SidebarPage;