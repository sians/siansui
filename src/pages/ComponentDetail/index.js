import { useEffect, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { convertCase } from 'utils';

import { Typography, Nav, Sidebar, FooterNav, Widget, Button } from 'components';

import { Page, Content } from './styles';

import ALL_PAGE_DATA from 'data/pageData';

const ComponentDetail = () => {
  const params = useParams();
  const location = useLocation();
  const data = useMemo(() => {
    
    if (location?.pathname) {
      const [,pageType, name] = location.pathname.split('/');
      return ALL_PAGE_DATA[pageType]?.[convertCase('snake', 'camel', name)]
    }
  }, [location?.pathname])

  useEffect(() => {
    document.getElementById("page")?.scroll(0,0)
  }, [params?.name]);

  const handleFABClick = () => {
    console.log('clickky whha')
  }

  return (
    <>
      <Nav />

      <Page id='page'>
        <Sidebar />
        <Content>
          <div className='floating-action-btn'>
            <Button 
                variant='floatingAction'
                iconName='bars'
                onClick={() => handleFABClick()}
              />
          </div>

          {data && params.name && 
            <>
              <Typography.Heading 
                text={data.title}
                size={1}
              />

              {data.sections && Object.keys(data.sections).map((sectionName, idx) => {
                const section = data.sections[sectionName];
                console.log(section, 'seccc')
                return (
                  <section key={`${section.title}-section`}>
                    {section.title && <Typography.Heading size={3} >{section.title}</Typography.Heading>}                    

                    {section.widgets.map((widget, widgetIdx) => {
                      return (
                        <Widget 
                          widget={widget}
                          widgetIdx={`${idx}-${widgetIdx}`}
                        />  
                      )
                    })}
                  </section>          
                )
              })}
            </>
          }

          <FooterNav />
        </Content>
      </Page>

    </>
  )
}

export default ComponentDetail;