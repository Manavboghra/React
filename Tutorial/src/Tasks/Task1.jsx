import React, { useState } from 'react'

export const ColorChanger = () => {
    const [color, setColor] = useState("red")
    const handleClick=(e)=>{
        setColor(e.target.value)
    }
  return (
    <div style={{ 
        backgroundColor: color, 
        width: '100vw', 
        height: '90vh', 
        padding: '20px' // Added padding so buttons are visible
    }}>
        <button onClick={handleClick} style={{backgroundColor:"Thistle"}} value={"Thistle"}>Thistle</button>
        <button onClick={handleClick} style={{backgroundColor:"LightPink"}} value={"LightPink"}>Pink</button>
        <button onClick={handleClick} style={{backgroundColor:"PaleGreen"}} value={"PaleGreen"}>Green</button>
        <button onClick={handleClick} style={{backgroundColor:"Lavender"}} value={"Lavender"}>Gray</button>
        <button onClick={handleClick} style={{backgroundColor:"Cornsilk"}} value={"Cornsilk"}>Gold</button>
    </div>
  )
}
