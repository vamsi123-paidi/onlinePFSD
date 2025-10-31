import React, { useState } from 'react'

const ArrayExample = () => {
    const [item,setItem] = useState(["banana","apple"]);
    const [newitem,setNewItem] = useState("")
    const handleItem= ()=>{
        setItem([...item,newitem])
    }
  return (
    <>
    <div>
        <h1>fruits list:</h1>
        <ul>
           {item.map((item,index)=>(
            <li key={index}>{item}</li>
           ))} 
        </ul>
        <input type="text" onChange={(e)=>setNewItem(e.target.value)}/>
        <button onClick={handleItem}>add item</button>
    </div>
    </>
  )
}

export default ArrayExample