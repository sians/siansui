import { ThemeProvider } from 'styled-components';

import theme from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        Appy whhaaaat?
      </div>
    </ThemeProvider>
  );
}

export default App;
