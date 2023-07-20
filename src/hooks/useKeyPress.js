
import { useEffect, useCallback } from 'react';

// const EXAMPLE_MAP = {
	// Enter: () => console.log('Enter'),
	// 'Control+Shift+k': () => console.log('ctrl shft k'),
// }

const useKeyPress = (keyActionMap) => {
	const onKeyDown = useCallback((event) => {
		// track any modifiers
		const modifiers = [];
		if (event.shiftKey) modifiers.push('Shift');
		if (event.ctrlKey) modifiers.push('Control');		
		if (event.altKey) modifiers.push('Alt');
		if (event.metaKey) modifiers.push('Meta');
		
		// Form the key string, modifiers go first
    const keyString = modifiers.length > 0 
      ? [...modifiers, event.key.toLowerCase()].join('+')
      : event.key;
		
    const callback = keyActionMap[keyString];
		
		if (callback) {
			event.preventDefault();
			callback();
		}
	}, [keyActionMap]);
	
	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		return () => {
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [onKeyDown]);
}

export default useKeyPress;