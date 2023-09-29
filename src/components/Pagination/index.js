import PropTypes from 'prop-types';
import { useState, useMemo, useEffect } from 'react';

import { Typography } from 'components';
import Chevron from './Chevron';

import { Container, Pill } from './styles';

const Pagination = ({
  currentPage = 1,
  totalCount = 13,
  onPageChange,
  siblingCount = 1,
  shape = 'round',
  hasBorder = true,
  isSolid = true
}) => {
  const [activePage, setActivePage] = useState(currentPage);
  const pillCount = useMemo(() => {
    return totalCount<=5 ? totalCount : 5+(siblingCount*2);
  }, [totalCount, siblingCount])

  const pills = useMemo(() => {
    const half = pillCount/2;
    const array = Array.from({ length: pillCount }, (_, i) => i + 1);

    // return array if no ellipses
    if (pillCount >= totalCount) {
      return array;
    }

    // last pill is always the total
    array[pillCount-1] = totalCount;

    // should there be ellipses?
    let left = true;
    let right = true;

    if (activePage <= (Math.round(half))) {
      left = false;
    };

    if (activePage >= (Math.round(totalCount-half))) {
      right = false;
    }
    
    if (left) {
      array[1] = '...';

      if (right) {
        const centerLength = (siblingCount*2)+1
        let page = activePage-siblingCount;
        
        // fill in centre numbers
        for (let i = 0; i < centerLength; i++) {
          array[2+i] = page;
          array[pillCount-1] = totalCount;
          page++;
        }        
      } else {
        // fill in right-side numbers
        const rightSideLength = pillCount-2;
        for (let i = 0; i < rightSideLength; i++) {
          array[(pillCount-i)-1] = totalCount - i;
        }
  
      }
    };

    if (right) array[pillCount-2] = '...';
    
    return array;
  }, [totalCount, siblingCount, activePage])


  const handlePillClick = (pillPage) => {
    if (pillPage !== '...') {
      setActivePage(pillPage)
    };
  }
  const next = () => {
    if (activePage !== totalCount) {
      setActivePage((prev) => (prev + 1))
    }
  };
  const prev = () => {
    if (activePage !== 1) {
      setActivePage((prev) => (prev - 1))
    }
  };

  useEffect(() => {
    onPageChange(activePage);
  }, [activePage])

  return (
    <Container>
      <Chevron 
        action={() => prev()}
        rotateBy={90}
      />

      {pills.map((str, index) => {
        return (
          <Pill 
            key={`pill-${str}-${index}`}
            shape={shape}
            hasBorder={hasBorder}
            isSolid={isSolid}
            className='pagination-pill'
            isActive={str === activePage}
            onClick={() =>handlePillClick(str)}
          >
            <Typography.Small>
              {str}
            </Typography.Small>
          </Pill>          
        )
      })}
      
      <Chevron 
        action={() => next()}
        rotateBy={-90}
      />
    </Container>
  )
}

export default Pagination;

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalCount: PropTypes.number,
  onPageChange: PropTypes.func,
  siblingCount: PropTypes.number,
  shape: PropTypes.oneOf([
    'round', 'square'
  ]),
  hasBorder: PropTypes.bool,
  isSolid: PropTypes.bool
}