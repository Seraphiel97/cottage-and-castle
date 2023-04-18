import React from 'react'
import { Link } from 'react-router-dom'
import * as usersService from '../../utilities/users-service';
import './nav.css'

export default function Nav({user, updateUser}) {
  
  function handleLogout() {
    usersService.logOut();
    updateUser(null);
  }
  
  return (
    <nav className="container mx-auto">
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
        {user.isAdmin ?
        <Link to="/admin">Welcome, {user.name}</Link>
        :
        <Link to="/">Welcome, {user.name}</Link>
        }
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogout}>Logout</Link>
      </>
      :
      <>
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/services">Services</Link>
        &nbsp; | &nbsp;
        <Link to="/auth">Request Appointment</Link>
        &nbsp; | &nbsp;
        <Link to="/auth">Login</Link>
      </>
      }
    </nav>
  )
}
