import PropTypes from 'prop-types';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useTheme } from 'styled-components';

import useHover from 'hooks/useHover';

import { Icon } from 'components';
import { Container, Images, Image, Chevrons, Dots } from './styles';

const Carousel = ({
  items,
  isAutoplay = false,
  autoplaySpeed = 3000,
  dotType = 'round',
  dotPosition = 'bottom',
  showChevron = true,
  minHeight = 300,
  transitionType = 'fade',
  fill,
  isStretchToFit = true
}) => {
  const theme = useTheme();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoplayActive, setIsAutoplayActive] = useState(isAutoplay);

  const [leftHoverRef, isLeftHover] = useHover();
  const [rightHoverRef, isRightHover] = useHover();

  const [containerWidth, setContainerWidth] = useState(0);
  const imagesRef = useRef(null);

  const next = useCallback(() => {
    setActiveIdx((prevIdx) => (prevIdx + 1) % items.length);
  }, [items.length])

  const prev = useCallback(() => {
    setActiveIdx((prevIdx) => (prevIdx - 1 + items.length) % items.length);
  }, [items.length])

  const handleNextClick = useCallback(() => {
    setIsAutoplayActive(false);
    next();
  }, [next])

  const handlePrevClick = useCallback(() => {
    setIsAutoplayActive(false);
    prev();
  }, [prev])

  const handleDotClick = useCallback((index) => {
    setIsAutoplayActive(false);
    setActiveIdx(index);
  }, [])

  useEffect(() => {
    if (isAutoplayActive) {
      const interval = setInterval(() => {
        next();
      }, autoplaySpeed)

      return () => clearInterval(interval);
    }
  }, [isAutoplayActive, autoplaySpeed, next])

  useEffect(() => {
    if (imagesRef.current) {
      setContainerWidth(imagesRef.current.getBoundingClientRect().width);
    }

    const handleResize = () => {
      if (imagesRef.current) {
        setContainerWidth(imagesRef.current.getBoundingClientRect().width);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container minHeight={minHeight}>
      {items && 
        <Images 
          ref={imagesRef} 
          activeIdx={activeIdx}
          transitionType={transitionType}
          width={containerWidth}
        >
          <div className='inner'>
            {items.map((item, index) => {
              return (
                <Image 
                  key={`carousel-im-${item.src}-${index}`}
                  src={item.src} 
                  alt={item.alt}
                  isActive={activeIdx === index}
                  transitionType={transitionType}
                  isStretchToFit={isStretchToFit}
                  width={containerWidth}
                />
              )
            })}
          </div>
        </Images>
      }

      {showChevron &&
        <Chevrons>
          <div 
            className='icon' 
            ref={leftHoverRef}
            onClick={() => handlePrevClick()}
            role="button"
            aria-label="Previous"          
          >
            <Icon 
              name='chevron-up'
              rotateBy={-90}
              fill={fill ? fill : { 
                base: isLeftHover 
                  ? theme.colors.bg
                  : theme.colors.fg
              }}
            />
          </div>

          <div 
            className='icon' 
            ref={rightHoverRef}
            onClick={() => handleNextClick()}
            role="button"
            aria-label="Next"          
          >
            <Icon 
              name='chevron-up'
              rotateBy={90}
              fill={fill ? fill : { 
                base: isRightHover 
                  ? theme.colors.bg
                  : theme.colors.fg
              }}
            />
          </div>
        </Chevrons>      
      }


      <Dots
        dotType={dotType}
        dotPosition={dotPosition}
      >
        {items && items.map((_, index) => (
          <div 
            key={`carousel-dot-${index}`}
            className={`dot ${index === activeIdx ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </Dots>
    </Container>
  )
}

export default Carousel;

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  })),
  isAutoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
  dotType: PropTypes.oneOf([
    'round', 'dash', 'none'
  ]),
  dotPosition: PropTypes.oneOf([
    'top', 'bottom'
  ]),
  showChevron: PropTypes.bool,
  minHeight: PropTypes.number,
  transitionType: PropTypes.oneOf([
    'slide', 'fade'
  ]),
  fill: PropTypes.shape({
    base: PropTypes.string,
    hover: PropTypes.string,
  }),
  isStretchToFit: PropTypes.bool
}