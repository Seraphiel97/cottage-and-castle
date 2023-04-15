import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({user, updateUser}) {
  
  function handleLogout() {
    userService.logOut();
    updateUser(null);
  }
  
  return (
    <nav>
      { user ?
      <>
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/services">Services</Link>
        &nbsp; | &nbsp;
        <Link to="/appointment">Request Appointment</Link>
        &nbsp; | &nbsp;
        <Link to="/appointment/history">Appointment History</Link>
        &nbsp; | &nbsp;
        <p>Welcome, {user.name}</p>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogout}>Logout</Link>
      </>
      :
      <>
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/services">Services</Link>
        &nbsp; | &nbsp;
        <Link to="/appointment">Request Appointment</Link>
        &nbsp; | &nbsp;
        <Link to="/auth">Login</Link>
      </>
      }
    </nav>
  )
}
