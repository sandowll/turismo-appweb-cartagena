import React from "react";
import { FaMapMarkerAlt, FaUmbrellaBeach, FaLandmark } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaMapMarkerAlt />,
      title: "Tour de la Ciudad",
      description: "Descubre los lugares más icónicos de Cartagena con nuestro recorrido guiado.",
    },
    {
      id: 2,
      icon: <FaUmbrellaBeach />,
      title: "Playas Paradisíacas",
      description: "Disfruta de un día de sol y playa en las mejores playas de la región.",
    },
    {
      id: 3,
      icon: <FaLandmark />,
      title: "Recorrido Histórico",
      description: "Sumérgete en la historia colonial de Cartagena con nuestro tour histórico.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="flex items-center justify-center bg-gray-200 w-16 h-16 rounded-full mx-auto mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#921212] text-center">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

