import React, { useState } from 'react';
import Header from './components/Header';
import GlobalStyle from './styles/global'; 
import { ThemeProvider} from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
}

export default App;
