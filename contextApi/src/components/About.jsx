import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const About = () => {
    const {count,setCount} = useContext(ThemeContext)
  return (
    <div>
        <h1>
            {count}
        </h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default About