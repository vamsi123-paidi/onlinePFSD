import React, { useEffect, useState } from 'react'

const ConterUseEffect = () => {
    const [count,setCount]= useState(0)
    const [a,setA]= useState(0)
    const [b,setB]= useState(0)
    useEffect(()=>{
        console.log(`count is ${count}, ${a}, ${b}`)
    },[count,a,b])
  return (
    <>
        <h1>{count},{a},{b}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setA(a+1)}>increment A</button>
        <button onClick={()=>setB(b+1)}>increment B</button>
    </>
  )
}

export default ConterUseEffect