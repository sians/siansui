import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import useMediaQuery from 'hooks/useMediaQuery';
import { convertCase } from 'utils';

import SidebarPage from 'components/Pages/SidebarPage';
import { Layout, Typography, Card, Accordion } from 'components';

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

  const makeGrid = (gridElements) => {
    return <Layout.Col size={12} padding={{pt: theme.margin, pb: theme.margin}}>
          <Layout.Grid 
          elements={gridElements} 
          gutterSize={16} 
          colNum={isMobile ? 2 : 3}
        />    
      </Layout.Col>
  }

  const makeAccordionData = () => {
    const data =  Object.keys(LINK_GROUPS.components).map((key, idx) => {
      const gridElements = makeGrideElements(key);
      return {
        id: `${idx+1}`,
        label: key,
        children: makeGrid(gridElements)
      }
    })
    return data;
  }

  return (
    <SidebarPage>
      <Typography.Heading 
          text='Components Overview'
          size={1}
        />
      <Layout.Row>
        {isMobile && (
          <Layout.Col size={12}>
            <Accordion 
              data={makeAccordionData()}
            />
          </Layout.Col>
        )}

        {!isMobile && Object.keys(LINK_GROUPS.components).map((groupName) => {
          const gridElements = makeGrideElements(groupName);
          return (
            <Layout.Col 
              size={12} 
              key={`grp-${groupName}`}
              className='group'
            >
              <Layout.Row padding={{pt: theme.margin, pb: (theme.margin/2)}}>
                <Typography.Heading size={4}>
                  {groupName}
                </Typography.Heading>
              </Layout.Row>

              {makeGrid(gridElements)}

            </Layout.Col>
          )
        })}
      </Layout.Row>
    </SidebarPage>
  )
}

export default Index;