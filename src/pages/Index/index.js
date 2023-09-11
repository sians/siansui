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

const Index = ({ pageName }) => {
  const { isMobile } = useMediaQuery();
  const { themeState } = useAppTheme();
  const theme = useTheme();
  const params = useParams();
  const navigate = useNavigate();

  const pageGroups = useMemo(() => LINK_GROUPS[pageName], [pageName]);
  const pageData = useMemo(() => ALL_PAGE_DATA[pageName], [pageName]);

  useEffect(() => {
    document.getElementById("page").scroll(0,0)
  }, [params?.name]);

  const handleCardClick = (name) => {
    navigate(`/${pageName}/${name}`);
  }
  

  const makeElements = (data) => {
    return data && data.map(elem => {
      if (elem?.cardData) {
        const { title, description } = elem?.cardData;
        const isGrid = themeState.isGridLayout;
        return (
          <Card 
            key={`card-${title}`}
            onClick={() => handleCardClick(elem.snakeName)}
            cardType={`component`}
            layoutType={isGrid ? 'grid' : 'row'}
            title={title}
            data={{ description: description }}
            className={isGrid ? '' : 'rw-card'}
          />
        )
      }
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
    const data = pageGroups[groupName].map(key => {      
      const snakeName = convertCase('camel', 'snake', key.text);
      return {
        ...pageData[snakeName],
        snakeName: snakeName
      };
    })

    if (themeState.isGridLayout) {
      return makeGrid(makeElements(data));
    } else {
      return makeElements(data);
    }
  }  

  const accordionData = useMemo(() => {
    const data =  Object.keys(pageGroups).map((key, idx) => {
      return {
        id: `${idx+1}`,
        label: key,
        children: makeContent(key)
      }
    })

    return data;
  }, [themeState?.isGridLayout, pageGroups])

  return (
    <SidebarPage>
      <Typography.Heading 
          text={`${pageName.charAt(0).toUpperCase() + pageName.slice(1)} Overview`}
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

        {!isMobile && Object.keys(pageGroups).map((groupName) => {
          return (
            <Layout.Col 
              size={12} 
              key={`grp-${groupName}`}
              className='group-content'
            >
              <Layout.Row padding={{pt: theme.margin, pb: (theme.margin/2)}}>
                <Typography.Heading size={4}>
                  {groupName} <Typography.Small>({pageGroups[groupName].length})</Typography.Small>
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