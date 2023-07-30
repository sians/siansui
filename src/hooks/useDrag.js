import { useState, useEffect, useRef, useCallback } from 'react';

const useDrag = (onChange) => {
  const [dragging, setDragging] = useState(false);
  
  const [startPosition, setStartPosition] = useState({});
  const [position, setPosition] = useState({});
  const [displacement, setDisplacement] = useState({});
  const [boundingRect, setBoundingRect] = useState(null);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
    setPosition({ x: e.clientX, y: e.clientY});
    setStartPosition({ x: e.clientX, y: e.clientY});
    setBoundingRect(containerRef.current?.getBoundingClientRect());
  };

  const handleMouseMove = useCallback((e) => {
    if (dragging) {
      const newPosition = {
        x: e.clientX,
        y: e.clientY
      };

      const newDisplacement = {
        x: startPosition.x - e.clientX,
        y: startPosition.y - e.clientY,
      }

      setPosition(newPosition);
      setDisplacement(newDisplacement);
      onChange(newPosition);
    }
  }, [dragging, startPosition, onChange]);

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleTouchStart = (e) => {
    setDragging(true);
    setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY});
    setStartPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY});
    setBoundingRect(containerRef.current?.getBoundingClientRect());
  };

  const handleTouchMove = useCallback((e) => {
    if (dragging) {
      const newPosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };

      const newDisplacement = {
        x: startPosition.x - e.touches[0].clientX,
        y: startPosition.y - e.touches[0].clientY,
      }

      setPosition(newPosition);
      setDisplacement(newDisplacement);
      onChange(newPosition);
    }
  }, [dragging, startPosition, onChange]);

  const handleTouchEnd = () => {
    setDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [dragging, handleTouchMove, handleMouseMove]);

  return {
    dragging,
    onMouseDown: handleMouseDown,
    onTouchStart: handleTouchStart,
    position,
    displacement,
    boundingRect,
    containerRef
  };
};

export default useDrag;
