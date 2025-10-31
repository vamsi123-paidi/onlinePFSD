import React, { useEffect } from 'react'

const BasicUseeEffect = () => {
    useEffect(()=>{
        console.log("component mounted")
    },[])
  return (
    <>
        <h1>check console for output</h1>
    </>
  )
}

export default BasicUseeEffect