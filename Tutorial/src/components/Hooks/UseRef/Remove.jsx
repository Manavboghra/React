import React, { useState,useRef } from 'react'

export const Remove = () => {
    const [toggle, setToggle] = useState(true)
    const initRef = useRef(null)
    const handleToggleClick=()=>{
        setToggle(!toggle)
    }
    const handleClick=()=>{
        initRef.current.remove()
    }
  return (
    <div>
        <button onClick={handleToggleClick}>Toggle Text</button>
        <button onClick={handleClick}>Remove Text</button>
        {toggle&&<h1 ref={initRef}>"Hello"</h1>}
    </div>
  )
}
