import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigator = useNavigate()
  return (
     <div className='flex flex-col items-center  mt-27 gap-4'>
    <div className='text-6xl text-center '>404-Page Not Found</div>
    <button onClick={()=>navigator("/")} className='bg-gray-400  border-2 p-2'>Go to Home Page</button>
    </div>

    
  )
}

export default PageNotFound