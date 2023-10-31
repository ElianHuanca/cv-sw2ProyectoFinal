import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    };

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <Link to="/trabajos" >  <li className='p-4'>OfertasLaborales</li> </Link>
                <li className='p-4'>MisOfertas</li>
                <li className='p-4 text-black'><button className='bg-white rounded p-1' onClick={onLogout}>LogOut</button></li>                
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Trabajos</li>
                <li className='p-4 border-b border-gray-600'>Mis Ofertas</li>
                <li className='p-4 border-b border-gray-600'>About</li>                
            </ul>
        </div>
    );
}
