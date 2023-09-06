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
  isSidebarExtended: true,
  sidebarTransitionTime: 800,
  theme: setThemeType(THEME_NAME),
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

  const toggleSidebar = () => {
    setThemeState(prev => {
      return {
        ...prev,
        isSidebarExtended: !prev.isSidebarExtended
      }
    })
  }

  const setIsSidebarExpanded = (value) => {
    setThemeState(prev => {
      return {
        ...prev,
        isSidebarExtended: value
      }
    })
  }

  return {
    themeState,
    toggleTheme,
    toggleSidebar,
    setIsSidebarExpanded
  };
}

export default useAppTheme;
