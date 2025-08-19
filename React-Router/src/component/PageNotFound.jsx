import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigator = useNavigate()
  return (
    <div>
    <div className='text-6xl text-center mt-auto pt-36'>404-PageNotFound</div>
    <button onClick={()=>navigator("/")}>Go to Home</button>
    </div>
    
  )
}

export default PageNotFound