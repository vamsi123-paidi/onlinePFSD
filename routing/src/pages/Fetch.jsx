import React, { useEffect } from 'react'

const Fetch = () => {
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch('/data.json');
            const data = await response.json();
            console.log(data)
        }
        fetchData()
    })
  return (
    <div>Fetch</div>
  )
}

export default Fetch