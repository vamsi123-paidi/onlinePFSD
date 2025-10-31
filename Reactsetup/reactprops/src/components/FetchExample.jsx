import React, { useEffect, useState } from 'react'

const FetchExample = () => {
    const [data,setData] = useState([]);
    const [filtered,setFiltered] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data =await response.json();
            console.log(data)
            setData(data)

            const filtered = data.filter((post)=>post.id<=10);
            setFiltered(filtered)
        }

        fetchData()
    },[])
  return (
    <>
        <ul>
            {filtered ? filtered.map((filtered,index)=>(
                <li key={index}>{filtered.title}</li>
            )):<p>loading....</p>}
        </ul>
    </>
  )
}

export default FetchExample