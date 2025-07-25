import React from 'react'
import { UpdatedFunc } from './UpdatedFunc'

function UserIdentity(props) {
  return (
    <h1>{props.Username}</h1>
  )
}

export default UpdatedFunc(UserIdentity)