import React, { useState } from 'react'

export const Practice3 = () => {
    const [toggle, setToggle] = useState("white")
  return (
    <div style={{backgroundColor:`${toggle}`}}>
        <input type="checkbox" checked={toggle === 'black'} onChange={(e)=>{setToggle(e.target.checked? 'black' : 'white')}}/>Theme
    </div>
  )
}
