import { useEffect, useState } from 'react';

const useMediaQuery = () => {
  const [viewportWidth, setViewportWidth] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);

      const mobileMatch = window.matchMedia('(max-width: 767px)').matches;
      const tabletMatch = window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches;
      const desktopMatch = window.matchMedia('(min-width: 1025px)').matches;

      setIsMobile(mobileMatch);
      setIsTablet(tabletMatch);
      setIsDesktop(desktopMatch);
    };

    handleResize();
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return { viewportWidth, isMobile, isTablet, isDesktop };
};

export default useMediaQuery;
