import React from 'react'
import newContext from "./newContext"

function newState(props) {
    const val = {
        "class": "Bachelor VII"
    }
  return (
    <newContext.Provider value={val}>
        {props.children}
    </newContext.Provider>
  )
}

export default newState
