import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
    const [count,setCount] = useState(0);

    const doubleCount = useMemo(()=>{
        console.log("calculating...")
        return count*2
    },[count])
  return (
    <>
    <h1>{count}</h1>
    <h3>{doubleCount}</h3>
    <button onClick={()=>setCount(count+1)}>increase</button>
    </>
  )
}

export default UseMemoExample