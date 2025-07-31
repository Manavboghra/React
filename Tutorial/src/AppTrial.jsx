import React from 'react'
import { WithoutMemo } from './components/Hooks/UseMemo/WithoutMemo'
import { Sorting } from './components/Hooks/UseMemo/Sorting'

export const AppTrial = () => {
  return (
    <div>
      <WithoutMemo numbers={[2,1,3,2,45,6]}/> 
      {/* <Sorting numbers={[2,1,3,2,45,6]}/>  */}
    </div>
  )
}
