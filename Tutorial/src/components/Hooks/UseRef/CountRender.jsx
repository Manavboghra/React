import React, { useRef, useState, useEffect } from 'react'

export const CountRender = () => {
    const [count, setCount] = useState(0)
    const reRender = useRef(0)
    useEffect(() => {
         reRender.current = reRender.current + 1

    }, [reRender.current])
    
  return (
    <div>
        <button onClick={()=>setCount(count=>count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count=>count-1)}>-</button>
        <h1>ReRender-Count:{reRender.current}</h1>
    </div>
  )
}
