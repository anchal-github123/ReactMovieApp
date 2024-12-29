import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { AppLayout } from "./AppLayout";
import Movies from "./Movies";
import Error from "./Error";
import { getMoviesdata } from "./GetAPIdata";
import MovieDetails from "./MovieDetails";
import { getMoviesdetails } from "./GetmovieDetails";
import Sreachmovie from "./Sreachmovie";
import { getmovieslist } from "./Sreachmovieitem";
export const App=()=>{
  const router=createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      errorElement:<Error></Error>,
      children:[
        {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/About',
        element:<About></About>
      },
      {
        path:'/Movies',
        element:<Movies/>,
        loader:getMoviesdata,
      },
      {
        path:'/Movies/MovieDetails/:movieID',
        element:<MovieDetails/>,
        loader:getMoviesdetails,
      },
      {
        path:'/Movies/:moviename',
        element:<Sreachmovie/>,
        loader:getmovieslist,
      },
      
    ],


    },
   
  ])

return <RouterProvider router={router}></RouterProvider>
}

