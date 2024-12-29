export const getMoviesdetails=async({params})=> {
    // console.log(params)
    const id=import.meta.env.VITE_APIDATA
    const mvid=params.movieID
    console.log(mvid)
  
  try{
    const response = await fetch(` http://www.omdbapi.com/?i=${mvid}&apikey=${id}`);
    const data = await response.json();
    console.log(data)
    return data;
  }
  catch(error)
  {
    console.log(error)
  
  }
  }