import "../../index.css";
import './navbar.css';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo_rojo.png';
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
  
    <Link to="/cotizaciones/encomiendas" className="navbar-item">Cotizaciones</Link>
    <Link to="/seguimiento" className="navbar-item">Seguimiento de Envios</Link>
    <Link to="/cotizaciones/transporte" className="navbar-item">Contáctenos</Link>
  </div>

  {/* Menú desplegable en pantallas pequeñas */}
  {isMenuOpen && (
    <div className="lg:hidden navbar-dropdown">
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/nosotros" className="navbar-item">Nosotros</Link>
      <Link to="/cotizaciones/encomiendas" className="navbar-item">Cotizaciones</Link>
      <Link to="/seguimiento" className="navbar-item">Seguimiento de Envios</Link>
      <Link to="/cotizaciones/transporte" className="navbar-item">Contáctenos</Link>
    </div>
  )}
</nav>

  );
};

export default Navbar;
