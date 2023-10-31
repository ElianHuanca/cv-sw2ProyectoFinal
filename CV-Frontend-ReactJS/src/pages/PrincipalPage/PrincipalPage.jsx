import React from 'react'
import { Cards } from './components/Cards'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
export const PrincipalPage = () => {
  return (
    <div className='bg-[#000300]'>      
      <Navbar />
      <Hero />
      <Cards />      
    </div>
  )
}
