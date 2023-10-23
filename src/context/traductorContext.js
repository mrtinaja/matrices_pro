import React, { createContext, useEffect, useState } from 'react';


const traductorContext = createContext();

const TraductorProvider = ({ children }) => {
  const [language, setLanguage] = useState('');
  const savedLanguage = localStorage.getItem('language');

  useEffect(() => {
    if(savedLanguage){
      setLanguage(savedLanguage)
    } else {
      setLanguage('ARG')
    }
  },[])

  return (
    <traductorContext.Provider value={{ language, setLanguage }}>
      {children}
    </traductorContext.Provider>
  );
};

export { TraductorProvider, traductorContext };