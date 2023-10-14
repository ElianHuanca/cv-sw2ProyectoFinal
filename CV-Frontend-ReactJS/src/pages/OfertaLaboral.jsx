import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const OfertasLaborales = () => {
 const [ofertas, setOfertas] = useState([]);

 useEffect(() => {
    const obtenerOfertas = async () => {
      const respuesta = await axios.get('https://mogianoHaceLosEndpoint');
      setOfertas(respuesta.data);
    };

    obtenerOfertas();
 }, []);

 return (
    <div style={{ backgroundColor: '#dedec8', padding: '10px' }}>
      {ofertas.length > 0 ? (
        ofertas.map((oferta, index) => (
          <div key={index} className="oferta-card">
              <div className="oferta-card-img">
                     <img src="{oferta.img}" alt="" width="100" height="100" />
              </div>
            <h3>{oferta.titulo}</h3>
            <p>{oferta.descripcion}</p>
            <p>{oferta.ubicacion}</p>
            <p>{oferta.estado}</p>
          </div>
        ))
      ) : (
        <div className="oferta-card">
          <div className="oferta-card-img">
            <img src="/assets/ejemplo.jpg" alt="" width="100" height="100" />
          </div>
          <div className="oferta-card-content">
            <h3>Titulo</h3>
            <p>descripcion</p>
            <p>ubicacion</p>
           <p>activo</p>
          </div>
        </div>
        // <div className="no-ofertas">No hay ofertas laborales</div>
      )}
    </div>
 );
};

export default OfertasLaborales;