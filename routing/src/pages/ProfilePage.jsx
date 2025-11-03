import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const {id} = useParams()
    const [user,setUser] = useState(null)
    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);
  return (
    <>
        {user ?<h1>{user.name}</h1>:<p>loading....</p>}
    </>
  )
}

export default ProfilePage