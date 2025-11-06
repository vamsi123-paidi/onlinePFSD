import React, { useState } from 'react'

const ValidationForm = () => {
    const [email,setEmail] = useState('');
    const [error,setError] = useState('')

    const validata = ()=>{
        if(!email.includes('@')){
            setError("include @")
            return false
        }
        setError("")
        return true
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(validata()){
            alert(`hello !${email}`)
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            {error && <p style={{color:'red'}}>{error}</p>}
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default ValidationForm