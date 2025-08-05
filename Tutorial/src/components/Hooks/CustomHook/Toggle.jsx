import React, { useState } from 'react'
import { useToggle } from './useToggle'

export const Toggle = () => {
   const [toggle, {handleFalse,handleTrue,handleToggle}] = useToggle(false)
  return (
    <div>
        <h1>{toggle.toString()}</h1>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300' onClick={handleToggle}>Toggle</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300' onClick={handleTrue}>True</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300' onClick={handleFalse}>False</button>
    </div>
  )
}
