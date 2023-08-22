import { useRef, useCallback } from 'react'; 

export default function useClickOutside(callback) { 
	const ref = useRef(null); 
	
  const callbackRef = useCallback((node) => {
    const handleClickOutside = (event) => { 
		  if (ref.current && !ref.current.contains(event.target)) {
			   callback(); 
		  } 
	  };

    if (ref.current) {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    ref.current = node;

    if (node) {
      document.addEventListener('mousedown', handleClickOutside);
    }
  }, [callback])
	
	return callbackRef; 
} 
