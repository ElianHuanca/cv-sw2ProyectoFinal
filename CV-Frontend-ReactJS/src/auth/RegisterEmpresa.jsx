import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startCreatingEmpresaNodeJs } from '../store/auth/thunks';
import { SelectOption } from './SelectOption';
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
const stripePromise = loadStripe("<your public key here>");

const RegisterEmpresa = () => {
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();
  const isAuthenticating = false;
  const { nombre, password, direccion, onInputChange } = useForm({
    nombre: "",
    password: "",
    direccion: ""
  });

  const options = [
    { value: 'pequena', label: 'Empresa Pequeña' },
    { value: 'mediana', label: 'Empresa Mediana' },
    { value: 'grande', label: 'Empresa Grande' },
  ];

  const [selectedOption, setSelectedOption] = useState('pequena');
  const [precio, setPrecio] = useState(40);
  const handleOptionChange = (event) => {
    if (event.target.value === 'pequena')
      setPrecio(40);
    else if (event.target.value === 'mediana')
      setPrecio(90);
    else if (event.target.value === 'grande')
      setPrecio(150);
    setSelectedOption(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startCreatingEmpresaNodeJs({ nombre, password, direccion, tipo:selectedOption }));
  };

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <div className='absolute w-full h-full object-cover bg-gray-500 mix-blend-overlay'>
      </div>
      <div className='flex justify-center items-center h-full'>
        <form onSubmit={onSubmit} className='max-w-[400px] w-full mx-auto bg-white p-8'>
          <h2 className='text-4xl font-bold text-center py-4'>Register</h2>

          <div className='flex flex-col mb-4'>
            <label>Razon Social</label>
            <input className='border relative bg-gray-100 p-2' type="text" value={nombre} onChange={onInputChange} name="nombre" required />
          </div>

          <div className='flex flex-col mb-4'>
            <label>Password</label>
            <input className='border relative bg-gray-100 p-2' type="password" value={password} onChange={onInputChange} name="password" required />
          </div>

          <div className='flex flex-col mb-4'>
            <label>Direccion:</label>
            <input className='border relative bg-gray-100 p-2' type="text" value={direccion} onChange={onInputChange} name="direccion" required />
          </div>

          <div className='flex flex-col mb-4'>
            <label>Tipo Empresa:</label>
            <SelectOption
              options={options}
              value={selectedOption}
              onChange={handleOptionChange}
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label>Precio: {precio}$us</label>
            <CardElement />
          </div>

          <button disabled={isAuthenticating} className='w-full py-3 mt-8 bg-[#00df9a] hover:bg-[#00dfaf] relative text-white' type="submit">Sign In</button>
          <p className='text-center mt-8'>Ya Tienes Cuenta?</p>
          <Link to="/auth/login" className="text-center block relative">
            <span className="hover:text-slate-600">Ingresa</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

function App() {
  return (
    <Elements stripe={stripePromise}>
      <RegisterEmpresa />
    </Elements>
  );
}

export default App;