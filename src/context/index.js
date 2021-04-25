import React, { useReducer, createContext } from 'react';

import reducer from '../reducer';

const ThemeContext = createContext({});
const initialState = {
  darkmode: true,
  characters: [],
  favorites: [],
  search: '',
};

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
