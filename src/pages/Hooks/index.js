import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import useMediaQuery from 'hooks/useMediaQuery';
import { convertCase } from 'utils';

import SidebarPage from 'components/Pages/SidebarPage';
import { Typography, Card, Layout } from 'components';

import ALL_PAGE_DATA from 'data/pageData';
import LINK_GROUPS from 'data/LINK_GROUPS';

const Index = () => {
  const { isMobile } = useMediaQuery();
  const theme = useTheme();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("page").scroll(0,0)
  }, [params?.name]);

  const handleCardClick = (hookName) => {
    navigate(`/hooks/${hookName}`);
  }

  const makeGrideElements = (groupName) => { 
    return LINK_GROUPS.hooks[groupName].map(key => {
      const pageData = ALL_PAGE_DATA.hooks[key?.text];
      const snakeHookName = convertCase('camel', 'snake', key.text)
      
      return pageData && (
        <Card 
          onClick={() => handleCardClick(snakeHookName)}
          cardType='hook' 
          title={pageData?.cardData?.hookName}
          data={{
            description: pageData?.cardData?.description
          }}
        />
      )                    
  })};
  

  return (
    <SidebarPage>
      <Typography.Heading 
        text='Hooks Overview'
        size={1}
      />

      <Layout.Row>
        {Object.keys(LINK_GROUPS.hooks).map((groupName) => {
          const gridElements = makeGrideElements(groupName);
          return (
            <Layout.Col size={12} key={`grp-${groupName}`}>
              <Layout.Row padding={{pt: theme.margin, pb: (theme.margin/2)}}>
                <Typography.Heading size={4}>
                  {groupName}
                </Typography.Heading>
              </Layout.Row>

              <Layout.Grid 
                elements={gridElements} 
                gutterSize={16} 
                colNum={isMobile ? 1 : 2}
              />

            </Layout.Col>
          )
        })}
      </Layout.Row>
    </SidebarPage>
  )
}

export default Index;