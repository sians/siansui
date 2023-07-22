import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useHover from 'hooks/useHover';

import { convertCase } from 'utils';

import { Icon, Layout, Typography } from 'components';
import { Container } from './styles';

import LINK_GROUPS from 'data/LINK_GROUPS';

import theme from 'theme';

const FooterNav = ({ }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [nextComponentStr, setNextComponentStr] = useState(null);
  const [prevComponentStr, setPrevComponentStr] = useState(null);

  const [leftRef, isLeftHovered] = useHover();
  const [rightRef, isRightHovered] = useHover();

  useEffect(() => {
    handleSetData()
  }, [params.name])

  const handleSetData = () => {
    if (params.name) {
      const ordered = makeComponentOrder(params.name);
      const pascalName = convertCase('snake', 'pascal', params.name);
      const currentIdx = ordered.indexOf(pascalName);

      if (currentIdx > 0) {
        setPrevComponentStr(ordered[currentIdx - 1]);
      }

      setNextComponentStr(ordered[currentIdx + 1]);
    }
  }
  const makeComponentOrder = () => {
    const ordered = [];
    Object.keys(LINK_GROUPS).forEach(key => {
      LINK_GROUPS[key].forEach(link => ordered.push(link.text));
    })
    
    return ordered;
  }

  const handleNavigation = (name) => {
    const snakeName = convertCase('camel', 'snake', name);
    console.log(snakeName);
    navigate(`/components/${snakeName}`)
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
              color={isLeftHovered 
                ? theme.colors.black
                : theme.colors.midGrey}
              maxWidth={14}
              className='nav-icon-left'
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
              color={isRightHovered 
                ? theme.colors.black
                : theme.colors.midGrey}

              maxWidth={14}
              className='nav-icon-right'
            />
          </Layout.Row>
        }        
      </Layout.Col>
    </Container>
  )
}

export default FooterNav;