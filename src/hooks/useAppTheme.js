import { useContext } from 'react';
import { useState } from 'react';

import { AppThemeContext } from 'App';

import { setThemeType } from 'theme';

const useAppTheme = () => {
  return useContext(AppThemeContext)
}
const THEME_NAME = 'dark';
const INITIAL_STATE = {
  themeName: THEME_NAME,
  theme: setThemeType(THEME_NAME),
  isGridLayout: true,
  isDefaultExpanded: false
};

export const useInstantiatedAppTheme = () => {
  const [ themeState, setThemeState ] = useState(INITIAL_STATE);

  const toggleTheme = () => {
    setThemeState(prev => {
      const newName = prev.themeName === 'light' ? 'dark' : 'light';
      return {
        ...prev,
        themeName: newName,
        theme: setThemeType(newName)
      }
    })
  }

  const toggleLayout = () => {
    setThemeState(prev => {
      return {
        ...prev,
        isGridLayout: !prev.isGridLayout
      }
    });
  }

  const toggleDefaultExpanded = () => {
    setThemeState(prev => {
      return {
        ...prev,
        isDefaultExpanded: !prev.isDefaultExpanded
      }
    });
  }  

  return {
    themeState,
    toggleTheme,
    toggleLayout,
    toggleDefaultExpanded
  };
}

export default useAppTheme;
