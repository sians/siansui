import { useEffect, useState } from 'react';
import { convertCase } from 'utils';

const useSearch = (pageData, query) => {
  const [results, setResults] = useState([]);
  const hookNames = Object.keys(pageData.hooks);
  const componentNames = Object.keys(pageData.components)

  const findMatchingStrings = (arr, query) => {
    const lowerCaseQuery = query.toLowerCase();
    return arr.filter((str) => str.toLowerCase().includes(lowerCaseQuery));
  };
  const makeResultArray = (category, matchesAry) => {
    return matchesAry.map(string => {
      const { title, description } = pageData[category]?.[string]?.cardData;
      const snakeTitle = convertCase('pascal', 'snake', title);
      return {
        category: category,
        title: title,
        value: title,
        label: title,
        description: description,
        url: `/${category}/${snakeTitle}`
      }
    })
  }

  useEffect(() => {
    if (query) {
      const hookMatches = findMatchingStrings(hookNames, query);
      const compMatches = findMatchingStrings(componentNames, query);
      setResults([
        {
          label: 'Hooks',
          options: makeResultArray('hooks', hookMatches),
        },
        {
          label: 'Components',
          options: makeResultArray('components', compMatches)
        },        
      ])
    } else {
      setResults(null)
    }
  }, [query])

  return results
}

export default useSearch;