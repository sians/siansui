import { Link } from 'components';
const codeSnippets = {
  1: `
    import { useRef, useState, useCallback } from 'react'

    // Define custom hook called useFocus
    const useFocus = () => {
      
      // useRef hook is used to create a mutable ref object, initialized as null
      const ref = useRef(null);

      // useState hook to create a state variable 'isFocused' and a function to update it 'setIsFocused'
      const [isFocused, setIsFocused] = useState(false);

      // onFocus and onBlur are simple functions that will set the 'isFocused' state as true or false
      const onFocus = () => setIsFocused(true);    
      const onBlur = () => setIsFocused(false);

      // useCallback returns a memoized version of the callback function
      // The returned function will update the events 'focus' and 'blur' of the current element pointed by the ref
      const callbackRef = useCallback(node => {

        // If there's a current element in ref, remove event listeners for 'focus' and 'blur'
        if (ref.current) {
          ref.current.removeEventListener('focus', onFocus)
          ref.current.removeEventListener('blur', onBlur)
        }
        
        // Update ref with new node
        ref.current = node

        // If node exists, add event listeners for 'focus' and 'blur' 
        if(node) {
          ref.current.addEventListener('focus', onFocus)
          ref.current.addEventListener('blur', onBlur)
        }
      }, [])

      // Function to set the focus of the current element pointed by the ref
      const setFocus = (hasFocus) => {

        // If there's a current element in ref
        if (ref.current) {

          // If hasFocus is true, set focus on the element. Else, remove focus
          if (hasFocus) {
            ref.current.focus();
          } else {
            ref.current.blur();
          }
        }
      }
      
      // Return an array containing the callbackRef, isFocused state and setFocus function
      return [
        callbackRef,
        isFocused,
        setFocus
      ]
    }

    // Export the useFocus custom hook
    export default useFocus;  

  `,
  2: `
    export function App() {
      const [ref, isFocused] = useFocus()
      
      return <div>
        <input ref={ref}/>
        {isFocused && <p>focused</p>}
      </div>

    }  
  `
}

const sections = {
  description: {
    widgets: [
      {
        widgetType: 'text',
        data: [ 
          "The 'useFocus' hook allows you to track and control the focus state of an element.", 
          "This hook returns an array that includes a callback ref, a boolean state to indicate whether the element is focused, and a function to manually set focus or blur.",
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
          "Use this hook when you need to trigger changes elsewhere in your code based on the focus/blur state of an element.",
          "It allows for dynamic and responsive behavior not necessarily local to the focus/blur element itself.",        
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
          "The useFocus hook returns an array of the following three variables.",
        ]
      },
      {
        widgetType: 'table',
        tableType: 'hookReturns',
        data: [
          { 
            name: 'callbackRef',
            description: 'A memoized ref object',
            propType: 'func'
          },
          { 
            name: 'isFocused',
            description: '',
            propType: 'boolean'
          },
          { 
            name: 'setFocus',
            description: 'resets the Focus to the referenced node',
            propType: 'func'
          },   
        ]
      }
    ],
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
            title: 'src/hooks/useFocus.js'
          },
        ]
      },  
      {
        widgetType: 'code',
        data: [
          {
            str: codeSnippets[2],
            language: 'javascript',
            title: 'Example use:'
          },
        ]
      },        
    ],    
  },
  seeAlso: {
    title: 'See Also',
    widgets: [
      {
        widgetType: 'text',
        data: [
          <Link text='<Search />' url='/components/search'/>
        ]
      }
    ]
  }
}

const PAGE_DATA = {
  title: "useFocus",
  sections: sections,
  cardData: {
    title: 'useFocus',
    description: 'The useFocus hook allows components to programmatically gain or lose focus in a React functional component.'
  }
}

export default PAGE_DATA;

