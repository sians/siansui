import PropTypes from 'prop-types';
import { useEffect, useReducer, useState } from 'react';

import Item from './Item';
import { Container } from './styles';

const initializeState = (data) => {
  return Object.keys(data).reduce((acc, curr) => {
    return {
      ...acc, 
      [curr]: false
    }
  }, {});
};
function reducer(state, action) {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        [action.id]: true
      }
    case 'toggle':
      return { 
        ...state, 
        [action.id]: !state[action.id]
      };
    // case 'closeAll': 
    //   const closeState = { ...state }
    //   Object.keys(state).forEach(k => closeState[k] = false)
    //   return closeState;
    // case 'expandAll': 
    //   const openState = { ...state }
    //   Object.keys(state).forEach(k => openState[k] = true)
    //   return openState;
    default:
      throw new Error();
  }
}

const Accordion = ({ 
  data,
  showChevron,
  labelSize,
}) => {
  const [expandedState, dispatch] = useReducer(
    reducer, 
    initializeState(data)
  );
  const [initArray, setInitArray] = useState([]);

  const initExpanded = id => {
    dispatch({type: 'init', id})
  }
  const toggleExpand = id => {
    dispatch({type: 'toggle', id});
  };
  // const closeAll = () => dispatch({type: 'closeAll'});
  // const expandeAll = () => dispatch({type: 'expandAll'});
  useEffect(() => {
    const initArray = [];
    data.forEach(item => {
      return item.openOnInit && initArray.push(item.id)
    })

    setInitArray(initArray)
  }, [data])

  useEffect(() => {
    console.log(initArray)
    initArray.forEach(id => initExpanded(id));
  }, [initArray])

  return (
    <>
      <Container>
        {data && data.map(group => {
          return (
            <Item 
              key={`acc-grp-${group.id}`}
              item={{
                ...group,
                labelSize: labelSize,
                showChevron: showChevron
              }}
              isActive={expandedState[group.id]}
              toggleActive={() => toggleExpand(group.id)}
            />
          )
        })}
      </Container>
    </>
  )
}

export default Accordion;

Accordion.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.element,
    openOnInit: PropTypes.bool
  })).isRequired,
  showChevron: PropTypes.bool,
  labelSize: PropTypes.oneOf([
    1,2,3,4,5,6,7
  ]),
}

Accordion.defaultProps = {
  showChevron: true,
  labelSize: 6,
}