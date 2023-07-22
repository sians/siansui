import { useRef, useState, useEffect } from 'react'

const useHover = () => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const node = ref.current;
    
    if (node) {
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    }
  }, [])

  return [
    ref,
    isHovered
  ]
}

export default useHover;