import React, { useState } from 'react';
import logo2 from "../../assets/img03.jpg";
import cotizacion from "../../assets/cotizacion.png";

const Encomiendas = () => {
  const [tipoEncomienda, setTipoEncomienda] = useState(""); // Controla el tipo de encomienda seleccionado
  const [peso, setPeso] = useState(0);
  const [ancho, setAncho] = useState(0);
  const [largo, setLargo] = useState(0);
  const [grosor, setGrosor] = useState(0); // Solo para paquetes
  const [costo, setCosto] = useState(null); // Almacena el costo calculado

  const calcularCosto = (e) => {
    e.preventDefault();

    let volumen = 0;
    let costoBase = 0;

    // Calcular volumen y costo
    if (tipoEncomienda === "sobre") {
      volumen = ancho * largo; // Volumen en cm²
      costoBase = 5; // Costo base para sobres
    } else if (tipoEncomienda === "paquete") {
      volumen = ancho * largo * grosor; // Volumen en cm³
      costoBase = 10; // Costo base para paquetes
    }

    // Fórmula para calcular el costo final
    const costoFinal = costoBase + peso * 2 + volumen * 0.01;

    setCosto(costoFinal.toFixed(2)); // Redondear a dos decimales
  };

  return (
    <div className="pt-[65px]">
      {/* Imagen de portada */}
      <div>
        <img
          src={logo2}
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
          Calcule el costo de su encomienda ingresando las características del envío. Seleccione si se trata de un paquete o sobre e indique las dimensiones correspondientes.
        </p>

        {/* Formulario de cotización */}
        <form className="bg-white p-8 shadow-md rounded" onSubmit={calcularCosto}>
          {/* Imagen decorativa */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-red-700 border-4 border-red-700 flex items-center justify-center">
              <img src={cotizacion} alt="Cotización" className="w-16 h-16" />
            </div>
          </div>

          {/* Tipo de Encomienda */}
          <h2 className="text-xl font-medium mb-4">Tipo de Encomienda</h2>
          <div className="mb-6">
            <label className="block font-normal text-sm mb-2">¿Qué tipo de encomienda desea enviar?</label>
            <div className="flex items-center gap-4">
              <div>
                <input
                  type="radio"
                  id="paquete"
                  name="tipoEncomienda"
                  value="paquete"
                  onChange={(e) => setTipoEncomienda(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="paquete" className="font-light text-sm">Paquete</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="sobre"
                  name="tipoEncomienda"
                  value="sobre"
                  onChange={(e) => setTipoEncomienda(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="sobre" className="font-light text-sm">Sobre</label>
              </div>
            </div>
          </div>

          {/* Detalles dinámicos según selección */}
          {tipoEncomienda === "sobre" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block font-normal text-sm mb-1">Peso (kg)</label>
                <input
                  type="number"
                  value={peso}
                  onChange={(e) => setPeso(Number(e.target.value))}
                  className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                  placeholder="Peso en kilogramos"
                />
              </div>
              <div>
                <label className="block font-normal text-sm mb-1">Ancho (cm)</label>
                <input
                  type="number"
                  value={ancho}
                  onChange={(e) => setAncho(Number(e.target.value))}
                  className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                  placeholder="Ancho en centímetros"
                />
              </div>
              <div>
                <label className="block font-normal text-sm mb-1">Largo (cm)</label>
                <input
                  type="number"
                  value={largo}
                  onChange={(e) => setLargo(Number(e.target.value))}
                  className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                  placeholder="Largo en centímetros"
                />
              </div>
            </div>
          )}

          {tipoEncomienda === "paquete" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block font-normal text-sm mb-1">Peso (kg)</label>
                <input
                  type="number"
                  value={peso}
                  onChange={(e) => setPeso(Number(e.target.value))}
                  className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                  placeholder="Peso en kilogramos"
                />
              </div>
              <div>
                <label className="block font-normal text-sm mb-1">Ancho (cm)</label>
                <input
                  type="number"
                  value={ancho}
                  onChange={(e) => setAncho(Number(e.target.value))}
                  className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                  placeholder="Ancho en centímetros"
                />
              </div>
              <div>
                <label className="block font-normal text-sm mb-1">Largo (cm)</label>
                <input
                  type="number"
                  value={largo}
                  onChange={(e) => setLargo(Number(e.target.value))}
                  className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                  placeholder="Largo en centímetros"
                />
              </div>
              <div>
                <label className="block font-normal text-sm mb-1">Grosor (cm)</label>
                <input
                  type="number"
                  value={grosor}
                  onChange={(e) => setGrosor(Number(e.target.value))}
                  className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                  placeholder="Grosor en centímetros"
                />
              </div>
            </div>
          )}

          {/* Botón */}
          <button
            type="submit"
            className="bg-red-700 text-white font-semibold px-6 py-3 rounded hover:bg-red-600"
          >
            Calcular Costo
          </button>

          {/* Mostrar Costo */}
          {costo && (
            <div className="mt-6 text-center text-xl text-red-700 font-semibold">
              Costo Estimado: S/ {costo}
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default Encomiendas;
