import React from "react";

const Testimonial = () => {
  const plans = [
    {
      id: 1,
      title: "Tour de la Ciudad",
      description: "Descubre los lugares más icónicos de Cartagena con nuestro recorrido guiado.",
      price: "$50",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Playas Paradisíacas",
      description: "Disfruta de un día de sol y playa en las mejores playas de la región.",
      price: "$80",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Recorrido Histórico",
      description: "Sumérgete en la historia colonial de Cartagena con nuestro tour histórico.",
      price: "$60",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Planes de Turismo en Cartagena</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover object-center" src={plan.image} alt={plan.title} />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-bold">{plan.price}</span>
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Reservar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

