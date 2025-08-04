import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

export const Practice2 = () => {
    const [count, setCount] = useState(0)
    const prevCount = useRef()

    useEffect(() => {
      prevCount.current = count
    },[count])
    
  return (
    <div>
        <h3>current:{count}</h3>
        <h3>previous:{prevCount.current}</h3>
        <button onClick={()=>{setCount(prev=>prev+1)}}>increment</button>
        <button onClick={()=>{setCount(prev=>prev-1)}}>decrement</button>
    </div>
  )
}
