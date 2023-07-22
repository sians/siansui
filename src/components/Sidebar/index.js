import { useEffect, useReducer, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { convertCase } from 'utils';

import LINK_GROUPS from 'data/LINK_GROUPS';

import { Link, Icon } from 'components';
import { Container, ItemGroup, ListItem } from './styles';

import theme from 'theme';

// TODO: refactor state logic to useSidebar hook?

const initializeState = (pageType) => {
  return Object.keys(LINK_GROUPS[pageType]).reduce((acc, curr) => {
    return {...acc, [curr]: false}
  }, {});
};
function reducer(state, action) {
  switch (action.type) {
    case 'init': 
      return {
        ...action.initialState,
        [action.groupName]: true
      }    
    case 'toggle':
      return { 
        ...state, 
        [action.groupName]: !state[action.groupName]
      };
    default:
      throw new Error();
  }
}

const Sidebar = () => {
  const params = useParams();
  const location = useLocation();
  const [expandedState, dispatch] = useReducer(reducer, initializeState(location?.pathname?.split('/')[1]));
  const pageName = useMemo(() => location?.pathname?.split('/')?.[1], [location?.pathname]);

  const toggleExpand = groupName => {
    dispatch({type: 'toggle', groupName});
  };
  const initExpanded = groupName => {
    dispatch({type: 'init', groupName})
  }
  
  // Expand Group with active components on init
  const setCurrentGroup = () => {
    const {pathname} = location;
  
    if (!pathname) return;
  
    const [, pageName, target] = pathname.split('/');

    if (pageName && target) {
      const targetStrTypes = { hooks: 'camel', components: 'pascal'};
      const key = Object.keys(LINK_GROUPS[pageName]).find(key => {
        const formattedTarget = convertCase('snake', targetStrTypes[pageName], target)
        return LINK_GROUPS[pageName]?.[key].some(({text}) => text === formattedTarget)
      });
  
      if (key) initExpanded(key);
    }
  }

  useEffect(() => {
    setCurrentGroup()
  }, [location?.pathname])

  return (
    <Container>
      <ul>
        {Object.keys(LINK_GROUPS[pageName]).map(groupName => {
          return (
            <ItemGroup 
              key={`link-grp-${groupName}`}
              className={`link-grp-${groupName}`}
              isExpanded={expandedState[groupName]}
              numItemsInGroup={LINK_GROUPS[pageName]?.[groupName].length}
            >
              <h4 onClick={() => toggleExpand(groupName)}>
                {groupName}

                <Icon 
                  name='chevron-down'
                  color={theme.colors.midGrey}
                  maxWidth={14}
                  rotateBy={expandedState[groupName] && '180'}
                />
              </h4>

              <ul>
                {LINK_GROUPS[pageName]?.[groupName].map(item => {
                  const formattedName = convertCase('camel', 'snake', item.text);
                  return (
                    <ListItem 
                      key={`sb-link-${formattedName}`}
                      isActive={params?.name === formattedName}
                    >
                      <Link 
                        url={item.url}
                        text={item.text}
                        variant='sidebar'
                      />
                    </ListItem>
                  )
                })}
              </ul>
            </ItemGroup>
          )
        })}
      </ul>
    </Container>
  )
}

export default Sidebar;