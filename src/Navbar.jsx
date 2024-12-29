import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
function Navbar() {
    const [togglebtn,settogglebtn]=useState(false)
    const navdata=[
        {
        name:"Home",
        link:"/"
    },
    {
        name:"About",
        link:"/About"
    },
    {
        name:"Movies",
        link:"/Movies"
    },
]
function handelnavmenu()
{
    settogglebtn(!togglebtn)

}
  return (
   
   <nav className='h-20 pt-2 z-30'>
    <section>
    <div className='container flex items-center justify-between z-10 static top-1'>
        <div className='text-3xl'>MV/masti</div>
        <ul className='hidden md:flex gap-10'>
        {
            navdata.map((ele,ind)=><li key={ind}><NavLink to={ele.link} className={({isActive})=>isActive?"text-blue-400":"text-black"}>{ele.name}</NavLink></li>)
        }

        </ul>
        <div className='md:hidden text-3xl' onClick={handelnavmenu}><FaBars /></div>
    </div>
    {/* Mobile view nav bar */}
    {
        togglebtn&&<div>
        <ul className='bg-white z-10 border md:hidden relative top-10 p-10 '>
        {
            navdata.map((ele,ind)=><li key={ind} className='text-white'><NavLink to={ele.link} className={({isActive})=>isActive?"text-blue-400":"text-black"}>{ele.name}</NavLink></li>)
        }

        </ul>

        </div>
    }

    </section>
   </nav>
  )
}

export default Navbar
