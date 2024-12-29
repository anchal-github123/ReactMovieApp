import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    
    <section className='text-2xl md:text-6xl'>
        The page You were looking for could not found
        <button className='border text-xl bg-blue-300 p-2'> <NavLink to="/">Go to Homepage</NavLink></button>
       
    </section>
  )
}
