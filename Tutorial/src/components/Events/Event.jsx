import React from 'react'

function NamingEvent({onPing, children}) {
    return(
        <button onClick={onPing}>{children}</button>
    )
}

export const Event = () => {
  return (
    <>
      <NamingEvent onPing={()=>{alert("uploading...")}}>Upload</NamingEvent>
      <NamingEvent onPing={()=>{alert("searching...")}}>Search</NamingEvent>
    </>
  )
}
