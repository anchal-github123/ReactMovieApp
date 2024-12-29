import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
export const AppLayout=()=>{
  const loadingstage=useNavigation();
  if(loadingstage.state=="loading")return <div className="text-2xl">Loading....</div>
    return(<>
         <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
    </>)
      
    
}