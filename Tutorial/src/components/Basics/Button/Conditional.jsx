import React,{useState} from 'react'


function DisplayData(){
    return(
            <h1>Conditional Rendering</h1>
    )
}

export const Conditional = () => {

    const [isToggle, setIsToggle] = useState(false)

    const handleChange = ()=>{
        setIsToggle(!isToggle)
    }

  return (<>
  <button onClick={handleChange}>Ping Me</button>
  {isToggle &&<DisplayData/>}
  </>
  )
}
