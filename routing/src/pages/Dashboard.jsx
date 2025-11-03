import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
        <div>
            <nav>
                <Link to='profile'>Profile</Link>
                <Link to='settings'>Settings</Link>
            </nav>
            <Outlet/>
        </div>
    </>
  )
}

export default Dashboard