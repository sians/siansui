import { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import useMediaQuery from 'hooks/useMediaQuery';
import useAppTheme from 'hooks/useAppTheme';
import { convertCase } from 'utils';

import SidebarPage from 'components/Pages/SidebarPage';
import { Layout, Typography, Card, Accordion } from 'components';

import ALL_PAGE_DATA from 'data/pageData';
import LINK_GROUPS from 'data/LINK_GROUPS';

const Index = () => {
  const { isMobile } = useMediaQuery();
  const { themeState } = useAppTheme();
  const theme = useTheme();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("page").scroll(0,0)
  }, [params?.name]);

  const handleCardClick = (componentName) => {
    navigate(`/components/${componentName}`);
  }
  

  const makeElements = (data) => {
    return data && data.map(elem => {
      const { title, description } = elem.cardData;
      const isGrid = themeState.isGridLayout;
      return (
        <Card 
          key={`card-${title}`}
          onClick={() => handleCardClick(elem.snakeComponentName)}
          cardType={`component`}
          layoutType={isGrid ? 'grid' : 'row'}
          title={title}
          data={{ description: description }}
          className={isGrid ? '' : 'rw-card'}
        />
      )
    })
  }

  const makeGrid = (gridElements) => { 
    return <Layout.Col 
      size={12} 
      padding={{pt: theme.margin, pb: theme.margin}}
      className='group-content' 
    >
      <Layout.Grid 
        elements={gridElements} 
        gutterSize={16} 
        colNum={isMobile ? 2 : 3}
      />
    </Layout.Col>
  }  

  const makeContent = (groupName) => {
    const data = LINK_GROUPS.components[groupName].map(key => {
      const snakeComponentName = convertCase('camel', 'snake', key.text);
      return {
        ...ALL_PAGE_DATA.components[snakeComponentName],
        snakeComponentName: snakeComponentName
      };
    })

    if (themeState.isGridLayout) {
      return makeGrid(makeElements(data));
    } else {
      return makeElements(data);
    }
  }  

  const accordionData = useMemo(() => {
    const data =  Object.keys(LINK_GROUPS.components).map((key, idx) => {
      return {
        id: `${idx+1}`,
        label: key,
        children: makeContent(key)
      }
    })

    return data;
  }, [themeState?.isGridLayout])

  return (
    <SidebarPage>
      <Typography.Heading 
          text='Components Overview'
          size={1}
        />
      <Layout.Row>
        {isMobile && (
          <Layout.Col 
            size={12}
            padding={{pt: theme.margin, pb: theme.margin}}
            className='group-content'
          >
            <Accordion 
              data={accordionData}
            />
          </Layout.Col>
        )}

        {!isMobile && Object.keys(LINK_GROUPS.components).map((groupName) => {
          return (
            <Layout.Col 
              size={12} 
              key={`grp-${groupName}`}
              className='group-content'
            >
              <Layout.Row padding={{pt: theme.margin, pb: (theme.margin/2)}}>
                <Typography.Heading size={4}>
                  {groupName} <Typography.Small>({LINK_GROUPS.components[groupName].length})</Typography.Small>
                </Typography.Heading>
              </Layout.Row>

              {makeContent(groupName)}

            </Layout.Col>
          )
        })}
      </Layout.Row>
    </SidebarPage>
  )
}

export default Index;