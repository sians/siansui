import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import { camelToSnake } from 'utils';

import LINK_GROUPS from './LINK_GROUPS';

import { Link, Icon } from 'components';
import { Container, ItemGroup, ListItem } from './styles';

import theme from 'theme';

// TODO: refactor state logic to useSidebar hook?

const initialState = Object.keys(LINK_GROUPS).reduce((acc, curr) => {
  return {...acc, [curr]: false}
}, {});

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { ...state, [action.groupName]: !state[action.groupName]};
    default:
      throw new Error();
  }
}

const Sidebar = () => {
  const params = useParams();
  const [expandedState, dispatch] = useReducer(reducer, initialState);

  const toggleExpand = groupName => {
    dispatch({type: 'toggle', groupName});
  };
  
  useEffect(() => {
    console.log(expandedState)
  }, [expandedState])


  return (
    <Container>
      <ul>
        {Object.keys(LINK_GROUPS).map(groupName => {
          return (
            <ItemGroup 
              key={`link-grp-${groupName}`}
              className={`link-grp-${groupName}`}
              isExpanded={expandedState[groupName]}
              numItemsInGroup={LINK_GROUPS[groupName].length}
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
                {LINK_GROUPS[groupName].map(item => {
                  const formattedName = camelToSnake(item.text);
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