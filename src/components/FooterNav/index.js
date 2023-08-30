import { useEffect, useState, useMemo, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';

import useHover from 'hooks/useHover';

import { convertCase } from 'utils';

import { Icon, Layout, Typography } from 'components';
import { Container } from './styles';

import LINK_GROUPS from 'data/LINK_GROUPS';

const FooterNav = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const pageName = useMemo(() => location?.pathname?.split('/')?.[1], [location?.pathname])
  const [nextComponentStr, setNextComponentStr] = useState(null);
  const [prevComponentStr, setPrevComponentStr] = useState(null);

  const [leftRef, isLeftHovered] = useHover();
  const [rightRef, isRightHovered] = useHover();

  const makeComponentOrder = useCallback((pageType) => {
    const ordered = [];
    Object.keys(LINK_GROUPS[pageType]).forEach(key => {
      LINK_GROUPS[pageType]?.[key].forEach(link => ordered.push(link.text));
    })
    
    return ordered;
  }, [])

  const handleSetData = useCallback(() => {
    const pageType = location?.pathname?.split('/')?.[1];
    const targetStrType = { hooks: 'camel', components: 'pascal'};

    if (params.name && pageType) {
      const ordered = makeComponentOrder(pageType);
      const pascalName = convertCase('snake', targetStrType[pageType], params.name);
      const currentIdx = ordered.indexOf(pascalName);

      if (currentIdx > 0) {
        setPrevComponentStr(ordered[currentIdx - 1]);
      }

      setNextComponentStr(ordered[currentIdx + 1]);
    }
  }, [location.pathname, params.name, makeComponentOrder])  

  const handleNavigation = useCallback((name) => {
    if (pageName) {
      const snakeName = convertCase('camel', 'snake', name);
      navigate(`/${pageName}/${snakeName}`)
    }
  }, [pageName, navigate])

  useEffect(() => {
    handleSetData()
  }, [params.name, handleSetData])


  return (
    <Container>
      <Layout.Col 
        innerRef={leftRef}
        size={6}
        padding={{pl: theme.margin, pr: theme.margin, pt: theme.margin, pb: theme.margin}}
        className='col'
        justify='center'
        onClick={() => prevComponentStr && handleNavigation(prevComponentStr)}
      >
        {prevComponentStr &&        
          <Layout.Row align='center'>
            <Icon 
              name='chevron-down' 
              rotateBy={90}
              isHovered={isLeftHovered}
              fill={{
                base: theme.colors.grey.dark,
                hover: theme.colors.fg
              }}
              size={14}
              className='icon nav-icon-left'
            />
            <Typography.Body>{prevComponentStr}</Typography.Body>
          </Layout.Row>
        }
      </Layout.Col>

      <Layout.Col 
        innerRef={rightRef}
        size={6}
        className='col'
        padding={{pl: theme.margin, pr: theme.margin, pt: theme.margin, pb: theme.margin}}
        justify='center'
        onClick={() => nextComponentStr && handleNavigation(nextComponentStr)}
      >
        {nextComponentStr &&    
          <Layout.Row justify='flex-end' align='center'>
            <Typography.Body>{nextComponentStr}</Typography.Body>

            <Icon 
              name='chevron-down' 
              rotateBy={-90}
              isHovered={isRightHovered}
              fill={{
                base: theme.colors.grey.dark,
                hover: theme.colors.fg
              }}
              size={14}
              className='icon nav-icon-right'
            />
          </Layout.Row>
        }
      </Layout.Col>
    </Container>
  )
}

export default FooterNav;