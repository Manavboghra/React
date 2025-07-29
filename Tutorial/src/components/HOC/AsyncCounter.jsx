import React, { useState } from 'react'

export const AsyncCounter = () => {
    const [counter,setCounter] = useState(0)
    const [text,setText] = useState("")
    const handelePrevClick =()=>{
        setTimeout(()=>{setCounter(prev=>prev-1)},1000) //// if we use setCounter(counter+1) then the state is updates only once, while multiple clicking
    }

     const handeleNexrClick =()=>{
        setTimeout(()=>{setCounter(prev=>prev+1)},1000)
    }


    // const handleText =()=>{
    //     setTimeout((e)=>{setText(e.target.value)},1000)
    // }

    const handleText =(e)=>{
        const event = e.target.value;

        setTimeout(()=>{setText(event)},1000)
    }

  return (
    <>
    <h1>{counter}</h1>
    <button onClick={handeleNexrClick}>Next</button>
    <button onClick={handelePrevClick}>Prev</button>
    <input type="text"
      onChange={handleText}
      placeholder="Type something..." />First Name
    <h1>{text}</h1>
    </>
  )
}
