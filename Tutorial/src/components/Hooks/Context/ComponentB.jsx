import React from 'react'
import { ComponentC } from './ComponentC.jsx'

export const ComponentB = () => {
  return (<div className='border-2 px-1 m-6  '>
    <div >ComponentB</div>
    <ComponentC/>
    </div>
  )
}
