import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import Auth from '../Auth/Auth'
import Nav from '../../components/Nav/Nav'
import Home from '../Home/Home'
import Services from '../Services/Services'
import Appointment from '../Appointment/Appointment'
import AppointmentHistory from '../AppointmentHistory/AppointmentHistory'
import AdminControl from '../AdminControl/AdminControl'
import './App.css'

function App() {
 
  const [user, setUser] = useState(getUser())

  function updateUser(userState){
    setUser(userState)
  }

  return (
    <main className="App">
      <>
        <Nav user={user} updateUser={updateUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/auth" element={<Auth setUser={setUser} user={user}/>} />
          <Route path="/appointment" element={<Appointment user={user}/>} />
          <Route path="/appointment/history" element={<AppointmentHistory user={user}/>} />
        </Routes>
      </>
    </main>
  )
}

export default App
