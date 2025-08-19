import React from 'react'
import { Outlet } from 'react-router-dom'

const JobLayout = () => {
  return (
    <>
    <div className='text-6xl text-center mt-auto pt-36'>Job Opening</div>
    <p className='text-xl text-center mt-auto pt-12'>list of current job opening in company</p>
    <Outlet/>
    </>
  )
}

export default JobLayout