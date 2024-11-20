import "../../index.css";
import './navbar.css';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo01.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Controla el desplegable

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={`navbar ${isSticky ? 'navbar-sticky' : 'navbar-transparent'}`}>
  <img src={logo} alt="Logo" className="navbar-logo" />

  <div className="hidden lg:flex navbar-menu">
    <Link to="/" className="navbar-item">Inicio</Link>
    <Link to="/nosotros" className="navbar-item">Nosotros</Link>

    {/* Opción Cotizaciones con submenú */}
    <div className="navbar-item-cotizaciones">
      <span className="navbar-item">Cotizaciones</span>
      <div className="navbar-submenu">
        <Link to="/cotizaciones/encomiendas" className="navbar-item1">Encomiendas</Link>
        <Link to="/cotizaciones/transporte" className="navbar-item1">Transporte Personal</Link>
      </div>
    </div>

    <Link to="/seguimiento" className="navbar-item">Seguimiento de Envios</Link>
    <Link to="/contacto" className="navbar-item">Contáctenos</Link>
  </div>

  {/* Botón Ingresar */}
  <button className="hidden lg:block navbar-button">Ingresar</button>

  {/* Menú desplegable en pantallas pequeñas */}
  {isMenuOpen && (
    <div className="lg:hidden navbar-dropdown">
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/nosotros" className="navbar-item">Nosotros</Link>
      <div className="navbar-item-cotizaciones">
        <span className="navbar-item">Cotizaciones</span>
        <div className="navbar-submenu">
          <Link to="/cotizaciones/encomiendas" className="navbar-item">Encomiendas</Link>
          <Link to="/cotizaciones/transporte" className="navbar-item">Transporte Personal</Link>
        </div>
      </div>
      <Link to="/seguimiento" className="navbar-item">Seguimiento de Envios</Link>
      <Link to="/contacto" className="navbar-item">Contáctenos</Link>
      <button className="navbar-item">Ingresar</button>
    </div>
  )}
</nav>

  );
};

export default Navbar;
