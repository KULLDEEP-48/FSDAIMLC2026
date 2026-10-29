import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Welcome To react application</h1>
        <nav>
        <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
    <Outlet/>
    </div>
  )
}

export default Home