import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home';
import ServiciosPage from './ServiciosPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Ruta de la HomePage */}
        <Route path="/servicios" element={<ServiciosPage />} /> {/* Ruta de la página de Servicios */}
      </Routes>
    </Router>
  );
}

export default App;
