const codeSnippets = {
  1: `
// Importing required hooks from react
import { useEffect, useCallback } from 'react';

// Custom hook to handle keypress events
const useKeyPress = (keyActionMap) => {

  // The event handler function, wrapped in useCallback for performance optimization
  const onKeyDown = useCallback((event) => {
    // Initialize an array to track any modifiers (e.g. Shift, Control, Alt, Meta)
    const modifiers = [];
    
    // Check if any modifiers are pressed and if so, add them to the modifiers array
    if (event.shiftKey) modifiers.push('Shift');
    if (event.ctrlKey) modifiers.push('Control');		
    if (event.altKey) modifiers.push('Alt');
    if (event.metaKey) modifiers.push('Meta');
    
    // Form a key string, which includes the modifiers and the actual key being pressed
    // If any modifiers were pressed, they go first in the string, followed by a '+', then the actual key
    // If no modifiers were pressed, the keyString is simply the key being pressed
    const keyString = modifiers.length > 0 
      ? [...modifiers, event.key.toLowerCase()].join('+')
      : event.key;
    
    // Look up the action (if any) associated with the keyString in the keyActionMap
    const callback = keyActionMap[keyString];
    
    // If a callback is found, prevent the default action and execute the callback
    if (callback) {
      event.preventDefault();
      callback();
    }
  }, [keyActionMap]); // The useCallback depends on the keyActionMap
  
  // Using the useEffect hook to handle adding and removing the event listener when component mounts/unmounts
  useEffect(() => {
    // Add the onKeyDown event listener
    document.addEventListener('keydown', onKeyDown);
    
    // Clean up function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]); // The useEffect depends on the onKeyDown function
}

// Exporting the custom hook for use in other components
export default useKeyPress;  
  `,
  2: `
useKeyPress({
  'Meta+k': () => console.log("Meta + K"),
  'Escape': () => console.log("Escape"),
}) 
  `
}
const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [
          "The 'useKeyPress' hook allows you to execute specific callbacks when a certain key or key combination is pressed.", 
          "This hook takes an object mapping keys or key combinations to callback functions, and sets up event listeners to execute the callbacks when the specified keys are pressed."
        ]
      }
    ]
  },
  whenToUse: {
    title: 'When To Use',
    widgets: [
      {
        widgetType: 'text',
        data: [
          "Use this hook when you need to perform actions in response to specific key presses or key combinations. This can be particularly useful in building keyboard navigation, shortcuts, or game controls.",
          "It simplifies the process of setting up keydown event listeners and handling possible key combinations, making your code cleaner and more organized."
        ]
      }
    ]
  },
  returnValue: {
    title: 'Returned Values',
    widgets: [
      {
        widgetType: 'text',
        data: [
          "The useKeyPress hook does not return any values. Instead, it performs side effects (the provided callback functions) when certain keys are pressed."
        ]
      }
    ]
  },
  snippets: {
    title: 'Snippets',
    widgets: [
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[1],
            language: 'javascript',
            title: 'src/hooks/useKeyPress.js'
          }
        ]
      },
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[2],
            language: 'javascript',
            title: 'Example use:'
          }
        ]
      },
    ]
  },
}

const PAGE_DATA = {
  title: "useKeyPress",
  sections: sections,
  cardData: {
    hookName: 'useKeyPress',
    description: 'Detects when a user presses a specific key on the keyboard.'
  }
}

export default PAGE_DATA;
