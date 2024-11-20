import "../../index.css";
import React from 'react';
import videoSrc from '../../assets/video6.mp4'; // Asegúrate de que la ruta del video sea correcta
import { FaSearch } from 'react-icons/fa'; // Importa el ícono de búsqueda
import img01 from '../../assets/joven.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faBox } from '@fortawesome/free-solid-svg-icons';
import { faTicketAlt, faBus,faUsers,faCar,faLaptop,faGear } from '@fortawesome/free-solid-svg-icons';
import CountUp from "react-countup";
import videoCerna from '../../assets/Cerna.mp4';

const Hero = () => {
  const stats = [
    {
      title: "Años de Experiencia",
      value: 10,
      icon: "airplane",
      bgColor: "bg-gray-500",
      suffix: "+",
    },
    {
      title: "Vehiculos Propios",
      value: 15,
      icon: "ship",
      bgColor: "bg-gray-500",
    },
    {
      title: "Clientes satisfechos",
      value: 350,
      icon: "truck",
      bgColor: "bg-gray-500",
      suffix: "+",
    },
    {
      title: "Personal",
      value: 10,
      icon: "warehouse",
      bgColor: "bg-gray-500",
    },
  ];
  return (
    <div>
      {/* Sección del video en pantalla completa */}
      <section className="relative w-full min-h-screen bg-center flex items-center justify-center">
        {/* Video de fondo */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
        />
        
              {/* Contenedor principal de contenido */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-5x1 p-4 h-full h-200 ">
        {/* Cuadro de búsqueda (lado izquierdo) */}
        <div className="flex flex-col items-start bg-black bg-opacity-40 p-6 size-1/3 mt-56">
          <h6 className="text-4xl font-semibold mb-4 text-white">Tu viaje y tus envíos, en un solo lugar</h6>
          <h2 className="text-base font-extralight mb-4 text-white">
            Facilitamos tus viajes y envíos con rapidez, seguridad y comodidad. ¡Todo lo que necesitas, a un clic de distancia!
          </h2>
          {/* Botón de "Read More" */}
          <button className="mt-4  rounded-full button_rojo">
            Ver Mas
          </button>
        </div>
      </div>
      </section>

      
      <section className="w-full bg-portada pl-24 pt-8 pr-24 text-center">
          <div className="flex flex-col pt-12 justify-center items-center ">
     
            <div className="w-16 h-1 bg-red-500 mb-4 justify-center text-center"></div>
            <h2 className="text-4xl font-medium mb-4 text-red-600 pb-8 ">Titulo 00</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pb-8">
              {/* Botón 1: Experiencia Comprobada */}
              <div className="flex items-center ">
                <button className="w-28 h-24 rounded-[10px] bg-red-600 text-white text-lg font-semibold hover:bg-red-600 transition duration-300">
                <FontAwesomeIcon icon={faGear} className="w-16 h-12"/> {/* Icono para "Experiencia Comprobada" */}
                </button>
                <span className="text-9x1 font-light text-gray-800">Experiencia Comprobada</span>
              </div>

              {/* Botón 2: Flota Propia */}
              <div className="flex items-center pr-15px">
                <button className="w-28 h-24  rounded-[10px] bg-red-600 text-white text-lg font-semibold hover:bg-blue-600 transition duration-300">
                <FontAwesomeIcon icon={faCar} className="w-16 h-12"/>{/* Icono para "Flota Propia" */}
                </button>
                <span className="text-9x1  font-light text-gray-800">Flota Propia</span>
              </div>

              {/* Botón 3: Clientes Satisfechos */}
              <div className="flex items-center">
                <button className="w-28 h-24  rounded-[10px] bg-red-600 text-white text-lg font-semibold hover:bg-green-600 transition duration-300">
                <FontAwesomeIcon icon={faUsers} className="w-16 h-12"/> {/* Icono para "Clientes Satisfechos" */}
                </button>
                <span className="text-9x1  font-light text-gray-800">Clientes Satisfechos</span>
              </div>

              {/* Botón 4: Innovación Tecnológica */}
              <div className="flex items-center">
                <button className="w-28 h-24  rounded-[10px] bg-red-600 text-white text-lg font-semibold hover:bg-yellow-600 transition duration-300">
                <FontAwesomeIcon icon={faLaptop} className="w-16 h-12"/>{/* Icono para "Innovación Tecnológica" */}
                </button>
                <span className="text-9x1  font-light text-gray-800">Innovación Tecnológica</span>
              </div>
            </div>
          </div>
      </section>

     
      <section className="w-full py-10  pl-24 pt-20 pr-24 ">
        <div className="flex flex-col md:flex-row items-center">
          {/* Lado izquierdo: Video */}
          <div className="flex-1 mb-6 md:mb-0">
            <video 
              className="w-full h-auto" // Elimina el borde aquí si no lo quieres
              src={videoCerna}
              autoPlay
              loop
              muted
              controls // Agregado para que puedas controlar la reproducción
            />
          </div>

          {/* Lado derecho: Texto y estadísticas */}
          <div className="flex-1 flex flex-col justify-center items-start pl-8 ">
            {/* Línea roja */}
            <div className="w-16 h-1 bg-red-500 mb-4"></div>

            {/* Título */}
            <h2 className="text-4xl font-medium mb-4 text-red-600">Titulo 01</h2>
            <p className="text-base font-medium mb-4  pb-4">No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.</p>

            {/* Contenedor de las estadísticas */}
            <div className="grid grid-cols-4 gap-6 w-full ">
              {/* Fila 1: Estadísticas */}
              {stats.slice(0, 2).map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-2 text-white ${stat.bgColor} w-[120px] h-[120px] mx-auto `}
                >
                  {/* Ícono */}
                  <div className="text-4xl mb-2">
                    <i className={`fas fa-${stat.icon}`} />
                  </div>
                  {/* Valor dinámico */}
                  <div className="text-4xl font-bold">
                    <CountUp start={0} end={stat.value} duration={3} suffix={stat.suffix || ""} />
                  </div>
                  {/* Título */}
                  <p className="text-sm mt-2 text-center">{stat.title}</p>
                </div>

                
                
                
              ))}

              {/* Fila 2: Estadísticas */}
              {stats.slice(2, 4).map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-2 text-white ${stat.bgColor}  w-[120px] h-[120px]  mx-auto `}
                >
                  {/* Ícono */}
                  <div className="text-4xl mb-2">
                    <i className={`fas fa-${stat.icon}`} />
                  </div>
                  {/* Valor dinámico */}
                  <div className="text-4xl font-bold">
                    <CountUp start={0} end={stat.value} duration={3} suffix={stat.suffix || ""} />
                  </div>
                  {/* Título */}
                  <p className="text-sm mt-2 text-center">{stat.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      
      <section className="w-full bg-portada pl-24 pt-8 pr-24 text-center">
        <div className="flex flex-col ">
          {/* Línea roja */}
          <div className="w-16 h-1 bg-red-500 mb-4"></div>
          {/* Título */}
          <h2 className="text-4xl text-left font-medium mb-4 text-red-600">Nuestros Servicios</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 ">
          {/* Primera columna con texto y tabla */}
          <div className="flex flex-col">
            {/* Texto */}
            <div>
              <p className="text-lg font-extralight text-justify">
                Contamos con un equipo comprometido con la satisfacción del cliente, siempre enfocado en ofrecer lo mejor y garantizar una experiencia excepcional. 
              </p>
            </div>

            <div className="mt-10">
              <table className="min-w-full table-auto bg-portada text-justify">
                
                <tbody>
                  {/* Fila para Logística Corporativa */}
                  <tr>
                    <td className="px-4 py-4 pb-6 pt-15 bg-plomo-0 bg-opacity-5">
                      <div className="flex items-center gap-6">
                        <FontAwesomeIcon icon={faTruck} className="h-16 w-16 text-cerna" />
                        <div>
                          <h1 className=" font-semibold text-gray-800 pb-2 ">Logística Corporativa</h1>
                          <p className="text-base font-extralight">
                            Soluciones personalizadas de logística para empresas, optimizando la cadena de suministro y adaptándonos a las necesidades específicas de cada cliente.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr><br />
                  {/* Fila para Encomiendas */}
                  <tr>
                    <td className="px-4 py-4 pb-6 bg-plomo-0 bg-opacity-5">
                      <div className="flex items-center gap-6">
                        <FontAwesomeIcon icon={faBox} className="h-16 w-16 text-cerna" />
                        <div>
                          <h4 className="font-semibold text-gray-800 pb-2">Encomiendas</h4>
                          <p className="text-base font-extralight">
                            Ofrecemos soluciones de envío de mercancías con precios competitivos, garantizando la entrega segura y puntual.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr><br />
                  {/* Fila para Pasajes */}
                  <tr>
                    <td className="px-4 py-4 pb-6 bg-plomo-0 bg-opacity-5" >
                      <div className="flex items-center gap-6">
                        <FontAwesomeIcon icon={faTicketAlt} className="h-16 w-16 text-cerna" />
                        <div>
                          <h4 className="font-semibold text-gray-800 pb-2">Pasajes</h4>
                          <p className="text-base font-extralight">
                            Sistema de emisión de pasajes fácil y rápido, brindando opciones flexibles y un excelente servicio al cliente.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr><br />
                  {/* Fila para Transporte Terrestre */}
                  <tr>
                    <td className="px-4 py-4 pb-6 bg-plomo-0 bg-opacity-5">
                      <div className="flex items-center gap-6">
                        <FontAwesomeIcon icon={faBus} className="h-16 w-16  text-cerna" />
                        <div>
                          <h4 className="font-semibold text-gray-800 pb-2">Transporte Terrestre</h4>
                          <p className="text-base font-extralight">
                            Servicios de transporte terrestre eficientes y seguros, tanto para envio de encomiendas como para pasajeros.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr><br />
                </tbody>
              </table>
            </div>

          
          </div>

          {/* Segunda columna con la imagen */}
          <div className="flex flex-col items-center justify-center ">
            <img
              src={img01}
              alt="Imagen 1"
              className="size-min"
            />
          </div>
        </div>
      </section>


     


    </div>
  );
};

export default Hero;
