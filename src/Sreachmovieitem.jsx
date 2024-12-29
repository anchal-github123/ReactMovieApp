export const getmovieslist=async({params})=> {
const id=import.meta.env.VITE_APIDATA
    const name=params.moviename;
    console.log(name)
  try{
    const response = await fetch(` http://www.omdbapi.com/?i=tt3896198&apikey=${id}&s=${name}`);
    const data = await response.json();
 
    return data;
  }
  catch(error)
  {
    console.log(error)
  
  }
  }