import React from 'react';

import { ThemeContextProvider } from '../context';
import Header from './Header';
import Characters from './Characters';

const App = () => (
  <ThemeContextProvider>
    <Header />
    <main>
      <Characters />
    </main>
  </ThemeContextProvider>
);

export default App;
