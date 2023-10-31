import React, { useEffect, useState } from 'react'
import { Navbar } from '../HomePage/Navbar'
import { getTrabajos } from "../../helpers/getTrabajos";
import { TrabajoCard } from './TrabajoCard';
import { TrabajoCard2 } from './TrabajoCard2';

export const TrabajoPage = () => {

    const [trabajos, setTrabajos] = useState([]);

    useEffect(() => {
        async function getTrabajo() {
            const ev = await getTrabajos();
            setTrabajos(ev);
            console.log(ev);
        }
        const delay = 2000; // Retraso de 2 segundos (puedes ajustar este valor según tus necesidades)
        const timer = setTimeout(() => {
            getTrabajo();
        }, delay);

        // Limpiamos el temporizador al desmontar el componente
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='bg-[#000300]'>
            <Navbar />
            
            <div className="container mx-auto px-20 py-20 bg-gray-100 hover:bg-gray-200">                
                <div className='grid grid-cols-3 gap-3'>
                    {trabajos.map((tbj) => (
                        <TrabajoCard2 key={tbj.id} trabajo={tbj} />
                    ))}
                </div>
            </div>

        </div>
    );
}
