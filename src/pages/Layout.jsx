import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Nosotros from '../components/Nosotros/Nosotros';  // Importa el componente Nosotros
import Encomiendas from '../components/Encomiendas/Encomiendas';  // Importa el componente Nosotros
import Personal from '../components/TransportePersonal/Transportepersonal';
import Seguimiento from '../components/seguimientos/seguimientos';  


const Layout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/nosotros" element={<Nosotros />} />  {/* Aquí es donde defines la ruta para "Nosotros" */}
        <Route path="/cotizaciones/encomiendas" element={<Encomiendas />} />  {/* Aquí es donde defines la ruta para "Nosotros" */}
        <Route path="/cotizaciones/transporte" element={<Personal />} /> 
        <Route path="/seguimiento" element={<Seguimiento />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default Layout;

