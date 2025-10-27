import React from 'react'
import Child from './components/Child'

const App = () => {
  const obj = {
    name:"adam",
    age:25
  }
  return (
    <>
      <Child obj={obj}/>
    </>
  )
}

export default App