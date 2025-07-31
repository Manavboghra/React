import React, { useContext } from 'react'
import { CreateContext } from './CreateContext'

export const Footer = () => {
    const {phone,name} = useContext(CreateContext)

  return (<>
    <h2>Footer</h2>
    <h3>Phone:{phone}</h3>
    <h3>Name:{name}</h3>
    </>
    
  )
}
