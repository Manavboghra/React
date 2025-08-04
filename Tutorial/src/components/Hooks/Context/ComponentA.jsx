import React, { createContext, useContext } from 'react'
import { ComponentB } from './ComponentB.jsx'
import { useState } from 'react'
import { PasswordContext } from '../../../Tasks/Task2.jsx'

export const UserContext = createContext()

export const ComponentA = () => {
  const password = useContext(PasswordContext)
  const [user, setUser] = useState("Admin")
  
  return (<div className='border-2 px-1 m-6  '>
    <div >ComponentA</div>
    <h3>{`hello: ${user}`}</h3>
    <h3>{`password: ${password}`}</h3>
    <UserContext.Provider value={user}>
    <ComponentB user={user}/>
    </UserContext.Provider>
    </div>
  )
}
