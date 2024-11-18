import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home';
import Serviciosm from './Servicios';
import GaleriaImagenes from './galeria';
import Eventos from './evento';
import Login from './login';
import Register from './registro';
import Administrador from './administrador';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Ruta de la HomePage */}
        <Route path="/servicios" element={<Serviciosm />} /> {/* Ruta de la página de Servicios */}
        <Route path="/galeria" element={<GaleriaImagenes />} /> {/* Ruta de la página de Servicios */}
        <Route path="/eventos" element={<Eventos />} /> {/* Ruta de la página de Eventos */}
        <Route path="/login" element={<Login />} /> {/* Ruta de la página de Login */}
        <Route path="/register" element={<Register />} /> {/* Ruta de la página de Registro */}
        <Route path="/administrador" element={<Administrador />} /> {/* Ruta de la página de administrador */}
      </Routes>
    </Router>
  );
}

export default App;
