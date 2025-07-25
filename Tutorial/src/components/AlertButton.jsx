import React from 'react'

function AlertMessage({message, children}){
    return(
        <button onClick={()=>alert(message)}>{children}</button>
    )
}

export const AlertButton = () => {
  return (<>
    <AlertMessage message={"Entering....."}>Enter</AlertMessage>
    <AlertMessage message={"finding....."}>find</AlertMessage>
    </>
  )
}
