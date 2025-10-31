import React, { useRef } from 'react'

const BasicExUseRef = () => {
    const inputRef = useRef();
    const handleFocus = ()=>{
        inputRef.current.focus()
    }

  return (
    <>
        <input ref={inputRef} type="text" />
        <input ref={inputRef} type="text" />
        <button onClick={handleFocus}>Focus</button>
    </>
  )
}

export default BasicExUseRef