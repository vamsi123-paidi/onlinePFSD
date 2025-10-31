import React, { useState } from 'react'

const TextPrinting = () => {
    const [text,setText] = useState("")
  return (
    <>
    <h1>{text}</h1>
        <input type="text" onChange={(e)=>{setText(e.target.value)}} placeholder='write here to print..' />
    </>
  )
}

export default TextPrinting