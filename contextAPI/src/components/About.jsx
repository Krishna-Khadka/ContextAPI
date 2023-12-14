import React, { useContext } from 'react'
import newContext from '../context/newState'

function About() {
    const c = useContext(newContext)
  return (
    <>
    <h1>Hello {c.class}</h1>
    </>
  )
}

export default About