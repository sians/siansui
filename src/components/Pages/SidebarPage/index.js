import { Sidebar, FloatingMenu } from 'components';

import { Page, Content } from './styles';

const SidebarPage = ({ children }) => {
  return (
    <>
      <Page id='page'>
        <Sidebar
        />

        <Content>
          {children}
        </Content>  
      </Page>
      
      <FloatingMenu />      
    </>
  )
}

export default SidebarPage;