import { useState, useRef, useEffect } from 'react';
import { Wrapper, Tip, Inner, makePosition } from './styles';

const Tooltip = ({ children, content, placement }) => {
  const [isActive, setIsActive] = useState();
  
  const childRef = useRef(null);
  const tipRef = useRef(null);
  const [position, setPosition] = useState({ top: '0px', left: '0px' });

  useEffect(() => {
    if (childRef.current && tipRef.current && isActive) {
      const childRect = childRef.current.getBoundingClientRect();
      const tipRect = tipRef.current.getBoundingClientRect();

      setPosition(
        makePosition(
          placement, 
          childRect, 
          tipRect,
        )
      );
    }
  }, [isActive]);  

  const showTip = () => {
    setIsActive(true);
  };

  const hideTip = () => {
    setIsActive(false);
  };

  return (
    <Wrapper
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      <div ref={childRef}>
        {children}
      </div>

        <Tip 
          ref={tipRef}
          position={position}
          isActive={isActive}
        >
          <Inner>
            {content}
          </Inner>
          
          <div className='arrow'/>
        </Tip>

    </Wrapper>
  );
}

export default Tooltip;
