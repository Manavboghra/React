import  { useState, useEffect } from 'react'

export const SetTime = () => {
    const [Time, setTime] = useState(0)
    useEffect(() => {
        console.log("first render of SetTimeOut")
        const interval = setTimeout(()=>{setTime(prev => prev +1)},1000)
      return () => {    
        clearTimeout(interval)
      }
    }, [])
    
  return (
    <div>
        <h1>{Time}</h1>
    </div>
  )
}
