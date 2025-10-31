import React, { useCallback, useState } from 'react'

const UseCallbackExample = () => {
    const [count,setCount] = useState(0)
    
    const increment = useCallback(()=>{
        console.log("cls")
        setCount((prev)=>prev+1)
    },[]) //it will run only once 
  return (
    <>
        <h1>{count}</h1>
        <button onClick={increment}>increase</button>
    </>
  )
}

export default UseCallbackExample