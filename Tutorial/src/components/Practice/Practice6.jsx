import React from 'react'
import EnhancedComponents from './Practice5'

const Practice6 = (props) => {
  return (
    <div>{props.count}
        <button onClick={props.handleClick}>+</button>
    </div>
  )
}

export default EnhancedComponents(Practice6)