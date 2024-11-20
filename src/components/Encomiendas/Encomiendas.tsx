import React from 'react';
import camion from "../../assets/camion.jpg";

const Encomiendas = () => {
  return (
    <div className="pt-[65px]">
      {/* Imagen de portada */}
      <div>
        <img
          src={camion}
          alt="Transportes Cerna 2"
          className="w-full h-[580px] object-cover"
        />
      </div>

      {/* Sección de contenido */}
      <section className="py-20 bg-gray-100 px-24">
        <div className="flex flex-col mb-8">
          <div className="w-16 h-1 bg-red-500 mb-4"></div>
          <h2 className="text-4xl text-left font-medium mb-4 text-red-500">Cotización de Encomiendas</h2>
        </div>
        <p className="font-light text-justify mb-10">
          Trasladamos personas, el activo más importante de tu empresa. Somos una empresa especializada en el servicio de transporte de personal, brindando soluciones integrales con los más altos estándares de calidad y seguridad. Nuestros más de 30 años de experiencia nos respaldan. Nos esforzamos cada día en ofrecer el mejor servicio del mercado.
        </p>

        {/* Formulario de cotización */}
        <form className="bg-white p-8 shadow-md rounded">
          {/* Datos Personales / Empresariales */}
          <h2 className="text-xl font-medium mb-4">Datos Personales / Empresariales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mr-15">
            <div>
              <label className="block font-normal text-sm mb-1">RUC o DNI</label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                placeholder="Ingrese su RUC o DNI"
              />
            </div>
            <div>
              <label className="block font-normal text-sm mb-1">Nombre o Razón Social</label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                placeholder="Ingrese su Nombre o Razón Social"
              />
            </div>
            <div>
              <label className="block font-normal text-sm mb-1">Persona a Contactar</label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                placeholder="Persona a contactar"
              />
            </div>
            <div>
              <label className="block font-normal text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                placeholder="Correo electrónico"
              />
            </div>
            <div>
              <label className="block font-normal text-sm mb-1">Teléfono</label>
              <input
                type="tel"
                className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                placeholder="Teléfono de contacto"
              />
            </div>
          </div>

          {/* Datos de Envío */}
          <h2 className="text-xl font-medium mb-4">Datos de Envío</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div>
              <label className="block font-normal text-sm mb-1">Origen</label>
              <select className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light">
                <option>Seleccione Origen</option>
                {/* Agrega más opciones aquí */}
              </select>
            </div>
            <div>
              <label className="block font-normal text-sm mb-1">Destino</label>
              <select className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light">
                <option>Seleccione Destino</option>
                {/* Agrega más opciones aquí */}
              </select>
            </div>
            <div>
              <label className="block font-normal text-sm mb-1">Tipo de Transporte</label>
              <select className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light">
                <option>Carga Pesada</option>
                <option>Carga Liviana</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block font-normal text-sm mb-1">Observaciones</label>
            <textarea
              className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
              placeholder="Ingrese observaciones"
              rows="4"
            ></textarea>
          </div>

          {/* Captcha */}
          <div className="mb-6 flex items-center">
            <span className="bg-gray-200 text-lg px-4 py-2 rounded mr-4">88B890</span>
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
              placeholder="Ingrese el código de seguridad"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="bg-red-500 text-white font-semibold px-6 py-3 rounded hover:bg-red-600"
          >
            Cotizar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Encomiendas;
