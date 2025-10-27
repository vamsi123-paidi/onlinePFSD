import React from 'react'
import GrandChild from './GrandChild'

const Child = ({ obj }) => {
  return (
    <>
    <GrandChild obj = {obj}/>
    </>
  )
}

export default Child