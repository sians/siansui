import { useRef, useState, useCallback } from 'react'

const useFocus = () => {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => setIsFocused(true);    
  const onBlur = () => setIsFocused(false);

  const callbackRef = useCallback(node => {
    if (ref.current) {
      ref.current.removeEventListener('focus', onFocus)
      ref.current.removeEventListener('blur', onBlur)
    }
    
    ref.current = node
    
    if(node) {
      ref.current.addEventListener('focus', onFocus)
      ref.current.addEventListener('blur', onBlur)
    }
  }, [])

  const setFocus = (hasFocus) => {
    if (ref.current) {
      if (hasFocus) {
        ref.current.focus();
      } else {
        ref.current.blur();
      }
    }
  }
  
  return [
    callbackRef,
    isFocused,
    setFocus
  ]
}

export default useFocus;