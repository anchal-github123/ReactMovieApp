import React from 'react'
import { useLoaderData } from 'react-router-dom';
function MovieDetails() {
    
  const loader=useLoaderData()
  console.log(loader)
 
  return (
    <section>
  
  <div className='flex items-center gap-2 shadow-lg '>
    <img src={loader.Poster} alt="movieimage" height={200} width={200}></img>
    <div className='flex flex-col'>
    <p className='text-2xl'>{loader.Title}</p>
    <p>ACTORS:{loader.Actors}</p>
    <p>RATING:{loader.Ratings[0].Value}</p>
    <p>RELEASED:{loader.Released}</p>
    </div>

  </div>
 </section>
  )
}

export default MovieDetails;


