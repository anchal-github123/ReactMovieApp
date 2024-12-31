import axios from "axios"
// import { useEffect } from "react";
// useEffect(())
export const getMoviesdata=async()=> {
  const id=import.meta.env.VITE_APIDATA
  // const name=params.moviename

try{
  const response = await axios.get(` http://www.omdbapi.com/?i=tt3896198&apikey=${id}&s="Titanic"`);
  // const data = await response.json();
  // console.log(response.data)
  return response.data;
}
catch(error)
{
  console.log(error.message)

}
}

