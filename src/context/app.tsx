
import React, { createContext } from 'react';

export const AppContext = createContext({});

export const AppProvider: React.FC = ({ children }) => {
  return (
    <AppContext.Provider value={{ }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;