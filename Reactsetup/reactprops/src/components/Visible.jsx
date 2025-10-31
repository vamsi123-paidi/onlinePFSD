import React, { useState } from 'react'

const Visible = () => {
    const [visisble,setVisible] = useState(false)
    const handleVisibility = ()=>{
        setVisible(!visisble)
    }
  return (
   <>
    <button onClick={handleVisibility}>{visisble?"hide Text":"unhide Text"}</button>
    {visisble && <p>this is visible now</p>}
   </>
  )
}

export default Visible