import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../store/auth/thunks';

export const HomePage = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <button
      className="border-none bg-transparent text-black mr-4"
      onClick={onLogout}
    >Cerrar sesion
    </button>
  );
}
