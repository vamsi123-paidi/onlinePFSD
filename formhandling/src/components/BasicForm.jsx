import React, { useState } from 'react'

const BasicForm = () => {
    const [data,setData] = useState('');
    const [submittedData,setSubmittedData] = useState('')
    const handleSubmit = ()=>{
        alert(`hello ! ${data} `)
        setSubmittedData(data)
    }
  return (
    <>
        <h1>{data}</h1>
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)}  placeholder='write username..'/>
        <button onClick={handleSubmit}>submit</button>
        <h1>{submittedData}</h1>
    </>
  )
}

export default BasicForm