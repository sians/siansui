import { StyleSheetManager, ThemeProvider } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid'

import Router from './router';

import theme from 'theme';

function App() {
  return (
    <StyleSheetManager 
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true;
      }}
    >
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router />
        </div>
      </ThemeProvider>
    </StyleSheetManager>    
  );
}

export default App;
