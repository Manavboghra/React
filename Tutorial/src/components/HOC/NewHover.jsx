import React, { useState } from 'react'
import NewUpdatedFunc from './NewUpdatedFunc'

 const NewHover = ({handleChange,hover}) => {
    return <>
    <button onMouseOver={handleChange}>Hover {hover}</button>
  </>
}

export default NewUpdatedFunc(NewHover, 12)