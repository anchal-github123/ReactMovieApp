export const getMoviesdata=async()=> {
  const id=import.meta.env.VITE_APIDATA
  // const name=params.moviename

try{
  const response = await fetch(` http://www.omdbapi.com/?i=tt3896198&apikey=${id}&s="Titanic"`);
  const data = await response.json();
  return data;
}
catch(error)
{
  console.log(error)

}
}