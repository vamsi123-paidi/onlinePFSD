import React, { useState } from 'react'

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({
        name: "",
        age: ""
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`name:${data.name} age :${data.age}`)
    }

    const next = () => setStep(step + 1);
    const prev = () => setStep(step - 1)


    return (
        <>
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <>
                        <input type='text' name='name' value={data.name} onChange={handleChange} placeholder='name here'/>
                        <button onClick={next}>Next</button>
                    </>
                )}
                {step === 2 && (
                    <>
                        <input type='text' name='age' value={data.age} onChange={handleChange} placeholder='age here'/>
                        <button onClick={prev}>prev</button>
                        <button type='submit'>submit</button>

                    </>
                )}
            </form>

        </>
    )
}

export default MultiStepForm