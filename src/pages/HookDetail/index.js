import { useEffect, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { convertCase } from 'utils';

import { Typography, Sidebar, FooterNav, Button, Widget } from 'components';

import { Page, Content } from './styles';

import ALL_PAGE_DATA from 'data/pageData';

const HookDetail = () => {
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
    console.log('FLOAT A B')
  }


  return (
    <>
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

              {Object.keys(data.sections).map((sectionName, idx) => {
                const section = data.sections[sectionName];
                return (
                  // section TITLE
                  <section key={`${section.title}-section`}>
                    {section.title && 
                      <Typography.Heading 
                        text={section.title}
                        size={3}
                      />
                    }

                    {section.widgets.map((widget, widgetIdx) => {
                      return (
                        <Widget 
                          key={`${idx}-widg-${widgetIdx}`}
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

export default HookDetail;