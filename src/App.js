import { createContext } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid'

import Router from './router';

import { AppStyles } from 'theme';
import { useInstantiatedAppTheme } from 'hooks/useAppTheme';
export const AppThemeContext = createContext();

function App() {
  const appTheme = useInstantiatedAppTheme();
  console.log(appTheme)

  return (
    <StyleSheetManager 
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true;
      }}
    >
      <AppThemeContext.Provider value={appTheme}>
        <ThemeProvider theme={appTheme.themeState?.theme}>

          <AppStyles className="App">
            <Router />
          </AppStyles>

        </ThemeProvider>
      </AppThemeContext.Provider>
    </StyleSheetManager>    
  );
}

export default App;
