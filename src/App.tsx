import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { HomepageHero } from './components/HomepageHero';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <header>Header</header>
      <HomepageHero />
    </ThemeProvider>
  );
};

export default App;
