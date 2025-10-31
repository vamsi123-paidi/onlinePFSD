import React from 'react'
import "../App.css"

const GrandChild = ({ obj }) => {
    const style = {
        background:"black",
        color:"white"
    }
  return (
    <>
      <img src={obj?.image} alt={obj.name} />
        <p style={style} >this is {obj.name} my age is {obj.age}</p>
    </>
  )
}

export default GrandChild