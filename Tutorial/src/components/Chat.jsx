import React from 'react'

export default function createconnection(roomID, url ) {
  return {
    connected(){
      console.log(`Connected to room ${roomID} at ${url}`)
    },
    disconnected(){
      console.log(`Disconnected to room ${roomID} at ${url}`)
    }
  }
}
