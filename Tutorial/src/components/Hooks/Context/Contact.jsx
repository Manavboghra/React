import React, { useContext } from 'react'
import { CreateContext } from './CreateContext'

const Contact = () => {
    const {phone} = useContext(CreateContext)
  return (<>
    <h2>Contact</h2>
    <h3>Phone:{phone}</h3>
    </>
  )
}

export default Contact