import { useContext } from 'react';
import { useState } from 'react';

import { AppThemeContext } from 'App';

import { setThemeType } from 'theme';

const useAppTheme = () => {
  return useContext(AppThemeContext)
}

const INITIAL_STATE = {
  themeName: 'light',
  theme: setThemeType('light')
};

export const useInstantiatedAppTheme = () => {
  const [ themeState, setThemeState ] = useState(INITIAL_STATE);

  const toggleTheme = () => {
    setThemeState(prev => {
      const newName = prev.themeName === 'light' ? 'dark' : 'light';
      return {
        themeName: newName,
        theme: setThemeType(newName)
      }
    })
  }

  return {
    themeState,
    toggleTheme
  };
}

export default useAppTheme;