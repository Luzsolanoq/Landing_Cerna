import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import mapa from "../../assets/logo_rojo.png"; // Imagen del mapa o un iframe de Google Maps


const Transportepersonal = () => {
  const faqs = [
    {
      pregunta: "¿Cómo puedo realizar un seguimiento de mi envío?",
      respuesta: "Puedes ingresar el número de rastreo en la sección de seguimiento en nuestra página principal.",
    },
    {
      pregunta: "¿Cuáles son los tiempos de entrega promedio?",
      respuesta: "Los tiempos de entrega varían según la distancia y el tipo de envío, generalmente entre 1 a 5 días hábiles.",
    },
    {
      pregunta: "¿Qué tipos de encomiendas aceptan?",
      respuesta: "Aceptamos sobres, paquetes pequeños y grandes, sujetos a nuestras políticas de transporte.",
    },
    {
      pregunta: "¿Qué hacer si mi encomienda no ha llegado?",
      respuesta: "Puedes contactarnos directamente al WhatsApp o correo para verificar el estado de tu envío.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-8 md:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-red-500">Contáctanos</h2>
        <p className="text-gray-600 mt-4">Estamos aquí para ayudarte con cualquier duda o consulta.</p>
      </div>

      {/* Preguntas frecuentes */}
      <div className="mb-16">
        <h3 className="text-2xl font-medium text-red-500 mb-6">Preguntas Frecuentes</h3>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h4 className="text-lg font-semibold text-gray-700">{faq.pregunta}</h4>
              <p className="text-gray-600 mt-2">{faq.respuesta}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ubicación */}
      <div className="mb-16">
        <h3 className="text-2xl font-medium text-red-500 mb-6">Nuestra Ubicación</h3>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Mapa */}
          <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5805.510577573364!2d-79.00751047852145!3d-8.097373099097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad163cfd0d1a99%3A0xf23c77572a7b8690!2sTransportes%20CERNA%20SRL.!5e0!3m2!1ses!2spe!4v1732101859532!5m2!1ses!2spe"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Ubicación"
          ></iframe>
          </div>
          {/* Dirección */}
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-4">
              📍 Calle Ejemplo 123, Distrito X, Ciudad Y, País Z.
            </p>
            <p className="text-gray-600">Horario de atención: Lunes a Viernes de 9:00 AM a 6:00 PM.</p>
          </div>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="text-center">
        <h3 className="text-2xl font-medium text-red-500 mb-6">Síguenos en Redes Sociales</h3>
        <div className="flex justify-center gap-8">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-3xl hover:text-green-600"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-3xl hover:text-pink-600"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Transportepersonal
