import React,{useState} from 'react'

export const useToggle = (initialValue) => {
    const [toggle, setToggle] = useState(initialValue)
    const handleToggle=()=>{
    setToggle(!toggle)
   }
    const handleTrue=()=>{
        setToggle(true)
    }
    const handleFalse=()=>{
        setToggle(false)
    }
    

  return [toggle,{handleFalse,handleTrue,handleToggle}]
}
