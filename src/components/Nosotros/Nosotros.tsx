import React from "react";
import "../../index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo2 from "../../assets/img03.jpg";
import logo3 from "../../assets/img02.jpg";
import gerenteFoto from "../../assets/gerente02.jpg";
import misionFoto from "../../assets/mision.jpg";
import visionFoto from "../../assets/vision.jpg";
import empresaFoto from "../../assets/empresa.jpg";
// Fotos de los trabajadores
import trabajador1 from "../../assets/trabajador01.jpg";
import trabajador2 from "../../assets/trabajador02.jpg";
import trabajador3 from "../../assets/trabajdor03.jpg";
import trabajador4 from "../../assets/trabajador04.jpg";
import trabajador5 from "../../assets/trabajador05.jpg";
import trabajador6 from "../../assets/trabajador06.jpg";
import trabajador7 from "../../assets/trabajador07.jpg";
import trabajador8 from "../../assets/trabajador08.jpg";

const Nosotros = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="pt-[65px]"> {/* Ajusta la altura del navbar */}
      {/* Carrusel */}
      <Slider {...sliderSettings} className="h-50">
        <div>
          <img
            src={logo2}
            alt="Transportes Cerna 2"
            className="w-full h-[580px] object-cover"
          />
        </div>
        <div>
          <img
            src={logo3}
            alt="Transportes Cerna 3"
            className="w-full h-[580px] object-cover"
          />
        </div>
      </Slider>

      {/* Saludo del Gerente */}
      <section className="py-20 bg-gray-100 pl-24 pt-20 pr-24">
        <div className="flex flex-col items-center ">
          {/* Línea roja */}
          <div className="w-16 h-1 bg-red-500 mb-4"></div>
          {/* Título */}
          <h2 className="text-4xl text-left font-medium mb-4 text-red-600 pb-8">Nosotros</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Texto del saludo */}
          <div>
            <h2 className="text-3xl font-semibold text-black-800 ">Gerente General</h2>
            <p className="mt-6 text-black leading-relaxed text-justify font-light">
              En <strong>Transportes Cerna S.R.L.</strong>, nuestra prioridad es ofrecer soluciones
              confiables y eficientes para satisfacer las necesidades de nuestros clientes. 
              Estamos comprometidos con la excelencia y la innovación, buscando siempre superar 
              las expectativas. ¡Gracias por confiar en nosotros como su socio estratégico!
            </p>
            <p className="mt-4 text-gray-600 font-semibold">- Pablo Cerna Medina, Gerente General</p>
          </div>
          {/* Foto del Gerente */}
          <div className="flex justify-center">
            <img
              src={gerenteFoto}
              alt="Gerente General"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Descripción de Transporte Cerna */}
      <section className="py-16 bg-red-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen de la empresa */}
          <div className="flex justify-center">
            <img
              src={empresaFoto}
              alt="Transportes Cerna"
              className="w-72 h-72 object-cover rounded-full border-4 border-gray-300"
            />
          </div>
          {/* Texto de la descripción */}
          <div>
            <div className="w-16 h-1 bg-white mb-4"></div>
            <h2 className="text-3xl font-bold text-white">Transportes Cerna S.R.L</h2>
            <p className="mt-6 text-white leading-relaxed text-justify font-extralight">
              Desde nuestros inicios, en <strong>Transportes Cerna S.R.L.</strong>, nos hemos dedicado a ofrecer
              servicios de transporte y logística confiables y seguros. Gracias a nuestra experiencia, 
              flota moderna y equipo altamente capacitado, garantizamos soluciones que se adaptan a las 
              necesidades de nuestros clientes. Nuestro compromiso es seguir creciendo y mejorando para 
              liderar el sector de transporte y logística.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Misión */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={misionFoto}
              alt="Misión"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black-800">Nuestra Misión</h3>
            <p className="mt-4 text-black font-light text-justify">
              Ofrecer servicios de transporte y logística de alta calidad, garantizando la 
              seguridad, puntualidad y satisfacción de nuestros clientes, mientras promovemos 
              un ambiente laboral ético y responsable con el medio ambiente.
            </p>
          </div>
          {/* Visión */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={visionFoto}
              alt="Visión"
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-xl font-semibold text-black-800">Nuestra Visión</h3>
            <p className="mt-4 text-black font-light text-justify">
              Ser reconocidos como líderes en el sector de transporte y logística a nivel nacional, 
              destacándonos por nuestra innovación, tecnología avanzada y compromiso con el desarrollo 
              sostenible.
            </p>
          </div>
        </div>
      </section>

      {/* Trabajadores */}
      <section className="py-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-black-800 mb-8">Nuestro Equipo</h2>
          <div className="grid grid-cols-4 gap-2 pb-8">
            <img
              src={trabajador1}
              alt="Trabajador 1"
              className="w-full h-48 object-cover rounded-lg border-1 border-gray-300 shadow-md"
            />
            <img
              src={trabajador2}
              alt="Trabajador 2"
              className="w-full h-48 object-cover rounded-lg border-1 border-gray-300 shadow-md"
            />
            <img
              src={trabajador3}
              alt="Trabajador 3"
              className="w-full h-48 object-cover rounded-lg border-1 border-gray-300 shadow-md"
            />
            <img
              src={trabajador4}
              alt="Trabajador 4"
              className="w-full h-48 object-cover rounded-lg border-1 border-gray-300 shadow-md"
            />
            <img
              src={trabajador5}
              alt="Trabajador 5"
              className="w-full h-48 object-cover rounded-lg border-1 border-gray-300 shadow-md"
            />
            <img
              src={trabajador6}
              alt="Trabajador 6"
              className="w-full h-48 object-cover rounded-lg border-1 border-gray-300 shadow-md"
            />
            <img
              src={trabajador7}
              alt="Trabajador 7"
              className="w-full h-48 object-cover rounded-lg border-1 border-gray-300 shadow-md"
            />
            <img
              src={trabajador8}
              alt="Trabajador 8"
              className="w-full h-48 object-cover rounded-lg border-1 border-gray-300 shadow-md"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Nosotros;
