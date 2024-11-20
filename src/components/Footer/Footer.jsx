// src/components/Footer.js
import React from 'react';
import "../../index.css";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Sección de contacto */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg">Oficinas</h3>
            <p className="mt-2 text-gray-200">123 Calle Principal, Lima, Perú</p>
            <p className="text-gray-200">Teléfono: +51 123 456 789</p>
            <p className="text-gray-200">Email: contacto@transportescerna.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Síguenos</h3>
            <div className="mt-2">
              <a href="https://facebook.com" className="text-gray-200 hover:text-gray-400 mr-4">Facebook</a>
              <a href="https://twitter.com" className="text-gray-200 hover:text-gray-400 mr-4">Twitter</a>
              <a href="https://linkedin.com" className="text-gray-200 hover:text-gray-400">LinkedIn</a>
            </div>
          </div>

          <div>
            
            <form className="mt-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-4 py-2 w-full md:w-64 text-gray-800 rounded-md focus:outline-none"
              />
              <button type="submit" className="mt-2 w-full md:w-32 bg-white text-gray-800 py-2 rounded-md hover:bg-gray-200">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 Transportes Cerna. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
