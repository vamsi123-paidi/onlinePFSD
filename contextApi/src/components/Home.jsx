import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {
    const {theme,setTheme} = useContext(ThemeContext)
  return (
    <>
        <h1>theme is : {theme}</h1>
        <button onClick={()=>setTheme("light")}>Change theme</button>
    </>
  )
}

export default Home