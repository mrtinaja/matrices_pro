import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Resumen from './Pages/Resumen';
import Wizard from './Pages/Wizard'
import { traductorContext } from './context/traductorContext';
import { globalJSONContext } from './context/globalJsonDataContext';
import USA from './Components/idiomas/english.json'
import ARG from './Components/idiomas/spanish.json'
import FRA from './Components/idiomas/french.json'
import BRA from './Components/idiomas/portuguese.json'

function App() {
  const {language} = useContext(traductorContext);
  const {setGlobalJSON} = useContext(globalJSONContext);

  useEffect(() => {
    const languageJSONMap ={
       ARG,
       USA,
       FRA,
       BRA
    };
    if (language in languageJSONMap) {
      setGlobalJSON(languageJSONMap[language]);
      localStorage.setItem('language', language);
    }
  }, [language]);


  return (
    <Router>
      <Routes >
        <Route path="/" element={<Inicio/>} />
        <Route path="/matrices" element={<Resumen/>} />
        <Route path="/wizard" element={<Wizard/>} />
      </Routes>
    </Router>
  );
}

export default App;






















