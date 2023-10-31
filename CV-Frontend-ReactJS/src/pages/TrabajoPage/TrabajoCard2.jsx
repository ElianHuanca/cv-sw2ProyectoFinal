import React from 'react'



export const TrabajoCard2 = ({ trabajo }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* <img
        src="https://via.placeholder.com/150"
        alt="Trabajo Image"
        className="w-full h-32 object-cover"
      /> */}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{trabajo.titulo}</h3>
        <p className="text-gray-500">{trabajo.descripcion}</p>
        <p className="text-gray-600 mt-2">Requisitos: {trabajo.requisitos}</p>
        <p className="text-gray-600 mt-2">Empresa: {trabajo.empresa}</p>
      </div>
    </div>
  );
};


