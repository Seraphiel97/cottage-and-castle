import React from 'react'
import { Link } from 'react-router-dom'
import * as usersService from '../../utilities/users-service';

export default function Nav({user, updateUser}) {
  
  function handleLogout() {
    usersService.logOut();
    updateUser(null);
  }
  
  return (
    <nav className="flex justify-center items-center bg-charcoal text-white h-10">
      { user ?
      <>
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/services">Services</Link>
        &nbsp; | &nbsp;
        <Link to="/appointment">Request Appointment</Link>
        &nbsp; | &nbsp;
        {user.isAdmin 
        ?
        <Link to="/appointment/history">Manage Appointments</Link>
        :
        <Link to="/appointment/history">Appointment History</Link>
        }
        &nbsp; | &nbsp;
        <Link to="/">Welcome, {user.name}</Link>
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
