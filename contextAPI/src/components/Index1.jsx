import React, {useContext} from 'react'
import userContext from '../context/userContext'

function Index() {
    const a = useContext(userContext)
  return (
    <div>
        hello World !! THis is {a.name} 
    </div>
  )
}

export default Index