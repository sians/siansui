import { useEffect, useRef } from 'react';

const useTimeout = (callback, delay) => {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    useEffect(() => {
      if (delay) {
        const id = setTimeout(() => callbackRef.current(), delay);
        return () => clearTimeout(id);  
      }
    }, [delay]);
}

export default useTimeout;