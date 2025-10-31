import React, { useState } from 'react'

const ObjExample = () => {
    const [obj,setObj] = useState({
        name:"adam",
        age:25
    })
    const handleObj = ()=>{
        setObj({...obj,age:obj.age+1})
    }
  return (
    <>
    <h1>{obj.name}</h1>
    <h3>{obj.age}</h3>
    <button onClick={handleObj}>increase age by 1</button>
    </>
  )
}

export default ObjExample