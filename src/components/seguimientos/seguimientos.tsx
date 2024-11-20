import React, { useState } from 'react';
import camion from '../../assets/camion.jpg';
import p_registrado from '../../assets/p_registrado.png';
import p_recojo from '../../assets/p_recojo.png';
import p_entregado from '../../assets/p_entregado.png';
import p_camino from '../../assets/p_camino.png';

const estadosEnvio = [
  { id: 1, nombre: "Pedido Registrado", imagen: p_registrado },
  { id: 2, nombre: "Pedido en Camino", imagen: p_camino },
  { id: 3, nombre: "Pedido para Recojo", imagen: p_recojo },
  { id: 4, nombre: "Pedido Entregado", imagen: p_entregado },
];

// Datos ficticios
const pedidosFicticios = [
  {
    codigo: "111",
    dni: "11111111",
    estadoActual: 3,
    descripcion: "Pedido de electrodomésticos grandes con entrega programada.",
  },
  {
    codigo: "222",
    dni: "22222222",
    estadoActual: 1,
    descripcion: "Pedido de muebles.",
  },
];

const Seguimientos = () => {
  const [codigo, setCodigo] = useState('');
  const [dni, setDni] = useState('');
  const [pedido, setPedido] = useState(null);
  const [error, setError] = useState('');

  const buscarPedido = (e) => {
    e.preventDefault();
    const resultado = pedidosFicticios.find(
      (p) => p.codigo === codigo && p.dni === dni
    );

    if (resultado) {
      setPedido(resultado);
      setError('');
    } else {
      setPedido(null);
      setError('No se encontró el pedido con los datos ingresados.');
    }
  };

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
          <div className="w-16 h-1 bg-red-600 mb-4"></div>
          <h2 className="text-4xl text-left font-medium mb-4 text-red-600">
            Rastreo de Carga
          </h2>
        </div>
        <p className="font-light text-justify mb-10">
          Ingresa tu número de rastreo y DNI para conocer el estado de tu envío.
        </p>

        {/* Formulario de búsqueda */}
        <form onSubmit={buscarPedido} className="bg-white p-8 shadow-md rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block font-normal text-sm mb-1">Número de Rastreo</label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                placeholder="Número de Rastreo"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-normal text-sm mb-1">DNI del Remitente</label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                placeholder="DNI"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-red-700 text-white font-semibold px-6 py-3 rounded hover:bg-red-600"
          >
            Buscar
          </button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Resultado */}
        {pedido && (
          <div className="mt-10 bg-white p-8 shadow-md rounded">
            <h2 className="text-2xl font-medium mb-4">Estado del Envío</h2>
            <p className="mb-4 text-gray-700">{pedido.descripcion}</p>
            <div className="relative flex items-center justify-between w-full px-10">
              {/* Línea roja horizontal */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-red-500 -z-10"></div>

              {/* Estados */}
              {estadosEnvio.map((estado) => (
                <div key={estado.id} className="flex flex-col items-center w-1/4">
                  {/* Círculo */}
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center border-4 ${
                      estado.id <= pedido.estadoActual
                        ? 'border-red-700 bg-red-700'
                        : 'border-gray-400 bg-gray-400'
                    }`}
                  >
                    <img
                      src={estado.imagen}
                      alt={estado.nombre}
                      className="w-16 h-16"
                    />
                  </div>
                  {/* Texto del estado */}
                  <p
                    className={`mt-4 text-center font-medium ${
                      estado.id <= pedido.estadoActual
                        ? 'text-red-700'
                        : 'text-gray-400'
                    }`}
                  >
                    {estado.nombre}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>
    </div>
  );
};

export default Seguimientos;
