import React from 'react'
import camion from "../../assets/camion.jpg";
const seguimientos = () => {
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
          <h2 className="text-4xl text-left font-medium mb-4 text-red-500">Rastreo de Carga</h2>
        </div>
        <p className="font-light text-justify mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolores fugiat, vero asperiores quaerat quod iure numquam sunt! A veniam vero rerum amet itaque ipsa voluptatibus non autem perspiciatis inventore?
        </p>

        {/* Formulario de cotización */}
        <form className="bg-white p-8 shadow-md rounded">
          {/* Datos Personales / Empresariales */}
          <h2 className="text-xl font-medium mb-4">Información</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mr-15">
            <div>
              <label className="block font-normal text-sm mb-1">Número de Rastreo</label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none font-light"
                placeholder="Número de Rastreo"
              />
            </div>
           
          
          </div>

          {/* Captcha */}
          <div className="mb-4 flex items-center">
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
            Buscar
          </button>
        </form>
      </section>
    </div>
  )
}

export default seguimientos
