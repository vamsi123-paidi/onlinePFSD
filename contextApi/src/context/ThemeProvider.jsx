import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState("dark")
    const [count,setCount] = useState(0)
    
  return (
    <>
        <ThemeContext.Provider value={{theme,setTheme,count,setCount}}>
            {children}
        </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider