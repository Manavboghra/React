import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const navigation = useNavigate()
    const error = useRouteError()
  return (
    <div className='flex flex-col items-center  mt-27 gap-4'>
        <div className='text-3xl text-center '>{error.message}</div>
    <button onClick={()=>navigation("/")} className='bg-gray-400  border-2 p-2'>Go to Home Page</button>
    </div>

  )
}

export default Error