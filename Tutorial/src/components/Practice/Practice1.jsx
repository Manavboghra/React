import React, { useMemo, useState } from 'react'


export const Practice1 = () => {
    const [count,setCount] =useState(0)
    const [nums, setNums] = useState(0)
    const handleClick=()=>{
        setCount(prev=>prev+1)
    }
    function Mul(num){
        console.log("reRender....")

        return Math.pow(num,2)
    }
    const NumberProps = useMemo(()=>Mul(nums),[nums])
  return (
    <div>
        <button onClick={handleClick}>{count}</button>
        <input type="number" onChange={(e)=>{setNums(e.target.value)}}/>
        <h1>{NumberProps}</h1>
    </div>
  )
}
