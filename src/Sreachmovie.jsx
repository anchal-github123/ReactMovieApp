import Cards from './Cards'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useLoaderData, useParams } from 'react-router-dom'
export default function Sreachmovie() {

    // const moviename=useParams()
    const data=useLoaderData()
    console.log(data)
 
    const navigate=useNavigate()
    console.log(navigate)
 
return(
    <section>
    <div className="container grid place-content-center">
 <button onClick={()=>navigate(-1)} className='text-2xl shadow-lg max-w-44 p-2 bg-red-600'>Back to Movies</button>
 
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 mt-5">
    {
      data.Search.map((movie,ind)=>{
        return(
          <Cards key={ind} movie={movie}></Cards>
        )
       
      })
    }
  
    </div>
  
    </div>
  </section>
  )
   
}
