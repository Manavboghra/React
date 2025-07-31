import React, { useMemo, useState } from 'react'
import { NumArray } from './NumArray'

export const FindItems = () => {
    const[count, setCount] = useState(0)
    const[items] = useState(NumArray)

    const searchItem = useMemo(()=>items.find((item)=>item.isSelect),[items])
  return (
    <div>
        <button onClick={()=>{setCount(prev=>prev+1)}}>{count}</button>
        <h1>Selected-Item :{searchItem.id}</h1>
    </div>
  )
}
