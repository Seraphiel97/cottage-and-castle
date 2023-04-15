import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Auth from '../Auth/Auth'
import Nav from '../../components/Nav/Nav'
import Home from '../Home/Home'
import Services from '../Services/Services'
import Appointment from '../Appointment/Appointment'
import './App.css'

function App() {
 

  return (
    <main className="App">
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </>
    </main>
  )
}

export default App
