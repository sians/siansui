import { useEffect, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { convertCase } from 'utils';

import SidebarPage from 'components/Pages/SidebarPage';
import { Typography, FooterNav, Widget } from 'components';

import ALL_PAGE_DATA from 'data/pageData';

const HookDetail = () => {
  const params = useParams();
  const location = useLocation();
  const data = useMemo(() => {
    if (location?.pathname) {
      const [,pageType, name] = location.pathname.split('/');
      return ALL_PAGE_DATA[pageType][name]
    }
  }, [location?.pathname])

  useEffect(() => {
    document.getElementById("page")?.scroll(0,0)
  }, [params?.name]);

  return (
    <SidebarPage>
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
    </SidebarPage>
  )
}

export default HookDetail;