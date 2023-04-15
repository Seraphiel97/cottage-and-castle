import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import Auth from '../Auth/Auth'
import Nav from '../../components/Nav/Nav'
import Home from '../Home/Home'
import Services from '../Services/Services'
import Appointment from '../Appointment/Appointment'
import AppointmentHistory from '../AppointmentHistory/AppointmentHistory'
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
          <Route path="/auth" element={<Auth setUser={setUser}/>} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/appointment/history" element={<AppointmentHistory />} />
        </Routes>
      </>
    </main>
  )
}

export default App
