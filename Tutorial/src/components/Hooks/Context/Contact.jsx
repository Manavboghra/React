import React, { useContext } from 'react'
import { CreateContext } from './CreateContext'
import { DataContext, useTheme } from './DataContext'

const Contact = () => {
    const {phone} = useContext(CreateContext)
    const theme = useContext(useTheme)
  return (<>
    <h2>Contact</h2>
    <h3>Phone:{phone}</h3>
    <h3>Theme:{theme}</h3>
    </>
  )
}

export default Contact