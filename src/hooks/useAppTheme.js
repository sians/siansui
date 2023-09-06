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

  return {
    themeState,
    toggleTheme,
  };
}

export default useAppTheme;
