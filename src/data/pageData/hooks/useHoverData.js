const codeSnippets = {
  1: `
import { useRef, useState, useEffect } from 'react'

// Define custom hook called useHover
const useHover = () => {
  // useRef hook is used to create a mutable ref object, initialized as null
  const ref = useRef(null);
  
  // useState hook to create a state variable 'isHovered' and a function to update it 'setIsHovered'
  const [isHovered, setIsHovered] = useState(false);
  
  // useEffect is used to handle side-effects in functional components
  // This function will be called after the render is committed to the screen
  useEffect(() => {
    // Store current reference in a variable
    const node = ref.current;
    
    // Check if node exists
    if (node) {
      // Define handlers for mouse enter and leave events
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      
      // Add event listeners for mouse enter and leave
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
      
      // Cleanup function to be run on unmount or before subsequent re-renders
      // Remove event listeners for mouse enter and leave
      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    }
  }, []) // Empty dependency array ensures this effect runs only once, equivalent to componentDidMount lifecycle method in class components

  // Return an array containing the ref and isHovered state
  return [
    ref,
    isHovered
  ]
}

// Export the useHover custom hook
export default useHover;
  `,
  2: `
    export function App() {
      const [ref, isHovered] = useHover()
      
      return <div>
        <input ref={ref}/>
        {isHovered && <p>hovering</p>}
      </div>

    }  
  `
}

const sections = {
  description: {
    text: [
      "The 'useHover' hook allows you to track whether an element is being hovered over.", 
      "This hook returns an array that includes a ref object and a boolean state to indicate whether the element is being hovered.",
    ]
  },
  whenToUse: {
    title: 'When To Use',
    text: [
      "Use this hook when you need to handle hover states, such as creating hover effects, displaying tooltips, or any other changes based on the hover state of an element.",
      "It simplifies the process of tracking hover state and encourages clean, organized code by localizing the hover state logic.",        
    ]
  },
  returnValue: {
    title: 'Returned Values',
    text: [
      "The useHover hook returns an array of the following two variables.",
    ],
    tableData: [
      { 
        name: 'ref',
        description: 'A mutable ref object',
        propType: 'object'
      },
      { 
        name: 'isHovered',
        description: 'A boolean indicating whether the element is being hovered over',
        propType: 'boolean'
      }
    ]
  },
  snippets: {
    title: 'Snippets',
    code: [
      {
        str: codeSnippets[1],
        language: 'javascript',
        title: 'src/hooks/useHover.js'
      },
      {
        str: codeSnippets[2],
        language: 'javascript',
        title: 'Example use:'
      },      
    ]
  }
}


const PAGE_DATA = {
  title: "useHover",
  sections: sections,
  cardData: {
    hookName: 'useHover',
    description: 'Detects when a user hovers over a specific element in a React component.'
  }
}

export default PAGE_DATA;

