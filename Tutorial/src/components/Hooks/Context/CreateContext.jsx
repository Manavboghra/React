import React, { createContext } from 'react'

export const CreateContext = createContext()

const ShareContact = (props) => {
    const phone = "+91 982310902"
    const name= "Alzari"
  return (
    <div>
        <CreateContext.Provider value={{phone,name}}>
            {props.children}
        </CreateContext.Provider>
    </div>
  )
}

export default ShareContact
