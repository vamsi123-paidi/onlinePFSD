import React from 'react'
import "../App.css"

const GrandChild = ({ obj }) => {
    const style = {
        background:"black",
        color:"white"
    }
  return (
    <>
        <p style={style} >this is {obj.name} my age is {obj.age}</p>
    </>
  )
}

export default GrandChild