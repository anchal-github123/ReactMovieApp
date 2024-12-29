import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards";
import { useState } from "react";
import { Button } from "@mui/material";

const Movies = () => {
  const [val,setVal]=useState()

  const loader=useLoaderData()
 

  function handelInputFiled(e)
  {
    setVal(e.target.value)
  }


return (
  <section>
  <div className="container grid place-content-center">
  <div className="flex items-center">
  <input type="text" placeholder="Enter Moivename" value={val} onChange={(e)=>handelInputFiled(e)}></input>
  <NavLink to={`/movies/${val}`} className="border p-5 bg-white rounded-s-md"><button>Enter</button></NavLink>
  </div>
 
  {/* <button onClick={handelEnterBtn}>Enter</button> */}
  <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 mt-5">
  {
    loader.Search.map((movie,ind)=>{
      return(
        <Cards key={ind} movie={movie}></Cards>
      )
     
    })
  }

  </div>

  </div>
</section>
)

 
 
};

export default Movies;
