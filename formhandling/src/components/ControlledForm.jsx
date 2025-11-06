import React, { useState } from 'react'

const ControlledForm = () => {
    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const [submittedData,setSubmittedData] = useState({})

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(form)
        setSubmittedData(form)
    }

  return (
    <>
        <form>
            <input type="email" name='email' placeholder='write email here ..' value={form.email} onChange={handleChange}/>
            <input type="password" name='password' placeholder='write password here ..' value={form.password} onChange={handleChange}/>
            <button onClick={handleLogin}>login</button>
        </form>
        <h1>{submittedData.email}</h1>
        <h2>{submittedData.password}</h2>
    </>
  )
}

export default ControlledForm