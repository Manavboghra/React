import  { useState, useEffect } from 'react'

export const Timer = () => {
    const [Time, setTime] = useState(0)
    useEffect(() => {
      console.log("First Render")
      const interval = setInterval(()=>{setTime(prev => prev +1)},1000)
      return () => {
        clearInterval(interval)
      }
    }, [])
    
  return (
    <div>
        <h1>{Time}</h1>
    </div>
  )
}
