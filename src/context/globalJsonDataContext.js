import React, { createContext, useState } from 'react';

const globalJSONContext = createContext();


const GlobalJSONProvider = ({ children }) => {
  const [globalJSON, setGlobalJSON] = useState({}); 

  return (
    <globalJSONContext.Provider value={{ globalJSON, setGlobalJSON }}>
      {children}
    </globalJSONContext.Provider>
  );
};

export { GlobalJSONProvider, globalJSONContext };
