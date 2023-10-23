// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Resumen from './Pages/Resumen';
import Wizard from './Pages/Wizard'


function App() {
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





















