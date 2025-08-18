import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigator = useNavigate()
  return (
    <div  className='flex  bg-gray-300 h-14 items-center justify-between'>
        <ul className='flex'>
            <NavLink to={"/"} className={({isActive})=>isActive&&"text-red-500"}><li className='p-5 m-2 font-sans font-bold'>Home</li></NavLink>
             <NavLink to={"/products"} className={({isActive})=>isActive&&"text-red-500"}><li className='p-5 m-2 font-sans font-bold'>Products</li></NavLink>
             <NavLink to={"/about"} className={({isActive})=>isActive&&"text-red-500"}><li className='p-5 m-2 font-sans font-bold'>About</li></NavLink>
             <NavLink to={"/contact"} className={({isActive})=>isActive&&"text-red-500"}><li className='p-5 m-2 font-sans font-bold'>Contact</li></NavLink>
        </ul>

        <button
         className='mr-8 pb-1 hover:bg-gray-600 h-8 bg-gray-700 text-white w-28 border-2 rounded-2xl'
         onClick={()=>navigator("about")}
         >
          
          Get Started
        </button>
    </div>
  )
}

export default Navbar