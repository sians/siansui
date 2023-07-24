import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import useHover from 'hooks/useHover';

import { convertCase } from 'utils';

import { Icon, Layout, Typography } from 'components';
import { Container } from './styles';

import LINK_GROUPS from 'data/LINK_GROUPS';

import theme from 'theme';

const FooterNav = ({ }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const pageName = useMemo(() => location?.pathname?.split('/')?.[1], [location?.pathname])
  const [nextComponentStr, setNextComponentStr] = useState(null);
  const [prevComponentStr, setPrevComponentStr] = useState(null);

  const [leftRef, isLeftHovered] = useHover();
  const [rightRef, isRightHovered] = useHover();

  useEffect(() => {
    handleSetData()
  }, [params.name])

  const handleSetData = () => {
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
  }
  const makeComponentOrder = (pageType) => {
    const ordered = [];
    Object.keys(LINK_GROUPS[pageType]).forEach(key => {
      LINK_GROUPS[pageType]?.[key].forEach(link => ordered.push(link.text));
    })
    
    return ordered;
  }

  const handleNavigation = (name) => {
    if (pageName) {
      const snakeName = convertCase('camel', 'snake', name);
      navigate(`/${pageName}/${snakeName}`)
    }
  }

  return (
    <Container>
      <Layout.Col 
        size={6}
        paddingX={theme.margin}
        className='col'
        ref={leftRef}
        onClick={() => prevComponentStr && handleNavigation(prevComponentStr)}
      >
        {prevComponentStr &&        
          <Layout.Row align='center'>
            <Icon 
              name='chevron-down' 
              rotateBy={90}
              isHovered={isLeftHovered}
              fill={{
                base: theme.colors.midGrey,
                hover: theme.colors.black
              }}
              size={14}
              className='icon nav-icon-left'
            />
            <Typography.Body>{prevComponentStr}</Typography.Body>
          </Layout.Row>
        }
      </Layout.Col>

      <Layout.Col 
        size={6}
        className='col'
        paddingX={theme.margin}
        ref={rightRef}
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
                base: theme.colors.midGrey,
                hover: theme.colors.black
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