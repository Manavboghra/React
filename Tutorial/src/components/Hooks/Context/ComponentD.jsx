import React, { useContext } from 'react'
import { UserContext } from './ComponentA'


export const ComponentD = () => {
  const user = useContext(UserContext)
  return (<div className='border-2 px-1 m-6  '>
    <div>ComponentD</div>
    <h1>bye:{user}</h1>
    </div>
  )
}
