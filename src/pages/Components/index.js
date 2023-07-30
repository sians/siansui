import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { convertCase } from 'utils';

import { Nav, Sidebar, Layout, Typography, Card } from 'components';
import { Page, Content } from './styles';

import ALL_PAGE_DATA from 'data/pageData';
import LINK_GROUPS from 'data/LINK_GROUPS';

const Index = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("page").scroll(0,0)
  }, [params?.name]);

  const handleCardClick = (componentName) => {
    navigate(`/components/${componentName}`);
  }
  
  const makeGrideElements = (groupName) => { 
    return LINK_GROUPS.components[groupName].map(key => {
      const snakeComponentName = convertCase('camel', 'snake', key.text);
      const pageData = ALL_PAGE_DATA.components[snakeComponentName];
      
      return pageData && (
        <Card 
          onClick={() => handleCardClick(snakeComponentName)}
          cardType='component' 
          title={pageData?.cardData?.title}
          data={{
            description: pageData?.cardData?.description
          }}
        />
      )                    
  })};  

  return (
    <>
      <Nav />

      <Page id='page'>
        <Sidebar />
        <Content>
          <Typography.Heading 
              text='Components Overview'
              size={99}
            />                   
          <Layout.Row>

            {Object.keys(LINK_GROUPS.components).map((groupName) => {
              const gridElements = makeGrideElements(groupName);
              return (
                <Layout.Col 
                  size={12} 
                  key={`grp-${groupName}`}
                  className='group'
                >
                  <Layout.Row>
                    <Typography.Heading size={4}>
                      {groupName}
                    </Typography.Heading>
                  </Layout.Row>

                  <Layout.Grid 
                    elements={gridElements} 
                    gutterSize={16} 
                    colNum={3}
                  />

                </Layout.Col>
              )
            })}
          </Layout.Row>

        </Content>
      </Page>
    </>
  )
}

export default Index;